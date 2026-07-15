import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

type CaseStudy = {
  slug: string;
  client: string;
  category: string;
  headline: string;
  deck: string;
  heroImage: string;
  heroPosition: string;
  accentImage: string;
  accentPosition: string;
  stats: string[];
  overview: string;
  focus: {
    title: string;
    body: string;
  }[];
  gallery: {
    image: string;
    title: string;
    detail: string;
    position: string;
    className?: string;
  }[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "verve-coffee-retail-merch-program",
    client: "Verve Coffee Roasters",
    category: "Retail apparel, drinkware, socks",
    headline: "A collab merch program with enough range to feel like retail.",
    deck:
      "Verve's Grateful Dead goods had to carry a recognizable collaboration without turning into a loose pile of logo products.",
    heroImage: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    heroPosition: "center 30%",
    accentImage: "/images/gallery/drinkware-verve-grateful-dead-mug-034.jpg",
    accentPosition: "center 54%",
    stats: ["Apparel", "Drinkware", "Socks", "Retail drop"],
    overview:
      "The stronger move was to keep the program edited: a wearable graphic tee, usable drinkware, and small-format soft goods that could support the collection without competing with the hero artwork.",
    focus: [
      {
        title: "Product range with restraint",
        body: "The assortment spans different use cases, but each item still feels tied to the same visual world.",
      },
      {
        title: "Photography as proof",
        body: "Close product photography makes the print, material, and finished scale easier to understand before someone commits to a run.",
      },
      {
        title: "Retail-first merch logic",
        body: "The goods need to look like something a customer would buy, not just something a brand would hand out.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_040.jpg",
        title: "Graphic tee",
        detail: "Large-format apparel print",
        position: "center 30%",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        image: "/images/gallery/socks-verve-gd-dscf4860.jpg",
        title: "Custom socks",
        detail: "Collection support item",
        position: "center 44%",
      },
      {
        image: "/images/gallery/merch-graphics-verve-tokyo-tote-024.jpg",
        title: "Graphic direction",
        detail: "Artwork proof",
        position: "center 46%",
      },
    ],
  },
  {
    slug: "boatsetter-coastal-goods-system",
    client: "Boatsetter",
    category: "Totes, towels, headwear",
    headline: "A coastal goods system built around the setting.",
    deck:
      "Boatsetter had a clear product environment: boats, beaches, sun, travel, and summer handoffs. The goods needed to belong there.",
    heroImage: "/images/gallery/bags-boatsetter-dscf3241.jpg",
    heroPosition: "center 44%",
    accentImage: "/images/gallery/accessories-boatsetter-towel-2025-06-30-22-57-55.jpg",
    accentPosition: "center 54%",
    stats: ["Canvas totes", "Beach towels", "Headwear", "Outdoor use"],
    overview:
      "Instead of treating the tote, towel, and hat like separate promo items, the program works because the products share one practical coastal use case.",
    focus: [
      {
        title: "Use case before item list",
        body: "A tote carries the day, a towel anchors the beach moment, and headwear stays visible in the actual environment.",
      },
      {
        title: "Simple decoration across surfaces",
        body: "Different materials need different decoration choices, so the system relies on clarity rather than forcing one layout everywhere.",
      },
      {
        title: "Lifestyle proof",
        body: "The photos show how the goods can travel from a table to a boat, beach, or customer gift.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/bags-boatsetter-dscf3148.jpg",
        title: "Canvas tote",
        detail: "Carry item",
        position: "center 42%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/accessories-boatsetter-towel-2025-06-27-01-44-28.jpg",
        title: "Beach towel",
        detail: "Large soft good",
        position: "center 54%",
      },
      {
        image: "/images/gallery/hat-boatsetter-boat.jpg",
        title: "Headwear",
        detail: "Outdoor visibility",
        position: "center 48%",
      },
    ],
  },
  {
    slug: "high-street-deli-apparel-outerwear",
    client: "High Street Deli",
    category: "Apparel and outerwear",
    headline: "Restaurant merch that behaves like local culture.",
    deck:
      "High Street Deli's goods needed to feel wearable outside the restaurant while still staying tied to the place.",
    heroImage: "/images/gallery/goods-explore-catalog-high-street-deli-0477.jpg",
    heroPosition: "center 47%",
    accentImage: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    accentPosition: "center 42%",
    stats: ["Restaurant merch", "Lifestyle apparel", "Outerwear", "Board shorts"],
    overview:
      "The product direction works because it does not flatten the restaurant into a generic logo. It uses real apparel forms, recognizable color, and lifestyle context to make the goods feel like part of the world around the deli.",
    focus: [
      {
        title: "Merch beyond uniforms",
        body: "The pieces can support the brand without feeling limited to staff apparel or a one-day event table.",
      },
      {
        title: "Product culture fit",
        body: "Outerwear, board shorts, and graphic apparel make sense when the audience already sees the brand as part of a local lifestyle.",
      },
      {
        title: "Visual proof in context",
        body: "The strongest photos show product, scale, and styling instead of relying on flat mockups.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/high-st-deli-testimonial-0973-4.jpg",
        title: "Lifestyle apparel",
        detail: "Wearable brand moment",
        position: "center 46%",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        image: "/images/gallery/board-shorts-high-st-deli-dsc01098-2.jpg",
        title: "Board shorts",
        detail: "Specialty apparel",
        position: "center 44%",
      },
      {
        image: "/images/gallery/HighStDeli_Jenjoi_June20240420.jpg",
        title: "Brand world",
        detail: "Local lifestyle proof",
        position: "center 42%",
      },
    ],
  },
  {
    slug: "synergy-kombucha-event-apparel",
    client: "Synergy Kombucha",
    category: "Screen printed event apparel",
    headline: "A simple apparel system that showed up clearly in the room.",
    deck:
      "Synergy needed event apparel that would look cohesive on the team and still read cleanly in live photos.",
    heroImage: "/images/gallery/synergy-kombucha-event-2025.jpg",
    heroPosition: "center 52%",
    accentImage: "/images/gallery/apparel-gts-synergy.jpg",
    accentPosition: "center 48%",
    stats: ["Event team apparel", "Screen print", "Fleece", "Photo-ready color"],
    overview:
      "The direction stays focused: readable graphics, a strong brand color world, and apparel that could support the event environment without competing with it.",
    focus: [
      {
        title: "Team visibility",
        body: "The apparel needed to identify the team and hold up in photos without feeling overly uniformed.",
      },
      {
        title: "Print clarity",
        body: "Screen printing keeps the graphic readable at event distance and clean on the finished garment.",
      },
      {
        title: "Color continuity",
        body: "The purple product proof connects the production photo to the live activation.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/apparel-gts-synergy.jpg",
        title: "Printed apparel",
        detail: "Production proof",
        position: "center 48%",
        className: "md:col-span-2",
      },
      {
        image: "/images/testimonials/synergy-kombucha-shirt-press-fullwidth.jpg",
        title: "Event proof",
        detail: "Live setting",
        position: "center 48%",
      },
    ],
  },
  {
    slug: "stanford-medicine-kit-accessories",
    client: "Stanford Medicine",
    category: "Kits, packaging, accessories",
    headline: "Institutional goods with a cleaner handoff.",
    deck:
      "Stanford Medicine's program needed to feel organized, useful, and credible from the first impression.",
    heroImage: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    heroPosition: "center 52%",
    accentImage: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    accentPosition: "center 46%",
    stats: ["Custom packaging", "Laptop sleeve", "Accessories", "Institutional polish"],
    overview:
      "This is the kind of project where the handoff matters as much as the individual item. Packaging, useful accessories, and restrained branding make the goods feel considered.",
    focus: [
      {
        title: "A polished first read",
        body: "The kit needs to feel organized before the recipient even gets into the individual products.",
      },
      {
        title: "Useful goods first",
        body: "A laptop sleeve and practical accessories give the program a life after the initial event or delivery moment.",
      },
      {
        title: "Brand restraint",
        body: "The finished goods stay credible for an academic and medical audience because the visual system is clean.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
        title: "Laptop sleeve",
        detail: "Useful accessory",
        position: "center 46%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
        title: "Packaging",
        detail: "Finished handoff",
        position: "center 52%",
      },
    ],
  },
  {
    slug: "686-hoodie-print-detail",
    client: "686",
    category: "Fleece and apparel",
    headline: "A hoodie case study in restraint.",
    deck:
      "The 686 hoodie shows how a simple garment can still feel custom when the blank, placement, and print scale are handled well.",
    heroImage: "/images/gallery/apparel-686-hoodie-front.jpg",
    heroPosition: "center 34%",
    accentImage: "/images/gallery/apparel-686-hoodie-back.jpg",
    accentPosition: "center 34%",
    stats: ["Premium fleece", "Front hit", "Back graphic", "Screen print"],
    overview:
      "The value is not in overloading the garment. It is in making a piece people would wear first, then using front and back placements that feel intentional.",
    focus: [
      {
        title: "Better blank foundation",
        body: "A hoodie with stronger handfeel gives the decoration something worth sitting on.",
      },
      {
        title: "Placement hierarchy",
        body: "A smaller front mark keeps the piece wearable while the back graphic carries the bigger brand moment.",
      },
      {
        title: "Finished detail",
        body: "Close-up proof helps the print texture and final quality read clearly.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/apparel-686-hoodie-back.jpg",
        title: "Back print",
        detail: "Hero placement",
        position: "center 34%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/apparel-686-hoodie-detail.jpg",
        title: "Print detail",
        detail: "Close-up proof",
        position: "center 42%",
      },
    ],
  },
  {
    slug: "apteka-beach-towel-bucket-hat",
    client: "Apteka",
    category: "Towels and headwear",
    headline: "A beach goods lane with one clear lifestyle job.",
    deck:
      "Apteka's towel and bucket hat work because the product choices share the same setting instead of feeling like disconnected promo items.",
    heroImage: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    heroPosition: "center 42%",
    accentImage: "/images/gallery/hat-apteka-bucket.jpg",
    accentPosition: "center 42%",
    stats: ["Beach towel", "Bucket hat", "Lifestyle goods", "Outdoor use"],
    overview:
      "The point is not to make the brand louder. It is to make the goods feel natural in the place they are meant to be used: beach, water, sun, and a casual carry-with-you moment.",
    focus: [
      {
        title: "Shared environment",
        body: "The towel and bucket hat make sense together because they both belong in the same outdoor lifestyle lane.",
      },
      {
        title: "Quiet decoration",
        body: "A restrained mark lets the pieces feel like goods someone would choose, not only receive.",
      },
      {
        title: "Use-case proof",
        body: "The local photos show the pieces in context, which makes the product logic easier to understand than a flat mockup.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/hat-apteka-bucket.jpg",
        title: "Bucket hat",
        detail: "Headwear in context",
        position: "center 42%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/accessories-apteka-towel-267A5255.jpg",
        title: "Towel detail",
        detail: "Beach soft good",
        position: "center 42%",
      },
      {
        image: "/images/gallery/accessories-apteka-towel2.jpg",
        title: "Lifestyle towel",
        detail: "Outdoor proof",
        position: "center 46%",
      },
    ],
  },
  {
    slug: "goodonya-glass-bottle-production",
    client: "GoodOnYa",
    category: "Drinkware",
    headline: "Reusable drinkware shown at the point where it becomes real.",
    deck:
      "GoodOnYa's glass bottle project is strongest as a production-proof case study: clear decoration, real materials, caps, cartons, and the finished print visible before delivery.",
    heroImage: "/images/gallery/drinkware-goodoonya1.jpg",
    heroPosition: "center 42%",
    accentImage: "/images/gallery/drinkware-goodoonya2.jpg",
    accentPosition: "center 42%",
    stats: ["Glass bottles", "Screen print", "Production floor", "Reusable goods"],
    overview:
      "Clear drinkware leaves very little room to hide. The mark, material, cap, and finish all have to read cleanly, and the production photos make those decisions tangible.",
    focus: [
      {
        title: "Decoration on clear glass",
        body: "The print has to stay readable on a transparent surface with reflections, liquid, and real-world handling.",
      },
      {
        title: "Useful product choice",
        body: "A reusable bottle can become daily-use merch when the form, cap, and brand mark feel simple and durable.",
      },
      {
        title: "Production visibility",
        body: "Seeing the bottle on the line and in cartons gives the project more credibility than a render alone.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/drinkware-goodoonya2.jpg",
        title: "Bottle run",
        detail: "Packed production proof",
        position: "center 42%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/drinkware-goodoonya1.jpg",
        title: "Print detail",
        detail: "Clear glass decoration",
        position: "center 42%",
      },
    ],
  },
  {
    slug: "firestone-walker-custom-socks-retail",
    client: "Firestone Walker",
    category: "Socks",
    headline: "A small-format merch piece with real brand retention.",
    deck:
      "Firestone Walker's socks show how a smaller product can still carry a brand world when the pattern, colors, and photography connect it back to the core product.",
    heroImage: "/images/gallery/socks-firestone-_mg_0175.jpg",
    heroPosition: "center 50%",
    accentImage: "/images/gallery/socks-firestone-_mg_0147.jpg",
    accentPosition: "center 50%",
    stats: ["Custom socks", "Brewery merch", "Pattern work", "Retail add-on"],
    overview:
      "Socks give the brewery a useful, size-flexible merch item that can support retail, gifting, and events without becoming another apparel size run.",
    focus: [
      {
        title: "Brand cues at small scale",
        body: "The sock patterns carry the Firestone and 805 worlds through color, type, and iconography instead of just repeating a logo.",
      },
      {
        title: "Merch people keep",
        body: "A useful soft good earns more repeat visibility than a novelty item that gets put away after the handoff.",
      },
      {
        title: "Context sells the idea",
        body: "Photographing the socks beside the cans makes the connection immediate and helps the small product feel like part of the brand system.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/socks-firestone-_mg_0147.jpg",
        title: "Brewery context",
        detail: "Product family proof",
        position: "center 50%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/socks-firestone-_mg_0156.jpg",
        title: "Pattern detail",
        detail: "Sock graphics",
        position: "center 50%",
      },
      {
        image: "/images/gallery/socks-firestone-_mg_0188.jpg",
        title: "Retail add-on",
        detail: "Small-format goods",
        position: "center 50%",
      },
    ],
  },
  {
    slug: "body-glove-embroidered-tee-detail",
    client: "Body Glove",
    category: "Embroidered apparel",
    headline: "A tee case study in quieter decoration.",
    deck:
      "Body Glove shows how a small embroidered mark can make a tee feel finished without turning it into a loud promo piece.",
    heroImage: "/images/gallery/apparel-bodyglove-tee.jpg",
    heroPosition: "center 38%",
    accentImage: "/images/gallery/BGxHJ-6.jpg",
    accentPosition: "center 48%",
    stats: ["Embroidered tee", "Subtle mark", "Lifestyle apparel", "Wearable restraint"],
    overview:
      "The product story is simple: keep the decoration small, let the texture do the work, and make sure the garment still feels like something someone would choose to wear.",
    focus: [
      {
        title: "Decoration scale",
        body: "A compact embroidered mark adds texture without making the tee stiff, heavy, or overbranded.",
      },
      {
        title: "Apparel first",
        body: "The quieter front detail keeps the piece closer to a wearable basic than a one-off giveaway tee.",
      },
      {
        title: "Lifestyle proof",
        body: "The broader photo context helps show how the apparel can live outside the original brand moment.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/BGxHJ-6.jpg",
        title: "Lifestyle apparel",
        detail: "Wearable proof",
        position: "center 48%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/apparel-bodyglove-tee.jpg",
        title: "Embroidery detail",
        detail: "Quiet chest mark",
        position: "center 38%",
      },
    ],
  },
  {
    slug: "daybreak-coffee-striped-tote",
    client: "Daybreak Coffee",
    category: "Tote bags",
    headline: "A coffee tote where the material does part of the branding.",
    deck:
      "Daybreak Coffee's tote uses striped fabric and a direct front print to make a familiar bag format feel more specific.",
    heroImage: "/images/gallery/accessories-daybreak2.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/accessories-daybreak1.jpg",
    accentPosition: "center 48%",
    stats: ["Custom tote", "Striped textile", "Screen print", "Coffee merch"],
    overview:
      "The strongest choice is the base textile. The stripe gives the tote personality first, then the print makes the brand moment easy to read.",
    focus: [
      {
        title: "Material as direction",
        body: "A patterned fabric can make the tote feel custom before adding extra trim, hardware, or decoration.",
      },
      {
        title: "Readable front print",
        body: "The artwork has to hold its own against a busier background, so scale and color contrast matter.",
      },
      {
        title: "Sample proof",
        body: "The local photos make fabric, construction, and print scale visible before the piece is treated as finished content.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/accessories-daybreak2.jpg",
        title: "Finished tote",
        detail: "Front print",
        position: "center 48%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/accessories-daybreak1.jpg",
        title: "Fabric direction",
        detail: "Material proof",
        position: "center 48%",
      },
    ],
  },
  {
    slug: "jarritos-woven-blanket-gift",
    client: "Jarritos",
    category: "Woven blankets",
    headline: "A large-format textile that feels generous before it feels branded.",
    deck:
      "The Jarritos blanket is a useful proof point for brand gifts that need texture, color, and everyday value instead of another small giveaway.",
    heroImage: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    heroPosition: "center 44%",
    accentImage: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    accentPosition: "center 64%",
    stats: ["Woven blanket", "Color blocking", "Fringe detail", "Giftable goods"],
    overview:
      "A blanket gives the brand more surface area, but the goal is still to make a textile someone wants to use. Color, weave, fringe, and scale carry the project.",
    focus: [
      {
        title: "Textile value",
        body: "The gift feels more substantial because the product has weight, texture, and a clear use after the handoff.",
      },
      {
        title: "Color first",
        body: "The bright woven bands make the piece feel branded without relying only on a centered logo.",
      },
      {
        title: "Real-use setting",
        body: "Photographing the blanket outside makes the use case easier to understand than a flat crop alone.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
        title: "Woven blanket",
        detail: "Outdoor textile",
        position: "center 44%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "leave-her-wilder-embroidered-cap",
    client: "Leave Her Wilder",
    category: "Headwear",
    headline: "A simple cap with enough context to feel like a brand world.",
    deck:
      "Leave Her Wilder's cap keeps the product clean: a light blank, compact embroidery, and a setting that makes the lifestyle direction immediate.",
    heroImage: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    heroPosition: "center 56%",
    accentImage: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    accentPosition: "center 42%",
    stats: ["Embroidered cap", "Outdoor proof", "Lifestyle headwear", "Simple blank"],
    overview:
      "This project works because the hat is not overcomplicated. The embroidery is readable, the blank is easy to wear, and the photo gives the product a clear world.",
    focus: [
      {
        title: "Small front mark",
        body: "The embroidery stays compact enough to feel casual while still giving the hat a specific identity.",
      },
      {
        title: "Blank and setting",
        body: "A light cap against a warm outdoor scene makes the piece feel approachable rather than overly produced.",
      },
      {
        title: "Headwear proof",
        body: "For hats, context matters because the same blank can feel completely different depending on where and how it is shown.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
        title: "Embroidered cap",
        detail: "Lifestyle headwear",
        position: "center 56%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "beachly-plush-custom-socks",
    client: "Beachly",
    category: "Socks",
    headline: "A soft-good case study in comfort and repeat use.",
    deck:
      "Beachly's plush socks show how a small product can still feel considered when texture, pattern, and everyday use are visible.",
    heroImage: "/images/gallery/socks-beachly.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/socks-beachly.jpg",
    accentPosition: "center 40%",
    stats: ["Plush socks", "Repeat pattern", "Soft goods", "Everyday retention"],
    overview:
      "Socks can be a strong merch item when they avoid overexplaining the brand. Here, softness and simple repeat graphics do most of the work.",
    focus: [
      {
        title: "Texture first",
        body: "The plush knit makes the product value visible before the viewer has to study the graphic.",
      },
      {
        title: "Simple pattern",
        body: "A repeat design works well on socks because it keeps the product readable while worn and folded.",
      },
      {
        title: "Easy sizing",
        body: "Small soft goods can round out a gift or retail assortment without creating a full apparel size run.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/socks-beachly.jpg",
        title: "Plush socks",
        detail: "Soft-good proof",
        position: "center 48%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "verve-coffee-canvas-snapback",
    client: "Verve Coffee Roasters",
    category: "Headwear",
    headline: "A headwear proof point that supports the larger retail program.",
    deck:
      "Verve's canvas snapback keeps the headwear role simple: wearable shape, compact embroidery, and enough product proof to sit beside tees, drinkware, and socks.",
    heroImage: "/images/gallery/hat-feb-img_7440.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
    accentPosition: "center 42%",
    stats: ["Canvas snapback", "Embroidery", "Coffee merch", "Retail support"],
    overview:
      "The cap does not need to be the loudest item in the program. It works because the blank is clean, the decoration is restrained, and the product can round out a larger merch assortment without making the drop feel scattered.",
    focus: [
      {
        title: "Headwear as support",
        body: "A cap can strengthen the program by giving customers another useful format, not by competing with the main apparel graphics.",
      },
      {
        title: "Compact decoration",
        body: "Small embroidery keeps the piece wearable while still making the brand read clearly on the front panel.",
      },
      {
        title: "Close proof",
        body: "The product photos make crown shape, brim color, closure, and embroidery scale easier to evaluate before a run.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/hat-feb-img_7444.jpg",
        title: "Canvas snapback",
        detail: "Front embroidery",
        position: "center 48%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/hat-feb-img_7445.jpg",
        title: "Interior proof",
        detail: "Construction detail",
        position: "center 46%",
      },
      {
        image: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
        title: "Headwear context",
        detail: "Product setting",
        position: "center 42%",
      },
    ],
  },
  {
    slug: "ride-and-ridden-patch-trucker-hat",
    client: "Ride & Ridden",
    category: "Patch trucker hats",
    headline: "A mesh-back hat where the patch carries the character.",
    deck:
      "Ride & Ridden's trucker project uses a familiar hat shape, then lets the patch, brim contrast, and product angles make the piece feel specific.",
    heroImage: "/images/gallery/hat-feb-img_7538.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/hat-feb-img_7534.jpg",
    accentPosition: "center 46%",
    stats: ["Patch hat", "Mesh trucker", "Brim contrast", "Product proof"],
    overview:
      "The best part of this project is how direct the product story is. The trucker silhouette is familiar, but the patch and contrast details make it feel like a real brand piece rather than a generic blank.",
    focus: [
      {
        title: "Patch as focal point",
        body: "The front application gives the hat a tactile center that holds more character than a flat logo alone.",
      },
      {
        title: "Classic construction",
        body: "The mesh back and curved front give the piece an approachable shape that fits the riding and outdoor-adjacent brand world.",
      },
      {
        title: "Angles that answer questions",
        body: "Front, pair, and detail photos help show scale, color, and construction without needing extra explanation.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/hat-feb-img_7534.jpg",
        title: "Pair proof",
        detail: "Finished hats",
        position: "center 46%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/hat-feb-img_7524.jpg",
        title: "Front view",
        detail: "Patch placement",
        position: "center 48%",
      },
      {
        image: "/images/gallery/hat-feb-img_7536.jpg",
        title: "Mesh detail",
        detail: "Construction proof",
        position: "center 48%",
      },
    ],
  },
  {
    slug: "orange-goods-patch-headwear-system",
    client: "Orange Goods",
    category: "Patch headwear",
    headline: "A small headwear system built for reorders, samples, and real use.",
    deck:
      "Orange Goods patch hats show the same logic we bring to client work: repeatable artwork, better blanks, and photos that prove the product beyond a mockup.",
    heroImage: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    heroPosition: "center 42%",
    accentImage: "/images/gallery/hat-og-patch-yosemite.jpg",
    accentPosition: "center 48%",
    stats: ["Patch system", "Lifestyle photos", "Reorderable goods", "Headwear"],
    overview:
      "The system works because the patch is ownable but flexible. It can sit on different hat colors, show up in studio and outdoor photos, and support gifting, selling, or sampling without needing a new design every time.",
    focus: [
      {
        title: "Repeatable identity",
        body: "A consistent patch mark gives the headwear system a base that can move across colors and settings.",
      },
      {
        title: "Lifestyle and detail proof",
        body: "The photos show both how the hats wear on people and how the patch reads up close.",
      },
      {
        title: "Useful internal merch",
        body: "The same standards apply when the goods are for Orange Goods: they still need to feel wearable, useful, and easy to reorder.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/hat-og-patch-_mg_5898.jpg",
        title: "Lifestyle proof",
        detail: "Wearable headwear",
        position: "center 42%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/hat-og-patch-yosemite.jpg",
        title: "Outdoor proof",
        detail: "Patch in context",
        position: "center 48%",
      },
      {
        image: "/images/gallery/patches-og-oval-quality-logo-dscf2869.jpg",
        title: "Patch detail",
        detail: "Repeatable artwork",
        position: "center 50%",
      },
    ],
  },
  {
    slug: "mcalister-graphic-tee-artwork",
    client: "McAlister",
    category: "Graphic apparel",
    headline: "A tee graphic judged by how it works on the garment.",
    deck:
      "McAlister's tee proof is a good reminder that merch artwork has to leave the screen and survive scale, placement, blank color, and production.",
    heroImage: "/images/gallery/design-graphics-mcalister-088.jpg",
    heroPosition: "center 46%",
    accentImage: "/images/gallery/mcalister-016_2.jpg",
    accentPosition: "center 44%",
    stats: ["Graphic tee", "Artwork scale", "Dark blank", "Production proof"],
    overview:
      "The direction is intentionally simple: a graphic with enough contrast to read on a dark tee, a placement that does not feel overworked, and physical proof that shows how the idea behaves once it becomes apparel.",
    focus: [
      {
        title: "Artwork with constraints",
        body: "A tee graphic needs to account for ink, fabric, scale, and wearability in a way a flat digital graphic does not.",
      },
      {
        title: "Readable contrast",
        body: "The white artwork against a dark garment keeps the message clear without needing a complex color build.",
      },
      {
        title: "Sample-stage clarity",
        body: "Photos of the real garment make placement and proportion easier to evaluate before moving into a larger run.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/design-graphics-mcalister-088.jpg",
        title: "Artwork proof",
        detail: "Graphic placement",
        position: "center 46%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/mcalister-016_2.jpg",
        title: "Garment proof",
        detail: "Tee scale",
        position: "center 44%",
      },
    ],
  },
  {
    slug: "royal-wine-bandana-lifestyle-gift",
    client: "Royal Wine",
    category: "Bandanas",
    headline: "A lightweight accessory that makes more sense when it is styled.",
    deck:
      "Royal Wine's bandana works as a small textile case study because the product is simple, flexible, and strongest when shown in use.",
    heroImage: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    heroPosition: "center 42%",
    accentImage: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    accentPosition: "center 54%",
    stats: ["Bandana", "Lifestyle styling", "Accessory gift", "Small textile"],
    overview:
      "The product is not trying to be complicated. Its strength is that it can be packed easily, styled multiple ways, and used as a gift or event accessory without creating size or fit friction.",
    focus: [
      {
        title: "Flexible format",
        body: "Bandanas can support events, gifting, content, and retail without the sizing complexity of apparel.",
      },
      {
        title: "Styled proof",
        body: "The lifestyle photo communicates scale and use faster than a folded flat-lay could.",
      },
      {
        title: "Low-bulk retention",
        body: "A small textile can travel easily while still giving the brand a physical object people may keep using.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
        title: "Styled bandana",
        detail: "Lifestyle proof",
        position: "center 42%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "oak-essentials-travertine-tray-gift",
    client: "Oak Essentials",
    category: "Housewares and gifting",
    headline: "A material-first gift that keeps the brand quiet and useful.",
    deck:
      "Oak Essentials' travertine tray points to a different kind of merch value: weight, texture, finish, and everyday usefulness.",
    heroImage: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    accentPosition: "center 58%",
    stats: ["Housewares", "Premium gifting", "Material value", "Useful goods"],
    overview:
      "This is not a loud branded object, and that is the point. The tray works because the material does the premium signaling, while the form gives the recipient a real reason to keep it out.",
    focus: [
      {
        title: "Material leads",
        body: "Travertine gives the piece weight and texture before any decoration has to make a claim.",
      },
      {
        title: "Quiet brand fit",
        body: "A beauty or wellness brand often benefits from goods that feel calm, useful, and at home in the customer's space.",
      },
      {
        title: "Gift-kit utility",
        body: "Housewares can anchor a premium mailer or customer gift when apparel is not the right fit.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
        title: "Travertine tray",
        detail: "Material proof",
        position: "center 48%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "fish-at-sea-knit-beanie-program",
    client: "Fish At Sea",
    category: "Knit beanies",
    headline: "A color-range beanie program made stronger by one small label.",
    deck:
      "Fish At Sea's beanies show how a familiar winter accessory can become a real merch lane through color range, knit texture, and compact woven-label branding.",
    heroImage: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    heroPosition: "center 50%",
    accentImage: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    accentPosition: "center 42%",
    stats: ["Knit beanies", "Woven labels", "Color assortment", "Cold-weather merch"],
    overview:
      "The project works because it does not ask the beanie to do too much. The knit, palette, and repeated label system make the assortment feel intentional while keeping each individual piece easy to wear.",
    focus: [
      {
        title: "Assortment first",
        body: "The photo makes the color range feel like a complete program instead of one isolated accessory.",
      },
      {
        title: "Compact branding",
        body: "A woven label gives the beanies a branded touch without flattening the knit texture or overwhelming the cuff.",
      },
      {
        title: "Soft-good retention",
        body: "A useful cold-weather item can keep a brand in rotation longer than a single-use giveaway.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
        title: "Beanie assortment",
        detail: "Color and texture proof",
        position: "center 50%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "reel-life-gear-boat-cap",
    client: "Reel Life Gear",
    category: "Outdoor headwear",
    headline: "A lightweight cap with the use case built into the photo.",
    deck:
      "Reel Life Gear's boat cap is a tight headwear proof point: simple embroidery, a light blank, and a finished product shown in the outdoor setting where it belongs.",
    heroImage: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    accentPosition: "center 42%",
    stats: ["Outdoor cap", "Embroidery", "Boat lifestyle", "Lightweight blank"],
    overview:
      "The hat does not need a complicated product story. The blank looks easy to wear, the embroidery reads clearly, and the boat setting gives the piece a real reason to exist.",
    focus: [
      {
        title: "Setting as proof",
        body: "The image answers the buyer's first question by showing the cap in the environment it was made for.",
      },
      {
        title: "Readable embroidery",
        body: "Blue thread on a light blank keeps the artwork visible while still feeling coastal and casual.",
      },
      {
        title: "Practical headwear",
        body: "For outdoor brands, a cap can carry identity and function without needing a heavy campaign around it.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
        title: "Boat cap",
        detail: "Outdoor proof",
        position: "center 48%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "quality-goods-500gsm-towel",
    client: "Quality Goods",
    category: "Premium towels",
    headline: "A towel proof point where the texture carries the value.",
    deck:
      "The Quality Goods towel is built around the details buyers care about on a premium accessory: weight, terry texture, edge finish, and a tonal graphic that feels integrated.",
    heroImage: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
    accentPosition: "center 56%",
    stats: ["500gsm towel", "Terry texture", "Tonal artwork", "Accessory gifting"],
    overview:
      "A towel has to feel useful before it can feel branded. The close-up image makes the construction and handfeel visible, which is the right proof for a product where weight and texture matter.",
    focus: [
      {
        title: "Material signal",
        body: "The 500gsm towel direction gives the piece a heavier, more substantial read than a thin promo towel.",
      },
      {
        title: "Integrated artwork",
        body: "Tonal graphics keep the branding quiet enough to live with the textile rather than sit on top of it.",
      },
      {
        title: "Detail photography",
        body: "Close proof helps a buyer evaluate edge finish, terry texture, and perceived quality before a run.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
        title: "Towel detail",
        detail: "Texture and edge finish",
        position: "center 48%",
        className: "md:col-span-2",
      },
    ],
  },
  {
    slug: "ocean-ocean-hoodie-screen-print",
    client: "Ocean & Ocean",
    category: "Screen printed fleece",
    headline: "A hoodie case study in print placement and motion.",
    deck:
      "Ocean & Ocean's hoodie lines up with the current screen-printing direction: a wearable fleece blank, a clean chest mark, a sleeve graphic, and photography that makes the piece feel alive.",
    heroImage: "/images/gallery/design-hero-ocean-ocean-hoodie.jpg",
    heroPosition: "center 44%",
    accentImage: "/images/gallery/design-ready-to-create-mg-6305.jpg",
    accentPosition: "center 50%",
    stats: ["Hoodie", "Screen print", "Sleeve print", "Coastal apparel"],
    overview:
      "The hoodie works because the decoration has hierarchy. The chest mark stays small enough for everyday wear, while the sleeve gives the garment a stronger graphic moment.",
    focus: [
      {
        title: "Placement hierarchy",
        body: "A compact chest print and larger sleeve hit give the hoodie visual range without crowding the front.",
      },
      {
        title: "Wearable blank",
        body: "Fleece has to feel like apparel first, so the blank choice and fit carry as much weight as the print.",
      },
      {
        title: "Photo direction",
        body: "The motion photo gives the product energy and shows how the print reads when the garment is actually worn.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/design-hero-ocean-ocean-hoodie.jpg",
        title: "Hoodie in motion",
        detail: "Wearable print proof",
        position: "center 44%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/design-ready-to-create-mg-6305.jpg",
        title: "Companion goods",
        detail: "Outdoor brand world",
        position: "center 50%",
      },
      {
        image: "/images/gallery/design-illustration-3a2a3346.jpg",
        title: "Graphic direction",
        detail: "Artwork system",
        position: "center 48%",
      },
    ],
  },
  {
    slug: "orange-goods-field-patch-cap",
    client: "Orange Goods Field Series",
    category: "Patch headwear",
    headline: "A patch-cap system shown like finished lifestyle merch.",
    deck:
      "The Orange Goods field series extends the internal patch-headwear proof with outdoor photos, on-body detail, and enough variation to show how a repeatable cap system can keep feeling fresh.",
    heroImage: "/images/gallery/hat-og-big-bear-dscf7571.jpg",
    heroPosition: "center 48%",
    accentImage: "/images/gallery/hat-og-patch-_mg_4301.jpg",
    accentPosition: "center 36%",
    stats: ["Patch caps", "Lifestyle proof", "On-body photos", "Sample system"],
    overview:
      "The point of this internal case study is usefulness. The patch mark, cap colors, and lifestyle photos can guide client conversations about headwear before they commit to a blank, decoration method, or photo direction.",
    focus: [
      {
        title: "Repeatable patch mark",
        body: "A compact patch system can move across crown colors and settings while still feeling connected.",
      },
      {
        title: "Lifestyle credibility",
        body: "Outdoor and on-body photos make the hats feel less like samples and more like goods someone would actually wear.",
      },
      {
        title: "Client reference value",
        body: "Internal merch becomes useful sales proof when it shows blank shape, patch scale, color blocking, and styling clearly.",
      },
    ],
    gallery: [
      {
        image: "/images/gallery/hat-og-big-bear-dscf7571.jpg",
        title: "Field lineup",
        detail: "Patch cap family",
        position: "center 48%",
        className: "md:col-span-2",
      },
      {
        image: "/images/gallery/hat-og-patch-_mg_4301.jpg",
        title: "On-body proof",
        detail: "Patch scale",
        position: "center 36%",
      },
      {
        image: "/images/gallery/hat-og-patch-_mg_4329.jpg",
        title: "Lifestyle portrait",
        detail: "Wearable reference",
        position: "center 36%",
      },
    ],
  },
];

function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.client} Case Study - Orange Goods`,
    description: study.deck,
  };
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const nextStudy =
    caseStudies[(caseStudies.findIndex((item) => item.slug === study.slug) + 1) % caseStudies.length];

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground image={study.heroImage} position={study.heroPosition} />
        <div className="absolute inset-0 bg-[#1C1C1C]/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/82 via-[#1C1C1C]/48 to-[#1C1C1C]/10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div>
            <Link
              href="/case-studies"
              className="inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              Back to Case Studies
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-white/74">
              {study.category}
            </p>
            <h1
              className="mt-5 text-[3.1rem] uppercase leading-[0.9] text-[var(--og-orange)] md:text-[5.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {study.client}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
              {study.deck}
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/18 bg-white/10 p-3 backdrop-blur">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.35rem] bg-[#E4DFCD]">
              <Image
                src={study.accentImage}
                alt={`${study.client} project detail`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
                style={{ objectPosition: study.accentPosition }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <article className="rounded-[1.9rem] border border-[#0B32A0]/14 bg-white p-6 shadow-[0_20px_60px_rgba(8,30,111,0.08)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
              Project Lens
            </p>
            <h2
              className="mt-4 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[3.65rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {study.headline}
            </h2>
            <p className="mt-5 text-base leading-7 text-[#676767] md:text-lg">
              {study.overview}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {study.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-xl border border-[#0B32A0]/14 bg-[#F7F4ED] px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--og-blue)]"
                >
                  {stat}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3">
            {study.focus.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-[#0B32A0]/14 bg-[rgba(255,248,241,0.9)] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7F00]">
                  Build Note
                </p>
                <h3
                  className="mt-3 text-[1.85rem] uppercase leading-[0.96] text-[var(--og-blue)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#676767]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Project Proof"
            title="The goods in context"
            description="A tighter photo set for the finished pieces, details, and product logic behind this case study."
          />
          <div className="mt-8 grid grid-flow-row-dense gap-4 md:grid-cols-3">
            {study.gallery.map((item) => (
              <article
                key={`${item.title}-${item.image}`}
                className={`group relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#E4DFCD] shadow-[6px_6px_0px_#0B32A0] ${item.className ?? ""}`}
              >
                <Image
                  src={item.image}
                  alt={`${study.client} ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                    {item.detail}
                  </p>
                  <h3
                    className="mt-2 text-[2rem] uppercase leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto overflow-hidden rounded-[1.9rem] border border-[#0B32A0]/14 bg-[rgba(255,248,241,0.9)] shadow-[0_18px_50px_rgba(8,30,111,0.08)] md:max-w-6xl">
          <div className="grid gap-0 md:grid-cols-[1fr_0.9fr] md:items-stretch">
            <div className="p-7 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Next Case Study
              </p>
              <h2
                className="mt-4 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[3.65rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {nextStudy.client}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#676767] md:text-lg">
                {nextStudy.deck}
              </p>
              <Link href={`/case-studies/${nextStudy.slug}`} className="btn-og mt-7 inline-flex">
                View Next Study
              </Link>
            </div>

            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="group relative block min-h-[18rem] overflow-hidden bg-[#D5BBA2]"
              aria-label={`View the ${nextStudy.client} case study`}
            >
              <Image
                src={nextStudy.heroImage}
                alt={`${nextStudy.client} case study`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                style={{ objectPosition: nextStudy.heroPosition }}
              />
            </Link>
          </div>
        </section>
      </Reveal>

      <CTASection
        eyebrow="Build With Orange Goods"
        title="Have a project that should feel this considered?"
        description="Send the product idea, quantity, timeline, and references. We will help narrow the path and turn it into goods with a real point of view."
        buttonLabel="Start a Project"
        buttonHref="/contact"
        backgroundImage={study.heroImage}
        backgroundImagePosition={study.heroPosition}
        overlayClassName="bg-[linear-gradient(135deg,rgba(8,30,111,0.88),rgba(8,30,111,0.54))]"
      />
    </main>
  );
}
