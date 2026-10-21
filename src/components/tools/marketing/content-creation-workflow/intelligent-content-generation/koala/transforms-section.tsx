export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Koala is built for small businesses who need their content to sound like them, not like every other
        business in the same zip code. The platform works by capturing your real business profile at the
        start, so you never have to re-explain your services, credentials, or local specialties. Whether you
        import your details from Google Maps, your website, or enter them manually, Koala stores your brand
        DNA: your unique selling points, voice, and audience. This knowledge base powers every piece of
        content you generate, keeping your messaging consistent and accurate across blogs, service pages, and
        social posts.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you use Koala, the blank page problem disappears. Instead of starting from scratch, you approve
        topics from a calendar the platform suggests, each one grounded in your actual market gaps and keyword
        opportunities. Koala’s agent reads your Search Console and Analytics data, checks what your
        competitors are ranking for, and proposes content that fills real gaps, not just generic topics. You
        can review and edit outlines before a draft is written, shaping the structure to fit your priorities.
        For teams who want control, this means you only spend time where it matters: on strategy and final
        edits, not on repetitive setup or fact-checking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Drafts are more than just text. KoalaWriter produces articles with internal links, schema markup, and
        even custom AI-generated images, all in one workflow. This removes the need to jump between writing,
        design, and SEO tools. You can publish directly to platforms like WordPress, Shopify, Webflow, or
        Ghost with a single click, or use webhooks and APIs for more custom setups. The result is a publishing
        process that takes minutes, not days, and delivers content that is ready for your audience and for
        search engines.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bulk content creation is another place Koala cuts down on wasted time. If you need to launch a
        campaign or refresh dozens of pages, you can enter a list of keywords and generate multiple articles
        at once. Each draft still pulls from your approved business profile, so you avoid the inconsistencies
        and errors that come from managing a team of writers or using disconnected tools. This is especially
        useful for multi-location businesses, each location can have its own Brand DNA, allowing for genuinely
        localized content instead of generic find-and-replace jobs. For e-commerce and service businesses
        alike, this means your site can scale up content production without scaling up your management
        headaches.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval workflows are built in. You can review drafts, edit listicles, and run a one-click
        readability pass before anything goes live. Koala’s Polish tool helps maintain quality across writers
        and articles, so your content is both readable and optimized for your audience. For non-native English
        speakers or teams with mixed writing skills, this keeps your output professional and on-brand. And
        because Koala remembers your business details, you avoid the risk of inventing services or
        credentials, every draft is grounded in your approved knowledge base.</p>
      <blockquote cite="https://koala.sh/seo-automation" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Koala AI automates the SEO work that repeats every week: keyword research from your own Search Console
        data, article drafts in your voice, internal links, schema, and publishing to your CMS, on a schedule
        you set.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Personalized email campaigns and social updates are handled in the same system. Koala generates
        subject lines and body copy tailored to your audience segments, and schedules posts in bulk for all
        your channels. This gives you the reach of a much larger marketing team, without the cost or the risk
        of going off-message. By automating the repetitive parts of content creation, Koala returns hours to
        your week, time you can spend on client work, operations, or strategy instead of chasing down drafts
        or fixing errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida teams who have struggled with agency costs, inconsistent messaging, or the grind of
        manual content production, Koala is not just a writing tool. It is a system that removes the busywork
        and keeps your brand at the center of every campaign. The office manager who once dreaded Friday
        afternoons now sees a full month of scheduled content, each piece reflecting the real business, not a
        generic template. The difference is clear: fewer errors, more leads, and a digital presence that
        finally matches the strength of your local reputation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-koala-removes-the-weekly-burden-from-intelligent-content-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Koala Removes the Weekly Burden from Intelligent Content Generation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-koala-removes-the-weekly-burden-from-intelligent-content-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Koala Removes the Weekly Burden from Intelligent Content Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
