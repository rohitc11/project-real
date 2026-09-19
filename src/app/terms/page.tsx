import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/LegalPage";
import { BRAND, mailtoHref } from "@/config/brand";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `The terms governing use of the ${BRAND.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage sheet="Z-02" title="Terms of use" updated="September 2026">
      <h2>Acceptance</h2>
      <p>
        By using this website you agree to these terms. If you do not agree, please stop
        using the site.
      </p>

      <h2>The content on this site</h2>
      <p>
        Everything published here is provided for general information. It is not advice,
        and it does not constitute an offer capable of acceptance. Case study figures
        describe past engagements under specific conditions and are not a prediction or
        guarantee of results in any other engagement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site design, copy, imagery and marks are owned by {BRAND.legalName} or used
        under licence. You may view and print pages for your own reference. Reproducing,
        republishing or using any part of the site commercially requires written
        permission.
      </p>

      <h2>Client materials</h2>
      <p>
        Client names, marks and project imagery shown in case studies remain the property
        of their respective owners and appear with permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        We link to third-party sites and embed third-party tools such as scheduling and
        messaging services. We do not control them and are not responsible for their
        content or their handling of your data.
      </p>

      <h2>Liability</h2>
      <p>
        To the fullest extent permitted by law, {BRAND.legalName} is not liable for any
        indirect or consequential loss arising from use of this site. Nothing in these
        terms limits liability that cannot lawfully be limited.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of {BRAND.address.country}, and the courts of{" "}
        {BRAND.address.city} have exclusive jurisdiction over any dispute.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={mailtoHref}>{BRAND.email.general}</a>.
      </p>
    </LegalPage>
  );
}
