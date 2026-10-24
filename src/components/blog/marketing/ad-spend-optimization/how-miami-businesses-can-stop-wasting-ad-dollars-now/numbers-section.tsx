export default function NumbersSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The data shows that Budget Ad Copy &amp; Message Validation cuts wasted spend and improves conversions for
        Miami small businesses, but there are clear limits. Tools like Anyword, AdCreative, and LocaliQ all claim to
        predict or test copy before you spend, and they do let you filter out weak ads. What is proven is that using
        predictive scoring, AI-generated variants, and automated creative refreshes saves both time and money by
        preventing dud ads from running live. These platforms do not promise a set dollar figure, but their own case
        studies and live dashboards show reduced cost per lead when you switch from manual to automated message
        testing.</p>
      <p className="text-base text-white shadow-text pt-3">
        With Anyword, the standout proof point is the Predictive Performance Score. The platform lets you see which
        ad copy will likely perform best before you spend anything. This is not guesswork; Anyword gives each
        headline and body a score based on historical conversion data, allowing you to filter out the versions that
        would have burned money without results. That means ad dollars get spent only on variants with a track
        record of driving clicks or calls. When you use frameworks like AIDA or PAS inside Anyword, it generates
        fresh copy options and tells you upfront which ones have a higher chance of achieving measurable results.
        This approach is not just about saving on writer fees, it is about not having to pay for live tests that
        never had a real shot at working.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative brings a different kind of evidence to the table. It is not just about copy, but about graphics,
        layouts, and brand consistency. AdCreative automatically applies your brand colors and fonts to every ad
        variant, and it generates new creative batches in seconds. The platform claims, and demonstrates through
        live case studies, that keeping the look and feel on-brand and fresh prevents ad fatigue and keeps
        click-through rates from dropping over time. If your ad campaign stalls after two weeks because the audience
        has seen the same image twenty times, AdCreative solves that by refreshing creative continuously, no manual
        redesigns, no waiting.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ, meanwhile, is proven in its ability to weed out junk clicks and focus spend on high-intent local
        buyers. The platform’s engine locks down geography, tightens keyword matching, and shows exactly which
        platform or creative drove the last real lead. This is not only about validation before launch, it is about
        knowing which ad and which message actually closed the call or the form fill. LocaliQ’s reporting closes the
        loop, so you can see if your spend is working in real time, not just after the month is over.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where the numbers are thin is in published, independent ROI figures for Miami small businesses specifically.
        While Google Performance Max, Adzooma, and Plai all promote their optimization and automation features, what
        is on the record are platform-specific dashboards, predictive scores, and time-saving claims, not
        peer-reviewed studies or third-party audits. These tools automate message validation and spend optimization,
        but the only way to know your savings is to run a pilot and compare your own results. The evidence is solid
        that you will see fewer wasted clicks, more consistent leads, and less time spent fixing ad errors, but no
        tool guarantees a fixed percentage or dollar amount saved for every user.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Budget Ad Copy &amp; Message Validation delivers what it promises: fewer wasted ads, lower cost
        per lead, and a faster path from message to conversion. The outcomes are real at the use case level,
        predictive scoring, on-brand creative, and spend tracking all show up in the numbers. What you will not find
        is a magic formula or a one-size-fits-all ROI. Each tool brings proof in its own way, but the real
        validation is in your own campaign metrics after implementation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-the-numbers-actually-show-about-budget-ad-copy-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the numbers actually show about Budget Ad Copy &amp; Message Validation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-the-numbers-actually-show-about-budget-ad-copy-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the numbers actually show about Budget Ad Copy &amp; Message Validation
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
