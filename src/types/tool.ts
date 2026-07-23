export interface ToolSubSection {
  heading: string;
  content?: string[];
  items?: Array<{
    title: string;
    description: string;
  }>;
}

export interface ToolSection {
  title: string;
  description?: string;
  subsections?: ToolSubSection[];
}

export interface ToolPageContent {
  title: string;
  slug: string;
  department: string;
  description: string;
  heroSummary: string;
  image?: string;
  sections: ToolSection[];
}
