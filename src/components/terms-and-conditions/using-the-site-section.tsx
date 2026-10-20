export default function UsingTheSiteSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What You May Do
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        You may browse the site, share links to its pages, and print or save pages for your own reference or
        for discussion inside your business.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What You May Not Do
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>You may not use the site for any purpose that breaks the law.</li>
        <li>You may not try to gain access to parts of the site, its servers, or its accounts that are not open to the public.</li>
        <li>You may not interfere with the site, overload it, or introduce viruses or other harmful code.</li>
        <li>You may not submit false information through the scheduler or use it to send spam.</li>
        <li>You may not copy our pages and republish them as your own, or present our content in a way that suggests we endorse you.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Who Owns the Content
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The text, graphics, logos, and design of the site belong to Geek @ Your Spot LLC or to those who
        license them to us, and copyright and trademark law protect them. These terms do not give you
        ownership of any of that content. You may quote short passages with a link back to the original page,
        but any other reuse needs our written permission.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="using-the-site-responsibly" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Using the Site Responsibly
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="using-the-site-responsibly" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Using the Site Responsibly
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
