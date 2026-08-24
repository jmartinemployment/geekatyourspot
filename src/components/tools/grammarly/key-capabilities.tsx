export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">Grammarly offers a range of capabilities that enhance the content creation process by ensuring that writing is not
              only correct but also engaging and effective. Here are some of its key features:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Grammar and Spelling Check: Grammarly&#39;s core function is to identify and correct grammatical errors,
                spelling mistakes, and punctuation issues. This ensures that the content is free from basic errors that can
                undermine credibility.</li>
              <li>Style and Tone Adjustments: The tool provides suggestions to adjust the style and tone of the writing to better
                match the intended audience and purpose. This includes making sentences more concise and ensuring the tone is
                appropriate for the context.</li>
              <li>Plagiarism Detection: Grammarly can check content against billions of web pages to detect potential plagiarism,
                ensuring content originality and integrity.</li>
              <li>Vocabulary Enhancement: It suggests synonyms and alternative words to improve vocabulary usage and make the
                content more engaging.</li>
              <li>Integration Capabilities: Grammarly integrates with a variety of platforms including Microsoft Word, Google
                Docs, and email clients, allowing for seamless editing across different writing environments.</li>
              <li>Customizable Settings: Users can customize Grammarly&#39;s settings to prioritize certain types of suggestions
                based on their specific needs and preferences.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities make Grammarly an essential tool for anyone involved in content creation, from professional
              writers to business teams, by saving time and reducing errors, ultimately leading to more polished and effective
              communication.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
