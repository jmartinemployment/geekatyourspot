import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, small business owners like Lisa find themselves tangled in a maze of manual payment
        processes. As the owner of a local bakery, Lisa spends hours each Friday printing checks, stuffing
        envelopes, and mailing payments. This routine is not just time-consuming; it&#39;s fraught with
        potential errors and delays. A single typo can lead to bounced checks, causing strained supplier
        relationships and financial headaches. As her business grows, so does the stack of invoices, turning
        what was once a manageable task into a formidable burden.</p>
      <p className="text-md text-white shadow-text pt-3">
        This manual approach to payment execution is not only inefficient but costly. Each hour spent on
        these tasks is an hour away from focusing on what truly matters—growing the business and delighting
        customers. For many small businesses, the pressure of maintaining accurate and timely payments can
        feel overwhelming. The administrative load pulls owners and their teams away from strategic
        initiatives, stifling growth and innovation. It&#39;s a common story shared by countless businesses
        in West Palm Beach and beyond, where the need for a more efficient solution has never been more
        pressing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter automated payment execution, a technology-driven solution that transforms how businesses manage
        their <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>. By integrating systems
        like AvidXchange, companies can automate their entire payment workflow, eliminating manual errors and
        freeing up valuable time. Payments are processed securely and efficiently, with suppliers receiving
        their funds through their preferred methods. This seamless transition not only improves operational
        efficiency but also strengthens supplier relationships, as payments are made promptly and
        accurately.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward, and Miami-Dade counties, adopting automated payment
        execution is a game-changer. It allows business owners like Lisa to shift their focus from tedious
        paperwork to strategic growth opportunities. By leveraging <GlossaryLink slug="ai">AI</GlossaryLink>
        &nbsp;and automation, businesses can streamline their operations, reduce costs, and ultimately, drive
        more sales. As Lisa discovered, the path to a more efficient and profitable business begins with
        embracing technology that aligns with her company&#39;s needs and goals.</p>
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
