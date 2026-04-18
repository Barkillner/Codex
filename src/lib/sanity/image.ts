import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "@/lib/sanity/client";
import type { PortableImage } from "@/types";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source?: PortableImage, width = 1400) {
  if (!source) return undefined;
  try {
    return builder.image(source).width(width).auto("format").url();
  } catch {
    return source.asset?.url;
  }
}
