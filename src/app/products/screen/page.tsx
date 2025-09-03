import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Smartphone, Hand, Zap, Users, Palette, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Écrans Interactifs | Visuaal',
  description: 'Solutions d&apos;écrans tactiles interactifs pour engager vos clients. Multi-touch, haute résolution et applications personnalisées.',
  keywords: ['écrans interactifs', 'écrans tactiles', 'multi-touch', 'interface tactile', 'digital signage'],
}

const ScreenPage = () => {
  const features = [
    {
      icon: <Hand size={32} />,
      title: 'Multi-Touch Avancé',
      description: 'Technologie tactile ultra-responsive jusqu&apos;à 40 points de contact simultanés.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Haute Résolution',
      description: 'Affichage 4K Ultra HD pour une qualité d&apos;image exceptionnelle et des détails précis.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimale',
      description: 'Processeurs puissants pour une fluidité parfaite même avec des applications complexes.'
    },
    {
      icon: <Users size={32} />,
      title: 'Usage Collaboratif',
      description: 'Plusieurs utilisateurs peuvent interagir simultanément pour une expérience collaborative.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Interface Personnalisée',
      description: 'Applications sur mesure adaptées à vos besoins spécifiques et votre identité visuelle.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Installation Complète',
      description: 'Service clé en main incluant installation, configuration et formation de vos équipes.'
    }
  ]

  const useCases = [
    {
      title: 'Points de Vente',
      description: 'Catalogue interactif, configurateur produit, bornes d&apos;information',
      benefits: ['Engagement client', 'Réduction du temps d&apos;attente', 'Augmentation des ventes']
    },
    {
      title: 'Accueil & Reception',
      description: 'Borne d&apos;accueil, plan interactif, système de rendez-vous',
      benefits: ['Autonomie des visiteurs', 'Information 24/7', 'Image moderne']
    },
    {
      title: 'Éducation & Formation',
      description: 'Tableaux interactifs, présentations collaboratives, formations',
      benefits: ['Apprentissage ludique', 'Participation active', 'Contenu dynamique']
    },
    {
      title: 'Événementiel',
      description: 'Stands interactifs, jeux concours, démonstrations produit',
      benefits: ['Attraction visiteurs', 'Collecte de données', 'Mémorisation marque']
    }
  ]

  const sizes = [
    { size: '32"', resolution: '1920x1080', usage: 'Comptoir, table' },
    { size: '43"', resolution: '3840x2160', usage: 'Mur, présentation' },
    { size: '55"', resolution: '3840x2160', usage: 'Accueil, showroom' },
    { size: '65"', resolution: '3840x2160', usage: 'Salle de réunion' },
    { size: '75"', resolution: '3840x2160', usage: 'Auditorium, hall' },
    { size: '86"', resolution: '3840x2160', usage: 'Grand espace' }
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
            <span className="text-gray-900">Écrans Interactifs</span>
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
                Écrans Interactifs
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Créez des expériences utilisateur exceptionnelles avec nos écrans tactiles 
                haute performance. Engagez vos clients, facilitez vos présentations et 
                modernisez vos espaces d&apos;accueil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Demander un devis
                </Button>
                <Button variant="outline" size="lg">
                  Tester en showroom
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Smartphone size={120} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies Avancées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos écrans interactifs intègrent les dernières innovations pour offrir 
              une expérience utilisateur fluide et intuitive.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cas d&apos;Usage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nos écrans interactifs transforment différents secteurs d&apos;activité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
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

      {/* Sizes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Formats Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de tailles pour s&apos;adapter à tous vos espaces et besoins.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Taille</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Résolution</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Usage Recommandé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sizes.map((size, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-primary">{size.size}</td>
                    <td className="px-6 py-4 text-gray-600">{size.resolution}</td>
                    <td className="px-6 py-4 text-gray-600">{size.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Processus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement complet de l&apos;analyse de vos besoins à la mise en service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', description: 'Analyse de vos besoins et de votre environnement' },
              { step: '02', title: 'Conception', description: 'Design de l&apos;interface et développement sur mesure' },
              { step: '03', title: 'Installation', description: 'Mise en place et configuration complète' },
              { step: '04', title: 'Formation', description: 'Formation de vos équipes et support continu' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Découvrez nos écrans en action
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Visitez notre showroom ou demandez une démonstration sur site pour découvrir 
            toutes les possibilités de nos écrans interactifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
                Réserver une démonstration
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Visiter le showroom
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScreenPage