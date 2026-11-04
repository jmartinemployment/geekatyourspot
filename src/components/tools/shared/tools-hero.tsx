import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SCHEDULER_HERO_LINK_ID } from "@/components/shared/scheduler/scheduler-id";
import { BreadcrumbTrail } from "@/components/shared/breadcrumb-trail";

interface ToolsHeroSectionProps {
  title: string;
  summary: string;
  heroImage?: { src: string; alt: string; width?: number; height?: number };
  icon?: IconDefinition;
}

export default async function ToolsHeroSection({
  title,
  summary,
  heroImage,
  icon = faScrewdriverWrench,
}: Readonly<ToolsHeroSectionProps>) {
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
                <a
                  href="#consultationAppointment2xl"
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
                <a
                  href="#consultationAppointment2xl"
                  id={`${SCHEDULER_HERO_LINK_ID}-lg`}
                  className="btn btn-primary"
                >
                  Get Your Free AI Assessment
                </a>
              </div>
            </div>
            {heroImage ? (
              <div className="col-span-5 flex items-center justify-center min-h-screen">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width || 800}
                  height={heroImage.height || 400}
                  className="w-full h-auto"
                  priority
                  sizes="(min-width: 1024px) 42vw, 1px"
                />
              </div>
            ) : (
              <div className="col-span-5 flex items-center justify-center min-h-screen">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-[#C83803]"
                  style={{ width: "16rem", height: "16rem" }}
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
