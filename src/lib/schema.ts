export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://visuaal.com/#organization",
  "name": "Visuaal",
  "description": "Leading provider of innovative digital signage solutions including DOOH advertising, LED screens, and holographic displays",
  "url": "https://visuaal.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://visuaal.com/logo/logo-full.svg",
    "width": "314",
    "height": "268"
  },
  "sameAs": [
    "https://www.linkedin.com/company/visuaal",
    "https://www.instagram.com/visuaal.agency"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-50-123-4567",
    "contactType": "customer service",
    "availableLanguage": ["English", "French"],
    "email": "contact@visuaal.ai"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE",
    "addressLocality": "Dubai",
    "streetAddress": "Blue Tower, Block A&B Office number 110, Sheikh Zayed Road"
  }
}

export const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://visuaal.com/#website",
  "url": "https://visuaal.com",
  "name": "Visuaal - Digital Signage & Visual Solutions",
  "description": "Leading provider of innovative digital signage solutions including DOOH advertising, LED screens, and holographic displays",
  "publisher": {
    "@id": "https://visuaal.com/#organization"
  },
  "inLanguage": "en-US"
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

// Product schemas for each product page
export const doohProductSchema = {
  "@type": "Product",
  "name": "DOOH - Digital Out Of Home Advertising",
  "description": "DOOH (Digital Out Of Home) is the new generation of outdoor advertising. Dynamic, high-impact media channel that grabs attention in high-traffic areas.",
  "brand": {
    "@type": "Brand",
    "name": "Visuaal"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "Contact for pricing"
  },
  "image": "https://visuaal.com/img/home/product-dooh.png"
}

export const ledScreenProductSchema = {
  "@type": "Product",
  "name": "LED Screens - Indoor & Outdoor Solutions",
  "description": "LED displays offering stunning, vibrant visuals. Available for indoor and outdoor use, retail, events, or corporate spaces with unmatched flexibility.",
  "brand": {
    "@type": "Brand",
    "name": "Visuaal"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "Contact for pricing"
  },
  "image": "https://visuaal.com/img/home/product-led-screen.png"
}

export const humanBoxProductSchema = {
  "@type": "Product",
  "name": "Human Box - Holographic Display Technology",
  "description": "Holographic boxes offering a spectacular way to showcase your content in 3D, floating in space. No headset or glasses required. Available in multiple sizes.",
  "brand": {
    "@type": "Brand",
    "name": "Visuaal"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "Contact for pricing"
  },
  "image": "https://visuaal.com/img/humanbox/humanbox1.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "24"
  }
}