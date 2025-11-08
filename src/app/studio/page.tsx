import { Metadata } from 'next'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AnimatedVisionText from '@/components/ui/AnimatedVisionText'
import TitlePage from '@/components/ui/TitlePageSection'
import Timeline from '@/components/sections/Timeline'
import TimelineMobile from '@/components/ui/TimelineMobile'
import GradientButton from '@/components/ui/GradientButton'
import Image from 'next/image'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Creative Studio - Visual Content Production',
  description: 'Full-service visual content creation studio. Video production, 3D animation, graphic design, and professional post-production for immersive experiences.',
  keywords: ['creative studio', 'video production', '3D animation', 'graphic design', 'post-production', 'visual content', 'immersive experiences'],
  openGraph: {
    title: 'Creative Studio - Visual Content Production | Visuaal',
    description: 'Full-service visual content creation studio specializing in 3D animation, real-time graphics, and immersive visual experiences.',
    images: [
      {
        url: '/img/studio.png',
        width: 1200,
        height: 630,
        alt: 'Visuaal Creative Studio - 3D Animation & Visual Content Production',
      },
    ],
  },
}

const StudioPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.ai' },
        { name: 'Studio', url: 'https://visuaal.ai/studio' }
      ])
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Image Section */}
      <HeroSpline
        title={<>From <GradientText>bold concepts</GradientText> to unforgettable<br />  <GradientText>immersive visuals</GradientText>.</>}
        subtitle={<AnimatedVisionText />}
        image="/temp-opti-img/experience-1.2.png"
        textPosition="left"
        priority={true}
        alt="VISUAAL Creative Studio"
      />

  <TitlePage
  title={<>our <GradientText>tools</GradientText></>}

  paragraphs={[
    "At VISUAAL, we create much more than images. We create exceptional visual worlds, at the crossroads of art, technology and storytelling.",
  ]}
  backgroundImage="studio.png"
  />

{/* Desktop Timeline */}
<div className="hidden md:block">
  <Timeline
    items={[
      {
        title: "A full-stack visual studio",
        description: "We bring all our expertise in-house: Art direction, concept design, storyboarding, modeling, rigging, animation, lighting, shooting, texturing, compositing, rendering, real-time integration. Each project is tailor-made to sublimate your vision.",
        image: "/img/studio/content1.png"
      },
      {
        title: "Real-time & pre-calculated 3D creation",
        description: "We work on the two main areas of visual creation: (Unreal Engine, Unity, WebGL) for interactive experiences, immersive web, holography, metavers, XR.",
        image: "/img/studio/content2.png"
      },
      {
        title: "Premium aesthetics, exacting technical standards",
        description: "Our creations aim for immediate impact. We know how to combine artistic direction with cutting-edge technology in a fluid process that adapts to all formats: film, projection, giant screen, DOOH display, immersive experience, showroom, shop window, web.",
        image: "/img/studio/content3.png"
      },
      {
        title: "Technologies & pipelines",
        description: "Unreal Engine / Unity / Blender / Houdini / Cinema 4D / Maya WebGL / Three.js / TouchDesigner Render engines: Octane, Redshift, V-Ray Generative AI for ideation, design and animation",
        image: "/img/studio/content4.png"
      },
      {
        title: "A studio for brands that want to go further",
        description: "Designers, luxury homes, agencies, architects: let's work together to transform your ideas into unforgettable visual experiences. Our mission: to bring to life images that impress, surprise and captivate.",
        image: "/img/studio/content5.png"
      },
      {
        title: "Precalculated high-end",
        description: "For luxury goods, advertising, animated films or event content.",
        image: "/img/studio/content6.png"
      }
    ]}
  />
</div>

{/* Mobile Timeline */}
<div className="md:hidden">
  <TimelineMobile
    items={[
      {
        title: "A full-stack visual studio",
        description: "We bring all our expertise in-house: Art direction, concept design, storyboarding, modeling, rigging, animation, lighting, shooting, texturing, compositing, rendering, real-time integration. Each project is tailor-made to sublimate your vision.",
        image: "/img/studio/content1.png"
      },
      {
        title: "Real-time & pre-calculated 3D creation",
        description: "We work on the two main areas of visual creation: (Unreal Engine, Unity, WebGL) for interactive experiences, immersive web, holography, metavers, XR.",
        image: "/img/studio/content2.png"
      },
      {
        title: "Premium aesthetics, exacting technical standards",
        description: "Our creations aim for immediate impact. We know how to combine artistic direction with cutting-edge technology in a fluid process that adapts to all formats: film, projection, giant screen, DOOH display, immersive experience, showroom, shop window, web.",
        image: "/img/studio/content3.png"
      },
      {
        title: "Technologies & pipelines",
        description: "Unreal Engine / Unity / Blender / Houdini / Cinema 4D / Maya WebGL / Three.js / TouchDesigner Render engines: Octane, Redshift, V-Ray Generative AI for ideation, design and animation",
        image: "/img/studio/content4.png"
      },
      {
        title: "A studio for brands that want to go further",
        description: "Designers, luxury homes, agencies, architects: let's work together to transform your ideas into unforgettable visual experiences. Our mission: to bring to life images that impress, surprise and captivate.",
        image: "/img/studio/content5.png"
      },
      {
        title: "Precalculated high-end",
        description: "For luxury goods, advertising, animated films or event content.",
        image: "/img/studio/content6.png"
      }
    ]}
  />
</div>



<div className="py-10 md:pt-40 flex justify-center px-4">
  <div className="text-left max-w-[1500px] mx-auto">
    {/* Main Description */}
    <p className="text-lg md:text-2xl lg:text-[32px] text-center leading-relaxed mb-8 md:mb-12">
      Every project is unique, that&apos;s why we adapt to your needs, ambitions, and challenges.
      Let&apos;s talk, and find the visual solution that truly fits you.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center pt-10 md:pt-20">
      <GradientButton
        href="/contact"
        text="Talking about your project"
        className="w-full max-w-[350px] h-[50px] mx-4"
      />
    </div>
  </div>
</div>
   



    
    </div>
  )
}

export default StudioPage