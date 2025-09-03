import { Monitor, Palette, TrendingUp, Lightbulb, Code, Search } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Monitor size={40} />,
      title: "Création de Sites Web",
      description: "Sites web modernes, responsive et performants adaptés à vos besoins spécifiques.",
      features: ["Design responsive", "Performance optimisée", "SEO intégré", "Maintenance incluse"]
    },
    {
      icon: <Palette size={40} />,
      title: "Design UX/UI",
      description: "Interfaces utilisateur intuitives et expériences utilisateur exceptionnelles.",
      features: ["Wireframes", "Prototypage", "Tests utilisateurs", "Design System"]
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Marketing Digital",
      description: "Stratégies digitales pour augmenter votre visibilité et vos conversions.",
      features: ["SEO/SEA", "Social Media", "Email Marketing", "Analytics"]
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Identité Visuelle",
      description: "Création de logos et identités visuelles marquantes et mémorables.",
      features: ["Logo Design", "Charte graphique", "Brand Guidelines", "Supports print"]
    },
    {
      icon: <Code size={40} />,
      title: "Développement Web",
      description: "Solutions techniques robustes avec les dernières technologies.",
      features: ["React/Next.js", "Node.js", "API REST", "Base de données"]
    },
    {
      icon: <Search size={40} />,
      title: "Référencement SEO",
      description: "Optimisation pour les moteurs de recherche et amélioration de la visibilité.",
      features: ["Audit SEO", "Optimisation on-page", "Link Building", "Reporting"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services digitaux conçus pour propulser 
            votre entreprise vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services