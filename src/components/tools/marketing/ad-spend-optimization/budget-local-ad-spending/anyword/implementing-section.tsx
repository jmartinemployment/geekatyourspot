import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Rolling out Anyword for Budget Ad Copy &amp; Message Validation means your team gets a working, validated ad
        copy process in days, not weeks. Geek @ Your Spot handles the setup, mapping, and integration so you do not
        waste time on trial and error or get stuck connecting the tool to your existing marketing stack. The order
        and speed of go-live depend on your current systems and how much data you already have on hand, but the
        process is built to be as fast and low-maintenance as possible for small teams in South Florida.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is a focused consultation with Geek @ Your Spot. Here, you define your business objectives,
        the channels you run ads on, and the pain points you want to fix, like wasted spend on underperforming
        headlines or slow manual copy review. This is not a generic onboarding. The team works with you to identify
        which campaigns, platforms, and ad types are costing you the most in wasted budget and missed leads. The
        goal is to make sure Anyword is tuned to your real-world campaigns from day one, not left running in a silo.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the <GlossaryLink slug="data-quality">data quality</GlossaryLink> assessment. Geek @ Your Spot
        audits your existing ad copy, campaign results, and customer data to check for accuracy, completeness, and
        relevance. Anyword&apos;s predictive scoring and persona validation work best when the system has real
        examples and recent performance data to learn from. If your data is scattered or outdated, the team helps
        you clean and standardize it before moving forward. This step is critical, feeding Anyword poor data will
        only automate bad outcomes, so the process stops here until your inputs are reliable.</p>
      <p className="text-base text-white shadow-text pt-3">
        With data ready, Geek @ Your Spot configures Anyword to match your actual ad accounts, channels, and
        workflows. Anyword supports integrations with platforms like Google Ads, X (Twitter), and Microsoft Dynamics
        365 Sales, plus collaboration tools like Google Drive and Microsoft Word (<a id={`tools-marketing-budget-ad-copy-message-validation-anyword-implementing-source-anyword-com${idSuffix}`} href="https://www.anyword.com/integrations" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Anyword</a>,
        as of Oct 19, 2026). This means your team does not have to copy-paste between tools or manually
        export/import creative assets. The connectors are pre-built, so there is no custom coding or IT bottleneck.
        For most small businesses, this step takes less than a day once credentials and data are in order.</p>
      <p className="text-base text-white shadow-text pt-3">
        The team then sets up Anyword’s predictive performance scoring and persona-based validation. This involves
        mapping your most important audience segments, campaign types, and brand voice guidelines into the platform.
        Geek @ Your Spot helps you define what a “win” looks like, whether that’s more local leads, higher
        click-through rates, or fewer wasted impressions. The system is trained on your historical ad copy and
        performance data, so it starts producing relevant, high-scoring variations from the start. No generic
        templates, no guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        After configuration, Geek @ Your Spot runs a short pilot with your real campaigns. This is where you see
        Anyword in action, generating and scoring multiple ad copy variations, benchmarking them against your past
        campaigns, and filtering out weak messages before they go live. The team reviews results with you, tweaks
        the setup as needed, and documents the process so you can run it yourself going forward. There is no long
        training curve, Anyword’s interface is built for marketers, not data scientists, and Geek @ Your Spot’s
        support focuses on showing your staff how to use the tool in your own workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        From start to finish, most small teams in Miami-Dade, Broward, or West Palm Beach counties can go live with
        Anyword in under a week if data is ready. The process is phased: consult, clean, connect, configure, pilot,
        and handoff. Pre-built integrations and templated setup steps remove technical roadblocks, while the
        consultative approach makes sure the tool fits your real business, not an idealized version of it. If you
        already have clean data and clear campaign goals, Geek @ Your Spot can move even faster, sometimes in as
        little as two or three days.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key advantage here is that you do not need to hire a copywriter, agency, or IT consultant to get started.
        Geek @ Your Spot handles the heavy lifting, and Anyword’s automation means you can keep your team lean. Once
        live, the tool keeps running in the background, scoring and validating every new ad message before it hits
        your budget. If your business changes, new products, new neighborhoods, new channels, the same process
        applies: update your data, map the changes, and let Anyword’s predictive engine do the work. You stay in
        control, and your ad spend goes only to what actually works.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-your-spot-deploys-anyword-in-your-marketing-stack-step-by-step" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot deploys Anyword in your marketing stack, step by step
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-your-spot-deploys-anyword-in-your-marketing-stack-step-by-step-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot deploys Anyword in your marketing stack, step by step
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
