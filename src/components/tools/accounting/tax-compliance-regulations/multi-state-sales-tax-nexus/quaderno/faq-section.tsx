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
              Who should collect sales tax?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You need to collect sales tax if your business has a nexus in a state. Nexus can mean a physical
              location, employees, inventory, or even using local marketing affiliates or online ads. Economic
              nexus also counts, which is when your sales volume in a state passes a certain threshold. Each
              state has its own rules, so always check local policies. Once you have nexus, you should register
              and start collecting sales tax from customers in that state.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do you have to charge sales tax for online sales?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              It depends on your sales volume and where your customers are. Many states require online sellers
              to charge sales tax if you pass their economic nexus threshold. If you meet that threshold, you
              must register and start charging sales tax. Some buyers may be exempt if they have a valid
              certificate, and some online marketplaces handle tax for you under marketplace facilitator laws.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I get a seller&#39;s permit or sales tax number?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Once you know you need to collect sales tax, you can use Quaderno’s sales tax registration guides
              for step-by-step help registering in each state. After you complete the process, you’ll receive
              your seller’s permit or sales tax number.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the sales tax in my area?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Sales tax rates change from state to state and sometimes even by city or region. States set their
              own base rates, and local taxes may be added on top. The total rate can also depend on whether
              your state uses destination-based or origin-based rules. Always check your local and state
              guidelines for the most accurate rate.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What&#39;s the difference between WooCommerce Tax and Quaderno&#39;s Tax Automation Plugin?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno’s plugin works with WooCommerce’s built-in tax features. It shows the right taxes at
              checkout, then handles tax-compliant invoices, credit notes, and reports for VAT, GST, and sales
              tax. It also alerts you when you are close to or reach a registration threshold. WooCommerce Tax
              handles just the calculation, while Quaderno manages the full compliance process after the sale.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Quaderno integrate with WooCommerce, and what compatibility features should I know about?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
                <li>Flexible pricing: Calculate taxes based on your customer’s location, with prices shown as tax-inclusive or tax-exclusive.</li>
                <li>Multiple tax codes: Apply the right tax rate for different product types, including physical goods, digital products, ebooks, or online courses.</li>
                <li>Payment methods: Accept payments through PayPal, Braintree, Stripe, Square, GoCardless, and more. Make sure not to connect these payment processors directly to Quaderno to avoid duplicate invoices.</li>
                <li>Zero-rate taxes for B2B: The plugin can automatically apply reverse-charge for B2B sales.</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              I have several WooCommerce stores, is there a way to integrate them all to one Quaderno account?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can link as many WooCommerce stores as you want to your Quaderno account, as long as they
              are all under the same legal entity.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when I refund a WooCommerce order?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              When you refund an order in WooCommerce, Quaderno automatically creates a credit note for any
              order marked as Paid or Completed. Make sure to process the refund in WooCommerce, not just change
              the order status, to generate the credit note.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Quaderno work with the WooCommerce Checkout Blocks?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, Quaderno does not currently support the new WooCommerce Checkout Blocks. You’ll need to use
              the classic checkout option for full compatibility.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Quaderno monitor economic nexus across all US states?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Quaderno Monitor tracks both revenue-based and transaction-based rules in real time for all
              45-plus states that have a sales tax.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How will I know when I&#39;ve triggered a multi-state nexus?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno adds up your sales across all connected platforms and sends automatic email alerts when
              you reach 90 percent and 100 percent of an economic nexus threshold in any state. This helps you
              register before you have tax exposure.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it account for non-taxable states?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Quaderno covers the five states with no state-level sales tax: New Hampshire, Oregon,
              Montana, Alaska, and Delaware.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Quaderno track nexus if I sell through multiple checkout tools?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Quaderno connects to Stripe, PayPal, Shopify, WooCommerce, and more at the same time. It
              brings all your sales data together for a single, unified multi-state revenue calculation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it handle Marketplace Facilitator Laws?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You need to confirm if your marketplace, like Amazon, collects tax for you. These totals can
              affect your gross threshold tracking, but you will need to set this up differently in your
              Quaderno dashboard.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Quaderno differentiate between origin- and destination-based sourcing?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The Quaderno Tax Engine API checks customer location markers to apply the right state, county, and
              local city tax rates at checkout. It determines sourcing laws instantly in under 50 milliseconds.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Quaderno automatically register my business once a nexus is triggered?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Quaderno tracks when you need to register. Through managed compliance services, it can handle the
              full registration process with state tax authorities using its network of compliance partners.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How are returns handled for multiple states?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Once you register, you enter your tax ID on the jurisdictions page. Quaderno formats your
              multi-state data into audit-ready, location-specific reports. You can file manually or use
              Quaderno&#39;s automatic filing service to submit returns for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
