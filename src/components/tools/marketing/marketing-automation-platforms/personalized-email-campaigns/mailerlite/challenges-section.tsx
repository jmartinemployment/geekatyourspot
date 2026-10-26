import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Trying to run personalized email campaigns by hand drains small teams and leaves money on the table. When
        every message goes to everyone, customers tune out, and your best leads slip through the cracks. The core
        cost is missed revenue, messages that could have driven a sale or appointment are ignored because they do
        not speak to the recipient’s needs or stage in the buying journey.</p>
      <p className="text-base text-white shadow-text pt-3">
        The manual approach quickly runs into hard limits. Staff spend hours copying and pasting lists, rewriting
        similar emails for different segments, and chasing down which contacts have already received what. If a
        customer signs up through your website, a Facebook form, or a trade show list, their follow-up is
        inconsistent. Some get immediate attention, some wait days, and some never hear back at all. Each of these
        gaps means lost trust and fewer conversions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mixing all interests into one list makes every campaign generic. A customer who just bought from you gets
        the same offer as someone who never opened an email. Prospects interested in one service see promotions for
        another. Over time, this drives unsubscribes and damages your <GlossaryLink slug="sender-reputation">sender
        reputation</GlossaryLink>. The team’s effort goes into damage control, fielding complaints, updating
        spreadsheets, and trying to remember who belongs in which group, rather than building relationships or
        growing the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand consistency also suffers when emails are built from scratch or cobbled together from old copies.
        Visual identity wobbles, calls to action are unclear, and the message loses impact. The result is a
        patchwork of emails that do not reflect the professionalism of your business, making it harder to stand out
        in crowded inboxes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual follow-up after each signup is another drain. Staff must remember to send welcome messages,
        onboarding materials, or offers, which often fall through the cracks when they are busy. This not only
        delays the first touchpoint with a new contact but also risks missing the critical window when that person
        is most engaged. For a small business, that is a lost opportunity that rarely comes back.</p>
      <p className="text-base text-white shadow-text pt-3">
        The lack of clear reporting means owners and managers cannot tell which campaigns are working. Without
        automated tracking, you are left guessing which emails led to appointments, sales, or repeat visits. This
        makes it impossible to double down on what works or fix what does not. Decisions are made on gut feel, not
        data, which limits growth and wastes budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        These problems add up to a cycle: more time spent on low-value tasks, less engagement from your audience,
        and a shrinking return on every campaign. Staff burnout grows as they try to do more with less, and the
        business loses its edge to competitors who can deliver relevant, timely messages at scale. For small
        businesses in Miami-Dade, Broward, and Palm Beach, the cost is not just in dollars, it is in lost
        relationships and missed chances to build a loyal customer base.</p>
      <p className="text-base text-white shadow-text pt-3">
        The status quo also makes it difficult to scale. As your list grows, the problems multiply. What worked for
        fifty subscribers breaks down at five hundred. The manual workload becomes unmanageable, and the risk of
        mistakes, sending the wrong message to the wrong person, missing a key follow-up, or duplicating effort,
        rises with every new contact. Growth stalls because the team cannot keep up, and the business is forced to
        choose between hiring more staff or accepting slower progress.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, doing personalized email campaigns by hand is not just inefficient, it is unsustainable. It limits
        what your team can achieve, frustrates your customers, and keeps your business from reaching its potential.
        The right automation tool is not a luxury; it is the only way to deliver the relevance and consistency that
        today’s customers expect, without burning out your team or breaking the bank.</p>
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
