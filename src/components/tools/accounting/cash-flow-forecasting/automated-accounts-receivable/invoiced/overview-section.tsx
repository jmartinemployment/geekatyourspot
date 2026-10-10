import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Late nights at the office in Miami-Dade, a small business owner sifts through a stack of unpaid invoices,
        each one a reminder of the cash flow crunch that threatens his operation. The tedious task of manually
        tracking who owes what consumes valuable hours that could be spent growing the business. This scenario is
        all too familiar for many small businesses in West Palm Beach and Broward counties, where time and resources
        are stretched thin. The manual process of accounts receivable is not just time-consuming; it’s fraught with
        the risk of errors that can lead to significant financial setbacks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter automated accounts receivable systems, a game-changer for those looking to reclaim their evenings and
        enhance their financial health. By integrating&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-driven
        platforms like Invoiced, businesses can automate the entire invoice-to-cash process. This not only
        accelerates cash collection but also provides real-time insights crucial for making informed business
        decisions. Instead of drowning in paperwork, business owners can now access up-to-date dashboards that
        forecast cash flow accurately, offering a clear view of when payments will arrive and which accounts need
        attention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The impact of automation goes beyond mere efficiency. It transforms how small businesses in the region
        manage their finances, reducing the days sales outstanding (DSO) and allowing them to focus on strategic
        growth rather than administrative burdens. Automated accounts receivable solutions like Invoiced empower
        businesses to make data-driven decisions, ensuring they stay ahead in a competitive market. This shift not
        only enhances cash flow but also positions them for long-term success by minimizing errors and optimizing
        resources.</p>
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
