export default function SetupSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Setting up a CRM starts with how you actually sell. We map where your leads come from, who replies, how long a typical sale takes and where leads go cold, then choose the platform that fits and build the pipeline around those steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        We then register your texting, authenticate your email, import and clean your existing contacts, and build the first workflows: the instant reply to a new lead, appointment reminders and a review request. Each is tested before any customer sees it, and we go live with one lead source first.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the CRM is live, it runs on its own. You see every conversation in one place, and the system tells you when something needs a person. Book a consultation below to talk through where your leads come from today and where they slip away.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-set-it-up-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Set It Up for Your Business
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-we-set-it-up-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How We Set It Up for Your Business
              </h2>
              {body()}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
