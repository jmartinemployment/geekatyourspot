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
              How does Apollo’s Inbound Lead Enrichment work, and does it require complex coding for a small business?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Apollo is platform-agnostic and does not require any coding skills. A small business owner just
              maps their web form fields using HTML identifiers in Apollo, then copies a short JavaScript
              snippet into their website header. Apollo automatically starts an enrichment workflow when a
              lead submits the form, adding over 65 data points like job title, company size, local data,
              revenue, and technology stack by matching against its database.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the operational difference between CRM Enrichment and Saved Record Enrichment?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              CRM Enrichment pushes and updates demographic, firmographic, and technographic data directly
              into a connected CRM, such as HubSpot or Salesforce, so sales reps always see up-to-date
              information. Saved Record Enrichment updates contact details for prospects saved inside Apollo’s
              database before launching an email or call sequence.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Form Enrichment affect our credit balance, and will it duplicate existing CRM contacts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Form enrichment is free for all Apollo users and does not use data credits. Apollo uses a match
              and validate protocol to check if a prospect already exists in your CRM. If so, it adds only the
              new enriched data to the existing record, preventing duplicates.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will automated enrichment overwrite data that my sales team manually verified?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, as long as it is configured properly. Apollo lets you set overwrite priorities so fields
              only autofill when empty. This keeps manually verified data safe from being replaced by
              automated updates.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between traditional predictive lead scoring and Apollo&#39;s AI scoring?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Traditional predictive or manual scoring means you assign point values yourself, like adding
              points for a C-Suite title or subtracting for a student. Apollo’s AI lead scoring learns from
              your CRM history, looking at closed-won and closed-lost deals, and automatically builds and
              adjusts models based on what actually converts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Apollo categorize lead scores so my sales team can act fast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Apollo groups lead scores into four clear tiers: Excellent (ideal fit and high intent), Good,
              Fair, and Not a Fit. This lets an IT consultancy set up automated rules, like sending Excellent
              leads straight to a rep’s calendar and putting Fair leads into lower-cost nurture emails.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              My sales team complains that automated scoring is a &quot;black box&quot; they can&#39;t trust. How does Apollo solve this?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Apollo gives clear reason codes for every score. Next to each prospect’s tier, the interface
              shows the top three factors that influenced the score, such as industry, headcount, or buying
              signals, so sales reps know exactly why a lead is ranked highly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we train Apollo’s AI scoring on niche indicators unique to our business?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. You can add custom data fields to Apollo’s AI Context Center. If your small business uses
              unique local tags, Apollo’s scoring will include that custom data in its predictive models.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
