export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://visuaal.com/#organization",
  "name": "Visuaal",
  "description": "Agence digitale spécialisée dans la création de sites web, le design UX/UI et le marketing digital",
  "url": "https://visuaal.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://visuaal.com/logo.png",
    "width": "600",
    "height": "200"
  },
  "sameAs": [
    "https://www.linkedin.com/company/visuaal",
    "https://www.instagram.com/visuaal.agency"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-23-45-67-89",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "Paris",
    "postalCode": "75001",
    "streetAddress": "123 Rue de la Digital"
  }
}

export const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://visuaal.com/#website",
  "url": "https://visuaal.com",
  "name": "Visuaal - Agence Digitale Créative",
  "description": "Agence digitale spécialisée dans la création de sites web, le design UX/UI et le marketing digital",
  "publisher": {
    "@id": "https://visuaal.com/#organization"
  },
  "inLanguage": "fr-FR"
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})