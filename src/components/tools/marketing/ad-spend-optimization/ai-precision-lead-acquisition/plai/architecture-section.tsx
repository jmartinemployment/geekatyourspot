import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai is built as a centralized command center for digital advertising, with a structure designed to bring
        together every major ad platform and workflow into one place. Its architecture connects directly to networks
        like Facebook, Google, TikTok, LinkedIn, and more, as well as payment and automation tools such as Stripe and
        GoHighLevel. This integration means you can launch, monitor, and optimize all your campaigns from a single
        dashboard, no more switching between platforms or piecing together data from different sources.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Plai is its workspace and folder system. Each workspace is dedicated to a specific brand or
        client, keeping all related data, campaigns, creative assets, budgets, and analytics, siloed and organized. This
        prevents overlap between different clients or business units, which is essential for agencies and small
        businesses managing multiple brands. Every workspace holds its own context, so brand-specific rules, templates,
        and analytics are kept distinct, reducing errors and confusion.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s <GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink>
        is designed for clarity and action. Performance data from every connected platform flows into a unified
        dashboard, giving you real-time visibility into spend, results, and creative performance. The system does not
        just show raw numbers, it organizes data by campaign, channel, audience segment, and even by creative asset.
        This makes it easy to spot trends, compare results across platforms, and identify where budget adjustments are
        needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s template and asset management is another key piece of its architecture. Ad templates,
        audience packs, and creative assets can be built once and reused across campaigns, accounts, or even brands. If
        you have a winning ad structure or a proven audience segment, you can save it as a template and deploy it
        instantly for new campaigns. This system cuts down on repetitive setup work and ensures consistency, especially
        for businesses with recurring offers or seasonal campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai also provides deep support for branded experiences. The platform can be fully white-labeled, logos,
        domains, client portals, and even the user interface can be customized. For agencies or franchises, this means
        every client or location can log in to a dashboard that looks and feels like their own, while Plai handles the
        backend infrastructure, security, and updates behind the scenes.</p>
      <p className="text-base text-white shadow-text pt-3">
        When it comes to integrations, Plai&rsquo;s architecture is built for extensibility. It connects with payment
        processors like Stripe for automated billing, and with GoHighLevel for client management and automation. This
        means you can handle campaign launches, reporting, and even revenue collection from one system, simplifying
        operations and making it easier to scale as your business grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience data is centrally managed and organized. Plai can import custom lists, build niche-specific audience
        packs, and keep all targeting data in one place. This centralization makes it easy to maintain consistent
        targeting across campaigns and accounts, and to refine segments based on real-world performance. When behavior
        or engagement patterns shift, you can update your targeting everywhere at once, rather than adjusting each
        campaign by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative assets and reporting are also tightly integrated. Plai stores images, videos, and ad copy in an
        organized library, so teams can access and deploy them quickly. Automated reporting tools pull in performance
        data and present it in a way that is easy to understand for both technical and non-technical users. This reduces
        the burden on staff to compile reports manually and ensures that everyone, from owners to franchisees, can see
        how campaigns are performing at a glance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and data privacy are handled at the platform level. Each client&rsquo;s data is kept separate, and
        permissions can be set to control who can access what information. This is especially important for agencies
        managing sensitive client accounts, or for franchises that need to keep local data distinct from
        headquarters.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s architecture is designed for small businesses and agencies that need to do more with less. By
        centralizing campaign management, automating repetitive tasks, and making performance data accessible, it removes
        the technical barriers that keep smaller teams from running sophisticated, multi-channel ad programs. For South
        Florida small businesses, this means you can get enterprise-level organization and control without hiring a
        full-time IT team or investing in custom development.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="plais-technical-foundation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plai&rsquo;s technical foundation
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
              <h2 id="plais-technical-foundation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plai&rsquo;s technical foundation
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
