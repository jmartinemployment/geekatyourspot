import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners spend countless hours buried under the stress and inefficiency of
        manual payment processes. They sift through piles of invoices, cross-checking each one against their
        records, and manually inputting data into spreadsheets. It&#39;s a tedious dance of double-checking
        for errors, chasing approvals, and ensuring payments go out on time. This process not only drains
        valuable resources but also opens the door to costly mistakes and compliance risks. 82% of finance
        leaders admit that these manual procedures hinder their growth, a statistic that speaks volumes about
        the inefficiencies that plague small businesses today.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the competitive landscape of small business, time lost to manual&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes is time not spent
        on growth and innovation. The risk of human error looms large, with duplicate payments and compliance
        gaps being a continual threat. As businesses grow and the volume of transactions increases, these
        inefficiencies are magnified, making it even harder to keep pace with demands. This is where Automated
        Payment Execution comes in, offering a streamlined solution that transforms how financial operations
        are managed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution revolutionizes the way businesses handle their finances by automating
        repetitive tasks and enhancing accuracy. By leveraging <GlossaryLink slug="ai">AI</GlossaryLink>
        &nbsp;and automation, small businesses can eliminate the bottlenecks of manual data entry and approval
        processes. This shift not only saves time but also reduces errors and compliance risks. Automated
        systems like those offered by Tipalti allow companies to process payments efficiently, manage
        multi-currency transactions, and maintain real-time visibility into their financial status, ultimately
        driving growth without the need to expand administrative teams.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in West Palm Beach, Broward, and Miami-Dade counties, adopting AI solutions like those
        provided by Geek @ Your Spot can mean the difference between stagnation and expansion. Automated
        Payment Execution is not just a tool but a pathway to modernizing financial operations, freeing up
        resources to focus on what truly matters: growing the business. Embracing these technologies leads to
        fewer errors, faster processing times, and happier customers, positioning small businesses to thrive in
        today&#39;s fast-paced market.</p>
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
