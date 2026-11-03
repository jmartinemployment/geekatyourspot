import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual email campaigns drain small teams in South Florida of both time and sales. Each new lead means
        another round of copying, pasting, and sending the same basic message, regardless of where that contact came
        from or what they want. The cost is clear: hours lost to repetitive work and opportunities missed because
        the follow-up is too generic or too slow.</p>
      <p className="text-base text-white shadow-text pt-3">
        When a website form collects a lead, that contact often falls into a one-size-fits-all sequence. The same
        happens when leads come from Facebook ads, Google ads, or social media. Instead of a message tailored to
        each person’s interests or actions, everyone receives the same introduction. Real prospects who might have
        bought or booked fall through the cracks because the follow-up is not matched to their needs. The business
        pays twice: once in wasted effort, and again in sales that never close.</p>
      <p className="text-base text-white shadow-text pt-3">
        The problem gets worse as the list grows. Teams spend more time trying to keep up with the volume, but the
        quality of communication drops. Each campaign becomes a scramble to build new pages and emails from scratch,
        often duplicating work that could be reused or automated. Promotions that should be quick to launch turn
        into a series of manual tasks, drafting new emails, building <GlossaryLink slug="landing-page">landing pages</GlossaryLink>,
        and trying to segment the audience by hand. The cycle repeats with every campaign, and the team never gets
        ahead.</p>
      <p className="text-base text-white shadow-text pt-3">
        No follow-up after the first message is another common failure. A prospect may receive a <GlossaryLink slug="welcome-series">welcome
        email</GlossaryLink>, but unless someone remembers to send the next message, the conversation stops. Leads
        with different needs, someone ready to buy, someone just looking for information, are treated the same. The
        business never learns which messages work best because every contact is pushed through the same incomplete
        journey. Over time, this means lower engagement, fewer replies, and a shrinking return on the time invested
        in email.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every manual process introduces risk. Human error, sending the wrong message, missing a follow-up, or
        failing to update a contact list, can cost a sale or damage a relationship. Small teams in West Palm Beach,
        Broward, and Miami-Dade counties feel this pain acutely. They do not have extra staff to double-check every
        campaign or chase every lead. Instead, they watch as competitors who automate their follow-up move faster
        and convert more business, often with fewer resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to personalize at scale without automation is not practical. Even with the best intentions, teams
        fall back on bulk emails that get ignored. The pressure to keep up leads to shortcuts, skipping <GlossaryLink slug="email-segmentation">segmentation</GlossaryLink>,
        sending generic content, or letting leads go cold. The business spends more time on email but sees fewer
        results. The real cost is not just in labor, but in lost momentum and missed growth. For small businesses,
        every hour and every lead counts. Without a better system, manual campaigns will always hold them back.</p>
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
