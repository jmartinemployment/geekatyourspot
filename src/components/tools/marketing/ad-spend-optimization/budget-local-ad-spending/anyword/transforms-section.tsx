import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Anyword changes the way small teams approach Budget Ad Copy &amp; Message Validation by turning copy testing
        from a live experiment into a data-driven process you control before you spend a dollar. Instead of writing
        headlines and hoping they work, you use Anyword to generate multiple variations instantly, each tailored to
        the exact channel and audience you want to reach. This means you stop wasting time and budget on copy that
        does not convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first change is speed. Anyword generates on-brand ad copy, <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        pages</GlossaryLink>, emails, and blog posts in seconds, not hours. You give it your product basics and
        target audience, and it returns a full set of options ready for review. This covers every major ad channel,
        Google, Facebook, LinkedIn, X, and more, so you can match your message to the different styles and technical
        requirements of each platform. For a small business running on tight timelines, this puts hours back into
        your week and lets you move from idea to live campaign without waiting on outside help.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is validation. Every copy variation Anyword creates comes with a Predictive Performance Score. This
        score is based on analysis of millions of dollars in real ad spend and reflects how likely each headline or
        description is to convert for your audience and channel. You can compare versions side by side and choose
        only the highest-scoring messages to run. No more paying to find out what does not work, Anyword lets you
        filter out weak options before you ever spend a dollar on clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams, this means you can test multiple angles, hooks, and emotional appeals without blowing your
        budget on failed experiments. If you want to see which message connects best with a specific demographic,
        say, homeowners in Miami-Dade or contractors in Broward, you can use Anyword&apos;s demographic analytics to
        see which copy resonates by age, gender, or persona. This takes the guesswork out of local targeting and
        ensures your spend is focused on the people most likely to buy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword also adapts your copy to each platform&apos;s unique requirements. A headline that works in Google
        Search can be automatically rewritten to fit Facebook&apos;s tone or LinkedIn&apos;s professional style. The
        tool keeps your brand voice consistent while shifting the message structure and language for each channel.
        For teams that have struggled to get results from cross-platform campaigns, this means no more copy-paste
        errors and no more generic, one-size-fits-none messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing is no longer manual or risky. Anyword lets you run clean, controlled tests by generating <GlossaryLink slug="synthetic-persona-testing" className="text-[#0B162A] hover:underline">synthetic
        persona</GlossaryLink> scenarios. You can validate specific hooks or value propositions against your target
        buyer profiles before you go live. This makes it possible to isolate what works, headline, description, or <GlossaryLink slug="call-to-action" className="text-[#0B162A] hover:underline">call
        to action</GlossaryLink>, without the noise of changing too many variables at once. You get clear,
        actionable feedback on what drives clicks and conversions, not just impressions.</p>
      <p className="text-base text-white shadow-text pt-3">
        For ongoing campaigns, Anyword&apos;s continuous optimization features let you deploy several copy
        variations at once and automatically show the best-performing combinations to each segment of your audience.
        The platform learns from real visitor data and updates the copy in real time, so you are always running the
        highest-converting version for every traffic source. This means you do not have to monitor campaigns every
        day or manually swap out underperforming ads, the tool does it for you, returning more results for less
        effort.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is simple. Anyword connects with Google Ads, Microsoft Word, Google Drive, X, and Microsoft
        Dynamics 365 Sales, so you can push content directly to the platforms you already use (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-transforms-source-anyword-com${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). Collaboration features let your team review and refine copy together, keeping everyone
        aligned and reducing the back-and-forth that slows down small teams. Security is enterprise-grade, so you
        can trust your data and your brand voice are protected.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest change is control. Instead of spending your limited ad budget on unproven messages, you use
        Anyword to pre-validate every headline, description, and call to action. You see performance predictions,
        demographic fit, and compliance checks before you launch. This means your $500 monthly budget stretches
        further, with fewer wasted clicks and more conversions (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-transforms-source-anyword-com-2${idSuffix}`} href="https://www.anyword.com/blog/email-a-b-testing-a-practical-guide-for-marketing-teams" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Anyword</a>,
        as of Oct 19, 2026). The job of message validation, which used to require a dedicated ad manager or
        expensive agency, becomes something you do in minutes as part of your regular workflow.</p>
      <blockquote cite="https://www.anyword.com/use-cases/ad-copy-generator" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Generate multiple platform-ready versions in seconds.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this removes hours of manual drafting, endless copy tweaks, and the stress of watching your
        budget disappear on untested ideas. You no longer have to wait for live results to see what works. Instead,
        you launch campaigns with confidence, knowing that every dollar is spent on messages proven to connect with
        your real audience. For small businesses in Miami-Dade, Broward, and West Palm Beach, Anyword turns Budget
        Ad Copy &amp; Message Validation from a risky, manual chore into a reliable, automated part of your growth
        strategy.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-anyword-removes-the-guesswork-from-budget-ad-copy-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword removes the guesswork from Budget Ad Copy &amp; Message Validation
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-anyword-removes-the-guesswork-from-budget-ad-copy-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword removes the guesswork from Budget Ad Copy &amp; Message Validation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
