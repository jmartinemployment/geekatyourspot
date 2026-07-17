import Typewriter from "./typewriter";
// import { HeroAssessmentCta } from "@/components/hero/hero-assessment-cta";

export default function HeroSection() {
  return (
    <>
      <header className="min-h-screen bg-[rgb(2,48,89)] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
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
                {/* <HeroAssessmentCta /> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="hidden min-h-screen bg-[rgb(2,48,89)] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center">
            <div className="col-span-8">
              <h1 className="font-[var(--font-sora)] text-7xl font-black leading-[0.95] text-white shadow-text xl:text-[6.5rem]">
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
                {/* <HeroAssessmentCta /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
