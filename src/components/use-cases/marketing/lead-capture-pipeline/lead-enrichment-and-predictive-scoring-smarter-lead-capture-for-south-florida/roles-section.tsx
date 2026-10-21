
export default function RolesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When you roll out a lead enrichment and predictive scoring pipeline, the biggest shift isn’t just in
        the tools, it’s in the day-to-day reality for the people running your business. No more waking up to a
        spreadsheet of half-dead leads or wasting hours tracking down phone numbers that go nowhere. The real
        change comes in how sales, marketing, and operations interact with their pipeline and each other.</p>
      <p className="text-base text-white shadow-text pt-3">
        For sales teams, the most immediate difference is focus. Instead of calling down a generic list, reps
        start each morning with a ranked queue of companies who were on their pricing page last night, who
        have decision-makers with verified contact details, and who fit their ideal customer profile. Lusha
        feeds them direct dials and verified emails, so instead of spending half the day fighting through
        receptionists or waiting for bounced emails to clear, they connect with the right people on the first
        try. Apollo’s enrichment means even if a lead comes in with only a name and an email domain, sales
        gets the rest (role, phone, department) within minutes, so no lead is left half-baked.</p>
      <p className="text-base text-white shadow-text pt-3">
        For marketing, the impact is just as dramatic. Instead of measuring performance by how many form fills
        came in last week, they track which campaigns actually drove pipeline. Factors lets them see which
        ads, content, and email touches led to closed revenue, not just clicks or vanity metrics. When a
        campaign brings in a wave of visits from a target industry, Leadfeeder and Snitcher surface the
        specific companies behind those clicks, and marketing can segment and retarget based on real
        engagement, not just anonymous traffic. The result is budgets moving to channels that bring real,
        in-market accounts, and wasted spend on dead-end traffic dropping fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        Operations and RevOps teams feel the change in the quality and automation of their data. Before, they
        spent hours every week cleaning up&nbsp;CRM&nbsp;records,
        merging duplicates, and hunting for the right owner of a hot lead. Now, enrichment tools run in the
        background. Lusha and Apollo update contact and account records when someone changes jobs or gets
        promoted, and new leads are routed automatically based on score, fit, or engagement. If a lead’s score
        jumps because they spent twenty minutes on the demo video or downloaded a technical guide, the system
        fires off a Slack alert and assigns it to the right rep, no manual triage required. Snitcher and
        Leadfeeder filter out the junk (ISPs, students, residential traffic) so only real B2B accounts make it
        into the pipeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        Even the way teams work together changes. Sales and marketing run on the same set of signals, both see
        who is visiting, what they are looking at, and which campaigns are achieving measurable results. Data
        stops being a battleground of “my list vs. yours” and becomes a shared source of truth. Everyone knows
        which accounts are warm, which reps are working which accounts, and which touches are making a
        difference.</p>
      <p className="text-base text-white shadow-text pt-3">
        Picture that team from the opening, but now it’s Friday afternoon. Instead of arguing over why last
        week’s campaign didn’t convert or who owns the new inbound lead, they are moving deals forward with
        confidence. The sales rep is wrapping up a call with a decision-maker they reached on the first dial.
        Marketing has proof that their ad budget actually turned into pipeline. Ops is closing the week with
        a&nbsp;CRM&nbsp;that’s clean, current, and ready for Monday.
        That’s not hype, it’s what happens when the right enrichment and scoring pipeline fits the way your
        people work, rather than forcing them to work around the tool.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-sales-marketing-and-ops-actually-experience-the-change" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Sales, Marketing, and Ops Actually Experience the Change
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-sales-marketing-and-ops-actually-experience-the-change-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Sales, Marketing, and Ops Actually Experience the Change
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
