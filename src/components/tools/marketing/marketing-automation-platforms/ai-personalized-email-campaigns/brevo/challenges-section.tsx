import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manually running email campaigns in a small business costs you lost leads, wasted hours, and missed sales.
        Every time your team tries to segment lists by hand, build generic blasts, or chase follow-ups one by one,
        you spend time on work that does not scale and rarely pays off. The real cost is not just the hours lost but
        the missed chance to build trust and win repeat business.</p>
      <p className="text-base text-white shadow-text pt-3">
        The problem starts when your communication is scattered. Emails, texts, and reminders sit in different apps
        or with different people. A customer might get a reply from one staff member, a follow-up from another, and
        a marketing email that sounds like it came from a stranger. This patchwork approach leads to mixed messages,
        forgotten conversations, and a sense that your business is not really paying attention. When you send the
        same message to every contact, most of it gets ignored. Recipients tune out, mark you as spam, or simply
        never open your emails. You lose the chance to move them closer to a sale or a booking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Trying to fix this with manual <GlossaryLink slug="email-segmentation">segmentation</GlossaryLink> is slow
        and error-prone. Someone has to export lists, filter by hand, and hope the right message goes to the right
        person. Even if you do this perfectly, you are still left with the problem of timing. Sending at the wrong
        hour means your email lands when your customer is busy, asleep, or simply not interested. If you try to
        solve this by sending more often, you risk annoying people and driving up <GlossaryLink slug="opt-out">unsubscribes</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pressure to personalize is real. Customers expect you to know what they want and when they want it. But
        for a small business, hand-crafting every message is not realistic. You cannot afford to spend hours writing
        custom emails or tracking every contact’s behavior across your systems. The result is a choice between
        sending generic blasts that get ignored or burning out your team trying to keep up with personal touches.</p>
      <p className="text-base text-white shadow-text pt-3">
        List management is another hidden drain. Outdated contacts, duplicates, and unverified emails all hurt your <GlossaryLink slug="sender-reputation">sender
        reputation</GlossaryLink>. If you do not keep your lists clean, your emails start landing in spam folders,
        and your <GlossaryLink slug="open-rate">open rates</GlossaryLink> drop even further. Without tools to
        monitor and warm up your sending domain, even good campaigns can get blocked or ignored by inbox providers.
        A small slip here can mean your best offers never reach the people who want them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tracking performance is the last hurdle. When your analytics are spread across several tools or buried in
        spreadsheets, it is hard to see what is working and what is not. You might know how many emails you sent,
        but you cannot tie opens, clicks, and conversions to actual sales or appointments. This makes it nearly
        impossible to justify your marketing spend or improve your approach. Teams end up guessing what to do next,
        repeating the same mistakes, and missing out on easy wins.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real cost of manual or generic email campaigns is not just time and money wasted. It is the lost
        relationships, the missed sales, and the slow erosion of trust with the people who should be your best
        customers. For a small business in South Florida, every touchpoint matters. If your team cannot keep up, or
        your emails sound like everyone else’s, you are handing business to faster, more organized competitors.</p>
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
