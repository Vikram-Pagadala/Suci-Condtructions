import type { Metadata } from "next";
import { site } from "./site";

type Args = { title: string; description: string; path: string; image?: string };

export function buildMetadata({ title, description, path, image = "/og/default.jpg" }: Args): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
