import type { Metadata } from "next";

export const SITE_NAME = "Orange Goods";
export const SITE_URL = "https://orangegoods.co";
export const DEFAULT_DESCRIPTION =
  "Premium custom merch for brands. Hats, apparel, drinkware, accessories, and custom goods designed, produced, and delivered by the Orange Goods team in Southern California.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif`;
export const DEFAULT_SOCIAL_IMAGE_ALT = "Orange Goods custom branded merchandise";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
};

type ArticleSchemaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
};

type FaqSchemaItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_SOCIAL_IMAGE_ALT,
  noIndex = false,
  keywords,
  type = "website",
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"),
  image: absoluteUrl("/images/gallery/goods-hero-misc-dscf4876.jpg"),
  description: DEFAULT_DESCRIPTION,
  email: "hello@orangegoods.co",
  sameAs: ["https://www.instagram.com/orangegoods"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: "US",
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  inLanguage: "en-US",
};

export function buildArticleStructuredData({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  datePublished,
  dateModified,
  articleSection,
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [absoluteUrl(image)],
    mainEntityOfPage: absoluteUrl(path),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"),
      },
    },
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    ...(articleSection ? { articleSection } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function buildFaqStructuredData(items: FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
