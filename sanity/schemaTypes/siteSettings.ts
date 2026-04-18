import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" })
          ]
        }
      ]
    }),
    defineField({
      name: "seoDefaults",
      title: "SEO Defaults",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "image", title: "Open Graph Image", type: "url" })
      ]
    }),
    defineField({ name: "capabilities", title: "Capabilities", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 })
          ]
        }
      ]
    }),
    defineField({
      name: "partnerLogos",
      title: "Partner Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "mark", title: "Mark", type: "string" })
          ]
        }
      ]
    })
  ]
});
