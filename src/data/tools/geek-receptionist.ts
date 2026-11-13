import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools/business-operations. The hand-coded page under
 * `src/components/tools/business-operations/ai-receptionist/geek-receptionist/`
 * is the content of record; `sections` here carries each section's heading and
 * opening sentence so the registry stays readable, not a second copy.
 */
export const geekReceptionistContent: ToolPageContent = {
  "title": "Geek-Receptionist",
  "slug": "geek-receptionist",
  "department": "business-operations",
  "useCase": "ai-receptionist",
  "description":
    "Geek-Receptionist texts every caller a small business misses, alerts the owner and takes a voicemail, so leads stop slipping away when nobody can pick up the phone.",
  "heroSummary":
    "Geek-Receptionist texts every caller you miss, alerts you and takes a voicemail, so small businesses stop losing leads to an unanswered phone.",
  "keywords":
    "Geek-Receptionist, missed call text back, AI receptionist, call answering, lead capture, South Florida small business",
  "datePublished": "2026-11-13T12:00:00.0000000Z",
  "dateModified": "2026-11-13T12:00:00.0000000Z",
  "relatedArticleId":
    "https://geekatyourspot.com/use-cases/business-operations/ai-receptionist",
  "sections": [
    { "title": "Overview", "description": "When a call goes unanswered, the caller gets one text in the business's name, the owner gets an alert and the caller can leave a voicemail; AI voice answering is the next step." },
    { "title": "What a Missed Call Costs You", "description": "A caller with an urgent problem rarely waits, and a phone number in a missed call log is a guess rather than a lead." },
    { "title": "What Geek-Receptionist Removes from Your Week", "description": "Every missed call becomes a visible event, callbacks start in the middle of a conversation, texting rules are handled for you and your number stays yours." },
    { "title": "How Geek-Receptionist Handles a Missed Call", "description": "Your line rings first; if you do not answer, the caller hears a short greeting, gets one text, and can leave a voicemail, and replies are forwarded to your cell phone." },
    { "title": "What Runs Behind the Phone Line: Twilio, Geek-CRM and Safety Rules", "description": "Built on Twilio and run inside GeekAPI, with signed requests, one text per caller per window, United States and Canada numbers only, no call recording and every event logged in Geek-CRM." },
    { "title": "Setting Up Geek-Receptionist on Your Own Number", "description": "Keep your existing number and have your carrier forward unanswered calls, register the business for texting, set the ring time and screening, then test from a second phone." },
    { "title": "How Every Call and Text Becomes a Record in Geek-CRM", "description": "The caller's number finds or creates a lead, each call, text, reply and voicemail is logged once as an activity, and STOP marks the number opted out." },
    { "title": "What You Can Configure in Geek-Receptionist: Ring Time, Screening and the Text", "description": "Choose Dial or Forwarded mode, a ring time from 5 to 60 seconds, call screening, a repeat window from 0 to 1,440 minutes and the wording of the text." },
    { "title": "How to Judge Geek-Receptionist Fit, and the Planned AI Voice Plans and Pricing", "description": "Four planned AI voice plans, Starter at $30 a month for 90 AI-answered minutes up to Premium at $298 a month for 2,000, with no setup fee, monthly billing through PayPal and cancellation anytime." },
    { "title": "How Geek-Receptionist Compares to Answering Services, Voicemail and AI Voice Receptionists", "description": "A live service puts a person on every call, voicemail waits for you, and AI voice receptionists answer the call; Geek-Receptionist replies to the call you missed and keeps your number." },
    { "title": "Who Geek-Receptionist Is For, Who Should Look Elsewhere, and What to Do Next", "description": "Built for small businesses that miss calls while they work and want to keep their number; not for businesses that need a live person on every call or AI answering today." },
    { "title": "Frequently Asked Questions", "description": "12 questions about Geek-Receptionist, covering what happens on a missed call, keeping your number, texting rules, recording, Geek-CRM, AI voice answering and the plans." }
  ]
};
