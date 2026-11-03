export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small marketing team in South Florida faces the same wall every week: too much to plan, too little
        time, and no way to get ahead. Without a structured system for Intelligent Content Planning, every new
        campaign starts with a blank screen. Teams burn hours debating topics, patching together keyword
        lists, and arguing over which blog or post to write next. The result is usually a calendar filled with
        best guesses, not data-backed priorities. Even when content gets published, most of it disappears into
        the void, never surfacing in search results and never cited by AI engines like ChatGPT or Gemini.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is not just time. It is lost revenue, missed leads, and wasted budgets. When content is
        planned on hunches, the team spends days writing posts that land nowhere. Nearly ninety percent of
        what gets created never drives a visit, never earns a mention, and never converts a customer. The
        cycle repeats: more brainstorming, more manual edits, more hours lost to spreadsheet wrangling.
        Approval processes stretch out as drafts get stuck in email chains, waiting for someone to sign off.
        Meanwhile, competitors with better systems are already ranking for the topics your team just picked.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach also means teams miss the shift in how buyers find answers. Google rankings used
        to be the finish line. Now, AI-driven answers from tools like ChatGPT, Perplexity, and Gemini shape
        what buyers see first. A business can land on page one in Google but still be invisible in AI
        summaries and recommendations. That is a new kind of failure, being present but unmentioned, which
        means your team’s work is skipped over by the very engines shaping buyer decisions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Local teams feel this pain more than most. Without the headcount to produce at scale, they stockpile
        ideas they never have time to execute. Even the best brainstorms end up as lists in a doc, gathering
        dust. When someone does write, the output is often slow, inconsistent, and disconnected from actual
        search demand. The team is locked out of next-generation search because their content is not
        structured or fast enough to be picked up by AI models. They lack the technical foundation, crawlable,
        well-linked, and optimized pages, that AI engines require to recognize and cite a brand as a trusted
        source.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another hidden cost is the constant firefighting. Teams stuck in this cycle never get ahead. They are
        always reacting, fixing broken links, patching content gaps, and scrambling to update old posts that
        never ranked. Every new platform or algorithm change means another round of manual fixes. The team
        spends more time maintaining than creating, and the backlog only grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest loss is strategic clarity. Without automation and predictive planning, teams cannot see
        which topics are worth their effort or where their brand is missing from AI answers. They have no way
        to track how often their business is mentioned, cited, or ignored by the tools buyers now use every
        day. The result is a marketing function that runs on hope, not evidence, and a business that stays
        invisible where it matters most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
