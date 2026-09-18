export type ProductSpec = { label: string; value: string };

export type ScooterModel = {
  slug: string;
  name: string;
  shortName: string;
  code?: string;
  image: string;
  gallery?: string[];
  lead: string;
  note?: string;
  status?: "coming-soon";
  colors: string[];
  specs: ProductSpec[];
  features: string[];
};

export const sharedFeatures = [
  "Long Battery Life",
  "Vibrant Digital Display",
  "Variable Drive Modes",
  "LED Projector Head Lamp",
  "Remote Lock",
  "Steering Lock",
  "Powerful Hub Motor",
  "Anti-Theft Alarm",
  "Powerful BLDC Hub Motor",
  "Hydraulic Suspensions",
  "Eco Friendly",
  "Safe and Reliable",
  "Zero Pollution",
  "Long Range",
];

const commonSpecs = (rearTyre: string): ProductSpec[] => [
  { label: "Front tyre", value: "90-90 - 12" },
  { label: "Rear tyre", value: rearTyre },
  { label: "Tyre type", value: "Tubeless" },
  { label: "Braking technology", value: "Regenerative braking system" },
  { label: "Front brake", value: "Disk" },
  { label: "Rear brake", value: "Drum" },
  { label: "Controller", value: "48-60-72V" },
];

export const models: ScooterModel[] = [
  {
    slug: "gt-soul", name: "GT - SOUL", shortName: "GT Soul", code: "SL",
    image: "/assets/gt-drive/cleaned/GT_SOUL_IMG_4014_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/GT_SOUL_IMG_4014_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_IMG_4016_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_IMG_4020_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_IMG_4018_clean.webp", "/assets/gt-drive/cleaned/Soul_IMG_4054_clean.webp", "/assets/gt-drive/cleaned/Soul_IMG_4057_clean.webp", "/assets/gt-drive/cleaned/Soul_IMG_4051_clean.webp", "/assets/gt-drive/cleaned/Soul_IMG_4055_clean.webp"],
    lead: "The everyday Soul. Three colours, one dependable ride.",
    colors: ["White", "Black", "Grey"], specs: commonSpecs("90-100 - 10"), features: sharedFeatures,
  },
  {
    slug: "gt-soul-nxt", name: "GT - SOUL NXT", shortName: "GT Soul NXT", code: "DL",
    image: "/assets/gt-drive/cleaned/GT_SOUL_NXT_IMG_4026_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/GT_SOUL_NXT_IMG_4026_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_NXT_IMG_4032_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_NXT_IMG_4034_clean.webp", "/assets/gt-drive/cleaned/GT_SOUL_NXT_IMG_4028_clean.webp"],
    lead: "The Soul NXT. Same Soul foundation, sharper city stance.",
    colors: ["White", "Black", "Grey"], specs: commonSpecs("90-100 - 10"), features: sharedFeatures,
  },
  {
    slug: "gt-ryd", name: "GT - RYD", shortName: "GT RYD", code: "CS",
    image: "/assets/gt-drive/cleaned/Flying_ryd_IMG_4096_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/Flying_ryd_IMG_4096_clean.webp", "/assets/gt-drive/cleaned/Flying_ryd_IMG_4097_clean.webp", "/assets/gt-drive/cleaned/Flying_ryd_IMG_4099_clean.webp", "/assets/gt-drive/cleaned/Flying_ryd_IMG_4090_clean.webp", "/assets/gt-drive/cleaned/Flying_ryd_IMG_4088_clean.webp"],
    lead: "The RYD. Six colours across the widest palette in the range.",
    colors: ["White", "Black", "Orange", "Honda Grey", "Maroon/White", "Silver Grey"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-ryd-plus", name: "GT - RYD PLUS", shortName: "GT RYD Plus", code: "FH",
    image: "/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4077_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4077_clean.webp", "/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4078_clean.webp", "/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4079_clean.webp", "/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4076_clean.webp", "/assets/gt-drive/cleaned/Flying_Ryd_plus_IMG_4074_clean.webp"],
    lead: "The RYD Plus. Five colours, planted stance, everyday range.",
    colors: ["White", "Black", "Honda Grey", "Orange", "Silver Grey"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-one-plus", name: "GT - ONE PLUS", shortName: "GT One Plus",
    image: "/assets/gt-drive/cleaned/Flying_plus_IMG_4063_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/Flying_plus_IMG_4063_clean.webp", "/assets/gt-drive/cleaned/Flying_plus_IMG_4065_clean.webp", "/assets/gt-drive/cleaned/Flying_plus_IMG_4064_clean.webp", "/assets/gt-drive/cleaned/Flying_plus_IMG_4066_clean.webp"],
    lead: "The One Plus. Compact, contemporary, three-colour lineup.",
    note: "Model code will be confirmed ahead of launch.",
    colors: ["Green", "Black", "Grey"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-champion", name: "GT - CHAMPION", shortName: "GT Champion", code: "CJ",
    image: "/assets/gt-drive/cleaned/Champion_IMG_4043_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/Champion_IMG_4043_clean.webp", "/assets/gt-drive/cleaned/Champion_IMG_4044_clean.webp", "/assets/gt-drive/cleaned/Champion_IMG_4047_clean.webp", "/assets/gt-drive/cleaned/Champion_IMG_4045_clean.webp", "/assets/gt-drive/cleaned/Champion_IMG_4046_clean.webp", "/assets/gt-drive/cleaned/Champion_IMG_4048_clean.webp"],
    lead: "The Champion. Extra-long wheelbase, five colour options.",
    colors: ["Matte Shale Green/Black", "Matte Coffee Brown/Black", "Tyrant Gold/Black", "White/Black", "Black"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-flying", name: "GT - FLYING", shortName: "GT Flying", code: "E4",
    image: "/assets/gt-drive/cleaned/Flying_E4_IMG_4002_clean.webp",
    gallery: ["/assets/gt-drive/cleaned/Flying_E4_IMG_4002_clean.webp", "/assets/gt-drive/cleaned/Flying_E4_IMG_4004_clean.webp", "/assets/gt-drive/cleaned/Flying_E4_IMG_4003_clean.webp", "/assets/gt-drive/cleaned/Flying_E4_IMG_4006_clean.webp", "/assets/gt-drive/cleaned/Flying_E4_IMG_4005_clean.webp"],
    lead: "The Flying. Five bold two-tone finishes and a sporty stance.",
    colors: ["Red/Black", "Peacock Blue/Black", "Orange/Black", "Silver Grey/Black", "Yellow/Black"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-drive-pro", name: "GT - DRIVE PRO", shortName: "GT Drive Pro",
    image: "/assets/gt-drive/gt-drive-pro-real.webp",
    lead: "The flagship Drive Pro. Every GT Drive feature, in a single machine.",
    colors: ["Color may vary depending on availability"], specs: commonSpecs("90-90 - 12"), features: sharedFeatures,
  },
  {
    slug: "gt-chetak", name: "GT - CHETAK", shortName: "GT Chetak",
    image: "/assets/gt-drive/gt-chetak.webp",
    lead: "The Chetak. Next on the road — full details closer to launch.", status: "coming-soon",
    colors: ["Color may vary depending on availability"], specs: [],
    features: ["Eco Friendly", "Safe and Reliable", "Zero Pollution", "Long Range"],
  },
];

export const locations = [
  { state: "Uttar Pradesh", address: "Plot No. 266, Kasna Ecotech-XI, Gautam Buddha Nagar, Uttar Pradesh - 201310" },
  { state: "Bihar", address: "Khata No. 113, Mohiudinpur, Near Punpun River, Opp. Bakhpur Bagicha, Sakraicha P.O Punun, Distt Patna, Bihar - 804453" },
  { state: "Maharashtra", address: "Ground Floor, C-5, Shree Rajlaxmi Logistics Park, Vapde Kharbav, Thane, Maharashtra - 421302" },
  { state: "Madhya Pradesh", address: "Khasra No. 246/12, Sanwer Indore, Madhya Pradesh - 453551" },
  { state: "Telangana", address: "Plot No.17, Phase-V, Navodaya Society, IDA Cherlapally, Near Hindustan Cables Ltd, Uppal, Medchal Malkajgiri, Telangana - 500051" },
];

export const contact = {
  phones: ["+91 9811712171", "+91 9217901112", "+91 9217901113", "+91 9217901114"],
  email: "info@gtdrivepro.com",
  whatsapp: "919811712171",
};

export const getModel = (slug: string) => models.find((model) => model.slug === slug);
