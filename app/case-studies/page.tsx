import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Case Studies - Orange Goods",
  description:
    "A closer look at how Orange Goods builds branded goods for real brands, from product direction and decoration to production-ready details.",
};

const featuredCaseStudies = [
  {
    slug: "verve-coffee-retail-merch-program",
    client: "Verve Coffee Roasters",
    category: "Retail apparel, drinkware, socks",
    headline: "A merch program with real shelf appeal.",
    summary:
      "Verve's Grateful Dead goods needed to feel like a true retail collection, not a standard logo drop. We helped keep the product mix tight across tees, socks, and drinkware, with visuals that could carry the collaboration without feeling overbuilt.",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    secondaryImage: "/images/gallery/drinkware-verve-grateful-dead-mug-034.jpg",
    imagePosition: "center 30%",
    secondaryPosition: "center 54%",
    stats: ["Retail-ready blanks", "Multi-category program", "Collab goods"],
    details: [
      "Balanced a recognizable collaboration graphic with products people would actually keep wearing and using.",
      "Kept the assortment focused across apparel, socks, and drinkware instead of stretching the drop too thin.",
      "Used product photography and close-up proof to make the goods feel concrete before launch.",
    ],
  },
  {
    slug: "boatsetter-coastal-goods-system",
    client: "Boatsetter",
    category: "Totes, towels, headwear",
    headline: "A coastal goods system built beyond one item.",
    summary:
      "Boatsetter had the kind of brand world that could support a full summer set. We translated that into functional goods that made sense together: canvas totes, towels, and headwear with enough polish for customer-facing use.",
    image: "/images/gallery/bags-boatsetter-dscf3241.jpg",
    secondaryImage: "/images/gallery/accessories-boatsetter-towel-2025-06-30-22-57-55.jpg",
    imagePosition: "center 44%",
    secondaryPosition: "center 54%",
    stats: ["Canvas totes", "Beach towels", "Headwear"],
    details: [
      "Built the program around practical coastal use cases instead of treating each item like a separate promo piece.",
      "Used durable everyday products that could travel from event tables to boats, beaches, and customer gifting.",
      "Kept decoration clear and scalable across soft goods with different materials, shapes, and print areas.",
    ],
  },
  {
    slug: "high-street-deli-apparel-outerwear",
    client: "High Street Deli",
    category: "Apparel and outerwear",
    headline: "Food-brand merch with real streetwear energy.",
    summary:
      "High Street Deli's goods needed to feel local, wearable, and specific to the brand. The strongest pieces use familiar apparel forms, then lean into color, scale, and real-world styling so the merch feels like part of the culture around the restaurant.",
    image: "/images/gallery/goods-explore-catalog-high-street-deli-0477.jpg",
    secondaryImage: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    imagePosition: "center 47%",
    secondaryPosition: "center 42%",
    stats: ["Restaurant merch", "Lifestyle apparel", "Outerwear"],
    details: [
      "Led with lifestyle proof so the goods feel lived-in rather than staged as flat product.",
      "Used apparel that carries the brand in public, not just behind the counter or at a one-day event.",
      "Connected product direction to the actual audience and setting around the deli.",
    ],
  },
  {
    slug: "synergy-kombucha-event-apparel",
    client: "Synergy Kombucha",
    category: "Screen printed event apparel",
    headline: "A launch uniform that became part of the room.",
    summary:
      "Synergy needed apparel that could work in the actual event environment: visible in photos, easy for the team to wear, and clean enough to support the brand without competing with the experience around it.",
    image: "/images/gallery/synergy-kombucha-event-2025.jpg",
    secondaryImage: "/images/gallery/apparel-gts-synergy.jpg",
    imagePosition: "center 52%",
    secondaryPosition: "center 48%",
    stats: ["Event team apparel", "Screen printed fleece", "Photo-ready color"],
    details: [
      "Matched the product and print approach to an activation where staff visibility and photography mattered.",
      "Used a simple, readable apparel system so the team looked cohesive without feeling overly uniformed.",
      "Carried the purple brand world from production through the live event proof.",
    ],
  },
  {
    slug: "stanford-medicine-kit-accessories",
    client: "Stanford Medicine",
    category: "Kits, packaging, accessories",
    headline: "Institutional goods with a polished handoff.",
    summary:
      "Stanford Medicine's program needed to feel organized, trustworthy, and useful. The strongest parts of the build connected packaging, branded accessories, and practical everyday items into one clean institutional system.",
    image: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    secondaryImage: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    imagePosition: "center 52%",
    secondaryPosition: "center 46%",
    stats: ["Custom packaging", "Useful accessories", "Institutional polish"],
    details: [
      "Made the arrival experience feel considered before the recipient even opened the kit.",
      "Balanced clear Stanford Medicine branding with products that could stay useful after the event or program.",
      "Kept the visual system restrained so the finished goods felt credible for a medical and academic audience.",
    ],
  },
  {
    slug: "686-hoodie-print-detail",
    client: "686",
    category: "Fleece and apparel",
    headline: "Quiet apparel details that still feel custom.",
    summary:
      "The 686 hoodie project shows how a simple apparel piece can feel finished without shouting. The value is in the blank, placement, handfeel, and restraint: a small front mark, a stronger back moment, and a garment people would actually wear.",
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    secondaryImage: "/images/gallery/apparel-686-hoodie-back.jpg",
    imagePosition: "center 34%",
    secondaryPosition: "center 34%",
    stats: ["Premium fleece", "Front and back hits", "Retail restraint"],
    details: [
      "Used a better-feeling hoodie as the foundation so the decoration did not have to carry all the value.",
      "Kept the front hit small and wearable while giving the back graphic more room to work.",
      "Treated the piece like apparel first, then branded merch second.",
    ],
  },
  {
    slug: "apteka-beach-towel-bucket-hat",
    client: "Apteka",
    category: "Towels and headwear",
    headline: "A beach goods lane with a real reason to exist.",
    summary:
      "Apteka's towel and bucket hat work because the products belong in the same environment. The branding stays quiet enough to feel wearable, while the finished photos make the use case obvious: sun, sand, water, and goods people can actually take with them.",
    image: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    secondaryImage: "/images/gallery/hat-apteka-bucket.jpg",
    imagePosition: "center 42%",
    secondaryPosition: "center 42%",
    stats: ["Beach towel", "Bucket hat", "Lifestyle proof"],
    details: [
      "Connected two different product types through one clear outdoor use case.",
      "Kept the decoration restrained so the towel and hat still feel like lifestyle goods.",
      "Used local-photo proof to show the finished pieces in the setting where they make sense.",
    ],
  },
  {
    slug: "goodonya-glass-bottle-production",
    client: "GoodOnYa",
    category: "Drinkware",
    headline: "Clear drinkware with production-floor proof.",
    summary:
      "GoodOnYa's glass bottle project is a useful case study because the photos show the product becoming real: decoration on clear glass, caps staged for assembly, and a production environment that makes the print, scale, and finish easy to understand.",
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    secondaryImage: "/images/gallery/drinkware-goodoonya2.jpg",
    imagePosition: "center 42%",
    secondaryPosition: "center 42%",
    stats: ["Glass bottles", "Screen print", "Production proof"],
    details: [
      "Made a simple reusable bottle feel more custom through clear decoration and material fit.",
      "Showed production proof instead of relying only on a polished final mockup.",
      "Kept the brand mark readable on a transparent surface where contrast and placement matter.",
    ],
  },
  {
    slug: "firestone-walker-custom-socks-retail",
    client: "Firestone Walker",
    category: "Socks",
    headline: "Small-format goods built like a brand extension.",
    summary:
      "Firestone Walker's socks turn a small product into something with real retention. The product sits naturally beside the cans, carries recognizable brand cues, and gives fans a useful item that does not have to compete with another tee or hat.",
    image: "/images/gallery/socks-firestone-_mg_0175.jpg",
    secondaryImage: "/images/gallery/socks-firestone-_mg_0147.jpg",
    imagePosition: "center 50%",
    secondaryPosition: "center 50%",
    stats: ["Custom socks", "Retail-adjacent goods", "Brewery merch"],
    details: [
      "Used pattern, color, and product format to make the brand feel collectible at a smaller scale.",
      "Photographed the socks with the cans so the connection to the brewery world is immediate.",
      "Created a useful add-on item that can support retail, gifting, or event merch without needing size runs.",
    ],
  },
  {
    slug: "body-glove-embroidered-tee-detail",
    client: "Body Glove",
    category: "Embroidered apparel",
    headline: "A quiet apparel detail that makes the tee more wearable.",
    summary:
      "Body Glove is a good reminder that not every custom tee needs a huge graphic. A small embroidered mark, the right tee, and lifestyle proof can make the piece feel like apparel first and merch second.",
    image: "/images/gallery/apparel-bodyglove-tee.jpg",
    secondaryImage: "/images/gallery/BGxHJ-6.jpg",
    imagePosition: "center 38%",
    secondaryPosition: "center 48%",
    stats: ["Embroidered tee", "Subtle chest detail", "Lifestyle apparel"],
    details: [
      "Used embroidery where texture and restraint were more valuable than a large print.",
      "Kept the mark compact so the tee can work as an everyday apparel piece.",
      "Paired product proof with lifestyle context to show how a quieter decoration reads in the real world.",
    ],
  },
  {
    slug: "daybreak-coffee-striped-tote",
    client: "Daybreak Coffee",
    category: "Tote bags",
    headline: "A custom tote built around fabric, stripe, and print.",
    summary:
      "Daybreak Coffee's tote works because the base material already has a point of view. The striped textile gives the piece personality before decoration, then the front print makes the coffee-shop use case clear.",
    image: "/images/gallery/accessories-daybreak2.jpg",
    secondaryImage: "/images/gallery/accessories-daybreak1.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 48%",
    stats: ["Custom tote", "Striped textile", "Coffee merch"],
    details: [
      "Started from a fabric choice with enough character to make the tote feel custom before the print lands.",
      "Kept the front artwork direct and readable against a busier striped ground.",
      "Used sample-style local photos to make material, print scale, and construction easy to judge.",
    ],
  },
  {
    slug: "jarritos-woven-blanket-gift",
    client: "Jarritos",
    category: "Woven blankets",
    headline: "A generous textile gift with color already doing the work.",
    summary:
      "The Jarritos blanket shows how a larger textile can feel like a real gift instead of a flat logo placement. The color, fringe, woven texture, and scale carry most of the value before any copy has to explain it.",
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    secondaryImage: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    imagePosition: "center 44%",
    secondaryPosition: "center 64%",
    stats: ["Woven blanket", "Large textile", "Giftable goods"],
    details: [
      "Used a textile format that feels generous and useful instead of disposable.",
      "Let color blocking, fringe, and material texture carry the brand feeling at a larger scale.",
      "Photographed the product in a real-use setting so the finished piece feels tangible.",
    ],
  },
  {
    slug: "leave-her-wilder-embroidered-cap",
    client: "Leave Her Wilder",
    category: "Headwear",
    headline: "A simple cap made stronger by the setting around it.",
    summary:
      "Leave Her Wilder's cap is a clean headwear proof point: a light blank, a small embroidered mark, and a photo setting that immediately gives the product a lifestyle world.",
    image: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    secondaryImage: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    imagePosition: "center 56%",
    secondaryPosition: "center 42%",
    stats: ["Embroidered cap", "Outdoor proof", "Lifestyle headwear"],
    details: [
      "Kept the front embroidery simple enough to read without overpowering the hat.",
      "Used the blank color and outdoor setting to make the piece feel warm, casual, and wearable.",
      "Showed why headwear often needs lifestyle proof, not just a front-facing product crop.",
    ],
  },
  {
    slug: "beachly-plush-custom-socks",
    client: "Beachly",
    category: "Socks",
    headline: "A soft-good detail that earns repeat wear.",
    summary:
      "Beachly's plush socks are a smaller case study, but the product logic is strong: soft handfeel, simple repeat graphics, and a lifestyle photo that makes the comfort story visible.",
    image: "/images/gallery/socks-beachly.jpg",
    secondaryImage: "/images/gallery/socks-beachly.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 40%",
    stats: ["Plush socks", "Repeat pattern", "Everyday retention"],
    details: [
      "Used a soft-good format that can work across sizes and stay useful after the first handoff.",
      "Kept the design simple enough to read on a textured knit surface.",
      "Let the photo communicate softness, scale, and everyday use without needing hard metrics.",
    ],
  },
  {
    slug: "verve-coffee-canvas-snapback",
    client: "Verve Coffee Roasters",
    category: "Headwear",
    headline: "A canvas snapback with coffee-shop merch restraint.",
    summary:
      "Verve's headwear proof shows how a simple cap can support a larger retail program without trying to carry the whole story. The value is in the blank shape, embroidery scale, and the way the finished piece fits naturally beside the rest of the brand world.",
    image: "/images/gallery/hat-feb-img_7440.jpg",
    secondaryImage: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 42%",
    stats: ["Canvas snapback", "Embroidery", "Retail headwear"],
    details: [
      "Used a straightforward cap shape that feels easy to wear rather than overly promotional.",
      "Kept the decoration compact so the hat can sit beside tees, drinkware, and socks without visual noise.",
      "Relied on close product proof to make crown shape, contrast, and embroidery scale easy to judge.",
    ],
  },
  {
    slug: "ride-and-ridden-patch-trucker-hat",
    client: "Ride & Ridden",
    category: "Patch trucker hats",
    headline: "A trucker hat that makes the patch do the work.",
    summary:
      "Ride & Ridden's trucker project is a clean headwear study: a familiar mesh-back shape, a patch with enough texture to feel custom, and product photography that shows the hat from more than one buying angle.",
    image: "/images/gallery/hat-feb-img_7538.jpg",
    secondaryImage: "/images/gallery/hat-feb-img_7534.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 46%",
    stats: ["Patch hat", "Mesh trucker", "Headwear proof"],
    details: [
      "Matched a rugged trucker silhouette to a patch application that can carry more character than flat embroidery alone.",
      "Showed the hat as a pair and as a detail so the finished scale reads clearly.",
      "Used product angles that make the front artwork, mesh, and brim contrast easy to evaluate.",
    ],
  },
  {
    slug: "orange-goods-patch-headwear-system",
    client: "Orange Goods",
    category: "Patch headwear",
    headline: "A reorderable patch hat system with real lifestyle proof.",
    summary:
      "Our own patch hats are useful as a case study because they show the whole headwear logic in miniature: repeatable patch artwork, wearable blanks, detail proof, and lifestyle photos that make the hats feel like finished goods instead of samples.",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    secondaryImage: "/images/gallery/hat-og-patch-yosemite.jpg",
    imagePosition: "center 42%",
    secondaryPosition: "center 48%",
    stats: ["Patch system", "Lifestyle headwear", "Reorderable goods"],
    details: [
      "Built the program around a patch that can move across multiple hat colors and settings without losing the core identity.",
      "Used lifestyle and outdoor photos to show how the same mark feels beyond a studio product crop.",
      "Kept the headwear system practical enough for reorders, gifting, retail, and sales samples.",
    ],
  },
  {
    slug: "mcalister-graphic-tee-artwork",
    client: "McAlister",
    category: "Graphic apparel",
    headline: "A graphic tee direction with production in mind.",
    summary:
      "McAlister's tee photos are less about a big campaign and more about the handoff between artwork and apparel. The graphic needs to hold together on a real garment, at a real scale, with enough contrast and simplicity to feel wearable.",
    image: "/images/gallery/design-graphics-mcalister-088.jpg",
    secondaryImage: "/images/gallery/mcalister-016_2.jpg",
    imagePosition: "center 46%",
    secondaryPosition: "center 44%",
    stats: ["Graphic tee", "Artwork scale", "Apparel proof"],
    details: [
      "Treated the tee as the final medium, not just a place to drop a digital graphic.",
      "Kept the artwork readable against a dark blank where contrast and print scale matter.",
      "Used sample-style photos to show how the design sits on the garment before a broader run.",
    ],
  },
  {
    slug: "royal-wine-bandana-lifestyle-gift",
    client: "Royal Wine",
    category: "Bandanas",
    headline: "A small textile gift that gets better in context.",
    summary:
      "Royal Wine's bandana shows how a simple accessory can feel more valuable when the product, styling, and audience line up. It is lightweight, easy to gift, and strong enough visually to show up in lifestyle content.",
    image: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    secondaryImage: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    imagePosition: "center 42%",
    secondaryPosition: "center 54%",
    stats: ["Bandana", "Accessory gift", "Lifestyle styling"],
    details: [
      "Used a flexible textile format that can work as a gift, styling piece, event accessory, or retail add-on.",
      "Let the lifestyle photo explain scale and wearability faster than a flat product shot could.",
      "Kept the case study focused on the accessory's role inside a larger brand moment.",
    ],
  },
  {
    slug: "oak-essentials-travertine-tray-gift",
    client: "Oak Essentials",
    category: "Housewares and gifting",
    headline: "A quieter gift item built around material value.",
    summary:
      "Oak Essentials' tray is a useful proof point for brands that want something calmer than apparel. The material, weight, and finish create the premium signal before the branding has to say much at all.",
    image: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    secondaryImage: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 58%",
    stats: ["Housewares", "Premium gifting", "Material-first goods"],
    details: [
      "Chose a product where the perceived value comes from the material and finish, not a louder decoration.",
      "Kept the visual language restrained so the piece can live in a bathroom, vanity, office, or gift kit.",
      "Used close product proof to make texture, proportion, and usefulness visible.",
    ],
  },
  {
    slug: "fish-at-sea-knit-beanie-program",
    client: "Fish At Sea",
    category: "Knit beanies",
    headline: "A cold-weather soft good with a tight label system.",
    summary:
      "Fish At Sea's beanies show how a simple knit item can become a complete merch lane through color range, woven labels, and a product photo that makes texture and assortment depth easy to understand.",
    image: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    secondaryImage: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    imagePosition: "center 50%",
    secondaryPosition: "center 42%",
    stats: ["Knit beanies", "Woven labels", "Color range"],
    details: [
      "Used a familiar winter item where the handfeel and knit texture carry much of the value.",
      "Let the woven label keep the branding compact while still reading across multiple colors.",
      "Built the proof around assortment impact, not a single isolated product crop.",
    ],
  },
  {
    slug: "reel-life-gear-boat-cap",
    client: "Reel Life Gear",
    category: "Outdoor headwear",
    headline: "A boat-ready cap that proves the use case immediately.",
    summary:
      "Reel Life Gear's cap works because the product is photographed exactly where it belongs. The blue embroidery, lightweight blank, and boat setting make the finished piece feel practical instead of staged.",
    image: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    secondaryImage: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 42%",
    stats: ["Outdoor cap", "Embroidery", "Lifestyle proof"],
    details: [
      "Matched the product to a real outdoor setting so the hat's purpose is visible at first glance.",
      "Kept the artwork readable with a single strong embroidery color against a light blank.",
      "Used the boat photo to communicate durability, audience, and brand world without overexplaining it.",
    ],
  },
  {
    slug: "quality-goods-500gsm-towel",
    client: "Quality Goods",
    category: "Premium towels",
    headline: "A towel case study where texture does the selling.",
    summary:
      "The Quality Goods towel is a close-up proof point for higher-retention accessories. The weight, terry texture, border detail, and tonal graphic all matter because towels have to feel useful before they feel branded.",
    image: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
    secondaryImage: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 56%",
    stats: ["500gsm towel", "Textile detail", "Accessory gift"],
    details: [
      "Focused the case study on material quality because towel value is felt in texture, weight, and edge finish.",
      "Used tonal artwork so the branding feels integrated into the textile instead of printed on top of it.",
      "Showed close proof that helps buyers judge construction and handfeel before ordering.",
    ],
  },
  {
    slug: "ocean-ocean-hoodie-screen-print",
    client: "Ocean & Ocean",
    category: "Screen printed fleece",
    headline: "A hoodie built around motion, sleeve print, and coastal context.",
    summary:
      "Ocean & Ocean's hoodie sits close to the current screen-printing direction: a better fleece blank, a chest mark, a sleeve graphic, and photography that makes the piece feel wearable before it feels promotional.",
    image: "/images/gallery/design-hero-ocean-ocean-hoodie.jpg",
    secondaryImage: "/images/gallery/design-ready-to-create-mg-6305.jpg",
    imagePosition: "center 44%",
    secondaryPosition: "center 50%",
    stats: ["Hoodie", "Sleeve print", "Screen print"],
    details: [
      "Used placement hierarchy so the chest mark stays compact while the sleeve carries the louder graphic moment.",
      "Let the coastal motion photo support the product story instead of relying only on a flat garment shot.",
      "Kept the case study tied to print scale, color, and blank choice: the decisions that make fleece feel finished.",
    ],
  },
  {
    slug: "orange-goods-field-patch-cap",
    client: "Orange Goods Field Series",
    category: "Patch headwear",
    headline: "A field-photo cap system with a stronger lifestyle read.",
    summary:
      "This Orange Goods patch series extends the internal headwear proof with outdoor context, on-body photos, and a small family of cap variations that can support sampling, reorders, and visual direction for client work.",
    image: "/images/gallery/hat-og-big-bear-dscf7571.jpg",
    secondaryImage: "/images/gallery/hat-og-patch-_mg_4301.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 36%",
    stats: ["Patch caps", "Lifestyle proof", "Sample system"],
    details: [
      "Used a compact patch mark that can travel across crown colors, brim colors, and photo settings.",
      "Paired product-family proof with on-body images so the hat system feels wearable and repeatable.",
      "Kept the work useful as both Orange Goods merch and a reference for client headwear decisions.",
    ],
  },
  {
    slug: "aether-films-embroidered-cap",
    client: "Aether Films",
    category: "Embroidered headwear",
    headline: "A film-brand cap with a sharp, technical read.",
    summary:
      "Aether Films needed the mark to stay crisp on a dark navy cap without turning the product into a loud giveaway. The finished direction keeps the embroidery clean, the blank structured, and the palette restrained enough to feel like production-crew merch people would keep wearing.",
    image: "/images/gallery/hat-feb-img_7674.jpg",
    secondaryImage: "/images/gallery/hat-feb-img_7672.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 44%",
    stats: ["Navy cap", "Front embroidery", "Clean contrast"],
    details: [
      "Used white embroidery against a dark cap so the wordmark stays legible without adding extra color.",
      "Kept the decoration centered and compact so the product reads polished from normal wearing distance.",
      "Let close product photography show stitch quality, fabric texture, and crown shape clearly.",
    ],
  },
  {
    slug: "lightcraft-woven-label-cap",
    client: "Lightcraft",
    category: "Woven-label headwear",
    headline: "A black cap made more finished through the label.",
    summary:
      "Lightcraft's cap shows how a small woven label can give a simple black blank more perceived value. The white label keeps the brand readable, while the stitched border and clean placement make the product feel more like a finished retail piece than a basic promo hat.",
    image: "/images/gallery/hat-feb-img_7680.jpg",
    secondaryImage: "/images/gallery/hat-feb-img_7681.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 48%",
    stats: ["Woven label", "Black cap", "Retail detail"],
    details: [
      "Used a woven-label application where a flat embroidery hit would have felt less dimensional.",
      "Kept the black-and-white system tight so the label has contrast without making the cap busy.",
      "Showed both exterior and interior detail so buyers can judge construction, label scale, and finish.",
    ],
  },
  {
    slug: "fillday-pink-dad-hat",
    client: "Fillday",
    category: "Dad hats",
    headline: "A small embroidered mark carried by color.",
    summary:
      "Fillday's pink cap works because the blank color does most of the personality work. The embroidery stays intentionally light, which lets the hat feel casual, wearable, and brand-specific without needing a bigger graphic.",
    image: "/images/gallery/hat-feb-img_7689.jpg",
    secondaryImage: "/images/gallery/hat-feb-img_7687.jpg",
    imagePosition: "center 48%",
    secondaryPosition: "center 48%",
    stats: ["Dad hat", "Tone-led blank", "Small embroidery"],
    details: [
      "Used a washed pink blank to give the product a point of view before decoration.",
      "Kept the embroidery small and airy so it feels like apparel branding, not a badge.",
      "Relied on simple product angles to show color, shape, and logo scale without overexplaining.",
    ],
  },
  {
    slug: "orange-goods-rope-trucker-sample",
    client: "Orange Goods Rope Sample",
    category: "Custom trucker hats",
    headline: "A sample cap that stacks patch, rope, and trim details.",
    summary:
      "This Orange Goods sample is useful because it shows how a hat can hold multiple custom decisions without losing the product. The patch, rope, side mark, mesh, contrast bands, and fabric choice all work together as a reference for more built-out headwear programs.",
    image: "/images/gallery/hat-feb-img_7728.jpg",
    secondaryImage: "/images/gallery/hat-feb-img_7709.jpg",
    imagePosition: "center 50%",
    secondaryPosition: "center 50%",
    stats: ["Rope detail", "Patch front", "Mesh trucker"],
    details: [
      "Layered multiple custom details while keeping the cap family readable as one product direction.",
      "Used the rope and trim as color accents instead of making every panel compete for attention.",
      "Included front, side, back, and interior proof so the sample can guide client headwear decisions.",
    ],
  },
];

const proofCards = [
  {
    title: "Design-led builds",
    label: "Concept to production",
    body: "When a client needs more than a blank with a logo, we can help shape the graphic direction, product mix, and production-ready details.",
    image: "/images/gallery/design-full-line-000068200009.jpg",
    position: "center 48%",
  },
  {
    title: "Retail-feeling blanks",
    label: "Apparel",
    body: "Better tees, fleece, and wearable goods give the decoration something worth sitting on.",
    image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
    position: "center 44%",
  },
  {
    title: "Custom headwear",
    label: "Headwear",
    body: "Shape, material, patch, embroidery, and color all matter when the goal is a hat people keep reaching for.",
    image: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
    position: "center 42%",
  },
  {
    title: "High-retention goods",
    label: "Accessories",
    body: "Towels, socks, drinkware, bags, and kits can carry a brand long after the first handoff.",
    image: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    position: "center 46%",
  },
];

const processNotes = [
  {
    eyebrow: "01",
    title: "Start with the brand moment",
    body: "We look at where the goods will live: retail shelf, staff kit, launch event, gifting moment, campus program, or customer retention play.",
  },
  {
    eyebrow: "02",
    title: "Pick products that make sense",
    body: "The best case studies are not bigger for the sake of bigger. They are tighter: the right blank, decoration method, quantity, and finish.",
  },
  {
    eyebrow: "03",
    title: "Build proof before production",
    body: "Photography, samples, references, and clear product direction help the final run feel intentional instead of improvised.",
  },
];

const projectSnapshots = [
  {
    client: "Apteka",
    category: "Towels and headwear",
    title: "Beach goods with a real lifestyle use case.",
    body: "A towel and bucket-hat lane works because the products belong in the same world. The branding stays useful, visible, and easy to photograph.",
    image: "/images/gallery/accessories-apteka-towel-267A5393.jpg",
    position: "center 42%",
  },
  {
    client: "GoodOnya",
    category: "Drinkware",
    title: "Reusable bottles with production-floor proof.",
    body: "Clear drinkware needs crisp decoration and honest proof. The production photo makes the bottle feel real before it becomes a giveaway or retail piece.",
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    position: "center 42%",
  },
  {
    client: "Firestone Walker",
    category: "Socks",
    title: "Small-format goods with a reason to keep them.",
    body: "Socks can carry a brand without becoming another tee. They work best when the pattern and product quality make the item feel intentional.",
    image: "/images/gallery/socks-firestone-_mg_0175.jpg",
    position: "center 50%",
  },
  {
    client: "Body Glove",
    category: "Apparel",
    title: "A simple tee finished with the right detail.",
    body: "Not every apparel project needs a huge print. A quieter decoration choice can make a tee feel more wearable and less like a handout.",
    image: "/images/gallery/apparel-bodyglove-tee.jpg",
    position: "center 38%",
  },
  {
    client: "High Street Deli",
    category: "Board shorts",
    title: "Restaurant merch that travels outside the restaurant.",
    body: "The best food-brand goods make sense in the culture around the brand. A strong lifestyle product can carry the identity far past the counter.",
    image: "/images/gallery/board-shorts-high-st-deli-dsc01098-2.jpg",
    position: "center 44%",
  },
  {
    client: "Beachly",
    category: "Socks",
    title: "Soft goods built around everyday retention.",
    body: "Useful small goods work when the handfeel, palette, and design make them worth putting into rotation instead of saving for later.",
    image: "/images/gallery/socks-beachly.jpg",
    position: "center 48%",
  },
  {
    client: "Daybreak Coffee",
    category: "Tote bags",
    title: "A fabric-first tote with a clear coffee-shop read.",
    body: "Patterned fabric can make a familiar tote format feel more ownable before the front print even lands.",
    image: "/images/gallery/accessories-daybreak2.jpg",
    position: "center 48%",
  },
  {
    client: "Jarritos",
    category: "Woven blankets",
    title: "A larger textile that feels like a real gift.",
    body: "Color, texture, fringe, and scale can carry brand value without turning the blanket into a flat billboard.",
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    position: "center 44%",
  },
  {
    client: "Verve Coffee Roasters",
    category: "Headwear",
    title: "A cap that supports the broader retail world.",
    body: "A restrained canvas snapback can round out an apparel and drinkware program without making the assortment feel overdesigned.",
    image: "/images/gallery/hat-feb-img_7440.jpg",
    position: "center 48%",
  },
  {
    client: "Ride & Ridden",
    category: "Patch hats",
    title: "A familiar trucker shape with a stronger front detail.",
    body: "Patch headwear works when the artwork, crown shape, mesh, and brim contrast all feel like one product decision.",
    image: "/images/gallery/hat-feb-img_7538.jpg",
    position: "center 48%",
  },
  {
    client: "Orange Goods",
    category: "Patch headwear",
    title: "A reorderable headwear system with lifestyle proof.",
    body: "The same patch mark can travel across studio photos, outdoor settings, gifting, and sales samples when the base system is simple.",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    position: "center 42%",
  },
  {
    client: "McAlister",
    category: "Graphic apparel",
    title: "Artwork that is judged on the garment, not just the screen.",
    body: "A tee graphic has to survive scale, blank color, placement, and handfeel before it becomes useful merch.",
    image: "/images/gallery/design-graphics-mcalister-088.jpg",
    position: "center 46%",
  },
  {
    client: "Royal Wine",
    category: "Bandanas",
    title: "A lightweight textile with a clear styling role.",
    body: "Bandanas can be inexpensive to carry and easy to gift, but the product works best when the lifestyle use case is visible.",
    image: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    position: "center 42%",
  },
  {
    client: "Oak Essentials",
    category: "Housewares",
    title: "A material-first gift that does not need to shout.",
    body: "A tray can carry premium value through weight, texture, and everyday use instead of relying on a louder logo moment.",
    image: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    position: "center 48%",
  },
  {
    client: "Fish At Sea",
    category: "Beanies",
    title: "A knit accessory lane carried by color and label scale.",
    body: "A beanie program works when the knit texture, palette, and label are all clean enough to repeat across an assortment.",
    image: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    position: "center 50%",
  },
  {
    client: "Reel Life Gear",
    category: "Outdoor headwear",
    title: "A cap shown in the exact place it is meant to live.",
    body: "The boat setting makes the lightweight cap, embroidery color, and outdoor audience read immediately.",
    image: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    position: "center 48%",
  },
  {
    client: "Quality Goods",
    category: "Towels",
    title: "A premium towel detail where material is the proof.",
    body: "For towels, the edge finish, terry texture, weight, and tonal artwork are what make the piece feel worth keeping.",
    image: "/images/gallery/ideas-quality-goods-towel-500gsm.jpg",
    position: "center 48%",
  },
  {
    client: "Ocean & Ocean",
    category: "Screen printed fleece",
    title: "A hoodie with a clean chest hit and stronger sleeve moment.",
    body: "The print story is easy to understand: better fleece first, then placement choices that make the garment feel finished.",
    image: "/images/gallery/design-hero-ocean-ocean-hoodie.jpg",
    position: "center 44%",
  },
  {
    client: "Orange Goods Field Series",
    category: "Patch caps",
    title: "A sample headwear system with real lifestyle proof.",
    body: "Outdoor and on-body photos make the patch-cap system feel repeatable, wearable, and useful as a client reference.",
    image: "/images/gallery/hat-og-big-bear-dscf7571.jpg",
    position: "center 48%",
  },
  {
    client: "Aether Films",
    category: "Embroidered caps",
    title: "A technical wordmark made crisp on navy headwear.",
    body: "The product stays restrained: dark blank, white embroidery, clean scale, and enough close-up proof to judge stitch quality.",
    image: "/images/gallery/hat-feb-img_7674.jpg",
    position: "center 48%",
  },
  {
    client: "Lightcraft",
    category: "Woven-label caps",
    title: "A black cap finished with a clean label detail.",
    body: "A small woven label gives the hat more structure and perceived value than a flat logo placement alone.",
    image: "/images/gallery/hat-feb-img_7680.jpg",
    position: "center 48%",
  },
  {
    client: "Fillday",
    category: "Dad hats",
    title: "A color-led cap where the mark stays intentionally quiet.",
    body: "The washed pink blank carries the personality while the embroidery stays small, simple, and wearable.",
    image: "/images/gallery/hat-feb-img_7689.jpg",
    position: "center 48%",
  },
  {
    client: "Orange Goods Rope Sample",
    category: "Custom truckers",
    title: "A built-out sample cap with patch, rope, and trim details.",
    body: "The sample shows how multiple custom headwear decisions can stack together without making the finished hat feel overworked.",
    image: "/images/gallery/hat-feb-img_7728.jpg",
    position: "center 50%",
  },
];

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
        className="mt-3 text-[2.55rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4.25rem]"
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

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-built-production-dscf1585.jpg"
          position="center 43%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/44" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/50 to-[#1C1C1C]/12" />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/74">
              Real Work
            </p>
            <h1
              className="mt-5 text-[3.45rem] uppercase leading-[0.9] text-[var(--og-orange)] md:text-[5.8rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
              A closer look at real Orange Goods projects: the product choices, visual direction,
              and production details that make branded goods feel worth keeping.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-og inline-flex">
                Start a Project
              </Link>
              <Link href="/gallery" className="btn-og-white inline-flex">
                View Gallery
              </Link>
            </div>
          </div>

          <div className="grid gap-3 rounded-[1.75rem] border border-white/18 bg-white/10 p-4 backdrop-blur">
            {["Strategy before swag", "Better blanks first", "Proof-led production"].map((item) => (
              <div
                key={item}
                className="rounded-[1.15rem] border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/86"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Featured Builds"
            title="Projects with a point of view"
            description="These are not full campaign recaps yet. They are launch-ready project studies built around the clearest local photography and the kind of product proof buyers need to see."
          />

          <div className="mt-9 grid gap-7">
            {featuredCaseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="grid overflow-hidden rounded-[2rem] border border-[#0B32A0]/14 bg-white shadow-[0_24px_70px_rgba(8,30,111,0.08)] lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div
                  className={`relative min-h-[25rem] bg-[#E4DFCD] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={study.image}
                    alt={`${study.client} custom goods by Orange Goods`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                    style={{ objectPosition: study.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/68 via-[#1C1C1C]/8 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                      {study.category}
                    </p>
                    <h3
                      className="mt-2 text-[2.45rem] uppercase leading-none md:text-[3.7rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {study.client}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                  <div>
                    <h2
                      className="text-[2.25rem] uppercase leading-[0.95] text-[var(--og-blue)] md:text-[3.45rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {study.headline}
                    </h2>
                    <p className="mt-5 text-base leading-7 text-[#676767] md:text-lg">
                      {study.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-xl border border-[#0B32A0]/14 bg-[#F7F4ED] px-3 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--og-blue)]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-7 space-y-4 text-sm leading-6 text-[#4f4f4f] md:text-base">
                      {study.details.map((detail) => (
                        <li key={detail} className="border-l-2 border-[#FF7F00] pl-4">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-[9rem_1fr] sm:items-end">
                    <div className="relative min-h-[9rem] overflow-hidden rounded-[1.35rem] bg-[#E4DFCD]">
                      <Image
                        src={study.secondaryImage}
                        alt={`${study.client} project detail`}
                        fill
                        sizes="9rem"
                        className="object-cover"
                        style={{ objectPosition: study.secondaryPosition }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                        Build something similar
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="btn-og inline-flex"
                        >
                          View Case Study
                        </Link>
                        <Link href="/contact" className="btn-og-white inline-flex">
                          Start a Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="More Proof"
            title="The details change by project"
            description="The same standard applies whether the run is apparel, headwear, accessories, drinkware, kits, or a multi-item launch."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[1.65rem] border border-[#0B32A0]/14 bg-[#F7F4ED]"
              >
                <div className="relative min-h-[16rem] overflow-hidden bg-[#E4DFCD]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: card.position }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                    {card.label}
                  </p>
                  <h3
                    className="mt-3 text-[1.9rem] uppercase leading-none text-[var(--og-blue)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#676767]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[#EFE7DA] px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeader
              eyebrow="Project Notes"
              title="More local-photo case studies"
              description="A wider look at the goods library: different product categories, different audiences, and the same bias toward finished pieces people can actually use."
            />
            <p className="max-w-2xl text-base leading-7 text-[#676767] lg:justify-self-end">
              Some projects need a full story. Others need one sharp proof point: a product that
              clearly fits the brand, the moment, and the person who receives it.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectSnapshots.map((snapshot) => (
              <article
                key={`${snapshot.client}-${snapshot.category}`}
                className="group overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/14 bg-white shadow-[0_18px_48px_rgba(8,30,111,0.07)]"
              >
                <div className="relative min-h-[18rem] overflow-hidden bg-[#E4DFCD]">
                  <Image
                    src={snapshot.image}
                    alt={`${snapshot.client} ${snapshot.category} project`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: snapshot.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                      {snapshot.category}
                    </p>
                    <h3
                      className="mt-2 text-[2.1rem] uppercase leading-none"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {snapshot.client}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <h4
                    className="text-[1.85rem] uppercase leading-[0.95] text-[var(--og-blue)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {snapshot.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[#676767] md:text-base">
                    {snapshot.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <article className="relative overflow-hidden rounded-[1.9rem] border-[3px] border-white bg-[#D5BBA2] shadow-[7px_7px_0px_#0B32A0]">
            <div className="relative min-h-[24rem] md:min-h-[31rem]">
              <Image
                src="/images/gallery/merch-graphics-verve-tokyo-tote-024.jpg"
                alt="Orange Goods merch graphics and production direction"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: "center 48%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/76 via-[#1C1C1C]/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                  How we think
                </p>
                <h2
                  className="mt-2 text-[2.5rem] uppercase leading-[0.92] md:text-[3.75rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Better goods
                  <br />
                  need better calls
                </h2>
              </div>
            </div>
          </article>

          <div className="rounded-[1.9rem] border border-[#0B32A0]/14 bg-white p-6 md:p-8">
            <SectionHeader
              eyebrow="Our Role"
              title="Not just order taking"
              description="A good case study usually starts before the order. It starts with the product decisions that make the final goods feel believable."
            />
            <div className="mt-8 grid gap-4">
              {processNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-[1.45rem] border border-[#0B32A0]/12 bg-[#F7F4ED] p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                    {note.eyebrow}
                  </p>
                  <h3
                    className="mt-3 text-[2rem] uppercase leading-none text-[var(--og-blue)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#676767] md:text-base">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <CTASection
        eyebrow="Start Here"
        title="Have a project that should feel like a real case study?"
        description="Send the product idea, quantity, timeline, and any references. We will help narrow the direction and turn it into goods that make sense for the moment."
        buttonLabel="Get a Quote"
        buttonHref="/contact"
        backgroundImage="/images/gallery/full-custom-materials-mg-9406.jpg"
        backgroundImagePosition="center 50%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(8,30,111,0.9),rgba(8,30,111,0.5))]"
      />
    </main>
  );
}
