export default function SetupSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">We follow the same four steps on every AI project. First we agree on the business objective, such as answering every call or replying to every message before the customer looks elsewhere. Then we assess the data the front desk will run on: your calendar, your CRM, and the information your staff already give customers. Third, we choose the tools that fit your channels and your budget. Finally, we run a pilot on real calls and messages and adjust it before it carries your whole front desk.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Book a consultation below to walk through where your calls and messages arrive today and which part of your front desk should go live first.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-your-spot-llc-sets-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot LLC Sets It Up
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-your-spot-llc-sets-it-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek @ Your Spot LLC Sets It Up
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
