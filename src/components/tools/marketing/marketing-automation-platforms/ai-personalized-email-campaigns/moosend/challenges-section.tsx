import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual email personalization drains time and leaves money on the table. When a small business in South
        Florida tries to tailor messages by hand, staff spend hours sorting lists, rewriting content, and tracking
        who gets what. Even then, the result is usually generic: everyone gets the same offer, the same newsletter,
        or the same follow-up. That approach wastes the very data you worked to collect, and it shows up as lost
        sales and lower engagement.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first problem is that website subscribers enter your list but receive no next step. Without a reliable
        system, these contacts sit idle. Staff may plan a <GlossaryLink slug="welcome-series">welcome email</GlossaryLink> or
        a <GlossaryLink slug="drip-marketing">drip sequence</GlossaryLink>, but with no automation, it rarely goes
        out on time, if at all. Every day a new lead waits for a follow-up, interest fades and your list grows
        colder. The cost is not just in missed opportunity but in the hours spent chasing down who needs what, when.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, contacts interested in different services get identical messages. A business that offers several types
        of service, or sells to both new and repeat buyers, cannot expect the same email to resonate with everyone.
        But when staff lack the tools to segment by interest or customer stage, they default to one-size-fits-all.
        Prospects tune out, and loyal customers start ignoring your messages. The list gets less valuable with every
        blast, and churn creeps up.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual follow-up is another pain point. Staff are left sending repetitive emails, tracking responses on
        spreadsheets, and trying to remember who has received what. Even a simple <GlossaryLink slug="lead-nurturing">nurture
        sequence</GlossaryLink>, like a three-part welcome or a post-purchase check-in, becomes a recurring task.
        This eats up hours every week and introduces errors: missed messages, duplicate sends, or the wrong content
        for the wrong person. The more your list grows, the worse the problem gets.</p>
      <p className="text-base text-white shadow-text pt-3">
        Engaged and disengaged contacts receive the same treatment because there’s no practical way to track
        behavior manually. Someone who always opens and clicks gets no more attention than someone who hasn’t
        engaged in months. Without behavioral targeting, you miss your best opportunities to upsell, cross-sell, or
        re-engage lapsed customers. At the same time, you risk annoying loyal subscribers with irrelevant
        follow-ups.</p>
      <p className="text-base text-white shadow-text pt-3">
        Useful campaigns are rebuilt from scratch each time. Staff copy old emails, tweak a few lines, and hope for
        the best. There’s no library of templates, no automation recipes, and no AI assistance for drafting new
        content. This not only wastes time but also leads to inconsistency, different team members use different
        formats, and branding slips. The result is a fragmented customer experience and a team that spends more time
        on mechanics than on strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost is not just the direct labor spent on these tasks, but the lost revenue from missed
        follow-ups, disengaged customers, and a shrinking list of truly interested prospects. As your team gets
        bogged down in manual work, you lose the ability to act quickly on new leads or changing customer needs. The
        gap between a business that automates and one that does not is the difference between steady growth and slow
        decline.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend addresses these failures by providing a system that automates the entire workflow. Instead of staff
        sorting lists and tracking follow-ups, Moosend uses <GlossaryLink slug="contact-tagging">tags</GlossaryLink> and
        segments to separate contacts by interest or customer stage. Behavioral data, like opens, clicks, and
        purchases, drive targeted campaigns, so engaged and disengaged contacts get different messages. Automation
        recipes and AI-powered content tools mean you never have to start from scratch, and every campaign builds on
        what worked before. The result is a consistent, scalable process that frees your team to focus on strategy,
        not busywork.</p>
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
