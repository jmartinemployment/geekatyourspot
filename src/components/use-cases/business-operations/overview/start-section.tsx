export default function StartSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">If calls go to voicemail and messages wait for hours, start with the front desk. It fixes the loss your customers can see, and you can measure the result in answered calls and booked appointments.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">If your AI tools already run but their answers, reports, or follow-ups are unreliable, start with the data. Validating and connecting what your systems hold fixes the problem once, at the source, instead of in every tool that reads it.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Most businesses need both, in order. We help you find where your operations lose the most time and money, and we sequence the work so the piece with the highest return goes live first. Book a consultation below to walk through your current setup.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-to-start" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where to Start
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
              <h2 id="where-to-start-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where to Start
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
