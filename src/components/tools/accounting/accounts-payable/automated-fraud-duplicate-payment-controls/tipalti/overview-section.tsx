import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Under the dim fluorescent lights of a small Miami-Dade county office, a local business owner sifts
        through a towering pile of invoices. Each paper represents a potential error, a duplicate payment, or
        worse, a fraudulent transaction. The manual process is not just time-consuming; it&#39;s riddled with
        risks that threaten the financial stability of the business. Mistakes in this crucial area can lead to
        financial losses and erode trust with suppliers.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses juggling multiple invoices daily, the danger of duplicate payments and fraud looms
        large. Each transaction must be meticulously reviewed, and even a minor oversight can result in
        significant financial repercussions. This labor-intensive process drains resources, increases the
        chance of human error, and slows down payment cycles, making it difficult to maintain healthy cash flow
        and supplier relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Fraud &amp; Duplicate Payment Controls offer a solution to these pervasive issues. By
        integrating <GlossaryLink slug="ai">AI</GlossaryLink>-driven systems, businesses can streamline
        their <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> processes, reducing manual
        workload and minimizing errors. These controls flag anomalies and duplicates early, ensuring that only
        legitimate transactions proceed. This shift not only saves time but also delivers peace of mind by
        safeguarding against fraud, allowing small business owners to focus on growth rather than
        administrative headaches.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the competitive landscape of West Palm Beach, Broward, and Miami-Dade counties, implementing these
        automated solutions is not just about efficiency; it&#39;s about survival. Businesses that adopt such
        tools can better allocate their resources, enhance compliance, and build stronger relationships with
        suppliers. The transition to automated systems represents a strategic move towards more sustainable
        operations, securing both the present and future financial health of small enterprises.</p>
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
