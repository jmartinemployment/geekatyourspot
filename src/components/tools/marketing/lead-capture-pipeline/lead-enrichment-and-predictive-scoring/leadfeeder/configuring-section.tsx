import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Leadfeeder’s value for small businesses in South Florida comes from its ability to turn anonymous web
        traffic into a qualified, prioritized pipeline, without adding manual work. The tool is not just a
        tracker. What makes Leadfeeder effective is the way its configuration shapes how leads are captured,
        scored, and routed. Every automation, filter, and integration is set up to match the way your team
        works, not the other way around.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Leadfeeder’s configuration are its rules for identifying, qualifying, and acting on
        website visits. The process starts with company-level visitor identification. Leadfeeder’s tracking
        script records every session on your website, then matches the IP address to its proprietary,
        constantly updated database of over 60 million companies. This database is maintained and refined
        daily, which matters for local businesses because it keeps pace with new company registrations and
        changes in the Miami-Dade, Broward, and Palm Beach regions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first configuration step is defining which website behaviors signal a real sales opportunity. In
        Leadfeeder, you can set up custom feeds and filters based on firmographic data (industry, company
        size, location) and behavioral signals (pages viewed, visit frequency, time on site, and campaign
        source). For example, you might create a rule that flags any company from a certain zip code that
        visits your pricing or service pages twice in one week. These rules are not static: you can adjust
        them as your pipeline evolves, so the system always reflects your current priorities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Leadfeeder’s automation logic is built around workflows and triggers. When a company matches your
        criteria, say, a local accounting firm visits your solutions page and then your case studies,
        Leadfeeder can send an instant alert to your sales team via email or Slack. This is not just a
        notification. The alert can include enriched data: company name, industry, revenue band, and even
        recent news. For teams that want to go further, Leadfeeder’s automation can push these leads directly
        into your&nbsp;CRM&nbsp;(like HubSpot, Salesforce, or
        Pipedrive), automatically creating or updating records, tagging accounts, and assigning owners based
        on your rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation extends to&nbsp;<GlossaryLink slug="lead-scoring" className="text-[#0B162A] hover:underline">lead scoring</GlossaryLink>. Leadfeeder’s
        built-in Intent Score is a multi-factor, time-weighted model. It considers how many pages a company
        viewed, which pages (with heavier weight to high-intent pages like pricing or demo), how many unique
        visitors from the company, and how recently they visited. You can define your own “high-intent” pages
        in the settings, so if your industry values case study engagement over blog traffic, the scoring
        reflects that. The system updates scores in real time, so reps always see the hottest accounts at the
        top of their list.</p>
      <p className="text-base text-white shadow-text pt-3">
        For more advanced automation, Leadfeeder offers a suite of workflow tools. You can automate multi-step
        actions: for example, when a company surpasses a score threshold, Leadfeeder can tag the account,
        trigger a&nbsp;CRM&nbsp;task, and send a Slack message, all
        without manual input. These automations can be as simple or as complex as your process requires. Teams
        that want to run targeted ad campaigns can use Leadfeeder’s integration to auto-refresh LinkedIn
        Matched Audiences or Google Ads based on live engagement data, ensuring your ad spend follows the
        accounts most likely to convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Leadfeeder’s extension mechanism is robust for
        a&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;product aimed at small teams. Beyond its
        native integrations with major CRMs and Slack, Leadfeeder
        provides&nbsp;API&nbsp;access for custom workflows. This means
        your developer (or Geek @ Your Spot LLC, as your implementation partner) can pull Leadfeeder data into
        other tools, sync it with your data warehouse, or even trigger proprietary automations. There’s also a
        browser plugin for identifying companies behind any website you visit, and an MCP server access point
        for letting AI assistants query your live Leadfeeder data.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Geek @ Your Spot LLC sets up Leadfeeder, the work is about mapping these rules and automations to
        your real-world process. That means working with your sales and marketing teams to define what a
        qualified lead looks like, setting up the right filters, and making sure alerts go to the right
        people. It also means configuring&nbsp;CRM&nbsp;syncs so every
        high-intent local account gets routed and tagged correctly, with no double entry. For teams with more
        complex needs, Geek @ Your Spot LLC can leverage
        Leadfeeder’s&nbsp;API&nbsp;to build custom data flows or
        reporting dashboards, but for most small businesses, the out-of-the-box automations are enough to
        eliminate manual lead triage and follow-up.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this configuration work means your team stops spending hours guessing which local
        companies are actually in a buying cycle. Instead, they get a daily hit-list of warm accounts, scored
        and ranked by real engagement, with every record enriched and routed automatically. The setup is not a
        one-time event, it’s an ongoing process. As your business grows or your market changes, you can update
        rules, add new triggers, and refine your scoring to keep your pipeline focused on the leads that
        matter most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-leadfeeder-rules-automation-and-extension-points" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Leadfeeder: Rules, Automation, and Extension Points
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
              <h2 id="what-gets-configured-in-leadfeeder-rules-automation-and-extension-points-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Leadfeeder: Rules, Automation, and Extension Points
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
