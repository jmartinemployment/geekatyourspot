// Enforces your strict PostgreSQL Enum options
export type PostType = 'Blog' | 'Pillar' | 'Tool';

// The tightened, known layout elements
export type BlockType = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'paragraph' 
  | 'code_block' 
  | 'ordered_list_item' 
  | 'unordered_list_item' 
  | 'image';

// Model input payload for creating or updating core posts
export type ArticleDataInput = {
  department_id: number;
  post_type: PostType;
  title: string;
  slug: string;
  summary?: string;     // Dedicated frontend card/hero text
  raw_json_ld?: string; // House your writer's SEO scripts as raw plain text
  status?: 'draft' | 'published';
};

// Model input payload for the individual sequential blocks
export type SectionBlockInput = {
  block_type: BlockType;
  heading_text?: string; // Populated only for h1, h2, h3
  body?: string;         // Populated for paragraphs, code, lists
  media_url?: string;    // Clean layout escape hatch for image assets
  media_caption?: string; // Optional alt text or visible photo caption
};

// --- READ PATH TYPES ---

// The structure of a flat row directly streaming back from PostgreSQL
export type PostSectionRow = {
  title: string;
  post_type: PostType;
  department_name: string;
  sort_order: number;
  block_type: BlockType;
  heading_text: string | null;
  body: string | null;
  media_url: string | null;
  media_caption: string | null;
};

// The structured shape of an single inline item inside your frontend lists
export type RenderableBlock = 

  | { block_type: 'paragraph' | 'code_block' | 'image' | 'h1' | 'h3'; body?: string; media_url?: string; media_caption?: string; heading_text?: string }
  | { block_type: 'ol' | 'ul'; items: string[] }; // Aggregated lists payload

// The perfect structural nested layout array for your Node mapper / frontend UI
export type HydratedSection = {
  type: 'intro' | 'section';
  title: string | null; // Set to the H2 text when type === 'section'
  blocks: RenderableBlock[];
};

// Full API response schema hydration package
export type CompletePostPayload = {
  title: string;
  post_type: PostType;
  department: string;
  // sections: HydratedSection[];
};

// System action execution status response
export type ServiceResponse = {
  success: boolean;
  postId?: number;
  error?: string;
};
