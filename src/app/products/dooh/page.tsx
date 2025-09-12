import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'
import DoohContent from '@/components/sections/DoohContent'
import DoohTestimonial from '@/components/sections/DoohTestimonial'
import SplineViewer from '@/components/ui/SplineViewer'

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
        subtitle={<><GradientText>Catch</GradientText> the eye, <GradientText>stay</GradientText> in mind, DOOH is <GradientText>reinventing advertising</GradientText>.</>}
        showScrollIndicator={false}
      />

<TitlePage

    title={<>WHAT IS <GradientText>DOOH</GradientText> ?</>}

    paragraphs={[
      "DOOH (Digital Out Of Home) is the new generation of outdoor advertising. More than just a screen, it's a dynamic, high-impact media channel that grabs attention in the heart of the city, on streets, in shop windows, malls, and high-traffic areas.",
      "With animated and programmable content, DOOH lets brands deliver the right message, at the right time, in the right place.",
      "A powerful way to boost visibility and make a lasting impression."
    ]}
    backgroundImage="DOOH.png"
  />


<section className="py-20 relative">
        <div className="container">
          <div className="flex justify-center relative">
          <div 
            className="p-1 rounded-3xl relative z-10"
            style={{ 
              background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
              width: '1441.43px', 
              height: '709.46px' 
            }}
          >


            <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#211824' }}>
              <SplineViewer 
                scene="https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          </div>
        </div> 
      </section>

      <DoohContent />

      <DoohTestimonial />
      <div className="pb-40"> </div>

    </div>
  )
}

export default DOOHPage