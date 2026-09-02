import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#BF5934] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask&nbsp;<span className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">?</span></h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-to-automate-content-creation">How to Automate Content Creation?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Automating content creation involves using AI tools that can generate or transform content based on specific inputs. These tools can analyze existing materials and create new formats such as blog posts, social media updates, or newsletters. By setting predefined rules and templates, businesses can ensure consistent quality and style. This process saves time and reduces the need for manual content generation, allowing teams to focus on strategic tasks.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-are-some-effective-ai-tools-for-repurposing-content">What are some effective AI tools for repurposing content?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Effective AI tools for repurposing content include platforms like Copy.ai, Jasper, and Lumen5. These tools help transform existing content into different formats, such as turning a blog post into a video or social media snippets. They use <GlossaryLink slug="natural-language-processing">natural language processing</GlossaryLink> and <GlossaryLink slug="machine-learning">machine learning</GlossaryLink> to understand the essence of the content, making it easy to adapt without losing the original message. These tools not only save time but also enhance the reach and impact of the content by tailoring it for various platforms.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-are-some-easy-repurposing-ideas">What are some easy repurposing ideas?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Easy repurposing ideas include converting a webinar into a blog post, breaking down an article into social media posts, or creating an infographic from a report. These methods leverage existing content to reach new audiences or provide the same information in a more digestible format. By using AI tools, these transformations can be done swiftly, ensuring that the core message is preserved while adapting the style to fit different channels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-can-i-repurpose-video-content">How can I repurpose video content?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Video content can be repurposed by extracting key segments to create short clips for social media or turning transcripts into blog posts or articles. AI tools can automate this process by identifying highlights and generating text formats. Additionally, videos can be transformed into podcasts by extracting audio, expanding the content&#39;s reach. This approach maximizes the investment in video production by extending its use across multiple platforms.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-are-some-examples-of-repurposing">What are some examples of repurposing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Examples of repurposing include turning a research paper into a series of blog posts, creating an ebook from a collection of articles, or using customer testimonials in a video format. These strategies help in reaching different audience segments and keeping content fresh. By leveraging AI, businesses can efficiently transform content to suit various mediums, ensuring that it remains relevant and engaging without starting from scratch.</p>
          </div>
        </div>
      </div>
    </section >
  );
}
