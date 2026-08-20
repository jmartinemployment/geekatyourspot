import Image from "next/image";

export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">OpenAI GPT-4 is a state-of-the-art AI language model designed to enhance content creation workflows by automating
                various aspects of writing and editing. This tool is particularly beneficial for businesses and teams aiming to
                produce high-quality content with greater efficiency and less manual intervention. Whether you&#39;re drafting blog
                posts, creating marketing materials, or generating technical documents, GPT-4 can significantly streamline the
                process.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Automates the generation of initial drafts, saving time and reducing the workload for content creators.</li>
                <li>Enhances language precision, ensuring that content is clear and free of errors.</li>
                <li>Generates creative ideas, helping teams brainstorm and refine concepts.</li>
                <li>Supports a wide range of content types, from articles and reports to social media posts and email campaigns.
                </li>
                <li>Integrates seamlessly with existing workflows, making it easy to adopt and use alongside other tools.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">OpenAI GPT-4 is recognized for its ability to produce text that closely mimics human writing, making it a powerful
                asset in any content creation strategy. It is designed to work with minimal setup, allowing teams to quickly
                implement and begin benefiting from its capabilities. The tool is accessible through a user-friendly interface and
                offers affordable plans, making it a viable option for small teams and large enterprises alike.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
