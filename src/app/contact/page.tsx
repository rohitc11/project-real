import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/ContactForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE, emailUrl, phoneUrl, whatsappUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you’re building.",
};

export default function ContactPage() {
  return (
    <section className="shell grid gap-16 pt-36 pb-28 md:grid-cols-12 md:pt-48 md:pb-40">
      <div className="md:col-span-5">
        <p className="caps animate-fade-up text-accent-text">Contact</p>
        <h1 className="display mt-6 animate-fade-up text-[clamp(3.5rem,8vw,7.5rem)] [animation-delay:150ms]">
          Let’s talk.
        </h1>
        <p className="mt-6 animate-fade-up text-lg text-steel [animation-delay:300ms] md:text-xl">
          Tell us what you’re building.
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap gap-3 [animation-delay:450ms]">
          <ButtonLink href={whatsappUrl}>WhatsApp</ButtonLink>
          <ButtonLink href={emailUrl} variant="outline">
            Email
          </ButtonLink>
        </div>
        <a
          href={phoneUrl}
          className="mt-6 inline-block animate-fade-up text-steel transition-colors [animation-delay:500ms] hover:text-ink"
        >
          {SITE.phone}
        </a>
      </div>

      <div className="animate-fade-up [animation-delay:300ms] md:col-span-6 md:col-start-7">
        <ContactForm />
      </div>
    </section>
  );
}
