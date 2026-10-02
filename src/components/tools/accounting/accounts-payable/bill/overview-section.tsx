import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill sat at his desk, surrounded by a mountain of invoices waiting to be processed. His&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> team spent countless hours
        manually entering data, double-checking figures, and chasing approvals. It was a routine that ate into
        valuable time and resources, leaving little room for strategic initiatives or growth. Every mistake
        meant a delay, every delay meant a potential loss in revenue, and the cycle seemed never-ending. This
        is a familiar scene for many small and medium-sized businesses relying on outdated methods.</p>
      <p className="text-md text-white shadow-text pt-3">
        But what if there was a way to change this? By automating tasks like invoice processing, approvals,
        and expense management, businesses can significantly reduce manual effort and errors, freeing up time
        for more critical tasks. Automation doesn&#39;t just cut down the workload; it transforms operations,
        improves cash flow, and sets the stage for growth. With <GlossaryLink slug="ai">AI</GlossaryLink>-driven
        solutions, tasks that once took hours can now be completed in minutes, with higher accuracy and fewer
        resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses like Bill&#39;s, this transformation isn&#39;t just about saving time; it&#39;s about
        paving the way for a more efficient and profitable future. Imagine reallocating those wasted hours
        into strategic planning or customer service improvements. The benefits are clear: reduced costs,
        improved accuracy, and a more dynamic business environment. As small and medium-sized businesses look
        to implement AI, the question isn&#39;t whether they can afford to automate, but whether they can
        afford not to.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
