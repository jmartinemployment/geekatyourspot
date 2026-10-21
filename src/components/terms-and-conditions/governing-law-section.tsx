export default function GoverningLawSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        These terms are governed by the laws of the State of Florida, without regard to its rules on conflicts
        of law. Any dispute about the site or these terms will be heard only in the state or federal courts
        located in Palm Beach County, Florida, and you and we both agree to the jurisdiction of those courts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Before you file a claim, please call or write to us so that we can try to resolve the problem
        informally. Most concerns can be settled with a conversation.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        General Terms
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        If a court finds any part of these terms unenforceable, the rest of them remains in effect. If we do
        not enforce a term right away, we have not given up the right to enforce it later. These terms and our
        Privacy Policy are the entire agreement between you and us about your use of the site, and a signed
        agreement for paid work governs that work as described above.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="governing-law-and-disputes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Governing Law and Disputes
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="governing-law-and-disputes-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Governing Law and Disputes
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
