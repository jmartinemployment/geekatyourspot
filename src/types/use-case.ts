export interface ContentItem {
  title: string;
  description?: string;
}

export interface ListItem {
  title: string;
  description: string;
}

export interface SubSection {
  heading: string;
  content?: string[];
  items?: ListItem[];
}

export interface ContentSection {
  id: number
  image?: string;
  image2?: string;
  title: string;
  description?: string;
  subsections?: SubSection[];
}

export interface ToolFeature {
  title: string;
  description: string;
}

export interface ToolCard {
  name: string;
  url?: string;
  description: string;
  features: ToolFeature[];
  implementation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UseCaseContent {
  title: string;
  heroSummary: string;
  image?: string;
  image2?: string;
  sections: ContentSection[];
  tools: ToolCard[];
  faq: FAQItem[];
}
