import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the realm of&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>, the initial
        decisions set the course for the entire implementation process. For small businesses in Miami-Dade,
        Broward, and Palm Beach counties, these choices can either streamline operations or create future
        roadblocks. A key decision is selecting the right AI-powered tools, such as Zamp or TaxCloud, to manage
        the complexities of multi-state tax compliance. Zamp, for instance, offers a dedicated team that manages
        the compliance lifecycle, which is critical for businesses that lack in-house expertise. Choosing a
        platform that aligns with your business&#39;s needs and growth trajectory is paramount.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another significant decision involves determining the scope of automation. Businesses must decide how
        much of their tax compliance process they wish to automate. While full automation can drastically reduce
        manual errors and save time, it requires a robust initial setup and ongoing management. Tools like
        TaxJar provide advanced automated filing and remittance capabilities, alleviating the burden of manual
        submissions and reducing the risk of late fees.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data integration is another early decision that cannot be overlooked. Integrating tax compliance tools
        with existing systems like QuickBooks or Shopify ensures seamless data flow and minimizes disruption.
        TaxCloud excels in this area by offering real-time checkout calculations across over 13,000
        jurisdictions, allowing businesses to maintain accuracy and compliance without manual intervention. This
        integration not only saves time but also ensures that all tax calculations are up-to-date with the
        latest regulations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The choice of partners for handling international tax compliance is equally critical. Quaderno, for
        example, automates global tax rules, making it an ideal choice for businesses venturing into
        international markets. By automating the generation of compliant invoices in multiple languages and
        currencies, it removes the complexity of international sales tax compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, setting clear business objectives from the outset guides the entire tax compliance strategy.
        Objectives might include reducing compliance costs, minimizing audit risks, or improving data accuracy.
        These goals help in selecting the right tools and defining the scope of the implementation. Without
        clear objectives, businesses risk investing in solutions that do not fully address their needs or that
        offer capabilities beyond what is necessary.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="early-decisions-that-shape-the-path-forward" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Early Decisions That Shape the Path Forward
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
              <h2 id="early-decisions-that-shape-the-path-forward" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Early Decisions That Shape the Path Forward
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
