import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s workflow starts with building a deep understanding of your business, then uses that context to
        automate every step of content creation. The process is not just about generating words, it is about
        ensuring every article, post, or campaign reflects your real services, credentials, and voice. For a
        small business in South Florida, this means the platform can handle the heavy lifting of content
        production while keeping your unique identity front and center.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step in Koala is to create a Brand DNA profile. You can import your business details from
        Google Maps, your website, or enter them manually using a template tailored for your business type,
        local
        business,&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>,
        professional services, ecommerce, or content site. Koala pulls in your address, phone number, website,
        reviews, and more, then stores your services, credentials, target audience, and brand voice in a
        structured knowledge base. This means you never have to re-enter the same information for each new
        article or campaign.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once your Brand DNA is set up, Koala’s agent starts by crawling your site to build a knowledge base of
        your offerings, credentials, and the way your business communicates. This context is not just used
        once, it carries through every piece of content Koala produces, so your cleaning company’s residential
        and commercial services never get mixed up, and your accountant’s credentials are always accurate. For
        multi-location businesses, each location can have its own Brand DNA, allowing Koala to generate
        genuinely localized content, not just generic city-name swaps.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next phase is research. Koala’s agent reads your Search Console and Analytics data, checks live
        keyword volumes, and reviews competitor rankings. It identifies keywords your business is close to
        winning and finds gaps where your competitors already rank. The agent then suggests article ideas,
        each tied to a real search volume and a clear content gap, never topics you already cover. These ideas
        are placed on a content calendar, with each pick assigned a target keyword, an angle, and a date.</p>
      <p className="text-md text-white shadow-text pt-3">
        When you approve a topic, KoalaWriter drafts the article from your brief and Brand DNA. It uses Deep
        Research mode to pull live SERP data and primary sources, grounding each draft in current information
        rather than stale pre-training data. The platform structures the article with heading tags, internal
        links, and images matched from KoalaImages. The system’s outline editor lets you shape the structure
        and direction of your article, and for list-based content, you can review and modify list items before
        generating the full draft.</p>
      <p className="text-md text-white shadow-text pt-3">
        Polish, Koala’s content refinement tool, runs a readability pass or grades the draft in the article
        editor. This step ensures the output is not just grammatically correct, but also clear and engaging
        for your audience. For content teams with writers of varying skill levels, Polish keeps the quality
        consistent across every piece.</p>
      <p className="text-md text-white shadow-text pt-3">
        Internal linking is handled automatically by KoalaLinks, which places contextual links and schema
        markup across your site as new content is published. The system chooses anchor text during generation,
        so links read naturally and support your SEO. KoalaLinks covers your archive too, ensuring older pages
        stay connected as your site grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the content is ready, publishing is a single click. Koala integrates directly with WordPress,
        Shopify, Webflow, and Ghost, pushing finished articles straight to your CMS. For custom workflows,
        webhooks and an
        included&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;allow
        delivery to other endpoints. Bulk generation features let you produce many articles at once, each one
        consistent with your strategy and brand guidelines.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout, Koala’s persistent memory keeps track of your business, goals, and past recommendations.
        This means you pick up where you left off, whether you are producing a batch of blog posts, updating
        service pages, or launching a new email campaign. The entire workflow is browser-based, with no
        software to install and no need to manage separate provider accounts
        or&nbsp;API&nbsp;keys.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small South Florida team, this process replaces the late Friday scramble to draft a post or the
        back-and-forth with an agency over missed details. Instead, you get a system that remembers your
        business, plans your content, drafts it with your voice and facts, and publishes it to the channels
        you already use, all in less time than it used to take to write a single update.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="koalas-step-by-step-workflow-from-brand-dna-to-published-content" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Koala’s Step-by-Step Workflow: From Brand DNA to Published Content
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="koalas-step-by-step-workflow-from-brand-dna-to-published-content-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Koala’s Step-by-Step Workflow: From Brand DNA to Published Content
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
