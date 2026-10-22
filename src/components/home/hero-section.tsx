import Link from "next/link";
import Image from "next/image";
import { SCHEDULER_HERO_LINK_ID } from "@/components/shared/scheduler/scheduler-id";

export default function HeroSection() {
  return (
    <>
      <header className="min-h-screen w-full bg-[#0B162A] lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-1">
              <h1 className="font-[var(--font-sora)] text-[12vw] font-black leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                AI Automation for{" "}
                <br />
                <span className="text-[#C83803]">Business</span>
              </h1>
              <h2 className="pt-3 text-xl text-white shadow-text">
                Scale Your Operations and Boost Efficiency with Artificial Intelligence
              </h2>
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
          <div className="grid min-h-screen grid-cols-12 place-items-center">
            <div className="col-span-7">
              <h1 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Automation for{" "}
                <br />
                <span className="text-[#C83803]">Business</span>
              </h1>
              <h2 className="pt-3 text-2xl text-white shadow-text">
                Scale Your Operations and Boost Efficiency with Artificial Intelligence
              </h2>
              <div className="pt-8">
                <Link href="#consultationAppointment2xl"
                  id={`${SCHEDULER_HERO_LINK_ID}-lg`}
                  className="btn btn-primary" >
                  Get Your Free AI Assessment
                </Link>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen">
              {/* The AVIF and WebP files are encoded already, so they are served as they are: the
                  browser takes the AVIF source when it can and falls back to the WebP. A preload would
                  name only one of them, so the image loads eagerly at high priority instead. */}
              <picture>
                <source srcSet="/images/home-hero.avif" type="image/avif" />
                <Image
                  src="/images/home-hero.webp"
                  unoptimized
                  width={1024}
                  height={1024}
                  loading="eager"
                  fetchPriority="high"
                  alt="A Geek @ Your Spot LLC robot action figure in its package, holding a laptop with a rising chart, beside icons for chat, automation, reporting and a small business storefront."
                  className="h-auto w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
