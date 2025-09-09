import { Metadata } from 'next'
import { Award, Users, Target, Heart, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AboutContent from '@/components/sections/AboutContent'
import TitlePage from '@/components/ui/TitlePageSection'

export const metadata: Metadata = {
  title: 'À Propos de Visuaal',
  description: 'Découvrez l&apos;histoire de Visuaal, notre équipe passionnée et notre vision de l&apos;innovation technologique dans le domaine visuel.',
  keywords: ['à propos', 'équipe', 'histoire', 'mission', 'vision', 'valeurs'],
}

const AboutPage = () => {
  const values = [
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en livrant des solutions de qualité supérieure qui dépassent les attentes de nos clients."
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et créer des solutions sur mesure."
    },
    {
      icon: <Target size={32} />,
      title: "Résultats",
      description: "Notre focus est sur les résultats concrets et mesurables pour votre business, avec un ROI démontré."
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "Nous sommes passionnés par le digital et l'innovation, et nous mettons cette passion au service de vos projets."
    },
    {
      icon: <Clock size={32} />,
      title: "Réactivité",
      description: "Notre équipe réactive vous accompagne avec des délais de réponse courts et un service client personnalisé."
    },
    {
      icon: <Globe size={32} />,
      title: "Innovation",
      description: "Nous restons à la pointe des dernières technologies pour vous proposer des solutions innovantes."
    }
  ]

  const stats = [
    { value: '500+', label: 'Projets réalisés' },
    { value: '150+', label: 'Clients satisfaits' },
    { value: '8 ans', label: 'D&apos;expérience' },
    { value: '24/7', label: 'Support client' },
  ]

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Générale',
      description: 'Experte en stratégie digitale avec 15 ans d&apos;expérience dans l&apos;innovation technologique.'
    },
    {
      name: 'Thomas Martin',
      role: 'Directeur Technique',
      description: 'Spécialiste des technologies visuelles avancées et de l&apos;intégration de solutions complexes.'
    },
    {
      name: 'Sophie Laurent',
      role: 'Directrice Créative',
      description: 'Designer passionnée par l&apos;expérience utilisateur et les interfaces innovantes.'
    },
    {
      name: 'Alexandre Petit',
      role: 'Responsable Commercial',
      description: 'Expert en développement commercial et en accompagnement client dans leurs projets.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Spline Section */}
      <HeroSpline
        title={<>Our <GradientText>dedicated team</GradientText> of creatives is bursting with <GradientText>talent, experience</GradientText> and <GradientText>passion</GradientText> for what we do.</>}
        subtitle={<>Go behind the scenes of <GradientText>VISUAAL</GradientText></>}
        splineUrl="https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode"
      />

          <TitlePage

          title={<><GradientText>Who</GradientText> Who we are ?</>}

          paragraphs={[
            "In a world where digital engagement defines brand success,VISUAAL offers a complete suite ofhigh-impact solutions designed to captivate, connect, and convert. Based inDubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digitallandscape.",
            "VISUAAL It is the meeting of entrepreneurs from different backgroundswho bring their expertise in experience creation, advertising, and digitaltransformation to serve brands and publishers around immersive and innovative experiences.",
          ]}
          backgroundImage="aboutus.png"
          />

      <AboutContent />
      <div className="pb-60"> </div>

    </div>
  )
}

export default AboutPage