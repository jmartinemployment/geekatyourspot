import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPersonCircleQuestion, faCircleQuestion, faQuestion } from "@fortawesome/free-solid-svg-icons";


export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask&nbsp;<span className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">?</span></h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-a-typical-content-creation-workflow">What is a typical Content Creation Workflow?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              A typical content creation workflow involves several stages: brainstorming, research, drafting, editing, approval,
              and distribution. It starts with generating ideas based on business goals and audience needs. Then, content is
              drafted and edited to ensure clarity and effectiveness. After approval, it is distributed across appropriate
              channels. AI can streamline this process by automating repetitive tasks, offering data-driven insights, and ensuring
              content consistency.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-does-ai-maintain-a-consistent-brand-voice">How does AI maintain a consistent brand voice?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI maintains a consistent brand voice by analyzing existing content to understand the tone, style, and language
              preferences. It uses this analysis to generate new content that aligns with the established brand voice. Tools like
              natural language processing (NLP) help ensure that all content pieces reflect the same personality and message,
              reducing the risk of inconsistencies.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-can-ai-help-in-repurposing-content">How can AI help in repurposing content?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI helps in repurposing content by identifying key themes and segments that can be adapted into different formats.
              For instance, AI can transform a blog post into a series of social media updates or a podcast script. This maximizes
              content reach and engagement without starting from scratch each time, saving time and resources.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-can-ai-help-with-social-media-distribution">How can AI help with social media distribution?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI assists with social media distribution by automating the scheduling and posting of content across platforms. It
              analyzes engagement data to optimize posting times and formats, ensuring maximum reach and interaction. AI can also
              personalize content for different audience segments, enhancing relevance and engagement.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-does-ai-decide-on-blog-and-article-generation">How does AI decide on blog and article generation?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI decides on blog and article generation by analyzing data trends and audience interests. It can suggest topics
              that are likely to engage readers and align with current market trends. AI tools can also draft initial versions of
              articles, allowing human writers to focus on refining and adding value, which speeds up the content creation
              process.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-does-ai-personalize-email">How does AI personalize email?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI personalizes email by analyzing user data to tailor content to individual preferences and behaviors. It can
              adjust subject lines, content, and call-to-actions based on past interactions and demographic information. This
              level of personalization increases open rates and engagement, making email marketing more effective.</p>
          </div>
        </div>
      </div>
    </section >
  );
}
