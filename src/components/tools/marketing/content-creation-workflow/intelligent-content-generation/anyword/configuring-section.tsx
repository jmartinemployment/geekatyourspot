import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s configuration process is about setting up the platform to work for your specific business
        goals, not just turning on an out-of-the-box tool. The rules and automation logic you set in Anyword
        decide how it generates, scores, and delivers content. This is where Geek @ Your Spot LLC’s implementation
        work matters: the platform is powerful, but it needs to be mapped to your real workflows, brand
        standards, and marketing stack to return value.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is defining your brand’s voice and guidelines inside Anyword. The platform lets you set
        detailed rules around tone, style, word lists, and even banned phrases. These settings ensure that all
        content, whether it’s an Instagram caption, a Google Ad, or a blog intro, stays on-brand. You build
        these rules once, and Anyword applies them automatically every time it generates copy. For a small
        team, this means you never have to rewrite AI drafts to fit your business’s personality or worry about
        off-message posts slipping through.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, Anyword’s automation logic comes into play. The platform uses predictive performance scoring,
        which means it rates every piece of content it creates before you publish it. These scores are based
        on real marketing data for your industry and channel, not just general language models. You can
        configure thresholds for these scores, so, for example, only content above a certain predicted
        engagement or conversion rate gets scheduled for posting. If a draft doesn’t make the cut, Anyword can
        automatically tweak it to try for a better score, without a human stepping in. This is the core of its
        automation: the system generates, evaluates, and optimizes content in one closed loop.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting is another layer of configuration. Anyword allows you to define customer personas
        by demographics, interests, and pain points. The platform then tailors content to these segments,
        automatically adjusting messaging for each audience. For email campaigns, you can set up drip
        sequences that adapt subject lines, body copy, and calls-to-action for different buyer profiles,
        without writing each variant by hand. This is especially useful for small businesses that want to look
        personal at scale but do not have the headcount for manual customization.</p>
      <p className="text-base text-white shadow-text pt-3">
        Workflow automation is built in. You can set up approval rules, so that content for certain channels
        or above a dollar threshold gets routed to a manager before going live. Anyword’s logic can also
        automate bulk scheduling, pushing a month’s worth of posts or emails to your calendar in minutes. If
        your business has seasonal promotions or recurring campaigns, you can build templates and automation
        triggers that generate and schedule new assets at the right time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s extension mechanism is integration-based. The platform connects directly to marketing and
        sales tools like HubSpot, Marketo, Salesforce ExactTarget, Facebook, Instagram, LinkedIn Ads, Google
        Ads, and more. These integrations allow Anyword to pull in your historical campaign data, learn from
        what worked, and push new content directly to the right platform. You do not need to manage complex
        scripting or APIs, configuration happens through platform connectors and mapped data fields. For teams
        that want to go deeper, Anyword offers an&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;for
        custom workflows, but most small businesses will get full value from the standard integrations and
        automation options.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to translate your business’s content strategy, brand rules, and operational
        quirks into Anyword’s configuration. This means mapping your existing approval chains, data sources,
        and campaign types to the platform’s logic. The consultancy also handles the initial training of
        Anyword’s AI on your best-performing past content, so the system learns your voice and audience
        preferences from day one. For a small business, this takes the risk and guesswork out of the setup,
        your team gets a tailored, ready-to-run content engine instead of a generic AI writing tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your environment changes, new product lines, different customer segments, or a rebrand, Anyword’s
        configuration is flexible. You can update templates, rules, and personas without rebuilding the whole
        workflow. The platform’s automation logic adapts to new inputs, so your content stays relevant even as
        your business evolves. For South Florida teams juggling multiple channels and shifting priorities,
        this flexibility is what keeps content generation efficient and on-message.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-anyword-rules-automation-and-extension-options" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Anyword: Rules, Automation, and Extension Options
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-anyword-rules-automation-and-extension-options-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Anyword: Rules, Automation, and Extension Options
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
