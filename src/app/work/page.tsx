import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from launch campaigns, organic search programmes and CRM recovery work — reported in site visits and bookings, not impressions.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        sheet="B-00"
        eyebrow="Work"
        title={
          <>
            Reported in bookings, not{" "}
            <span className="italic text-accent">impressions</span>
          </>
        }
        intro="Every engagement below is measured at the revenue event. Where a number is commercially sensitive we show the direction and the method instead of the absolute figure."
      />
      <SelectedWork />
      <Testimonials />
      <CtaBand />
    </>
  );
}
