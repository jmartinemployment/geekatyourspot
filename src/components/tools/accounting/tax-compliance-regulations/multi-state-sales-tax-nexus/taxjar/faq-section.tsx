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
              How does TaxJar track my economic and physical nexus across multiple states?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar automatically tracks your sales and transaction volume in each state. It sends alerts when
              you are close to or have passed a state&#39;s economic nexus threshold, like $100,000 in sales or
              200 transactions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can TaxJar handle multi-channel sales if I sell on multiple platforms?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. TaxJar connects with major e-commerce platforms such as Amazon, Shopify, and WooCommerce. It
              combines your transaction data from all channels into one dashboard, so you can see your total
              multi-state nexus exposure.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does TaxJar automatically register my business for new tax permits?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. TaxJar shows you where you have nexus, but it does not register your business with state
              governments. It offers resources and guides to help you register for a sales tax permit yourself
              before you start collecting tax in a new state.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the tool manage different state taxability laws for specific products?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar uses AI to categorize your products and apply the right tax codes in over 11,000
              jurisdictions. This covers complex rules, including exemptions for digital goods, SaaS, or food
              items, and applies them in real time at checkout based on the state.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will TaxJar automatically file my multi-state returns?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              TaxJar offers an optional AutoFile feature. When you enroll, it pulls your tax data, prepares each
              state&#39;s return, and files and pays your sales tax directly to the states for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
