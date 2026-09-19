import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/Button";
import {
  BRAND,
  addressLines,
  mailtoHref,
  telHref,
  whatsappHref,
} from "@/config/brand";
import { FAQS } from "@/config/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Tell us where your funnel is leaking. ${BRAND.name} replies within one working day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            A diagnosis, not a <span className="italic text-accent">pitch</span>
          </>
        }
        intro="Send us account access and a month of lead data before the call. You will leave it with the three things costing you the most, whether or not you hire us."
      />

      <Container className="pb-20 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <aside className="flex flex-col gap-10 lg:pt-2">
              <div>
                <h2 className="eyebrow">Prefer to talk</h2>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  <li>
                    <TextLink href={whatsappHref}>WhatsApp us</TextLink>
                  </li>
                  <li>
                    <a href={telHref} className="text-muted transition-colors hover:text-fg">
                      {BRAND.phone.display}
                    </a>
                  </li>
                  <li>
                    <a href={mailtoHref} className="text-muted transition-colors hover:text-fg">
                      {BRAND.email.general}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="eyebrow">New business</h2>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  Pitches, RFPs and partnership enquiries:{" "}
                  <a
                    href={`mailto:${BRAND.email.newBusiness}`}
                    className="text-accent transition-colors hover:text-accent-hi"
                  >
                    {BRAND.email.newBusiness}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="eyebrow">Studio</h2>
                <address className="mt-6 text-sm not-italic leading-relaxed text-muted">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>

      {BRAND.booking.url && (
        <Section eyebrow="Or book directly" heading={BRAND.booking.label} rule>
          <Reveal>
            <div className="overflow-hidden rounded-md border border-line-soft bg-surface">
              <iframe
                src={BRAND.booking.url}
                title={BRAND.booking.label}
                loading="lazy"
                className="h-[42rem] w-full border-0"
              />
            </div>
          </Reveal>
        </Section>
      )}

      <Section eyebrow="Questions" heading="Before you write" containerSize="narrow" rule>
        <dl className="rule-top">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 50}>
              <div className="border-b border-line-soft py-7">
                <dt className="font-display text-xl leading-snug text-fg text-pretty">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted text-pretty">
                  {faq.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>
    </>
  );
}
