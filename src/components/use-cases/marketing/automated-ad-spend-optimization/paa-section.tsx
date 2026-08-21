export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask&nbsp;<span className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">?</span></h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-are-different-types-of-ad-spending-optimization">What are different types of ad spending optimization?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Ad spending optimization can involve several strategies. These include bid adjustments to allocate budget
              efficiently, audience targeting to reach the right users, and creative testing to find the most effective ad content.
              Automated systems can streamline these processes by analyzing data and making real-time adjustments to improve
              performance and reduce wasted spend.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="are-there-monthly-budget-pacing-auto-adjusting-optimizations">Are there monthly budget pacing auto-adjusting optimizations?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Yes, automated tools can adjust pacing to ensure budgets are spent evenly throughout the month. These systems monitor
              spending patterns and make necessary adjustments to avoid overspending or underspending. This helps businesses
              maintain consistent ad exposure without manual intervention, saving time and reducing the risk of budget
              mismanagement.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-to-implement-performance-based-real-time-reallocation">How to implement performance-based real-time reallocation?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              To implement real-time reallocation based on performance, businesses can use AI platforms that analyze ad performance
              metrics continuously. These platforms can automatically shift budget towards campaigns with higher returns. The
              process involves setting clear performance goals, integrating data sources, and configuring the system to respond to
              performance changes as they occur.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="can-ai-determine-the-saturated-cap-of-an-audience">Can AI determine the saturated cap of an audience?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI can help identify when an audience has reached saturation by analyzing engagement metrics and conversion rates.
              Once engagement starts to drop, it may indicate that the audience is no longer responsive. AI tools can alert
              marketers to these changes, allowing them to adjust strategies or explore new audience segments, ensuring continued
              campaign effectiveness.</p>
          </div>
        </div>
      </div>
    </section >
  );
}
