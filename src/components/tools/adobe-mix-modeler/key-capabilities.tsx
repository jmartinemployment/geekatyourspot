import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is equipped with a range of capabilities that make it a standout choice for businesses seeking to
                optimize their ad spend. These features are designed to simplify the process and enhance the effectiveness of
                marketing campaigns.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Bid Management: The tool uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to automatically adjust bids based on
                  real-time data, ensuring that ads are shown to the right audience at the right time. This reduces the need
                  for manual intervention and helps maximize <GlossaryLink slug="kpi">ROI</GlossaryLink>.</li>
                <li>Multi-Channel Integration: Adobe Mix Modeler can seamlessly integrate with various advertising platforms,
                  such as Smartly.io and Omneky, allowing businesses to manage their campaigns across multiple channels from a
                  single interface.</li>
                <li><GlossaryLink slug="analytics">Predictive Analytics</GlossaryLink>: The tool provides insights into future ad performance by analyzing historical data,
                  helping marketers make informed decisions about budget allocation and strategy adjustments.</li>
                <li>Customizable Dashboards: Users can create personalized dashboards to monitor campaign performance in real
                  time, making it easier to track key metrics and identify areas for improvement.</li>
                <li>Scalability: Adobe Mix Modeler is designed to handle campaigns of all sizes, making it suitable for both
                  small businesses and large enterprises looking to optimize their ad spend.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Adobe Mix Modeler an essential tool for businesses aiming to improve their marketing
                efficiency and effectiveness. By automating complex processes and providing valuable insights, it empowers marketers
                to make smarter decisions and achieve better results.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is equipped with a range of capabilities that make it a standout choice for businesses seeking to
                optimize their ad spend. These features are designed to simplify the process and enhance the effectiveness of
                marketing campaigns.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automated Bid Management: The tool uses machine learning algorithms to automatically adjust bids based on
                  real-time data, ensuring that ads are shown to the right audience at the right time. This reduces the need
                  for manual intervention and helps maximize ROI.</li>
                <li>Multi-Channel Integration: Adobe Mix Modeler can seamlessly integrate with various advertising platforms,
                  such as Smartly.io and Omneky, allowing businesses to manage their campaigns across multiple channels from a
                  single interface.</li>
                <li>Predictive Analytics: The tool provides insights into future ad performance by analyzing historical data,
                  helping marketers make informed decisions about budget allocation and strategy adjustments.</li>
                <li>Customizable Dashboards: Users can create personalized dashboards to monitor campaign performance in real
                  time, making it easier to track key metrics and identify areas for improvement.</li>
                <li>Scalability: Adobe Mix Modeler is designed to handle campaigns of all sizes, making it suitable for both
                  small businesses and large enterprises looking to optimize their ad spend.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities make Adobe Mix Modeler an essential tool for businesses aiming to improve their marketing
                efficiency and effectiveness. By automating complex processes and providing valuable insights, it empowers marketers
                to make smarter decisions and achieve better results.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
