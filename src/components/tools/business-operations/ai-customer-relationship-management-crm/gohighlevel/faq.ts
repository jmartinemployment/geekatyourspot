/**
 * The FAQ for the GoHighLevel page. The visible FAQ in faq-section.tsx and the FAQPage markup in
 * page.tsx both read this list, so the questions on the page and in the markup cannot drift apart.
 */
export type FaqItem = { question: string; answer: string };

export const GOHIGHLEVEL_FAQ: FaqItem[] = [
  {
    question: "What is GoHighLevel?",
    answer:
      "GoHighLevel is an all-in-one platform from HighLevel that combines a CRM with pipelines, two-way texting and email, a booking calendar, forms, a website and funnel builder, review requests and a workflow builder. It was first built for marketing agencies, and small businesses use it to run lead follow-up from one account.",
  },
  {
    question: "Who is GoHighLevel for?",
    answer:
      "It suits small businesses that win work through inbound leads and appointments, such as home services, clinics, salons and local professional offices. It is less suited to a business with only a few customers or to a long enterprise sales process that needs detailed forecasting.",
  },
  {
    question: "Does GoHighLevel charge for each user?",
    answer:
      "HighLevel prices its plans by account rather than by user, so adding a team member does not by itself raise the plan price. Texts, calls, email sending and AI features are billed by usage on top of the plan. Plans and rates change, so check HighLevel’s current pricing before you decide.",
  },
  {
    question: "Does GoHighLevel include texting and email?",
    answer:
      "Yes. The platform includes two-way texting and email in a single inbox, and it provides its own phone numbers and email sending, billed by usage. It also brings in Facebook and Instagram messages and website chat.",
  },
  {
    question: "Can GoHighLevel answer customers with AI?",
    answer:
      "HighLevel offers AI features, including a conversation bot for text and chat and a voice agent for calls. They are billed by usage and need careful setup and testing, including clear rules for when the bot hands a conversation to a person.",
  },
  {
    question: "Do I need to register to text my customers?",
    answer:
      "Business texting in the United States generally requires registering your business and your messaging use with the carriers, and that registration can take several days. You also need recorded consent before you send marketing texts. Have an attorney review your consent wording, because Florida has its own telephone solicitation rules in addition to federal ones.",
  },
  {
    question: "How long does setup take?",
    answer:
      "A basic setup with a pipeline, an instant reply to new leads, appointment reminders and a review request can be built in a few weeks, and the texting registration often sets the pace. Adding more lead sources, AI and reporting takes longer, which is why we go live with one source first.",
  },
  {
    question: "Can I move my existing contacts into GoHighLevel?",
    answer:
      "Yes. Contacts can be imported from a spreadsheet file, so the work is cleaning the list first: one person per row, consistent phone numbers, no duplicates and a source for each contact.",
  },
  {
    question: "Can I take my data with me if I leave?",
    answer:
      "Contacts can be exported from the platform, so your customer list is not locked inside it. Confirm the exact export options on HighLevel’s current help pages before you build your processes around any system.",
  },
  {
    question: "Does Geek @ Your Spot LLC set GoHighLevel up for me?",
    answer:
      "Yes. Geek @ Your Spot LLC configures the pipeline, workflows, texting rules and AI for small businesses in Miami-Dade, Broward and Palm Beach counties, and tests the setup before customers see it. You can book a free consultation from this page.",
  },
  {
    question: "Does Geek @ Your Spot LLC earn a commission from GoHighLevel?",
    answer:
      "Yes. Geek @ Your Spot LLC is an affiliate of HighLevel and earns a commission if you sign up through the links on this page. Our recommendation does not change what you pay.",
  },
];
