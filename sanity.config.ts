import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";

import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Portfolio Studio",
  projectId,
  dataset,
  basePath: "/studio",
  schema: {
    types: schemaTypes
  },
  plugins: [visionTool()]
});
