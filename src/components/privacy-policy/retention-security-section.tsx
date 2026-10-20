export default function RetentionSecuritySection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How Long We Keep It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Appointments stay in our calendar, and booking emails stay in our email account, for as long as we
        need them to serve you and to keep ordinary business records. You can ask us to delete them at any
        time, as the next section explains.</p>
      <p className="text-md text-white shadow-text pt-3">
        Google Analytics deletes the event data it ties to individual visitors after no more than 14 months.
        Vercel keeps its server logs for a limited period that its own retention schedule sets.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Protect It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The site is served over an encrypted HTTPS connection, and booking information travels to Google and
        Resend over encrypted connections as well. Access to our calendar and email accounts is limited to the
        people who run Geek @ Your Spot LLC.</p>
      <p className="text-md text-white shadow-text pt-3">
        No system on the internet is perfectly secure, so we cannot promise that information will never be
        exposed. If a breach affects your personal information, we will tell you without unreasonable delay
        and as the law requires.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-long-we-keep-it-and-how-we-protect-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Long We Keep It and How We Protect It
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
              <h2 id="how-long-we-keep-it-and-how-we-protect-it" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Long We Keep It and How We Protect It
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
