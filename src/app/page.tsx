import HeroSection from "@/components/home/hero-section";
import CloneYourselfSection from "@/components/home/clone-yourself";
import  TheMethodologySection  from "@/components/home/the-methodology";
import SeamlessIntegrationsSection from "@/components/home/seamless-integrations";
import { UseCasesSection } from "@/components/home/use-cases";
// import { geekApiService, POST_TYPE } from "@/services/geekApiService";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
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
      <Navbar />
      <HeroSection />
      <CloneYourselfSection />
      <UseCasesSection />
      <TheMethodologySection />
      <SeamlessIntegrationsSection />
      <Footer />
    </>
  );
}