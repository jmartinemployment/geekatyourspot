import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SCHEDULER_HERO_LINK_ID } from "@/components/shared/scheduler/scheduler-id";
import { BreadcrumbTrail } from "@/components/shared/breadcrumb-trail";
interface HeroSectionProps {
  title: string;
  summary: string;
  /** The desktop hero icon; the tools index uses the screwdriver and wrench. */
  icon?: IconDefinition;
}

export default async function ToolsHeroSection({title, summary, icon = faScrewdriverWrench}:HeroSectionProps) {
  return (
    <>
      <header className="min-h-screen bg-[#0B162A] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <BreadcrumbTrail current={title} withJsonLd />
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
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <BreadcrumbTrail current={title} />
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                { title }
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">
                { summary}
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
              <FontAwesomeIcon
                icon={icon}
                className="text-[#C83803]"
                style={{ width: "16rem", height: "16rem" }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
