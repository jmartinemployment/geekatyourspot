import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing whether Manychat is right for your small business means looking at both what it can do and
        how its pricing model fits your needs. Manychat is designed for businesses that handle a high volume
        of social messages and want to turn those conversations into organized, trackable leads. If your team
        spends more time replying to comments and DMs than actually selling or serving customers, Manychat’s
        automation can return hours to your week and help you close more deals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manychat’s fit comes down to how your customers reach you. If most of your inbound leads come through
        Instagram, WhatsApp, Facebook Messenger, SMS, or TikTok, Manychat’s automation is built to meet you
        there. It is not a generic website chat tool or a
        full-service&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. Instead, it is a social-first platform
        that specializes in handling the messy, high-velocity world of DMs, comments, and replies across
        multiple apps. For businesses in Miami-Dade, Broward, and West Palm Beach that rely on social
        engagement, this is a direct match.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s pricing is structured to scale with your business. Manychat offers a free trial, so you
        can test its core features before committing. Paid plans start with a Pro tier that includes unlimited
        custom automations, multi-channel support, and basic inbox management. Essential and higher tiers add
        features like AI-powered conversations, advanced broadcasts, and more granular inbox rules. The
        pricing is monthly, with discounts for annual billing. Each plan includes a set number of channels and
        user seats, making it easy to predict costs as your team grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        What you pay depends on two things: the number of channels you want to connect (Instagram, WhatsApp,
        Messenger, etc.) and the scale of your contact list. Entry-level plans let you connect two or three
        channels, while higher tiers allow more. If you need to support a team with multiple staff handling
        leads, seat limits are also a factor. Manychat’s pricing model is transparent, no hidden charges for
        basic automation, but extra usage (like WhatsApp conversations beyond the free quota) can add cost as
        you scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with unpredictable lead volume, Manychat’s approach to WhatsApp is worth noting. The
        first 1,000 conversations each month are free, then you pay per additional conversation. This means
        you can start small and only pay more as your engagement grows. If your business runs seasonal
        campaigns or sees spikes in inbound messages, this structure keeps costs predictable and avoids
        surprise overages.</p>
      <p className="text-md text-white shadow-text pt-3">
        Evaluating fit also means looking at how Manychat integrates with your existing stack. If you already
        use tools like ActiveCampaign or Google Sheets for email marketing or lead tracking, Manychat can push
        contact details and tags directly into those systems. This avoids double entry and keeps your pipeline
        connected. If you need deep customization or want to build entirely new workflows, Manychat’s evidence
        does not show an open&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or scripting for custom
        code, so businesses needing heavy development may find limits here.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging Manychat, consider these criteria:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Channel coverage: Does your business get leads from Instagram, WhatsApp, Messenger, SMS, TikTok, Telegram, or email? Manychat is strongest where social engagement drives sales.</li>
        <li>Volume: If you handle dozens or hundreds of inbound messages a week, automation saves time and reduces missed leads.</li>
        <li>Team size: Plans include user seats and inbox management. If you have multiple staff, check seat limits and permissions.</li>
        <li>Integration: Manychat connects to ActiveCampaign and Google Sheets, so leads can flow into your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or marketing system.</li>
        <li>Cost structure: Pricing is monthly, with clear limits on channels and contacts. Scale up as your engagement grows.</li>
        <li>DIY vs. expert setup: Manychat is built to be user-friendly, but configuring advanced automations, tagging, and integrations takes expertise. Geek @ Your Spot handles the setup so you get the system working for your unique sales process, not just a generic template.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the real test is whether Manychat removes the pain of manual lead capture and
        follow-up. If you find your team buried in DMs, missing hot prospects, or spending hours copying
        details into spreadsheets, Manychat can make a measurable difference. The platform is not a fit for
        businesses that do not rely on social messaging or need a
        full&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;with deep website chat features. But for
        social-first businesses in South Florida, it is built for your workflow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model makes it easy to start small and grow. You can try the free trial, connect your main
        channels, and see the impact on your lead pipeline before scaling up. As your business grows, you can
        add channels, team members, and advanced features without a big jump in cost or complexity. This keeps
        Manychat accessible for small teams and ensures you only pay for what you use.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the end, judging Manychat is about matching its strengths, social-first automation, instant DM and
        comment replies, lead tagging and segmentation, and seamless integration, to your real business needs.
        If your sales depend on fast response and organized follow-up across multiple messaging apps, Manychat
        is a fit. If you need a tool that connects every social conversation to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;and keeps your team focused on selling
        instead of sorting through inboxes, its pricing and features are built for you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-manychat-fit-for-your-business-and-real-pricing-structure" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Manychat: Fit for Your Business and Real Pricing Structure
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-manychat-fit-for-your-business-and-real-pricing-structure" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Manychat: Fit for Your Business and Real Pricing Structure
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
