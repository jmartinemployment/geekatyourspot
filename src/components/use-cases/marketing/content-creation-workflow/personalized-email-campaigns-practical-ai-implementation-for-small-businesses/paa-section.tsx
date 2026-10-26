export default function PaaSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How will this help me generate more inquiries, appointments, or sales?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Personalized email campaigns help you send relevant messages and follow up with leads consistently, so you
              do not have to manage every contact by hand. The main goal is to move interested people closer to actions
              like replying, booking an appointment, or making a purchase. Actual results depend on your audience, your
              offer, your data, and how well you run the campaigns. AI cannot guarantee sales.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does setup cost, and what are the ongoing fees?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              A clear quote should break out implementation, software subscriptions, and ongoing campaign management.
              Software costs will vary based on the number of contacts, email volume, and which features you need. The
              amount of integration and custom content you want will affect the setup work. Pricing is only accurate after
              reviewing your current systems and needs; a one-size-fits-all estimate does not work.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What exactly gets personalized?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Personalization may cover subject lines, message content, recommendations, and timing, depending on your
              chosen platform and what data you have. It can go further than just using someone’s first name, such as
              showing products or services based on their interests or past actions with your business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I review and approve emails before they go out?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Approval can be built into your process. You can review templates and the different email sequences before
              anything is activated. You can also set rules for which changes need a new approval. The exact steps will
              depend on the tools you use.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will this work with my existing CRM, website forms, and email platform?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              It might, but you need to check if your systems can connect. Many email tools offer integrations, but the
              key is whether your specific setup can send and receive the right data and trigger the needed actions. Not
              every integration works with every software plan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
