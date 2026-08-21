import Image from "next/image";

export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
                </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Google Ads Smart Bidding is a powerful AI-driven tool designed to optimize ad spend automatically, ensuring that
                marketing budgets are used efficiently and effectively. It leverages machine learning to adjust bids in real-time,
                aiming to maximize return on investment (ROI) by targeting the right audience at the right time. This is
                particularly beneficial for businesses struggling with traditional ad management methods, which often involve manual
                adjustments and guesswork.</p>
              <p className="text-md text-white shadow-text pt-3">In areas like Palm Beach and Broward counties, where businesses frequently face challenges related to inefficient ad
                spend, Google Ads Smart Bidding offers a solution that reduces wasted dollars and enhances marketing outcomes. By
                automating the bidding process, it minimizes the need for constant manual intervention, allowing businesses to focus
                on strategic decisions rather than operational details.</p>
              <p className="text-md text-white shadow-text pt-3">The tool integrates seamlessly with existing Google Ads campaigns, utilizing historical data and contextual signals
                to predict the likelihood of conversions. This predictive capability enables more precise targeting, which can lead
                to higher conversion rates and improved customer engagement.</p>
              <p className="text-md text-white shadow-text pt-3">Unlike traditional bidding strategies, Google Ads Smart Bidding uses advanced algorithms to continuously learn and
                adapt to changing market conditions. This adaptability ensures that your ads are always optimized for performance,
                regardless of fluctuations in consumer behavior or market trends. The result is a more efficient allocation of ad
                spend, leading to better outcomes for your marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Google Ads Smart Bidding is a powerful AI-driven tool designed to optimize ad spend automatically, ensuring that
                marketing budgets are used efficiently and effectively. It leverages machine learning to adjust bids in real-time,
                aiming to maximize return on investment (ROI) by targeting the right audience at the right time. This is
                particularly beneficial for businesses struggling with traditional ad management methods, which often involve manual
                adjustments and guesswork.</p>
              <p className="text-md text-white shadow-text pt-3">In areas like Palm Beach and Broward counties, where businesses frequently face challenges related to inefficient ad
                spend, Google Ads Smart Bidding offers a solution that reduces wasted dollars and enhances marketing outcomes. By
                automating the bidding process, it minimizes the need for constant manual intervention, allowing businesses to focus
                on strategic decisions rather than operational details.</p>
              <p className="text-md text-white shadow-text pt-3">The tool integrates seamlessly with existing Google Ads campaigns, utilizing historical data and contextual signals
                to predict the likelihood of conversions. This predictive capability enables more precise targeting, which can lead
                to higher conversion rates and improved customer engagement.</p>
              <p className="text-md text-white shadow-text pt-3">Unlike traditional bidding strategies, Google Ads Smart Bidding uses advanced algorithms to continuously learn and
                adapt to changing market conditions. This adaptability ensures that your ads are always optimized for performance,
                regardless of fluctuations in consumer behavior or market trends. The result is a more efficient allocation of ad
                spend, leading to better outcomes for your marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
