import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual lead enrichment and predictive scoring is where most small businesses in Miami-Dade, Broward,
        and West Palm Beach lose their edge. The team spends hours each week copying names from spreadsheets,
        searching for emails on Google, and guessing which contacts might actually buy. The cost here is not
        just frustration. Every hour spent chasing unverified, out-of-market leads is an hour not spent
        talking to real buyers. The pipeline shrinks while the workload grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest drain is chasing ghosts, prospects with dead or incorrect emails and disconnected phone
        numbers. Your team dials numbers that never pick up, or sends emails that bounce back or vanish into
        spam folders. Each failed attempt means more time wasted and more missed opportunities. The real
        buyers, the ones already looking at your site, stay invisible because the system cannot surface them
        in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when a good lead does come in, it often sits in a queue. The form gets filled, but no one has the
        right data to qualify it quickly. Sales reps have to dig for company size, decision-maker names, or
        buying signals, so the lead goes cold before anyone follows up. Meanwhile, 98% of visitors leave your
        website without ever being identified or scored. That is not just a missed email, it is a missed deal.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also mean you cannot filter by what matters. Outbound campaigns go to every name on
        the list, regardless of location, company size, or fit. The result is inboxes full of messages sent to
        the wrong people, non-decision makers who cannot buy, or companies too small or too large for your
        offer. This shotgun approach not only wastes effort but hurts your sender reputation. Too many bounces
        or out-of-office replies, and your domain starts landing in spam.</p>
      <p className="text-md text-white shadow-text pt-3">
        The administrative burden piles up. Someone has to keep
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;updated, double-check contact info, and try
        to spot job changes or new decision-makers. Without automation, this is a never-ending cycle. Data
        gets stale fast, so even yesterday’s hot lead can be a dead end by Friday. The team spends more time
        cleaning lists and less time selling.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most teams know the pain but think the only fix is hiring more staff or buying another tool. Yet more
        tools often mean more manual work, copying data between systems, reconciling duplicates, or fixing
        sync errors. The core problem remains: time and cash are scarce, and the manual way burns both. The
        team’s effort is spent on detective work, not on closing deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        This cycle is not unique. Every Friday, the same team who started the week with hope ends it with a
        pipeline that looks thin, a list of leads that went nowhere, and a sense that better opportunities are
        slipping past. The real cost is not just the hours lost, but the deals never even seen. Without a
        system that can surface, enrich, and score leads as they appear, the business keeps running in place
        while competitors move ahead.</p>
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
