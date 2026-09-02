import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CaptureOnEveryChannelSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">In today's fast-paced digital landscape, missing out on potential leads due to limited engagement channels can significantly hinder a business's growth. Customers expect to reach businesses through their preferred platforms, whether it's social media, chat apps, or direct website interactions. Failing to meet them where they are often leads to missed opportunities and decreased customer satisfaction. To remain competitive, businesses need to capture leads across multiple channels efficiently and effectively.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Smart <GlossaryLink slug="chatbot">chatbots</GlossaryLink> offer a solution by enabling businesses to engage with customers on every major platform seamlessly. <Link href="/tools/marketing/bot-penguin" className="text-[#C83803] hover:underline">BotPenguin</Link>, for instance, allows companies to deploy no-code AI chatbots on websites, WhatsApp, Instagram, Facebook, and Telegram. This ensures that every interaction is captured, regardless of where it starts. By using a single platform to manage multiple channels, businesses can maintain consistent communication without the need for extensive manual oversight.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="optimizing-multi-channel">Optimizing <GlossaryLink slug="multi-channel-support" className="text-white hover:underline">Multi-Channel Engagement</GlossaryLink></h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Achieving effective multi-channel engagement requires more than just presence; it involves optimizing each interaction for the platform it occurs on. Tools like BotPenguin enable businesses to automate and customize interactions, ensuring they meet customer expectations on each channel.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="seamless-crm-integration">Seamless <GlossaryLink slug="crm" className="text-white hover:underline">CRM</GlossaryLink> Integration</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Seamless integration with CRM systems ensures that all captured leads are funneled into the sales pipeline without manual intervention. This not only saves time but also reduces the risk of errors in lead management.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="24-7-availability">24/7 Availability</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text"><GlossaryLink slug="chatbot">Chatbots</GlossaryLink> ensure that businesses are available to customers around the clock, providing immediate assistance and information. This constant availability can significantly enhance customer satisfaction and trust.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="capture-on-every-channel">
                Capture on Every Channel
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="capture-on-every-channel">
                Capture on Every Channel
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
