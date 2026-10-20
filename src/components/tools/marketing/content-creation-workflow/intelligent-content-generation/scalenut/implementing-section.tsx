import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Launching Scalenut in a small business does not mean starting from scratch or overhauling every
        process. The platform is built to slide into an existing marketing workflow, picking up where manual
        effort leaves off. The go-live process is structured, not open-ended. Most of the setup is
        front-loaded, so teams see results fast, often within days, not weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is account creation and workspace setup. Scalenut supports multiple brands or domains
        under one login, which is critical for businesses that manage more than one service line or location.
        Each workspace can be tailored with its own brand kit, tone of voice, and domain details, so content
        always matches the business’s identity. This upfront configuration prevents the generic, off-brand
        output that plagues many AI tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes brand kit configuration. This is where the business locks in its core identity,
        competitors, and content styling targets. The platform lets teams upload a brand icon, define key
        competitors, and set content guidelines, such as tone, summary, and readability targets. For
        businesses in West Palm Beach or Miami-Dade, where local voice matters, this step ensures the
        AI-generated content sounds like it belongs to the business, not a distant agency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the workspace and brand kit are in place, Scalenut’s guided workflow takes over. The process is
        broken into clear stages: context, title, outline, and draft. The platform uses pre-built connectors
        for WordPress and other major platforms, so publishing is seamless. There’s no need to write custom
        scripts or manage complicated&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;calls, most
        integrations are available out of the box. This shortens go-live time and reduces technical risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        The workflow itself is templated. Scalenut’s cruise mode automates the heavy lifting by benchmarking
        content against the top 30 ranking URLs, pulling in real-time search data and competitor outlines. For
        a bookkeeping firm that leaves articles unfinished, this means moving from a blank page to a full
        draft in minutes. For a remodeler whose drafts lack detail, it means supplying real services and
        references before generation, so the output is specific and accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        After the first draft, the platform’s editor allows for refinement. Teams can regenerate sections,
        rephrase content, expand details, or simplify language, all from the same interface. Collaboration
        features make it easy to share drafts internally for review and approval. For teams juggling multiple
        deadlines, this keeps everyone on the same page and cuts out endless email chains.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is another built-in advantage. Once content is generated and approved, teams can
        schedule posts across platforms. Instead of manually uploading each article or social post, Scalenut
        handles the queue. This is especially valuable for small businesses that want to maintain a steady
        online presence without daily manual effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is possible for teams that want to start small. Many begin by automating blog posts
        or FAQs, then expand to social media and email campaigns as confidence grows. Because Scalenut’s setup
        is modular, there’s no penalty for starting with one channel and adding others later. This approach
        reduces risk and lets teams see value quickly before committing to a full-scale deployment.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the launch, Geek @ Your Spot LLC handles the configuration, data mapping, and training. The
        consultancy ensures that every field, workflow, and automation matches the business’s real-world
        needs, not just the defaults. They manage the integration with existing systems and provide hands-on
        support during the first publishing cycles. This is what closes the gap between a powerful tool and
        one that actually works for a South Florida small business.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, going live with Scalenut is not a long, uncertain project. The process is clear: set up the
        workspace, configure the brand kit, connect integrations, walk through the guided workflow, and
        schedule content. Most of the heavy lifting is automated or templated, so teams spend less time on
        setup and more time seeing results. For small businesses, this means the first week with Scalenut
        already looks different from the last week without it, more posts published, fewer bottlenecks, and no
        more blank page bottleneck on a Friday afternoon.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-scalenut-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Scalenut in a Small Business Environment
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
              <h2 id="what-it-takes-to-launch-scalenut-in-a-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Scalenut in a Small Business Environment
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
