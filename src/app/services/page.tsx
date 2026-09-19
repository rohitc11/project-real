import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Search, performance media, social and video, listing production, websites, CRM and brand — run as one funnel for real estate and beyond.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        sheet="A-00"
        eyebrow="Services"
        title={
          <>
            Channels are easy. <span className="italic text-accent">Funnels</span> are the
            work.
          </>
        }
        intro="We take responsibility for the whole path — the search a buyer runs at midnight, the ad they scroll past twice, the page they finally fill in, and the four minutes that decide whether anyone calls them back."
      />
      <ServicesOverview />
      <ProcessOverview />
      <CtaBand heading="Which part of yours is leaking?" />
    </>
  );
}
