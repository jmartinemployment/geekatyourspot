export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dext is a robust platform designed to streamline bookkeeping processes through automation. It offers
        a range of features that can significantly benefit small to medium-sized businesses looking to
        implement AI in their accounting practices. One of the key aspects to consider when evaluating Dext
        is its capacity to integrate with over 36 accounting solutions. This broad compatibility ensures that
        it can fit seamlessly into existing workflows without the need for overhauling your current
        systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for Dext is not explicitly detailed in the available data, but what stands out is its focus
        on providing value through automation rather than merely reducing costs. The platform emphasizes
        efficiency gains by automating data capture and processing, which reduces manual handling and
        improves consistency. This approach not only saves time but also enhances accuracy, offering a
        foundation for scalable practices.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering Dext, it&#39;s important to weigh its benefits against other automation
        tools in the market. Dext excels by offering features like AI Assist, which learns from user
        decisions and preferences to automate repetitive tasks. This capability allows businesses to maintain
        control over their processes while benefiting from automation. Additionally, the platform provides
        real-time visibility into financial data, which is crucial for making informed decisions and
        improving client service.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Automated data capture is the foundation of a scalable practice because it reduces manual
        handling, improves consistency, and gives firms real-time visibility.&quot;&nbsp;
        <a id="tools-accounting-dext-evaluating-source"
          href="https://dext.com/us/blog/single/ai-and-automation-in-accounting-how-to-build-a-smarter-scalable-practice-with-dext"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Dext
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-dext-for-your-business-needs">
                Evaluating Dext for Your Business Needs
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-dext-for-your-business-needs">
                Evaluating Dext for Your Business Needs
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
