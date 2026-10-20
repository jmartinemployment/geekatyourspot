import Link from "next/link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering&nbsp;tax
        compliance&nbsp;software, businesses often weigh multiple options to find the best fit
        for their needs. TaxCloud stands out in the landscape of tax compliance tools, particularly for small to
        mid-sized businesses dealing with complex and changing tax laws. Its main competitors include platforms
        like&nbsp;Avalara,
        Sovos,
        and&nbsp;<Link id={`tools-accounting-complex-changing-laws-taxcloud-comparing-taxjar${idSuffix}`} href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>,
        each offering unique features tailored to different business sizes and complexities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Avalara is known for its comprehensive compliance capabilities, making it a go-to for enterprise-level
        businesses with global tax needs. However, its complexity and higher costs can be a barrier for smaller
        companies. TaxCloud, on the other hand, simplifies the process with a focus on U.S. and Canadian
        markets, providing a straightforward solution without the heavy overhead of enterprise systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Sovos offers a modular approach, allowing businesses to pick and choose the features they need. This can
        be advantageous for companies with specific requirements but may lead to confusion and higher costs if
        not managed carefully. TaxCloud provides an all-in-one package with transparent pricing, making it
        easier for businesses to manage expenses and understand what they are paying for.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxJar is another competitor, particularly strong in integrating with e-commerce platforms like Shopify
        and WooCommerce. While it provides robust filing automation, it lacks the real-time nexus tracking and
        comprehensive support that TaxCloud offers. TaxCloud&#39;s integration capabilities extend beyond
        e-commerce, providing a more versatile solution for businesses with multi-channel sales.</p>
      <p className="text-md text-white shadow-text pt-3">
        A key advantage of TaxCloud is its participation in the Streamlined Sales Tax (SST) program, offering
        cost savings in compliance for businesses operating in SST member states. This contrasts with platforms
        like Avalara, where such benefits are not actively promoted. TaxCloud&#39;s ability to automate complex
        processes while maintaining cost-effectiveness makes it an attractive option for small to mid-sized
        businesses.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, TaxCloud positions itself as a user-friendly, cost-effective solution tailored for small to
        mid-sized businesses that need to manage tax compliance without the complexity and cost of
        enterprise-level solutions. Its comprehensive feature set, combined with transparent pricing and
        U.S.-based support, makes it a strong contender in the tax compliance software market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="comparing-taxcloud-with-other-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing TaxCloud with Other Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="comparing-taxcloud-with-other-solutions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Comparing TaxCloud with Other Solutions
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
