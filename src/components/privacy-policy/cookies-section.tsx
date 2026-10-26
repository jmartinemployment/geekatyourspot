export default function CookiesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cookies are small text files that a website stores in your browser. Our site uses the following
        cookies.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Google Analytics sets cookies, including one named <strong>_ga</strong>, that let it tell one visit from another and count returning visitors. These cookies can last up to two years.</li>
        <li>When you finish booking a consultation, the site sets a cookie named <strong>gays_booking_confirmed</strong> to confirm that the booking went through. It holds your first name and the date and time you chose, and your browser deletes it after two minutes.</li>
        <li>The site sets a cookie named <strong>gays_geo</strong> that holds the approximate location Vercel works out from your IP address, so the pages can read it without working it out again. It lasts seven days.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        The site also keeps two identifiers in your browser&rsquo;s local storage, which is not a cookie.
        One is named <strong>gays_visitor</strong> and stays until you clear the site&rsquo;s data, so the
        site can count your visits. The other is named <strong>gays_session</strong> and tells one visit from
        the next; it is replaced after 30 minutes without activity.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Tag Manager is the tool that loads Google Analytics on our pages. The site does not run
        advertising pixels from social networks or ad networks, and we do not use cookies to show you ads on
        other websites.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How to Turn Them Off
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        You can block or delete cookies in your browser settings, and the site will still work. Google also
        offers a <a id={`privacy-policy-cookies-gaoptout${idSuffix}`} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">browser
        extension for opting out of Google Analytics</a> that stops Google Analytics on every site that uses
        it. You can read about <a id={`privacy-policy-cookies-googlepartners${idSuffix}`} href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">how
        Google uses information from sites that use its services</a> on Google’s own site.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some browsers send a Global Privacy Control signal, and the site honors it. When your browser sends
        that signal, the site keeps no visit record for you at all. Some browsers send an older Do Not Track
        signal instead. There is no common standard for responding to it, so the site notes that it was
        received and does not change its behavior otherwise. Your browser settings and the Google extension
        described above are the reliable ways to stop analytics tracking.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cookies-and-analytics" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cookies and Analytics
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="cookies-and-analytics-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Cookies and Analytics
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
