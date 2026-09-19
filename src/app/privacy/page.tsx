import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/LegalPage";
import { BRAND, mailtoHref } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${BRAND.name} collects, uses and protects personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage sheet="Z-01" title="Privacy policy" updated="September 2026">
      <h2>What we collect</h2>
      <p>
        When you submit the enquiry form we collect the name, email address, company,
        phone number, budget range and message you provide. We also collect standard
        analytics data about how the site is used, such as pages viewed, referring
        source and approximate location derived from IP address.
      </p>

      <h2>Why we collect it</h2>
      <p>
        Enquiry details are used solely to respond to your enquiry and, if we begin
        working together, to administer the engagement. Analytics data is used to
        improve the site. We do not sell personal information, and we do not add
        enquirers to a marketing list without explicit consent.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use third-party processors to operate the site and communicate with you,
        including our hosting provider, our email delivery provider and our analytics
        provider. Each processes data on our instructions only. Where we run advertising
        or measurement on behalf of a client, that data is processed under the client&rsquo;s
        own agreements, not ours.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiry records are retained for 24 months from last contact unless a commercial
        relationship requires longer. Analytics data is retained according to our
        analytics provider&rsquo;s default retention period.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of the personal information
        we hold about you, and you may object to processing. Write to{" "}
        <a href={mailtoHref}>{BRAND.email.general}</a> and we will respond within 30 days.
      </p>

      <h2>Cookies</h2>
      <p>
        The site uses cookies that are strictly necessary for it to function, and
        analytics cookies that help us understand usage. You can block cookies in your
        browser settings; the site will continue to work.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy should go to <a href={mailtoHref}>{BRAND.email.general}</a>,
        addressed to {BRAND.legalName}.
      </p>
    </LegalPage>
  );
}
