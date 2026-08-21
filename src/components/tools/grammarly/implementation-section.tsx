export default function ImplementationSection() {

  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
          <div className="col-span-5"></div>
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Implementation Considerations</h2>
            <p className="text-md text-white shadow-text pt-3">Implementing Grammarly into your content creation workflow involves several considerations to ensure a smooth and
              effective integration. Here are some key areas to focus on:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Accelerated Deployment: Grammarly offers pre-built connectors and browser extensions that facilitate quick
                deployment. This allows teams to integrate Grammarly with their existing tools and platforms without extensive
                setup time.</li>
              <li>Data Model Design: While Grammarly does not require complex data model design, it is important to consider how
                user data, such as writing preferences and feedback, will be managed and utilized to personalize the experience.
              </li>
              <li>Workflow and Process Configuration: Grammarly can be configured to fit into existing workflows by setting up
                specific writing goals and preferences. This includes defining the level of formality, domain-specific language,
                and other stylistic choices that align with organizational standards.</li>
              <li>Custom Code and Development: Grammarly is primarily a configuration-based tool and does not require custom
                coding or development. However, users can leverage its API for more advanced integrations and automations if
                needed.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">Geek At Your Spot, an AI implementation consultancy, helps organizations close the gap by providing expertise in
              integrating tools like Grammarly into their workflows. This includes advising on best practices for deployment,
              customization of settings to align with business objectives, and ensuring that the tool is used to its full
              potential to enhance content quality and efficiency.</p>
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              When to Use</h2>
            <p className="text-md text-white shadow-text pt-3">Grammarly is ideal for a variety of scenarios where clear and effective written communication is crucial. Here are
              some situations where Grammarly can be particularly beneficial:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Content Creation: Writers and editors can use Grammarly to streamline the editing process, ensuring that
                articles, blogs, and other content types are polished and error-free before publication.</li>
              <li>Business Communication: Professionals can improve the clarity and professionalism of emails, reports, and
                presentations by using Grammarly to catch errors and suggest improvements.</li>
              <li>Academic Writing: Students and educators can benefit from Grammarly&#39;s grammar checks and plagiarism
                detection to maintain academic integrity and improve writing quality.</li>
              <li>Multilingual Teams: For teams with members who are non-native English speakers, Grammarly helps ensure that
                communication remains clear and comprehensible, reducing the risk of misunderstandings.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">By integrating Grammarly into these workflows, organizations can achieve more efficient processes, reduce the time
              spent on revisions, and enhance the overall quality of their written communication. This not only saves time and
              costs but also leads to happier customers and more successful outcomes.</p>
          </div>
        </div>
      </div >
    </section >
  );
}
