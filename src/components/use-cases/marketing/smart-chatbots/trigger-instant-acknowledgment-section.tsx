import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TriggerInstantAcknowledgmentSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">In fast-paced marketing environments, a delayed response can mean losing a potential customer to a competitor. This makes instant acknowledgment crucial when leads interact with your brand. Without quick confirmation, prospects might feel ignored, leading to dissatisfaction and lost opportunities. By implementing smart <GlossaryLink slug="chatbot">chatbots</GlossaryLink>, businesses can automate immediate responses, ensuring every inquiry is acknowledged promptly.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text"><Link href="/tools/marketing/many-chat" className="text-[#C83803] hover:underline">ManyChat</Link> offers a solution by turning comments into conversations that sell. With its ability to send automatic replies, your business can instantly acknowledge every interaction, whether it's a query about product availability or shipping details. This rapid engagement not only keeps the conversation alive but also sets a positive tone for further interaction.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Similarly, <Link href="/tools/marketing/getchipbot" className="text-[#C83803] hover:underline">Get Chip Bot</Link> ensures that no visitor leaves your website without a response. By acknowledging inquiries instantly, it keeps potential customers engaged, thus reducing the <GlossaryLink slug="bounce-rate">bounce rate</GlossaryLink> and increasing the likelihood of conversion. Imagine a scenario where a visitor asks about a product feature on your site; an immediate acknowledgment assures them that their interest is valued, enhancing their experience with your brand.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="building-trust">Building Trust with Instant Replies</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Trust is a critical component of customer relationships. When a business acknowledges a customer's inquiry immediately, it demonstrates reliability and respect for the customer's time. This interaction creates a positive initial impression, which is crucial for building a strong foundation of trust.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="operational-efficiency">Operational Efficiency</h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">Automating instant acknowledgments with chatbots also brings operational efficiency. By eliminating the need for manual responses, businesses can handle a higher volume of inquiries without additional staffing costs. This automation not only saves time but also ensures that no lead falls through the cracks.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="trigger-instant-acknowledgment">
                Trigger an Instant Acknowledgment
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="trigger-instant-acknowledgment">
                Trigger an Instant Acknowledgment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
