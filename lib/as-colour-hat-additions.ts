import type { HatColor } from "@/components/ShoppableReadyMadeHat";

export type LiveCatalogHatSeed = {
  id: string;
  title: string;
  description: string;
  fabric: string;
  construction: string;
  customFit?: string;
  colors: Record<string, Partial<HatColor>>;
};

export const LIVE_CATALOG_HAT_SEEDS: LiveCatalogHatSeed[] = [
  {
    "id": "1100",
    "title": "Stock Cap",
    "description": "Explore the AS Colour Stock Cap: A high-profile snapback cap with a flat peak, crafted from mid-weight 80% acrylic and 20% wool blend. Features include a plastic snapback closure, light grey under-peak lining, stitching eyelets for ventilation, and a self-fabric dome at the top. One size fits all with a tear-out AS Colour label for personalized wear.",
    "fabric": "Mid weight, 80% acrylic 20% wool",
    "construction": "Snapback cap, flat peak<br />Plastic snapback, light grey under-peak lining, stitching eyelets, self fabric dome at top<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Camel": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16233/1100_STOCK_CAP_CAMEL__35556.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16243/1100_STOCK_CAP_CAMEL_SIDE__72948.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16234/1100_STOCK_CAP_CAMEL_BACK__25940.1756687622.jpg"
      },
      "Cardinal": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16213/1100_STOCK_CAP_CARDINAL__63520.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16229/1100_STOCK_CAP_CARDINAL_SIDE__13169.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16237/1100_STOCK_CAP_CARDINAL_BACK__80903.1756687622.jpg"
      },
      "Army": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/22503/1100_STOCK_CAP_ARMY__69485.1756687622.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/22501/1100_STOCK_CAP_ARMY_SIDE__35493.1756687622.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/22502/1100_STOCK_CAP_ARMY_BACK__23172.1756687622.jpg"
      },
      "Petrol Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16211/1100_STOCK_CAP_PETROL_BLUE__90352.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16239/1100_STOCK_CAP_PETROL_BLUE_SIDE__46101.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16218/1100_STOCK_CAP_PETROL_BLUE_BACK__78354.1756687622.jpg"
      },
      "Coal": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/23044/1100_STOCK_CAP_COAL__28908.1756687622.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/23045/1100_STOCK_CAP_COAL_SIDE__51976.1756687622.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/23046/1100_STOCK_CAP_COAL_BACK__69958.1756687622.jpg"
      },
      "Forest Green": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16215/1100_STOCK_CAP_FOREST_GREEN__86627.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16235/1100_STOCK_CAP_FOREST_GREEN_SIDE__59786.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16224/1100_STOCK_CAP_FOREST_GREEN_BACK__19603.1756687622.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/23722/1100_STOCK_CAP_NAVY_FRONT__25982.1756687623.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16241/1100_STOCK_CAP_NAVY_SIDE__89976.1756687622.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16228/1100_STOCK_CAP_NAVY_BACK__07044.1756687622.jpg"
      },
      "Athletic Heather": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16232/1100_STOCK_CAP_MARLE__95149.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16223/1100_STOCK_CAP_GREY_MARLE_SIDE__29563.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16225/1100_STOCK_CAP_MARLE_BACK__85680.1756687622.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16217/1100_STOCK_CAP_BLACK__94465.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16220/1100_STOCK_CAP_BLACK_SIDE__15241.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16238/1100_STOCK_CAP_BLACK_BACK__72653.1756687622.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16231/1100_STOCK_CAP_BONE__91283.1753757510.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16236/1100_STOCK_CAP_BONE_SIDE__90140.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16226/1100_STOCK_CAP_BONE_BACK__57423.1756687622.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/22897/1100_STOCK_CAP_WALNUT_SIDE__55781.1756687622.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16244/1100_STOCK_CAP_WALNUT_SIDE__02020.1753757510.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/22896/1100_STOCK_CAP_WALNUT_BACK__88129.1756687622.jpg"
      },
      "Dark Grey": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/129/16219/1100_STOCK_CAP_DARK_GREY_SIDE__79862.1753757510.jpg"
      }
    }
  },
  {
    "id": "1103",
    "title": "Finn Five Panel Cap",
    "description": "Discover timeless comfort with the AS Colour Finn Cap. This mid-weight, low-profile cap features a flat peak and is crafted from 100% cotton for durability and breathability. Complete with an adjustable plastic fastener and metal side eyelets, designed for a perfect fit.",
    "fabric": "Mid weight, 100% cotton",
    "construction": "Five panel cap, flat peak<br />Adjustable plastic fastener, metal side eyelets<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15995/1103_FINN_FIVE_PANEL_CAP_NAVY__13060.1761001973.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/16000/1103_FINN_FIVE_PANEL_CAP_NAVY_SIDE__51655.1761001973.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15994/1103_FINN_FIVE_PANEL_CAP_NAVY_BACK__65630.1761001973.jpg"
      },
      "Army": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/22506/1103_FINN_FIVE_PANEL_CAP_ARMY__58822.1761001973.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/22504/1103_FINN_FIVE_PANEL_CAP_ARMY_SIDE__58838.1761001973.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/22505/1103_FINN_FIVE_PANEL_CAP_ARMY_BACK__41353.1761001973.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15986/1103_FINN_FIVE_PANEL_CAP_BLACK__25992.1761001973.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15987/1103_FINN_FIVE_PANEL_CAP_BLACK_SIDE__23533.1761001973.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15989/1103_FINN_FIVE_PANEL_CAP_BLACK_BACK__46302.1761001973.jpg"
      },
      "Mineral": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15983/1103_FINN_FIVE_PANEL_CAP_MINERAL__65057.1761001973.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15988/1103_FINN_FIVE_PANEL_CAP_MINERAL_SIDE__59108.1761001973.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/15985/1103_FINN_FIVE_PANEL_CAP_MINERAL_BACK__49023.1761001973.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/24233/1103_FINN_FIVE_PANEL_CAP_KHAKI_FRONT__66711.1761001975.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/24218/1103_FINN_FIVE_PANEL_CAP_KHAKI_SIDE__19701.1761001973.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/130/24217/1103_FINN_FIVE_PANEL_CAP_KHAKI_BACK__04748.1761001973.jpg"
      }
    }
  },
  {
    "id": "1116",
    "title": "James Cap",
    "description": "",
    "fabric": "Light weight, 100% cotton",
    "construction": "Mid profile - unstructured six panel cap, flat peak<br />Adjustable fastener with metal clasp, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/138/23731/1116_JAMES_CAP_BLACK__42428.1756696982.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/138/23732/1116_JAMES_CAP_BLACK_SIDE__07950.1756696982.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/138/23730/1116_JAMES_CAP_BLACK_BACK__02306.1756696982.jpg"
      }
    }
  },
  {
    "id": "1131",
    "title": "Access Canvas Cap",
    "description": "Elevate your casual look with the AS Colour Access Canvas Cap. This low-profile, six-panel cap features a curved peak and is crafted from lightweight 100% cotton canvas. It includes an adjustable fastener with a metal clasp and tonal under-peak lining for optimal comfort and fit.",
    "fabric": "Light weight, 100% cotton canvas",
    "construction": "Six panel cap, curved peak<br />Adjustable fastener with metal clasp, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Mushroom": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/19673/1131_ACCESS_CANVAS_CAP_MUSHROOM__84431.1753053044.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/19672/1131_ACCESS_CANVAS_CAP_MUSHROOM_SIDE__54697.1753053044.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/19671/1131_ACCESS_CANVAS_CAP_MUSHROOM_BACK__86804.1753053044.jpg"
      },
      "Camel": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/16298/1131_ACCESS_CANVAS_CAP_CAMEL__72306.1717123238.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/7705/1131_ACCESS_CANVAS_CAP_CAMEL__83694.1717123237.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/7707/1131_ACCESS_CANVAS_CAP_CAMEL_BACK__92938.1717123237.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/22911/1131_ACCESS_CANVAS_CAP_WALNUT__02829.1753053044.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/22912/1131_ACCESS_CANVAS_CAP_WALNUT_SIDE__31938.1753053044.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/22910/1131_ACCESS_CANVAS_CAP_WALNUT_BACK__21665.1753053044.jpg"
      },
      "Pine Green": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/23321/1131_ACCESS_CANVAS_CAP_PINE_GREEN__93943.1753053047.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/23320/1131_ACCESS_CANVAS_CAP_PINE_GREEN_SIDE__21211.1753053045.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/23319/1131_ACCESS_CANVAS_CAP_PINE_GREEN_BACK__86296.1753053045.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/16296/1131_ACCESS_CANVAS_CAP_BLACK__97007.1717123238.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/7702/1131_ACCESS_CANVAS_CAP_BLACK__11207.1717123237.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/645/7703/1131_ACCESS_CANVAS_CAP_BLACK_BACK__57209.1717123237.jpg"
      }
    }
  },
  {
    "id": "1132",
    "title": "Access Five Panel Cap",
    "description": "Discover timeless style and comfort with the AS Colour Access Five Panel Cap. Featuring a low-profile design with a curved peak, crafted from lightweight 100% cotton. Includes an adjustable fastener with a metal clasp and tonal under-peak lining for a perfect fit.",
    "fabric": "Light weight, 100% cotton",
    "construction": "Six panel cap, curved peak<br />Adjustable fastener with metal clasp, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Sand": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/23384/1132_ACCESS_FIVE_PANEL_CAP_SAND__40290.1753152726.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/23383/1132_ACCESS_FIVE_PANEL_CAP_SAND_SIDE__00389.1753152726.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/23382/1132_ACCESS_FIVE_PANEL_CAP_SAND_BACK__86655.1753152726.jpg"
      },
      "Clay": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14562/1132_ACCESS_FIVE_PANEL_CAP_CLAY_FRONT__47312.1744337265.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/7756/1132_ACCESS_FIVE_PANEL_CAP_CLAY__89987.1744337265.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14561/1132_ACCESS_FIVE_PANEL_CAP_CLAY_BACK__40503.1744337265.jpg"
      },
      "Midnight Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14566/1132_ACCESS_FIVE_PANEL_CAP_MIDNIGHT_BLUE_FRONT__62802.1744337265.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/10636/1132_ACCESS_FIVE_PANEL_CAP_MIDNIGHT_BLUE__29979.1744337265.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14565/1132_ACCESS_FIVE_PANEL_CAP_MIDNIGHT_BLUE_BACK__99582.1744337265.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14564/1132_ACCESS_FIVE_PANEL_CAP_BLACK_FRONT__58649.1744337265.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/10637/1132_ACCESS_FIVE_PANEL_CAP_BLACK__14158.1744337265.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/646/14563/1132_ACCESS_FIVE_PANEL_CAP_BLACK_BACK__33385.1744337265.jpg"
      }
    }
  },
  {
    "id": "1138",
    "title": "Wo's Access Cap",
    "description": "Elevate your casual look with the AS Colour Women's Access Cap. Designed with a low-profile, six-panel structure and a curved peak, it's crafted from lightweight 100% cotton for comfort. Includes an adjustable fastener with a metal clasp and tonal under-peak lining for a perfect fit.",
    "fabric": "Light weight, 100% cotton",
    "construction": "Six panel cap, curved peak<br />Adjustable fastener with metal clasp, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/17843/1138_WOS_ACCESS_CAP_ECRU__54100.1785466181.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/17842/1138_WOS_ACCESS_CAP_ECRU_SIDE__51294.1785466181.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/23723/1138_WOS_ACCESS_CAP_ECRU_BACK__76489.1785466181.jpg"
      },
      "Hazy Pink": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/25704/1138_WOS_ACCESS_CAP_HAZY_PINK__96013.1785466183.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/25702/1138_WOS_ACCESS_CAP_HAZY_PINK_SIDE__70697.1785466182.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/25703/1138_WOS_ACCESS_CAP_HAZY_PINK_BACK__82574.1785466182.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/17846/1138_WOS_ACCESS_CAP_BLACK__68076.1785466181.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/17845/1138_WOS_ACCESS_CAP_BLACK_SIDE__61015.1785466181.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/647/17844/1138_WOS_ACCESS_CAP_BLACK_BACK__95715.1785466181.jpg"
      }
    }
  },
  {
    "id": "1140",
    "title": "Icon Cap",
    "description": "The Icon Cap is a mid-profile, six-panel snapback made from 100% cotton. Features a curved peak, contoured crown, tonal underpeak, plastic snapback, and tear-out label.",
    "fabric": "Mid weight, 100% cotton",
    "construction": "Six panel cap, curved peak<br />Structured snapback cap with a contoured crown, plastic snapback, eyelets, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16787/1140_ICON_CAP_ECRU__40530.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16786/1140_ICON_CAP_ECRU_SIDE__82620.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16784/1140_ICON_CAP_ECRU_BACK__49299.1751499402.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16785/1140_ICON_CAP_BONE__41022.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16789/1140_ICON_CAP_BONE_SIDE__14028.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/16788/1140_ICON_CAP_BONE_BACK__83519.1751499402.jpg"
      },
      "Sand": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/23389/1140_ICON_CAP_SAND__36760.1753153289.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/23388/1140_ICON_CAP_SAND_SIDE__98609.1753153289.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/23390/1140_ICON_CAP_SAND_BACK__20547.1753153290.jpg"
      },
      "Clay": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14585/1140_ICON_CAP_CLAY_FRONT__83014.1716778385.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/8866/1140_ICON_CAP_CLAY__94734.1716778385.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14583/1140_ICON_CAP_CLAY_BACK__98000.1716778385.jpg"
      },
      "Atlantic": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14578/1140_ICON_CAP_ATLANTIC_FRONT__06772.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7786/1140_ICON_CAP_ATLANTIC__04869.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7788/1140_ICON_CAP_ATLANTIC_BACK__18919.1751499402.jpg"
      },
      "Midnight Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14582/1140_ICON_CAP_MIDNIGHT_BLUE_FRONT__01594.1721090878.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/8549/1140_ICON_CAP_MIDNIGHT_BLUE__16616.1721090878.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14580/1140_ICON_CAP_MIDNIGHT_BLUE_BACK__88495.1721090878.jpg"
      },
      "Petrol Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14574/1140_ICON_CAP_PETROL_BLUE_FRONT__15843.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7798/1140_ICON_CAP_PETROL_BLUE__57214.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7799/1140_ICON_CAP_PETROL_BLUE_BACK__21792.1751499402.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/22914/1140_ICON_CAP_WALNUT__26303.1753153005.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/22913/1140_ICON_CAP_WALNUT_SIDE__26350.1753153005.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/22915/1140_ICON_CAP_WALNUT_BACK__61621.1753153005.jpg"
      },
      "Cypress": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14584/1140_ICON_CAP_CYPRESS_FRONT__48186.1721090878.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/8548/1140_ICON_CAP_CYPRESS__47773.1721090878.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14581/1140_ICON_CAP_CYPRESS_BACK__28173.1721090878.jpg"
      },
      "Plum": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14576/1140_ICON_CAP_PLUM_FRONT__47007.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7800/1140_ICON_CAP_PLUM__72535.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7801/1140_ICON_CAP_PLUM_BACK__71695.1751499402.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/14575/1140_ICON_CAP_BLACK_FRONT__67157.1751499402.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7790/1140_ICON_CAP_BLACK__83040.1751499402.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/648/7792/1140_ICON_CAP_BLACK_BACK__54871.1751499402.jpg"
      }
    }
  },
  {
    "id": "1142",
    "title": "Icon Nylon Cap",
    "description": "The Icon Nylon Cap is a mid-profile, six-panel snapback made from 100% recycled nylon. Features a curved peak, quick-dry fabric, tonal underpeak, and tear-out label.",
    "fabric": "Mid weight, 100% recycled nylon",
    "construction": "Six panel cap, curved peak<br />Structured snapback cap with a contoured crown, quick dry fabric, plastic snapback, eyelets, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16792/1142_ICON_NYLON_CAP_BONE__51278.1721091287.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16791/1142_ICON_NYLON_CAP_BONE_SIDE__29726.1721091287.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16790/1142_ICON_NYLON_CAP_BONE_BACK__57410.1721091287.jpg"
      },
      "Lime": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16198/1142_ICON_NYLON_CAP_LIME__11086.1721091286.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16207/1142_ICON_NYLON_CAP_LIME_SIDE__58096.1721091285.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16199/1142_ICON_NYLON_CAP_LIME_BACK__35197.1721091286.jpg"
      },
      "Powder": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16201/1142_ICON_NYLON_CAP_POWDER__81301.1721091286.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16203/1142_ICON_NYLON_CAP_POWDER_SIDE__11440.1721091285.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16205/1142_ICON_NYLON_CAP_POWDER_BACK__17835.1721091285.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16200/1142_ICON_NYLON_CAP_BLACK__99104.1721091286.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16209/1142_ICON_NYLON_CAP_BLACK_SIDE__49496.1721091285.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/650/16204/1142_ICON_NYLON_CAP_BLACK_BACK__25081.1721091285.jpg"
      }
    }
  },
  {
    "id": "1151",
    "title": "Class Wool Cap",
    "description": "Discover the AS Colour Class Wool Cap: A mid-weight, unstructured six-panel cap crafted from a blend of 50% wool and 50% recycled polyester. Features include a flat peak, adjustable metal clasp fastener, and tonal under-peak lining. Perfectly versatile with a tear-out label for added comfort.",
    "fabric": "Mid weight, 50% wool 50% recycled polyester",
    "construction": "Unstructured six panel cap, flat peak<br />Adjustable fastener with metal clasp, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/652/14533/1151_CLASS_WOOL_CAP_BLACK_FRONT__48143.1751500176.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/652/7867/1151_CLASS_WOOL_CAP_BLACK__14568.1751500176.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/652/14530/1151_CLASS_WOOL_CAP_BLACK_BACK__38878.1751500176.jpg"
      }
    }
  },
  {
    "id": "1170",
    "title": "Kids Bucket Hat",
    "description": "Discover comfort and style with the AS Colour Kids Bucket Hat. Crafted from 100% cotton, this light-mid weight hat features a reinforced brim, side eyelets, and a tear-out label for added convenience. Perfectly sized for young adventurers.",
    "fabric": "Light-Mid weight, 100% cotton",
    "construction": "Reinforced brim with stitching detail, side eyelets<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/657/21882/1170_KIDS_BUCKET_HAT_NAVY__02786.1747012096.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/657/7945/1170_KIDS_BUCKET_HAT_NAVY_BACK__81247.1666225196.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/657/21881/1170_KIDS_BUCKET_HAT_BLACK__06008.1747012095.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/657/16708/1170_KIDS_BUCKET_HAT_BLACK_BACK__73379.1720560792.jpg"
      }
    }
  },
  {
    "id": "1171",
    "title": "Nylon Bucket Hat",
    "description": "Presenting the AS Colour Nylon Bucket Hat, crafted from light to mid-weight 100% quick-dry recycled nylon. It includes a reinforced brim with stitching detail and side eyelets, ensuring durability and ventilation. Featuring a tear-out AS Colour label, it's designed for universal fit and comfort.",
    "fabric": "Light-Mid weight, 100% quick dry recycled nylon",
    "construction": "Reinforced brim with stitching detail, side eyelets<br>One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21888/1171_NYLON_BUCKET_HAT_ECRU__69751.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/16887/1171_NYLON_BUCKET_HAT_ECRU_BACK__93758.1751330540.jpg"
      },
      "Sand": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/23392/1171_NYLON_BUCKET_HAT_SAND__52344.1753153566.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/23391/1171_NYLON_BUCKET_HAT_SAND_BACK__61682.1753153566.jpg"
      },
      "Mushroom": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21885/1171_NYLON_BUCKET_HAT_MUSHROOM__29166.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/19531/1171_NYLON_BUCKET_HAT_MUSHROOM_BACK__24383.1751330540.jpg"
      },
      "Lime": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21893/1171_NYLON_BUCKET_HAT_LIME__15315.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/8329/1171_NYLON_BUCKET_HAT_LIME_BACK__97017.1751330540.jpg"
      },
      "Powder": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21891/1171_NYLON_BUCKET_HAT_POWDER__00384.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/7959/1171_NYLON_BUCKET_HAT_POWDER_BACK__90142.1751330540.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21883/1171_NYLON_BUCKET_HAT_BLACK__50963.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/8330/1171_NYLON_BUCKET_HAT_BLACK_BACK__79799.1751330540.jpg"
      },
      "Army": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/23632/1171_NYLON_BUCKET_HAT_ARMY__74137.1754349780.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/22813/1171_NYLON_BUCKET_HAT_ARMY_BACK__84168.1753153564.jpg"
      },
      "Lapis": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21894/1171_NYLON_BUCKET_HAT_LAPIS__85055.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/16063/1171_NYLON_BUCKET_HAT_LAPIS_BACK__81403.1751330540.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21892/1171_NYLON_BUCKET_HAT_NAVY__20960.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/16066/1171_NYLON_BUCKET_HAT_NAVY_BACK__13525.1751330540.jpg"
      },
      "Pistachio": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21884/1171_NYLON_BUCKET_HAT_PISTACHIO__96432.1751330540.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/16064/1171_NYLON_BUCKET_HAT_PISTACHIO_BACK__08464.1751330540.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/21886/1171_NYLON_BUCKET_HAT_BONE__64700.1747012355.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/658/12329/1171_NYLON_BUCKET_HAT_BONE_BACK__14635.1716785798.jpg"
      }
    }
  },
  {
    "id": "1172",
    "title": "Wide Brim Bucket Hat",
    "description": "Introducing the AS Colour Wide Brim Bucket Hat, crafted from light-mid weight 100% cotton for comfort. It features a reinforced large brim with stitching detail, side eyelets for ventilation, and a self-fabric chin strap with a plastic adjustable toggle. Complete with a tear-out AS Colour label, it offers one-size-fits-all versatility.",
    "fabric": "Light-Mid weight, 100% cotton",
    "construction": "Reinforced large brim with stitching detail, side eyelets, self-fabric chin strap, plastic adjustable toggle<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/21895/1172_WIDE_BRIM_BUCKET_HAT_BLACK__56414.1747013395.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/7968/1172_WIDE_BRIM_BUCKET_HAT_BLACK_BACK__05508.1716856523.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/21897/1172_WIDE_BRIM_BUCKET_HAT_KHAKI__58581.1747013395.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/16247/1172_WIDE_BRIM_BUCKET_HAT_KHAKI_BACK__99484.1716856525.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/21896/1172_WIDE_BRIM_BUCKET_HAT_NAVY__33702.1747013395.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/659/16246/1172_WIDE_BRIM_BUCKET_HAT_NAVY_BACK__45159.1716856524.jpg"
      }
    }
  },
  {
    "id": "1173",
    "title": "Stock Canvas Cap",
    "description": "Discover the AS Colour Stock Canvas Cap: A high-profile snapback with a flat peak, made from heavy-weight 100% cotton canvas. Features include a structured front, plastic snapback closure, tonal under-peak lining, stitching eyelets, and a self-fabric dome. One size fits all with a tear-out AS Colour label for personalized comfort.",
    "fabric": "Heavy weight , 100% cotton canvas",
    "construction": "Snapback cap, flat peak<br />Structured front, plastic snapback, tonal under-peak lining, stitching eyelets, self fabric dome at top<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Camel": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/19762/1173_STOCK_CANVAS_CAP_CAMEL__42337.1741134019.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/8356/1173_STOCK_CANVAS_CAP_CAMEL__22441.1713750290.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/14520/1173_STOCK_CANVAS_CAP_CAMEL_BACK__71380.1713750290.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/22953/1173_STOCK_CANVAS_CAP_WALNUT__30901.1751503811.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/22951/1173_STOCK_CANVAS_CAP_WALNUT_SIDE__57117.1751503810.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/22952/1173_STOCK_CANVAS_CAP_WALNUT_BACK__89633.1751503810.jpg"
      },
      "Midnight Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/19764/1173_STOCK_CANVAS_CAP_MIDNIGHT_BLUE__38886.1741134020.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/8357/1173_STOCK_CANVAS_CAP_MIDNIGHT_BLUE__41577.1713750291.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/14517/1173_STOCK_CANVAS_CAP_MIDNIGHT_BLUE_BACK__90547.1713750290.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/19763/1173_STOCK_CANVAS_CAP_BLACK__09012.1741134019.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/8355/1173_STOCK_CANVAS_CAP_BLACK__36001.1713750290.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/660/14514/1173_STOCK_CANVAS_CAP_BLACK_BACK__29249.1713750290.jpg"
      }
    }
  },
  {
    "id": "1178",
    "title": "Wo's Bucket Hat",
    "description": "Showcasing the AS Colour Women's Bucket Hat, meticulously designed for a snug fit with light-mid weight 100% cotton. Enhanced with a reinforced brim, stitching detail, and side eyelets, it offers style and comfort in one size fits all. Customize with a tear-out AS Colour label for a personal touch.",
    "fabric": "Light-Mid weight, 100% cotton",
    "construction": "Reinforced brim with stitching detail, side eyelets<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/21932/1178_WOS_BUCKET_HAT_ECRU__36020.1785466512.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/16889/1178_WOS_BUCKET_HAT_ECRU_BACK__36184.1785466512.jpg"
      },
      "Hazy Pink": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/25707/1178_WOS_BUCKET_HAT_HAZY_PINK__33075.1785466514.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/25705/1178_WOS_BUCKET_HAT_HAZY_PINK_BACK__31824.1785466513.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/21931/1178_WOS_BUCKET_HAT_BLACK__42877.1747013921.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/661/7992/1178_WOS_BUCKET_HAT_BLACK_BACK__25546.1747013920.jpg"
      }
    }
  },
  {
    "id": "1180",
    "title": "Active Finn Cap",
    "description": "Elevate your outdoor style with the AS Colour Active Finn Cap. Featuring a low-profile, five-panel design with a flat peak, it's crafted from lightweight, quick-dry fabric&mdash;100% recycled nylon body and mesh. Adjustable plastic fastener ensures a perfect fit.",
    "fabric": "Light weight, 100% recycled nylon body with 100% recycled polyester mesh",
    "construction": "Five panel cap, flat peak<br />Mesh side panels, quick dry fabric, adjustable plastic fastener<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14510/1180_ACTIVE_CAP_ECRU_FRONT__85595.1713152241.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/8893/1180_ACTIVE_CAP_ECRU__82002.1713152241.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14509/1180_ACTIVE_CAP_ECRU_BACK__53620.1713152243.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14513/1180_ACTIVE_CAP_NAVY_FRONT__04473.1713152241.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/8894/1180_ACTIVE_CAP_NAVY__16992.1713152241.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14512/1180_ACTIVE_CAP_NAVY_BACK__06997.1713152241.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14511/1180_ACTIVE_CAP_BLACK_FRONT__62652.1713152241.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/8010/1180_ACTIVE_CAP_BLACK__24357.1713152241.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/662/14508/1180_ACTIVE_CAP_BLACK_BACK__45110.1713152241.jpg"
      }
    }
  },
  {
    "id": "1149",
    "title": "Icon Kids Cap",
    "description": "The Icon Kids Cap is a mid-profile, six-panel design with a curved peak. Made from 100% cotton with a stretch strapback, contoured crown, tonal underpeak, and tear-out label.",
    "fabric": "Mid weight, 100% cotton",
    "construction": "Structured six panel cap, curved peak<br />Contoured crown, stretch strapback, eyelets, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/667/16253/1149_ICON_KIDS_CAP_BLACK__14838.1716857137.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/667/16251/1149_ICON_KIDS_CAP_BLACK_SIDE__70805.1716857136.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/667/16252/1149_ICON_KIDS_CAP_BLACK_BACK__31117.1716857137.jpg"
      }
    }
  },
  {
    "id": "1117C",
    "title": "Camo Bucket Hat",
    "description": "Introducing the AS Colour Camo Bucket Hat, constructed from lightweight 100% cotton with an all-over camo print for a stylish edge. It features a reinforced brim with stitching detail, side eyelets for ventilation, and a tear-out AS Colour label. One size fits all for effortless wearability.",
    "fabric": "Light-Mid weight, 100% cotton",
    "construction": "Reinforced brim with stitching detail, side eyelets<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/859/21879/1117C_CAMO_BUCKET_HAT_CAMO__80775.1747012044.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/859/16248/1117C_CAMO_BUCKET_HAT_CAMO_INSIDE__62971.1716856652.jpg"
      }
    }
  },
  {
    "id": "1174",
    "title": "Nylon Wide Brim Bucket Hat",
    "description": "",
    "fabric": "Light-Mid weight, 100% quick dry recycled nylon",
    "construction": "Reinforced large brim with stitching detail, side eyelets, self-fabric chin strap, plastic adjustable toggle<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21909/1174_NYLON_WIDE_BRIM_BUCKET_HAT_BLACK__96566.1747013584.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/17588/1174_NYLON_WIDEBRIM_BUCKET_HAT_BLACK_BACK__61706.1724644192.jpg"
      },
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21905/1174_NYLON_WIDE_BRIM_BUCKET_HAT_ECRU__38149.1747013583.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21908/1174_NYLON_WIDEBRIM_BUCKET_HAT_ECRU_BACK__81304.1747013584.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/22170/1174_NYLON_WIDE_BRIM_BUCKET_HAT_KHAKI__61352.1747699883.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/22171/1174_NYLON_WIDEBRIM_BUCKET_HAT_KHAKI_BACK__00247.1747699884.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21910/1174_NYLON_WIDE_BRIM_BUCKET_HAT_NAVY__22022.1747013584.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21912/1174_NYLON_WIDEBRIM_BUCKET_HAT_NAVY_BACK__52045.1747013584.jpg"
      },
      "Storm": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/21907/1174_NYLON_WIDE_BRIM_BUCKET_HAT_STORM__25299.1747013584.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/860/19468/1174_NYLON_WIDEBRIM_BUCKET_HAT_STORM_BACK__05329.1747013582.jpg"
      }
    }
  },
  {
    "id": "1129",
    "title": "Surf Kids Cap",
    "description": "Presenting the AS Colour Surf Kids Cap: A lightweight, unstructured design crafted from 100% recycled nylon. Features include a flat soft foam peak, quick-dry fabric, and a stretch strapback for a snug fit. Ideal for young surf enthusiasts with its smaller, tailored sizing and tear-out label for added comfort.",
    "fabric": "Light weight, 100% recycled nylon",
    "construction": "Unstructured cap<br />Flat soft foam peak, quick dry fabric, single panel at front, stretch strapback<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/16249/1129_SURF_KIDS_CAP_BLACK__89329.1716856913.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/13015/1129_SURF_KIDS_CAP_BLACK__23632.1716856913.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/13017/1129_SURF_KIDS_CAP_BLACK_BACK__60124.1716856913.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/16250/1129_SURF_KIDS_CAP_NAVY__18217.1716856913.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/13018/1129_SURF_KIDS_CAP_NAVY__59420.1716856913.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/898/13019/1129_SURF_KIDS_CAP_NAVY_BACK__58634.1716856913.jpg"
      }
    }
  },
  {
    "id": "1105",
    "title": "Finn Two-Tone Nylon Cap",
    "description": "Discover versatility with the AS Colour Two-Tone Nylon Cap. This low-profile, five-panel cap features a lightweight, quick-dry 100% recycled nylon body with contrasting panels. Complete with an adjustable plastic fastener and elastic straps for a personalized fit.",
    "fabric": "Light weight, 100% recycled nylon body",
    "construction": "Five panel cap<br />Contrast panels, flat tonal peak with soft foam inner, quick dry fabric, adjustable plastic fastener with elastic straps<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Coal/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23688/1105_FINN_2_TONE_NYLON_CAP_COAL_BLACK__03439.1755827958.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23048/1105_FINN_2-TONE_NYLON_CAP_COAL_BLACK_SIDE__04501.1755827956.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23051/1105_FINN_2-TONE_NYLON_CAP_COAL_BLACK_BACK__94203.1755827956.jpg"
      },
      "Ecru/Coal": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23047/1105_FINN_2_TONE_NYLON_CAP_ECRU_COAL__43067.1751584834.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23049/1105_FINN_2_TONE_NYLON_CAP_ECRU_COAL_SIDE__05132.1751584834.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/900/23050/1105_FINN_2-TONE_NYLON_CAP_ECRU_COAL_BACK__62238.1751584834.jpg"
      }
    }
  },
  {
    "id": "1133",
    "title": "Access Active Cap",
    "description": "Gear up for action with the AS Colour Access Active Cap. This sport-ready accessory boasts a low-profile, six-panel design with a curved peak, crafted from a lightweight blend of 90% nylon and 10% elastane. Includes a self-fabric covered Velcro strap and tonal under-peak lining for a personalized fit.",
    "fabric": "Light weight, 90% Nylon, 10% elastane",
    "construction": "Six panel cap, curved peak<br />Self-fabric covered Velcro strap to close , stretch unstructured body, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/15167/1133_ACCESS_ACTIVE_CAP_BLACK_FRONT__98238.1713406190.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/13052/1133_ACCESS_ACTIVE_CAP_BLACK__79224.1713406189.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/15168/1133_ACCESS_ACTIVE_CAP_BLACK_BACK__06930.1713406191.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/15166/1133_ACCESS_ACTIVE_CAP_BONE_FRONT__82657.1717123186.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/13053/1133_ACCESS_ACTIVE_CAP_BONE__32528.1713406189.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/901/15169/1133_ACCESS_ACTIVE_CAP_BONE_BACK__79503.1713406191.jpg"
      }
    }
  },
  {
    "id": "1163",
    "title": "Frame Foam Two-Tone Trucker",
    "description": "Explore the AS Colour Frame Two-Tone Trucker Cap: A high-profile snapback with a curved peak, crafted from mid-weight 100% polyester foam front and peak, paired with a 100% recycled polyester mesh back. Includes a contrasting front foam panel, plastic snapback closure, tonal under-peak lining, and tear-out AS Colour label for customized comfort.",
    "fabric": "Mid weight, 100% polyester foam front and peak, 100% recycled polyester mesh back",
    "construction": "Snapback cap, curved peak<br />Contrast front foam panel, plastic snapback, tonal under-peak lining, mesh back<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "White/Coal": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24539/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_COAL__87251.1765747274.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24540/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_COAL_SIDE__74465.1765747274.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24537/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_COAL_BACK__46047.1765747274.jpg"
      },
      "White/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24538/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_BLACK__35902.1765747274.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24535/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_BLACK_SIDE__89211.1765747274.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24543/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_BLACK_BACK__79928.1765747275.jpg"
      },
      "White/Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24534/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_NAVY__75021.1765747274.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24541/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_NAVY_SIDE__65096.1765747275.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/903/24542/1163_FRAME_FOAM_2-TONE_TRUCKER_WHITE_NAVY_BACK__82420.1765747275.jpg"
      }
    }
  },
  {
    "id": "1155",
    "title": "Class Performance Cap",
    "description": "AS Colour Class Performance Cap: Engineered for versatility, this mid-weight five-panel cap combines 100% recycled polyester with a cozy fleece lining. Designed with tonal eyelets, a plastic snapback closure, and T800 water resistance for all-weather durability. Includes a tear-out AS Colour label for personalized comfort.",
    "fabric": "Mid weight, 100% recycled polyester, 100% recycled polyester fleece lining",
    "construction": "Five panel cap, flat peak<br />Fleece lined, tonal eyelets, plastic snapback, T800 water resistant<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16026/1155_CLASS_PERFORMANCE_CAP_BLACK__71273.1716780458.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16023/1155_CLASS_PERFORMANCE_CAP_BLACK_SIDE__91018.1716780457.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16024/1155_CLASS_PERFORMANCE_CAP_BLACK_BACK__30290.1716780457.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/15189/1155_CLASS_PERFORMANCE_CAP_BONE_FRONT__35829.1716780455.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/13087/1155_CLASS_PERFORMANCE_CAP_BONE__49592.1716780455.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/17990/1155_CLASS_PERFORMANCE_CAP_BONE_BACK__54394.1725401042.jpg"
      },
      "Carolina Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/15190/1155_CLASS_PERFORMANCE_CAP_CAROLINA_BLUE_FRONT__38094.1716780455.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/13088/1155_CLASS_PERFORMANCE_CAP_CAROLINA_BLUE__88487.1716780456.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/17991/1155_CLASS_PERFORMANCE_CAP_CAROLINA_BLUE_BACK__36177.1725401043.jpg"
      },
      "Smoke": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16025/1155_CLASS_PERFORMANCE_CAP_SMOKE__39959.1716780458.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16028/1155_CLASS_PERFORMANCE_CAP_SMOKE_SIDE__78713.1716780458.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/905/16027/1155_CLASS_PERFORMANCE_CAP_SMOKE_BACK__39826.1716780458.jpg"
      }
    }
  },
  {
    "id": "1179",
    "title": "Wo's Brim Bucket Hat",
    "description": "Presenting the AS Colour Women's Brim Bucket Hat, crafted from light-mid weight 100% cotton for comfort. Featuring a reinforced short brim with stitching detail and triangle panels, it ensures style and durability in one size fits all. Personalize with a tear-out AS Colour label for a unique touch.",
    "fabric": "Light-mid weight, 100% cotton",
    "construction": "Reinforced short brim with stitching detail, triangle panels<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/13092/1179_WOS_BRIM_BUCKET_HAT_BLACK__70305.1713408580.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/17586/1179_WOS_BRIM_BUCKET_HAT_BLACK_INSIDE__28688.1724643888.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/16891/1179_WOS_BRIM_BUCKET_HAT_BONE__79376.1724643887.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/18363/1179_WOS_BRIM_BUCKET_HAT_BONE_BACK__92458.1727735488.jpg"
      },
      "Orchid": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/13094/1179_WOS_BRIM_BUCKET_HAT_ORCHID__40182.1724643887.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/906/17585/1179_WOS_BRIM_BUCKET_HAT_ORCHID_INSIDE__73604.1724643888.jpg"
      }
    }
  },
  {
    "id": "1162",
    "title": "Frame Nylon Cap",
    "description": "Explore the AS Colour Frame Nylon Cap: A high-profile snapback made from mid-weight 100% recycled nylon, combining structure with sustainability. Features include a curved peak, plastic snapback closure, tonal under-peak lining, and a tear-out AS Colour label for personalized wear.",
    "fabric": "Mid-weight, 100% recycled nylon",
    "construction": "Snapback cap, curved peak<br />Structured front, plastic snapback, tonal under-peak<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/15258/1162_FRAME_NYLON_CAP_BLACK_FRONT__78419.1713829458.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13107/1162_FRAME_NYLON_CAP_BLACK__94517.1713829457.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/15259/1162_FRAME_NYLON_CAP_BLACK_BACK__75201.1713842326.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/15199/1162_FRAME_NYLON_CAP_BONE_FRONT__96739.1713842325.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13108/1162_FRAME_NYLON_CAP_BONE__69020.1713842325.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13109/1162_FRAME_NYLON_CAP_BONE_BACK__44341.1713842325.jpg"
      },
      "Carolina Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/15200/1162_FRAME_NYLON_CAP_CAROLINA_BLUE_FRONT__36630.1721621466.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13512/1162_FRAME_NYLON_CAP_CAROLINA_BLUE__30030.1756688211.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13511/1162_FRAME_NYLON_CAP_CAROLINA_BLUE_BACK__52022.1721621466.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/22163/1162_FRAME_NYLON_CAP_KHAKI__35904.1747698993.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/22165/1162_FRAME_NYLON_CAP_KHAKI_SIDE__17176.1747698994.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/22164/1162_FRAME_NYLON_CAP_KHAKI_BACK__86220.1747698994.jpg"
      },
      "Mint": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/15203/1162_FRAME_NYLON_CAP_MINT_FRONT__06319.1720562152.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13113/1162_FRAME_NYLON_CAP_MINT__58757.1720562152.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/13233/1162_FRAME_NYLON_CAP_MINT_BACK__77206.1720562152.jpg"
      },
      "Smoke": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/16878/1162_FRAME_NYLON_CAP_SMOKE__54789.1747698992.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/16880/1162_FRAME_NYLON_CAP_SMOKE_SIDE__74597.1747698992.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/909/16879/1162_FRAME_NYLON_CAP_SMOKE_BACK__03621.1747698992.jpg"
      }
    }
  },
  {
    "id": "1108",
    "title": "Stock Trucker Cap",
    "description": "Explore the AS Colour Stock Trucker Cap: A high-profile snapback with a flat peak, featuring a mid-weight construction with a 100% cotton front and peak, paired with a breathable 100% polyester mesh back. Includes a plastic snapback closure, tonal under-peak lining, and tear-out AS Colour label for personalized comfort.",
    "fabric": "Mid weight, 100% cotton front and peak, 100% polyester mesh back",
    "construction": "Snapback cap, flat peak<br />Plastic snapback, tonal under-peak lining, mesh back<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16271/1108_TRUCKER_CAP_BLACK__90825.1717023716.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16407/1108_TRUCKER_CAP_BLACK_SIDE__92159.1718573889.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/13306/1108_TRUCKER_CAP_BLACK_BACK__80535.1717023716.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16272/1108_TRUCKER_CAP_NAVY__07185.1717023716.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16408/1108_TRUCKER_CAP_NAVY_SIDE__63632.1718573890.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/13301/1108_TRUCKER_CAP_NAVY_BACK__96898.1717023716.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24665/1108_TRUCKER_CAP_KHAKI__03075.1769050052.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24662/1108_TRUCKER_CAP_KHAKI_SIDE__51161.1769050051.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24664/1108_STOCK_TRUCKER_CAP_KHAKI_BACK__44730.1769050052.jpg"
      },
      "Smoke": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16276/1108_TRUCKER_CAP_SMOKE_SIDE__80854.1717023717.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24661/1108_TRUCKER_CAP_WALNUT__80172.1769050051.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24663/1108_TRUCKER_CAP_WALNUT_SIDE__24284.1769050051.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/24660/1108_STOCK_TRUCKER_CAP_WALNUT_BACK__54169.1769050051.jpg"
      },
      "Forest Green": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16270/1108_TRUCKER_CAP_FOREST_GREEN__14166.1717023716.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16266/1108_STOCK_TRUCKER_CAP_FOREST_GREEN_SIDE__58320.1717023716.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/919/16273/1108_TRUCKER_CAP_FOREST_GREEN_BACK__85131.1717023717.jpg"
      }
    }
  },
  {
    "id": "1114F",
    "title": "Surf Safety Cap",
    "description": "Stay safe and visible with the AS Colour Surf Safety Cap. Constructed from lightweight, quick-dry 100% recycled nylon, this mid-profile, unstructured snapback features a single front panel, plastic snapback closure, and tonal under-peak lining. Designed as a high-visibility safety garment, perfect for outdoor activities.",
    "fabric": "Light weight, 100% recycled nylon",
    "construction": "Unstructured snapback<br />Single panel at front, quick dry fabric, plastic snapback, tonal under-peak lining<br />One size fits all<br /><br />High visibility safety garment<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Safety Orange": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/944/13888/1114F_SURF_SAFETY_CAP_SAFETY_ORANGE__31435.1717123146.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/944/16293/1114F_SURF_SAFETY_CAP_SAFETY_ORANGE_BACK__11473.1717123147.jpg"
      },
      "Safety Yellow": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/944/13889/1114F_SURF_SAFETY_CAP_SAFETY_YELLOW__47006.1717123146.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/944/16294/1114F_SURF_SAFETY_CAP_SAFETY_YELLOW_BACK__51208.1717123147.jpg"
      }
    }
  },
  {
    "id": "1135",
    "title": "Access Cord Cap",
    "description": "Introducing the AS Colour Access Cord Cap, crafted from lightweight 100% cotton 16-wale partridge corduroy. This low-profile, six-panel cap features a curved peak, self-fabric adjustable fastener with a metal buckle, and tonal under-peak lining for a stylish, comfortable fit.",
    "fabric": "Light weight, 100% cotton 16-wale partridge corduroy",
    "construction": "Six panel cap, curved peak<br />Self fabric adjustable fastener with metal buckle, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15402/1135_ACCESS_CORD_CAP_BLACK__58508.1714518945.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15404/1135_ACCESS_CORD_CAP_BLACK_SIDE__97980.1714518945.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15403/1135_ACCESS_CORD_CAP_BLACK_BACK__54859.1714518945.jpg"
      },
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15405/1135_ACCESS_CORD_CAP_ECRU__75718.1714518945.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15408/1135_ACCESS_CORD_CAP_ECRU_SIDE__70416.1727221939.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15406/1135_ACCESS_CORD_CAP_ECRU_BACK__40496.1714518945.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/22141/1135_ACCESS_CORD_CAP_KHAKI__48147.1747696620.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/22143/1135_ACCESS_CORD_CAP_KHAKI_SIDE__61892.1747696621.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/22142/1135_ACCESS_CORD_CAP_KHAKI_BACK__97565.1747696620.jpg"
      },
      "Midnight Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15414/1135_ACCESS_CORD_CAP_MIDNIGHT_BLUE__55795.1747696619.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15416/1135_ACCESS_CORD_CAP_MIDNIGHT_BLUE_SIDE__58905.1747696619.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/992/15415/1135_ACCESS_CORD_CAP_MIDNIGHT_BLUE_BACK__86722.1747696619.jpg"
      }
    }
  },
  {
    "id": "1158",
    "title": "Class Linen Cap",
    "description": "AS Colour Class Linen Cap: Lightweight and refined, this mid-profile, five-panel cap is crafted from 100% linen. It features internal mesh structure support, a flat peak, and a self-fabric adjustable fastener with a metal buckle. Includes tonal under-peak lining and a tear-out AS Colour label for personalized comfort.",
    "fabric": "Light weight, 100% linen",
    "construction": "Five panel cap, flat peak<br />Internal mesh structure support, self fabric adjustable fastener with metal buckle, tonal under-peak lining<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15444/1158_CLASS_LINEN_CAP_BLACK__45095.1714519927.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15447/1158_CLASS_LINEN_CAP_BLACK_SIDE__03795.1714519927.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15446/1158_CLASS_LINEN_CAP_BLACK_BACK__99466.1714519926.jpg"
      },
      "Natural": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15448/1158_CLASS_LINEN_CAP_NATURAL__53551.1714519927.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15451/1158_CLASS_LINEN_CAP_NATURAL_SIDE__16268.1714519926.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/994/15450/1158_CLASS_LINEN_CAP_NATURAL_BACK__72503.1714519928.jpg"
      }
    }
  },
  {
    "id": "1183",
    "title": "Stock Camo Cap",
    "description": "Discover the AS Colour Stock Camo Cap: A high-profile snapback crafted from heavy-weight 100% cotton with an all-over camo print. Features include a structured front, plastic snapback closure, flat peak, tonal under-peak lining, stitching eyelets, and a self-fabric dome. One size fits all with a tear-out AS Colour label for personalized comfort.",
    "fabric": "Heavy weight, 100% cotton",
    "construction": "Snapback cap, flat peak<br />Structured front, plastic snapback, tonal under-peak lining, stitching eyelets, self fabric dome at top, camo print<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/995/15456/1183_STOCK_CAMO_CAP_CAMO__08499.1714520074.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/995/15460/1183_STOCK_CAMO_CAP_CAMO_SIDE__31995.1714520074.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/995/15458/1183_STOCK_CAMO_CAP_CAMO_BACK__36181.1714520074.jpg"
      }
    }
  },
  {
    "id": "1184",
    "title": "Stock 7-Panel Cap",
    "description": "Introducing the Stock 7-Panel Cap: An evolution of our original Stock Cap with a 7-panel structure. High-profile snapback cap with a flat peak, crafted from mid-weight 100% cotton. Features include a plastic snapback closure, tonal under-peak lining, stitching eyelets for ventilation, and a self-fabric dome at the top.&nbsp;",
    "fabric": "Mid weight, 100% cotton",
    "construction": "Snapback cap, flat peak<br />Plastic snapback, tonal under-peak lining, stitching eyelets, self fabric dome at top<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18486/1184_STOCK_7-PANEL_CAP_BLACK__61488.1730151004.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18488/1184_STOCK_7-PANEL_CAP_BLACK_SIDE__93213.1730151004.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18487/1184_STOCK_7-PANEL_CAP_BLACK_BACK__89910.1730151004.jpg"
      },
      "Bone": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18489/1184_STOCK_7-PANEL_CAP_BONE__95348.1730151004.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18491/1184_STOCK_7-PANEL_CAP_BONE_SIDE__91525.1730151004.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18490/1184_STOCK_7-PANEL_CAP_BONE_BACK__58697.1730151004.jpg"
      },
      "Midnight Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18493/1184_STOCK_7-PANEL_CAP_MIDNIGHT_BLUE__76433.1730151004.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18495/1184_STOCK_7-PANEL_CAP_MIDNIGHT_BLUE_BACK__80617.1730151004.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/22963/1184_STOCK_7-PANEL_CAP_WALNUT__73387.1751504928.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/22965/1184_STOCK_7-PANEL_CAP_WALNUT_SIDE__32602.1751504928.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/22964/1184_STOCK_7-PANEL_CAP_WALNUT_BACK__30860.1751504928.jpg"
      },
      "Midnight_blue": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1082/18496/1184_STOCK_7-PANEL_CAP_MIDNIGHT_BLUE_SIDE__45510.1730151004.jpg"
      }
    }
  },
  {
    "id": "1190",
    "title": "Mesh Trucker Cap",
    "description": "",
    "fabric": "Mid weight 60% cotton 40% Recycled Polyester front and peak, 100% Recycled polyester mesh back",
    "construction": "Snapback cap, shallow curved peak, tonal mesh back, plastic snapback, tonal under-peak lining</br>One size fits all </br></br>Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Army": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21545/1190_MESH_TRUCKER_CAP_ARMY__01734.1745745773.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21548/1190_MESH_TRUCKER_CAP_ARMY_SIDE__70496.1745745773.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21547/1190_MESH_TRUCKER_CAP_ARMY_BACK__59488.1745745773.jpg"
      },
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21550/1190_MESH_TRUCKER_CAP_BLACK__88022.1745745773.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21553/1190_MESH_TRUCKER_CAP_BLACK_SIDE__37641.1745745773.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21551/1190_MESH_TRUCKER_CAP_BLACK_BACK__40847.1745745773.jpg"
      },
      "Cobalt": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/23260/1190_MESH_TRUCKER_CAP_COBALT__23526.1752706628.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/23261/1190_MESH_TRUCKER_CAP_COBALT_SIDE__14810.1752706628.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/23259/1190_MESH_TRUCKER_CAP_COBALT_BACK__65941.1752706628.jpg"
      },
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21560/1190_MESH_TRUCKER_CAP_ECRU__36710.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21563/1190_MESH_TRUCKER_CAP_ECRU_SIDE__08448.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21562/1190_MESH_TRUCKER_CAP_ECRU_BACK__33332.1752706626.jpg"
      },
      "Forest Green": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21565/1190_MESH_TRUCKER_CAP_FOREST_GREEN__63907.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21567/1190_MESH_TRUCKER_CAP_FOREST_GREEN_BACK__59284.1752706626.jpg"
      },
      "Ink Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21570/1190_MESH_TRUCKER_CAP_INK_BLUE__11694.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21572/1190_MESH_TRUCKER_CAP_INK_BLUE_BACK__88418.1752706626.jpg"
      },
      "Khaki": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21575/1190_MESH_TRUCKER_CAP_KHAKI__66383.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21578/1190_MESH_TRUCKER_CAP_KHAKI_SIDE__94201.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21577/1190_MESH_TRUCKER_CAP_KHAKI_BACK__93745.1752706626.jpg"
      },
      "Petrol Blue": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21580/1190_MESH_TRUCKER_CAP_PETROL_BLUE__41565.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21582/1190_MESH_TRUCKER_CAP_PETROL_BLUE_BACK__95939.1752706626.jpg"
      },
      "Shadow": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21585/1190_MESH_TRUCKER_CAP_SHADOW__37531.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21589/1190_MESH_TRUCKER_CAP_SHADOW_SIDE__63904.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21586/1190_MESH_TRUCKER_CAP_SHADOW_BACK__60070.1752706626.jpg"
      },
      "Storm": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21590/1190_MESH_TRUCKER_CAP_STORM__09157.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21593/1190_MESH_TRUCKER_CAP_STORM_SIDE__97877.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21592/1190_MESH_TRUCKER_CAP_STORM_BACK__76001.1752706626.jpg"
      },
      "Walnut": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21595/1190_MESH_TRUCKER_CAP_WALNUT__27619.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21598/1190_MESH_TRUCKER_CAP_WALNUT_SIDE__63513.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21597/1190_MESH_TRUCKER_CAP_WALNUT_BACK__13863.1752706626.jpg"
      },
      "White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21600/1190_MESH_TRUCKER_CAP_WHITE__74949.1752706626.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21604/1190_MESH_TRUCKER_CAP_WHITE_SIDE__53311.1752706626.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21601/1190_MESH_TRUCKER_CAP_WHITE_BACK__40161.1752706626.jpg"
      },
      "Forest_green": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21568/1190_MESH_TRUCKER_CAP_FOREST_GREEN_SIDE__03961.1752706626.jpg"
      },
      "Ink_blue": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21573/1190_MESH_TRUCKER_CAP_INK_BLUE_SIDE__82918.1752706626.jpg"
      },
      "Petrol_blue": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1179/21583/1190_MESH_TRUCKER_CAP_PETROL_BLUE_SIDE__25198.1752706626.jpg"
      }
    }
  },
  {
    "id": "1191",
    "title": "Mesh Contrast Trucker Cap",
    "description": "",
    "fabric": "Mid weight 60% cotton 40% Recycled Polyester front and peak, 100% Recycled polyester mesh back",
    "construction": "Snapback cap, shallow curved peak, contrast mesh back, plastic snapback, tonal under-peak lining</br>One size fits all </br></br>Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Army/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21608/1191_MESH_CONTRAST_TRUCKER_CAP_ARMY_BLACK__81853.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21610/1191_MESH_CONTRAST_TRUCKER_CAP_ARMY_BLACK_BACK__83529.1745746567.jpg"
      },
      "Black/White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21613/1191_MESH_CONTRAST_TRUCKER_CAP_BLACK_WHITE__51949.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21615/1191_MESH_CONTRAST_TRUCKER_CAP_BLACK_WHITE_BACK__04455.1745746567.jpg"
      },
      "Forest/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21618/1191_MESH_CONTRAST_TRUCKER_CAP_FOREST_BLACK__65895.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21619/1191_MESH_CONTRAST_TRUCKER_CAP_FOREST_BLACK_BACK__11035.1745746567.jpg"
      },
      "Ink Blue/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21623/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_BLACK__24310.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21625/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_BLACK_BACK__29800.1745746567.jpg"
      },
      "Ink Blue/White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21628/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_WHITE__61358.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21629/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_WHITE_BACK__71014.1745746567.jpg"
      },
      "Khaki/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21633/1191_MESH_CONTRAST_TRUCKER_CAP_KHAKI_BLACK__74321.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21635/1191_MESH_CONTRAST_TRUCKER_CAP_KHAKI_BLACK_BACK__59039.1745746567.jpg"
      },
      "Shadow/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21638/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_BLACK__93777.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21640/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_BLACK_BACK__13927.1745746567.jpg"
      },
      "Shadow/White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21643/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_WHITE__13570.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21644/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_WHITE_BACK__30481.1745746567.jpg"
      },
      "Storm/White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21660/1191_MESH_CONTRAST_TRUCKER_CAP_STORM_WHITE__81625.1745746570.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21648/1191_MESH_CONTRAST_TRUCKER_CAP_STORM_WHITE_BACK__50356.1745746567.jpg"
      },
      "Walnut/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21651/1191_MESH_CONTRAST_TRUCKER_CAP_WALNUT_BLACK__78332.1745746567.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21653/1191_MESH_CONTRAST_TRUCKER_CAP_WALNUT_BLACK_BACK__18304.1745746567.jpg"
      },
      "Army_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21611/1191_MESH_CONTRAST_TRUCKER_CAP_ARMY_BLACK_SIDE__45849.1745746567.jpg"
      },
      "Black_white": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21617/1191_MESH_CONTRAST_TRUCKER_CAP_BLACK_WHITE_SIDE__86309.1745746567.jpg"
      },
      "Forest_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21622/1191_MESH_CONTRAST_TRUCKER_CAP_FOREST_BLACK_SIDE__33228.1745746567.jpg"
      },
      "Ink_blue_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21627/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_BLACK_SIDE__12653.1745746567.jpg"
      },
      "Ink_blue_white": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21632/1191_MESH_CONTRAST_TRUCKER_CAP_INK_BLUE_WHITE_SIDE__71883.1745746567.jpg"
      },
      "Khaki_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21636/1191_MESH_CONTRAST_TRUCKER_CAP_KHAKI_BLACK_SIDE__80846.1745746567.jpg"
      },
      "Shadow_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21641/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_BLACK_SIDE__33363.1745746567.jpg"
      },
      "Shadow_white": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21645/1191_MESH_CONTRAST_TRUCKER_CAP_SHADOW_WHITE_SIDE__67282.1745746567.jpg"
      },
      "Storm_white": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21650/1191_MESH_CONTRAST_TRUCKER_CAP_STORM_WHITE_SIDE__02612.1745746567.jpg"
      },
      "Walnut_black": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1180/21655/1191_MESH_CONTRAST_TRUCKER_CAP_WALNUT_BLACK_SIDE__09433.1745746567.jpg"
      }
    }
  },
  {
    "id": "1119C",
    "title": "Surf Cotton Camo Cap",
    "description": "",
    "fabric": "Mid weight, 55% cotton, 45% polyester",
    "construction": "Unstructured snapback<br />Single panel at front, plastic snapback, tonal under-peak lining, Camo pattern may vary from piece to piece<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/23713/1119C_SURF_COTTON_CAMO_CAP_TREE_CAMO__49621.1756677762.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/23660/1119C_SURF_COTTON_CAMO_CAP_TREE_CAMO_THUMB__53470.1756677760.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/23661/1119C_SURF_COTTON_CAMO_CAP_TREE_CAMO_INSIDE__73797.1778124067.jpg"
      },
      "Desert Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/25223/1119C_SURF_COTTON_CAMO_CAP_DESERT_CAMO__75417.1778199205.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/25224/1119C_SURF_COTTON_CAMO_CAP_DESERT_CAMO_SIDE__38823.1778199205.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/25222/1119C_SURF_COTTON_CAMO_CAP_DESERT_CAMO_BACK__74586.1778199204.jpg"
      },
      "Side": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1265/23714/1119C_SURF_COTTON_CAMO_CAP_SIDE__81760.1756677762.jpg"
      }
    }
  },
  {
    "id": "1154C",
    "title": "Class Two-Tone Camo Cap",
    "description": "",
    "fabric": "Mid weight, 100% cotton body. 55% cotton, 45% polyester peak",
    "construction": "Unstructured snapback<br />Single panel at front, plastic adjustable snapback, contrast dome, tonal eyelets lining, mesh insert, Camo pattern may vary from piece to piece<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Mid Profile",
    "colors": {
      "Natural/Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1331/24761/1154C_CLASS_TWO-TONE_CAMO_CAP_NATURAL_TREE_CAMO__20133.1772074499.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1331/24762/1154C_CLASS_TWO-TONE_CAMO_CAP_NATURAL_TREE_CAMO_BACK__66898.1772493873.jpg"
      },
      "Natural_tree_camo": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1331/24765/1154C_CLASS_TWO-TONE_CAMO_CAP_NATURAL_TREE_CAMO_SIDE__18746.1772493873.jpg"
      }
    }
  },
  {
    "id": "1165C",
    "title": "Frame Two-Tone Camo Cap",
    "description": "",
    "fabric": "Mid weight, 100% cotton body. 55% cotton, 45% polyester peak",
    "construction": "Snapback cap, curved contrast peak<br/>Contrast dome, structured front, plastic adjustable snapback, tonal eyelets. Camo pattern may vary from piece to piece<br/>One size fits all<br/><br/>Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Natural/Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1332/24763/1165C_FRAME_TWO-TONE_CAMO_CAP_NATURAL_TREE_CAMO__08035.1781492448.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1332/24764/1165C_FRAME_TWO-TONE_CAMO_CAP_NATURAL_TREE_CAMO_BACK__52584.1781492448.jpg"
      },
      "Black/Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1332/25327/1165C_FRAME_TWO-TONE_CAMO_CAP_BLACK_TREE_CAMO__11290.1781492318.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1332/25328/1165C_FRAME_TWO-TONE_CAMO_CAP_BLACK_TREE_CAMO_BACK__60531.1781492448.jpg"
      },
      "Black_tree_camo": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1332/25329/1165C_FRAME_TWO-TONE_CAMO_CAP_BLACK_TREE_CAMO_SIDE__74423.1781492448.jpg"
      }
    }
  },
  {
    "id": "1166",
    "title": "Frame Perforated Cap",
    "description": "",
    "fabric": "Light-weight, 92% recycled polyester, 8% spandex",
    "construction": "Snapback cap, curved peak, perforated side panels<br />Structured front, plastic snapback, tonal under-peak<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24867/1166_FRAME_PERFORATED_CAP_BLACK__55467.1773610686.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24869/1166_FRAME_PERFORATED_CAP_BLACK_SIDE__74333.1773612936.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24868/1166_FRAME_PERFORATED_CAP_BLACK_BACK__37370.1773612936.jpg"
      },
      "Ecru": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24870/1166_FRAME_PERFORATED_CAP_ECRU__67466.1773612936.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24872/1166_FRAME_PERFORATED_CAP_ECRU_SIDE__02927.1773612936.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24871/1166_FRAME_PERFORATED_CAP_ECRU_BACK__96315.1773612936.jpg"
      },
      "Navy": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24873/1166_FRAME_PERFORATED_CAP_NAVY__39882.1773612936.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24875/1166_FRAME_PERFORATED_CAP_NAVY_SIDE__08424.1773612936.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24874/1166_FRAME_PERFORATED_CAP_NAVY_BACK__75605.1773612936.jpg"
      },
      "Shadow": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24876/1166_FRAME_PERFORATED_CAP_SHADOW__92596.1773612936.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24878/1166_FRAME_PERFORATED_CAP_SHADOW_SIDE__67217.1773612936.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24877/1166_FRAME_PERFORATED_CAP_SHADOW_BACK__80498.1773612936.jpg"
      },
      "White": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24879/1166_FRAME_PERFORATED_CAP_WHITE__07175.1773612936.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24881/1166_FRAME_PERFORATED_CAP_WHITE_SIDE__10166.1773612936.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1336/24880/1166_FRAME_PERFORATED_CAP_WHITE_BACK__08605.1773612936.jpg"
      }
    }
  },
  {
    "id": "1130C",
    "title": "Access Camo Cap",
    "description": "",
    "fabric": "Mid weight, 55% cotton, 45% polyester",
    "construction": "Six panel cap, curved peak. Camo pattern may vary from piece to piece.<br />Adjustable fastener with metal clasp, tonal under-peak lining<br>One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "Low Profile",
    "colors": {
      "Desert Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/25212/1130C_ACCESS_CAMO_CAP_DESERT_CAMO__94796.1778125359.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/25213/1130C_ACCESS_CAMO_CAP_DESERT_CAMO_SIDE__52055.1778125359.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/25211/1130C_ACCESS_CAMO_CAP_DESERT_CAMO_BACK__38742.1778125359.jpg"
      },
      "Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/24891/1130C_ACCESS_CAMO_CAP_TREE_CAMO__87398.1778125356.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/24894/1130C_ACCESS_CAMO_CAP_TREE_CAMO_BACK__76922.1778125356.jpg"
      },
      "Tree_camo": {
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1337/24896/1130C_ACCESS_CAMO_CAP_TREE_CAMO_SIDE__65620.1778125356.jpg"
      }
    }
  },
  {
    "id": "1172C",
    "title": "Wide Brim Camo Bucket Hat",
    "description": "",
    "fabric": "Mid weight, 55% cotton, 45% polyester",
    "construction": "Reinforced large brim with stitching detail, side eyelets, self-fabric chin strap, plastic adjustable toggle. Camo pattern may vary from piece to piece.<br />One size fits all<br /><br />Tear-out AS Colour label",
    "customFit": "",
    "colors": {
      "Desert Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1338/25218/1172C_WIDEBRIM_CAMO_BUCKET_HAT_DESERT_CAMO__62336.1778125744.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1338/25219/1172C_WIDEBRIM_CAMO_BUCKET_HAT_DESERT_CAMO_BACK__83800.1778125745.jpg"
      },
      "Tree Camo": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1338/24907/1172C_WIDEBRIM_CAMO_BUCKET_HAT_TREE_CAMO__46567.1778125742.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1338/24908/1172C_WIDEBRIM_CAMO_BUCKET_HAT_TREE_CAMO_BACK__33020.1778125742.jpg"
      }
    }
  },
  {
    "id": "1110C",
    "title": "Stock Contrast Camo Trucker",
    "description": "",
    "fabric": "Mid weight, 55% cotton 45% polyester front and peak, 100% recycled polyester mesh back",
    "construction": "Snapback cap, flat peak<br />Plastic snapback, tonal under-peak lining, mesh back<br/>One size fits all<br/><br/>Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Desert Camo/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/25209/1110C_STOCK_CONTRAST_TRUCKER_DESERT_CAMO_BLACK__81342.1778124253.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/25210/1110C_STOCK_CONTRAST_TRUCKER_DESERT_CAMO_BLACK_SIDE__63974.1778124253.jpg"
      },
      "Tree Camo/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/24915/1110C_STOCK_CONTRAST_TRUCKER_TREE_CAMO_BLACK__73693.1778124250.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/24921/1110C_STOCK_CONTRAST_TRUCKER_TREE_CAMO_BLACK_SIDE__89203.1778124250.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/24919/1110C_STOCK_CONTRAST_TRUCKER_TREE_CAMO_BLACK_BACK__38205.1778124250.jpg"
      },
      "Desert Camo/Black Back": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1339/25208/1110C_STOCK_CONTRAST_TRUCKER_DESERT_CAMO_BLACK_BACK__35345.1778124251.jpg"
      }
    }
  },
  {
    "id": "1191C",
    "title": "Mesh Contrast Camo Cap",
    "description": "",
    "fabric": "Mid weight 55% cotton 44% recycled polyester front and peak, 100% recycled polyester mesh back",
    "construction": "Snapback cap, shallow curved peak, contrast mesh back, plastic snapback, tonal under-peak lining</br>One size fits all </br></br>Tear-out AS Colour label",
    "customFit": "High Profile",
    "colors": {
      "Desert Camo/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/25215/1191C_MESH_CONTRAST_CAMO_CAP_DESERT_CAMO_BLACK__99826.1778125549.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/25216/1191C_MESH_CONTRAST_CAMO_CAP_DESERT_CAMO_BLACK_SIDE__76918.1778125550.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/25214/1191C_MESH_CONTRAST_CAMO_CAP_DESERT_CAMO_BLACK_BACK__61034.1778125549.jpg"
      },
      "Tree Camo/Black": {
        "front": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/24928/1191C_MESH_CONTRAST_CAMO_CAP_TREE_CAMO_BLACK__26272.1778125547.jpg",
        "side": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/24931/1191C_MESH_CONTRAST_CAMO_CAP_TREE_CAMO_BLACK_SIDE__20888.1778125547.jpg",
        "back": "https://cdn11.bigcommerce.com/s-hsi95a83fz/images/stencil/1280w/products/1340/24929/1191C_MESH_CONTRAST_CAMO_CAP_TREE_CAMO_BLACK_BACK__75901.1778125547.jpg"
      }
    }
  }
] as LiveCatalogHatSeed[];
