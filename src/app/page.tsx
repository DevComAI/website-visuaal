import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import CTASection from '@/components/ui/CTASection'
import { organizationSchema, websiteSchema } from '@/lib/schema'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero 
        backgroundImage="/img/home/hero-home.png"
        title="VISUAAL"
        subtitle="Innovative visual solutions to capture attention and elevate your brand."
        description="At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance."
      />
      <Services />
      <CTASection 
        title="Découvrez toutes nos solutions"
        description="Explorez notre gamme complète de produits pour transformer votre communication visuelle."
        primaryButtonText="Voir nos produits"
        primaryButtonHref="/products"
        secondaryButtonText="Nous contacter"
        secondaryButtonHref="/contact"
        backgroundColor="gray"
      />
      <About />
      <Contact />
    </>
  );
}
