import Image from "next/image";
import Link from "next/link";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";

export default function HeroSection() {
  return (
    <>
      <header className="min-h-screen w-full bg-[#0B162A] lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-1">
              <h1 className="font-[var(--font-sora)] text-[12vw] font-black leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                AI Integration &amp; Automation Solutions{" "}
                <br />
                for Small <span className="text-[#C83803]">Businesses</span>
              </h1>
              <h2 className="pt-3 text-xl text-white shadow-text">
                Scale Your Operations and Boost Efficiency with Artificial Intelligence
              </h2>
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
          <div className="grid min-h-screen grid-cols-12 place-items-center">
            <div className="col-span-7">
              <h1 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Integration &amp; Automation Solutions{" "}
                <br />
                for Small <span className="text-[#C83803]">Businesses</span>
              </h1>
              <h2 className="pt-3 text-2xl text-white shadow-text">
                Scale Your Operations and Boost Efficiency with Artificial Intelligence
              </h2>
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
                width={512}
                height={768}
                quality={100}
                loading="eager"
                alt="Geek @ Your Spot LLC - AI-created action figure of me, representing my hands-on, personalized approach to helping small businesses succeed with technology."
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
