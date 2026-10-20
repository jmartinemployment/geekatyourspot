import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s architecture is built to centralize every part of the social content lifecycle, planning,
        creation, approval, publishing, engagement, and analytics, into one unified system. For small
        businesses in South Florida, this means no more stitching together separate tools for writing,
        scheduling, asset management, and reporting. Everything connects through the Hootsuite dashboard,
        which acts as the command center for all social activity.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its core, Hootsuite is a
        multi-tenant&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;platform.
        Each business gets its own secure workspace, with user roles and permissions that control who can
        create, edit, approve, or publish content. The platform offers direct integrations with major social
        networks, Facebook, Instagram, LinkedIn, TikTok, X (Twitter), Pinterest, YouTube, and more, so posts,
        messages, and analytics flow in and out in real time. Teams can manage all these channels without
        logging in and out of multiple apps.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the biggest strengths is Hootsuite’s integration ecosystem. The platform connects to Adobe
        Creative Cloud and Adobe Stock, letting users search, license, and edit creative assets directly
        inside Hootsuite. This keeps the creative workflow uninterrupted: images and videos are pulled,
        optimized, and published without ever leaving the dashboard. Canva templates are also built in, so
        non-designers can quickly create branded visuals for posts.</p>
      <p className="text-md text-white shadow-text pt-3">
        For analytics and business intelligence, Hootsuite integrates with Google Analytics and Adobe
        Analytics. This means a business is not just tracking likes or shares, they can see how social posts
        drive actual website visits, sign-ups, or sales. Link tracking and attribution tools tie every post to
        a specific outcome, so it’s clear which content is generating real leads or conversions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s AI engines, Wisdom, OwlyWriter AI, and OwlyGPT, are embedded in the core platform. They
        pull from live social data, not just static templates, so every recommendation or draft is based on
        what’s trending now in the user’s industry and location. These AI systems handle everything from
        generating post ideas to summarizing social insights, detecting sentiment shifts, and forecasting
        trends up to 90 days ahead. This is especially useful for small teams who cannot afford to miss a
        local event or viral moment.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s content library acts as a central repository for all assets, images, videos, post
        templates, and more. Assets are tagged, searchable, and ready to be reused or adapted for future
        campaigns. This reduces duplicated effort and ensures brand consistency across every channel and
        campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        Collaboration is also built into the architecture. Hootsuite supports integrations with Slack and
        Microsoft Teams, so teams can share content, get approval notifications, or discuss campaigns without
        leaving their main communication tools. This makes the approval process faster and keeps everyone in
        the loop, even when working remotely.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the data side, Hootsuite keeps a detailed record of every action, who created, edited, approved, or
        published each post. This audit trail is essential for compliance, especially in regulated industries.
        The platform also supports multi-step approval workflows, permission controls, and customizable
        dashboards, so each team can see the data and tasks that matter most to them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite’s analytics engine aggregates data across all connected networks, surfacing engagement
        rates, impressions, shares, and other key metrics in a single view. The Cross Network Posts Table lets
        teams compare performance side-by-side, spot top-performing content, and benchmark against
        competitors. For TikTok, Pinterest, and LinkedIn Pages, dedicated metrics add even more detail.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every part of the platform is designed to scale as the business grows. Whether managing a single brand
        or dozens of locations, everything, assets, workflows, analytics, remains centralized and accessible.
        The result is a system where a two-person team can manage the same complexity and volume of content as
        a much larger marketing department, without losing oversight or control.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-behind-hootsuite-platform-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Behind Hootsuite: Platform Architecture, Integrations, and Data Handling
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-behind-hootsuite-platform-architecture-integrations-and-data-handling" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Behind Hootsuite: Platform Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
