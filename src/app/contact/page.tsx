import { Metadata } from 'next'
import HeroContact from '@/components/sections/HeroContact'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact the VISUAAL team for your digital signage projects. Free consultation and personalized support. Based in Dubai, Paris, and Shenzhen.',
  keywords: ['contact visuaal', 'digital signage quote', 'consultation', 'support', 'assistance', 'get in touch'],
  openGraph: {
    title: 'Contact Us - Get in Touch | Visuaal',
    description: 'Contact the VISUAAL team for your digital signage projects. Free consultation and personalized support.',
    images: [
      {
        url: '/img/contact/hero.png',
        width: 1200,
        height: 630,
        alt: 'Contact Visuaal - Digital Signage Experts',
      },
    ],
  },
}

const ContactPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.com' },
        { name: 'Contact', url: 'https://visuaal.com/contact' }
      ])
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Contact Section */}
      <HeroContact />

 

    </div>
  )
}

export default ContactPage