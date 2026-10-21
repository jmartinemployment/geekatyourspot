export default function NotAdviceSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Our articles, use case guides, tool guides, glossary, and other pages explain how automation and AI
        can fit into accounting, tax compliance, payroll, marketing, and other business work. They are general
        information written for South Florida small businesses. They are not accounting, tax, legal, or
        financial advice, and they do not take the facts of your business into account.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tax rules, payroll requirements, and sales tax obligations change often and depend on your situation.
        Before you act on anything you read here, confirm it with a licensed professional, such as a certified
        public accountant, an enrolled agent, or an attorney.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reading the site or booking a consultation does not create a professional relationship between you and
        us. We are not a CPA firm or a law firm, and nothing on the site should be read as the opinion of one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="information-not-professional-advice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Information, Not Professional Advice
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="information-not-professional-advice-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Information, Not Professional Advice
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
