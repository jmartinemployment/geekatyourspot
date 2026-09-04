import Link from "next/link";

export default function LedeSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        As a small business owner, you&apos;ve likely faced the frustrating challenge of <strong>inconsistent marketing output</strong>. It&apos;s a common problem: one month, your content is engaging and effective; the next, it&apos;s sparse and off-message. This inconsistency isn&apos;t just annoying; it can cost you potential customers and revenue. The root causes? Limited resources, time constraints, and the ever-changing demands of content creation.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        <strong>Automated content generation</strong> offers a way out of this cycle. By leveraging AI-driven tools, you can streamline content creation, ensuring that your marketing remains consistent, relevant, and engaging. Imagine having a reliable system that helps you produce quality content without the usual overhead. Tools like{" "}
        <Link id="tools-marketing-writesonic" href="/tools/marketing/writesonic" className="text-[#C83803] hover:underline">
          Writesonic
        </Link>{" "}
        and{" "}
        <Link id="tools-marketing-jasper-ai" href="/tools/marketing/jasper-ai" className="text-[#C83803] hover:underline">
          Jasper
        </Link>{" "}
        can transform how you approach marketing, saving you time and reducing errors. These platforms are designed to help small businesses like yours maintain a steady flow of content, which can lead to more consistent engagement and better sales outcomes.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-core-problem-inconsistent-marketing-output">
                The Core Problem: Inconsistent Marketing Output
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-core-problem-inconsistent-marketing-output-desktop">
                The Core Problem: Inconsistent Marketing Output
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
