
export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Koala stands out because it lets you build a content system around your business’s own services,
        credentials, and voice. You do not get a blank box or a generic template; you get a structured
        knowledge base called Brand DNA. This is where the real work starts. Brand DNA is not just a tagline,
        it is a set of rules and structured data that every article, post, or email draws from. The setup is
        deliberate: you import your business profile from Google Maps, your website, or fill out a tailored
        template. This profile holds your service areas, certifications, reviews, and the language your
        business uses with customers. If you run a Fort Lauderdale cleaning company, for example, you can set
        up rules that make sure residential and commercial services are always kept separate in your content.
        If you are a Miami contractor, you can lock in your real credentials and service details, so Koala
        never invents them in a draft. This step alone prevents the kind of copy-and-paste mistakes that make
        AI output sound like it could belong to anyone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Koala’s Brand DNA is not static. It is versioned and can be updated as your business grows or changes.
        This is critical for small teams who want their content to keep pace with new offerings, locations, or
        credentials. Every time you update your profile, Koala’s content engine, KoalaWriter, reads the new
        information. That means your next blog post, service page, or email campaign is always current and
        correct. For teams with more than one location, Koala lets you import a separate Brand DNA for each
        site. The platform then generates location-specific pages and posts, so your Coral Gables office and
        your Boca Raton branch can each have their own service area content, credentials, and local details.</p>
      <p className="text-base text-white shadow-text pt-3">
        What gets automated in Koala is not just the writing. The platform includes an AI-powered agent that
        pulls real keyword and competitor data from your market, plans a month of content on a calendar, and
        proposes article ideas based on gaps it finds in your current online presence. You approve these
        ideas, and KoalaWriter drafts the articles, weaving in your actual services and brand voice. The
        workflow is not just about churning out words, it is about making sure every piece of content is
        grounded in your business’s reality. Koala also automates internal linking and schema markup with
        KoalaLinks, so every new article connects to your older pages and helps search engines understand what
        you do. This is not a one-time setup; the system keeps your site structure and SEO signals up to date
        as you publish.</p>
      <p className="text-base text-white shadow-text pt-3">
        Koala’s automation logic is rule-driven but remains under your control. You decide which services,
        credentials, or local details must appear in every article or landing page. You set the tone, the
        level of brand mention, and the calls to action through presets. You can review and edit outlines
        before a draft is written, and you can run a readability pass with Polish to ensure the finished
        product matches your standards. The platform’s folder system lets you organize articles by campaign,
        service line, or location, keeping team collaboration clean and clear.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to extend Koala’s workflow, the platform offers
        an&nbsp;API&nbsp;and webhook integration. This means you can
        generate full articles with a single&nbsp;API&nbsp;call,
        connect Koala’s output to your own applications, or deliver finished content to other systems. Koala
        supports direct publishing to WordPress, Shopify, Webflow, and Ghost, and can reach any endpoint that
        accepts a signed webhook. If you use a custom CMS or have a unique distribution need, Geek @ Your Spot LLC
        can configure these integrations so that content moves automatically from draft to live with no manual
        copy-paste. This is where a local partner matters: Geek @ Your Spot LLC maps your existing systems and
        data to Koala’s structure, sets up the right approval workflows, and trains your team on how to use
        the platform’s rules and automation logic. They also make sure your Brand DNA is set up correctly from
        day one, so you do not have to fix errors after the fact. The result is not just a tool, but a working
        content engine that fits your business, saves time, and keeps your voice consistent everywhere you
        publish.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-koala-and-how-geek-your-spot-makes-it-work-for-your-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Koala and How Geek @ Your Spot LLC Makes It Work for Your Team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-koala-and-how-geek-your-spot-makes-it-work-for-your-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Gets Configured in Koala and How Geek @ Your Spot LLC Makes It Work for Your Team
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
