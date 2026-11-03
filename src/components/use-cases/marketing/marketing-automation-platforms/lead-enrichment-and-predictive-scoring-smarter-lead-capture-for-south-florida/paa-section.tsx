export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the actual difference between Lead Enrichment and Predictive Scoring? Aren&#39;t they the same thing
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Lead Enrichment and Predictive Scoring are two separate but connected steps in the sales
              pipeline. Lead Enrichment is about gathering and filling in missing background details for each
              lead, like company size or contact numbers, starting from something basic like an email address.
              Predictive Scoring uses all that enriched data, along with buyer behavior, to calculate a score
              that shows how likely it is that the lead will become a customer.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much historical data does a business need to use Predictive Scoring?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              To create a reliable predictive scoring model, a business usually needs at least a few thousand
              past lead records, with at least 200 to 500 clearly marked as &quot;Closed-Won.&quot; If a small
              business has not reached that level, it is best to start with a mix of data enrichment and fixed
              rules until enough data builds up.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does form enrichment prevent website visitors from abandoning our signup forms?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Form enrichment lets businesses shrink their signup forms down to just one field, like a work
              email address. As soon as the user submits, the enrichment software grabs and adds key details
              such as company size and location behind the scenes. This keeps forms short, which means more
              people finish signing up, without the business missing out on important information.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens to a high lead score when a prospect completely stops engaging?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Advanced scoring systems use an automatic process called behavioral score decay. If a lead that
              once had a high score suddenly stops interacting for three weeks, the system lowers their score
              over time. This keeps sales teams focused on leads that are still active and interested.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
