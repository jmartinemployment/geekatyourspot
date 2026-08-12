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
              <p className="text-md text-white shadow-text pt-3">Jasper AI is a powerful content creation platform designed to enhance the efficiency and quality of writing
                processes for businesses. It leverages artificial intelligence to streamline content generation, enabling users to
                produce high-quality material quickly and with less manual effort. This tool is particularly beneficial for
                organizations looking to optimize their content creation workflows, allowing teams to focus on strategic tasks
                rather than getting bogged down by repetitive writing chores.</p>
              <p className="text-md text-white shadow-text pt-3">With Jasper AI, businesses can expect to see significant improvements in the speed and consistency of their content
                output. The platform offers a range of features tailored to meet diverse writing needs, from drafting blog posts and
                articles to creating marketing copy and social media content. By automating routine writing tasks, Jasper AI not
                only saves time but also helps reduce costs associated with content production.</p>
              <p className="text-md text-white shadow-text pt-3">Jasper AI is designed with user-friendly interfaces and straightforward functionalities, making it accessible for
                teams with varying levels of technical expertise. The platform’s intuitive design ensures that users can quickly
                learn how to use its features, minimizing the learning curve and accelerating deployment. Additionally, Jasper AI
                offers flexible pricing plans that cater to small teams and large enterprises alike, ensuring that businesses of all
                sizes can benefit from its capabilities.</p>
              <p className="text-md text-white shadow-text pt-3">In summary, Jasper AI is an ideal solution for businesses seeking to enhance their content creation processes. By
                leveraging AI technology, it delivers measurable results such as reduced time spent on writing tasks, fewer errors
                in content, and ultimately, happier customers due to more engaging and consistent communication.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
