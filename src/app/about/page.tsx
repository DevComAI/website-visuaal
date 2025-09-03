import { Metadata } from 'next'
import { Award, Users, Target, Heart, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            À Propos de{' '}
            <span className="text-primary">Visuaal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Depuis 2016, nous révolutionnons l&apos;univers de la communication visuelle avec 
            des technologies innovantes et un accompagnement personnalisé.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2016 par une équipe de passionnés de technologie et de design, 
                  Visuaal est née d&apos;une vision simple : démocratiser l&apos;accès aux technologies 
                  visuelles les plus avancées pour toutes les entreprises.
                </p>
                <p>
                  Aujourd&apos;hui, nous sommes fiers d&apos;accompagner plus de 150 clients dans leurs 
                  projets de communication visuelle, des startups innovantes aux grands groupes 
                  internationaux.
                </p>
                <p>
                  Notre expertise couvre l&apos;ensemble de la chaîne de valeur : de la conception 
                  à l&apos;installation, en passant par la maintenance et l&apos;optimisation des performances.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre approche 
              unique du service client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe d&apos;experts passionnés, chacun spécialisé dans son domaine 
              pour vous offrir le meilleur service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
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
            Rejoignez l&apos;aventure Visuaal
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Découvrez comment nos solutions peuvent transformer votre communication 
            et propulser votre entreprise vers de nouveaux sommets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Découvrir nos produits
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage