import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Are you tired of watching your marketing budget slip through the cracks due to inefficient ad spend? Many businesses
        in Miami-Dade, Broward, and Palm Beach counties face this challenge daily. Traditional ad management often involves guesswork,
        leading to wasted dollars and missed opportunities. Manually tweaking campaigns, struggling with inconsistent
        results, and dealing with complex data analysis can be frustrating and time-consuming.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        This is where automated ad spend optimization comes into play. By leveraging AI-powered tools, such as&nbsp;
        <strong>Google Ads Smart Bidding</strong>, businesses can make data-driven decisions that maximize ROI. These tools use <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> to
        dynamically adjust bids, ensuring your ads reach the right audience at the right time, without the need for constant
        manual intervention. Imagine cutting down on wasted ad spend and focusing on strategies that drive real results.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        At <strong>Geek @ Your Spot LLC</strong>, we help businesses like yours implement these advanced solutions. Our
        expertise in AI ensures accelerated deployment and seamless integration with your existing systems. Let’s explore how
        automated ad spend optimization can transform your marketing efforts, saving you time and boosting your bottom
        line.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In today’s digital marketing landscape, the pressure to optimize ad spend is more intense than ever. Small businesses
        in regions like Miami-Dade, Broward, and Palm Beach counties often find themselves overwhelmed by the complexities of managing ad
        campaigns manually. The traditional approach is not only time-consuming but also prone to human error, leading to
        inefficient budget allocations and poor campaign performance.</p>
      <h3 id={`the-cost-of-manual-ad-management${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">The Cost of Manual Ad Management</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Manual ad management involves a significant amount of guesswork and manual labor. Marketers spend countless hours
        adjusting bids, analyzing performance metrics, and trying to predict consumer behavior. This often results in
        misallocated budgets and underperforming ads. The lack of real-time data and <GlossaryLink slug="analytics">predictive analytics</GlossaryLink> further complicates
        decision-making, causing businesses to lose out on potential revenue.</p>
      <h4 id={`inefficiencies-and-errors${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Inefficiencies and Errors</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Human error is a common issue in manual ad management. Simple mistakes, such as incorrect bid settings or targeting
        parameters, can lead to significant financial losses. Additionally, without the ability to process large volumes of
        data quickly, marketers miss out on valuable insights that could enhance campaign performance.</p>
      <h4 id={`time-consuming-processes${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Time-Consuming Processes</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        The process of manually managing ads is not only prone to errors but also incredibly time-consuming. Marketers often
        find themselves juggling multiple campaigns, each requiring constant attention and updates. This leaves little time
        for strategic planning and creative innovation.</p>
      <h3 id={`how-ai-transforms-ad-spend-optimization${idSuffix}`} className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">How AI Transforms Ad Spend Optimization</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI-powered tools like&nbsp;
        <strong>Advantage</strong>&nbsp;and&nbsp;
        <strong>Omneky</strong>&nbsp;offer a solution to these challenges. By automating key aspects of ad management, these tools enable
        businesses to make smarter, data-driven decisions. They use machine learning algorithms to analyze vast amounts of
        data in real-time, allowing for dynamic bid adjustments and more accurate targeting.</p>
      <h4 id={`dynamic-bidding-strategies${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Dynamic Bidding Strategies</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI tools can automatically adjust bids based on real-time data, ensuring that your ads are always competitive. This
        reduces the need for constant manual intervention and allows marketers to focus on strategic tasks rather than
        routine adjustments.</p>
      <h4 id={`enhanced-targeting-and-personalization${idSuffix}`} className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Enhanced Targeting and Personalization</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        With AI, businesses can achieve more precise targeting and <GlossaryLink slug="personalized-marketing">personalization</GlossaryLink>. Tools like&nbsp;
        <strong>Smartly.io</strong>&nbsp;use consumer data to deliver personalized ad experiences, increasing engagement and <GlossaryLink slug="conversion-funnel">conversion
        rates</GlossaryLink>.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">For a shorter overview, read <Link id={`use-cases-marketing-automated-ad-spend-optimization-lede-blog${idSuffix}`} href="/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies" className="text-[#C83803] hover:underline">How AI Transforms Ad Spend in 4 Ways</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 id="unlocking-automated-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Unlocking Automated Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 id="unlocking-automated-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Unlocking Automated Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
