export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Maria&#39;s situation is not unique. Many small business owners in Miami-Dade, Broward, and West Palm Beach
        counties face similar hurdles when managing cash flow with traditional spreadsheets. The process is riddled
        with inefficiencies that stem from the very nature of spreadsheets. These tools, while familiar and
        accessible, are not designed for the complexities of modern cash flow management.</p>
      <p className="text-base text-white shadow-text pt-3">
        One major issue is the static nature of spreadsheets. As Maria updates her cash flow, she relies on data
        that is already out of date by the time it&#39;s compiled. Spreadsheets lack real-time data integration,
        which means that every entry is a snapshot of the past, not a reflection of the current financial state.
        This lag creates a significant gap in accuracy, leading business owners to make decisions based on
        incomplete information.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then there&#39;s the problem of manual data entry. Every transaction, invoice, and payment must be entered
        by hand, a process fraught with potential for human error. A single mistyped figure can cascade into larger
        inaccuracies, skewing forecasts and leading to costly financial missteps. Manual entry also consumes
        valuable time, pulling business owners away from strategic activities that could drive growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Spreadsheets are also notorious for their lack of flexibility. As Maria&#39;s business grows, the complexity
        of her financial landscape increases. She might need to track multiple revenue streams, varied payment
        schedules, or fluctuating expenses. Traditional spreadsheets are ill-equipped to handle these variables
        dynamically. Each adjustment requires a tedious round of updates across numerous cells and sheets,
        increasing the risk of oversight and errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Furthermore, spreadsheets do not support the multi-dimensional analysis that modern businesses require. They
        struggle to provide the granular insights needed to predict future cash flows accurately. For instance,
        Maria can&#39;t easily simulate potential scenarios, such as a delayed payment or an unexpected expense, to
        see how these would impact her cash position. This lack of scenario planning leaves businesses vulnerable to
        cash flow disruptions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the collaborative limitations of spreadsheets cannot be ignored. In a team setting, multiple users
        editing the same document can lead to version control issues and conflicting data entries. This can result
        in team members working with different versions of the truth, complicating decision-making processes and
        compromising financial integrity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-challenges-in-spreadsheet-based-cash-flow-management" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Challenges in Spreadsheet-Based Cash Flow Management
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-challenges-in-spreadsheet-based-cash-flow-management-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Challenges in Spreadsheet-Based Cash Flow Management
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
