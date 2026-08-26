export default function AIContentSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Creating engaging content consistently is a significant challenge for many marketing teams. Often, the process is time-consuming and demands a lot of creativity and coordination. AI Content Creation Workflow tools streamline the content production process by automating repetitive tasks, assisting in idea generation, and enhancing content personalization.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>AI tools like Jasper AI and Copy.ai provide suggestions for headlines, blog posts, and social media content, helping marketers overcome writer's block and maintain a steady flow of ideas.</li>
        <li>ContentStudio offers features that allow teams to plan, create, and publish content from one central platform, reducing the need for multiple tools and saving considerable time.</li>
        <li>Using ChatGPT can facilitate conversational content creation, enabling more engaging and interactive communications with customers.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-content">Streamlining Content Production</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Content production often involves juggling multiple tasks from research to publication. AI tools can streamline these processes by automating scheduling, optimizing workflows, and ensuring that content is consistently aligned with brand messaging.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enhancing-quality">Enhancing Content Quality</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">AI not only speeds up content production but also enhances its quality. Tools like Surfer SEO and Frase analyze content and offer insights to improve its effectiveness and SEO performance.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="personalizing-content">Personalizing Content for Audience Engagement</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Personalization in content is key to engaging audiences. AI can automate this personalization process by analyzing data to tailor content effectively for different audience segments, increasing relevance and boosting engagement.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ai-content">
                AI Content Creation Workflow
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ai-content">
                AI Content Creation Workflow
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
