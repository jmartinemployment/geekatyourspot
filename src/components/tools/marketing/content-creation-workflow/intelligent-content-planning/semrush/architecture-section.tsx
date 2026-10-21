import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Semrush is built as a unified platform that connects data, automation, and multi-channel publishing in
        one place. Under the hood, its core is a massive search intelligence engine, one of the largest
        commercial keyword databases in the world, with over 26 billion Google keywords and more than 43
        trillion backlinks tracked. This scale is not just for show. It allows Semrush to surface local,
        low-competition opportunities that would be invisible to smaller or less specialized tools. For a
        small business in West Palm Beach, this means the platform can spot the exact topics and search terms
        that national competitors are missing, giving the local team a chance to win traffic without
        outspending anyone.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture is modular. The SEO Toolkit, AI Visibility Toolkit, and specialized add-ons (like
        Social, Local, and Advertising) each cover a key part of the content and marketing workflow. Teams can
        start with a base plan and add only what they need, there is no forced bundle of tools that never get
        used. For local businesses, the Local toolkit includes features like automated Google Business Profile
        management, AI-powered post generation, and directory listing updates, all managed from the same
        platform. This is not a bolt-on; it is a native part of the Semrush stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        Semrush’s integration layer is designed to connect with the systems small businesses already use. Out
        of the box, it supports direct connections to Google Analytics, Google Search Console, Google Ads, and
        Adobe Analytics. This means performance data, keyword rankings, and ad spend flow into Semrush
        automatically. Teams do not have to manually export and import spreadsheets or log into multiple
        dashboards to see what is working. For businesses already running on Google’s suite, the integration
        is a two-minute setup, no IT project needed. This lets a small team see, in one place, how their
        content is performing across search, paid, and local channels.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is built to handle automation at every stage. Routine tasks like prompt generation, link
        recommendations, content optimization, and even&nbsp;<GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink>&nbsp;are managed by Semrush’s automation engine. The workflow is not a static
        checklist, it adapts to the business’s own rules and priorities. For example, if the team wants every
        post to go through legal before publishing, that rule can be set once and enforced automatically. If
        the business needs to prioritize certain products or services, Semrush’s reporting and content tools
        can be tuned to surface those opportunities first.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting in Semrush is not an afterthought. The platform’s data lake architecture supports custom
        reporting at any level, from executive dashboards to deep-dive analytics for the marketing team.
        Reports can be scheduled, exported, and shared without leaving the platform. For teams working with
        external agencies or consultants, white-labeling and shareable links make it easy to keep everyone on
        the same page. The reporting engine does not just show what happened; it connects performance to
        business outcomes, forecasting how changes in content or visibility will affect leads, sales, or local
        foot traffic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and scalability are built in. While Semrush is used by global enterprises, its architecture
        is just as accessible for small teams. Each workspace is isolated, with flexible user management and
        role-based permissions. This means a small business can give access to a social media coordinator, a
        manager, and an outside consultant, each with the right level of control. The platform’s always-on
        site intelligence and compliance monitoring are there for larger operations, but do not get in the way
        for a small local team focused on results.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a system where data, automation, and publishing work together, not in silos. Semrush
        holds everything needed for a full content workflow, topic discovery, drafting, optimization,
        scheduling, approval, and reporting, in a single, integrated environment. For a South Florida
        business, this means no more bouncing between disconnected tools or losing track of what was posted
        where. The architecture is not just about technology; it is about removing friction so small teams can
        act like big ones, without the overhead or the learning curve.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-semrush-platform-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Semrush: Platform Architecture, Integrations, and Data Flow
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
              <h2 id="what-powers-semrush-platform-architecture-integrations-and-data-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Semrush: Platform Architecture, Integrations, and Data Flow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
