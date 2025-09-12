import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Video, Camera, Palette, Film, Headphones, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
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
  const services = [
    {
      icon: <Video size={32} />,
      title: 'Production Vidéo',
      description: 'De la conception au tournage, création de vidéos corporate, publicitaires et événementielles.',
      details: ['Pré-production complète', 'Tournage professionnel', 'Équipe expérimentée', 'Matériel haute gamme']
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Animation 3D',
      description: 'Modélisation, animation et rendu 3D pour vos présentations produits et architecturales.',
      details: ['Modélisation précise', 'Animation réaliste', 'Rendu photoréaliste', 'Optimisation multi-supports']
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Graphique',
      description: 'Création d&apos;identités visuelles, supports print et digitaux adaptés à votre marque.',
      details: ['Identité visuelle', 'Supports print', 'Assets digitaux', 'Charte graphique']
    },
    {
      icon: <Film size={32} />,
      title: 'Post-Production',
      description: 'Montage, étalonnage, effets spéciaux et sound design pour sublimer vos contenus.',
      details: ['Montage professionnel', 'Étalonnage colorimétrique', 'Effets visuels', 'Mixage audio']
    },
    {
      icon: <Camera size={32} />,
      title: 'Photographie',
      description: 'Shooting produits, corporate et événementiel avec retouche professionnelle.',
      details: ['Studio équipé', 'Shooting extérieur', 'Retouche experte', 'Formats multiples']
    },
    {
      icon: <Headphones size={32} />,
      title: 'Audio & Sound Design',
      description: 'Enregistrement, mixage et création sonore pour vos projets multimedia.',
      details: ['Studio d&apos;enregistrement', 'Mixage professionnel', 'Sound design', 'Voix off']
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Brief & Stratégie',
      description: 'Analyse de vos objectifs, définition du concept créatif et planning de production.',
      duration: '2-3 jours'
    },
    {
      step: '02',
      title: 'Pré-Production',
      description: 'Scénarisation, storyboard, casting, repérages et préparation technique.',
      duration: '1-2 semaines'
    },
    {
      step: '03',
      title: 'Production',
      description: 'Réalisation, tournage, enregistrement selon le planning établi.',
      duration: '1-5 jours'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Montage, effets, étalonnage et finalisation selon vos directives.',
      duration: '1-3 semaines'
    },
    {
      step: '05',
      title: 'Livraison',
      description: 'Validation finale, exports dans tous les formats requis et archivage.',
      duration: '2-3 jours'
    }
  ]

  const equipment = [
    { category: 'Caméras', items: ['RED Cinema Camera', 'Sony FX9', 'Canon C300 Mark III', 'DJI Ronin 4D'] },
    { category: 'Éclairage', items: ['ARRI SkyPanel', 'Aputure Light Storm', 'Kino Flo', 'LED Panel Kit'] },
    { category: 'Audio', items: ['Microphones Sennheiser', 'Enregistreur Sound Devices', 'Perche et accessoires', 'Studio monitoring'] },
    { category: 'Post-Production', items: ['Suite Adobe Creative', 'DaVinci Resolve Studio', 'Cinema 4D', 'Stations haute performance'] }
  ]

  const portfolio = [
    {
      type: 'Vidéo Corporate',
      client: 'Tech Startup',
      description: 'Présentation d&apos;entreprise innovante avec interviews dirigeants et démonstrations produit.',
      metrics: '+300% engagement social'
    },
    {
      type: 'Animation 3D',
      client: 'Promoteur Immobilier',
      description: 'Visite virtuelle architecturale avec animations et présentation des espaces.',
      metrics: '+40% conversion vente'
    },
    {
      type: 'Publicité Digitale',
      client: 'Marque Retail',
      description: 'Campagne multi-supports avec déclinaisons pour réseaux sociaux et web.',
      metrics: '+250% trafic site web'
    },
    {
      type: 'Événementiel',
      client: 'Salon Professionnel',
      description: 'Captation live, interviews et contenus promotionnels pour réseaux sociaux.',
      metrics: '+180% portée médias'
    }
  ]

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
      Every project is unique, that's why we adapt to your needs, ambitions, and challenges. 
      Let's talk, and find the visual solution that truly fits you.
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