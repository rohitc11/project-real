"use client";

import { useActionState } from "react";

import { sendEnquiry, type ContactState } from "@/app/contact/actions";
import { Arrow } from "@/components/ui/ButtonLink";
import { SERVICES } from "@/config/services";
import { cn } from "@/lib/cn";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-3 block w-full border-0 border-b border-haze bg-transparent px-0 py-3 text-xl outline-none transition-colors placeholder:text-steel/50 focus:border-glass focus-visible:outline-none";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);

  if (state.status === "sent") {
    return (
      <div role="status" className="animate-fade-up border-t border-haze pt-10">
        <p className="caps text-glass">Sent</p>
        <p className="display mt-6 text-[clamp(2.5rem,5vw,4rem)]">Thanks — we’ll be in touch.</p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={formAction} noValidate className="flex flex-col gap-10">
      <div>
        <label htmlFor="name" className="caps text-steel">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          defaultValue={v?.name}
          aria-invalid={!!state.errors?.name}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
          className={fieldClass}
        />
        {state.errors?.name && (
          <p id="name-error" className="mt-2 text-sm text-glass">
            {state.errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="caps text-steel">
          Email or phone
        </label>
        <input
          id="contact"
          name="contact"
          autoComplete="email"
          required
          defaultValue={v?.contact}
          aria-invalid={!!state.errors?.contact}
          aria-describedby={state.errors?.contact ? "contact-error" : undefined}
          className={fieldClass}
        />
        {state.errors?.contact && (
          <p id="contact-error" className="mt-2 text-sm text-glass">
            {state.errors.contact}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="caps text-steel">What do you need?</legend>
        <div className="mt-5 flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <label key={service.slug} className="cursor-pointer">
              <input
                type="checkbox"
                name="needs"
                value={service.name}
                defaultChecked={v?.needs.includes(service.name)}
                className="peer sr-only"
              />
              <span className="block rounded-full border border-haze px-4 py-2 transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-cloud peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-glass hover:border-ink">
                {service.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="caps text-steel">
          Message <span className="normal-case tracking-normal text-steel/70">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          defaultValue={v?.message}
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      {/* Honeypot for bots — hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 font-medium text-cloud transition-colors duration-300 hover:bg-glass disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send"}
          <Arrow className="group-hover:translate-x-1" />
        </button>
        {state.message && (
          <p role="alert" className="text-glass">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
