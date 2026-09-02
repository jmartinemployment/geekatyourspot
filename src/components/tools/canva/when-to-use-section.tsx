import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Canva is best suited for businesses that need to produce a high volume of visual content quickly and efficiently.
                It is particularly valuable for teams with limited design expertise, as its user-friendly interface and extensive
                template library make it easy to create professional-quality designs without specialized skills.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Marketing Teams: Canva is ideal for marketing teams that need to produce consistent and on-brand visuals for
                  campaigns across multiple channels.</li>
                <li>Small Businesses: For small businesses with limited resources, Canva offers an affordable solution for creating
                  high-quality marketing materials without the need for a dedicated design team.</li>
                <li>Social Media Managers: Canva&#39;s <GlossaryLink slug="api-integration">integration</GlossaryLink> with social media platforms makes it a valuable tool for social
                  media managers looking to streamline the <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> and posting process.</li>
                <li>Educational Institutions: Schools and universities can use Canva to create engaging educational materials and
                  promotional content with ease.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By choosing Canva, businesses can enhance their content creation capabilities, ensuring that their visual
                communications are both effective and efficient. Whether for marketing, education, or social media management, Canva
                provides the tools necessary to produce high-quality designs that resonate with audiences.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Canva is best suited for businesses that need to produce a high volume of visual content quickly and efficiently.
                It is particularly valuable for teams with limited design expertise, as its user-friendly interface and extensive
                template library make it easy to create professional-quality designs without specialized skills.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Marketing Teams: Canva is ideal for marketing teams that need to produce consistent and on-brand visuals for
                  campaigns across multiple channels.</li>
                <li>Small Businesses: For small businesses with limited resources, Canva offers an affordable solution for creating
                  high-quality marketing materials without the need for a dedicated design team.</li>
                <li>Social Media Managers: Canva&#39;s integration with social media platforms makes it a valuable tool for social
                  media managers looking to streamline the content creation and posting process.</li>
                <li>Educational Institutions: Schools and universities can use Canva to create engaging educational materials and
                  promotional content with ease.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">By choosing Canva, businesses can enhance their content creation capabilities, ensuring that their visual
                communications are both effective and efficient. Whether for marketing, education, or social media management, Canva
                provides the tools necessary to produce high-quality designs that resonate with audiences.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
