import Community from "@/components/Community";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Meet from "@/components/Meet";
import OgPumpions from "@/components/OgPumpions";
import Peak from "@/components/Peak";
import Pumpmap from "@/components/Pumpmap";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero />
   <Meet />
   <Peak />
   <Community />
   <Pumpmap />
   <OgPumpions />
   <Faq />
   </>
  );
}
