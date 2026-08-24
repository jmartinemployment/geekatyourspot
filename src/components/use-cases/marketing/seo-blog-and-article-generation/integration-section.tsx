import Link from "next/link";

export default function IntegrationSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Many businesses struggle with creating a coherent content strategy that aligns with their overarching business goals. Without a clear strategy, content efforts can become disorganized, leading to a waste of resources and missed opportunities. Integrating AI into your content strategy can offer a structured approach, providing valuable insights and streamlining the content creation process.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        At Geek At Your Spot, we assist businesses in embedding AI into their content strategies, ensuring that every piece of content serves a purpose and contributes to broader business objectives. Here&apos;s how AI can transform your content strategy.
      </p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="aligning-content-with-business-goals">Aligning Content with Business Goals</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI tools like <Link id="tools-marketing-keyword-insights-3" href="/tools/marketing/keyword-insights" className="text-[#0B162A] hover:underline">Keyword Insights</Link> can analyze vast amounts of data to identify trends and opportunities that align with your business objectives. By understanding these insights, businesses can create content that not only attracts visitors but also drives them towards conversion.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek At Your Spot ensures that the AI tools you choose are configured to support your business goals, optimizing content for both search engines and human readers.
      </p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-driven-content-planning">Data-Driven Content Planning</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Effectively planning content requires more than intuition; it demands data-driven insights. Tools like <Link id="tools-marketing-frase-4" href="/tools/marketing/frase" className="text-[#0B162A] hover:underline">Frase</Link> provide detailed analyses of current content landscapes, helping businesses identify gaps and opportunities for new content. This ensures that your content calendar is filled with strategic, impactful topics.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Our team at Geek At Your Spot collaborates with businesses to interpret these insights, shaping a content plan that is both innovative and aligned with market demands.
      </p>
      <h4 className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="enhancing-audience-engagement">Enhancing Audience Engagement</h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Engaging content is essential for retaining your audience and encouraging interaction. AI tools like <Link id="tools-marketing-chatgpt-5" href="/tools/marketing/chatgpt" className="text-[#0B162A] hover:underline">ChatGPT</Link> can craft personalized content that speaks directly to the interests and needs of your audience, enhancing engagement and building brand loyalty.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Geek At Your Spot guides businesses in utilizing these tools to refine their messaging, ensuring that content not only reaches the audience but resonates with them effectively.
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="integrating-ai-into-your-content-strategy">Integrating AI into Your Content Strategy</h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="integrating-ai-into-your-content-strategy-desktop">Integrating AI into Your Content Strategy</h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
