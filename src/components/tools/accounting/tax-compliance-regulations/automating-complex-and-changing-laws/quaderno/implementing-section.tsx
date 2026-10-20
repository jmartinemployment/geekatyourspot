
export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Quaderno in your existing business environment is not just about installing software;
        it&#39;s about integrating a comprehensive&nbsp;tax
        compliance&nbsp;solution seamlessly into your workflow. The process is streamlined thanks
        to Quaderno&#39;s pre-built connectors and templated setups, which significantly shorten the time to
        deployment. This allows small businesses to quickly move from manual tax processes to automated
        compliance without disrupting their daily operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process begins with a thorough assessment of your current systems and tax compliance
        needs. Quaderno&#39;s pre-built connectors for popular platforms like Stripe, PayPal, and Shopify ensure
        that your existing sales and payment data can be easily integrated into the new system. This means that
        you don&#39;t need to overhaul your current setup; instead, Quaderno enhances it by automating tax
        calculations and compliance tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, the phased rollout approach allows for a smooth transition. This involves initially implementing
        Quaderno&#39;s core features, such as real-time sales tracking and automatic tax calculation, before
        gradually introducing more advanced functionalities like threshold monitoring and filing-ready reports.
        This step-by-step integration minimizes the risk of errors and ensures that your team can adapt to new
        processes without feeling overwhelmed.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training is a crucial component of the go-live process. Geek @ Your Spot LLC provides comprehensive training
        sessions tailored to your team&#39;s needs, ensuring that everyone is comfortable with the new system.
        This training covers everything from using Quaderno&#39;s dashboard to understanding how automated tax
        compliance works in practice. By the end of the training, your team should be able to manage tax
        compliance independently, reducing reliance on external consultants.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, ongoing support and updates are part of the package. Quaderno continuously updates its software
        to reflect the latest tax laws and regulations, ensuring that your compliance remains up-to-date. Geek @ Your Spot LLC offers ongoing support to address any issues that arise post-implementation, providing peace
        of mind that your tax compliance is in good hands.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-quaderno-in-your-existing-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Quaderno in Your Existing Environment
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
              <h2 id="implementing-quaderno-in-your-existing-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Quaderno in Your Existing Environment
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
