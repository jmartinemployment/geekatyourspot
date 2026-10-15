export default function PAASection() {
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
              What is the actual difference between an AI Receptionist and a traditional Auto-Attendant (IVR)?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Traditional auto-attendants are fixed phone menus that make callers press numbers to get routed.
              They cannot answer questions or handle anything outside their script. An Intelligent AI
              Receptionist uses natural language, so callers just speak normally. The AI understands the
              request, checks a custom knowledge base, answers questions right away, and can update calendars or
              CRMs during the call.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can an AI receptionist actually write data and book appointments on my existing calendar?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Leading AI receptionists connect directly with Google Calendar, Outlook, Calendly, and many
              industry CRMs. The AI checks your real-time availability, offers callers open times, collects
              their details, and books the appointment on your calendar automatically, no human steps needed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens when a call genuinely needs a human, and how fast does the handoff happen?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The AI system includes a built-in escalation process. You or your consultant can set rules for
              when a human needs to step in, such as if the caller is upset, asks for a manager, or uses a key
              emergency word. When this happens, the platform either transfers the call live or sends you an
              instant SMS with a summary, so you can pick up right where the AI left off.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need to buy new hardware, install new phone lines, or switch my business phone number?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No extra equipment or phone lines are needed. The setup uses cloud-based call forwarding. You keep
              your current business number. When your line is busy, not answered after a few rings, or
              off-hours, calls are automatically routed to the AI receptionist using a secure background number.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
