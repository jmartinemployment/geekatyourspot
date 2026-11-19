/**
 * The FAQ for the Geek-Receptionist page. The visible FAQ in faq-section.tsx and the FAQPage markup
 * in page.tsx both read this list, so the questions on the page and in the markup cannot drift apart.
 * The facts come from the owner's plan and price notes of 2026-11-13 and from
 * GeekBackend/docs/Geek-Receptionist.md.
 * Public FAQ copy reflects current live capabilities (missed-call text-back and voicemail capture).
 * Update both this comment and the visible FAQ answers together when v1 multi-tenant AI voice answering launches.
 * The four zero data retention answers come from GeekBackend/docs/Geek-Receptionist-zero-data-retention.md,
 * which follows Vapi's zero data retention documentation. They describe AI voice answering, which is not built yet.
 */
export type FaqItem = { question: string; answer: string };

export const GEEK_RECEPTIONIST_FAQ: FaqItem[] = [
  {
    question: "What is Geek-Receptionist?",
    answer:
      "Geek-Receptionist is the phone service from Geek @ Your Spot LLC for small businesses. Today it handles missed calls: when a call goes unanswered, the caller gets one text in your business's name, you get an alert, and the caller can leave a voicemail. AI voice answering is the next step.",
  },
  {
    question: "What happens when I miss a call?",
    answer:
      "The caller hears a short greeting and gets one text message in your business's name. You get an alert on your cell phone, the caller can leave a voicemail, and you get a link to the recording. If the caller replies to the text, the reply is forwarded to your cell phone.",
  },
  {
    question: "Do I need to change my phone number?",
    answer:
      "No. You can keep your existing number. Your carrier forwards the calls you do not answer to Geek-Receptionist, and every call that arrives there is treated as a missed call.",
  },
  {
    question: "Will callers know they are going to get a text?",
    answer:
      "Yes. The greeting tells the caller that your business is texting them about their call, that message and data rates may apply, and that they can reply STOP to opt out.",
  },
  {
    question: "Will it text the same caller again and again?",
    answer:
      "No. A caller is texted at most once in a set window, which is 10 minutes by default. A caller who rings again inside that window hears only an invitation to leave a message.",
  },
  {
    question: "Which phone numbers does it text?",
    answer:
      "Numbers in the United States and Canada only. A call from any other country is not texted.",
  },
  {
    question: "Does it record my calls?",
    answer:
      "No. Geek-Receptionist does not record calls. A caller can leave a voicemail, and the prompt makes it clear that a message is being recorded. Florida requires everyone on a call to agree to recording, so there is no silent recording.",
  },
  {
    question: "Where are my calls and texts recorded?",
    answer:
      "Every missed call, text, reply, opt out and voicemail is written to Geek-CRM. The caller's number finds or creates a lead, and each event is logged against that lead, so a message that Twilio retries is never recorded twice.",
  },
  {
    question: "What does Geek-Receptionist keep after an AI-answered call ends?",
    answer:
      "When AI voice answering opens, Geek-Receptionist keeps none of a call's content, for every call in your account. It processes each call as it happens. After the call ends, it keeps your call history, cost, latency, billing and usage, so you can still see what happened and what you used. It keeps no recordings, transcripts, messages, summaries or detailed call logs, and structured outputs are not kept by default. The voice service that answers the call does record it, and deletes its copy about 10 minutes after the call is processed.",
  },
  {
    question: "Where do my recordings and transcripts go?",
    answer:
      "They go to your own storage, and only if you set it up. When AI voice answering opens, you can connect your own Amazon S3 or Google Cloud Storage bucket in the dashboard. This is off until you connect one. Geek @ Your Spot LLC does not store call content for you, so a business that connects no storage gets no recording or transcript of any call, from anyone.",
  },
  {
    question: "How do I find a recording or transcript in my storage?",
    answer:
      "Look in your own bucket and search for the call's ID in the file name. The audio recording, the transcript and messages, and the detailed call log are each written there as files. Your call history in Geek-Receptionist lists every call, so the history tells you which call to look for and your bucket holds the content.",
  },
  {
    question: "What if a recording is not in my storage?",
    answer:
      "Check that your storage was connected and recording was turned on before the call, because a transcript file does not prove audio was recorded. Check the bucket, the region and the folder path, and allow time for the call to finish processing. The call appears in your call history either way. Content that never reached your storage cannot be recovered, because Geek-Receptionist did not keep it, and storage you connect now applies only to later calls. After you connect storage, place a test call and confirm its files appear.",
  },
  {
    question: "Can it answer calls with AI today?",
    answer:
      "Not yet. Today Geek-Receptionist handles missed calls with a text, an alert and a voicemail. AI voice answering is the next step, and the plans on this page are for it. The text-back stays in place as the fallback if the AI is ever unavailable.",
  },
  {
    question: "How much will the AI voice plans cost?",
    answer:
      "The AI voice plans, which open soon, start at $30 a month for 90 AI-answered minutes. Standard is $48 a month for 250 minutes, Pro is $148 a month for 1,000 minutes, and Premium is $298 a month for 2,000 minutes. There is no setup fee.",
  },
  {
    question: "What happens if I use more minutes than my plan includes?",
    answer:
      "That month is billed at the price of the plan that covers your usage, and you go back to your own plan the next month. Above 2,000 minutes, the price is the Premium price plus $0.50 for each extra minute. You can choose a spending cap instead. Once your minutes run out, calls go to your own number and there is no extra charge.",
  },
  {
    question: "How does billing work, and can I cancel?",
    answer: "Billing is monthly through PayPal, and you can cancel anytime.",
  },
];
