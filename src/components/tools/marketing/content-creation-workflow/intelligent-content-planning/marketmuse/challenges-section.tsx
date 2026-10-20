export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, small marketing teams in Miami-Dade, Broward, and West Palm Beach repeat the same cycle.
        They brainstorm content ideas, fill out keyword spreadsheets, and assign writing tasks based on what
        feels urgent. By the end of the week, most of that work never reaches an audience. The reason is
        simple: manual content planning is slow, disconnected, and blind to what actually works. Without a
        system, teams waste hours chasing high-competition topics, writing articles that never rank, and
        missing the real opportunities sitting inside their own site data.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost is not just time. When a team relies on spreadsheets and guesswork, they spend dozens of
        hours tracking keywords that larger competitors already dominate. This manual process leads to
        superficial analysis: picking topics based on search volume alone, with no sense of whether the
        business could ever win those searches. The result is a backlog of content that never sees the first
        page of Google, let alone drives leads or sales. Meanwhile, the topics where the business already has
        authority, those that could deliver quick results, go unnoticed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Disconnected content is another hidden drain. When articles are written in isolation, with no plan to
        build on the topics the business is trusted for, the site fails to develop structural authority. Each
        new post competes with the last for attention, and the brand never gains traction in its core areas.
        The team may spend weeks on a piece that covers the same ground as a local competitor, never realizing
        that the real gap was a subject none of the big players had touched. Without a way to map the
        site&#39;s entire digital footprint, these quick wins stay buried.</p>
      <p className="text-md text-white shadow-text pt-3">
        The manual approach also leads to vague, unstructured writing assignments. Internal staff or
        contractors get told to &quot;write something on X,&quot; with no clear outline, no sense of what the
        audience actually needs, and no data on what competitors have missed. This guesswork produces articles
        that are generic, hard to measure, and rarely move the business forward. Worse, it can result in thin
        or low-quality pages that actively harm search visibility, pages that should be pruned or improved,
        but go unnoticed because there is no system to flag them.</p>
      <p className="text-md text-white shadow-text pt-3">
        By the time Friday comes around, the team is left with a spreadsheet of published content, no clear
        sense of what worked, and another set of topics to chase next week. The operational overhead is high.
        The team is burned out by manual audits and endless brainstorming, and the business is left wondering
        why its digital marketing budget produces so little in measurable results. This is not a problem of
        effort or creativity. It is the cost of running on guesswork instead of a system that tells them what
        to write, when, and why.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
                What it costs to keep doing this by hand
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
