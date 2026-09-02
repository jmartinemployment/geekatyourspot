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
              <p className="text-md text-white shadow-text pt-3">Advantage offers a range of capabilities that make it a powerful tool for automated ad spend optimization. Its
                primary strength lies in its ability to leverage AI to enhance campaign performance through intelligent automation
                and <GlossaryLink slug="analytics">data-driven</GlossaryLink> insights.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Dynamic Bid Adjustments: Advantage uses <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> algorithms to analyze market trends and audience
                  behavior in real-time. This allows for dynamic bid adjustments that ensure ads are shown to the right
                  audience at the right time, optimizing ad spend and maximizing <GlossaryLink slug="kpi">ROI</GlossaryLink>.</li>
                <li>Audience Targeting: The tool provides advanced <GlossaryLink slug="user-segmentation">audience segmentation</GlossaryLink> capabilities, enabling businesses to
                  target specific demographics with precision. By understanding audience preferences and behaviors, Advantage
                  ensures that marketing messages resonate with the intended audience.</li>
                <li>Performance Analytics: Advantage offers comprehensive analytics tools that provide insights into campaign
                  performance. These insights allow businesses to understand what works and what doesn&#39;t, enabling
                  continuous improvement and strategic decision-making.</li>
                <li>Seamless Integration: Advantage integrates smoothly with existing marketing platforms, such as Salesforce
                  Einstein and HubSpot, allowing for a unified approach to marketing management. This integration ensures that
                  businesses can leverage existing data and workflows without significant disruption.</li>
                <li>Automated Reporting: With automated reporting features, Advantage simplifies the process of tracking and
                  analyzing campaign metrics. Businesses can access real-time reports that highlight key performance
                  indicators, facilitating quick adjustments and strategic planning.</li>
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
              <p className="text-md text-white shadow-text pt-3">Advantage offers a range of capabilities that make it a powerful tool for automated ad spend optimization. Its
                primary strength lies in its ability to leverage AI to enhance campaign performance through intelligent automation
                and data-driven insights.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Dynamic Bid Adjustments: Advantage uses machine learning algorithms to analyze market trends and audience
                  behavior in real-time. This allows for dynamic bid adjustments that ensure ads are shown to the right
                  audience at the right time, optimizing ad spend and maximizing ROI.</li>
                <li>Audience Targeting: The tool provides advanced audience segmentation capabilities, enabling businesses to
                  target specific demographics with precision. By understanding audience preferences and behaviors, Advantage
                  ensures that marketing messages resonate with the intended audience.</li>
                <li>Performance Analytics: Advantage offers comprehensive analytics tools that provide insights into campaign
                  performance. These insights allow businesses to understand what works and what doesn&#39;t, enabling
                  continuous improvement and strategic decision-making.</li>
                <li>Seamless Integration: Advantage integrates smoothly with existing marketing platforms, such as Salesforce
                  Einstein and HubSpot, allowing for a unified approach to marketing management. This integration ensures that
                  businesses can leverage existing data and workflows without significant disruption.</li>
                <li>Automated Reporting: With automated reporting features, Advantage simplifies the process of tracking and
                  analyzing campaign metrics. Businesses can access real-time reports that highlight key performance
                  indicators, facilitating quick adjustments and strategic planning.</li>
              </ul>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
