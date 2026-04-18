import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = createClient({
  // Sanity client requires a projectId at construction time. Use a placeholder so
  // the app can still build and render fallback content when env vars are absent.
  projectId: projectId || "ppsg7ml5",
  dataset: dataset || "production",
  apiVersion: "2025-01-01",
  useCdn: true
});
