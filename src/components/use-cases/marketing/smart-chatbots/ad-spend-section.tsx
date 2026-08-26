export default function AdSpendSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Managing ad spend effectively is a common challenge for marketing teams. Without precise control, budgets can quickly run over, or ads may not reach the desired audience, leading to wasted resources and missed opportunities. Automated ad spend optimization using AI can transform this process, providing more accurate targeting and budget allocation.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Tools like Google Ads Smart Bidding and Smartly.io use AI algorithms to analyze vast amounts of data, predicting which ads will perform best and adjusting bids in real-time. This not only maximizes ROI but also reduces the manual effort involved in managing ad campaigns.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="dynamic-budget">Dynamic Budget Allocation</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Dynamic budget allocation is about shifting ad spend in response to real-time performance data. This ensures that funds are allocated to the most effective channels and ads, maximizing returns.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Using AI-driven tools, marketing teams can automate the distribution of their budget across various platforms based on current performance indicators. This tool analyzes ongoing campaigns and reallocates funds to high-performing ads, reducing the time spent on manual budget adjustments.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ai-bid-adjustments">AI-Powered Bid Adjustments</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">AI-powered bid adjustments enable marketers to set optimal bid amounts for advertising placements automatically. This process involves using algorithms that consider factors like user behavior, ad placement, and competition to determine the best bid prices.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="performance-monitoring">Performance Monitoring and Adjustment</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Effective ad spend optimization requires continuous performance monitoring to ensure that campaigns remain aligned with business objectives. AI tools facilitate this by providing real-time insights into campaign performance, allowing businesses to adjust campaigns proactively and maintain a competitive edge.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ad-spend">
                Automated Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ad-spend">
                Automated Ad Spend Optimization
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
