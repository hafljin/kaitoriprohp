export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '買取専門店',
    description: '高価買取で安心・信頼の買取サービス',
    telephone: '0120-000-0000',
    priceRange: '¥¥',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '東京',
      addressCountry: 'JP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '100',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '買取専門店',
    url: 'https://example.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://example.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
