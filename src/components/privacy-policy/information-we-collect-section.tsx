export default function InformationWeCollectSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Information You Give Us
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        When you book a consultation, the scheduler asks for your first name, last name, email address, and
        phone number, along with the date and time you choose. If you call us, email us, or write to us, we
        receive whatever you choose to include in that message.</p>
      <p className="text-base text-white shadow-text pt-3">
        The site never asks for payment card numbers, bank account numbers, Social Security numbers, or access
        to your accounting software. If a client engagement later requires access to financial systems, that
        access is arranged under a separate written agreement and is never collected through the site.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Information Collected Automatically
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Like most websites, ours receives some information automatically when you visit. Google Analytics
        records the pages you view, the links you click, the website that referred you, your browser and
        device type, and your approximate location, which Google works out from your IP address.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our hosting provider, Vercel, keeps server logs that include your IP address, the pages your browser
        requested, and the time of each request. These logs help us keep the site secure and working.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Visit Record the Site Keeps
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        The site also keeps its own record of each visit, separate from Google Analytics. That record holds
        your IP address and the approximate location that Vercel works out from it, which is usually your
        city and postal code. It holds the type of device, browser, and screen you use, the pages you view,
        how long each page is open and in front of you, how far down each page you scroll, and the links
        you click. It also holds the website that referred you and any campaign tags in the address you
        arrived on.</p>
      <p className="text-base text-white shadow-text pt-3">
        When Vercel cannot work out a location from your IP address, your browser may ask whether you want
        to share your location with the site. If you allow it, the site records the position your browser
        reports and how precise it is. If you decline, nothing is recorded and the site works the same.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you book a consultation or send us a message, the name, email address, and phone number you
        give us are linked to your visit record, including earlier visits from the same browser.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="information-we-collect" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Information We Collect
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
              <h2 id="information-we-collect-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Information We Collect
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
