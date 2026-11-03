export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Quaderno transforms the taxing task of compliance into a streamlined process, allowing businesses to
        focus on growth rather than tax headaches. It reduces the hours spent on manual tax calculations and
        reporting, freeing up valuable time for small business teams. With Quaderno, the burden of tracking and
        complying with over 12,000 tax jurisdictions is significantly lightened.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the primary benefits is the elimination of manual tax calculations. Quaderno automates the
        calculation of VAT, GST, and sales tax, ensuring accuracy across all transactions. This not only reduces
        the risk of human error but also ensures that businesses are always compliant with the latest tax laws.
        By handling these calculations automatically, Quaderno saves businesses from the tedious task of
        manually updating tax rates and rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Invoicing becomes a breeze with Quaderno. The platform automatically generates tax-compliant invoices
        that include all necessary local tax language, currency breakdowns, and sequence numbers. This
        automation prevents the common errors associated with manual invoicing, such as missing or incorrect
        information, and ensures that invoices are always compliant with local regulations. Businesses no longer
        need to worry about rejected invoices or delayed payments.</p>
      <blockquote cite="https://quaderno.io/solutions/saas/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Quaderno monitors US economic nexus, VAT &amp; GST thresholds in real time, based on your sales data.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, Quaderno&#39;s integration capabilities are a game-changer for businesses using multiple
        payment processors. It seamlessly connects with platforms like Stripe, PayPal, and GoCardless, ensuring
        that tax liabilities are accurately tracked and reported. This integration eliminates the need for
        manual data entry and reconciliation, further reducing the administrative burden on business teams.</p>
      <p className="text-base text-white shadow-text pt-3">
        By automating these processes, Quaderno not only saves time but also reduces the risk of compliance
        errors and financial penalties. Businesses can operate with confidence, knowing that their tax
        obligations are being managed efficiently and accurately. Quaderno&#39;s ability to handle complex tax
        scenarios allows small businesses to focus on what they do best: growing their business and serving their
        customers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-quaderno-eases-the-burden-of-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Eases the Burden of Complex and Changing Laws
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
              <h2 id="how-quaderno-eases-the-burden-of-complex-and-changing-laws-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Quaderno Eases the Burden of Complex and Changing Laws
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
