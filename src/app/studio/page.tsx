import { Metadata } from 'next'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AnimatedVisionText from '@/components/ui/AnimatedVisionText'
import TitlePage from '@/components/ui/TitlePageSection'
import Timeline from '@/components/sections/Timeline'
import GradientButton from '@/components/ui/GradientButton'
import SplineViewer from '@/components/ui/SplineViewer'

export const metadata: Metadata = {
  title: 'Studio de Création | Visuaal',
  description: 'Service complet de création de contenu visuel. Production vidéo, animation 3D, design graphique et post-production professionnelle.',
  keywords: ['studio création', 'production vidéo', 'animation 3D', 'design graphique', 'post-production'],
}

const StudioPage = () => {

  return (
    <div className="min-h-screen">

      {/* Hero Spline Section */}
      <HeroSpline
        title={<>From <GradientText>bold concepts</GradientText> to unforgettable <GradientText>immersive visuals</GradientText>.</>}
        subtitle={<AnimatedVisionText />}
        splineUrl="https://prod.spline.design/XihlwxPitjwHnwb9/scene.splinecode"
        textPosition="left"
        splinePosition="right"
        titleSize="64px"
        subtitleSize="64px"
      />

<TitlePage
title={<>our <GradientText>tools</GradientText></>}

paragraphs={[
  "At VISUAAL, we create much more than images. We create exceptional visual worlds, at the crossroads of art, technology and storytelling.",
]}
backgroundImage="studio.png"
/>

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



<div className="pt-40 flex justify-center">
  <div className="text-left max-w-[1500px] mx-auto">
    {/* Main Description */}
    <p className="text-[32px] text-center leading-relaxed mb-12">
      Every project is unique, that&apos;s why we adapt to your needs, ambitions, and challenges. 
      Let&apos;s talk, and find the visual solution that truly fits you.
    </p>

    {/* CTA Button */}
    <div className="flex justify-center pt-20">
      <GradientButton 
        href="/contact"
        text="Talking about your project"
        className="w-[350px] h-[50px]"
      />
    </div>
  </div>
</div>
   

   {/* Spline Component */}
<div className='h-screen -mt-40 mix-blend-screen'>
  <SplineViewer 
    scene="https://prod.spline.design/VhnOlUUBXyLXytif/scene.splinecode"
    style={{ width: '100%', height: '100%' }}
    interactive={true}
  />
</div>
    </div>
  )
}

export default StudioPage