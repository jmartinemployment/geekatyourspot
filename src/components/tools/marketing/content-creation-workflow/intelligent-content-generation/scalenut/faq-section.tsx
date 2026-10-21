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
              What is Scalenut, and what does it do?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut is an AI-powered platform for SEO and generative engine optimization. It combines
              keyword planning, content creation, content optimization, website audits, and AI-search
              visibility tracking. Small businesses can use it as self-service software or choose
              expert-managed services.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between Scalenut’s SEO and GEO features?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut’s SEO features help businesses get found in traditional search with keyword planning,
              content optimization, internal linking, and audits. Its GEO features focus on how brands show up
              in AI-generated answers, including brand mentions, citations, prompt coverage, and
              recommendations to improve that presence.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Who is Scalenut designed for?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut offers Starter for founders and small teams, Plus for growing teams, and Professional
              for agencies and advanced in-house teams. Businesses that want outsourced execution can choose
              its VIP managed service, which is custom-priced.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Scalenut cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut’s pricing page lists these standard monthly rates and discounted annual-plan
              equivalents: Starter at $59 per month, Plus at $89 per month, and Professional at $199 per
              month. Annual plans show lower monthly rates. The VIP managed service is custom quoted. Because
              the page may show overlapping promotions and older FAQs, confirm the billing total, included
              limits, and promotional terms at checkout.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Scalenut offer a free trial?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut advertises a seven-day free trial for its software plans. The trial lets users
              explore AI-visibility tracking, insights, and its GEO content engine before choosing a paid
              plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What features are included in every Scalenut plan?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Every plan includes AI-search visibility tracking, GEO content creation and optimization, prompt
              discovery, content scoring, and execution-oriented workflows. Plans differ in usage limits,
              supported AI engines, audit capabilities, and collaboration features.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Scalenut write blog posts and other marketing content?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut supports long-form blog posts, website copy, landing pages, and product
              descriptions. Its content tools combine AI drafting with research and optimization guidance, not
              just basic text generation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Scalenut optimize articles that are already published?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut includes an optimizer for existing articles. Higher tiers also offer content
              audits, topic-gap recommendations, and internal-linking tools to help improve published website
              content.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Scalenut include keyword research and keyword clustering?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut offers keyword planning and clustering, which groups related keywords for content
              planning. Monthly cluster limits and advanced planning features depend on the plan you choose,
              as shown on the vendor’s pricing page.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which AI platforms can Scalenut track?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              For self-service software, Scalenut’s pricing FAQ lists ChatGPT and Google AI on all plans, with
              Perplexity available on higher tiers. Its managed-service homepage also mentions tracking and
              optimizing for ChatGPT, Perplexity, Gemini, Claude, and Grok. The broader managed-service
              coverage does not apply to every software subscription.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does Scalenut update AI-visibility data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut refreshes AI-visibility data weekly by default. Users can upgrade for daily refreshes,
              as stated in the pricing FAQ.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Scalenut integrate with WordPress and Shopify?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut lists integrations with WordPress and Shopify. The Plus plan includes
              auto-publishing to both. The pricing comparison also mentions&nbsp;<Link id="tools-marketing-intelligent-content-generation-scalenut-faq-semrush" href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">Semrush</Link>&nbsp;and Copyscape
              integrations, but it is not clear if these are available on every tier.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can agencies use Scalenut for multiple clients?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut supports separate workspaces, each tied to one domain. Starter includes one
              workspace, Plus includes two, and Professional offers unlimited workspaces and team members.
              Professional is the agency-oriented tier.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between Scalenut’s software and managed service?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              With the software, your team uses Scalenut’s tools for planning, production, optimization, and
              monitoring. The managed service provides a dedicated strategist and AI agents who handle
              strategy, content, technical improvements, authority building, and reporting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Scalenut’s managed content reviewed by humans?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. For managed service, a strategist sets direction, briefs agents, edits for brand voice and
              accuracy, and approves content before it goes live. This human review applies to managed
              service, not to every software plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does Scalenut take to produce results?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              For managed service, Scalenut says you can expect initial traction in 60 to 90 days, with Google
              rankings building over months three to six. AI visibility may improve faster. These are vendor
              expectations, not guarantees for every business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I upgrade or downgrade my Scalenut subscription?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Scalenut allows users to upgrade or downgrade their subscription at any time. Data stays
              intact when moving between plans.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Scalenut offer refunds?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Scalenut’s pricing page states that special promotional deals are nonrefundable. This does not
              confirm a refund policy for all subscriptions or managed services. Check the terms for your
              specific purchase.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
