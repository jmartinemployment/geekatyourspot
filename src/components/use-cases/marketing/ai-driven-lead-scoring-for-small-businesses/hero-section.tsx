import Link from "next/link";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HeroSection() {
  const title = "AI-Driven Lead Scoring for Small Businesses";
  const summary = <>Stop chasing every lead. Use <GlossaryLink slug="lead-scoring" className="text-white hover:underline">AI-driven lead scoring</GlossaryLink> to unify fragmented data, rank every prospect by real buying intent, and focus your small business team on leads most likely to convert.</>;

  return (
    <>
      <header className="min-h-screen bg-[#0B162A] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                {title}
              </h1>
              <p className="pt-3 text-xl text-white shadow-text">
                {summary}
              </p>
              <div className="pt-6">
                <Link
                  id={gtmLinkIdFromHref("#consultationAppointment2xl", "hero-assessment")}
                  href="#consultationAppointment2xl"
                  className="btn btn-primary"
                >
                  Get Your Free AI Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[#0B162A] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                {title}
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">
                {summary}
              </p>
              <div className="pt-6">
                <Link
                  id={gtmLinkIdFromHref("#consultationAppointment2xl", "hero-assessment")}
                  href="#consultationAppointment2xl"
                  className="btn btn-primary"
                >
                  Get Your Free AI Assessment
                </Link>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen flex-col">
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
