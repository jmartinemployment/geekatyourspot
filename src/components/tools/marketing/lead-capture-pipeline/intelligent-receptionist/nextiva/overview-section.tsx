import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small HVAC business in West Palm Beach juggles three separate phone lines, a website chat, and a
        handful of text messages every hour. One technician fields calls while checking a calendar; another
        tries to answer a chat on their phone between service visits. By noon, five potential customers have
        hung up after waiting too long. Two chat requests go unanswered. The team spends the afternoon piecing
        together scraps of conversations in different apps, never quite sure if a lead got a follow-up or just
        disappeared. Each missed message is a lost job, a frustrated customer, and another day of scrambling to
        keep up.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is what fractured communication looks like for small businesses across Miami-Dade, Broward, and
        Palm Beach counties. Calls, texts, and web chats sit in disconnected silos, so no one has the full
        picture. Staff are forced to monitor multiple platforms at once, which means leads slip through the
        cracks when the shop is busy, after hours, or someone is out sick. The cost is real: lost appointments,
        unhappy customers, and revenue that never hits the books. For the average local service provider,
        missing even a handful of calls a week can mean hundreds or thousands of dollars gone each month, money
        that should have been on the schedule.</p>
      <p className="text-md text-white shadow-text pt-3">
        An&nbsp;<Link id={`tools-marketing-intelligent-receptionist-nextiva-overview-intelligent-receptionist${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses" className="text-[#C83803] hover:underline">Intelligent Receptionist</Link>&nbsp;solves this problem by unifying all those channels, phone, SMS, web chat,
        into one workspace. It never misses a call, responds instantly to every chat, and keeps a complete
        record of the conversation, so your staff don’t have to play detective or lose focus jumping between
        apps. This approach means every customer gets a real answer, every lead is logged, and no message is
        left behind. By moving to a single, AI-powered platform, small businesses save hours each week, cut down
        on errors, and capture the revenue that used to leak away with every missed call or forgotten chat. For
        teams stretched thin, it is the difference between constant firefighting and steady, predictable growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
