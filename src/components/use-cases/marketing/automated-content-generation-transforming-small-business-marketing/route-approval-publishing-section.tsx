import Link from "next/link";

export default function RouteApprovalPublishingSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Navigating the approval and publishing process for marketing content can be a bottleneck for small businesses. Delays often occur due to feedback loops, manual editing, and the coordination required with different stakeholders. These inefficiencies can slow down your marketing strategy, leading to missed opportunities and wasted resources. By integrating AI tools into your workflow, you can streamline this process, ensuring content is approved and published promptly and efficiently.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        One of the effective ways to enhance your content lifecycle is by leveraging AI-driven platforms like{" "}
        <Link id="tools-marketing-writesonic-7" href="/tools/marketing/writesonic" className="text-[#0B162A] hover:underline">
          Writesonic
        </Link>
        , which can assist in generating content variations and manage approval stages through automated workflows. This ensures that content is not only ready for publication faster but also aligns with your brand voice and messaging.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Similarly,{" "}
        <Link id="tools-marketing-copyai-5" href="/tools/marketing/copyai" className="text-[#0B162A] hover:underline">
          Copy.ai
        </Link>{" "}
        offers a comprehensive platform for developing and managing content strategies. It helps in automating the feedback loop by allowing instant revisions and updates, thus reducing the back-and-forth usually required during the approval process. With this tool, businesses can integrate their go-to-market (GTM) strategies into a single platform, eliminating the need for multiple point solutions and ensuring a more cohesive content workflow.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Once content is approved, the next step is the seamless transfer to publishing channels. AI tools can automate this transition, moving content from approval to publication with minimal manual intervention. Approved content can be moved to a scheduler, content management system (CMS), email marketing tool, or content library. This automation reduces errors and ensures that content is published on time and reaches the intended audience efficiently.
      </p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Approved content moves to the scheduler, CMS, email tool, and content library.</li>
        <li>The status is written back to Pipedrive so you see what is planned, approved, published, and performing.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-approval-processes">
        Streamlining Approval Processes
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Approval processes can often be cumbersome, involving multiple stakeholders and numerous revisions. By implementing AI tools like{" "}
        <Link id="tools-marketing-jasper-ai-6" href="/tools/marketing/jasper-ai" className="text-[#0B162A] hover:underline">
          Jasper
        </Link>
        , businesses can automate much of this process. Jasper provides AI-driven insights and suggestions that can help streamline content approval by aligning drafts with strategic objectives and compliance requirements from the outset. This reduces the need for multiple rounds of edits and accelerates the overall timeline from creation to publication.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        In addition, AI tools can offer version control and collaborative features that allow team members to provide feedback and make changes in real-time. This not only saves time but also ensures that all team members are on the same page, reducing the potential for miscommunication and errors.
      </p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ai-content-creation-and-repurposing-for-small-businesses-3">
        AI Content Creation and Repurposing for Small Businesses
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        For small businesses, the ability to repurpose content effectively can be a game-changer. Tools like{" "}
        <Link id="tools-marketing-pictory-6" href="/tools/marketing/pictory" className="text-[#0B162A] hover:underline">
          Pictory
        </Link>{" "}
        help in transforming existing content into different formats, such as videos or infographics, which can be quickly approved and published across multiple platforms. This approach not only saves time but also maximizes the reach and impact of your marketing efforts.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automating-publishing-workflows">
        Automating Publishing Workflows
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Once content is polished and approved, the next hurdle is ensuring it is published in a timely and coordinated manner. AI tools can automate publishing workflows, reducing the manual effort required to distribute content across various channels. These tools can schedule posts, send out emails, and update content libraries automatically, ensuring that every piece of content reaches its audience at the optimal time.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        By using AI-driven scheduling and publishing tools, businesses can maintain a consistent content output without the need for constant manual oversight. This automation not only saves time but also ensures that content strategies are executed precisely as planned, enhancing overall marketing effectiveness.
      </p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="real-time-status-tracking-and-reporting">
        Real-Time Status Tracking and Reporting
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Keeping track of content status and performance is crucial for any marketing strategy. With AI, businesses can achieve real-time visibility into their content pipeline. Tools that integrate with platforms like Pipedrive allow for automatic status updates, showing what content has been planned, approved, published, and how it is performing.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        This transparency enables businesses to make data-driven decisions, adjust strategies on the fly, and ensure that their content marketing efforts are continuously optimized for better results. Real-time reporting also helps in identifying bottlenecks and areas for improvement, further streamlining the marketing process.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="route-through-approval-and-publishing">
                Route through approval and publishing
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="route-through-approval-and-publishing-desktop">
                Route through approval and publishing
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
