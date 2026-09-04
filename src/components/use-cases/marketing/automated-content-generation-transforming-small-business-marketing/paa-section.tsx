import Link from "next/link";

export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#023059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask&nbsp;<span className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">?</span>
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-to-use-ai-for-content-generation">
              How to use AI for content generation?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI can automate content generation by using advanced algorithms to create text, images, and videos. Tools like{" "}
              <Link id="tools-marketing-writesonic-paa-1" href="/tools/marketing/writesonic" className="text-[#C83803] hover:underline">
                Writesonic
              </Link>{" "}
              and{" "}
              <Link id="tools-marketing-copyai-paa-1" href="/tools/marketing/copyai" className="text-[#C83803] hover:underline">
                Copy.ai
              </Link>{" "}
              help small businesses by producing marketing materials quickly and accurately. This saves time, reduces costs, and allows teams to focus on strategy rather than manual content creation.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-ai-is-best-for-content-creation">
              What AI is best for content creation?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              The best AI for content creation depends on your specific needs.{" "}
              <Link id="tools-marketing-jasper-ai-paa-1" href="/tools/marketing/jasper-ai" className="text-[#C83803] hover:underline">
                Jasper
              </Link>{" "}
              is known for its ability to create engaging copy, while{" "}
              <Link id="tools-marketing-synthesia-paa-1" href="/tools/marketing/synthesia" className="text-[#C83803] hover:underline">
                Synthesia
              </Link>{" "}
              excels in generating video content. Each tool offers unique features that cater to different types of content, making them versatile options for businesses looking to enhance their marketing efforts.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="can-ai-be-a-content-generator">
              Can AI be a content generator?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Yes, AI can be a powerful content generator. It uses machine learning to analyze data and produce relevant content quickly. Tools like{" "}
              <Link id="tools-marketing-pictory-paa-1" href="/tools/marketing/pictory" className="text-[#C83803] hover:underline">
                Pictory
              </Link>{" "}
              help create video content from scripts or articles, while platforms like{" "}
              <Link id="tools-marketing-copyai-paa-2" href="/tools/marketing/copyai" className="text-[#C83803] hover:underline">
                Copy.ai
              </Link>{" "}
              automate text creation, helping businesses scale their content marketing efforts efficiently.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-the-30-rule-in-ai">
              What is the 30% rule in AI?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              The 30% rule in AI refers to the idea that AI can automate roughly 30% of tasks in many job roles, freeing up time for more strategic activities. This principle applies to content generation, where AI tools can handle repetitive tasks, allowing teams to focus on creative and strategic planning.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="easiest-way-to-automate-social-media-content-creation-with-ai">
              Easiest Way to Automate Social Media Content Creation with AI?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Automating social media content is straightforward with AI tools like{" "}
              <Link id="tools-marketing-writesonic-paa-2" href="/tools/marketing/writesonic" className="text-[#C83803] hover:underline">
                Writesonic
              </Link>
              . These platforms can generate posts, captions, and hashtags tailored to your brand voice. By automating these tasks, businesses can maintain a consistent online presence without spending excessive time on manual content creation, ultimately boosting engagement and reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
