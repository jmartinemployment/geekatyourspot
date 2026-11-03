import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business that handles email campaigns manually pays in lost hours, missed sales, and rising
        frustration. When your team has to build, personalize, and send every email by hand, the process slows to a
        crawl and mistakes slip through. The time you spend managing lists, writing subject lines, and segmenting
        your audience is time you cannot use to serve customers or grow your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual email campaigns create bottlenecks as soon as your list grows past a few dozen contacts. The first
        signs are subtle: emails go out late, the same generic message lands in every inbox, and your open rates
        start to drop. You may try to personalize by copying and pasting names or offers, but this only adds to the
        risk of errors, wrong names, broken links, or mismatched content. Each error chips away at your credibility.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and Palm Beach, the cost of generic emails is real. When your
        messages look and sound the same, customers ignore them or <GlossaryLink slug="opt-out">unsubscribe</GlossaryLink>.
        Leads that could have turned into sales drift away. The hours spent tinkering with lists and templates are
        hours not spent talking to customers or closing deals. If you want to test what works, say, different
        subject lines or send times, you have to do it all by hand, then sift through the results yourself. That is
        not just slow; it is unsustainable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Outgrowing a basic or free email tool brings its own pain. Many small businesses start with a free plan,
        only to hit a hard cap on contacts, sends, or features just as their campaigns begin to work. Suddenly, you
        face a choice: pay far more than you budgeted, or start over with another tool. Either way, you lose
        momentum and risk confusing your audience with inconsistent branding and delivery.</p>
      <p className="text-base text-white shadow-text pt-3">
        Writing subject lines and content that actually convert is another stumbling block. Without help, you are
        left guessing what will work. Testing different versions by sending them to small groups and tracking
        results by hand is tedious. Most teams either skip it or settle for whatever comes to mind, missing out on
        proven ways to boost engagement. When your list is small, the impact may be minor. As you grow, the cost of
        missed clicks and lost sales adds up fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="audience-segmentation">Audience segmentation</GlossaryLink>, the process of grouping
        contacts by interests, behavior, or purchase history, is where manual efforts usually break down. Without
        automation, you either send the same generic message to everyone or spend hours sorting lists for each
        campaign. Both options waste time and leave money on the table. The more you try to personalize, the more
        complex and error-prone your workflow becomes. For a team of one or two, this is simply not sustainable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automating <GlossaryLink slug="welcome-series">welcome series</GlossaryLink>, <GlossaryLink slug="abandoned-cart-email">abandoned
        cart reminders</GlossaryLink>, or <GlossaryLink slug="re-engagement-campaign">re-engagement campaigns</GlossaryLink> by
        hand is nearly impossible. Each flow requires careful timing, custom content, and tracking who should
        receive what message and when. Without automation, these high-value touches either do not happen or happen
        so inconsistently that you cannot measure their impact. You end up missing out on easy wins, reminding a
        customer to complete a purchase, or welcoming a new subscriber with a timely offer, because the manual setup
        is just too much work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual <GlossaryLink slug="a-b-testing">A/B testing</GlossaryLink> is another drag on your team. If you want
        to know which subject line or call-to-action works best, you have to set up separate sends, track the
        results, and decide what to do next. Most small teams skip this step because it is too much work for too
        little payoff. The result is a cycle of guesswork and missed opportunities to improve your campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        All of these problems add up to the same outcome: your emails are ignored, your team is burned out, and your
        business misses out on sales that should have been easy wins. The manual approach to Personalized Email
        Campaigns is not just inefficient, it is a barrier to growth. Small businesses need a way to deliver
        relevant, timely, and personal messages without hiring a full-time marketer or spending every spare hour on
        email. That is the gap Mailchimp is designed to close.</p>
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
