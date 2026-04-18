import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "icon", title: "Icon", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number" })
  ]
});
