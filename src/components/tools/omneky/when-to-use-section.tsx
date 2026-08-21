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
              <p className="text-md text-white shadow-text pt-3">Omneky is best suited for businesses that face challenges with inefficient ad spend and are looking to enhance their
                marketing strategies through automation. Here are some scenarios where Omneky can deliver substantial value.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend with Variable Results: Companies that invest heavily in digital advertising but see
                  inconsistent returns can benefit from Omneky&#39;s automated bid adjustments and performance analytics.</li>
                <li>Limited Marketing Resources: For teams with limited manpower, Omneky reduces the burden of manual ad
                  management, allowing staff to focus on strategic planning and creative development.</li>
                <li>Complex Campaigns Across Multiple Platforms: Businesses running campaigns across various platforms can use
                  Omneky to centralize management and ensure consistent performance across all channels.</li>
                <li>Need for Real-Time Insights: Omneky provides real-time analytics, which is crucial for businesses needing to
                  make quick adjustments based on current market trends and audience behavior.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In each of these cases, Omneky offers the tools necessary to optimize ad spend, improve campaign outcomes, and
                ultimately drive greater business success. By automating routine tasks and providing actionable insights, Omneky
                empowers marketers to focus on what truly matters—creating impactful advertising strategies that resonate with their
                audiences.</p>
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
              <p className="text-md text-white shadow-text pt-3">Omneky is best suited for businesses that face challenges with inefficient ad spend and are looking to enhance their
                marketing strategies through automation. Here are some scenarios where Omneky can deliver substantial value.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend with Variable Results: Companies that invest heavily in digital advertising but see
                  inconsistent returns can benefit from Omneky&#39;s automated bid adjustments and performance analytics.</li>
                <li>Limited Marketing Resources: For teams with limited manpower, Omneky reduces the burden of manual ad
                  management, allowing staff to focus on strategic planning and creative development.</li>
                <li>Complex Campaigns Across Multiple Platforms: Businesses running campaigns across various platforms can use
                  Omneky to centralize management and ensure consistent performance across all channels.</li>
                <li>Need for Real-Time Insights: Omneky provides real-time analytics, which is crucial for businesses needing to
                  make quick adjustments based on current market trends and audience behavior.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In each of these cases, Omneky offers the tools necessary to optimize ad spend, improve campaign outcomes, and
                ultimately drive greater business success. By automating routine tasks and providing actionable insights, Omneky
                empowers marketers to focus on what truly matters—creating impactful advertising strategies that resonate with their
                audiences.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
