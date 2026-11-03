export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What exactly does Factors.ai do, and how does it differ from a standard tracker like Google Analytics?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Factors.ai goes beyond basic web tracking. It focuses on Account Intelligence and contact-level
              identification, showing you which specific local companies are visiting your site. You get
              details on first touch, last touch, and multi-channel attribution, not just anonymous visitor
              counts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the platform track &quot;intent data&quot; to help our small sales or outreach teams?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Factors.ai collects data from website actions, ad clicks, and third-party sources to map active
              buying behavior. It builds a prioritized list of target accounts and gives your team actionable
              insights, like which local firms are engaging with your services and who the decision-makers
              are.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we monitor when specific local accounts look at custom landing pages built for them?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You can upload your local account lists, and Factors.ai will alert you as soon as a
              targeted account interacts with your website or custom landing pages. This gives your team
              immediate context for timely follow-up.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does this clear up blind spots before our team reaches out to a prospect?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Factors.ai creates a full account timeline inside your CRM. Your team can see every page a
              prospect visited, which local ads they viewed, and what content they engaged with. This turns
              outreach into an informed conversation instead of a cold call.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we synchronize our highest-intent lists to social media ad accounts automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Factors.ai lets you automatically sync high-intent account segments to LinkedIn and Meta as
              matched audiences. These lists update on their own as buyer scores change, so you do not have to
              manage manual exports.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Factors.ai use AI, and is the data secure?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Factors.ai uses Scout, an AI copilot that works only with your verified account data and trusted
              third-party sources. This prevents errors or false insights. The platform meets enterprise-grade
              security standards, including SOC 2 Type II, GDPR, and CCPA certifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
