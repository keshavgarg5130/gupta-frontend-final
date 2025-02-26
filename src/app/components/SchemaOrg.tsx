export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gupta Switchgears",
    "url": "https://guptaswitchgears.com",
    "logo": "https://guptaswitchgears.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9311440607",
      "contactType": "customer service",
      "email": "info@guptaswitchgears.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
