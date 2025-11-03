import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'
import DoohContent from '@/components/sections/DoohContent'
import DoohTestimonial from '@/components/sections/DoohTestimonial'
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import { doohProductSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'DOOH - Digital Out Of Home Advertising',
  description: 'DOOH (Digital Out Of Home) is the new generation of outdoor advertising. Dynamic, high-impact media channel for streets, malls, and high-traffic areas.',
  keywords: ['DOOH', 'digital out of home', 'outdoor advertising', 'digital advertising', 'outdoor digital displays', 'programmatic DOOH'],
  openGraph: {
    title: 'DOOH - Digital Out Of Home Advertising | Visuaal',
    description: 'Dynamic, high-impact outdoor advertising that grabs attention in high-traffic areas. Deliver the right message, at the right time, in the right place.',
    images: [
      {
        url: '/img/home/product-dooh.png',
        width: 1200,
        height: 630,
        alt: 'DOOH - Digital Out Of Home Advertising Solutions',
      },
    ],
  },
}

const DOOHPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      doohProductSchema,
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.ai' },
        { name: 'Products', url: 'https://visuaal.ai/products/dooh' },
        { name: 'DOOH', url: 'https://visuaal.ai/products/dooh' }
      ])
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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


<section className="py-12 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center relative">
            <div className="w-full max-w-sm sm:max-w-lg lg:max-w-6xl xl:max-w-7xl rounded-2xl border-2 border-purple-500/30">
              <div className="w-full rounded-xl overflow-hidden" style={{ backgroundColor: '#211824', aspectRatio: '2/1' }}>
                <OptimizedSplineViewer
                  scene="https://prod.spline.design/K3MXxwuzrEPrTBi4/scene.splinecode"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.75rem' // rounded-xl equivalent
                  }}
                  priority={false}
                  loadingDelay={200}
                  placeholderVariant="skeleton"
                  interactive={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DoohContent />

      <DoohTestimonial />
      <div className="pb-12 sm:pb-20 lg:pb-40"> </div>

    </div>
  )
}

export default DOOHPage