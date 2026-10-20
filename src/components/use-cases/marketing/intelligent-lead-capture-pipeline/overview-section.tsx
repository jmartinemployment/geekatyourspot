import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the world of&nbsp;<GlossaryLink slug="lead-generation">lead generation</GlossaryLink>, manual data
        entry often becomes a bottleneck. Sales teams spend countless hours tediously entering information, only
        to encounter data errors that can cost businesses potential clients. The frustration of these repetitive tasks not only slows down the sales process but
        also increases the risk of missing out on valuable opportunities. This is where the Intelligent Lead
        Capture Pipeline makes a difference. By automating the lead capture process, businesses can minimize
        errors and free up their sales teams to focus on building relationships and closing deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        The Intelligent Lead Capture Pipeline leverages AI to streamline the lead generation process. It
        captures data accurately and efficiently, reducing the time spent on manual tasks. This means sales
        teams can now allocate more time to strategic activities that directly contribute to revenue growth.
        The result? Faster lead processing, fewer errors, and an overall increase in sales potential.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id={`use-cases-marketing-intelligent-lead-capture-overview-blog${idSuffix}`} href="/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline" className="text-[#C83803] hover:underline">Lead Capture Pipelines for B2B Sales</Link> on our blog.</p>
      <p className="text-md text-white shadow-text pt-3">Lead capture is one part of the wider <Link id={`use-cases-marketing-intelligent-lead-capture-overview-ai-marketing-systems${idSuffix}`} href="/use-cases/marketing" className="text-[#C83803] hover:underline">AI Marketing Systems</Link> a small business can run.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-lead-generation-with-intelligent-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Lead Generation with Intelligent Automation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="transforming-lead-generation-with-intelligent-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Lead Generation with Intelligent Automation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
