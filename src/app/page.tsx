import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SelectedWork />
      <ProcessOverview />
      <Industries />
      <Testimonials />
      <CtaBand />
    </>
  );
}
