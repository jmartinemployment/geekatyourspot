import Link from "next/link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Koala AI, and what does KoalaWriter do?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Koala AI is a platform for content and SEO that brings together writing, research, images,
              internal linking, and publishing. KoalaWriter is its article-generation tool. It creates
              structured content using keyword research, search-result analysis, and details about your
              business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What types of content can KoalaWriter create?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              KoalaWriter can create blog articles, listicles, service pages, Amazon affiliate roundups,
              single-product reviews, and local business roundups. It also lets you rewrite existing content
              and supports multiple languages.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does KoalaWriter create SEO-optimized articles?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              KoalaWriter looks at the search engine results page for your chosen keyword. It finds important
              terms and entities used by top-ranking pages and adds them to your article. This helps with
              optimization, but it does not guarantee a certain ranking.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Koala AI help decide what content to publish next?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The Brand DNA SEO agent uses your Google Search Console and Google Analytics data, along
              with keyword and competitor research, to suggest topics and spot content gaps. Koala’s workflow
              connects these steps: find opportunities, draft content, and publish.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can KoalaWriter match my business’s brand voice?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Brand DNA builds a knowledge base from your website or Google Maps business listing.
              KoalaWriter can use your services, terms, credentials, brand voice, and other business details
              when drafting. The onboarding process includes reviewing and correcting this information.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I edit the outline before KoalaWriter writes an article?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The outline editor lets you add, remove, and rearrange H2 and H3 headings before the
              article is written. This gives you control over the structure instead of accepting the first
              outline as is.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does KoalaWriter use current information and cite sources?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Koala’s real-time research features pull information from the web. The Deep Research feature
              gathers sources based on your topic and outline, and you can get citations when you ask for
              them. Deep Research is listed on the Professional and higher plans.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is KoalaWriter content ready to publish without editing?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Koala calls its output “publish-ready,” but that does not mean it is always accurate or right
              for every business. The workflow includes reviewing your business knowledge base, editing
              drafts, and using polishing tools. Customer testimonials mention professional review before
              publishing.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can KoalaWriter update or improve existing articles?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Koala can automatically generate AI images and add relevant YouTube video embeds to
              articles. KoalaImages lets you use reference images, save visual styles, and generate images in
              bulk.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can KoalaWriter generate images and add videos?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Koala can automatically generate AI images and add relevant YouTube video embeds to
              articles. KoalaImages supports using reference images, saving visual styles, and bulk image
              generation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does KoalaWriter automatically add internal links?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. KoalaWriter can index your site and add contextual internal links to new articles.
              KoalaLinks is a related tool for managing and adding internal links across your existing website
              content, including an Autopilot mode.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Koala publish directly to WordPress or another website platform?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Koala lists integrations with WordPress, Shopify, Webflow, and Ghost, as well as custom
              webhooks. You can publish articles as drafts for review or enable automatic publishing by brand,
              with formatting and images included.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I create multiple articles at once?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. KoalaWriter includes bulk content creation. Articles are placed in a queue shared with API
              and MCP requests. By default, they are written one at a time, but you can adjust concurrency
              settings to allow more articles to run at once. Queue length can affect how quickly articles are
              completed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can KoalaWriter create Amazon affiliate content?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. KoalaWriter supports Amazon product roundups and single-product review articles using live
              Amazon product details and customer-review data. This means the tool uses current product and
              review information to draft content, but it does not mean the author personally tested the
              products.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Koala useful for local-business content?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Koala offers features for local businesses, such as importing business information from
              Google Maps, creating service pages using service areas and credentials, and generating local
              places roundups. These features connect your content production with the business information
              stored in Brand DNA.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is KoalaWriter different from using ChatGPT alone?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              KoalaWriter packages article creation into a specialized workflow. It includes SERP analysis,
              brand context, outline editing, internal links, images, bulk generation, and CMS publishing.
              These are the workflow differences highlighted by Koala. The vendor’s claim that its writing is
              “superior” is not an independent quality assessment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a free trial, and how much do paid plans cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Koala gives new accounts 5,000 free words and 25 credits without needing a credit card. The
              current plans are Starter at $25 per month, Professional at $49 per month, and Boost at $99 per
              month. Higher-volume plans are available. Annual billing offers savings, so check your billing
              choice before you buy.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between word allowances and platform credits?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Article generation uses a separate word allowance. Platform credits are shared across tools like
              KoalaChat, KoalaImages, KoalaLinks, KoalaMagnets, the Brand DNA agent, and MCP research. Some
              writing models use up the word allowance faster, so the length of your article and the number of
              words billed may not match exactly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I own the content generated by KoalaWriter?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Koala’s pricing FAQ says you keep rights to your input, and Koala assigns you its rights to the
              AI-generated output. This is Koala’s contract position. It does not guarantee every output can
              be copyrighted or is free from third-party rights issues.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I automate Koala content creation through APIs, Zapier, or Make?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Koala offers API access and webhooks. Its pricing page lists webhook connections for&nbsp;<Link id="tools-marketing-intelligent-content-generation-koala-faq-zapier" href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">Zapier</Link>&nbsp;and Make. Paid plans also include MCP access, so compatible AI assistants can use Koala’s
              research and writing tools. The API is for custom software, webhooks connect workflows, and MCP
              connects AI assistants.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
