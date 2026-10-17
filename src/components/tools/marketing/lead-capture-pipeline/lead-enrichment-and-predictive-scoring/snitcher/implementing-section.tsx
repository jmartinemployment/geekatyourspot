import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher stands out for small businesses because it does not drag out the go-live process with weeks
        of technical setup or drawn-out onboarding calls. Instead, the platform is designed for speed. Most
        teams get real results within the first day, not weeks. The difference comes down to two things: how
        Snitcher is built, and how Geek @ Your Spot handles the roll-out for South Florida clients.</p>
      <p className="text-md text-white shadow-text pt-3">
        What shortens go-live with Snitcher is its lightweight deployment. The core setup is a single line of
        code in your website’s header. Once in place, Snitcher starts surfacing company-level visitor data
        within minutes. There is no heavy software to install, no on-premise hardware, and no need to
        coordinate with a distant IT department. For a small business with a lean technical team, or no IT
        staff at all, this means you can see named companies in your dashboard the same day the script goes
        live.</p>
      <p className="text-md text-white shadow-text pt-3">
        The process Geek @ Your Spot follows starts with a focused discovery session. Here, the team looks at
        your sales and marketing stack to confirm which CRMs, outreach tools, and chat platforms you already
        use. Snitcher’s pre-built connectors cover HubSpot, Salesforce, Pipedrive,
        Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Slack, Zapier, and more. This means no
        custom&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;work or expensive middleware. Instead,
        Geek @ Your Spot maps out the right integrations and moves straight to connecting Snitcher to your
        existing tools.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Discovery: Audit your current systems (<GlossaryLink slug="crm">CRM</GlossaryLink>,&nbsp;<GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink>, chat, analytics).</li>
        <li>Setup: Drop Snitcher’s tracking code into your website’s header.</li>
        <li>Integration: Connect Snitcher to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;and communication tools with pre-built connectors.</li>
        <li>Configuration: Set up notification rules,&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>&nbsp;criteria, and routing logic (handled in later sections).</li>
        <li>Go live: Monitor the first day’s data and adjust filters to eliminate noise or irrelevant traffic.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is the practical approach for most small businesses. Geek @ Your Spot typically
        starts with a pilot on your main domain, keeping the scope tight to spot and resolve any edge cases.
        For companies with multiple brands or microsites, it is important to know that Snitcher bills per
        domain, not per subdomain. Each property needs its own setup, and additional domains are priced as
        add-ons. This structure avoids surprises on your first invoice and keeps the process predictable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Snitcher’s self-serve model also means you do not have to wait for a sales call or a training session
        to get started. The 14-day free trial lets your team see their own traffic in action, and Geek @ Your
        Spot can run this trial in parallel with existing systems. This is not a black-box rollout. You get
        immediate visibility into which companies are landing on your site, which campaigns are driving real
        business visitors, and what pages they are exploring.</p>
      <p className="text-md text-white shadow-text pt-3">
        The biggest time-saver is that Snitcher does not require a data warehouse, a custom implementation
        project, or ongoing maintenance. Once live, there is nothing for your team to babysit. Updates and
        improvements are handled by Snitcher, and Geek @ Your Spot remains available for support and
        optimization, but the day-to-day upkeep is zero. This is a critical difference from legacy tools that
        require ongoing IT involvement or regular manual exports.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real impact shows up in your sales team’s week. Instead of guessing which leads to chase, reps get
        alerts the moment a high-intent account visits a pricing page or downloads a case study. Marketing no
        longer waits for form fills to measure campaign ROI. From day one, your pipeline is filled with real
        company names, not just anonymous traffic stats. That Friday afternoon in the Miami office, the one
        where the team used to debate who to call next, now starts with a ranked list of companies who were on
        your site that morning. The detective work is gone. The team works the list, not the inbox.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-snitcher-goes-live-speed-steps-and-what-makes-it-different" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Snitcher Goes Live: Speed, Steps, and What Makes It Different
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
              <h2 id="how-snitcher-goes-live-speed-steps-and-what-makes-it-different" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Snitcher Goes Live: Speed, Steps, and What Makes It Different
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
