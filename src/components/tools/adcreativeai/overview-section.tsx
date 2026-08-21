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
              <p className="text-md text-white shadow-text pt-3">AdCreative.ai is designed to revolutionize the way businesses manage their ad spend by leveraging artificial
                intelligence to automate and optimize advertising campaigns. Many companies struggle with inefficient ad spend,
                often resulting in wasted budget and missed opportunities. AdCreative.ai addresses these challenges by providing a
                platform that streamlines the creation and management of ad content, ensuring that marketing efforts are both
                effective and efficient.</p>
              <p className="text-md text-white shadow-text pt-3">The tool is especially beneficial for businesses in competitive markets, such as Palm Beach and Broward counties,
                where every advertising dollar needs to be maximized. By using AI-powered insights, AdCreative.ai helps marketers
                make data-driven decisions that enhance the return on investment (ROI) of their campaigns. This is achieved through
                automated processes that adjust ad content and placement strategies in real time, ensuring that ads are always
                targeted to the right audience at the right time.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which focuses primarily on bid adjustments,
                AdCreative.ai offers a more comprehensive approach by also optimizing the creative aspects of advertisements. This
                dual focus ensures that not only are bids optimized for cost-effectiveness, but the ad content itself is tailored to
                engage and convert potential customers.</p>
              <p className="text-md text-white shadow-text pt-3">With AdCreative.ai, businesses can reduce the time spent on manual ad management, minimize errors, and ultimately
                increase customer satisfaction by delivering more relevant and engaging ads. The platform is accessible and
                affordable for small teams, making it an ideal solution for companies looking to enhance their marketing efficiency
                without significant overhead costs.</p>
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
              <p className="text-md text-white shadow-text pt-3">AdCreative.ai is designed to revolutionize the way businesses manage their ad spend by leveraging artificial
                intelligence to automate and optimize advertising campaigns. Many companies struggle with inefficient ad spend,
                often resulting in wasted budget and missed opportunities. AdCreative.ai addresses these challenges by providing a
                platform that streamlines the creation and management of ad content, ensuring that marketing efforts are both
                effective and efficient.</p>
              <p className="text-md text-white shadow-text pt-3">The tool is especially beneficial for businesses in competitive markets, such as Palm Beach and Broward counties,
                where every advertising dollar needs to be maximized. By using AI-powered insights, AdCreative.ai helps marketers
                make data-driven decisions that enhance the return on investment (ROI) of their campaigns. This is achieved through
                automated processes that adjust ad content and placement strategies in real time, ensuring that ads are always
                targeted to the right audience at the right time.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which focuses primarily on bid adjustments,
                AdCreative.ai offers a more comprehensive approach by also optimizing the creative aspects of advertisements. This
                dual focus ensures that not only are bids optimized for cost-effectiveness, but the ad content itself is tailored to
                engage and convert potential customers.</p>
              <p className="text-md text-white shadow-text pt-3">With AdCreative.ai, businesses can reduce the time spent on manual ad management, minimize errors, and ultimately
                increase customer satisfaction by delivering more relevant and engaging ads. The platform is accessible and
                affordable for small teams, making it an ideal solution for companies looking to enhance their marketing efficiency
                without significant overhead costs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
