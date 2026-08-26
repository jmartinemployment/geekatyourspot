export default function LedeSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Imagine spending countless hours manually sifting through customer inquiries, answering repetitive questions, and missing out on potential sales due to delayed responses. This is the reality for small businesses struggling with traditional customer service models. The result? Lost opportunities, frustrated customers, and overwhelmed staff.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Enter the world of smart chatbots. These AI-powered assistants are revolutionizing how businesses interact with their customers, providing instant responses and personalized experiences. Tools like ChatGPT and Claude are at the forefront of this shift, enabling companies to automate customer interactions without compromising on quality.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">By leveraging smart chatbots, businesses can reduce response times, cut down on operational costs, and ultimately increase sales. These tools are not just about handling queries; they integrate seamlessly into your marketing strategy, enhancing lead capture and optimizing ad spend.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">For many businesses in Palm Beach and Broward counties, marketing is a time-consuming endeavor, often plagued with inefficiencies and missed opportunities. By automating routine tasks and providing quick, accurate responses, chatbots can significantly streamline marketing operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="lede">
                Transforming Marketing with Smart Chatbots
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="lede">
                Transforming Marketing with Smart Chatbots
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
