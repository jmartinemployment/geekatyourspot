import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Make.com offers a comprehensive suite of capabilities designed to streamline and automate <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> workflows. These features work together to create powerful automation scenarios that reduce manual effort and improve efficiency across your entire content operation.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>No-Code Workflow Creation: Build complex automation workflows without coding knowledge, using an intuitive visual interface that allows anyone to design sophisticated content repurposing scenarios. Drag-and-drop functionality makes it easy to connect different applications and create multi-step processes.</li>
              <li>1000+ App Integration: Connect with over 1,000 applications out of the box, enabling seamless data flow between your <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> tools, AI platforms, and distribution channels. Pre-built connectors simplify integration setup and reduce implementation time.</li>
              <li>Customizable Triggers and Actions: Set up automated responses to specific events, such as automatically repurposing new blog posts or triggering content distribution when certain conditions are met. This flexibility allows you to create workflows tailored to your exact business needs.</li>
              <li>Multi-Step Workflow Automation: Design complex workflows with multiple steps, conditions, and decision points. Make.com allows you to handle sophisticated content repurposing scenarios that would be difficult or impossible to manage manually.</li>
              <li>Real-Time Error Handling and Monitoring: Track workflow performance and receive alerts when issues occur. Built-in error handling capabilities ensure that your automation continues to run smoothly and reliably, even when unexpected problems arise.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
