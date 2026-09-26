import { Beyond } from "@/components/home/Beyond";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Skyline } from "@/components/home/Skyline";
import { Spotlight } from "@/components/home/Spotlight";
import { Statement } from "@/components/home/Statement";
import { FinalCall } from "@/components/sections/FinalCall";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Skyline />
      <Spotlight />
      <Beyond />
      <Process />
      <FinalCall />
    </>
  );
}
