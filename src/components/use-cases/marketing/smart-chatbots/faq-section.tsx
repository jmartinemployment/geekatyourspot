import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#BF5934] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-9">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="faq">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-chatbot">
              What is Chatbot Marketing?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Chatbot marketing involves using automated chat systems to communicate with customers and prospects. These chatbots can answer questions, provide recommendations, and guide users through the sales funnel. By engaging users in real-time, businesses can enhance customer experience and boost conversion rates.</p>

            <hr className="border-t-1 border-[#C83803] my-6 w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chatbots-used">
              How are chatbots used in marketing?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Chatbots in marketing are used to engage with customers 24/7, answer frequently asked questions, and provide personalized product recommendations. They can also gather customer data to improve marketing strategies and automate tasks such as booking appointments or processing orders, ultimately saving time and reducing operational costs.</p>

            <hr className="border-t-1 border-[#C83803] my-6 w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="ai-vs-chatbots">
              What is the difference between AI and chatbots?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">AI, or artificial intelligence, is a broad field that includes machine learning, natural language processing, and other technologies that enable machines to perform tasks that typically require human intelligence. Chatbots are specific applications of AI designed to simulate conversation with users. While all chatbots use some form of AI, not all AI applications are chatbots.</p>

            <hr className="border-t-1 border-[#C83803] my-6 w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="example-chatbot">
              What is an example of a chatbot?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">An example of a chatbot is the customer service bot used by many online retailers. These bots can help answer questions about orders, provide product recommendations, and assist with returns. Another example is a chatbot on a travel website that helps users find flights, book hotels, and receive travel tips.</p>

            <hr className="border-t-1 border-[#C83803] my-6 w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="why-use-chatbot">
              Why would someone use a chatbot?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Someone might use a chatbot to provide instant customer support, automate repetitive tasks, and offer personalized interactions without increasing staff workload. Chatbots help businesses operate more efficiently by handling multiple inquiries simultaneously, improving response times, and enhancing overall customer satisfaction.</p>

            <hr className="border-t-1 border-[#C83803] my-6 w-full" />

            <p className="pt-3 text-md font-normal text-white shadow-text">
              For a deeper dive into how smart chatbots can transform your marketing strategy,
              <Link
                href="/blog/marketing/how-smart-chatbots-revolutionize-b2b-marketing"
                className="text-white font-bold hover:underline ml-1"
              >
                read our comprehensive guide: "How Smart Chatbots Revolutionize B2B Marketing"
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
