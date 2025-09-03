import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Monitor, Smartphone, Zap, Video } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Nos Produits',
  description: 'Découvrez notre gamme complète de solutions visuelles : DOOH, écrans interactifs, hologrammes et studio de création.',
  keywords: ['DOOH', 'écrans interactifs', 'hologrammes', 'studio création', 'affichage dynamique'],
}

const ProductsPage = () => {
  const products = [
    {
      id: 'dooh',
      title: 'DOOH - Digital Out Of Home',
      description: 'Affichage publicitaire numérique extérieur pour maximiser votre visibilité en ville.',
      icon: <Monitor size={48} />,
      features: ['Écrans haute luminosité', 'Gestion de contenu', 'Ciblage géolocalisé', 'Analytics avancés'],
      href: '/products/dooh'
    },
    {
      id: 'screen',
      title: 'Écrans Interactifs',
      description: 'Solutions d&apos;écrans tactiles pour engager vos clients et améliorer l&apos;expérience utilisateur.',
      icon: <Smartphone size={48} />,
      features: ['Multi-touch', 'Haute résolution', 'Applications personnalisées', 'Installation clé en main'],
      href: '/products/screen'
    },
    {
      id: 'holo',
      title: 'Hologrammes',
      description: 'Technologie holographique révolutionnaire pour des présentations spectaculaires.',
      icon: <Zap size={48} />,
      features: ['Projection 3D', 'Effet visuel saisissant', 'Personnalisation complète', 'Installation mobile'],
      href: '/products/holo'
    },
    {
      id: 'studio',
      title: 'Studio de Création',
      description: 'Service complet de création de contenu visuel adapté à tous vos supports.',
      icon: <Video size={48} />,
      features: ['Production vidéo', 'Animation 3D', 'Design graphique', 'Post-production'],
      href: '/products/studio'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos Produits
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions visuelles innovantes pour transformer 
            votre communication et captiver votre audience.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={product.href}>
                  <Button variant="outline" className="group/btn w-full">
                    En savoir plus
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Besoin d&apos;une solution personnalisée ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans le choix de la solution la plus adaptée à vos besoins.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage