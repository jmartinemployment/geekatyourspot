import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq is built as a comprehensive platform designed to integrate seamlessly with various systems, enhancing
        its utility across different business environments. At its core, Helmhq offers a unified calendar and
        scheduling system that connects to a wide array of content management systems (CMS) like Wordpress, Webflow,
        and Wix. This integration capability ensures that all content operations are streamlined and centralized,
        reducing the friction that often comes with managing multiple platforms.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture supports a wide range of features that cater to the needs of modern
        businesses. It includes a robust analytics dashboard that provides insights into website and SEO
        performance, enabling businesses to make data-driven decisions. This dashboard integrates with tools like
        Google Analytics and Google Search Console, offering real-time data that informs content strategies and
        optimizes search engine visibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq&#39;s architecture is also designed to support extensive automation capabilities.
        The&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;Content
        Engine and AI Agents are central to this, providing tools for automated keyword research, blog drafting, and
        publishing. These features allow businesses to maintain consistent quality with AI-assisted workflows,
        scaling operations without increasing staff. The platform&#39;s AI-powered data-based insights and
        predictive content forecasting further enhance its ability to drive strategic growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        In terms of data management, Helmhq offers file and asset storage, ensuring that all content and media are
        easily accessible and organized. This is complemented by features like intelligent tagging and a brand
        portal, which help maintain brand consistency across all content outputs. The platform also supports team
        management and collaboration, providing tools for calendar scheduling and white-label client reporting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq&#39;s ability to connect with external systems and its comprehensive suite of features make it a
        versatile tool for businesses looking to automate and optimize their content operations. With support for
        multi-location management and integrations with Google Business Profile, Helmhq enables businesses to manage
        their online presence effectively across different regions, enhancing their visibility and engagement with
        local audiences.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="helmhqs-architecture-and-integrations">
                Helmhq&#39;s Architecture and Integrations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="helmhqs-architecture-and-integrations">
                Helmhq&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
