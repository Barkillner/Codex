import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "services", title: "Services", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string" }] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string" }] }] }),
    defineField({ name: "results", title: "Results", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "year", title: "Year", type: "number" }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "repositoryUrl", title: "Repository URL", type: "url" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false })
  ]
});
