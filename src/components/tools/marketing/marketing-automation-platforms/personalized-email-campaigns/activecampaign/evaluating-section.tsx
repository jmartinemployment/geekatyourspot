import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign is best judged on how well it matches your team’s workflow, how its pricing model fits your
        budget, and whether its automation depth is what you need. The platform is built for small to mid-sized
        businesses that want to automate personalized follow-up without hiring more staff or building custom
        software. Its pricing is tiered, with a CRM add-on available starting at $50 per month, so costs scale with
        the features and volume you need (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-evaluating-source-activecampaign-com${idSuffix}`} href="https://www.activecampaign.com/compare/campaign-monitor" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        To know if ActiveCampaign is a good fit, look at your current sales and marketing process. If you are losing
        leads because follow-up is inconsistent, or if your team spends hours sorting lists and sending bulk emails,
        ActiveCampaign’s automation and segmentation can remove those manual steps. The platform excels when you
        need to send relevant emails at scale, prioritize high-intent prospects, and connect marketing activity to
        sales outcomes, all with minimal manual oversight.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Does your business depend on timely, personalized follow-up to convert leads or drive repeat sales?</li>
        <li>Are you currently missing opportunities because your CRM, email, and e-commerce data are not connected?</li>
        <li>Is your team stretched thin, spending too much time on manual email campaigns and list management?</li>
        <li>Do you need clear reporting on which messages, segments, and campaigns are driving revenue?</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        If you answer yes to most of these, ActiveCampaign is likely to pay off in saved time, fewer errors, and
        higher <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion rates</GlossaryLink>.
        Its automation engine is more advanced than entry-level email tools, but does not require the complexity or
        cost of enterprise platforms. For small businesses in South Florida, the ability to configure rules without
        code and connect to the tools you already use is a key advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, the main decision is which features you need now and which can wait. The CRM add-on, at $50 per
        month, unlocks advanced sales automation and pipeline management (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-evaluating-source-activecampaign-com-2${idSuffix}`} href="https://www.activecampaign.com/compare/campaign-monitor" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026). If your business is focused only on basic email marketing, you may not need the full
        CRM immediately. However, most businesses that want true personalized email campaigns find the integrated
        CRM and automation worth the investment, because it keeps all your data and follow-up in one place.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign’s model is transparent: you pay for the features and contact volume you use, with no hidden
        fees for integrations or reporting. This makes it easier to forecast costs as your list grows or as you add
        new automation. If you outgrow the basic plan, you can add CRM and advanced features without migrating your
        data or rebuilding your workflows. For most small teams, the entry point is affordable, and you scale up
        only as your needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing ActiveCampaign against other platforms, focus on the quality of automation, the depth of
        segmentation, and the real integration with your sales process. Many email tools offer basic triggers and
        templates, but few connect marketing activity directly to deal progress or let you automate follow-up based
        on real engagement and lead scoring. ActiveCampaign stands out for making this possible without
        enterprise-level setup or cost.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, the right fit is about outcomes: does ActiveCampaign help you respond faster, target smarter,
        and close more leads with less manual work? If you are a small business in Miami-Dade, Broward, or Palm
        Beach counties looking to make your personalized email campaigns count, its combination of automation,
        segmentation, and clear pricing makes it a strong contender. Geek @ Your Spot can help you map your process
        to the platform and avoid paying for features you do not need.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-activecampaigns-fit-and-pricing-for-your-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge ActiveCampaign’s fit and pricing for your small business
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-activecampaigns-fit-and-pricing-for-your-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge ActiveCampaign’s fit and pricing for your small business
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
