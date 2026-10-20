export default function HowWeUseSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        We use the information we collect for the purposes listed below, and for no others.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>We use your booking details to reserve your time on our calendar, send you a confirmation email, and prepare for the conversation.</li>
        <li>We use your contact details to reply when you reach out to us and to follow up about a consultation you booked.</li>
        <li>We use analytics data to learn which pages are useful, which ones confuse people, and how visitors find us, so that we can improve the site.</li>
        <li>We use server logs to keep the site running, investigate errors, and protect the site against abuse.</li>
        <li>We use information when the law requires it, or when we need it to protect our rights or the safety of others.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What We Do Not Do
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        We do not sell your personal information, and we do not share it with other companies for their own
        marketing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-use-your-information" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Use Your Information
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-use-your-information-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Use Your Information
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
