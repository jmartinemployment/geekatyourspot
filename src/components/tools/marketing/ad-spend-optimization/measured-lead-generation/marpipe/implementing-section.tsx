import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Marpipe means a business moves from slow, manual ad production to a system that can generate
        and test hundreds of ad variants in days, not weeks. The setup is faster when product data is organized, <GlossaryLink slug="creative-assets">creative
        assets</GlossaryLink> are ready, and the team is clear on their campaign goals. Geek @ Your Spot guides the
        process step by step to keep downtime low and get results fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is a technical review of your current marketing stack and data sources. Marpipe works best
        when product feeds are accurate and up to date, so Geek @ Your Spot checks your catalog’s completeness and
        fixes issues before anything connects. This includes cleaning up missing images, inconsistent pricing, or
        duplicate entries. If your catalog is messy, Marpipe’s feed management tools help standardize and enrich the
        data before launch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once your product feed is clean, the next phase is template setup. Marpipe uses modular creative templates
        that plug directly into your catalog. Geek @ Your Spot works with your team to design layouts that reflect
        your brand and meet the unique needs of your product range. Pre-built connectors for platforms like Meta,
        TikTok, and Google mean you do not need custom development to get started. Templates can be reused and
        adapted, so new campaigns are faster to launch each time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system then maps your catalog fields to creative elements in Marpipe. This mapping step is where you
        decide which product details (like name, price, or star rating) show up in the ad, and how they appear. Geek
        @ Your Spot configures these rules so every product ad is accurate and up to date, even as your inventory
        changes. The mapping is flexible enough to support advanced segmentation, showing different designs to
        different product groups, or using dynamic overlays like sale badges or inventory countdowns.</p>
      <p className="text-base text-white shadow-text pt-3">
        After mapping, Marpipe’s automation engine takes over. The platform generates every possible combination of
        your creative elements, images, headlines, backgrounds, and calls to action, so you can test what works
        without building each ad by hand. Geek @ Your Spot sets the testing parameters so you get clean data on what
        actually drives leads. Because Marpipe controls spend across variants, you avoid the common pitfall of
        over-investing in weak creative or missing out on a winning combination.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout keeps risk low. Geek @ Your Spot starts with a limited product set or a single channel to
        validate the system in your environment. Once the first results come in, the team expands coverage to more
        products and platforms. This approach means you do not have to wait for a full catalog upload or a perfect
        template to see value, improvements start as soon as the first campaigns are live.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout the process, Geek @ Your Spot handles training and support. Your team learns how to use Marpipe’s
        dashboards, interpret test results, and adjust creative on the fly. Because the platform is built for scale,
        you do not need to add new staff or bring in outside designers to keep up with creative demand. Updates to
        your product feed or creative assets flow straight into new ad variants, so you stay current without manual
        rework.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live timeline most is preparation: clean data, ready assets, and clear campaign
        objectives. Marpipe’s pre-built integrations and template-driven setup mean there is no need for custom
        coding or long build cycles. Geek @ Your Spot’s phased, consultative approach ensures that every step fits
        your business, and that you see value as soon as possible without disruption to your existing workflows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-marpipe-looks-like-for-a-small-business-and-what-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Marpipe looks like for a small business and what speeds it up
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
              <h2 id="what-going-live-with-marpipe-looks-like-for-a-small-business-and-what-speeds-it-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Marpipe looks like for a small business and what speeds it up
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
