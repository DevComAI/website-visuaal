import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'

export const metadata: Metadata = {
  title: 'DOOH - Digital Out Of Home | Visuaal',
  description: 'Solutions d&apos;affichage publicitaire numérique extérieur. Écrans haute luminosité, gestion de contenu et ciblage géolocalisé.',
  keywords: ['DOOH', 'affichage extérieur', 'publicité numérique', 'écrans publicitaires', 'outdoor digital'],
}

const DOOHPage = () => {


  return (
    <div className="min-h-screen">

      <Hero 
        backgroundImage="/img/home/product-dooh.png"
        title="DOOH"
        subtitle="Catch the eye, stay in mind, DOOH is reinventing advertising."
        showScrollIndicator={false}
      />

<TitlePage

    title="WHAT IS DOOH ?"
    paragraphs={[
      "DOOH (Digital Out Of Home) is the new generation of outdoor advertising. More than just a screen, it's a dynamic, high-impact media channel that grabs attention in the heart of the city, on streets, in shop windows, malls, and high-traffic areas.",
      "With animated and programmable content, DOOH lets brands deliver the right message, at the right time, in the right place.",
      "A powerful way to boost visibility and make a lasting impression."
    ]}
    backgroundImage="DOOH.png"
  />


    </div>
  )
}

export default DOOHPage