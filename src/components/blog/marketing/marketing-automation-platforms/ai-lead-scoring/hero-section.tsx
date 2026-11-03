import { GlossaryLink } from "@/components/glossary/glossary-link";
import { SCHEDULER_HERO_LINK_ID } from "@/components/shared/scheduler/scheduler-id";
import { BreadcrumbTrail } from "@/components/shared/breadcrumb-trail";

export default function HeroSection() {
  const title = "AI Lead Scoring";
  const summary = <>Stop chasing every lead. Use <GlossaryLink slug="lead-scoring">AI-driven lead scoring</GlossaryLink> to unify fragmented data, rank every prospect by real buying intent, and focus your small business team on leads most likely to convert.</>;

  return (
    <>
      <header className="min-h-screen bg-[#0B162A] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] place-items-center">
            <BreadcrumbTrail current={title} withJsonLd />
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                {title}
              </h1>
              <p className="pt-3 text-xl text-white shadow-text">
                {summary}
              </p>
              <div className="pt-6">
                <a href="#consultationAppointment2xl"
                  id={SCHEDULER_HERO_LINK_ID}
                  className="btn btn-primary"
                >
                  Get Your Free AI Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[#0B162A] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 grid-rows-[auto_1fr] place-items-center gap-x-4">
            <BreadcrumbTrail current={title} />
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                {title}
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">
                {summary}
              </p>
              <div className="pt-6">
                <a href="#consultationAppointment2xl"
                  id={`${SCHEDULER_HERO_LINK_ID}-lg`}
                  className="btn btn-primary"
                >
                  Get Your Free AI Assessment
                </a>
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
