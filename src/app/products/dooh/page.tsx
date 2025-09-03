import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Monitor, MapPin, BarChart, Settings, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'DOOH - Digital Out Of Home | Visuaal',
  description: 'Solutions d&apos;affichage publicitaire numérique extérieur. Écrans haute luminosité, gestion de contenu et ciblage géolocalisé.',
  keywords: ['DOOH', 'affichage extérieur', 'publicité numérique', 'écrans publicitaires', 'outdoor digital'],
}

const DOOHPage = () => {
  const features = [
    {
      icon: <Monitor size={32} />,
      title: 'Écrans Haute Performance',
      description: 'Écrans LED haute luminosité résistants aux intempéries, lisibles même en plein soleil.'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Ciblage Géolocalisé',
      description: 'Diffusez vos messages au bon endroit, au bon moment selon votre audience cible.'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Analytics Avancés',
      description: 'Mesurez l&apos;impact de vos campagnes avec des statistiques détaillées en temps réel.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Gestion Centralisée',
      description: 'Pilotez tous vos écrans depuis une interface unique et intuitive.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Programmation Flexible',
      description: 'Planifiez vos contenus selon vos besoins avec une programmation avancée.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Fiabilité 24/7',
      description: 'Solutions robustes avec maintenance préventive et support technique dédié.'
    }
  ]

  const applications = [
    {
      title: 'Centres Commerciaux',
      description: 'Informations, promotions et orientation des visiteurs'
    },
    {
      title: 'Transport Public',
      description: 'Informations voyageurs et publicité contextuelle'
    },
    {
      title: 'Points de Vente',
      description: 'Promotion des produits et amélioration de l&apos;expérience client'
    },
    {
      title: 'Événements',
      description: 'Communication événementielle et sponsoring dynamique'
    }
  ]

  const specifications = [
    { label: 'Résolution', value: 'Jusqu&apos;à 4K UHD' },
    { label: 'Luminosité', value: '2500-5000 cd/m²' },
    { label: 'Température', value: '-20°C à +50°C' },
    { label: 'Étanchéité', value: 'IP65/IP67' },
    { label: 'Formats', value: '32" à 98" et plus' },
    { label: 'Connectivité', value: 'WiFi, 4G/5G, Ethernet' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Produits</Link>
            <span>/</span>
            <span className="text-gray-900">DOOH</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/products" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
                <ArrowLeft size={20} className="mr-2" />
                Retour aux produits
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                DOOH - Digital Out Of Home
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Révolutionnez votre communication extérieure avec nos solutions d&apos;affichage 
                numérique haute performance. Captez l&apos;attention de votre audience avec des 
                contenus dynamiques et impactants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Demander un devis
                </Button>
                <Button variant="outline" size="lg">
                  Voir une démo
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Monitor size={120} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités Avancées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez toutes les fonctionnalités qui font de nos solutions DOOH 
              les plus performantes du marché.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
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
              Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos solutions DOOH s&apos;adaptent à tous vos besoins et environnements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Spécifications Techniques
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Des équipements de pointe conçus pour résister aux conditions les plus extrêmes.
              </p>
              
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Avantages Clés
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Visibilité maximale 24h/24, 7j/7</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">ROI mesurable et optimisable</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Contenu dynamique et interactif</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Installation et maintenance incluses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Support technique dédié</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre communication ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nos experts vous accompagnent dans la mise en œuvre de votre projet DOOH 
            de A à Z. Contactez-nous pour un audit gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Obtenir un devis gratuit
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Planifier une démo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DOOHPage