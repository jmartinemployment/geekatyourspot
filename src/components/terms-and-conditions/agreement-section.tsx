import Link from "next/link";

export default function AgreementSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        These Terms of Service govern your use of geekatyourspot.com, which Geek @ Your Spot LLC operates as
        an AI consulting firm based in Delray Beach, Florida. In these terms, “we,” “us,” and “our” mean Geek @ Your Spot LLC, and “you” means anyone who visits or uses the site.</p>
      <p className="text-md text-white shadow-text pt-3">
        By using the site, you agree to these terms. If you do not agree with them, please do not use the
        site. These terms take effect on <strong>October 15, 2026</strong>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Our <Link id="terms-and-conditions-agreement-privacy" href="/privacy-policy" className="text-[#C83803] hover:underline">Privacy
        Policy</Link> explains what information we collect through the site and how we use it, and it forms
        part of these terms.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="agreeing-to-these-terms" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Agreeing to These Terms
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="agreeing-to-these-terms" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Agreeing to These Terms
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
