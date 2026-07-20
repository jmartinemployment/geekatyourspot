// import HeroSection from "@/components/home/hero-section";
import CloneYourselfSection from "@/components/home/clone-yourself";
import  TheMethodologySection  from "@/components/home/the-methodology";
import SeamlessIntegrationsSection from "@/components/home/seamless-integrations";
import { UseCasesSection } from "@/components/home/use-cases";
// import { geekApiService, POST_TYPE } from "@/services/geekApiService";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting for Small Business | Delray Beach, South Florida",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  // const useCasesData = await geekApiService.listPublishedBlogPosts("en", POST_TYPE.pillar);

  return (
    <> 
      {/* <HeroSection />  */}
      <CloneYourselfSection />
      <UseCasesSection /> 
      <TheMethodologySection /> 
      <SeamlessIntegrationsSection /> 
    </> 
  ); 
}