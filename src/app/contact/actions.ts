"use server";

import { SERVICES } from "@/config/services";
import { SITE } from "@/config/site";

type Field = "name" | "contact";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  /** Echoed back so a failed submit doesn't wipe what was typed. */
  values?: { name: string; contact: string; needs: string[]; message: string };
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string) => /^[+\d\s().-]+$/.test(v) && v.replace(/\D/g, "").length >= 7;

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real people never see this field.
  if (formData.get("website")) return { status: "sent" };

  const serviceNames = new Set(SERVICES.map((s) => s.name));
  const values = {
    name: String(formData.get("name") ?? "").trim().slice(0, 120),
    contact: String(formData.get("contact") ?? "").trim().slice(0, 160),
    needs: formData.getAll("needs").map(String).filter((n) => serviceNames.has(n)),
    message: String(formData.get("message") ?? "").trim().slice(0, 4000),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Please add your name.";
  if (!isEmail(values.contact) && !isPhone(values.contact)) {
    errors.contact = "Add an email or phone number.";
  }
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const text = [
    `Name: ${values.name}`,
    `Contact: ${values.contact}`,
    `Needs: ${values.needs.join(", ") || "—"}`,
    "",
    values.message || "(no message)",
  ].join("\n");

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured — enquiry would have been sent:\n" + text);
      return { status: "sent" };
    }
    return {
      status: "error",
      message: "Our form isn’t connected yet. Please WhatsApp or email us.",
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO.split(",").map((s) => s.trim()),
        subject: `New enquiry from ${values.name} — ${SITE.name}`,
        text,
        ...(isEmail(values.contact) && { reply_to: values.contact }),
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[contact] Failed to send enquiry", err);
    return {
      status: "error",
      message: "Something went wrong. Please WhatsApp or email us.",
      values,
    };
  }

  return { status: "sent" };
}
