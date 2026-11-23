export default function WithoutItSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most lost leads are not lost to a better competitor. They are lost to a slower reply, a forgotten quote or a conversation that lived on one person’s phone. These problems stay invisible until the month’s numbers come in lower than expected.</p>
      <p className="text-base text-white shadow-text pt-3">
        The issue is that follow-up depends on memory, and memory fails exactly when the business is busy. A CRM turns follow-up into a rule that runs every time, whether or not anyone remembers.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Leads arrive in several places, and nobody sees all of them in one view.</li>
        <li>Replies wait until the owner is free, and the customer books someone else.</li>
        <li>The same customer is listed twice, with two partial histories.</li>
        <li>Quotes are sent and never chased, and past customers are never asked for a review or a repeat job.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-goes-wrong-without-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Goes Wrong Without One
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-goes-wrong-without-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Goes Wrong Without One
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
