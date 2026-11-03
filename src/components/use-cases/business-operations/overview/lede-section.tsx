import Link from "next/link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Business operations is the work that keeps your business running behind every sale: answering customers, moving information between systems, and keeping customer records accurate. In most small businesses that work falls to the owner or to whoever is closest to the phone, and it gets done in the gaps between everything else.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">AI business operations tools automate workflows, manage data pipelines, and keep your business systems running without constant manual oversight. They fall into two groups. The <Link id={`use-cases-business-operations-lede-front-desk${idSuffix}`} href="/use-cases/business-operations/front-desk" className="text-[#C83803] hover:underline">Front Desk</Link> handles the customers who reach out to you. The Data layer is the information your AI tools run on, and it decides whether their answers can be trusted.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Geek @ Your Spot LLC sets up both for small businesses across Miami-Dade, Broward, and Palm Beach counties, starting with whichever one is costing your business the most today.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-business-operations-covers" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Business Operations Covers
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-business-operations-covers-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Business Operations Covers
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
