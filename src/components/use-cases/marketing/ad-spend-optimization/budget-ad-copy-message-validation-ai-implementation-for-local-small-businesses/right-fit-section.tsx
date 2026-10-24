export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automated ad copy and message validation is the right move when your business faces ongoing budget leaks
        from inefficient manual campaign management, but you have the willingness and capacity to follow a
        structured, phased rollout that matches your business objectives, data quality, and local constraints. This
        is not the right fit if you are looking for a quick fix, lack the minimum data quality needed for
        automation, or expect results without making changes to your workflow or decision-making process.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is spending hours each week tweaking keyword bids, struggling to track which campaigns produce
        real leads, or relying on guesswork for which headlines and images convert best, the cost of inaction
        quickly outweighs the investment in automation. The status quo (as discussed in earlier sections) leaves
        small budgets exposed to wasted clicks and missed sales. Automated validation, as Geek @ Your Spot
        implements it, works best for small businesses in South Florida with under $500 a month in ad spend who need
        to protect every dollar (<a id={`use-cases-marketing-budget-ad-copy-message-validation-right-fit-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). These businesses cannot afford the luxury of in-house digital marketing staff, nor can
        they justify agency retainers that eat their entire budget. For these owners, the right automation makes
        their spend accountable, responsive, and focused on results, not just activity.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, this approach is not for everyone. Businesses that lack the ability or willingness to align their
        objectives, clean up their data, or participate in a pilot phase should not proceed. Automated validation is
        only as strong as the data and business logic it is built on. If your contact records are full of
        duplicates, your campaign goals are undefined, or no one on your team is ready to own the process of
        reviewing and approving messages before they go live, the system will not perform as promised. The
        automation cannot fix broken business strategy or replace the need for human oversight in the early stages.</p>
      <p className="text-base text-white shadow-text pt-3">
        A small team running a single-location plumbing service, for example, will get the most from automated ad
        copy and message validation when they have at least basic CRM records, trackable phone numbers, and a clear
        local service footprint. If this team is currently guessing at which messages to run or letting ad platforms
        spend their budget on broad, non-local keywords, the solution locks down their spend and validates every
        message before it goes to market. Google Performance Max, LocaliQ, and Plai all play a role here: Google
        Performance Max can lock campaign budgets to the right channels and geographies, LocaliQ’s tracking unifies
        performance data across platforms, and Plai ensures even non-technical owners can see what is working, when,
        and why, without hiring a full-time analyst.</p>
      <p className="text-base text-white shadow-text pt-3">
        By contrast, if your operation is too new to have a record of what a good lead looks like, if your team
        never has time to review ad copy or creative, or if your website and CRM are not integrated at all, you are
        not ready for automation. The system will only magnify existing gaps and make them more visible. In these
        cases, start with data cleanup and a clear business objective, then return to automation when the foundation
        is in place.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, consider the scale and complexity of your campaigns. Automated validation is designed for
        organizations whose budgets are small enough that every wasted click matters, but whose lead flow is steady
        enough to benefit from continuous improvement. If you run highly seasonal promotions, or your market shifts
        week to week, tools like Anyword and AdCreative let you test and refresh creative on the fly without burning
        through your daily cap. For multi-location or franchise businesses, Adzooma brings cross-channel budget
        control and performance alerts into one view, so you are never guessing where the money is going.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, move to automated ad copy and message validation when you are ready to treat your marketing
        budget as a controlled investment, when you can supply clean data and clear goals, and when you want to
        remove manual bottlenecks that hold your business back. Hold off if your systems or team are not ready to
        support it, or if you expect automation to work around a lack of strategy or attention. The best results
        come to those who prepare their business, align on measurable objectives, and commit to the process from day
        one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-ad-copy-and-message-validation-is-the-right-move-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Ad Copy and Message Validation Is the Right Move, and When It Is Not
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-automated-ad-copy-and-message-validation-is-the-right-move-and-when-it-is-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Automated Ad Copy and Message Validation Is the Right Move, and When It Is Not
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
