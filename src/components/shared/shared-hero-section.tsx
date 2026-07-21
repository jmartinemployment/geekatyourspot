import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/services/geekApiService"
import HeroImage from "@/components/shared/hero-image-component";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEPARTMENT_ICONS, DepartmentName}  from "@/types/department"
import {
  faFunnelDollar,
  faBellConcierge,
  faTag,
  faUsersBetweenLines,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

// interface DepartmentProps {
//   name: DepartmentName;
// }
interface HeroSectionProps {
  title: string;
  image: string| undefined;
  summary: string
}

export default async function HeroSection({title, image, summary}:HeroSectionProps) {
    
  return (
    <>
      <header className="min-h-screen bg-[rgb(2,48,89)] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                {title}
              </h1>
              <p className="pt-3 text-lg text-white shadow-text">
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

      <header className="hidden min-h-screen bg-[rgb(2,48,89)] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center">
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                { title }
              </h1>
              <p className="pt-3 text-lg text-white shadow-text">
                { summary}
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
              <HeroImage image={ image} title={title} summary={summary} />

            {/* <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Accounting</p> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
