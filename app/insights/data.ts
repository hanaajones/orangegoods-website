export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  image?: string;
  cropPosition?: string;
};

export const posts: InsightPost[] = [
  {
    slug: "decoration-options-guide",
    title: "Decoration Options Guide: Embroidery, Patches, Prints, and Labels",
    excerpt:
      "A visual guide to the most common merch decoration methods, what each one is best for, and how to choose the right finish for hats, apparel, bags, and custom goods.",
    date: "June 16, 2026",
    category: "Education",
    readTime: "8 min read",
    image: "/images/product/hats/og-patch-detail.jpg",
    cropPosition: "center 45%",
    content: `
      <p>Decoration is the part of custom merch most people notice first, but it is also where a lot of projects get confusing. Embroidery, embroidered patches, woven patches, screen print, puff print, raised embroidery, woven labels, and specialty trims can all look great when they are matched to the right product and artwork. The goal is not to choose the fanciest option. The goal is to choose the decoration method that makes the piece feel intentional, durable, and worth keeping.</p>
      <p>The easiest way to think about decoration is by texture, detail, and use case. Some methods are best for clean logos. Some are better for fine artwork. Some feel premium because they add dimension. Some are better when the design needs to cover a larger area. Here is how the main options compare.</p>

      <figure>
        <img src="/images/product/hats/og100-dad-detail.jpg" alt="Close-up of embroidered detail on a hat" />
        <figcaption>Embroidery gives hats and apparel a textured, durable logo finish.</figcaption>
      </figure>
      <h2>Embroidery</h2>
      <p>Embroidery uses thread stitched directly into the product. It is one of the best choices for hats, polos, outerwear, bags, and pieces that need a clean, long-lasting logo. It adds texture and perceived value, especially on headwear.</p>
      <p>Embroidery works best with simple logos, bold marks, short words, and artwork without tiny details or gradients. If your logo has very small type, thin lines, or shading, the artwork may need to be simplified before it can stitch cleanly.</p>

      <figure>
        <img src="/images/product/hats/og-patch-detail.jpg" alt="Close-up of an embroidered patch on a hat" />
        <figcaption>Embroidered patches have a classic raised-thread look and can be applied to hats, bags, and apparel.</figcaption>
      </figure>
      <h2>Embroidered patches</h2>
      <p>An embroidered patch is made separately and then applied to the product. It keeps the thread texture of embroidery but gives the decoration a more finished, badge-like feel. This is a strong option for hats, jackets, bags, and outdoor or hospitality merch.</p>
      <p>Embroidered patches are great when you want a dimensional front hit or a shape that feels more ownable than standard direct embroidery. They can be more forgiving on certain products because the patch is created separately before application.</p>

      <figure>
        <img src="/images/product/hats/feb-canvas-snapback-interior.jpg" alt="Interior woven label and seam tape detail inside a custom hat" />
        <figcaption>Woven details can hold finer line work and are useful for patches, labels, and interior branding.</figcaption>
      </figure>
      <h2>Woven patches and woven labels</h2>
      <p>Woven patches are made by weaving threads together, not by stitching thread on top of fabric. That means they can hold finer detail, smaller type, and cleaner edges than embroidered patches. They usually feel flatter and more precise.</p>
      <p>Woven labels are smaller woven pieces used for branding details like neck labels, side labels, hem tags, interior hat labels, and seam tape. They are one of the best ways to make merch feel more custom without making the outside too busy.</p>

      <figure>
        <img src="/images/gallery/apparel-verve-gd-tee2.jpg" alt="Printed graphic on a custom T-shirt" />
        <figcaption>Screen printing is ideal for bold apparel graphics, logos, and larger print areas.</figcaption>
      </figure>
      <h2>Screen print</h2>
      <p>Screen printing pushes ink through a screen onto the garment or product surface. It is the standard choice for tees, hoodies, totes, and other flat products with larger artwork. It works especially well for bold graphics, one-color logos, type, and illustrations.</p>
      <p>Screen print is usually the right move when the design needs scale. A big back print, chest graphic, sleeve hit, or tote design will usually feel better printed than embroidered. Ink type, garment fabric, and artwork setup all affect the final hand feel.</p>

      <figure>
        <img src="/images/gallery/apparel-686-hoodie-detail.jpg" alt="Close-up apparel detail showing fabric and printed branding" />
        <figcaption>Puff print and specialty inks add dimension when the design is simple enough to support it.</figcaption>
      </figure>
      <h2>Puff print</h2>
      <p>Puff print is a specialty screen print where the ink expands when heated, creating a raised effect. It can make simple artwork feel more tactile and premium, especially on heavyweight tees and fleece.</p>
      <p>Puff print works best with bold shapes and simple type. Very fine lines, tiny details, and tight spacing can get muddy because the ink expands. When used with restraint, it gives apparel a subtle dimensional hit without the cost or weight of embroidery.</p>

      <figure>
        <img src="/images/product/hats/og130-structured-detail.jpg" alt="Raised embroidery detail on a structured hat" />
        <figcaption>Raised embroidery, often called puff embroidery, adds height and dimension to simple hat artwork.</figcaption>
      </figure>
      <h2>Raised embroidery</h2>
      <p>Raised embroidery, often called puff embroidery, uses foam under the stitches to create height. It is common on structured hats and works best for bold letters, simple logos, and marks with enough space for the raised stitch to stay clean.</p>
      <p>Raised embroidery is not the right fit for every design. Tiny type, detailed icons, thin outlines, and complex marks usually perform better as flat embroidery, woven patches, or another decoration method.</p>

      <h2>Other decoration options</h2>
      <p>Depending on the product, other strong options include leather or faux leather patches, PVC patches, rubber patches, heat transfers, laser engraving, debossing, woven seam tape, custom hang tags, neck prints, and packaging details. These are not always the first choice, but they can add a lot of value when the product and brand call for them.</p>
      <p>The best decoration choice starts with the product, the artwork, the timeline, and the way the merch will be used. If the piece needs to feel retail, patches and labels can help. If it needs a big graphic, screen print is usually stronger. If it needs a clean premium logo, embroidery is often the safest place to start.</p>
      <p>Orange Goods helps choose the decoration method before production so the finished piece matches the brand and the artwork actually works in the real world.</p>
    `,
  },
  {
    slug: "how-to-choose-a-custom-merchandise-company",
    cropPosition: "center 40%",
    image: "/images/product/hats/client-boatsetter-boat.jpg",
    title: "How to Choose a Custom Merchandise Company",
    excerpt:
      "The right merch partner should make your project clearer, not harder. Here is what to watch for before you place an order.",
    date: "April 24, 2026",
    category: "Process",
    readTime: "8 min read",
    content: `
      <p>Choosing a custom merchandise company is not just choosing who can put your logo on a hat. You are choosing the team that will protect your brand in the messy middle: artwork cleanup, blank selection, decoration method, sizing, production timing, freight, quality control, and all the small decisions that turn a good idea into a piece people actually keep.</p>
      <p>The hard part is that a lot of vendors look the same from the outside. Everyone has a catalog. Everyone says they do quality work. Everyone can send a quote. The difference shows up in how they communicate, how they proof, how they handle risk, and whether they understand the difference between cheap merch and useful brand goods.</p>
      <h2>Start with response quality</h2>
      <p>Slow replies are not automatically a deal breaker. Shops get busy. Production teams are human. But if a company takes days to answer basic questions before you have paid, that is usually a preview of what happens when your deadline gets close. Good merch requires back-and-forth. You need someone who can tell you what is possible, what is risky, and what they need from you to keep the job moving.</p>
      <p>Look for replies that are specific. A strong partner will ask what the merch is for, when you need it, how many pieces you need, whether you have vector art, where the goods are going, and what kind of quality bar you are trying to hit. A weak partner sends a giant catalog link and waits for you to figure it out.</p>
      <h2>Red flag: no real proofing process</h2>
      <p>A proof is not a formality. It is the moment where the idea becomes production instructions. It should show the product, logo placement, imprint size, decoration method, thread or ink colors, and any important notes about limitations. If the vendor does not clearly require your approval before production, you are carrying risk you should not be carrying.</p>
      <p>Ask how proofs are handled. Ask if you will see a digital proof before production. Ask whether physical samples are available when the project calls for them. Ask what happens if the proof is approved and the final result does not match it. The answer should be plain. If the process sounds loose, the finished goods may be loose too.</p>
      <h2>Red flag: suspiciously cheap samples</h2>
      <p>Samples are useful, but cheap samples can create false confidence. A single decorated sample made slowly and carefully is not always the same thing as a 500-piece production run. Blank samples are even more limited: they tell you about fit and hand feel, but not about imprint durability, embroidery density, or registration. When a vendor pushes cheap samples without explaining what they do and do not prove, be careful.</p>
      <p>Better sample guidance sounds like this: for this timeline, start with blank samples so we can confirm the product; for this decoration, a pre-production sample is worth it; for this budget, a digital proof and a known blank are enough. The point is not to sample everything. The point is to use sampling intelligently.</p>
      <h2>Green flag: a human who owns the job</h2>
      <p>Custom merch has too many handoffs to run well without ownership. Sales, design, sourcing, production, decoration, packing, and shipping all touch the outcome. You want a human contact who understands the whole job, not a ticket queue where every message starts over.</p>
      <p>A good project lead will tell you what they are checking and why. They will flag problems early: your logo has lines too thin for embroidery, the bottle you like is backordered, the low-cost tee will shrink more than you want, the full-wrap print needs a different art setup. That kind of friction is valuable. It means someone is paying attention before money and time get burned.</p>
      <h2>Green flag: production transparency</h2>
      <p>You do not need every factory detail, but you should understand where the work is happening and what the timeline depends on. Is the job being decorated locally? Is the blank shipping from a domestic warehouse? Is cut and sew involved? Are there imported components? Is the delivery date based on proof approval, payment date, or artwork receipt?</p>
      <p>Transparency also means honest tradeoffs. Sometimes the best answer is a premium blank decorated locally. Sometimes it is a fully custom piece built from scratch. Sometimes the right move is reducing the color count, changing the placement, or choosing a different product so the job lands on time. A good company will not pretend every option is equally fast, equally durable, or equally affordable.</p>
      <h2>Questions to ask before you order</h2>
      <p>Ask these questions early: What is the minimum order? What files do you need? Can I approve a proof before production? What decoration method do you recommend and why? What is the realistic timeline after proof approval? Are taxes, freight, setup, digitizing, and packaging included in the quote? What happens if a product is out of stock? Do you inspect the goods before they ship?</p>
      <p>The quality of the answers matters more than the exact wording. You are looking for clarity. If a company can explain the process in normal language, they probably understand it. If they hide behind vague phrases like premium quality and quick turnaround without details, keep asking.</p>
      <h2>Why a local California team matters</h2>
      <p>Local does not automatically mean better, but it can make a real difference. In California, especially around Los Angeles, there is deep access to apparel blanks, embroidery, screen printing, sewing, finishing, fulfillment, and creative production. When your team is close to the work, problems are easier to catch. Samples can move faster. A person can walk into a shop, check a thread color, inspect a print, or solve a packing issue without waiting through a long chain of emails.</p>
      <p>For California brands, hospitality groups, agencies, startups, and events, local context also helps. The merch has to feel right for the audience. A hat for a coastal restaurant, a tee for a wellness brand, and drinkware for a tech event should not all feel like they came from the same corporate catalog. Regional taste matters.</p>
      <h2>The Orange Goods difference</h2>
      <p>Orange Goods is built for brands that care about how the finished piece feels in real life. We start with the use case, not the catalog. Who is getting this? Where will they wear it? Is it a launch gift, staff uniform, retail item, trade show piece, or client thank-you? From there we recommend the product, decoration method, and production path that actually fit.</p>
      <p>Our Ready Made path uses premium blanks and proven local decoration for projects that need to move fast with a 100-piece minimum. Our OG Crafted path is for fully custom pieces: custom fabric, shape, trims, labels, and packaging. In both cases, we keep the process human. You get clear quotes, clean proofs, practical guidance, and production visibility. The goal is simple: make merch your customers, team, or guests are glad to receive.</p>
    `,
  },
  {
    slug: "custom-branded-drinkware",
    cropPosition: "center center",
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    title:
      "Custom Branded Drinkware: How to Choose Logo Water Bottles People Actually Reuse",
    excerpt:
      "Drinkware can be one of the highest-use branded items you make, but only when the bottle, finish, and logo application are chosen with care.",
    date: "April 17, 2026",
    category: "Drinkware",
    readTime: "9 min read",
    content: `
      <p>Custom branded drinkware works because it lives in the daily routine. A good bottle sits on a desk, rides in a car cup holder, goes to the gym, shows up at the beach, and comes back to the office the next day. That repeated use is the whole point. A cheap bottle that leaks, dents, tastes metallic, or feels awkward in the hand does not create impressions. It creates a reason to throw it away.</p>
      <p>The best logo water bottles feel like something a person would buy for themselves. They do not need to be loud. They need to be useful, comfortable, durable, and aligned with the brand. If you get those basics right, drinkware can carry your logo for years.</p>
      <h2>Why drinkware earns its spot</h2>
      <p>Drinkware has a strong cost-per-use because it solves an everyday problem. People need water at work, in the car, on campus, at events, and during travel. Unlike a flyer or a one-time giveaway, a quality tumbler or bottle keeps showing up in public. Every reuse is another quiet brand impression.</p>
      <p>It also works across audiences. Employees appreciate good desk drinkware. Customers use bottles when the size and lid make sense. Hospitality brands can turn a simple mug into a retail piece. Gyms, wellness brands, schools, real estate teams, breweries, and agencies all use drinkware because it feels practical instead of promotional when it is done well.</p>
      <h2>Tumbler, bottle, or mug?</h2>
      <p>Start with the setting. Tumblers are strong for commuters, desk use, and gifting. They usually feel more premium, especially with stainless steel construction and a good lid. They are a natural fit for coffee, iced drinks, and daily office use. If your audience moves between home, car, and office, a tumbler is often the safest bet.</p>
      <p>Water bottles are better for fitness, events, outdoor use, schools, and travel. Look at capacity, lid style, carry handle, and whether the bottle fits standard cup holders. A 32-ounce bottle can be impressive, but it may be too large for everyday use. A 20- to 24-ounce bottle is often easier to carry and more likely to stay in rotation.</p>
      <p>Mugs still matter. A good ceramic mug or insulated camp mug can feel personal, especially for cafes, restaurants, hotels, studios, and client gifting. The risk is that mugs are common, so quality and design have to do more work. Shape, weight, glaze, handle comfort, and decoration placement all matter.</p>
      <h2>Decoration methods: what changes the result</h2>
      <p>Laser engraving is one of the cleanest options for stainless steel drinkware. It cuts into the surface coating or metal, so the mark feels permanent and refined. It is great for simple logos, small type, and premium gifts. The tradeoff is that color is limited. You are usually working with the exposed material underneath, not a printed ink color.</p>
      <p>Screen printing is strong when you want a bold color hit. It works well for logos, slogans, simple artwork, and one- or two-color designs. The finish depends on the product coating, the ink system, and the surface shape. On curved drinkware, placement and registration need attention. A good proof should show imprint area and scale clearly.</p>
      <p>Full wrap decoration is for a bigger visual statement. It can make drinkware feel retail-ready when the artwork deserves the space. Full wraps need better art preparation because seams, taper, handles, lids, and curvature can affect the result. This is not the place for a tiny logo stretched around a bottle. Use the full canvas with intention.</p>
      <h2>Quality markers to check</h2>
      <p>For stainless drinkware, look for double-wall vacuum insulation, a lid that seals cleanly, a finish that resists scratching, and a shape that feels balanced when full. Check whether the lid is dishwasher safe, whether the body is hand-wash only, and whether replacement lids are available. A bottle can look great in a photo and still be annoying to use if the mouth opening is too narrow or the lid is hard to clean.</p>
      <p>For ceramic mugs, weight and glaze matter. A mug that feels too light can read cheap. A mug that is too heavy may sit unused. Handle comfort is overlooked until someone tries to drink from it every morning. For plastic or sport bottles, focus on BPA-free materials, squeeze feel, lid security, and odor resistance.</p>
      <h2>Logo size is not the same as brand impact</h2>
      <p>A huge logo does not make a bottle more effective. In many cases, the most reusable drinkware is the piece with a restrained mark, a strong color choice, and a product people would already want. Think about how the item will look on a conference table, in a client meeting, or in a kitchen cabinet. If it feels too promotional, it may not get used.</p>
      <p>Brand impact can come from color, finish, packaging, a secondary mark, or a small line of copy. A tonal engraving can feel more premium than a bright print. A small front logo with a larger back graphic can feel more wearable in the drinkware sense. The right approach depends on the brand and the audience.</p>
      <h2>Ready Made vs custom drinkware</h2>
      <p>Orange Goods Ready Made is the right path when you want proven drinkware options decorated with your logo and produced efficiently. We help narrow the choices to bottles, tumblers, and mugs that meet the quality bar, then handle proofing and production. This is usually the right call for events, employee gifts, client mailers, and brand launches.</p>
      <p>Fully custom drinkware can make sense when the product itself needs to be unique: custom color matching, special packaging, uncommon shapes, retail programs, or large runs where the unit needs to feel proprietary. Custom gives you more control, but it also adds development time, higher minimums, and more decisions. For many brands, a premium Ready Made piece with the right decoration is the smarter move.</p>
      <h2>Minimums and planning</h2>
      <p>For OG drinkware projects, plan around a 100-piece minimum and build enough time for product selection, proof approval, production, and shipping. If the event date is firm, work backward from the in-hand date, not the order date. Drinkware is dense and can be expensive to ship, so freight should be part of the budget conversation early.</p>
      <p>The best bottle is the one people keep reaching for. Choose the product for daily use, choose the decoration for durability, and keep the design honest to the brand. That is how logo drinkware becomes more than a giveaway.</p>
    `,
  },
  {
    slug: "branded-merchandise-for-small-business",
    cropPosition: "center 30%",
    image: "/images/gallery/apparel-verve-gd-tee.jpg",
    title:
      "Branded Merchandise for Small Business: What Actually Works and What to Skip",
    excerpt:
      "Small business merch needs to work harder. Start with pieces people wear, use, and remember instead of filling a table with throwaways.",
    date: "April 10, 2026",
    category: "Small Business",
    readTime: "8 min read",
    content: `
      <p>Branded merchandise for a small business has to earn its budget. You do not have unlimited room for experiments, and you probably do not have a warehouse waiting for slow-moving inventory. The goal is not to make every possible item with your logo on it. The goal is to make a focused set of pieces that people actually want, that fit your brand, and that support a real business moment.</p>
      <p>Good merch can help a small business look more established, reward loyal customers, outfit staff, sell a retail add-on, or turn a local event into something memorable. Bad merch does the opposite. It burns budget, clutters storage, and quietly tells people the brand did not think very hard about what they were handing out.</p>
      <h2>Start with the budget reality</h2>
      <p>Small runs cost more per piece than large runs. That is normal. Setup, art prep, proofing, decoration, and project management all exist whether you make 100 pieces or 10,000. The mistake is trying to fight that reality by choosing the cheapest possible product. A low-cost tee that no one wears is not cheaper. It is just waste with a logo.</p>
      <p>Instead, set a realistic budget and decide what the merch needs to do. If the goal is staff uniforms, prioritize comfort, fit, and reorderability. If the goal is a customer gift, prioritize perceived value. If the goal is resale, think like a retail buyer: silhouette, fabric, art, sizing, margin, and display all matter.</p>
      <h2>What gets worn</h2>
      <p>People wear merch when the blank feels right, the design feels wearable, and the brand has some emotional pull. The logo does not have to disappear, but it should not make the person feel like a walking ad unless that is the point. For most small businesses, the strongest pieces are simple: a good tee, a good hat, a sweatshirt when the budget allows, and a tote or bottle if it fits the audience.</p>
      <p>Fit matters more than many brands expect. A boxy heavyweight tee says something different than a soft retail tee. A structured cap says something different than an unstructured dad hat. A hoodie that feels substantial can become a favorite. A thin one becomes an emergency layer in the trunk. Your product choice is part of your brand language.</p>
      <h2>What becomes drawer trash</h2>
      <p>Skip items that only exist because they are cheap. Ultra-thin tees, scratchy hats, flimsy totes, tiny plastic gadgets, and novelty items with no real use usually end up in a drawer, a junk bin, or the trash. The same goes for products that do not match your business. A premium coffee shop does not need bargain pens. A design studio probably should not hand out a generic stress ball. A fitness brand should not make a bottle that leaks.</p>
      <p>Also be careful with overly specific event dates. A dated piece can be great when it is collectible, but it can also expire immediately. If you are making a small run, consider whether the design can live beyond the event. A tee that says summer launch 2026 may be fun for one weekend. A stronger graphic tied to the same launch may keep working for years.</p>
      <h2>Event merch vs retail merch</h2>
      <p>Event merch has a clear job: create a moment, help people participate, and keep the brand visible after the event. It can be simpler and more direct. Staff tees, volunteer hats, tote bags, drinkware, and limited giveaway items can all work if they are useful during or after the event. The key is planning around distribution. How will people receive it? Will they carry it easily? Does it need size options? Does it need individual packaging?</p>
      <p>Retail merch has a different standard because people are paying for it. The product has to stand on its own. The art needs to feel intentional. The blank needs to justify the price. Labeling, folding, hang tags, size stickers, and display can affect whether the merch feels like an afterthought or a real product line.</p>
      <h2>Start small, but do it right</h2>
      <p>A 100-piece run is a practical starting point for many small businesses. It is enough to get real use, support a launch, sell through a small retail drop, or outfit a team without overcommitting. Starting small also teaches you what your audience responds to. Which sizes moved fastest? Did people choose hats over tees? Did the natural tote sell better than black? Did staff ask for another color?</p>
      <p>Small does not have to mean basic. With the right blanks and decoration, a 100-piece order can feel polished. You can mix sizes, choose a better garment, add a woven label, or create a clean proofing process that avoids surprises. The discipline is choosing fewer things and making them stronger.</p>
      <h2>Hats and tees are the core</h2>
      <p>For most small businesses, hats and tees are the strongest place to begin. They are familiar, wearable, easy to explain, and useful across staff, customers, and events. A good tee gives you a walking billboard without feeling forced when the graphic is right. A good hat often gets more repeat wear because sizing is easier and the logo placement is natural.</p>
      <p>From there, expand only when there is a reason. Totes work well for markets, retail shops, bookstores, cafes, wellness studios, and events where people carry things. Drinkware works for offices, gyms, cafes, and customer gifting. Hoodies are great when the brand has enough pull or the audience will pay for the quality. More items do not automatically make the program better.</p>
      <h2>The worth keeping standard</h2>
      <p>Before you order, ask one hard question: would someone keep this if it did not have our logo on it? If the answer is no, fix the product, the artwork, or the plan. That standard cuts through a lot of noise. It pushes you toward better blanks, cleaner design, smarter decoration, and merch that respects the person receiving it.</p>
      <p>Orange Goods helps small businesses make focused merch that feels useful and intentional. We can start with 100 pieces, recommend hats and tees that match your budget, and build from there when the demand is real. The best small business merch is not the biggest order. It is the piece someone grabs again because it feels like theirs.</p>
    `,
  },
  {
    slug: "custom-embroidered-hats",
    cropPosition: "center 35%",
    image: "/images/product/hats/og-patch-front.jpg",
    title:
      "Custom Embroidered Hats: How to Make Branded Headwear People Actually Wear",
    excerpt:
      "A good branded hat is about more than a logo. Structure, fit, thread, digitizing, and decoration placement all decide whether it gets worn.",
    date: "April 3, 2026",
    category: "Hats",
    readTime: "9 min read",
    content: `
      <p>Custom embroidered hats are one of the strongest branded merchandise plays because they are visible, practical, and easy to wear when the fit is right. A good hat can stay in someone's rotation for years. A bad hat gets tried on once, judged in the mirror, and left behind. The difference is rarely one big decision. It is the combination of silhouette, material, structure, decoration, and how well the logo was prepared for embroidery.</p>
      <p>Headwear is personal. People know quickly whether a hat works for them. That is why the best branded hats feel like real retail headwear first and promotional merchandise second.</p>
      <h2>Embroidery vs screen print for hats</h2>
      <p>Embroidery is the standard for most branded hats because it adds texture, durability, and perceived value. Thread has dimension. It catches light. It can make a simple mark feel finished. For logos, monograms, wordmarks, and small front placements, embroidery is usually the cleanest answer.</p>
      <p>Screen printing can work on hats, especially foam truckers, flat panels, and certain cotton styles, but it has limits. It is flatter and can feel more casual. It may be right for larger graphics, event-specific pieces, or designs that need fine detail embroidery cannot hold. The product surface matters. A curved, seamed front panel is not the same as a flat foam front.</p>
      <p>The rule is simple: match the decoration to the hat and the artwork. Do not force embroidery onto a design with tiny type and gradients. Do not screen print when the brand needs a premium, textured finish. A good merch partner will tell you when the art needs to change for the method.</p>
      <h2>Structured vs unstructured</h2>
      <p>Structured hats have support in the front panels, so they hold their shape when worn. They often feel cleaner, more athletic, and more polished. They are strong for corporate teams, golf, hospitality uniforms, sports-adjacent brands, and anyone who wants a crisp front logo.</p>
      <p>Unstructured hats are softer and more relaxed. They sit closer to the head and feel broken-in faster. Dad hats, low-profile caps, washed cotton styles, and relaxed 5-panels are all common choices. They work well for lifestyle brands, restaurants, coffee shops, creative teams, and brands that want a casual Southern California feel.</p>
      <p>Neither is automatically better. The wrong structure for your audience is the issue. A stiff crown can feel too formal for a surf-adjacent brand. A floppy unstructured cap can feel too casual for a premium client gift. Try to choose the hat the recipient would already buy.</p>
      <h2>Fit matters more than the logo</h2>
      <p>Fit is the reason hats get worn or rejected. Crown height, bill shape, closure, profile, and fabric all affect how a hat feels. A high-profile trucker has a very different attitude than a low-profile cotton cap. A flat bill feels different than a pre-curved bill. Snapback, strapback, fitted, and adjustable buckle closures all send different signals.</p>
      <p>When ordering for a broad group, adjustable styles are usually safest. For retail, you can take a sharper point of view because the customer chooses the style. For staff uniforms, durability and washability matter. For gifting, neutral colors and wearable shapes tend to win.</p>
      <h2>Digitizing is not just file conversion</h2>
      <p>Embroidery starts with digitizing, which turns artwork into stitch instructions. Good digitizing decides stitch direction, density, underlay, pull compensation, and how small details will hold on the actual hat. A bad digitized file can make a good logo look rough. Letters close up. Circles distort. Fine lines disappear. Thread piles up and makes the front feel stiff.</p>
      <p>Hat embroidery is especially technical because the surface is curved and often seamed. The machine usually sews from the center out to control distortion. Small type and thin outlines need to be simplified. A proof should show placement and size, but the production team also needs to know the limits of the thread and the panel.</p>
      <h2>Backing, thread, and durability</h2>
      <p>Backing supports the embroidery while the hat is being sewn and helps the finished design keep its shape. The wrong backing can create puckering or stiffness. Thread choice matters too. Standard polyester thread is durable and colorfast. Specialty threads can look interesting, but metallic or unusual finishes may not be right for every logo or every production timeline.</p>
      <p>Durability also depends on stitch count. More stitches are not always better. Too much density can make the embroidery heavy, especially on lightweight hats. Clean art, smart sizing, and proper digitizing usually matter more than trying to force every detail into thread.</p>
      <h2>Patch options</h2>
      <p>Patches are a strong option when the artwork has detail, when you want a dimensional retail feel, or when the hat material is not ideal for direct embroidery. Woven patches can hold finer detail than embroidery. Embroidered patches feel classic and textured. Leather, faux leather, PVC, and rubber patches can work when they match the brand.</p>
      <p>Patch shape and placement should feel intentional. A standard rectangle can look clean, but a custom shape can make the piece feel more ownable. Side patches, back hits, and small woven labels can add detail without making the front too busy.</p>
      <h2>Ready Made vs OG Crafted</h2>
      <p>Orange Goods Ready Made uses premium blank hats decorated with your artwork. It is the right path for fast, sharp headwear with a 100-piece minimum. You can often mix and match styles as long as the decoration plan stays consistent. That means a project might include structured caps, unstructured caps, and truckers for different people without starting from scratch.</p>
      <p>OG Crafted is for fully custom headwear. That can include custom panels, fabric, bill shape, interior taping, labels, closures, patches, and packaging. It gives you more control and a more proprietary result, but it also requires more development time and planning. For many brands, Ready Made is the practical place to start. For larger programs or retail lines, Crafted can take the product further.</p>
      <p>The best branded hat is not the one with the biggest logo. It is the one that fits right, feels right, and carries the brand in a way people are comfortable wearing. Get the blank right, respect the embroidery process, and keep the design wearable.</p>
    `,
  },
  {
    slug: "custom-tote-bags-with-logo",
    cropPosition: "center center",
    image: "/images/gallery/bags-boatsetter-tote.jpg",
    title:
      "Custom Tote Bags With Logo: What Makes Branded Canvas Tote Bags Worth Keeping",
    excerpt:
      "A tote can be a useful daily carry or a forgettable giveaway. Canvas weight, stitching, handles, print quality, and finishing decide where it lands.",
    date: "March 27, 2026",
    category: "Totes",
    readTime: "8 min read",
    content: `
      <p>Custom tote bags with a logo work because they are useful in public. A good tote goes to the farmers market, the office, the gym, the beach, the bookstore, the trade show floor, and the trunk of the car. It carries your brand while carrying something real. That is why totes have stayed relevant even as other giveaway items come and go.</p>
      <p>The catch is that not all totes are worth keeping. A thin bag with weak stitching and a giant logo may technically be merch, but it will not earn much use. A well-built canvas tote with the right size, handle length, and decoration can feel like a small retail product. That is the standard to aim for.</p>
      <h2>Why totes work for brand gifting</h2>
      <p>Totes are easy to understand. They do not require sizing. They are useful across ages and industries. They can hold other gifts, event materials, retail purchases, or daily essentials. For brands, they are also one of the few merch items that naturally creates visibility without asking someone to wear apparel.</p>
      <p>They are especially strong for hospitality, food and beverage, wellness, education, design, real estate, conferences, markets, and retail. A cafe tote can become a neighborhood signal. A hotel tote can become a beach bag. A studio tote can become a daily laptop-and-notebook carry. The more naturally it fits the recipient's life, the more often it shows up.</p>
      <h2>Canvas weight matters</h2>
      <p>Canvas weight is one of the first quality signals. Lightweight cotton totes can be fine for simple event handouts, but they often feel temporary. Midweight canvas gives the bag more structure and durability without becoming too expensive. Heavy canvas feels more premium and retail-ready, but it costs more and may be too stiff for certain uses.</p>
      <p>Think about what the bag needs to carry. If it is holding brochures for a one-day event, a lighter tote may be enough. If it is meant to carry groceries, bottles, books, or everyday gear, step up the weight. A bag that stretches, sags, or tears under normal use is not doing the brand any favors.</p>
      <h2>Stitching and construction</h2>
      <p>Look at the seams, handle attachment, bottom shape, and overall finish. Reinforced stress points matter because handles take the most abuse. Box stitching or bar tacks can add strength. A flat, basic tote may be enough for a small giveaway, but a gusseted tote gives more volume and stands up better when filled.</p>
      <p>Construction also changes the perceived value. A lined tote, interior pocket, zipper, snap, contrast handles, or custom label can move the piece from giveaway to retail. You do not need every detail. You need the right details for the purpose. A clean, sturdy canvas tote with good handles often beats an overbuilt bag that does not match the audience.</p>
      <h2>Screen print vs embroidery</h2>
      <p>Screen printing is the most common decoration method for canvas totes. It is strong for logos, type, illustrations, and bold graphics. It gives you scale and color control, especially on flat cotton surfaces. For larger front graphics, screen print is usually the right choice. It can feel clean, graphic, and very on-brand when the artwork is prepared well.</p>
      <p>Embroidery can make a tote feel more premium, but it is better for smaller marks, monograms, patches, or simple logos. Large embroidered areas can get expensive and heavy. Fine detail may not hold well on loose canvas. When embroidery is used with restraint, it can create a nice retail finish.</p>
      <p>Full-color transfers and specialty methods can also work, but durability and hand feel matter. A big plastic-feeling transfer on a soft canvas bag may make the tote less enjoyable to use. The decoration should support the bag, not fight it.</p>
      <h2>Retail finishing changes the read</h2>
      <p>If the tote is being sold, gifted to clients, or included in a premium kit, finishing matters. Folding, hang tags, belly bands, woven labels, inner tags, and simple packaging can make the bag feel considered. A tote thrown loose in a box can still be useful, but a finished tote feels more like a product.</p>
      <p>Retail finishing is also a place to add brand detail without overprinting the bag. A small woven label, a custom hang tag, or a printed inside message can carry personality while keeping the outside wearable. This is useful when the main logo needs to stay clean.</p>
      <h2>Size and handle length</h2>
      <p>Size decisions should come from use. A small tote is good for light retail, books, wine, coffee, or event materials. A larger tote works for groceries, beach use, gym gear, and travel. Gussets add capacity and make the bag easier to pack. If the tote needs to hold boxed goods, bottles, or folded apparel, check dimensions before ordering.</p>
      <p>Handle length is just as important. Short handles are hand-carry only. Longer handles can go over the shoulder, which makes the bag more useful for daily life. If the audience will be walking around a conference or market, shoulder carry is usually better. If the tote is a small retail bag, short handles may be fine.</p>
      <h2>Color and artwork choices</h2>
      <p>Natural canvas is classic, but it is not the only answer. Black, navy, red, green, and custom-dyed options can make a tote feel more connected to the brand. Ink color should consider contrast and wear. A subtle tonal print can feel premium, while a bold orange or blue mark can create strong visibility. The right move depends on whether the tote is meant to be quiet and stylish or loud and event-driven.</p>
      <p>Keep the artwork wearable. A tote has a large print area, but that does not mean every inch needs to be filled. Strong type, a simple illustration, a well-placed logo, or a front-and-back concept can all work. Design it like something someone would choose to carry in public.</p>
      <h2>Minimums and the OG approach</h2>
      <p>For Orange Goods tote projects, plan around a 100-piece minimum. That quantity gives enough room for a proper production run while staying realistic for events, small retail drops, staff gifts, and customer programs. We help choose the right canvas weight, size, handle length, and decoration method, then proof the artwork before production.</p>
      <p>A tote is only valuable if it gets used. Build it with real-life carry in mind, choose materials that can handle the job, and keep the design worth showing in public. That is how a logo tote becomes a keeper instead of another bag at the back of the closet.</p>
    `,
  },
  {
    slug: "custom-hats-for-restaurants-and-bars",
    title: "Custom Hats for Restaurants and Bars",
    excerpt: "Why a well-made hat is one of the best merch plays a food and beverage brand can make — and how to do it right.",
    date: "May 2, 2026",
    category: "Food & Beverage",
    readTime: "6 min read",
    image: "/images/gallery/hat-client-trucker-patch.jpg",
    cropPosition: "center 30%",
    content: `
      <p>Restaurants and bars have something most brands spend years trying to build: a community of people who genuinely care about the place. A great hat taps into that. It turns regulars into walking ambassadors and gives the staff something worth wearing on days off.</p>
      <p>The strongest restaurant hats are not generic. They feel like they belong to the place. A dive bar hat looks different from a fine dining hat. A coffee shop hat is different from a BBQ joint hat. Getting that right starts with understanding what the brand actually communicates — not just the logo, but the vibe, the crowd, and what the place means to its regulars.</p>
      <h2>Staff hats vs merch hats</h2>
      <p>These are two different briefs. A staff hat needs to be durable, comfortable for long shifts, and fit a wide range of head sizes. A merch hat needs to look good enough that someone pays money for it and wears it outside. Sometimes one hat can serve both roles, but often it is worth separating them. Staff hats can prioritize function. Merch hats should prioritize desirability.</p>
      <p>For staff, structured caps with adjustable closures tend to work best. They are easy to size, hold their shape through a service, and can be ordered in consistent quantities as the team grows. For merch, an unstructured dad hat, a bucket hat, or a premium curved brim can feel more intentional and retail-worthy.</p>
      <h2>Logo placement and art direction</h2>
      <p>The front panel of a hat is valuable real estate. A clean embroidered logo there is always a safe move. But restaurants with strong brand identities often do more — a mascot, a phrase the regulars know, a skyline detail, a graphic that tells the story of the place without saying the name. Some of the best bar hats have art that someone would wear even if they had never visited, because the design is just that good.</p>
      <p>Back hits, side panels, and underbrim printing are all options worth considering. A small hit on the back — a year, a neighborhood, a tagline — can turn a simple hat into something that feels complete. Underbrim color or print is a detail that regulars notice even if newcomers do not.</p>
      <h2>Quantity and reorder planning</h2>
      <p>Most restaurant hat programs start at 100 pieces. That is enough to outfit a full staff, set aside inventory for the bar or host stand, and see how the merch moves. The key is planning a reorder timeline before the first run sells out. A hat that is consistently out of stock trains regulars to stop asking. Keep at least a few months of stock on hand and track what sizes move fastest.</p>
      <p>If the hat is good, it will sell. Bars with strong local followings have moved hundreds of hats through the counter alone, with no online store, no ads, and no real effort beyond stacking them near the register. The product does the work when the design is right and the quality justifies the price.</p>
      <h2>Pricing and margin</h2>
      <p>A quality branded hat can retail for $30–$45 and still carry a healthy margin at 100 pieces. The key is not chasing the cheapest blank. A hat that sells for $35 with great embroidery on a strong blank is a better business move than a $28 hat on a flimsy blank that people wear once. Price for the product, not the markup. Regulars will pay for quality if the design earns it.</p>
    `,
  },
  {
    slug: "difference-between-screen-printing-and-embroidery",
    title: "Screen Printing vs Embroidery: Which One Is Right for Your Project",
    excerpt: "The two most common decoration methods for branded apparel, explained simply — with guidance on when to use each.",
    date: "May 8, 2026",
    category: "Process",
    readTime: "7 min read",
    image: "/images/gallery/apparel-686-hoodie-detail.jpg",
    cropPosition: "center 50%",
    content: `
      <p>Most custom apparel projects come down to a choice between two decoration methods: screen printing and embroidery. Both are proven. Both can look great. The right call depends on the product, the design, the quantity, and what the finished piece needs to do.</p>
      <h2>Screen printing</h2>
      <p>Screen printing pushes ink through a mesh screen directly onto the fabric. Each color in the design requires its own screen, which is why setup costs increase with color count. Once the screens are made, the per-piece cost drops quickly at volume. It is the best method for large prints, bold graphics, and high quantities.</p>
      <p>Screen printing shines on tees, hoodies, totes, and other flat fabric surfaces. It handles large areas of color well, can do photographic halftones, and produces a soft, flat result when done right. Discharge printing — a variant that removes dye from the fabric instead of sitting on top — produces an even softer, more vintage feel and works especially well on pigment-dyed and colored blanks.</p>
      <p>The tradeoff is setup. A 6-color screen print has six screens to make, which adds cost to small runs. If you are printing 24 tees with a 4-color design, the math may not work in your favor. Screen printing is typically best at 48 pieces or more, and becomes significantly more cost-effective at 100+.</p>
      <h2>Embroidery</h2>
      <p>Embroidery uses a needle and thread to stitch the design directly into the fabric. It produces a dimensional, textured result that reads as premium — which is why it dominates the hat market and is standard for polo shirts, staff jackets, and anything that needs to look sharp in person.</p>
      <p>The setup cost for embroidery is a digitizing fee — a one-time charge to convert the artwork into a stitch file. After that, the per-piece cost is driven by stitch count, not color count. A simple one-color logo and a complex five-color logo cost the same to digitize if they have similar stitch counts.</p>
      <p>Embroidery is the right call for hats, structured garments, polos, and anything that needs to hold up through heavy washing. It is not ideal for large coverage areas — a full-chest graphic with embroidery would take too long to stitch and would add too much weight to the fabric. For logos, wordmarks, and small hit placements, it is usually the right choice.</p>
      <h2>How to decide</h2>
      <p>Start with the product. Hats almost always get embroidery. Tees and totes usually get screen printing. Hoodies can go either way depending on the placement and design. Then look at the design itself. Fine lines, gradients, and photographic detail favor screen printing. Bold shapes, wordmarks, and anything that benefits from texture favor embroidery. Finally, consider quantity and budget. Small runs with complex screen prints may be better served by DTG (direct-to-garment) printing, which has no setup costs but different texture and durability characteristics.</p>
      <p>When in doubt, ask. The right decoration method is a practical question with a clear answer once you know the product, design, and volume.</p>
    `,
  },
  {
    slug: "custom-merch-for-breweries-and-taprooms",
    title: "Custom Merch for Breweries and Taprooms",
    excerpt: "Brewery merch is one of the few product categories where fans actively seek it out. Here is how to make the most of it.",
    date: "May 14, 2026",
    category: "Food & Beverage",
    readTime: "6 min read",
    image: "/images/gallery/drinkware-goodoonya1.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Craft beer fans buy merch. This is not aspirational — it is a documented behavior pattern. Walk into any taproom with a decent hat or tee, display it near the register, price it fairly, and it will move. The challenge is not demand. The challenge is making something good enough that people want it.</p>
      <h2>What sells in a taproom</h2>
      <p>Hats and tees consistently outperform everything else. A well-made hat with a clean embroidered logo can sell for $35–$45 and move steadily without promotion. A tee with the right blank and a strong print follows close behind. Pint glasses and drinkware sell well in the taproom but are harder to move outside of it. Hoodies and crewnecks sell best in fall and winter and can command $65–$85 at retail.</p>
      <p>The key insight is that brewery merch works because the brand has emotional resonance. People are already sitting in the space, enjoying a pint, feeling good. The hat on the wall becomes part of that feeling. You do not need to sell it aggressively — you just need to make it visible and make it good.</p>
      <h2>Artwork and brand identity</h2>
      <p>Breweries with strong visual identities — a mascot, an illustration style, a consistent color palette — have a natural advantage in merch. The artwork does the heavy lifting. A well-illustrated label graphic translates directly onto a tee. A bold wordmark works as a clean embroidered hit on a hat. If the brand is still developing its visual identity, merch is actually a good forcing function. It creates a reason to invest in that work.</p>
      <p>Seasonal releases are also opportunities. A limited hat or tee tied to a popular seasonal release can create urgency and sell through quickly. Fans of the beer become fans of the piece, and the limited nature makes it more collectible.</p>
      <h2>Drinkware beyond pint glasses</h2>
      <p>Growlers, tumblers, and insulated cans are all strong brewery additions. A good insulated tumbler with laser-engraved branding can retail for $30–$40 and has practical daily-use value that keeps the brand visible long after the taproom visit. Stainless options tend to hold up better than plastic and read as more premium.</p>
      <p>For events and can releases, a small drinkware piece — a koozie, a small tumbler, or a custom can glass — can double as both merch and event logistics. Give it with a flight, include it in a release ticket, or sell it as a bundle with a four-pack.</p>
      <h2>Starting small</h2>
      <p>A 100-piece hat run and a 72-piece tee run is a reasonable starting point for most taprooms. That is enough to test the market, establish the look, and see what sells. Reorder what works. Retire what does not. The best brewery merch programs are ones that evolve with the brand — adding a new colorway each season, retiring old designs, and always having something fresh near the register.</p>
    `,
  },
  {
    slug: "how-to-brief-a-custom-merch-project",
    title: "How to Brief a Custom Merch Project",
    excerpt: "What to include in a merch brief so your production partner can give you accurate pricing, timelines, and better results.",
    date: "May 19, 2026",
    category: "Process",
    readTime: "5 min read",
    image: "/images/gallery/hat-feb-img_7420.jpg",
    cropPosition: "center 35%",
    content: `
      <p>A clear brief saves time, prevents miscommunication, and almost always results in a better product. You do not need a formal document — but you do need to answer a handful of questions before production can begin. Here is what to include.</p>
      <h2>What you are making</h2>
      <p>Product type, quantity, and intended use. Are these staff uniforms? Event giveaways? Retail merch? A customer gift? The intended use shapes every decision that follows — blank selection, decoration method, quality tier, packaging, and lead time.</p>
      <h2>Who it is for</h2>
      <p>Recipient profile matters. A corporate client gift program is different from a brand drop targeting 18–25 year olds. A staff program for a restaurant is different from VIP gifts for a product launch. The audience determines what premium means, what sizes to order, and what design approach will land.</p>
      <h2>Artwork status</h2>
      <p>Do you have final logos and artwork, or does it need to be created? If you have files, what format are they in? Vector files — AI, EPS, or high-resolution PDF — are ideal for embroidery and screen printing. If you only have a low-resolution PNG, that is a conversation to have early so it does not delay production.</p>
      <p>If you need design help, say so upfront. Some projects need minor art prep — cleaning up a file, adjusting colors for embroidery, separating a design into print layers. Other projects start from scratch. Knowing this early allows the right people to be involved from the start.</p>
      <h2>Timeline</h2>
      <p>When do you need the finished goods? Work backward from the in-hand date, not the order date. Standard production timelines for decorated apparel and headwear typically run 3–5 weeks from approved proof. Rush production is available but adds cost. If you have a hard event date, share it immediately — that date drives everything.</p>
      <h2>Budget</h2>
      <p>You do not need an exact number, but a range helps. Knowing whether the budget is $1,000 or $10,000 changes what blanks, quantities, and decoration options make sense. A good production partner will not try to spend your full budget — they will help you allocate it to get the best result for the money available.</p>
      <h2>Approval process</h2>
      <p>Who signs off on the proof? Is it one person or a committee? Does it require legal review? Understanding the approval chain upfront prevents last-minute delays. A proof sitting in someone's inbox for two weeks eats directly into production time.</p>
      <p>A solid brief takes 15 minutes to write and can save days of back-and-forth. The more clearly you communicate what the project needs to accomplish, the better the result.</p>
    `,
  },
  {
    slug: "custom-branded-hoodies",
    title: "Custom Branded Hoodies",
    excerpt: "Everything that determines whether a branded hoodie becomes a team favorite or sits in a closet. Fabric, fit, decoration, and when to invest.",
    date: "May 24, 2026",
    category: "Apparel",
    readTime: "7 min read",
    image: "/images/gallery/apparel-686-hoodie-front.jpg",
    cropPosition: "center 25%",
    content: `
      <p>A hoodie is one of the highest-perceived-value pieces in branded apparel. Done well, it becomes the item people actually reach for on cold mornings, on weekends, on travel days. Done poorly, it becomes a storage problem. The difference is the blank and the execution.</p>
      <h2>The blank matters most</h2>
      <p>Most branded hoodies underdeliver because the blank is too light. A 7–8 oz fleece hoodie in a standard pullover or zip-up style is the workhorse of the category. It feels substantial, holds its shape after washing, and has enough body to make decoration look intentional. Anything much lighter than that starts to feel like a promotional item rather than a real garment.</p>
      <p>Fabric composition also affects feel. 100% cotton is classic but tends to shrink. An 80/20 or 75/25 cotton-polyester blend adds recovery and reduces shrinkage without losing warmth. French terry, fleece, and brushed-back blends all feel different in hand and communicate different things about the brand. A premium French terry crewneck reads very differently than a standard midweight pullover, even with the same decoration.</p>
      <h2>Fit and sizing</h2>
      <p>Oversized fits have been dominant for several years and show no signs of reversing. For brands targeting younger audiences or fashion-forward customers, an oversized or boxy fit adds desirability. For corporate or workwear applications, a more traditional fit is usually more appropriate. Whatever fit you choose, order a sample and size it before committing to a full run.</p>
      <p>Sizing distribution is a common mistake. Many brands order too many mediums and not enough larges. If you are ordering for a general audience without size-specific data, a typical distribution might be: XS 5%, S 15%, M 25%, L 30%, XL 15%, XXL 10%. Adjust based on what you know about your audience.</p>
      <h2>Decoration placement</h2>
      <p>The standard placement is left chest, center chest, or full front. Left chest embroidery is clean and professional. Center chest screen print or embroidery is bold and wearable. A full front graphic is a statement. Back hits — center back, yoke, or full back — can complement a front placement or stand alone.</p>
      <p>Embroidery on a hoodie has weight and texture that reads premium in person. Screen printing can cover larger areas and handle more complex artwork. For sleeves and kangaroo pocket hits, embroidery tends to hold up better through washing than screen print on curved surfaces.</p>
      <h2>When a hoodie makes sense</h2>
      <p>Hoodies are most effective as team rewards, premium gifts, retail drops, and seasonal event merchandise. They are harder to justify as mass giveaways because the cost per piece is higher. A well-made hoodie for a product launch team, a VIP customer gift, or a limited retail drop is money well spent. A stack of cheap hoodies handed out at a tradeshow is not.</p>
      <p>If budget is a constraint, consider a crewneck sweatshirt instead. It carries similar quality signals at a lower price point and can be easier to style. Some brands build an entire identity around a strong crewneck and add the hoodie later as the flagship piece.</p>
    `,
  },
  {
    slug: "custom-patches-for-hats-and-apparel",
    title: "Custom Patches for Hats and Apparel",
    excerpt: "Woven, embroidered, PVC, and leather patches — what each type does well and how to use them in a merch program.",
    date: "May 29, 2026",
    category: "Process",
    readTime: "5 min read",
    image: "/images/gallery/hat-client-trucker-patch.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Patches add dimension to branded apparel in a way that flat decoration cannot. They sit above the fabric, have their own texture and material quality, and can be applied to products that would be difficult or impossible to embroider directly. A well-made patch can also be applied to multiple products without re-digitizing or re-setting up — which makes them efficient once you have the artwork dialed in.</p>
      <h2>Embroidered patches</h2>
      <p>The most familiar patch type. Stitched threads on a backing material, usually with a merrowed or die-cut edge. They look and feel like embroidery but can be applied to surfaces that a machine could not reach — like the front panel of a structured hat, a denim jacket, or a bag with tight geometry. Embroidered patches work well for logos with strong shapes and clear color separation. Fine detail is harder to reproduce than in woven patches.</p>
      <h2>Woven patches</h2>
      <p>Woven patches use a tight weave structure instead of raised stitching, which allows for finer detail and smaller text than embroidery. They sit flatter and feel smoother in hand. A woven patch can reproduce a complex illustration or fine typography that would lose definition as embroidery. They are popular on premium streetwear and outerwear labels.</p>
      <h2>PVC patches</h2>
      <p>Molded rubber or PVC patches have become popular in outdoor gear, military-adjacent brands, and workwear. They are extremely durable, weather-resistant, and can reproduce 3D detail that fabric patches cannot. A PVC patch with raised lettering and recessed fills has a tactile quality that embroidery and woven patches do not. They work especially well on gear-oriented products and structured hats.</p>
      <h2>Leather and leatherette patches</h2>
      <p>Laser-engraved or debossed leather patches read as premium and are popular in the hat market, especially on structured wool caps, trucker hats, and beanies. A leather patch with a simple wordmark or icon can elevate a standard blank significantly. The tone and grain of the leather becomes part of the brand expression, which is why the right leather choice matters as much as the artwork.</p>
      <h2>Application and planning</h2>
      <p>Patches are typically sewn or heat-applied to finished goods. Planning should account for application cost, which adds time and labor to the project. If you are applying patches to blanks you already own, confirm compatibility with the decorator. If starting from scratch, patches and blank sourcing can often be coordinated for a cleaner workflow.</p>
    `,
  },
  {
    slug: "custom-merchandise-for-music-artists-and-bands",
    title: "Custom Merchandise for Music Artists and Bands",
    excerpt: "Merch is one of the most direct revenue streams for independent artists. How to make pieces that fans actually want.",
    date: "June 1, 2026",
    category: "Entertainment",
    readTime: "6 min read",
    image: "/images/gallery/apparel-verve-gd-tee.jpg",
    cropPosition: "center 30%",
    content: `
      <p>Music merch is one of the few categories where fans are actively looking to spend. The challenge is not generating demand — it is making something worth the money and the space in someone's wardrobe. A well-made artist tee gets worn. A cheap one gets donated.</p>
      <h2>What makes music merch sell</h2>
      <p>Strong artwork is the single biggest driver. People buy the graphic as much as they buy the brand. If the art is compelling — a great illustration, a memorable phrase, a design that works as a standalone piece without knowing the artist — the merch will move. If it is just a name and a tour date on a generic tee, it has to rely entirely on fan loyalty, which is a limited pool.</p>
      <p>The blank matters too. A soft, well-cut heavyweight tee in a wearable colorway communicates that the artist put thought into the product. A scratchy thin tee says otherwise. Fans notice. The ones who show up in the artist's gear are walking endorsements — they should be wearing something they chose because it is genuinely good.</p>
      <h2>Tour merch vs catalog merch</h2>
      <p>Tour merch has a built-in reason to buy: the moment. A limited run tied to a specific tour, city, or show creates urgency and collectability. Date backs, venue names, and show-specific designs give the piece context that a generic catalog item does not have.</p>
      <p>Catalog merch has to earn its place on its own. It does not have the event context. The design needs to stand up, the quality needs to justify the price, and the item needs to be something people want beyond the show experience. Longevity items — a heavyweight hoodie, a strong hat, a quality tee with timeless artwork — tend to work best as catalog pieces.</p>
      <h2>Sizing and runs</h2>
      <p>Artist merch skews toward M, L, and XL with significant demand for oversized fits. Women in the audience often want smaller fits or women's-specific cuts. If the audience is mixed, consider offering both a unisex and a women's option in the top-selling items. For small runs, 72–100 pieces per design is a common starting point.</p>
      <h2>Selling at the show</h2>
      <p>Table setup, payment options, and float planning are all part of merch logistics at a show. Mobile payment processing (Square, Stripe) makes cash alternative easy. Clear pricing, a small sign with item names and prices, and folded and stacked sizing displays all reduce friction at the table. The less time it takes someone to find their size and pay, the more you sell.</p>
    `,
  },
  {
    slug: "trucker-hats-vs-structured-caps",
    title: "Trucker Hats vs Structured Caps: Which Is Right for Your Brand",
    excerpt: "Two different hat personalities, two different brand signals. How to pick the one that fits your project.",
    date: "June 3, 2026",
    category: "Headwear",
    readTime: "5 min read",
    image: "/images/gallery/hat-feb-img_7428.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Hat style communicates something before anyone reads the logo. A trucker hat says something different from a structured wool cap. Getting the style right is part of getting the brand right.</p>
      <h2>Trucker hats</h2>
      <p>The trucker format — foam front, mesh back, snapback closure — is casual, nostalgic, and very wearable across a wide audience. It has been a staple of outdoor, agricultural, food and beverage, music, and streetwear brands for decades. The foam front takes a bold print or patch well, and the mesh back provides ventilation that makes it practical in warm climates and outdoor settings.</p>
      <p>Truckers work best for brands with a relaxed, approachable personality. A BBQ restaurant, a summer camp, a surf shop, a craft brewery — these brands feel natural in a trucker. A law firm or a luxury hotel probably does not. The hat has a vibe, and that vibe needs to align with the brand.</p>
      <h2>Structured caps</h2>
      <p>Structured caps — typically six-panel, cotton or wool front, firm brim — read more polished. The crown holds its shape, which makes the decoration look more intentional. Embroidery sits cleaner on a structured front panel than on a soft foam trucker. These hats work across a wider range of applications: professional services, corporate programs, hospitality, sport, and fashion-adjacent brands all use structured caps effectively.</p>
      <p>There is significant variation within the structured category. A low-profile wool cap feels very different from a high-crown cotton baseball cap. Profile, brim curvature, crown shape, and fabric all affect how the hat reads and how it fits. Sampling before committing to a full run is always worth the time.</p>
      <h2>Unstructured and dad hats</h2>
      <p>Between the trucker and the structured cap sits the unstructured dad hat — no stiffener in the crown, soft brim, adjustable strap. This style has become extremely popular in the past decade because it pairs well with casual fits and the soft crown feels more relaxed than a structured bill. Embroidery on an unstructured hat has a lived-in quality that many brands prefer. The trade-off is consistency — because the crown is soft, embroidered logos can vary slightly piece to piece.</p>
      <h2>Making the call</h2>
      <p>Think about where the hat will be worn and by whom. Think about the brand's personality and the other visual elements in the program. And if possible, get samples of the top two or three options in hand before deciding. The hat you think you want and the hat you actually want are sometimes different things once you see them.</p>
    `,
  },
  {
    slug: "custom-merchandise-minimum-order-quantities",
    title: "Minimum Order Quantities for Custom Merch: What to Know",
    excerpt: "Minimums exist for real reasons. Here is how they work, what drives them, and how to plan your project around them.",
    date: "June 5, 2026",
    category: "Process",
    readTime: "5 min read",
    image: "/images/gallery/bags-boatsetter-tote.jpg",
    cropPosition: "center 50%",
    content: `
      <p>Every custom merch project has a minimum order quantity — a floor below which production does not make economic sense. Understanding why minimums exist helps you plan better and make smarter decisions about what to order and when.</p>
      <h2>Why minimums exist</h2>
      <p>Custom decorated goods involve fixed costs that exist regardless of quantity. Screen printing requires screens to be made — one per color, per location. Embroidery requires a digitized stitch file. Woven labels need a setup loom. These costs are the same whether you make 12 pieces or 1,200 pieces. Below a certain quantity, those fixed costs make the per-piece price impractical.</p>
      <p>There is also production efficiency. A print shop running a press cannot profitably print 10 tees and then reset for the next job. The economics of custom production require volume to amortize setup, press time, and labor across enough units that the result is priced realistically for everyone.</p>
      <h2>Common minimums by product</h2>
      <p>Screen printed tees typically start at 24–48 pieces, with pricing improving significantly at 72 and 144 pieces. Embroidered hats usually have a 24–48 piece minimum for standard styles. Custom woven labels often start at 100 pieces. Full-color sublimation products may start as low as 12 pieces because there is no screen or setup cost per color. DTG printing can go lower but has different quality and durability characteristics.</p>
      <p>At Orange Goods, most projects are built around a 100-piece starting point. That quantity is large enough to get real production pricing, small enough to stay manageable for a first run, and provides enough inventory to actually use the goods — outfit a team, seed a market, support an event, and still have stock left for reorders.</p>
      <h2>Mixing sizes and styles</h2>
      <p>Minimums typically apply to the total run, not to each size. You can order 100 tees across six sizes and meet the minimum. What you usually cannot do is mix completely different styles — a hoodie and a tee are different products with different setups, so they typically have separate minimums.</p>
      <h2>Planning around minimums</h2>
      <p>The best approach is to anchor on a realistic minimum and choose a product that makes sense at that quantity. A 100-piece hat order with good embroidery is almost always a stronger move than a 24-piece hat order with the same design. The per-piece cost is lower, the inventory lasts long enough to be useful, and the program feels more intentional.</p>
      <p>If the budget truly cannot support 100 pieces, DTG printing on blanks you source separately is one option. Print-on-demand services are another — useful for a single SKU with unpredictable demand but not practical for a large event or staff program. Know the trade-offs and plan accordingly.</p>
    `,
  },
  {
    slug: "branded-merchandise-for-real-estate-agents",
    title: "Branded Merchandise for Real Estate Agents",
    excerpt: "The merch categories that actually work for agents and brokerages — and what to skip.",
    date: "June 6, 2026",
    category: "Professional Services",
    readTime: "5 min read",
    image: "/images/gallery/hat-client-snapback-white.jpg",
    cropPosition: "center 30%",
    content: `
      <p>Real estate is a relationship business. The people who close the most deals tend to be the most remembered. Branded merchandise is one consistent, low-friction way to stay in front of clients, neighbors, and referral sources without making another call or sending another email.</p>
      <h2>What actually gets kept</h2>
      <p>The rule for any branded merch program is simple: if it is useful, it gets kept. If it is cheap or pointless, it gets thrown away. For real estate, the items with the longest shelf life are the ones people use daily — drinkware, tote bags, notebooks, and premium apparel. A well-made insulated tumbler with a clean logo can live on someone's desk for years. A sticky note pad with a headshot on it does not.</p>
      <p>Hats have become increasingly popular for agents with a strong local brand. A clean, embroidered hat with the brokerage name or a custom wordmark reads professional on a job site, at an open house, or at a neighborhood event. It is also the kind of thing agents wear on weekends — which extends the impression beyond business hours.</p>
      <h2>Closing gifts</h2>
      <p>Closing gifts are a well-established agent tradition, and merch can be a strong component. A thoughtful gift set — a quality tote, a candle, a tumbler — with subtle branding keeps the agent's name in the home without feeling like a billboard. The key word is subtle. A closing gift should feel generous, not promotional.</p>
      <h2>Team and brokerage programs</h2>
      <p>Brokerages with multiple agents can use merch to build internal culture and external brand recognition simultaneously. Coordinated polos or jackets for open house days, branded bags for listing presentations, and custom hats for team events all reinforce a professional image. The consistency matters. A team that shows up in coordinated gear looks more established than one that does not.</p>
      <h2>Neighborhood and event marketing</h2>
      <p>Open house gifts, neighborhood mailer inserts, and community event sponsorships are all opportunities for branded goods. A branded tote at a local farmers market, a branded water bottle at a charity 5K, or a custom hat at a neighborhood block party puts the agent's name in a positive context without hard selling. These are long-game plays that work when the agent shows up consistently.</p>
    `,
  },
  {
    slug: "how-long-does-custom-merch-take",
    title: "How Long Does Custom Merch Take? A Realistic Timeline",
    excerpt: "Production timelines for custom branded goods, from first inquiry to finished product in hand.",
    date: "June 7, 2026",
    category: "Process",
    readTime: "5 min read",
    image: "/images/gallery/hat-feb-img_7461.jpg",
    cropPosition: "center 45%",
    content: `
      <p>One of the most common planning mistakes in custom merch is underestimating how long production takes. The earlier you start, the more options you have. The later you start, the more you are paying for rush fees — or missing the deadline entirely.</p>
      <h2>Standard timeline: 3–5 weeks</h2>
      <p>Most custom decorated apparel and headwear runs 3–5 weeks from approved proof to shipping. That timeline breaks down roughly as follows: artwork review and art prep (1–3 days), proof creation and approval (3–7 days depending on revisions), production (7–14 business days), QC and packaging (1–2 days), shipping transit (2–5 days depending on destination and service).</p>
      <p>The single biggest variable is proof approval. A proof that gets approved same-day keeps the project on track. A proof that requires multiple rounds of revision, gets lost in an email chain, or needs sign-off from multiple stakeholders can add a week or more to the total timeline.</p>
      <h2>Custom or specialty items take longer</h2>
      <p>Overseas production — custom woven patches, private-label blanks, custom packaging — typically runs 8–14 weeks from final art approval, depending on the factory, the product, and the shipping method. Sea freight is slower and cheaper than air. For custom programs with unique components, starting 16–20 weeks before the need date is not excessive.</p>
      <h2>Rush production</h2>
      <p>Rush is available on most domestic production — typically at an additional 15–30% cost. A 3-week standard order can often be compressed to 10–14 business days with a rush fee. True rush (under 5 business days) is possible on some products but limits blank and decoration options significantly.</p>
      <p>Rush fees are real costs that come out of the project budget. The better strategy is to build a realistic timeline from the start and plan around standard production windows. Most event misses are caused by a project starting two weeks late, not by production being slow.</p>
      <h2>The planning shortcut</h2>
      <p>Take your in-hand date. Back up 5 weeks for domestic decorated apparel. Back up 14 weeks for anything with overseas components. Add 1 week if your approval process involves multiple stakeholders. Add 1 week if the artwork is not finalized. That is your start date. If you are already past it, have a rush conversation immediately.</p>
    `,
  },
  {
    slug: "custom-merchandise-for-gyms-and-fitness-brands",
    title: "Custom Merchandise for Gyms and Fitness Brands",
    excerpt: "Gym merch has become a category of its own. Here is what works, what does not, and how to build a program people wear.",
    date: "June 8, 2026",
    category: "Fitness",
    readTime: "6 min read",
    image: "/images/gallery/apparel-gts-synergy.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Gym merch has evolved from logoed tees at the front desk to full retail programs with wait lists. The brands driving that shift understood something early: if you make something people actually want to wear, the gym becomes a distribution network. Every member in the parking lot, at the coffee shop, or at the farmers market is a moving advertisement.</p>
      <h2>What gym members want</h2>
      <p>Performance and comfort are the minimum. No one wants to work out in a stiff, scratchy tee. But beyond functional basics, gym members want to feel like they belong to something. Merch that signals community — a limited run tee for a challenge, a hat tied to a specific training program, a hoodie that feels like a team uniform — sells better than generic branded goods.</p>
      <p>Lifestyle items matter here too. A gym member who loves the community will wear the hoodie to get coffee on Saturday. That is the target behavior. Build for that moment, not just for the workout.</p>
      <h2>Core product categories</h2>
      <p>Tees and tanks are the backbone. They are affordable, high-use, and function as both workout gear and casual wear. Choose a soft-hand blank with good recovery — something that does not pill, lose shape, or cling uncomfortably after washing. Fitted tanks for studio-style gyms. Relaxed tees for strength and CrossFit communities. Know your audience.</p>
      <p>Hoodies and crewnecks are strong sellers for fall and winter and double as recovery wear. A heavyweight crewneck with a clean embroidered logo can become a gym signature piece that members specifically ask about.</p>
      <p>Hats are underutilized by most gyms but perform well when the branding is right. A clean embroidered cap with a bold gym mark is a year-round item that gets worn well beyond the training floor.</p>
      <h2>Limited drops and community programs</h2>
      <p>Gyms with strong community culture can leverage limited drops to drive urgency and exclusivity. A 48-hour pre-order for a new colorway, a members-only run tied to a training milestone, or a seasonal piece that signals you were there for a specific challenge — these create emotional connection and sell through faster than catalog stock.</p>
      <h2>Pricing for retail</h2>
      <p>Members will pay retail prices for gym merch that feels premium. A well-made hoodie at $75, a quality tee at $35, a hat at $40 — these are defensible price points when the product backs them up. The mistake is racing to the bottom with cheap blanks and thin decoration. Members notice quality. The ones who buy the expensive hoodie talk about it. That is the marketing strategy.</p>
    `,
  },
  {
    slug: "branded-merchandise-for-corporate-events",
    title: "Branded Merchandise for Corporate Events",
    excerpt: "Event merch that people keep versus event merch that gets left at the hotel. What makes the difference.",
    date: "June 9, 2026",
    category: "Corporate",
    readTime: "6 min read",
    image: "/images/gallery/bags-boatsetter-dscf3226.jpg",
    cropPosition: "center 50%",
    content: `
      <p>Corporate event merch has a credibility problem. The category is flooded with forgettable branded pens, thin totes, and boxy polo shirts that nobody asked for. When attendees see another tote bag in their conference packet, they are already thinking about whether it is worth carrying to the airport.</p>
      <p>That bar is actually a low one. Clear it and the merch stands out. Here is how.</p>
      <h2>Solve a real problem</h2>
      <p>The best event merch is useful at the event itself. A well-made tote that handles a full day of conference materials and still looks good at dinner. A quality insulated bottle that makes the afternoon session more bearable. A notebook that someone actually writes in. These items earn their place because they are functional, and they keep the brand visible through the event and after it.</p>
      <p>Novelty items with the company logo solve nothing. A branded stress ball does not help someone carry their materials, stay hydrated, or remember the keynote. It gets left at the table when someone packs up.</p>
      <h2>Quality signals matter at senior levels</h2>
      <p>The merch bar rises with the seniority of the audience. A sales kickoff for 500 reps can use a solid mid-tier tee and hat program. A C-suite retreat or investor summit needs something that communicates care and attention to detail. A premium insulated tumbler, a leather-patch hat, a heavyweight crewneck, a quality canvas bag — these read differently than conference swag. They say the company thought about this.</p>
      <h2>Pre-event vs on-site distribution</h2>
      <p>Pre-event shipping — getting merch into attendees' hands before they arrive — is more complex but often more effective. A well-packaged welcome kit that arrives at someone's home three days before the event creates anticipation. It also guarantees the merch makes the trip, which is not guaranteed with on-site distribution for attendees who are flying in.</p>
      <p>On-site distribution is simpler but requires planning around logistics: table space, size options for apparel, staff to manage distribution, and timing relative to the event flow. Giving out hoodies at the beginning of a summer outdoor event and at the end of a cold evening awards dinner are very different logistics problems.</p>
      <h2>Reducing the waste problem</h2>
      <p>Order closer to actual attendance rather than planning for maximum. The merch left over from a corporate event is a literal cost with no return. Gather size data before ordering apparel. Use adjustable or one-size products like hats, bags, and drinkware when exact attendance is uncertain. The less waste the program generates, the more sustainable and cost-effective the budget becomes.</p>
    `,
  },
  {
    slug: "custom-bucket-hats",
    title: "Custom Bucket Hats",
    excerpt: "Bucket hats have come back strong. Here is what makes a custom bucket hat worth making — and how to get the details right.",
    date: "June 10, 2026",
    category: "Headwear",
    readTime: "5 min read",
    image: "/images/gallery/hat-apteka-bucket.jpg",
    cropPosition: "center 35%",
    content: `
      <p>The bucket hat has had a genuine resurgence across festival culture, outdoor brands, beach and surf, and streetwear. It is no longer a niche style — it is a mainstream headwear option that a wide range of brands can use credibly. The question is not whether a bucket hat makes sense. It is whether the execution is right for the brand.</p>
      <h2>When a bucket hat works</h2>
      <p>Bucket hats land best for brands with outdoor, relaxed, or cultural associations. A surf shop, a beach bar, a music festival, a summer camp, a lifestyle brand with coastal or outdoor roots — these all feel natural in a bucket hat. A financial services firm probably does not. The style has a personality and that personality needs to fit.</p>
      <p>Bucket hats also work well as event pieces. A limited run tied to a summer event, a festival, or a seasonal campaign gives the hat context and urgency. People will wear a bucket hat they got at a memorable event long after they might have retired a tee from the same occasion.</p>
      <h2>Fabric and construction</h2>
      <p>The most common bucket hat fabrics are cotton canvas, cotton twill, nylon, and terry cloth. Canvas and twill are workhorses — they hold shape, take decoration well, and have a clean look on the shelf. Nylon is lightweight and packable, which makes it popular for outdoor and travel applications. Terry cloth is very season-specific but can make a strong statement for beach and pool brands.</p>
      <p>Brim width affects the look and function significantly. A narrower brim reads more fashion-forward. A wider brim provides more sun protection and reads more utilitarian. Most branded bucket hats land in the middle — wide enough to be functional, narrow enough to be stylish.</p>
      <h2>Decoration on a bucket hat</h2>
      <p>The most common placement is the front panel, typically with embroidery, a woven label, or a print. The all-over print bucket hat — where a pattern or graphic wraps the entire surface — requires a different production process but creates a very distinctive, high-impact result. For most branded programs, a clean front-panel embroidery is the right call. For festival or streetwear contexts, a bolder all-over approach can be worth exploring.</p>
      <h2>Sizing</h2>
      <p>Unlike structured caps, bucket hats are typically offered in S/M and L/XL rather than a universal fit. This adds sizing complexity to the order. For events and giveaways, an S/M-dominant distribution (70/30) is usually safe. For retail programs where you know your customer base, track which size moves and order accordingly.</p>
    `,
  },
  {
    slug: "how-to-design-a-logo-for-merch",
    title: "How to Design a Logo That Works on Merch",
    excerpt: "Not every logo translates to a hat or tee. What makes artwork merch-ready — and how to adapt when it is not.",
    date: "June 11, 2026",
    category: "Design",
    readTime: "6 min read",
    image: "/images/gallery/hat-feb-img_7549.jpg",
    cropPosition: "center 40%",
    content: `
      <p>A logo that looks great on a business card or a website does not automatically work on a hat. Embroidery and screen printing have different constraints than digital formats, and understanding those constraints before you finalize artwork saves time, money, and frustration.</p>
      <h2>Simplicity scales better</h2>
      <p>The logos that work best on merch are the ones that read clearly at small sizes and in a single color. If the logo requires 8 colors to look right, or if it has fine gradients and drop shadows, it is probably more complex than production can handle cost-effectively. That does not mean it is a bad logo for digital use — it means the merch version may need to be a simplified adaptation.</p>
      <p>Think about the logo at the size it will appear on a hat. A left-chest placement on a cap is roughly 2 by 2.5 inches. A complex logo with thin lines and intricate detail loses those elements at that size. A bold, simple mark holds its identity.</p>
      <h2>Vector files are not optional</h2>
      <p>Embroidery and screen printing require artwork in vector format — typically Adobe Illustrator (.ai), EPS, or a clean vector PDF. A PNG or JPEG from a website is a raster format: it is made of pixels, and those pixels become visible when the file is scaled up to production size. A vector file can be scaled to any size without losing quality.</p>
      <p>If you only have a raster logo, the options are recreation (redrawing the logo in vector) or auto-tracing (software conversion that works for simple marks but often needs cleanup). Expect to pay for this work if you need it. It is a one-time cost that pays off across every future production order.</p>
      <h2>Color count and embroidery thread</h2>
      <p>Each color in a screen print requires a separate screen setup — more colors means higher setup cost. Embroidery does not work that way (thread changes add time, not screens), but highly detailed multi-color embroidery can lose definition and look muddy at small sizes. The sweet spot for embroidery is 1–4 colors with clear separation. For screen printing, 1–3 colors keeps setup cost manageable on smaller runs.</p>
      <h2>Adapting the logo for merch</h2>
      <p>Many brands create a simplified merch version of their primary logo — a one or two color version, a wordmark without the full icon, or a badge version with the name inside a shape. This is not a compromise. It is good design practice. The merch version should feel like a natural extension of the brand, just optimized for the format.</p>
    `,
  },
  {
    slug: "custom-merchandise-for-nonprofits-and-charities",
    title: "Custom Merchandise for Nonprofits and Charities",
    excerpt: "Merch as a fundraising tool and community signal — what works for mission-driven organizations on a constrained budget.",
    date: "June 12, 2026",
    category: "Nonprofit",
    readTime: "5 min read",
    image: "/images/gallery/bags-boatsetter-tote-detail.jpg",
    cropPosition: "center 50%",
    content: `
      <p>Nonprofit merch has to do double duty: it needs to function as a fundraising tool and as a community signal. The people wearing or carrying a nonprofit's merch are displaying their values publicly. That creates a higher bar for design and quality than most organizations expect going in.</p>
      <h2>Merch as fundraising</h2>
      <p>The simplest nonprofit merch program is a direct sale: hats, tees, and tote bags with the organization's mark, priced at a level that covers cost and generates margin for the mission. The math only works if the per-piece cost leaves room for meaningful margin at a price donors will pay. A $15 tee with mediocre quality sold at $25 raises $10. A $22 premium tee sold at $45 raises $23 and creates a product people actually want to wear — which means it sells through faster and generates more total revenue.</p>
      <p>Quality pays. The instinct to minimize cost often minimizes fundraising effectiveness at the same time.</p>
      <h2>Tote bags as outreach</h2>
      <p>Tote bags are the most visible carry item in daily life. A well-designed tote with a nonprofit's mark travels to grocery stores, schools, farmers markets, and offices. Every carry is an impression. The organizations that have thought carefully about tote design — a strong graphic, a memorable phrase, a design that someone would choose to carry even without the charity connection — see their brand spread in ways that paid advertising cannot replicate.</p>
      <h2>Event and campaign merch</h2>
      <p>Annual events — walks, runs, galas, auctions — are natural moments for limited merch. A hat or tee tied to the event creates a collectible artifact. A tote as part of a gala gift bag is functional and visible. A branded drinkware item for a fundraising run or walk is practical during the event and keeps the brand present afterward.</p>
      <h2>Working with a constrained budget</h2>
      <p>The nonprofit budget reality is real: every dollar spent on merch is a dollar that did not go to programming. The counter-argument is that well-executed merch returns more than it costs through fundraising and visibility. The way to make that case to a board or executive director is to bring a clear plan: product, quantity, cost per piece, retail price, total projected revenue, and projected margin. Numbers win the argument when gut feelings do not.</p>
    `,
  },
  {
    slug: "screen-printing-basics-what-brands-need-to-know",
    title: "Screen Printing Basics: What Brands Need to Know",
    excerpt: "How screen printing actually works, what drives cost, and how to get cleaner results on your next print run.",
    date: "June 13, 2026",
    category: "Process",
    readTime: "6 min read",
    image: "/images/gallery/apparel-bodyglove-tee.jpg",
    cropPosition: "center 35%",
    content: `
      <p>Screen printing is the dominant decoration method for custom tees, sweatshirts, and tote bags. Understanding how it works helps you give better direction, ask better questions, and avoid the most common mistakes.</p>
      <h2>How it works</h2>
      <p>Each color in the design gets its own screen — a fine mesh stretched over a frame with a photosensitive emulsion applied to it. The design is exposed onto the emulsion, which hardens everywhere the light hits and stays soft (and washable) where the design blocks it. During printing, ink is pushed through the open areas of each screen onto the garment. Screens are applied in sequence, one color at a time, building up the final image.</p>
      <p>The press can be manual (hand-operated) or automatic (machine-driven). Automatic presses are faster and more consistent, which is why large runs on automatics cost less per piece than small runs on manual presses.</p>
      <h2>What drives cost</h2>
      <p>Color count is the primary driver beyond quantity. Each color requires a screen, which adds setup cost. A 1-color print on 100 tees is significantly cheaper than a 5-color print on the same 100 tees. Quantity reduces per-piece cost because setup costs get spread across more units.</p>
      <p>Specialty inks add cost: metallic, high-density, puff, glow-in-the-dark, and foil all require additional materials and process steps. Exact location requirements (centered to a particular stitch, for example) add precision setup time. Oversized prints that go outside the standard platen area require repositioning, which slows the run.</p>
      <h2>Ink types and finishes</h2>
      <p>Plastisol is the standard ink used in most screen printing. It sits on top of the fabric, is very durable, and produces consistent, vibrant color. Water-based inks absorb into the fabric instead of sitting on top, producing a softer hand feel — ideal for a vintage or retail look but slightly less durable. Discharge printing removes the dye from the fabric and replaces it with the ink color, producing an exceptionally soft result with no ink feel at all. Discharge works best on 100% cotton fabrics with reactive dyes.</p>
      <h2>Art setup requirements</h2>
      <p>Every color in the design gets a separate film positive or CTP plate. This means the artwork needs to be color-separated — each color on its own layer, with clean edges and no gaps. A designer experienced in print production will set up art this way naturally. A designer who only works digitally may need to revise the file before production can begin.</p>
    `,
  },
  {
    slug: "custom-drinkware-for-events",
    title: "Custom Drinkware for Events",
    excerpt: "From coffee tumblers to cocktail glasses — how to choose the right branded drinkware for your next event.",
    date: "June 14, 2026",
    category: "Events",
    readTime: "5 min read",
    image: "/images/gallery/drinkware-goodoonya2.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Branded drinkware is one of the highest-utility items you can give at an event. People use it during the event itself, carry it home, and use it again. Every time they reach for it, the brand is there. No other merch category delivers that kind of repeated impression over time.</p>
      <h2>Matching the vessel to the event</h2>
      <p>The right drinkware depends on the context. A morning conference session calls for a travel mug or tumbler. An outdoor summer event calls for an insulated bottle or can cooler. A formal gala calls for something more elevated — an etched wine glass, a weighted crystal tumbler, a sleek stainless vessel. A music festival calls for something durable and packable.</p>
      <p>Mismatching the drinkware to the event context is a common mistake. Giving a delicate stemless wine glass at an outdoor daytime event is a logistics problem. Giving a cheap plastic cup at a premium dinner is a statement about the brand — an unintentional one.</p>
      <h2>Stainless vs glass vs ceramic</h2>
      <p>Stainless insulated tumblers and bottles are the most practical event drinkware in most contexts. They are durable, keep temperature effectively, and take laser engraving or powder coat decoration that holds up through years of use. They also read as premium — a 20 oz insulated tumbler feels like a real gift, not a promotional item.</p>
      <p>Glass vessels — wine glasses, pint glasses, tumblers — are excellent for events where people are staying in one place. A branded pint glass at a brewery event or a wine glass at a tasting fits naturally. The limitation is transport: glass does not travel as well as stainless.</p>
      <p>Ceramic mugs work for office-centric brands and hospitality settings. A well-made ceramic mug with a subtle logo can live on someone's desk for years. The key is weight and glaze quality — a thin, light mug feels cheap, while a substantial one feels intentional.</p>
      <h2>Decoration methods</h2>
      <p>Laser engraving is the cleanest finish for stainless and glass — it creates a permanent mark without adding material, and it does not fade, peel, or crack. Full-color printing via UV or pad printing adds color but has different durability characteristics depending on the surface. Powder coat on stainless can carry full color and feels tactile, but chips are possible over time. For glassware, sand etching or screen printing are the standard approaches.</p>
    `,
  },
  {
    slug: "custom-merchandise-for-tech-companies",
    title: "Custom Merchandise for Tech Companies",
    excerpt: "Tech merch has gotten better. Here is how to make something people actually want — and skip the generic swag bag.",
    date: "June 15, 2026",
    category: "Corporate",
    readTime: "6 min read",
    image: "/images/gallery/bags-boatsetter-dscf3242.jpg",
    cropPosition: "center 50%",
    content: `
      <p>The generic tech swag bag — a thin zip-up, a branded pen, a stress ball, a lanyard — is so ubiquitous it has become a punchline. The brands doing merch well in the tech space have moved away from that entirely. They treat merch like a product launch: with intention, quality standards, and an actual audience in mind.</p>
      <h2>The cultural shift</h2>
      <p>Tech employees are sophisticated consumers. They have seen enough branded hoodies to know immediately whether one is worth wearing. If the brand sends a scratchy fleece with a chest logo and calls it merch, people know. If it sends a heavyweight premium crewneck that feels good and fits well, people wear it. That distinction drives everything.</p>
      <p>The strongest tech merch programs treat the blank and the decoration as equally important. A great heavyweight tee with a mediocre print is better than a mediocre tee with a great print, but neither is as good as both being right.</p>
      <h2>Remote team gifting</h2>
      <p>Distributed teams have changed the tech merch logistics problem. Sending a welcome kit to a new employee's home requires size collection, individual packaging, and reliable shipping to multiple addresses. This is a different operation than handing out tees at a company offsite. It requires either a fulfillment partner or a platform that handles individual orders — and it needs to be planned well in advance of the new hire's start date.</p>
      <p>Welcome kits that land with good timing and thoughtful packaging create a strong first impression. A kit that arrives two weeks late, damaged, or in the wrong size does the opposite.</p>
      <h2>Conference and event strategy</h2>
      <p>At a major tech conference — a developer conference, a product launch event, a summit — the merch bar is high because the competition is visible. Everyone at the event is comparing swag. A distinctive hat, a premium tote with a real graphic, or a quality insulated bottle with a clean laser mark stands out. The goal is to be the merch people keep, not the merch that fills the hotel trash can.</p>
      <h2>Limited drops for product launches</h2>
      <p>Limited merch drops tied to product launches have become a strong play for consumer-facing tech brands. A run of 200 tees with a distinctive launch graphic, available only to early customers or beta users, creates community and generates organic social content. The scarcity does the marketing work. The quality keeps the brand in someone's regular rotation.</p>
    `,
  },
  {
    slug: "custom-branded-towels",
    title: "Custom Branded Towels",
    excerpt: "Beach towels, gym towels, and custom terry cloth — a growing merch category with strong practical value.",
    date: "June 16, 2026",
    category: "Accessories",
    readTime: "5 min read",
    image: "/images/gallery/accessories-apteka-towel.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Custom towels have moved from novelty item to legitimate brand expression. Brands with outdoor, wellness, beach, spa, gym, or hospitality associations have found towels to be one of the highest-utility branded goods they can offer — because people use them constantly, often in social settings where the brand is visible to others.</p>
      <h2>Beach and pool towels</h2>
      <p>A branded beach towel is one of the most public pieces of merch you can make. People lay them out at the beach, pool, or park, and the design is face-up and visible for hours. That visibility makes design quality especially important. A towel with a strong graphic or a distinctive colorway gets noticed. A towel with a small corner logo on a white background is just a towel.</p>
      <p>The best beach towel programs use the full surface creatively — a large print that treats the whole towel as a canvas, with the brand mark as a natural part of the design rather than an afterthought. Turkish and velour weave options feel more premium than standard terry and have become popular for boutique fitness and hospitality applications.</p>
      <h2>Gym and sports towels</h2>
      <p>Gym towels are smaller, more functional, and more utilitarian. The branded gym towel is a natural add-on for fitness studios, athletic clubs, and sports programs. Microfiber construction dries faster and is more hygienic than traditional terry, which has made it the preferred material for performance applications. Embroidery on a folded hem or a screen print on the face are both standard approaches.</p>
      <h2>Hospitality and spa applications</h2>
      <p>Hotels, spas, and resort properties have long used branded towels as an amenity and as retail merchandise. A quality embroidered hotel towel communicates care and attention that guests notice and talk about. Spa brands with a retail component can sell branded towels as part of a product line — they need to meet a higher quality standard since they will be evaluated like a retail purchase, not a gift.</p>
      <h2>Design and decoration</h2>
      <p>All-over print towels use a sublimation or reactive printing process that saturates the fabric with color rather than sitting on top of it. The result is vibrant and wash-resistant. Embroidery is available on many towel formats and adds a premium texture to a hem or face placement. Woven-in branding — where the logo or pattern is part of the jacquard weave itself — is the most permanent and premium option but requires a larger minimum and longer lead time.</p>
    `,
  },
  {
    slug: "custom-merchandise-for-outdoor-brands",
    title: "Custom Merchandise for Outdoor and Adventure Brands",
    excerpt: "Outdoor merch needs to earn its place in the pack. What works for brands with roots in hiking, camping, surfing, and wilderness.",
    date: "June 16, 2026",
    category: "Outdoor",
    readTime: "6 min read",
    image: "/images/gallery/accessories-boatsetter-towel.jpg",
    cropPosition: "center 45%",
    content: `
      <p>Outdoor brands earn trust through performance. The merch that represents those brands needs to reflect the same values: durability, function, and a look that fits naturally in the environments the brand serves. Outdoor merch that looks like it was designed in a boardroom does not land the same way with the audience that takes it into the wilderness.</p>
      <h2>Products that fit the lifestyle</h2>
      <p>The best outdoor merch is functional first. A hat that provides real sun protection. A tee made from a fabric that handles sweat and sun without turning into a rag after two washes. A insulated bottle that keeps water cold through a long day on the trail. A tote that can handle the weight of camping gear. Functional quality is the baseline — everything else is brand expression on top of that foundation.</p>
      <p>The categories that consistently perform for outdoor brands: hats (structured, unstructured, and bucket styles), heavyweight tees, fleece and midlayer tops, patches and woven labels for gear attachment, insulated drinkware, and rugged tote or accessory bags.</p>
      <h2>Design that fits the context</h2>
      <p>Outdoor brand aesthetics range from minimalist and technical to illustrated and nostalgic. Both can work — the key is that the design feels authentic to the brand's personality and the community it serves. A brand built around backcountry skiing has a different design language than one built around casual beach camping. Know the specific audience, not just the broad category.</p>
      <p>Illustrated graphics — maps, topographic contours, wildlife, plant life, trail markers — translate especially well to outdoor merch because they have content value beyond the logo. Someone wears the tee because the print is interesting, and the brand mark happens to be there. That is a more sustainable merch model than the logo-only approach.</p>
      <h2>Durability expectations</h2>
      <p>Outdoor audiences have high durability expectations. They use gear hard, wash it often, and notice when things degrade. Screen printing that cracks after a season is a brand negative. Embroidery that frays at the edges loses the premium signal quickly. The decoration method needs to match the functional context. For most outdoor applications, embroidery on headwear, discharge or water-based screen printing on apparel, and laser engraving on drinkware are the most durable approaches.</p>
    `,
  },
  {
    slug: "what-is-a-custom-merchandise-minimum-viable-program",
    title: "What Is a Minimum Viable Merch Program?",
    excerpt: "How to start a merch program that is small, focused, and actually works — without overcommitting on inventory or budget.",
    date: "June 16, 2026",
    category: "Strategy",
    readTime: "5 min read",
    image: "/images/gallery/hat-client-highline-navy.jpg",
    cropPosition: "center 40%",
    content: `
      <p>Most merch programs fail not because the products are bad but because they are too ambitious. Ten SKUs across three product categories ordered in quantities that take two years to sell through is not a merch program — it is an inventory problem. A minimum viable merch program is the opposite: focused, fast-moving, and built around what you actually know works.</p>
      <h2>One or two products to start</h2>
      <p>Start with the product your audience responds to most naturally. For most consumer-facing brands, that is either a hat or a tee. For a restaurant or bar, it is probably both — but start with one, prove the demand, and add the second on the next order. Adding SKUs before you have run sales data on the first ones is how you end up with inventory you cannot move.</p>
      <p>A hat and a tee is a complete starting program for many brands. They cover different use cases, complement each other visually, and give customers two price points. Adding drinkware, a bag, or outerwear makes sense once the core two are established and selling.</p>
      <h2>One colorway</h2>
      <p>Multiple colorways feel like more options to offer customers. They are also more inventory to manage, more size complexity across colors, and more minimum orders to meet. Start with the colorway that is most on-brand and most versatile. Black is safe. Natural canvas for totes is safe. A brand color can be strong if it is distinctive. Add a second color on the reorder if the first sells through cleanly.</p>
      <h2>Right-sized quantity</h2>
      <p>Order what you expect to sell in 90 days. If you are a small restaurant with 50 regulars, that might be 50 hats. If you are a brand doing 10,000 monthly visitors to your website, that might be 300 tees. Match the quantity to the realistic sell-through pace, not the optimistic scenario. Running out and reordering is a good problem. Storing 400 unsold tees for 18 months is not.</p>
      <h2>Clean, simple artwork</h2>
      <p>The minimum viable merch program does not need a full brand refresh or a new design direction. It needs artwork that is clean, scalable, and representative of the brand as it is today. A well-executed wordmark or simple logo in one or two colors is a completely valid starting point. Build design complexity after the program is established and you know what works.</p>
    `,
  },
];


export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
