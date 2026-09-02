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
              <p className="text-md text-white shadow-text pt-3">Google Ads Smart Bidding offers several key capabilities that set it apart from manual bidding strategies. These
                capabilities are designed to enhance the efficiency and effectiveness of your ad campaigns, ultimately driving
                better results.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Real-Time Bid Adjustments: The tool uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> to adjust bids in real-time based on a variety of
                  signals such as device, location, time of day, and user intent. This ensures that your ads are shown to the
                  most relevant audience, increasing the chances of conversion.</li>
                <li>Flexible Bidding Strategies: Google Ads Smart Bidding offers multiple bidding strategies to suit different
                  campaign goals, including Target CPA (Cost Per Acquisition), Target ROAS (Return on Ad Spend), and Enhanced
                  CPC (Cost Per Click). Each strategy is tailored to optimize for specific outcomes, whether you aim to
                  increase conversions, maximize revenue, or improve click-through rates.</li>
                <li>Integration with Google <GlossaryLink slug="analytics">Analytics</GlossaryLink>: By integrating with Google Analytics, Smart Bidding can access a broader
                  set of data points, enhancing its ability to predict and optimize for conversions. This integration allows
                  for more comprehensive performance tracking and analysis.</li>
                <li>Automated Performance Tracking: The tool provides automated reports and insights into campaign performance,
                  helping marketers to understand the impact of their bidding strategies without needing to manually analyze
                  data.</li>
                <li>Continuous Learning: The AI algorithms behind Smart Bidding continuously learn from past performance and
                  adjust strategies accordingly. This ensures that your campaigns are always optimized for the best possible
                  outcomes.</li>
              </ul>
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
              <p className="text-md text-white shadow-text pt-3">Google Ads Smart Bidding offers several key capabilities that set it apart from manual bidding strategies. These
                capabilities are designed to enhance the efficiency and effectiveness of your ad campaigns, ultimately driving
                better results.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Real-Time Bid Adjustments: The tool uses machine learning to adjust bids in real-time based on a variety of
                  signals such as device, location, time of day, and user intent. This ensures that your ads are shown to the
                  most relevant audience, increasing the chances of conversion.</li>
                <li>Flexible Bidding Strategies: Google Ads Smart Bidding offers multiple bidding strategies to suit different
                  campaign goals, including Target CPA (Cost Per Acquisition), Target ROAS (Return on Ad Spend), and Enhanced
                  CPC (Cost Per Click). Each strategy is tailored to optimize for specific outcomes, whether you aim to
                  increase conversions, maximize revenue, or improve click-through rates.</li>
                <li>Integration with Google Analytics: By integrating with Google Analytics, Smart Bidding can access a broader
                  set of data points, enhancing its ability to predict and optimize for conversions. This integration allows
                  for more comprehensive performance tracking and analysis.</li>
                <li>Automated Performance Tracking: The tool provides automated reports and insights into campaign performance,
                  helping marketers to understand the impact of their bidding strategies without needing to manually analyze
                  data.</li>
                <li>Continuous Learning: The AI algorithms behind Smart Bidding continuously learn from past performance and
                  adjust strategies accordingly. This ensures that your campaigns are always optimized for the best possible
                  outcomes.</li>
              </ul>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
