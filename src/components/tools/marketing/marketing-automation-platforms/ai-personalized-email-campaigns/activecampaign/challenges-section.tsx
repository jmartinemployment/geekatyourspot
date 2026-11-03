export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual personalized email campaigns drain time, cause missed leads, and frustrate small teams. When sales
        data, marketing messages, and customer records are scattered, it is nearly impossible to follow up quickly
        or send relevant messages at the right moment. The cost is not just in hours lost to repetitive work, it is
        in opportunities that slip away because no one had the full picture or the time to act.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida often face this problem every week. The team spends hours exporting lists,
        reviewing spreadsheets, and writing out emails one by one. Every handoff between sales and marketing is a
        chance for a lead to be forgotten or for the wrong message to go out. A sales inquiry comes in through a
        form, but if no one checks the inbox right away, that prospect may wait days for a reply, or never hear back
        at all. When someone finally does respond, the message is generic, because the team does not have the right
        details on what the prospect wants or has already done.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain grows as the business gets busier. As more leads come in, staff cannot tell who is serious and who
        is just browsing. Without a reliable way to score or segment contacts, everyone gets the same follow-up,
        even if their needs are completely different. The team spends time chasing low-value leads and misses the
        ones who are actually ready to buy. High-intent prospects may get buried under a pile of less urgent tasks.
        When someone takes a meaningful action, like clicking a quote request or downloading a resource, the system
        does not flag it, so the follow-up is either too late or too broad to matter.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual processes also make it easy to forget important steps. Sales reps may send a proposal, but if they do
        not set a calendar reminder or keep a separate checklist, the follow-up might never happen. Each missed
        email is a lost chance to move a deal forward. Even when someone tries to keep up, the sheer volume of tasks
        leads to mistakes: the wrong email goes to the wrong person, or a customer gets a reminder for something
        they already bought. These errors create frustration for both the team and the customer, making the business
        look less professional and less responsive.</p>
      <p className="text-base text-white shadow-text pt-3">
        Disconnected systems are another source of waste. When marketing activity is not tied to sales progress, it
        is hard to know what is actually working. The team might run a campaign, but if the results are not linked
        back to deals closed or appointments booked, there is no way to tell which messages drive real revenue.
        Reporting becomes a manual patchwork of exported data and guesswork, which delays decisions and hides which
        efforts are worth repeating. Instead of acting on real insights, the team is stuck in a cycle of trial and
        error, always a step behind what the data could have shown.</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line is that manual personalization, slow follow-up, and siloed data all add up to lost sales and
        wasted effort. For a small team, every missed lead and every hour spent on repetitive tasks is a direct hit
        to growth. The business ends up working harder for fewer results, while competitors who automate and connect
        their systems move faster and close more deals. Without a change, these problems only compound as the
        customer base grows and expectations for quick, relevant communication rise.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
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
