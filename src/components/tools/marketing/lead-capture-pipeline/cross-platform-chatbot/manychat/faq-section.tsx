export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will using Manychat get my business account banned or flagged by Meta?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Manychat is an official Meta Business Partner and uses Meta’s official Graph APIs. This
              means it is fully compliant with the terms of service for Instagram, Facebook Messenger, and
              WhatsApp. Unlike unauthorized tools, it will not hurt your organic reach or risk your account
              being suspended.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need a personal account or a business account to use this?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Manychat requires an Instagram Business or Creator account, a Facebook Business Page, or a
              WhatsApp Business account. It cannot be used with personal profiles or private Facebook Groups
              because Meta only allows messaging automation for commercial entities.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Manychat intelligently answer complex customer questions without rigid keywords?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Manychat uses integrated Intent Recognition and native AI Steps. It can understand a
              customer’s intent, not just exact keywords. For example, if someone asks about shipping costs or
              free delivery to Miami, Manychat recognizes the intent and responds with the right answer
              automatically.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if a customer wants to speak to a real human?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The automation pauses right away and hands the conversation to the Live Chat inbox. You can set
              it up so that certain questions or a customer clicking an &#39;Agent&#39; button will send the
              chat to a live team member through the Manychat Help Dashboard. Your team can also get
              notifications on their smartphones using the Manychat mobile app.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Manychat link directly to my accounting software (QuickBooks Online, Xero, etc.)?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Manychat connects through middleware tools like Zapier or Make, and also supports native
              webhooks. While it does not have a direct button for QuickBooks, it lets you capture customer
              details in a chat flow and push that data to integrations like Google Sheets. You can then
              trigger a workflow to create a client profile or estimate in your accounting system
              automatically.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can customers make purchases directly inside the chat window?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Manychat supports buy buttons with secure payment processors. On channels like Facebook
              Messenger, you can connect Stripe or PayPal Business accounts to message blocks. This lets your
              business process payments securely in the chat flow, while capturing customer data and
              generating transactions at the same time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is Manychat priced, and what happens if I get a sudden spike in traffic?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Pricing is based on the number of Active Contacts in your database. Plans start with a baseline
              subscription. If your business gets a viral spike or seasonal growth, Manychat does not shut
              down. It scales automatically and applies small overage fees for extra active contacts during
              that billing cycle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
