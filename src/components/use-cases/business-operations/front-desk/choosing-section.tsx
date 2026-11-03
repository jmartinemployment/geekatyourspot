export default function ChoosingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">Start where your business loses the most contacts. If most new customers call you, and those calls go to voicemail while you are on a job, begin with the AI receptionist. If most of them message you on Instagram, WhatsApp, or your website, begin with the chatbot.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">If both happen every week, decide whether you want one platform or two. One platform, such as Dapta or My AI Front Desk, keeps calls and messages on the same timeline with one set of answers to maintain. Two specialist tools, such as Smith.ai on the phone and Manychat on Instagram, go deeper on each channel but leave you two systems to keep in step.</p>
      <p className="pt-3 text-base font-normal text-white shadow-text">Decide also how much a person should stay involved. Smith.ai and Tidio are built around a member of staff taking over part of the work. The others are designed to handle the whole conversation and bring a person in only when one of your rules says so.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="voice-chat-or-both" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Voice, Chat, or Both
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="voice-chat-or-both-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Voice, Chat, or Both
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
