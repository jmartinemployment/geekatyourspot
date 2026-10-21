import GeekPong from "@/components/about/geek-pong";
import { TIMELINE, TimelineRow } from "@/components/about/timeline-cards";

export default function TimelineSection() {
  const intro = (
    <p className="text-base text-white shadow-text pt-3">
      I have spent four decades staying ahead of technology curves. From the earliest home computers to
      today&#39;s AI revolution, I&#39;ve been building solutions that help businesses thrive. Now I bring that
      experience to small businesses ready to compete with the big players.</p>
  );

  // The timeline cards frame the game, so the three of them stay together and centered.
  const timeline = (
    <>
      <TimelineRow cards={TIMELINE.slice(0, 3)} />
      <GeekPong />
      <TimelineRow cards={TIMELINE.slice(3)} />
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-timex-sinclair-to-ai" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Timex Sinclair to AI
              </h2>
            </div>
            <div className="col-span-12">
              {intro}
              {timeline}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="from-timex-sinclair-to-ai-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                From Timex Sinclair to AI
              </h2>
              {intro}
            </div>
            <div className="col-span-12 w-full max-w-4xl">{timeline}</div>
          </div>
        </div>
      </section>
    </>
  );
}
