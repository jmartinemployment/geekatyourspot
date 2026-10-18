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
              Can HyperWrite help manage and clear a cluttered email inbox?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              HyperWrite features an Email Responder tool built for daily email management. Users can enter a
              few words or bullet points, and the tool turns them into full, polished email replies.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the software assist users in real-time as they type out documents?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              HyperWrite offers TypeAhead, a predictive writing feature delivered through a Chrome extension.
              It suggests and completes sentences in real time inside apps like Gmail and Google Docs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What options exist for rewriting or simplifying existing business text?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Users can use the Rewrite Content tool to rephrase paragraphs while keeping the original
              meaning. For technical or complex content, the Explain Like I&#39;m Five (ELI5) AI breaks down
              information into clear, simple language.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the differences between HyperWrite&#39;s Premium and Ultra pricing plans?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The Premium Plan is $19.99 per month or $16 per month if billed annually. It includes 250 AI
              messages each month, real-time cited info, standard AI tools, and up to 3 Custom Personas. The
              Ultra Plan is $44.99 per month or $29 per month if billed annually. It offers unlimited AI
              messages, priority access to experimental agent features, and up to 10 Custom Personas.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can a small business build its own custom automated workflows using the platform?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. HyperWrite lets teams create Custom AI Tools, so business owners can build and save tools
              that match their own internal processes and standard operating procedures.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does HyperWrite natively support Microsoft Office products?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              HyperWrite works mainly through a Chrome Extension, so it runs natively in browser-based
              platforms like Google Workspace, web-based CRMs, and webmail. For traditional desktop Microsoft
              Office, native integration is not available, but it is a common request from users who want the
              same experience across platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
