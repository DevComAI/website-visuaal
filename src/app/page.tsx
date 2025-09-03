import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import AboutUs from '@/components/sections/AboutUs'
import Contact from '@/components/sections/Contact'
import CTASection from '@/components/ui/CTASection'
import TitleHome from '@/components/ui/TitleSection'
import Working from '@/components/sections/Working'
import SupportCarousel from '@/components/sections/SupportCarousel'
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
        backgroundVideo="/img/home/hero-home.mp4"
        title="VISUAAL"
        subtitle="Innovative visual solutions to capture attention and elevate your brand."
        description="At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance."
      />
      
      <TitleHome
        topText="EXPERTS IN IMMERSIVE EXPERIENCES"
        bottomText="AND DIGITAL TRANSFORMATION"
        backgroundImage="ABOUT US.png"
      />
      

      
      <AboutUs />
      <div className="pb-80"> </div>

      <TitleHome
        topText="THE BENEFITS OF USING OUR"
        bottomText="DIGITAL SIGNAGE"
        backgroundImage="working.png"
      />

      
      <Working />
      <div className="pb-60"> </div>
      
      <TitleHome
        topText="END-TO-END DIGITAL SIGNAGE"
        bottomText="SOLUTIONS"
        backgroundImage="support.png"
      />

      <SupportCarousel />
      
      <Contact />
    </>
  );
}
