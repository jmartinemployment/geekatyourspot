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
                <a href="#consultationAppointment2xl"
                  id={`${SCHEDULER_HERO_LINK_ID}-lg`}
                  className="btn btn-primary" >
                  Get Your Free AI Assessment
                </a>
              </div>
            </div>
            <div className="col-span-5 flex items-center justify-center min-h-screen">
              {/* The optimizer serves AVIF or WebP by content negotiation and a width-matched variant
                  from the srcset, so the browser downloads an image sized to this column (about 420px,
                  up to ~610px on the widest screens) instead of the full 1024px source. `priority`
                  preloads that responsive variant because this is the desktop hero's LCP image; the
                  column only shows at lg and up, so the sizes hint falls back to 1px below it. */}
              <Image
                src="/images/home-hero.webp"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 42vw, 1px"
                priority
                alt="A Geek @ Your Spot LLC robot action figure in its package, holding a laptop with a rising chart, beside icons for chat, automation, reporting and a small business storefront."
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
