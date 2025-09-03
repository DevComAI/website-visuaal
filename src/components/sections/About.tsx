import { Award, Users, Target, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const About = () => {
  const values = [
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en livrant des solutions de qualité supérieure."
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins."
    },
    {
      icon: <Target size={32} />,
      title: "Résultats",
      description: "Notre focus est sur les résultats concrets et mesurables pour votre business."
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      description: "Nous sommes passionnés par le digital et nous mettons cette passion au service de vos projets."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              À Propos de{' '}
              <span className="text-primary">Visuaal</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis 5 ans, Visuaal accompagne les entreprises dans leur transformation digitale. 
              Notre équipe de créatifs et développeurs passionnés met son expertise au service 
              de votre réussite.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nous croyons que chaque projet est unique et mérite une attention particulière. 
              C&apos;est pourquoi nous adoptons une approche personnalisée pour chaque client, 
              en combinant créativité, technologie et stratégie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg">
                Découvrir notre équipe
              </Button>
              <Button variant="outline" size="lg">
                Nos références
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Clients accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-gray-600">Années d&apos;expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support client</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Nos Valeurs
            </h3>
            
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About