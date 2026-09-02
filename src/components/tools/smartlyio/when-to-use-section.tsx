import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Smartly.io is an ideal choice for businesses looking to optimize their ad spend through <GlossaryLink slug="marketing-automation">automation</GlossaryLink> and <GlossaryLink slug="analytics">data-driven</GlossaryLink>
                insights. Here are scenarios where Smartly.io can be particularly beneficial:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend Volumes: For companies managing large volumes of ad spend across multiple channels, Smartly.io
                  offers the automation and efficiency needed to manage these campaigns effectively.</li>
                <li>Complex Campaign Structures: Businesses with complex campaign structures that require frequent adjustments
                  and optimizations can benefit from Smartly.io&#39;s <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> automation capabilities, reducing the need for
                  constant manual intervention.</li>
                <li>Need for Cross-Platform Consistency: If maintaining consistent messaging across various social media
                  platforms is a priority, Smartly.io&#39;s centralized management system is invaluable.</li>
                <li>Desire for Data-Driven Decision Making: Companies aiming to make informed marketing decisions based on
                  real-time data will find Smartly.io&#39;s analytics and reporting tools highly beneficial.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By choosing Smartly.io, businesses can focus on strategic growth rather than the intricacies of ad management,
                leading to more effective marketing and better allocation of resources.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Smartly.io is an ideal choice for businesses looking to optimize their ad spend through automation and data-driven
                insights. Here are scenarios where Smartly.io can be particularly beneficial:</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend Volumes: For companies managing large volumes of ad spend across multiple channels, Smartly.io
                  offers the automation and efficiency needed to manage these campaigns effectively.</li>
                <li>Complex Campaign Structures: Businesses with complex campaign structures that require frequent adjustments
                  and optimizations can benefit from Smartly.io&#39;s AI-driven automation capabilities, reducing the need for
                  constant manual intervention.</li>
                <li>Need for Cross-Platform Consistency: If maintaining consistent messaging across various social media
                  platforms is a priority, Smartly.io&#39;s centralized management system is invaluable.</li>
                <li>Desire for Data-Driven Decision Making: Companies aiming to make informed marketing decisions based on
                  real-time data will find Smartly.io&#39;s analytics and reporting tools highly beneficial.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By choosing Smartly.io, businesses can focus on strategic growth rather than the intricacies of ad management,
                leading to more effective marketing and better allocation of resources.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
