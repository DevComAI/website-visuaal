import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Zap, Eye, Sparkles, Layers, Rotate3D, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Hero from '@/components/sections/Hero'

export const metadata: Metadata = {
  title: 'Hologrammes | Visuaal',
  description: 'Technologie holographique révolutionnaire pour des présentations spectaculaires. Projections 3D et effets visuels saisissants.',
  keywords: ['hologrammes', 'projection 3D', 'technologie holographique', 'effets visuels', 'présentation spectaculaire'],
}

const HoloPage = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Effet Wow Garanti',
      description: 'Captivez instantanément votre audience avec des projections holographiques époustouflantes.'
    },
    {
      icon: <Eye size={32} />,
      title: 'Vision 360°',
      description: 'Projections visibles sous tous les angles pour une expérience immersive totale.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Haute Définition',
      description: 'Qualité d&apos;image exceptionnelle avec des détails ultra-précis et des couleurs éclatantes.'
    },
    {
      icon: <Layers size={32} />,
      title: 'Contenu Personnalisé',
      description: 'Créez vos propres hologrammes avec nos outils de conception 3D avancés.'
    },
    {
      icon: <Rotate3D size={32} />,
      title: 'Animation Fluide',
      description: 'Mouvements et transitions parfaitement fluides pour un réalisme saisissant.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Installation Flexible',
      description: 'Solutions fixes ou mobiles s&apos;adaptant à tous vos événements et espaces.'
    }
  ]

  const applications = [
    {
      title: 'Événements Corporates',
      description: 'Présentations produit, lancements, conférences',
      image: '🏢',
      benefits: ['Impact visuel maximum', 'Mémorisation accrue', 'Différenciation concurrentielle']
    },
    {
      title: 'Retail & Showrooms',
      description: 'Présentation produit, démonstrations, vitrine',
      image: '🛍️',
      benefits: ['Attraction clientèle', 'Temps de visite prolongé', 'Expérience premium']
    },
    {
      title: 'Musées & Expositions',
      description: 'Médiation culturelle, reconstitutions historiques',
      image: '🏛️',
      benefits: ['Engagement visiteurs', 'Pédagogie innovante', 'Accessibilité améliorée']
    },
    {
      title: 'Spectacles & Divertissement',
      description: 'Concerts, théâtres, parcs d&apos;attractions',
      image: '🎭',
      benefits: ['Émerveillement public', 'Expérience unique', 'Buzz social']
    }
  ]

  const technologies = [
    {
      name: 'Pepper&apos;s Ghost',
      description: 'Technique classique utilisant des surfaces réfléchissantes pour créer l&apos;illusion de transparence.',
      features: ['Installation simple', 'Coût abordable', 'Effet garanti']
    },
    {
      name: 'Projection Volumétrique',
      description: 'Projection dans un volume 3D créant une véritable présence holographique.',
      features: ['Vision 360°', 'Interaction possible', 'Réalisme maximal']
    },
    {
      name: 'Hologramme LED',
      description: 'Ventilateurs LED haute vitesse créant des images flottantes persistantes.',
      features: ['Mobilité totale', 'Consommation réduite', 'Maintenance simple']
    }
  ]

  const specs = [
    { label: 'Résolution', value: 'Jusqu&apos;à 4K par projecteur' },
    { label: 'Luminosité', value: '3000-6000 lumens' },
    { label: 'Formats', value: '50cm à 5m de hauteur' },
    { label: 'Angles de vue', value: '180° à 360°' },
    { label: 'Framerate', value: '60 fps fluides' },
    { label: 'Installation', value: 'Fixe ou mobile' }
  ]

  return (
    <div className="min-h-screen">

      <Hero 
        backgroundImage="/img/humanbox/hero.png"
        title="HUMAN BOX"
        subtitle="An immersive cabin creating a 3D holographic effect"
        showScrollIndicator={false}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              L&apos;Art de l&apos;Holographie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les caractéristiques uniques qui font de nos hologrammes 
              des outils de communication exceptionnels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Domaines d&apos;Application
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les hologrammes révolutionnent de nombreux secteurs en créant des expériences 
              mémorables et impactantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{app.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {app.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous maîtrisons plusieurs techniques holographiques pour nous adapter 
              à tous vos projets et budgets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Spécifications Techniques
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Des équipements de pointe pour des hologrammes d&apos;une qualité exceptionnelle.
              </p>
              
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-purple-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir nos Hologrammes ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Impact visuel incomparable et mémorisation maximale</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Technologies de pointe et expertise reconnue</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Création de contenu personnalisé incluse</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Support technique et maintenance assurés</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">ROI démontré sur l&apos;engagement audience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à créer l&apos;extraordinaire ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nos experts vous accompagnent dans la conception d&apos;expériences holographiques 
            uniques qui marqueront à jamais votre audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-gray-100 border-white">
                Planifier une démonstration
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Découvrir nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HoloPage