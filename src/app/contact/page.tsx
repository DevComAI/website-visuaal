import { Metadata } from 'next'
import HeroContact from '@/components/sections/HeroContact'

export const metadata: Metadata = {
  title: 'Nous Contacter',
  description: 'Contactez l&apos;équipe Visuaal pour vos projets de communication visuelle. Devis gratuit et accompagnement personnalisé.',
  keywords: ['contact', 'devis', 'conseil', 'support', 'assistance'],
}

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Contact Section */}
      <HeroContact />

 

    </div>
  )
}

export default ContactPage