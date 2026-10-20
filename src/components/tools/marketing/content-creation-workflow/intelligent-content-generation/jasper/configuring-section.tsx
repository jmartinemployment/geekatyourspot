import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Configuring Jasper for a small business is not about flipping a switch and hoping for the best. Every
        outcome depends on how its rules, automation, and context are set up to match your real-world
        workflow. Geek @ Your Spot’s job is to close that gap. They work with you to translate the way your
        team works, approvals, brand standards, campaign timing, into Jasper’s own logic. This is what makes
        Jasper more than just another writing tool: it becomes the engine behind your content system, not a
        sidecar you have to manage separately.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s platform is built around brand control, workflow automation, and multichannel orchestration.
        The first step is configuring your Brand Voice and Style Guide. Jasper does not use generic templates;
        instead, it trains on your business’s own language, tone, and approved phrases. This means every
        asset, blog post, email, social caption, starts and stays on-message. The Style Guide enforces
        punctuation, voice, and formatting rules automatically across every output. There is no need to check
        every comma or rewrite for voice. The system applies your rules at the point of generation, not after
        the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Knowledge Base assets are the next layer. These are not just document uploads; they are structured
        repositories of the facts, claims, and context your content needs to be accurate. Geek @ Your Spot
        maps your business’s product information, service details, and market positioning into Jasper’s
        Knowledge Base, so every campaign pulls from current, verified data. When a product spec or service
        offering changes, you update it in one place. Jasper applies that change across every new asset, so
        you do not have to worry about outdated claims slipping through.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s automation logic is handled through its Canvas and Grid workspaces. Canvas is where campaign
        ideas become coordinated, multi-asset launches. You set up campaign goals, asset types, and timelines.
        Jasper then generates drafts for each channel, landing pages, emails, social posts, aligned to your
        brand and ready for review. Grid lets you scale this across many assets at once, such as a month of
        social posts or a library of product descriptions. Geek @ Your Spot configures these workspaces to
        match your process: who reviews what, what gets auto-approved, and how assets are batched or
        scheduled.</p>
      <p className="text-md text-white shadow-text pt-3">
        For approval workflows, Jasper supports structured review and sign-off. You define who needs to see
        what before it goes live, and Jasper routes drafts accordingly. This removes the back-and-forth that
        slows teams down. If your team needs legal or compliance review for certain content, Geek @ Your Spot
        can set rules in Jasper so those drafts are flagged automatically and sent to the right person. This
        keeps your content pipeline moving without risking mistakes or missed approvals.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper also includes automation for&nbsp;<GlossaryLink slug="content-repurposing">content
        repurposing</GlossaryLink>. You can set rules for how a single piece, say, a blog post, gets turned
        into a series of email snippets, social captions, or video scripts. The system adapts each asset to
        the requirements and best practices of its channel. This is not just copy-paste. Jasper reformats,
        shortens, or expands content as needed, keeping the message consistent but tailored to the platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        Extension and integration are handled through Jasper’s growing list of native connections. It
        integrates directly with Google Docs and Microsoft Word, so your team can draft and edit in familiar
        tools while keeping Jasper’s brand enforcement and data fidelity. Jasper also connects to platforms
        like Webflow, Surfer SEO, Semrush, Asana, monday.com, and Zapier. Geek @ Your Spot configures these
        integrations so that content moves automatically between Jasper and your publishing, analytics, or
        project management systems. For example, integrating Google Search Console lets Jasper’s GEO Agent
        analyze your current search performance and suggest new content or updates that target visibility
        gaps.</p>
      <p className="text-md text-white shadow-text pt-3">
        The range of integrations covers most needs for small businesses, and Geek @
        Your Spot’s experience ensures these are set up to work with your existing stack, not against it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real advantage is in how these configurations remove manual effort and risk. Once Jasper is set
        up, your team spends less time checking for brand consistency, chasing down approvals, or reformatting
        content for every platform. Instead, you get a steady flow of ready-to-publish assets, all grounded in
        your business’s real context and current data. Geek @ Your Spot’s role is to make sure every rule,
        asset, and handoff is mapped to your workflow, so Jasper delivers on the promise of intelligent
        content generation, without creating new headaches or gaps.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-jasper-rules-logic-and-extensions-that-drive-real-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Jasper: Rules, Logic, and Extensions That Drive Real Results
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
              <h2 id="what-gets-configured-in-jasper-rules-logic-and-extensions-that-drive-real-results" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Jasper: Rules, Logic, and Extensions That Drive Real Results
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
