import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Make.com is an excellent choice for organizations looking to automate complex content workflows at scale. It excels in scenarios where you need to connect multiple systems and create sophisticated, multi-step automation processes that go beyond simple point-to-point integrations.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Organizations with diverse tech stacks will particularly benefit from Make.com's extensive integration library. If your content ecosystem includes multiple platforms—CMS systems, social media schedulers, <GlossaryLink slug="marketing-automation">email marketing</GlossaryLink> tools, <GlossaryLink slug="analytics">analytics</GlossaryLink> platforms, and AI content services—Make.com provides the connective tissue that ties everything together seamlessly.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Make.com is also ideal for teams that need to iterate quickly on their automation strategies. The visual workflow designer enables rapid prototyping and testing of new approaches, allowing you to experiment with different <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> scenarios without requiring developer resources. This agility is crucial in today's fast-moving marketing landscape.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">In comparison to other automation platforms like Zapier, Make.com is better suited for complex, multi-step workflows that require conditional logic and sophisticated routing. If your content repurposing needs are straightforward, a simpler tool may suffice. But if you require powerful automation capabilities with the flexibility to handle edge cases and complex business logic, Make.com's advanced features make it the clear choice for organizations serious about content automation.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
