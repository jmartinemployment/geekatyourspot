import Link from "next/link";
import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">In the bustling world of marketing, small businesses are often caught in a whirlwind of tasks: endless spreadsheets,
        countless social media posts, and a deluge of customer queries. These manual processes not only consume precious
        hours but also increase the risk of errors and missed opportunities. The constant juggling act leaves little room
        for strategic thinking or creative innovation, causing frustration and stifling growth.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Enter <GlossaryLink slug="marketing-automation">AI Marketing Systems</GlossaryLink>, a game-changer that streamlines these processes and frees up valuable time. By
        automating routine tasks, AI helps small businesses focus on what truly matters: building relationships and driving
        sales. With features like accelerated deployment and workflow configuration, AI empowers teams to execute marketing
        campaigns more efficiently and effectively, reducing costs and enhancing customer satisfaction.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">For a shorter overview, read <Link id={`use-cases-marketing-ai-marketing-systems-overview-blog${idSuffix}`} href="/blog/marketing/how-ai-marketing-systems-transform-small-business-growth" className="text-[#C83803] hover:underline">AI Marketing Systems for Growth</Link> on our blog.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Two parts of an AI marketing system have their own guides: the <Link id={`use-cases-marketing-ai-marketing-systems-overview-lead-capture${idSuffix}`} href="/use-cases/marketing/ai-sales-force-automation-software" className="text-[#C83803] hover:underline">Intelligent Lead Capture Pipeline</Link> and the <Link id={`use-cases-marketing-ai-marketing-systems-overview-content-creation${idSuffix}`} href="/use-cases/marketing/ai-content-marketing-platforms" className="text-[#C83803] hover:underline">Content Creation Workflow</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="211"
                height="211"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-0.avif"
                alt="Transforming Marketing Chaos into Clarity" />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-marketing-challenges-into-opportunities" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Marketing Chaos into Clarity
              </h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-0.avif"
                alt="Transforming Marketing Chaos into Clarity" />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-marketing-challenges-into-opportunities-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Marketing Chaos into Clarity
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
