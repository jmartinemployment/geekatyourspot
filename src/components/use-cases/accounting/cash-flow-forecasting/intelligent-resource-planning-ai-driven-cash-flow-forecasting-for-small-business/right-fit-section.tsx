import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Resource Planning is not a silver bullet for every small business in South Florida. It is
        the right call when you are losing too much time, accuracy, or opportunity to manual forecasting and
        disconnected systems. But it is not always the answer, and sometimes the old way is still the better fit
        for now.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business is still small enough that one person can keep the books up to date, and you only have
        a handful of vendors or customers, a well-kept spreadsheet and QuickBooks may be enough. That setup is
        easy to understand, inexpensive, and flexible, especially if your operations are simple and you do not
        need to forecast cash flow more than a week or two ahead. The real cost comes when your team spends
        hours every month just to keep up, or when errors start to show up because numbers are keyed in more
        than once. This is where the cracks appear first: a late payroll because a client paid slow, a missed
        early payment discount, or a month-end close that drags on for weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first sign you need a move is when the spreadsheet no longer matches reality by the time you finish
        updating it. If you find yourself copying numbers between systems, chasing down status on open invoices,
        or running into disputes about which version of the forecast is the right one, you are ready for
        something built for the job. At this point, tools like Jirav and Take the Helm step in. Jirav is built
        for automating rolling forecasts and linking your accounting, payroll,
        and&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;data
        into one dashboard. This lets you see your capital runway and hiring plans in one view, not a maze of
        files. Take the Helm gives you a live, drag-and-drop cash runway, mapping every invoice and bill on a
        timeline so you see the impact of every payment delay or surprise expense before it hits your bank
        balance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some businesses, though, should not make the jump yet. If your data is a mess, half in paper, half in
        disconnected files, or months behind, automation will only reveal the problem, not fix it. Cashflowfrog
        and Fathom both rely on having accurate, up-to-date ledgers to generate the real-time dashboards
        and&nbsp;<GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPI</GlossaryLink>&nbsp;insights
        that make the investment worth it. The first move in these cases is a cleanup, not a new tool. If your
        team will not keep the books current, no system will forecast tomorrow&#39;s cash accurately.</p>
      <p className="text-md text-white shadow-text pt-3">
        It is also not the right move if your business is about to change shape, say you are selling off a line
        or shifting your model. Intelligent Resource Planning depends on stable processes and data flows; if you
        are about to overhaul your operations, it makes sense to wait until the dust has settled, then design
        the system around the new workflow. Otherwise, you risk automating a process that will not exist next
        quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest mistake is leaping into a tool because it looks impressive, not because it answers a real
        pain. QuickBooks, for example, expands smoothly from basic bookkeeping to deep automation, custom
        reporting, and granular permissions. But moving before your team is ready or your data is clean creates
        new bottlenecks, now you have a powerful system, but everyone is still working in the old spreadsheets
        on the side. Intelligent Resource Planning pays off only when it is built around your real process, not
        bolted on as an afterthought.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are running multiple locations, tracking inventory across sites, or need to consolidate reporting
        for a group, the case for moving is much stronger. Fathom shines here, consolidating dozens of entities
        and surfacing the KPIs that drive real decisions. But if your challenge is still getting last month’s
        numbers right, not next quarter’s plan, stick with the basics until your process is ready to scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short: move to Intelligent Resource Planning when your manual process is holding back growth, not
        before. If you are not sure, a short,
        structured&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;and workflow review is the best next step. Sometimes all you need is to
        tighten your current system; sometimes you are ready to automate. The right call is the one that fits
        where you are today, not where the software demo says you should be.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-intelligent-resource-planning-is-the-right-move-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Resource Planning Is the Right Move, and When It Is Not
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-intelligent-resource-planning-is-the-right-move-and-when-it-is-not" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Resource Planning Is the Right Move, and When It Is Not
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
