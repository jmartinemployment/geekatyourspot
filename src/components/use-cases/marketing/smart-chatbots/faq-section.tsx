import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#BF5934] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-12">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-smart-chatbot">
              What is a Smart Chatbot and How Does it Work?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">A smart chatbot is an AI-driven tool that simulates human conversation, using natural language processing to understand and respond to user queries. It works by analyzing input text, interpreting the intent, and generating a relevant response. This interaction can happen across various platforms, such as websites or messaging apps, providing users with instant assistance and information.</p>

            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-smart-chatbot-used-for">
              What is a Smart Chatbot used for?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Smart chatbots are used to enhance customer service, automate repetitive tasks, and engage users through personalized interactions. Businesses deploy these tools to handle inquiries, provide support, and even drive sales by guiding customers through purchasing processes. They can also collect user data to improve customer experiences and refine marketing strategies.</p>

            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="types-of-smart-chatbots">
              What Are The Types of Smart Chatbots?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">There are generally two types of smart chatbots: rule-based and AI-based. Rule-based chatbots follow predefined scripts and are ideal for specific tasks with limited variables. AI-based chatbots, on the other hand, use machine learning to understand context and evolve their responses over time. This makes AI-based chatbots more versatile and capable of handling complex interactions.</p>

            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-chatbots-helping-businesses">
              How Smart Chatbots Are Helping Businesses?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Smart chatbots help businesses by providing 24/7 customer support, reducing the need for human intervention, and streamlining operations. They enhance customer satisfaction by delivering quick responses and personalized service. Additionally, chatbots can identify and capture leads, helping businesses increase conversion rates and grow their customer base efficiently.</p>

            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />

            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="benefits-of-chatbot-tool">
              What Are The Benefits of Using Chatbot Tool?
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">Using a chatbot tool offers several benefits, including saving time, reducing operational costs, and improving customer engagement. Chatbots can handle multiple interactions simultaneously, ensuring that customers receive timely responses without the need for additional staff. They also provide valuable data insights that can be used to refine marketing strategies and enhance overall business performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
