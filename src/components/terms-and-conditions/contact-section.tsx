export default function ContactSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        We may update these terms from time to time. When we do, we will post the new version on this page and
        change the effective date in the first section. The version posted when you use the site is the
        version that applies to that use.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you have a question about these terms, call us at <a id="terms-and-conditions-contact-tel" href="tel:+15615263512" className="text-[#C83803] hover:underline">(561)
        526-3512</a> or write to us at the address below.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Geek @ Your Spot LLC</strong><br />2025 NW 18th Street<br />Delray Beach, FL 33445</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="changes-and-how-to-reach-us" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Changes and How to Reach Us
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
              <h2 id="changes-and-how-to-reach-us" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Changes and How to Reach Us
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
