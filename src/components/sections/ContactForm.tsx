"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button, ArrowRight } from "@/components/ui/Button";
import { initialContactState, submitEnquiry } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

const inputClasses =
  "w-full rounded-sm border border-line-soft bg-surface px-4 py-3.5 text-sm text-fg placeholder:text-subtle transition-colors duration-300 focus:border-accent/60 focus:outline-none";

const BUDGETS = [
  "Under ₹1L / month",
  "₹1–3L / month",
  "₹3–8L / month",
  "₹8L+ / month",
  "Project based",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending…" : "Send enquiry"}
      {!pending && <ArrowRight />}
    </Button>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">{label}</span>
      {children}
      {error && <span className="text-xs text-[var(--brand-negative)]">{error}</span>}
    </label>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialContactState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-accent/30 bg-surface p-10 text-center"
      >
        <p className="font-display text-2xl text-accent">Enquiry received</p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" error={state.fieldErrors?.name}>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={cn(inputClasses, state.fieldErrors?.name && "border-[var(--brand-negative)]")}
          />
        </Field>

        <Field label="Work email *" error={state.fieldErrors?.email}>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(inputClasses, state.fieldErrors?.email && "border-[var(--brand-negative)]")}
          />
        </Field>

        <Field label="Company">
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            className={inputClasses}
          />
        </Field>

        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Monthly budget">
        <select name="budget" className={cn(inputClasses, "appearance-none")} defaultValue="">
          <option value="">Prefer not to say</option>
          {BUDGETS.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </Field>

      <Field label="What are you trying to fix? *" error={state.fieldErrors?.message}>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Where the funnel is leaking, what you have tried, what success looks like."
          className={cn(
            inputClasses,
            "resize-y",
            state.fieldErrors?.message && "border-[var(--brand-negative)]",
          )}
        />
      </Field>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-[var(--brand-negative)]">
          {state.message}
        </p>
      )}

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SubmitButton />
        <p className="text-xs leading-relaxed text-subtle">
          We reply within one working day. No mailing list, no follow-up sequence.
        </p>
      </div>
    </form>
  );
}
