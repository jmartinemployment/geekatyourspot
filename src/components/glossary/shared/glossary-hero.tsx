import Link from "next/link";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
interface HeroSectionProps {
  title: string;
  summary: string
}

export default async function GlossaryHeroSection({title, summary}:HeroSectionProps) {
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
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[#0B162A] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                { title }
              </h1>
              <p className="pt-3 text-2xl text-white shadow-text">
                { summary}
              </p>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen flex-col">
              <FontAwesomeIcon
                icon={faBook}
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
