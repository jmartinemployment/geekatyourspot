import { GlossaryLink } from "@/components/glossary/glossary-link";
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
              <p className="text-md text-white shadow-text pt-3">Madgicx is a powerful AI-driven platform designed to optimize ad spend automatically. It helps businesses,
                particularly those in Palm Beach and Broward counties, overcome the challenges of inefficient ad management.
                Traditional methods often result in wasted budgets and missed opportunities due to the reliance on manual
                adjustments and complex data analysis. Madgicx addresses these issues by leveraging <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> to dynamically
                adjust ad strategies, ensuring maximum return on investment (<GlossaryLink slug="kpi">ROI</GlossaryLink>).</p>
              <p className="text-md text-white shadow-text pt-3">The platform integrates seamlessly into existing marketing systems, providing businesses with the tools to make
                <GlossaryLink slug="analytics">data-driven</GlossaryLink> decisions. By automating the <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink> process, Madgicx reduces the need for constant manual
                intervention, allowing marketing teams to focus on strategic initiatives that drive real results. This not only cuts
                down on wasted ad spend but also enhances overall campaign effectiveness.</p>
              <p className="text-md text-white shadow-text pt-3">Madgicx stands out by offering a comprehensive suite of features tailored for automated ad spend optimization. It
                provides insights into audience behavior, optimizes creative content, and adjusts bidding strategies in real-time.
                This ensures ads reach the right audience at the right time, maximizing engagement and conversions. With Madgicx,
                businesses can expect a streamlined process that saves time, reduces errors, and ultimately leads to happier
                customers.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which also focuses on bid adjustments, Madgicx offers a
                more holistic approach by incorporating audience insights and creative optimization. This makes it an ideal choice
                for businesses looking to enhance their marketing efforts through automated ad spend optimization.</p>
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
              <p className="text-md text-white shadow-text pt-3">Madgicx is a powerful AI-driven platform designed to optimize ad spend automatically. It helps businesses,
                particularly those in Palm Beach and Broward counties, overcome the challenges of inefficient ad management.
                Traditional methods often result in wasted budgets and missed opportunities due to the reliance on manual
                adjustments and complex data analysis. Madgicx addresses these issues by leveraging machine learning to dynamically
                adjust ad strategies, ensuring maximum return on investment (ROI).</p>
              <p className="text-md text-white shadow-text pt-3">The platform integrates seamlessly into existing marketing systems, providing businesses with the tools to make
                data-driven decisions. By automating the ad spend optimization process, Madgicx reduces the need for constant manual
                intervention, allowing marketing teams to focus on strategic initiatives that drive real results. This not only cuts
                down on wasted ad spend but also enhances overall campaign effectiveness.</p>
              <p className="text-md text-white shadow-text pt-3">Madgicx stands out by offering a comprehensive suite of features tailored for automated ad spend optimization. It
                provides insights into audience behavior, optimizes creative content, and adjusts bidding strategies in real-time.
                This ensures ads reach the right audience at the right time, maximizing engagement and conversions. With Madgicx,
                businesses can expect a streamlined process that saves time, reduces errors, and ultimately leads to happier
                customers.</p>
              <p className="text-md text-white shadow-text pt-3">In comparison to other tools like Google Ads Smart Bidding, which also focuses on bid adjustments, Madgicx offers a
                more holistic approach by incorporating audience insights and creative optimization. This makes it an ideal choice
                for businesses looking to enhance their marketing efforts through automated ad spend optimization.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
