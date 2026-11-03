
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business owner in Miami weighing LobbyStack is not starting from zero. Most have tried at least
        one of three approaches: live answering services, basic phone trees, or one of the closed AI
        receptionist platforms that come bundled with a virtual phone system. Each has its own strengths and
        real gaps. LobbyStack enters this field with a different model: open-source, customizable, and designed
        to let small teams control their own data and call logic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Live answering services put a human on the line for every call. This is the gold standard for empathy
        and complex situations, but the cost scales directly with call volume. Even the leanest pay-as-you-go
        plans quickly outpace what most small businesses can justify, especially in months with a spike in
        routine calls. Operators follow a script, take messages, and sometimes book appointments, but they
        cannot adapt instantly to new policies or update intake questions on the fly. Many still leave you with
        a backlog of messages to return at the end of the day. LobbyStack does not try to replace the human
        touch for sensitive or high-stakes calls. Instead, it is built to handle the routine, repetitive work:
        answering common questions, qualifying leads, and booking appointments, so your staff can focus on the
        calls that truly need them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Phone trees and basic voicemail systems are the fallback for businesses that cannot justify a full-time
        receptionist. Callers press buttons, navigate menus, and leave messages. This approach keeps costs low
        but frustrates callers who want a real answer now. It also leaves the business with the same problem as
        voicemail: missed connections and a pile of callbacks to chase. LobbyStack removes the rigid menu and
        the wait. Callers speak in their own words, get answers or book appointments in real time, and only get
        routed to a human when the rules say it is necessary.</p>
      <p className="text-base text-white shadow-text pt-3">
        Closed AI receptionist platforms, often bundled with cloud phone systems, offer a step up from
        voicemail. They answer in natural language and can capture caller details or route calls, but they come
        with their own tradeoffs. Most are proprietary: you cannot change their scripts beyond a few settings,
        you cannot see how they handle your data, and you are locked into their infrastructure. If your business
        grows or your needs change, switching platforms means starting over, retraining the AI, and sometimes
        losing access to your own call data. LobbyStack, by contrast, is open source. You can audit the call
        handling logic, change the script, and even run the system on your own servers if you want to keep all
        data in-house. This is especially critical for regulated industries or privacy-conscious teams. The
        open-source approach also means you are never stuck with a single vendor’s roadmap or pricing changes.
        You control the timing of updates, access policies, and retention windows.</p>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack’s pricing model is built for small business budgets. There is a free plan for browser-based
        testing, then paid plans start at $30 per month for 150 minutes and go up only as your usage does. There
        is no setup fee, and calls under 10 seconds do not count toward your allowance. This is a direct
        response to the runaway costs that can hit with per-minute AI or live services. If your business grows
        or you want to run LobbyStack on your own infrastructure, you can move to a self-hosted deployment with
        no additional software license fee, just your own server and provider costs. This flexibility is rare
        among AI receptionist solutions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is another place LobbyStack stands out. Many closed systems limit you to their own
        integrations or require workarounds to connect with your calendar or lead management tools. LobbyStack
        supports Google Calendar natively for booking, and its
        open&nbsp;API&nbsp;lets
        technical teams build direct integrations with other systems as needed. Businesses with more complex
        workflows or compliance requirements can configure the platform to fit, not the other way around. Where
        a live service or a closed AI platform would block you at the limits of their system, LobbyStack lets
        you own the logic and the data.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams who want to keep things simple, LobbyStack’s managed cloud hosting offers a turnkey option, no
        servers to run, just a dashboard and configuration interface. For those who need control or want to
        avoid vendor lock-in, the self-hosted option gives full autonomy. This dual-mode setup is not just a
        technical difference; it changes the long-term cost and risk for a business. You can start on the cloud,
        then move to self-hosting when your needs change, without retraining staff or losing your call history.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, LobbyStack is not a one-size-fits-all solution. It is designed for small businesses that want
        to automate the routine, keep costs predictable, and never lose control of their own data or call logic.
        Live services still have a place for complex or sensitive calls. Phone trees and voicemail are cheap but
        costly in lost leads. Closed AI platforms offer some automation but at the price of flexibility and data
        control. LobbyStack sits in the middle: more adaptable than voicemail or phone trees, more transparent
        and controllable than closed AI, and far less expensive than a live operator for routine work.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small team in Miami-Dade, Broward, or West Palm Beach who has seen the pain of missed calls, LobbyStack is the
        tool that lets you keep your options open, your data in your hands, and your costs under control. That
        is the real difference when you look past the feature lists and focus on what will work for your
        business as it grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lobbystack-compares-to-live-answering-services-phone-trees-and-other-ai-receptionists" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LobbyStack Compares to Live Answering Services, Phone Trees, and Other AI Receptionists
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-lobbystack-compares-to-live-answering-services-phone-trees-and-other-ai-receptionists-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LobbyStack Compares to Live Answering Services, Phone Trees, and Other AI Receptionists
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
