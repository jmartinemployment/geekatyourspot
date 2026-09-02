import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">In the fast-paced world of digital marketing, the biggest challenge many businesses face is the lag between <GlossaryLink slug="lead-generation">lead generation</GlossaryLink> and lead engagement. Delays in responding to potential customers can lead to lost opportunities, decreased conversions, and ultimately, lower sales. With customers expecting rapid responses, businesses that fail to engage leads quickly risk falling behind.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Smart <GlossaryLink slug="chatbot">chatbots</GlossaryLink> for marketing offer a solution by automating initial interactions, ensuring that leads are acknowledged and engaged immediately. This can dramatically reduce the gap between lead capture and engagement, which is crucial for maintaining interest and increasing conversion rates. Companies like <Link href="/tools/marketing/bot-penguin" className="text-[#C83803] hover:underline">BotPenguin</Link> provide no-code <GlossaryLink slug="ai-chatbots">AI chatbot</GlossaryLink> solutions that work across various platforms such as <GlossaryLink slug="whatsapp-automation">WhatsApp</GlossaryLink>, Instagram, and Facebook, making it easy for businesses to connect with potential customers at any time, without manual intervention.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="challenges-delayed-engagement">Challenges of Delayed Engagement</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">When a prospective client shows interest in a product or service, the speed at which a business responds can make the difference between closing a deal or losing out to a competitor. Delayed engagement often results in leads growing cold, as potential customers may lose interest or opt for a competitor who responded more quickly. This is particularly challenging for small businesses that might not have dedicated sales teams monitoring leads around the clock.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Lost sales opportunities due to slow response times.</li>
        <li>Increased risk of leads choosing competitors.</li>
        <li>Diminished customer satisfaction from delayed interactions.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-core-problem">
                The Core Problem: <GlossaryLink slug="speed-to-lead" className="text-white hover:underline">Speed to Lead</GlossaryLink>
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-core-problem">
                The Core Problem: <GlossaryLink slug="speed-to-lead" className="text-white hover:underline">Speed to Lead</GlossaryLink>
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
