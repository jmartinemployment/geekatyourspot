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
              Is Snitcher GDPR compliant?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Snitcher is GDPR compliant. The tool identifies companies at the business level using
              legitimate interest. Only business contact details like job titles and work emails are shown.
              Snitcher is also working toward ISO 27001 certification for added data security.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which companies will I actually see?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You will see companies that visit your site from a corporate network. This covers most B2B
              traffic during business hours. If someone visits from home or a mobile connection, their company
              usually will not show up. Snitcher is upfront about this so you know what to expect. You can
              start a trial and see what your own website traffic looks like within a day.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Our South Florida business gets a lot of local traffic, but most leave without filling out a form. How does Snitcher&#39;s Lead Enrichment actually reveal who they are?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Snitcher works like a digital investigator for your website. It uses IP-to-Company resolution to
              track anonymous visitors and matches those details to a verified business identity. Instead of
              just seeing a visitor from Fort Lauderdale, you get the actual company name, industry, size, and
              location of the business checking out your services.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Snitcher find the specific decision-makers (like the CFO or Owner) at the companies visiting our site, or does it just give us the company name?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Snitcher does both. It identifies the visiting company and also offers a Contact Reveal feature.
              This gives you verified professional contacts and emails behind the account, so your sales team
              can reach out directly to local executives instead of generic info@ addresses.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We heavily rely on Google Analytics 4 (GA4) to track our regional marketing performance in Tri-County. How does Snitcher enrich that data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Snitcher has native GA4 enrichment. It passes B2B company-level attributes right into your
              Google Analytics dashboard. This turns basic traffic numbers into a clear pipeline view, showing
              exactly which local campaigns are bringing in real businesses.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We are a lean team covering Miami to West Palm Beach, we can’t chase every lead. How does Account Scoring help us prioritize?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Snitcher tracks real-time buyer intent signals. It scores accounts based on how deeply and often
              they engage with your site. When a visitor shows strong intent, like spending time on your
              pricing and integration pages, Snitcher flags them as a hot lead so your team can focus on deals
              most likely to close.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we customize the scoring criteria to match our specific B2B ideal customer profile (ICP)?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, you can set what counts as a high-value action. For example, you can make rules so that if
              a company with 10–50 employees in Broward County visits your Automations page twice in a week,
              they are marked as a top-tier lead and sent straight to your sales pipeline.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We don&#39;t have a dedicated IT department. How difficult is Snitcher to set up and integrate with our existing CRM?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Snitcher is designed for quick, code-free setup. It offers seamless integrations with tools
              small businesses already use, like HubSpot, Salesforce, Pipedrive, Slack, and Zapier. Data and
              workflows sync automatically, so you do not need manual entry or IT support.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Snitcher compliant with privacy regulations?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, Snitcher is fully GDPR compliant and processes data according to top security standards. It
              only identifies company-level intent and does not track unauthorized personal consumer data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
