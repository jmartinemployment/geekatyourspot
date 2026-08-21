import Image from "next/image";

export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Monte Carlo is particularly valuable for businesses that rely heavily on data-driven marketing strategies and need
                to ensure the integrity of their data. If your organization is struggling with inconsistent data quality or frequent
                data pipeline issues, Monte Carlo can provide the observability needed to maintain high data standards.</p>
              <p className="text-md text-white shadow-text pt-3">For companies in Palm Beach and Broward counties looking to optimize their ad spend, Monte Carlo is a critical tool
                for ensuring that every dollar spent is backed by reliable data. This is especially true for businesses using
                AI-driven tools like Omneky or AdCreative.ai, where the quality of input data directly impacts the effectiveness of
                ad campaigns.</p>
              <p className="text-md text-white shadow-text pt-3">Monte Carlo is also ideal for organizations that have a complex data ecosystem and require a scalable solution that
                can grow with their data needs. Whether you&#39;re a small business just starting with data observability or a large
                enterprise with extensive data infrastructure, Monte Carlo offers the flexibility and power to support your ad spend
                optimization goals.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Monte Carlo is particularly valuable for businesses that rely heavily on data-driven marketing strategies and need
                to ensure the integrity of their data. If your organization is struggling with inconsistent data quality or frequent
                data pipeline issues, Monte Carlo can provide the observability needed to maintain high data standards.</p>
              <p className="text-md text-white shadow-text pt-3">For companies in Palm Beach and Broward counties looking to optimize their ad spend, Monte Carlo is a critical tool
                for ensuring that every dollar spent is backed by reliable data. This is especially true for businesses using
                AI-driven tools like Omneky or AdCreative.ai, where the quality of input data directly impacts the effectiveness of
                ad campaigns.</p>
              <p className="text-md text-white shadow-text pt-3">Monte Carlo is also ideal for organizations that have a complex data ecosystem and require a scalable solution that
                can grow with their data needs. Whether you&#39;re a small business just starting with data observability or a large
                enterprise with extensive data infrastructure, Monte Carlo offers the flexibility and power to support your ad spend
                optimization goals.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
