export default function InYourHandsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Each of the four phases leaves you with something you can hold up and point to, and none of it lives
        inside a black box.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li><strong>Phase 1</strong> gives you a signed rulebook for how your business runs.</li>
        <li><strong>Phase 2</strong> gives you a data health scorecard and a log of every correction.</li>
        <li><strong>Phase 3</strong> gives you a scorecard comparing each tool, with the full cost of ownership.</li>
        <li><strong>Phase 4</strong> gives you a reconciled pilot and a cutover you approved in writing.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        Every project starts with a <strong>free consultation</strong>. Book a time below, and we will walk through
        where your business stands today and whether automation fits. We will not pitch you a platform, and there
        is no obligation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-stays-in-your-hands" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Stays in Your Hands
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
              <h2 id="what-stays-in-your-hands-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Stays in Your Hands
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
