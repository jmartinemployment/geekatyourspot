export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small marketing team in West Palm Beach sits at their desks, staring at a spreadsheet of keywords
        that never seems to shrink. Someone asks for last month’s blog performance; no one has the real
        numbers. By the time the group agrees on a topic, a competitor’s take is already ranking, and the team
        is back to guessing what might work next. Every piece of content starts with a blank screen or a
        recycled idea, and every effort to plan ahead dissolves into another round of manual edits, email
        threads and approval bottlenecks. When someone checks the search results, they see their posts on page
        one, but never in the answers from ChatGPT, Perplexity or Gemini. It feels like shouting into a void.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real cost of running on a content treadmill. Hours lost to brainstorm debates and
        spreadsheet wrangling. Days wasted producing posts that generate no traffic, never get cited, and fail
        to earn a single lead. The cycle repeats: publish, refresh, hope for a spike, and watch as nearly
        ninety percent of that work gets buried, invisible to both search engines and AI overviews. It is not
        just about missing out on Google rankings anymore. The new pain is being locked out of AI-driven
        recommendations entirely, because your content is not structured, fast or relevant enough for these
        models to find or trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning breaks this cycle. Instead of building strategy on hunches, it applies
        predictive automation to map out exactly what your audience and AI engines are looking for, before a
        single word gets written. Content is planned, generated, repurposed and scheduled in bulk, freeing
        your team from the manual bottlenecks that drain time and budget. Structured workflows make sure every
        asset is optimized for both traditional and AI-first search, so your best work is not just published,
        but actually found and cited by the systems your customers now trust for answers.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward and West Palm Beach, this is not a nice-to-have. It is the
        difference between being the local authority AI recommends, or being invisible, no matter how many
        hours you put in. Intelligent Content Planning is how teams with limited headcount can finally scale
        their output, cut content costs, and get seen where it matters most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
