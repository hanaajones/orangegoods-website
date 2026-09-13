import type { MetadataRoute } from "next";
import { CATALOG_PRODUCTS } from "@/data/catalog";
import { posts } from "@/app/insights/data";
import { caseStudies } from "@/app/case-studies/[slug]/page";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/about/og-crafted-vs-ready-made",
  "/case-studies",
  "/catalog",
  "/catalogs",
  "/contact",
  "/design",
  "/design/start",
  "/faq",
  "/fresh-picks",
  "/gallery",
  "/goods",
  "/goods/accessories",
  "/goods/all",
  "/goods/apparel",
  "/goods/apparel/quick-turn",
  "/goods/bags",
  "/goods/bags/quick-turn",
  "/goods/beanies/quick-turn",
  "/goods/blankets",
  "/goods/drinkware",
  "/goods/hats",
  "/goods/hats/add-ons",
  "/goods/hats/closures",
  "/goods/hats/decoration",
  "/goods/hats/fabric",
  "/goods/hats/full-custom",
  "/goods/hats/quick-turn",
  "/goods/outerwear",
  "/goods/socks",
  "/insights",
  "/legal",
  "/quiz",
  "/services",
  "/services/embroidery",
  "/services/full-custom",
  "/services/screen-printing",
  "/shop",
  "/sustainability",
] as const;

const SHOP_PRODUCT_SLUGS = ["og-classic-cap", "og-trucker", "og-crew-socks"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
    })),
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/case-studies/${study.slug}`,
      lastModified,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      lastModified,
    })),
    ...CATALOG_PRODUCTS.map((product) => ({
      url: `${SITE_URL}/catalog/${product.slug}`,
      lastModified,
    })),
    ...SHOP_PRODUCT_SLUGS.map((slug) => ({
      url: `${SITE_URL}/shop/${slug}`,
      lastModified,
    })),
  ];
}
