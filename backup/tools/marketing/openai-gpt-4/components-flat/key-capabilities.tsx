import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">OpenAI GPT-4 offers a range of capabilities that enhance the <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> process, making it a versatile tool
              for various applications. Here are some of the key features that set GPT-4 apart:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Automated Drafting: GPT-4 can generate full-length drafts based on a brief input. This feature helps content
                creators focus on refining and editing rather than starting from scratch.</li>
              <li>Language Enhancement: The model improves the quality of writing by suggesting grammar corrections, style
                improvements, and more precise vocabulary.</li>
              <li>Idea Generation: By providing creative prompts and suggestions, GPT-4 assists teams in brainstorming sessions,
                offering fresh perspectives and new angles on topics.</li>
              <li>Content <GlossaryLink slug="personalized-marketing">Personalization</GlossaryLink>: GPT-4 can tailor content to specific audiences by adjusting tone, style, and complexity
                based on user specifications.</li>
              <li>Integration Flexibility: The tool supports integration with other platforms and applications, allowing users to
                incorporate its capabilities into existing systems effortlessly.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities make GPT-4 an invaluable resource for improving productivity and ensuring high-quality output
              across various content types. Its ability to adapt to different writing styles and requirements means that it can be
              used effectively in diverse industries and use cases.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
