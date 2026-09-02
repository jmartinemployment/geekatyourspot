import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Great Expectations is best used when businesses need to ensure high data quality for their automated ad spend
                optimization efforts. It is particularly useful in scenarios where data integrity is critical to the success of ad
                campaigns. For instance, companies employing Salesforce Einstein or HubSpot for <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> can benefit
                from integrating Great Expectations to validate the data flowing into these platforms, ensuring more accurate
                <GlossaryLink slug="analytics">analytics</GlossaryLink> and reporting.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses experiencing inconsistent ad performance due to poor data quality should consider using Great
                Expectations to identify and rectify data issues. By implementing this tool, companies can achieve more consistent
                and reliable results from their <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> efforts, ultimately leading to better <GlossaryLink slug="kpi">ROI</GlossaryLink> and more efficient
                use of marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Moreover, Great Expectations is ideal for organizations looking to automate their data validation processes as part
                of a broader digital transformation strategy. It allows businesses to focus on strategic initiatives by reducing the
                time spent on manual data checks and corrections, thus enhancing overall productivity and efficiency.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Great Expectations is best used when businesses need to ensure high data quality for their automated ad spend
                optimization efforts. It is particularly useful in scenarios where data integrity is critical to the success of ad
                campaigns. For instance, companies employing Salesforce Einstein or HubSpot for marketing automation can benefit
                from integrating Great Expectations to validate the data flowing into these platforms, ensuring more accurate
                analytics and reporting.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses experiencing inconsistent ad performance due to poor data quality should consider using Great
                Expectations to identify and rectify data issues. By implementing this tool, companies can achieve more consistent
                and reliable results from their ad spend optimization efforts, ultimately leading to better ROI and more efficient
                use of marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Moreover, Great Expectations is ideal for organizations looking to automate their data validation processes as part
                of a broader digital transformation strategy. It allows businesses to focus on strategic initiatives by reducing the
                time spent on manual data checks and corrections, thus enhancing overall productivity and efficiency.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
