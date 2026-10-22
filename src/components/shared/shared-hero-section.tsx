import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/components/shared/hero-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEPARTMENT_ICONS, DepartmentName}  from "@/types/department"
import {
  faFunnelDollar,
  faBellConcierge,
  faTag,
  faUsersBetweenLines,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { SCHEDULER_HERO_LINK_ID } from "@/components/shared/scheduler/scheduler-id";
import { BreadcrumbTrail } from "@/components/shared/breadcrumb-trail";

// interface DepartmentProps {
//   name: DepartmentName;
// }
interface HeroSectionProps {
  title: string;
  image: string;
  summary: string;
  imgAlt: string;
}
export default async function HeroSection({title, image, summary, imgAlt }:HeroSectionProps) {
    
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
                <Link href="#consultationAppointment2xl"
                id={SCHEDULER_HERO_LINK_ID}
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
              <BreadcrumbTrail current={title} />
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                { title }
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">
                { summary}
              </p>
              <div className="pt-6">
                <Link href="#consultationAppointment2xl"
                id={`${SCHEDULER_HERO_LINK_ID}-lg`}
                className="btn btn-primary"
              >
                Get Your Free AI Assessment
              </Link>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen flex-col">
              {image && (
                <Image
                  width="460"
                  height="460"
                  src={image}
                  alt={imgAlt}
                  loading="eager" />
              )}
              {/* <HeroImage image={ image} title={title} summary={summary} /> */}

            {/* <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Accounting</p> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
