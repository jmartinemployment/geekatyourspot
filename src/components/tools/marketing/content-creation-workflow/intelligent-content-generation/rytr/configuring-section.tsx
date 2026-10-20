import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s real strength for small South Florida businesses is how little stands between setup and output.
        The platform is built for quick configuration, not endless tuning. What gets configured in Rytr is
        direct: you set the type of content, the language, the tone, and the use case. Each of these is a
        lever that shapes what the AI produces, and Rytr’s own interface keeps it simple, no scripting, no
        custom workflows, just clear options that get you from input to draft in seconds.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Rytr’s automation logic is its use case selector. When you start a new piece, you pick
        from dozens of pre-built templates, social media captions, Google Business Profile blurbs, product
        descriptions, follow-up emails, and more. These templates are not just text boxes; each one carries
        its own logic about what the output should look like and what fields you need to fill. For example,
        the Google Ad Copy Generator asks for your campaign’s language and tone, then lets you define the
        use case (like ‘Ad Copy Generator’). You add a product description or keyword, and Rytr produces a
        draft that matches your choices. This structure means you do not have to build rules from scratch, the
        system guides you through the right path for the job.</p>
      <p className="text-md text-white shadow-text pt-3">
        Tone selection is a key part of configuration. Rytr offers more than 20 preset tones, from
        professional to playful, and you can create your own if none fit. This matters for small teams that
        need to keep their brand voice consistent across platforms. If your product description needs to sound
        formal on LinkedIn but casual on Instagram, you set the tone slider for each channel. This is not just
        a cosmetic tweak; it changes the structure, vocabulary, and even the length of the output. Rytr’s
        ability to adjust tone on demand means you do not need to rewrite the same idea for every platform,
        one input, multiple outputs, each tuned for its audience.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s language support is broad, covering over 30 languages. For Miami-Dade and Broward teams, this
        means you can produce Spanish, Haitian Creole, or English content from the same workflow. Each
        language setting is a rule in itself, shaping not only the words but the cultural cues and phrasing.
        If your business needs to reach a multilingual audience, Rytr’s configuration makes this possible
        without hiring a translator or switching tools.</p>
      <p className="text-md text-white shadow-text pt-3">
        Input guidance is another automation feature. Each template asks for only what the AI needs: a product
        name, a key phrase, or a few details about your offer. Rytr turns this input into a draft in seconds.
        You can refine the draft by adjusting length, tone, or language, but the heavy lifting is done for
        you. This is where Geek @ Your Spot brings value in implementation, mapping your real content needs to
        the right Rytr templates, setting brand tones, and training your team to use the tool’s logic for
        every channel you run. No custom coding required, just an understanding of which settings matter for
        your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr does not expose a scripting or&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;extension
        layer for custom automation. Instead, it focuses on a set of integrations, Gmail, Slack, and LinkedIn,
        so you can surface AI-generated drafts inside the tools your team already uses. This is a
        config-driven platform, not a developer sandbox. For most small businesses, that’s a strength: less
        complexity, fewer things to break, and a shorter path from idea to publishable content. When Geek @
        Your Spot configures Rytr for a client, the work is about aligning templates and tones to your
        workflow, not writing code or building custom automations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real-world impact is clear when you return to the local salon owner from earlier. She needs
        Instagram posts in English and Spanish, a product description for her booking page, and a quick
        follow-up email template. With Rytr, Geek @ Your Spot sets up her account with the right templates,
        tunes the tone for each channel, and shows her team how to use the language selector. Next time she
        needs a caption or a product blurb, she picks the template, enters a few words, and Rytr handles the
        rest. No blank pages, no bottlenecks, and no risk of publishing a post in the wrong tone or language.
        The automation logic is built into the platform, your job is to set the rules once and use them every
        time you need content.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-configured-in-rytr-and-how-rules-shape-automation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Rytr and How Rules Shape Automation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-actually-gets-configured-in-rytr-and-how-rules-shape-automation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Actually Gets Configured in Rytr and How Rules Shape Automation
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
