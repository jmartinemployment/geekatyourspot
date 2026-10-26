import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The moment you realize your emails are not driving replies or sales is usually when you see that your
        efforts are being wasted on generic messages. You know that people ignore mass email blasts, but trying to
        personalize every send by hand is not realistic for a small team. The real pain is not just low open rates;
        it is seeing conversations stall and leads slip away because follow-up is slow, inconsistent, or
        forgettable.</p>
      <p className="text-base text-white shadow-text pt-3">
        For many Miami small businesses, this problem appears as a daily grind: exporting lists, tweaking subject
        lines, rewriting the same intro in twenty versions, then trying to remember who got what and when. Your best
        contacts get the same reminders and offers as your coldest prospects. It is easy to miss someone who would
        have bought with a nudge or to send the wrong deal to a regular who deserved something better. You want
        every email to feel like it came from a person, but the manual approach makes that impossible once your list
        is bigger than a few dozen.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not just a marketing frustration; it is a business bottleneck. Manual personalization slows down
        sales cycles, especially when leads come from different channels, website forms, referrals, old
        spreadsheets, social media. Without a system to sort and follow up, everyone receives the same incomplete
        intro, or worse, no follow-up at all. The front-desk staff or owner spends evenings cutting and pasting
        messages, hoping to keep up. When the inbox finally fills, you have no clear sense of which campaign worked,
        which leads are real, or how much time and money you just spent for nothing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida do not have the luxury of a full-time marketer or <GlossaryLink slug="crm">CRM</GlossaryLink> manager.
        That means every hour spent on manual email work is an hour not spent on customer calls, proposals, or
        actual delivery. The cost of inaction is not just missed sales, but a steady drift toward irrelevance. The
        more impersonal your emails, the more likely you are to be ignored or marked as spam. Meanwhile, competitors
        who automate their campaigns look more polished and respond faster, even with the same headcount.</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line: trying to personalize at scale by hand is not sustainable. You cannot keep up with the
        volume, and you cannot get the results you want without burning out staff or letting errors creep in. The
        real solution is not to work harder, but to use the right automation platform, one that keeps the human
        touch while handling the grunt work behind the scenes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-doing-personalized-email-campaigns-by-hand-breaks-down-before-it-pays-off" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why doing personalized email campaigns by hand breaks down before it pays off
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
              <h2 id="why-doing-personalized-email-campaigns-by-hand-breaks-down-before-it-pays-off-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why doing personalized email campaigns by hand breaks down before it pays off
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
