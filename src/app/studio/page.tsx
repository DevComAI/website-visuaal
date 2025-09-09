import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Video, Camera, Palette, Film, Headphones, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AnimatedVisionText from '@/components/ui/AnimatedVisionText'

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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Services Créatifs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une palette complète de services pour tous vos besoins en création de contenu visuel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Processus Créatif
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de vos projets créatifs.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {process.map((phase, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {phase.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        <div className="text-sm text-primary font-medium">{phase.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full lg:relative lg:z-10"></div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Équipements Professionnels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Studio équipé des dernières technologies pour une qualité de production optimale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Réalisations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos créations les plus marquantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                  <span className="text-gray-500 text-sm">{project.client}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
                  📈 {project.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Créons ensemble votre prochain chef-d&apos;œuvre
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Notre équipe créative est prête à transformer vos idées les plus ambitieuses 
            en réalité. Parlons de votre projet dès aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Commencer un projet
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Visiter notre studio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudioPage