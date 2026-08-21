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
              <p className="text-md text-white shadow-text pt-3">In the fast-paced world of digital marketing, optimizing ad spend is crucial for maximizing return on investment
                (ROI). Monte Carlo offers a robust solution to tackle this challenge by providing a comprehensive platform for
                automated ad spend optimization. Designed to seamlessly integrate with your existing marketing tools, Monte Carlo
                helps businesses refine their advertising strategies by ensuring data accuracy and reliability.</p>
              <p className="text-md text-white shadow-text pt-3">Monte Carlo stands out by focusing on data observability, which is essential for making informed decisions in ad
                spend optimization. By monitoring data pipelines and identifying anomalies, it ensures that the data driving your ad
                campaigns is both accurate and actionable. This capability is especially important for companies dealing with large
                volumes of data, where even a small discrepancy can lead to significant financial implications.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which focuses on adjusting bids based on machine
                learning algorithms, Monte Carlo emphasizes the integrity of the data feeding those algorithms. This complementary
                relationship ensures that your automated bidding strategies are based on the most reliable data possible, ultimately
                enhancing the efficiency and effectiveness of your ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses in regions such as Palm Beach and Broward counties can benefit from Monte Carlo&#39;s ability to
                streamline data processes and reduce the manual effort involved in campaign management. By minimizing the guesswork
                and enhancing data-driven decision-making, Monte Carlo empowers marketers to focus on strategic initiatives that
                drive real results.</p>
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
              <p className="text-md text-white shadow-text pt-3">In the fast-paced world of digital marketing, optimizing ad spend is crucial for maximizing return on investment
                (ROI). Monte Carlo offers a robust solution to tackle this challenge by providing a comprehensive platform for
                automated ad spend optimization. Designed to seamlessly integrate with your existing marketing tools, Monte Carlo
                helps businesses refine their advertising strategies by ensuring data accuracy and reliability.</p>
              <p className="text-md text-white shadow-text pt-3">Monte Carlo stands out by focusing on data observability, which is essential for making informed decisions in ad
                spend optimization. By monitoring data pipelines and identifying anomalies, it ensures that the data driving your ad
                campaigns is both accurate and actionable. This capability is especially important for companies dealing with large
                volumes of data, where even a small discrepancy can lead to significant financial implications.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which focuses on adjusting bids based on machine
                learning algorithms, Monte Carlo emphasizes the integrity of the data feeding those algorithms. This complementary
                relationship ensures that your automated bidding strategies are based on the most reliable data possible, ultimately
                enhancing the efficiency and effectiveness of your ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses in regions such as Palm Beach and Broward counties can benefit from Monte Carlo&#39;s ability to
                streamline data processes and reduce the manual effort involved in campaign management. By minimizing the guesswork
                and enhancing data-driven decision-making, Monte Carlo empowers marketers to focus on strategic initiatives that
                drive real results.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
