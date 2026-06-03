export const siteConfig = {
  name: "Frizeria din Volintiri",
  phoneLocal: "067 468 086",
  phoneInternational: "+373 674 68 086",
  phoneTel: "+37367468086",
  locationName: "Centrul pentru Antreprenori",
  addressLine: "Volintiri, Ștefan Vodă, Moldova",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=46.433083,29.603240&hl=en&z=17&output=embed",
  mapsOpenUrl: "https://maps.app.goo.gl/yfwQSubUC7cHcGJt9",
} as const;

export const images = {
  hero: "/images/hair-3.jpg",
  stylist: "/images/nails-2.jpg",
  serviceHair: "/images/hair.jpg",
  serviceNails: "/images/nails.jpg",
  serviceWax: "/images/wax-legs.jpg",
} as const;

export const galleryByService = {
  hair: [
    "/images/hair-2.jpg",
    "/images/hair-4.jpg",
    "/images/hair.jpg",
    "/images/hair-3.jpg",
  ],
  nails: [
    "/images/nails-3.jpg",
    "/images/nails-4.jpg",
    "/images/nails.jpg",
    "/images/nails-2.jpg",
  ],
  wax: [
    "/images/wax-legs.jpg",
    "/images/wax-beads-2.jpg",
    "/images/wax-arms.jpg",
    "/images/wax-beads.jpg",
  ],
} as const;

export const certificateImages = [
  "/images/certificate-1.jpg",
  "/images/certificate-2.jpg",
  "/images/certificate-3.jpg",
  "/images/certificate-4.jpg",
  "/images/certificate-5.jpg",
  "/images/certificate-6.jpg",
  "/images/certificate-7.jpg",
  "/images/certificate-8.jpg",
] as const;

export const galleryServiceKeys = ["hair", "nails", "wax"] as const;

export const faqKeys = [
  "booking",
  "walkins",
  "waxing",
  "hairColor",
  "privacy",
] as const;
