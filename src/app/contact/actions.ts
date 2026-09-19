"use server";

import { BRAND } from "@/config/brand";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactState: ContactState = { status: "idle" };

const MAX = { name: 120, email: 200, company: 160, phone: 40, message: 4000 } as const;

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const field = (data: FormData, key: string, limit: number) =>
  String(data.get(key) ?? "")
    .trim()
    .slice(0, limit);

/**
 * Handles the enquiry form.
 *
 * Email delivery uses the Resend REST API directly — no SDK, so the server
 * bundle stays small. Required environment variables:
 *
 *   RESEND_API_KEY     – from resend.com
 *   CONTACT_TO_EMAIL   – optional, defaults to BRAND.email.general
 *   CONTACT_FROM_EMAIL – optional, must be a verified Resend sender
 *
 * Without RESEND_API_KEY the enquiry is logged to the server console in
 * development, and rejected with a visible error in production so that leads
 * are never silently dropped.
 */
export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — real people never fill a hidden field.
  if (field(formData, "website", 100)) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  const name = field(formData, "name", MAX.name);
  const email = field(formData, "email", MAX.email);
  const company = field(formData, "company", MAX.company);
  const phone = field(formData, "phone", MAX.phone);
  const budget = field(formData, "budget", 60);
  const message = field(formData, "message", MAX.message);

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please tell us your name.";
  if (!isEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "A sentence or two is plenty.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || BRAND.email.general;
  const from = process.env.CONTACT_FROM_EMAIL || `${BRAND.name} <onboarding@resend.dev>`;

  const body = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    company && `Company: ${company}`,
    phone && `Phone:   ${phone}`,
    budget && `Budget:  ${budget}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] RESEND_API_KEY is not set — enquiry was not delivered.");
      return {
        status: "error",
        message: `Our form is temporarily unavailable. Please email ${BRAND.email.general} or message us on WhatsApp.`,
      };
    }

    console.warn("[contact] RESEND_API_KEY not set. Enquiry logged instead of sent:\n" + body);
    return { status: "success", message: "Thanks — we'll be in touch within one working day." };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
        text: body,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend rejected the request:", response.status, await response.text());
      return {
        status: "error",
        message: `We couldn't send that. Please email ${BRAND.email.general} directly.`,
      };
    }

    return { status: "success", message: "Thanks — we'll be in touch within one working day." };
  } catch (error) {
    console.error("[contact] Delivery failed:", error);
    return {
      status: "error",
      message: `We couldn't send that. Please email ${BRAND.email.general} directly.`,
    };
  }
}
