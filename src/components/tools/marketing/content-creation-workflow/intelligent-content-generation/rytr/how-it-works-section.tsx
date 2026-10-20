export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rytr takes the heavy lifting out of content creation by guiding users through a simple, repeatable
        sequence. At the core, Rytr is a template-driven platform. It offers more than forty pre-built use
        cases, each one tailored to a specific kind of content small businesses actually need. These include
        Google Business Profile descriptions, Instagram captions, product blurbs, follow-up emails, and more.
        The process is designed for speed and consistency, not for overwhelming you with options you’ll never
        use.</p>
      <p className="text-md text-white shadow-text pt-3">
        The mechanics start with picking a use case. If you need a batch of social captions, you select the
        Social Media Caption Generator. For a product description, you switch to the Product Description
        Generator. Each use case is tuned to the format and expectations of its channel, so you’re not
        wrestling with a blank document or trying to guess what works on Instagram versus LinkedIn.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you select the use case, Rytr asks for simple inputs: a phrase, product name, or a few key
        details. There’s no need to write paragraphs or fill in complex forms. The system then lets you choose
        the language, Rytr supports over thirty, including Spanish and Haitian Creole, which are critical for
        reaching the full South Florida market. Next, you pick a tone. Rytr offers more than twenty preset
        tones (from professional to playful), and you can tweak or create your own to match your business’s
        voice.</p>
      <p className="text-md text-white shadow-text pt-3">
        With inputs set, you hit the button and Rytr generates content instantly. For a 50-word Instagram
        caption, you can get ten variations in under ten seconds. For a product description, Rytr returns a
        set of options that highlight features and benefits, ready to copy or edit. You can keep refining,
        adjusting tone, length, or input, until the result fits your needs. There’s no penalty for trying out
        options, and no waiting for a human writer to send a draft.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s approach solves the “blank page” problem outright. Instead of spending hours staring at a
        screen or defaulting to generic, forgettable copy, you move from idea to publishable content in
        minutes. This isn’t just about speed. The system keeps your messaging consistent across channels, and
        it makes it easy to adapt a single idea for multiple uses. The same product description can be tuned
        for formal, casual, or playful tones, so your LinkedIn post, Facebook ad, and website blurb all match
        the audience and purpose.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is another built-in advantage. Rytr can generate a month’s worth of social posts in a
        single session. You pick the use case, set your parameters, and let the tool output variations for
        each day or campaign. This is especially useful for seasonal or local promotions, where being late
        means missing out. With Rytr, you can create, review, and queue up content for events like Black
        Friday or Miami Art Basel long before the date arrives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are straightforward. Rytr’s outputs can be reviewed, edited, and approved
        in-platform before publishing. The process is designed for lean teams, no endless back-and-forth or
        complicated review chains. For teams that need a second set of eyes, outputs can be shared and
        commented on, but the main point is to keep things moving. You don’t need a dedicated content manager
        to keep the wheels turning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Personalized email campaigns also fit this workflow. Rytr generates follow-up emails and outreach
        messages in multiple languages and tones, helping you avoid the “just checking in” trap. Instead of
        sending generic or overdue messages, you can tailor content for each segment and schedule it to go out
        on time. This keeps your pipeline warm and your leads engaged.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s mechanics are built for the real pace and needs of small businesses in South Florida. Every
        step is about removing friction, not adding new tasks. The system gives you a way to keep up with
        content demands without the cost or complexity of traditional agency models. For the Miami salon
        owner, this means she can finish her week’s content in less than an hour and get back to running her
        business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-rytr-produces-content-in-minutes-not-hours" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Produces Content in Minutes, Not Hours
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-rytr-produces-content-in-minutes-not-hours-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Produces Content in Minutes, Not Hours
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
