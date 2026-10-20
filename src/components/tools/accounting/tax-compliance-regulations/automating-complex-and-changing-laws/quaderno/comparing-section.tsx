
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering&nbsp;tax
        compliance&nbsp;solutions, businesses often weigh multiple options to find the right fit
        for their needs. Quaderno stands out by offering a comprehensive suite of features tailored for small to
        mid-sized digital businesses. Its ability to automate VAT, GST, and sales tax calculations across over
        12,000 jurisdictions is a key differentiator. This broad coverage ensures that businesses can scale
        without the constant worry of compliance failures.</p>
      <p className="text-md text-white shadow-text pt-3">
        Unlike some competitors that might require separate modules for different regions, Quaderno integrates
        all necessary tax compliance functions in one platform. This integration simplifies the compliance
        process, reducing the need for multiple tools and minimizing the risk of errors. It supports real-time
        sales tracking, automatic invoicing, and threshold monitoring, which are essential for businesses
        expanding internationally.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno&#39;s pricing model is another advantage. It offers transparent pricing with no hidden fees,
        making it easier for businesses to budget. This contrasts with some competitors,
        like&nbsp;Avalara,
        which often have complex pricing structures that can lead to unexpected costs. Additionally, Quaderno
        provides flexible contracts, allowing businesses to pay monthly without long-term commitments, which is
        ideal for growing companies that need flexibility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration capabilities are crucial for any tax compliance tool, and Quaderno excels in this area. It
        seamlessly connects with popular platforms such as Stripe, PayPal, Shopify, and WooCommerce. This
        connectivity ensures that businesses can maintain a unified tax compliance process across all their
        sales channels. The ability to integrate with various platforms without disrupting existing workflows is
        a significant benefit for businesses looking to streamline their operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security is also a top priority for businesses handling sensitive tax data. Quaderno is backed by the
        Visma Security Program, ensuring robust data protection and compliance with global security standards.
        This level of security is essential for businesses that need to protect their financial data and
        maintain customer trust.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Quaderno offers a comprehensive, integrated, and secure solution for tax compliance that
        caters specifically to the needs of small to mid-sized digital businesses. Its transparent pricing,
        flexible contracts, and extensive integration capabilities make it a competitive choice among tax
        compliance solutions. For businesses in South Florida looking to expand globally, Quaderno provides the
        tools necessary to navigate the complexities of international tax laws with confidence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quaderno-stands-among-tax-compliance-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Stands Among Tax Compliance Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-quaderno-stands-among-tax-compliance-solutions-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Stands Among Tax Compliance Solutions
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
