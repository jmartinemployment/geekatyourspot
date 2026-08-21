export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Grammarly is a powerful writing assistant designed to enhance content quality through real-time grammar,
                punctuation, and style checks. It integrates seamlessly into various content creation workflows, enabling users to
                streamline their editing processes and ensure their content is clear, concise, and error-free. This tool is
                particularly useful for teams looking to improve the efficiency and accuracy of their written communication while
                reducing the time spent on manual proofreading.</p>
              <p className="text-md text-white shadow-text pt-3">By using Grammarly, users can automatically detect and correct a wide range of writing issues, from basic spelling
                mistakes to complex grammatical errors. The tool also provides suggestions for improving sentence structure and
                style, helping writers produce more engaging and polished content. Grammarly&#39;s user-friendly interface and
                integration capabilities make it accessible for both individual users and collaborative teams.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Real-time grammar and punctuation checks</li>
                <li>Style and tone suggestions</li>
                <li>Integration with popular writing platforms</li>
                <li>User-friendly interface for easy adoption</li>
                <li>Suitable for individuals and teams</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Grammarly is available as a browser extension, desktop application, and mobile app, offering flexibility for users
                to access its features across different devices. Its ability to integrate with popular platforms such as Microsoft
                Word, Google Docs, and various email clients makes it an indispensable tool for writers, marketers, and
                professionals who rely on written communication.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
