"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button, ArrowRight } from "@/components/ui/Button";
import { initialContactState, submitEnquiry } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

/* Square-cornered fields with a drawn border — the form is a document, not a card. */
const inputClasses =
  "w-full border border-line bg-paper px-3.5 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-ink focus:outline-none";

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
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="type-note text-muted">
        {label}
      </label>
      {children}
      {error && (
        <span className="type-note text-[var(--brand-negative)]">{error}</span>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialContactState);

  if (state.status === "success") {
    return (
      <div role="status" className="corner-ticks border border-ink bg-paper p-10">
        <p className="type-note text-muted">Enquiry logged</p>
        <p className="type-title mt-4 text-2xl text-accent-deep">Received</p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="border border-ink bg-ground p-6 sm:p-8" noValidate>
      <div className="type-note flex flex-wrap justify-between gap-x-6 gap-y-2 border-b border-line pb-3 text-muted">
        <span>Enquiry form</span>
        <span>Fields marked * required</span>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" htmlFor="name" error={state.fieldErrors?.name}>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              className={cn(inputClasses, state.fieldErrors?.name && "border-[var(--brand-negative)]")}
            />
          </Field>

          <Field label="Work email *" htmlFor="email" error={state.fieldErrors?.email}>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className={cn(inputClasses, state.fieldErrors?.email && "border-[var(--brand-negative)]")}
            />
          </Field>

          <Field label="Company" htmlFor="company">
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Company name"
              className={inputClasses}
            />
          </Field>

          <Field label="Phone" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91"
              className={inputClasses}
            />
          </Field>
        </div>

        <Field label="Monthly budget" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            className={cn(inputClasses, "appearance-none")}
            defaultValue=""
          >
            <option value="">Prefer not to say</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="What are you trying to fix? *"
          htmlFor="message"
          error={state.fieldErrors?.message}
        >
          <textarea
            id="message"
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

        <div className="mt-2 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <SubmitButton />
          <p className="type-note max-w-[22rem] leading-relaxed text-muted">
            We reply within one working day. No mailing list, no follow-up sequence.
          </p>
        </div>
      </div>
    </form>
  );
}
