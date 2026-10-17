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
              What is Lusha Lead Enrichment and how does it help a small business?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Lusha Lead Enrichment fills in missing B2B data like direct phone numbers, verified emails, and
              company details into your CSV lists, CRM, or spreadsheets. For small B2B firms in South Florida,
              this means you can turn a simple list of local companies into a complete outbound marketing
              database without manual research.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we enrich inbound leads from our website forms automatically?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Lusha lets you keep your website forms short, such as just name and email, to increase
              conversions. It then instantly enriches leads on the backend with full company profiles,
              employee counts, and geographic data in about three seconds.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How accurate is the enriched data provided by Lusha?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Lusha reports a 98% email accuracy rate and an 85% US phone accuracy rate. This level of
              accuracy helps small teams focus on real conversations instead of wasting time on bounced emails
              or wrong numbers.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Predictive Scoring in Lusha?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Predictive Scoring in Lusha matches market data to your Ideal Customer Profile and pipeline
              activity. Instead of a generic list, it automatically ranks accounts and contacts by how well
              they fit and their likelihood to buy. The scoring gets more accurate as your team uses the
              platform.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What variables or signals does Lusha use to score leads?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Lusha uses 26 buying signals that refresh weekly to score leads. These include leadership
              changes, funding rounds, headcount changes, and hiring surges. For a B2B consultancy, this means
              you can target local businesses that just hired a new CFO or are growing their finance teams.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it identify the specific decision-makers within a scored account?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Lusha&#39;s scoring intelligence maps out the buying committee at target companies. It
              identifies who makes final decisions, who champions the project, and who the end-users are, so
              you can tailor your pitch to each stakeholder.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Lusha&#39;s scoring and enrichment data plug into standard CRMs?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Lusha integrates directly with Salesforce, HubSpot, monday CRM, and Zoho. This lets you
              automate lead routing, scoring updates, and ongoing record enrichment without manual data
              exports.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
