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
              <p className="text-md text-white shadow-text pt-3">Great Expectations is a powerful open-source data validation tool designed to ensure data quality and integrity. In
                the context of automated ad spend optimization, it plays a crucial role by validating the data used in AI-driven
                marketing strategies. By ensuring that data is accurate, consistent, and reliable, Great Expectations helps
                businesses make informed decisions that optimize their marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Automated ad spend optimization relies heavily on accurate data to adjust ad bids in real-time. Tools like Google
                Ads Smart Bidding and Advantage use machine learning algorithms to maximize return on investment by targeting the
                right audience at the right time. However, the effectiveness of these tools is contingent upon the quality of the
                input data. Great Expectations ensures that the data feeding into these systems is clean and trustworthy, thereby
                enhancing the overall performance of automated ad spend optimization efforts.</p>
              <p className="text-md text-white shadow-text pt-3">By implementing Great Expectations, businesses can reduce the time spent on manual data checks and focus more on
                strategic decision-making. This tool provides a framework for defining, testing, and maintaining data expectations,
                which are essentially the rules that data must meet to be considered valid. With Great Expectations, companies can
                automate the validation process, ensuring that data issues are caught early, thus saving time and reducing the risk
                of costly errors in ad spend strategies.</p>
              <p className="text-md text-white shadow-text pt-3">Great Expectations is particularly beneficial for businesses in Palm Beach and Broward counties facing challenges
                with inefficient ad spend. By integrating this tool into their data pipeline, companies can enhance their
                data-driven marketing strategies, leading to more effective ad campaigns and ultimately, a better ROI. Whether
                you&#39;re using Omneky or AdCreative.ai, ensuring data quality with Great Expectations can significantly improve
                the outcomes of automated ad spend optimization.</p>
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
              <p className="text-md text-white shadow-text pt-3">Great Expectations is a powerful open-source data validation tool designed to ensure data quality and integrity. In
                the context of automated ad spend optimization, it plays a crucial role by validating the data used in AI-driven
                marketing strategies. By ensuring that data is accurate, consistent, and reliable, Great Expectations helps
                businesses make informed decisions that optimize their marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Automated ad spend optimization relies heavily on accurate data to adjust ad bids in real-time. Tools like Google
                Ads Smart Bidding and Advantage use machine learning algorithms to maximize return on investment by targeting the
                right audience at the right time. However, the effectiveness of these tools is contingent upon the quality of the
                input data. Great Expectations ensures that the data feeding into these systems is clean and trustworthy, thereby
                enhancing the overall performance of automated ad spend optimization efforts.</p>
              <p className="text-md text-white shadow-text pt-3">By implementing Great Expectations, businesses can reduce the time spent on manual data checks and focus more on
                strategic decision-making. This tool provides a framework for defining, testing, and maintaining data expectations,
                which are essentially the rules that data must meet to be considered valid. With Great Expectations, companies can
                automate the validation process, ensuring that data issues are caught early, thus saving time and reducing the risk
                of costly errors in ad spend strategies.</p>
              <p className="text-md text-white shadow-text pt-3">Great Expectations is particularly beneficial for businesses in Palm Beach and Broward counties facing challenges
                with inefficient ad spend. By integrating this tool into their data pipeline, companies can enhance their
                data-driven marketing strategies, leading to more effective ad campaigns and ultimately, a better ROI. Whether
                you&#39;re using Omneky or AdCreative.ai, ensuring data quality with Great Expectations can significantly improve
                the outcomes of automated ad spend optimization.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
