import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Marpipe for Measured Lead Generation means setting up rules, automation logic, and creative
        templates that let the platform do the heavy lifting. Marpipe is built for catalog-driven advertising, so
        what you configure are the elements that determine how creative variants are generated, tested, and
        deployed, no scripting or custom code required. The real work is in mapping your catalog fields, defining
        template logic, and setting the business rules that drive automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s rules engine centers on modular creative templates and multivariate testing. Every creative
        template you build in Marpipe is modular: you define the slots for product images, background colors,
        headlines, calls to action, and overlays. Each slot pulls data from your catalog feed, so the system can
        automatically generate hundreds of ad variants by mixing and matching these elements. You set up advanced
        rules and filters to control which designs apply to which products, so, for example, you can show a holiday
        background only for certain categories, or apply a price badge only to items on sale. This is not a static
        template system; it is data-driven and rules-based, designed for scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic in Marpipe covers two main areas: creative generation and performance optimization. First,
        the platform generates all possible combinations of your creative elements, using the rules you set. This
        includes not only images and text, but also dynamic overlays like star ratings, inventory counts, or sale
        countdowns, each of which can be mapped to a live field in your product feed. Second, Marpipe automates the
        testing and deployment process. It runs multivariate tests across all generated variants, splitting budget
        and audience evenly to ensure clean data. The system tracks performance at the element level, not just at
        the ad level, so you know exactly which headline, background, or button color is driving results. When a
        particular element underperforms, such as a blue button that never converts, Marpipe’s logic can
        automatically remove it from circulation, focusing spend on the best performers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s automation does not stop at creative generation. The platform also includes feed management tools
        that let you clean, enrich, and segment your product data before it ever reaches your ad templates. You can
        standardize image crops, remove white backgrounds, append star ratings, and organize products into targeted
        sets, all through a point-and-click interface. For businesses that want to run different creative for
        different products or categories, Marpipe’s advanced filtering and segmentation rules make this possible
        without manual duplication. If your catalog changes, new products, updated prices, new images, Marpipe
        updates the ads automatically, so you never have to rebuild creative by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        As for extension, Marpipe is a configuration-first platform. There is no scripting or open <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> for
        custom automations, everything happens through the platform’s own rules, templates, and feed management
        features. This is a strength for small businesses: the system is built for teams without in-house developers
        or data scientists. Instead of writing code, you define what happens through the interface: which fields map
        to which creative slots, which products get which overlays, and what performance rules trigger changes in
        spend or creative rotation.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Geek @ Your Spot implements Marpipe for a small business in South Florida, the real value comes from
        tailoring these configurations to the client’s actual catalog, business goals, and ad channels. This means
        working through the catalog structure, mapping every relevant field, and building creative templates that
        reflect the brand’s real offers, not just generic layouts. It’s a consultative process: understanding which
        overlays matter for this business (star ratings, sale badges, inventory countdowns), setting up rules for
        segmentation (so bestsellers get one treatment, clearance items another), and ensuring that every automation
        is mapped to a business outcome (lower CPL, faster creative refresh, fewer wasted impressions).</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe’s configuration model is what makes it accessible to small teams who need to move fast without
        technical overhead. The platform’s automation logic is transparent and controlled by the user, not by a
        black-box algorithm. This means changes to creative, product data, or campaign structure can be made and
        tested in hours, not weeks, without ever writing a line of code. For a business stuck in the manual loop of
        creative production, this is the difference between running two ad variants and running hundreds, between
        guessing at what works and knowing, with data, which creative elements drive leads at the lowest cost.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, configuring Marpipe is about setting the rules and templates that let your catalog data drive
        creative at scale. It is not about hiring a developer or managing a custom script. Geek @ Your Spot’s role
        is to translate your business logic into Marpipe’s configuration, so every rule, filter, and template serves
        your sales pipeline. The result is a system that keeps your ads fresh, your spend efficient, and your team
        focused on strategy, not production.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-gets-configured-in-marpipe-and-why-it-matters-for-small-business-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Marpipe and why it matters for small business automation
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
              <h2 id="what-gets-configured-in-marpipe-and-why-it-matters-for-small-business-automation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What gets configured in Marpipe and why it matters for small business automation
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
