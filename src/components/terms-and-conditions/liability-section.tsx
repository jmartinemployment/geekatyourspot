export default function LiabilitySection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        No Warranties
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        We work to keep the site accurate and available, but <strong>we provide the site as is and as
        available.</strong> To the fullest extent the law allows, we make no warranties of any kind, express
        or implied, including warranties of accuracy, completeness, merchantability, fitness for a particular
        purpose, and noninfringement. We do not promise that the site will be free of errors or interruptions,
        or that any tool or method we describe will produce a particular result for your business.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Limitation of Liability
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        To the fullest extent the law allows, Geek @ Your Spot LLC and its owners, employees, and contractors
        will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for
        lost profits, lost revenue, or lost data, that arise from your use of the site or your reliance on its
        content. <strong>Our total liability for any claim arising from the site will not exceed one hundred
        dollars ($100).</strong> Some states do not allow these limits, so parts of them may not apply to you.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Indemnification
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        If you misuse the site or break these terms, you agree to defend and indemnify Geek @ Your Spot LLC
        and its owners, employees, and contractors against the claims, losses, and costs that result,
        including reasonable attorney’s fees.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="disclaimers-and-limits-on-liability" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Disclaimers and Limits on Liability
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
              <h2 id="disclaimers-and-limits-on-liability" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Disclaimers and Limits on Liability
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
