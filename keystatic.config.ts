import { config, collection, fields } from "@keystatic/core";

const departmentOptions = [
  { label: "Accounting", value: "accounting" },
  { label: "Customer Service", value: "customer-service" },
  { label: "Human Resource", value: "human-resource" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
];

const contentSchema = {
  title: fields.slug({ name: { label: "Title" } }),
  description: fields.text({ label: "Description", multiline: true }),
  department: fields.select({
    label: "Department",
    options: departmentOptions,
    defaultValue: "accounting",
  }),
  date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
  excerpt: fields.text({ label: "Excerpt", multiline: true, description: "General-purpose summary." }),
  mainSummary: fields.text({ label: "Main summary", multiline: true, description: "Main-page summary (pillar/tool/blog)." }),
  heroSummary: fields.text({ label: "Hero summary", multiline: true, description: "Blurb under the page H1." }),
  homeSummary: fields.text({ label: "Home summary", multiline: true, description: "Home-page feature card copy." }),
  blogSummary: fields.text({ label: "Blog summary", multiline: true, description: "Blog-listing teaser copy." }),
  advertisingSummary: fields.text({ label: "Advertising summary", multiline: true, description: "Sponsored ad copy." }),
  sections: fields.array(
    fields.object({
      heading: fields.text({ label: "Heading" }),
      body: fields.text({ label: "Body", multiline: true }),
    }),
    {
      label: "Sections",
      description: "H2-bound fragments, addressable individually (e.g. sections[0].heading) for layouts that compose from specific entries rather than rendering the full body.",
      itemLabel: (props) => props.fields.heading.value || "Untitled section",
    }
  ),
  content: fields.mdx({ label: "Content" }),
};

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    useCases: collection({
      label: "Use Cases",
      slugField: "title",
      path: "content-writer-output/use-cases/*",
      format: { contentField: "content" },
      schema: contentSchema,
    }),
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "content-writer-output/blog/*",
      format: { contentField: "content" },
      schema: contentSchema,
    }),
    tools: collection({
      label: "Tools",
      slugField: "title",
      path: "content-writer-output/tools/*",
      format: { contentField: "content" },
      schema: contentSchema,
    }),
  },
});
