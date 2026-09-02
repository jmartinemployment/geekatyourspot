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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies is an ideal solution for businesses seeking to optimize their ad spend through <GlossaryLink slug="marketing-automation">automation</GlossaryLink> and
                <GlossaryLink slug="analytics">data-driven</GlossaryLink> decision-making. Here are some scenarios where implementing this tool would be particularly beneficial.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend Volume: Companies with a large volume of ad spend can significantly benefit from Basis
                  Technologies’ automated bid adjustments and comprehensive analytics. The platform’s ability to handle large
                  datasets efficiently makes it suitable for businesses with extensive marketing budgets.</li>
                <li>Multiple Campaign Management: For businesses managing multiple ad campaigns across different channels, Basis
                  Technologies offers a centralized solution that simplifies management and enhances efficiency. Its
                  integration capabilities with tools like Advantage and Madgicx further support this use case.</li>
                <li>Resource-Constrained Teams: Small marketing teams or businesses with limited resources can leverage Basis
                  Technologies to automate repetitive tasks, freeing up time to focus on strategic initiatives. The platform’s
                  user-friendly interface ensures that even teams with limited technical expertise can effectively manage
                  their ad campaigns.</li>
                <li>Desire for Data-Driven Insights: Businesses looking to make informed decisions based on comprehensive
                  analytics will find Basis Technologies’ reporting and insights capabilities invaluable. The platform
                  provides detailed metrics that help refine marketing strategies and improve overall campaign performance.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In conclusion, Basis Technologies is a versatile tool that can be leveraged by businesses of all sizes to enhance
                their marketing efforts through automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>. Whether you are dealing with high ad spend volumes,
                managing multiple campaigns, or operating with limited resources, this platform can provide the necessary tools to
                achieve your advertising goals efficiently.</p>
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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies is an ideal solution for businesses seeking to optimize their ad spend through automation and
                data-driven decision-making. Here are some scenarios where implementing this tool would be particularly beneficial.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>High Ad Spend Volume: Companies with a large volume of ad spend can significantly benefit from Basis
                  Technologies’ automated bid adjustments and comprehensive analytics. The platform’s ability to handle large
                  datasets efficiently makes it suitable for businesses with extensive marketing budgets.</li>
                <li>Multiple Campaign Management: For businesses managing multiple ad campaigns across different channels, Basis
                  Technologies offers a centralized solution that simplifies management and enhances efficiency. Its
                  integration capabilities with tools like Advantage and Madgicx further support this use case.</li>
                <li>Resource-Constrained Teams: Small marketing teams or businesses with limited resources can leverage Basis
                  Technologies to automate repetitive tasks, freeing up time to focus on strategic initiatives. The platform’s
                  user-friendly interface ensures that even teams with limited technical expertise can effectively manage
                  their ad campaigns.</li>
                <li>Desire for Data-Driven Insights: Businesses looking to make informed decisions based on comprehensive
                  analytics will find Basis Technologies’ reporting and insights capabilities invaluable. The platform
                  provides detailed metrics that help refine marketing strategies and improve overall campaign performance.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">In conclusion, Basis Technologies is a versatile tool that can be leveraged by businesses of all sizes to enhance
                their marketing efforts through automated ad spend optimization. Whether you are dealing with high ad spend volumes,
                managing multiple campaigns, or operating with limited resources, this platform can provide the necessary tools to
                achieve your advertising goals efficiently.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
