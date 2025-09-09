import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import AboutUs from '@/components/sections/AboutUs'
import Contact from '@/components/sections/Contact'
import CTASection from '@/components/ui/CTASection'
import TitleHome from '@/components/ui/TitleSection'
import Working from '@/components/sections/Working'
import SupportCarousel from '@/components/sections/SupportCarousel'
import LogoCarousel from '@/components/sections/LogoCarousel'
import ProductsSection from '@/components/sections/ProductsSection'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import GradientLine from '@/components/ui/GradientLine'
import GradientText from '@/components/ui/GradientText'

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
        backgroundVideo="/img/home/hero-home.mp4"
        title="VISUAAL"
        subtitle={<><GradientText>Innovative visual solutions</GradientText> to capture attention and <GradientText>elevate your brand</GradientText>.</>}
        description="At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance."
      />

      <LogoCarousel />
      
      <TitleHome
        topText={<><GradientText>EXPERTS</GradientText> IN IMMERSIVE EXPERIENCES</>}
        bottomText="AND DIGITAL TRANSFORMATION"
        backgroundImage="aboutus.png"
      />
      

      
      <AboutUs />
      <div className="pb-80"> </div>

      <TitleHome
        topText="THE BENEFITS OF USING OUR"
        bottomText={<><GradientText>DIGITAL SIGNAGE</GradientText></>}
        backgroundImage="working.png"
      />

      
      <Working />
      <div className="pb-60"> </div>
      
      <TitleHome
        topText={<><GradientText>END-TO-END</GradientText> DIGITAL SIGNAGE</>}
        bottomText="SOLUTIONS"
        backgroundImage="support.png"
      />

      <SupportCarousel />
      

            
      <TitleHome
        topText={<><GradientText>END-TO-END</GradientText> DIGITAL SIGNAGE</>}
        bottomText="SOLUTIONS"
        backgroundImage="product.png"
      />
      
      <ProductsSection />
      
      <div className="pb-60"> </div>
      <GradientLine width={"90%"} padding="pb-[1px]" />

    </>
  );
}
