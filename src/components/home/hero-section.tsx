import Image from "next/image";
import Link from "next/link";
import Typewriter from "./typewriter";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";

export default function HeroSection() {
  return (
    <>
      <header className="min-h-screen bg-[rgb(2,48,89)] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center">
            <div className="col-span-6">
              <h1 className="font-[var(--font-sora)] text-[12vw] font-black leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                Redefine Your Business
                <br />
                <Typewriter
                  words={["Efficiency", "Automation", "Revenue", "Growth"]}
                />
              </h1>
              <p className="pt-3 text-lg text-white shadow-text">
                Design, build, and deploy AI systems that fit your existing
                stack. Free consultation, four-phase methodology, 40 years of
                hands-on engineering, scale without adding headcount.
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
              <h1 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Redefine Your Business
                <br />
                <Typewriter
                  words={["Efficiency", "Automation", "Revenue", "Growth"]}
                />
              </h1>
              <p className="max-w-3xl pt-5 text-xl font-normal text-white shadow-text">
                Design, build, and deploy AI systems that fit your existing
                stack. Free consultation, four-phase methodology, 40 years of
                hands-on engineering, scale without adding headcount.
              </p>
              <div className="pt-8">
                <Link
                  id={gtmLinkIdFromHref("#consultationAppointment2xl", "hero-assessment")}
                  href="#consultationAppointment2xl"
                  className="btn btn-primary" >
                  Get Your Free AI Assessment
                </Link>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen">
              <Image
                src="/images/action-figure.jpeg"
                priority
                width={450}
                height={562}
                quality={100}
                alt="Geek At Your Spot - AI-created action figure of founder me, representing my hands-on, personalized approach to helping small businesses succeed with technology."
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
