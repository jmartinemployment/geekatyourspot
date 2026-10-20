import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rytr is built as a
        cloud-based&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;platform,
        optimized for quick deployment and minimal training. Its architecture is modular, with each use case,
        caption generator, product description writer, email composer, operating as a discrete module within
        the platform. This means you only see the tools you need, and the interface remains uncluttered even
        as the platform adds new features.</p>
      <p className="text-md text-white shadow-text pt-3">
        Language support is a core strength. Rytr handles over thirty languages, including those directly
        relevant to South Florida’s diverse business landscape. This is not just a translation engine, Rytr’s
        content modules are trained to generate fluent, idiomatic copy in each supported language. You can
        write, adapt, and repurpose content across English, Spanish, Haitian Creole, and more, without hiring
        separate translators or copywriters.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tone and voice control are central to Rytr’s structure. The platform includes more than twenty preset
        tones and allows for custom tone creation. This lets businesses maintain a consistent brand voice
        across all content types, even when the person generating the content changes. For agencies or
        multi-location businesses, Rytr enables you to set separate tones for each client or location, so
        every output stays on-brand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr connects directly with key communication platforms. Out of the box, it integrates with Gmail,
        Slack, and LinkedIn. This lets you surface content drafts and relationship context right where your
        team already works, reducing the need to switch between tools. For example, you can draft an outreach
        email in Rytr and send it through Gmail, or prepare a LinkedIn post in the same environment where you
        manage your professional network.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mobile optimization is not an afterthought. Rytr’s interface is fully mobile-ready, so you can write,
        edit, and approve content from a phone or tablet. For small business owners who spend most of their
        day away from a desk, this removes a major barrier to consistent content production. You don’t need to
        wait until you’re back in the office to get a post out or approve a campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the data side, Rytr keeps things simple and secure. Content inputs and outputs are handled within
        the platform, without exposing your drafts to third-party vendors or requiring complex data mapping.
        Each use case module stores its own templates and user preferences, so you can pick up where you left
        off without re-entering information. There is no requirement to upload or sync large datasets, Rytr is
        designed for the “just in time” creation model that fits small business workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s pricing structure reflects this architecture. The platform offers a free plan with a
        10,000-character monthly limit, which is enough for micro-businesses producing five to ten short
        pieces per month. Paid plans remove the cap and add features like multiple connected sources, higher
        relationship counts, and more frequent research runs. The annual plan is priced at $290, with monthly
        options available for $29. This puts Rytr within reach for even the smallest teams, without locking
        you into a long-term contract or requiring a large upfront investment. See Rytr’s pricing page for the
        most current details.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s architecture is not built for heavy, enterprise-scale content operations. It does not offer
        deep SEO optimization, citation tracking, or automated publishing to every CMS under the sun. Instead,
        it focuses on the core needs of small businesses: fast, reliable generation of short-form content,
        flexible voice control, and integrations with the platforms you already use. For teams that need to
        move quickly and keep costs predictable, this is the right balance.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s modular approach also means that updates and improvements roll out without disrupting
        your existing workflows. New use cases appear as additional modules, not as changes to the tools you
        rely on day-to-day. This stability is important for small teams who can’t afford downtime or lengthy
        retraining every time an update lands.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the Miami salon owner, this means she can draft a Spanish-language Instagram post, an English
        email follow-up, and a Google Business Profile update all from the same dashboard, on her phone, in
        under ten minutes. No juggling separate apps, no waiting for a copywriter, and no risk of losing her
        voice across channels. Rytr’s architecture delivers what matters: content that gets noticed, in the
        language and style her customers expect, without ever slowing her down.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-rytr-platform-architecture-integrations-and-data-handling" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Rytr: Platform Architecture, Integrations, and Data Handling
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
              <h2 id="what-powers-rytr-platform-architecture-integrations-and-data-handling" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Rytr: Platform Architecture, Integrations, and Data Handling
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
