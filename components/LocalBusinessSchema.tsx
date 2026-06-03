import { siteConfig } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locationName,
      addressLocality: "Volintiri",
      addressRegion: "Ștefan Vodă",
      addressCountry: "MD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.4266,
      longitude: 29.6058,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
