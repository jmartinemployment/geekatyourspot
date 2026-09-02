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
              <p className="text-md text-white shadow-text pt-3">Make.com excels in automating workflows by connecting various applications, which is crucial for AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>. Here are some of its key capabilities:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Integration with Multiple Applications: Make.com supports integration with over 1,000 apps, including popular marketing tools like Jasper AI and Copy.ai. This broad compatibility allows users to create workflows that leverage the strengths of multiple platforms.</li><li>No-Code Workflow Creation: Users can design complex workflows without writing any code. The drag-and-drop interface simplifies the process, making it accessible to users without technical expertise. This feature is particularly useful for small businesses that need to implement <GlossaryLink slug="marketing-automation">automation</GlossaryLink> quickly and efficiently.</li><li>Automation of Repetitive Tasks: Make.com automates repetitive tasks, such as content distribution and format transformation. By reducing manual intervention, it minimizes errors and frees up valuable time for creative and strategic activities.</li><li>Conditional Logic and Filters: Users can set conditions and filters within workflows to ensure that automation only occurs under specific circumstances. This capability allows for greater precision and customization in how content is repurposed and distributed.</li><li>Real-Time Data Synchronization: Make.com ensures that data across connected applications is updated in real-time. This feature is essential for maintaining consistency and accuracy, especially when repurposing content across multiple channels.</li></ul><p className="text-md text-white shadow-text pt-3">These capabilities make Make.com a powerful tool for businesses looking to streamline their content strategies. By automating the transformation and distribution of content, businesses can maintain a consistent presence across platforms and engage their audience more effectively.</p>
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
              <p className="text-md text-white shadow-text pt-3">Make.com excels in automating workflows by connecting various applications, which is crucial for AI content repurposing. Here are some of its key capabilities:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Integration with Multiple Applications: Make.com supports integration with over 1,000 apps, including popular marketing tools like Jasper AI and Copy.ai. This broad compatibility allows users to create workflows that leverage the strengths of multiple platforms.</li><li>No-Code Workflow Creation: Users can design complex workflows without writing any code. The drag-and-drop interface simplifies the process, making it accessible to users without technical expertise. This feature is particularly useful for small businesses that need to implement automation quickly and efficiently.</li><li>Automation of Repetitive Tasks: Make.com automates repetitive tasks, such as content distribution and format transformation. By reducing manual intervention, it minimizes errors and frees up valuable time for creative and strategic activities.</li><li>Conditional Logic and Filters: Users can set conditions and filters within workflows to ensure that automation only occurs under specific circumstances. This capability allows for greater precision and customization in how content is repurposed and distributed.</li><li>Real-Time Data Synchronization: Make.com ensures that data across connected applications is updated in real-time. This feature is essential for maintaining consistency and accuracy, especially when repurposing content across multiple channels.</li></ul><p className="text-md text-white shadow-text pt-3">These capabilities make Make.com a powerful tool for businesses looking to streamline their content strategies. By automating the transformation and distribution of content, businesses can maintain a consistent presence across platforms and engage their audience more effectively.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
