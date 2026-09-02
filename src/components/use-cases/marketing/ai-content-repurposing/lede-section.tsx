import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="maximize-your-contents-lifespan-with-ai">
                Maximize Your Content&#39;s Lifespan with AI
              </h2>
            </div>
            <div className="col-span-12">
              <p className="pt-3 text-md font-normal text-white shadow-text">
                Imagine spending hours crafting the perfect blog post, only to watch it gather dust after a few weeks.
                This is a common scene for many small businesses. The initial rush of <GlossaryLink slug="engagement-rate">engagement</GlossaryLink> fades, and the
                content&#39;s potential remains untapped. You&#39;re left wondering if there&#39;s a more efficient way to keep
                your content alive and relevant.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> changes this narrative by breathing new life into your existing assets. Tools
                like&nbsp;
                <Link id="tools-marketing-jasper-ai" href="/tools/marketing/jasper-ai" className="text-[#C83803] hover:underline">
                  Jasper AI
                </Link>&nbsp;and&nbsp;
                <Link id="tools-marketing-copyai" href="/tools/marketing/copyai" className="text-[#C83803] hover:underline">
                  Copy.ai
                </Link>&nbsp;can transform a single piece of content into multiple formats, extending its reach and
                impact. Whether it&#39;s turning a blog post into a series of social media updates or converting a
                podcast into a blog article, AI helps you maximize your content&#39;s lifespan without starting from
                scratch every time. This approach not only saves time but also reduces costs and increases audience
                engagement.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                In today&#39;s fast-paced digital world, the lifecycle of content is often short-lived. Businesses spend
                significant resources creating content that quickly loses its shine. The traditional approach of
                constantly producing new material is not only exhausting but also expensive. Errors and
                inconsistencies can slip through, and the risk of non-compliance with brand guidelines increases as
                the workload grows.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                AI-assisted content repurposing offers a solution by optimizing existing resources. With tools
                like&nbsp;
                <Link id="tools-marketing-contentstudio" href="/tools/marketing/contentstudio" className="text-[#C83803] hover:underline">
                  ContentStudio
                </Link>&nbsp;and&nbsp;
                <Link id="tools-marketing-zapier" href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">
                  Zapier
                </Link>, businesses can automate the transformation of content into various formats and channels,
                ensuring consistency and alignment with brand standards. This not only saves time but also
                significantly reduces costs associated with manual content creation and management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="maximize-your-contents-lifespan-with-ai">
                Maximize Your Content&#39;s Lifespan with AI
              </h2>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                Imagine spending hours crafting the perfect blog post, only to watch it gather dust after a few weeks.
                This is a common scene for many small businesses. The initial rush of <GlossaryLink slug="engagement-rate">engagement</GlossaryLink> fades, and the
                content&#39;s potential remains untapped. You&#39;re left wondering if there&#39;s a more efficient way to keep
                your content alive and relevant.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> changes this narrative by breathing new life into your existing assets. Tools
                like&nbsp;
                <Link id="tools-marketing-jasper-ai-2" href="/tools/marketing/jasper-ai" className="text-[#C83803] hover:underline">
                  Jasper AI
                </Link>&nbsp;and&nbsp;
                <Link id="tools-marketing-copyai-2" href="/tools/marketing/copyai" className="text-[#C83803] hover:underline">
                  Copy.ai
                </Link>&nbsp;can transform a single piece of content into multiple formats, extending its reach and
                impact. Whether it&#39;s turning a blog post into a series of social media updates or converting a
                podcast into a blog article, AI helps you maximize your content&#39;s lifespan without starting from
                scratch every time. This approach not only saves time but also reduces costs and increases audience
                engagement.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                In today&#39;s fast-paced digital world, the lifecycle of content is often short-lived. Businesses spend
                significant resources creating content that quickly loses its shine. The traditional approach of
                constantly producing new material is not only exhausting but also expensive. Errors and
                inconsistencies can slip through, and the risk of non-compliance with brand guidelines increases as
                the workload grows.</p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                AI-assisted content repurposing offers a solution by optimizing existing resources. With tools
                like&nbsp;
                <Link id="tools-marketing-contentstudio-2" href="/tools/marketing/contentstudio" className="text-[#C83803] hover:underline">
                  ContentStudio
                </Link>&nbsp;and&nbsp;
                <Link id="tools-marketing-zapier-2" href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">
                  Zapier
                </Link>, businesses can automate the transformation of content into various formats and channels,
                ensuring consistency and alignment with brand standards. This not only saves time but also
                significantly reduces costs associated with manual content creation and management.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
