export default function StreamliningSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Managing content workflows can be a tangled web of tasks and approvals, often leading to bottlenecks and delays. AI tools streamline these workflows by automating repetitive tasks, which reduces the potential for error and speeds up the content production process. This is where Geek At Your Spot excels, by deploying tools like Zapier and Make.com to integrate various processes into a seamless operational flow.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automating-routine-tasks">Automating Routine Tasks</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Routine tasks such as content scheduling, data entry, and updates can slow down productivity if handled manually. AI tools like Make.com automate these processes, allowing employees to focus on more strategic tasks, thus enhancing overall efficiency within the organization.</p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="efficiency-gains-with-automation">Efficiency Gains with Automation</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">By automating repetitive tasks, businesses can significantly reduce manual errors and improve the speed of content deployment. This results in more streamlined operations and faster turnaround times for content-related tasks.</p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="reducing-manual-errors">Reducing Manual Errors</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">Automated workflows ensure that routine tasks are completed consistently and accurately, minimizing the risk of human error that often accompanies manual processes.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="integrating-diverse-tools">Integrating Diverse Tools</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">A common pain point in content management is the lack of integration between different tools, which can lead to fragmented processes and inefficiencies. By using platforms like Zapier, Geek At Your Spot helps businesses connect disparate tools, creating a cohesive workflow that enhances productivity and collaboration.</p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="creating-seamless-workflows">Creating Seamless Workflows</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">Integrating various tools into a single workflow reduces the need for data to be manually transferred between systems, which decreases the risk of data loss and improves efficiency.</p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enhancing-team-collaboration">Enhancing Team Collaboration</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">With integrated tools, teams can collaborate more effectively as information is easily accessible and shared across platforms, fostering a more synchronized and agile working environment.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-workflows-with-ai-tools">Streamlining Workflows with AI Tools</h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-workflows-with-ai-tools">Streamlining Workflows with AI Tools</h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
