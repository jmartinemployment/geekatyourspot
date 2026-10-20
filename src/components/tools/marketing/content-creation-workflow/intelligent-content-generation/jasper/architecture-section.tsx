import Link from "next/link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s platform architecture is designed around three priorities: strict brand control, deep
        integration with existing business tools, and reliable data management. These are not abstract
        promises, they are the foundation that lets a small business automate content production without
        losing control or introducing risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the core is Jasper IQ, the system that enforces brand voice, style, and compliance rules in real
        time. Jasper IQ is always on, applying your Brand Voice and Style Guide to every asset the platform
        generates. This covers not just tone and vocabulary, but also required disclaimers, approved claims,
        and visual guidelines for images. With Jasper IQ, you do not have to worry about a rogue email or post
        going out with off-brand language or missing legal language. The platform’s agents reference your
        guidelines on every draft, so brand integrity holds across every channel, every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s Knowledge Base and Product IQ modules are where your business’s facts live. The Knowledge
        Base holds everything from campaign briefs and product specs to customer stories and market data.
        Product IQ takes this a step further, letting you define products in a customizable schema, specs,
        pricing, value propositions, differentiators, and compliance requirements. Once entered, these details
        are enforced everywhere: update a product feature once, and Jasper pushes that change to every piece
        of content that references it, across the website, blog, emails, and ads. This single-source-of-truth
        approach eliminates the risk of outdated or inconsistent information leaking into your marketing.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another pillar of Jasper’s architecture. The platform connects natively to tools South
        Florida small businesses already use. Jasper supports direct integrations with Google Docs, Microsoft
        Word, Webflow, and social scheduling platforms, so content moves smoothly from draft to published
        without breaking formatting or losing context. Jasper’s GEO Agent can pull data from Google Search
        Console to identify visibility gaps in your content, and integrations with&nbsp;<Link id={`tools-marketing-intelligent-content-generation-jasper-architecture-semrush${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush" className="text-[#0B162A] hover:underline">Semrush</Link>, Asana, monday.com,&nbsp;<Link id={`tools-marketing-intelligent-content-generation-jasper-architecture-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#0B162A] hover:underline">Zapier</Link>, and Surfer SEO bring campaign planning, analytics, and publishing into a single workflow. This
        means you do not have to rebuild your tech stack or learn a dozen new systems to benefit from Jasper’s
        automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and governance are built in. Jasper’s access controls let you define who can edit, approve,
        or publish content, so sensitive information is protected and compliance risks are managed. The system
        tracks every change, keeping a full audit trail for review and accountability. For teams that need to
        scale up content production, Jasper’s Grid and Canvas modules allow for structured collaboration,
        multiple users can work on different assets at once, with all updates synced in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Jasper’s automation is flexible, not rigid. You can automate variations for different audiences,
        channels, or regions, and the platform adapts each output to the requirements of its destination. Need
        to localize a campaign for different markets? Jasper can adapt language, tone, and even compliance
        details based on the audience profile. Scheduling and publishing can be managed in bulk, so a week’s
        worth of content goes live on time, every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The architecture’s real value is in what it prevents. No more outdated product facts in a new blog
        post. No more off-brand messaging slipping into a campaign. No more wasted hours reformatting content
        for each platform. Jasper’s underlying design gives small teams the same level of control and
        efficiency that used to require a dedicated marketing department and a suite of enterprise tools. The
        business owner in the opening scenario now has a platform that keeps every message clear, current, and
        on brand, without adding headcount or complexity.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="jaspers-underlying-architecture-brand-control-integrations-and-data-fidelity" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Jasper’s Underlying Architecture: Brand Control, Integrations, and Data Fidelity
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="jaspers-underlying-architecture-brand-control-integrations-and-data-fidelity-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Jasper’s Underlying Architecture: Brand Control, Integrations, and Data Fidelity
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
