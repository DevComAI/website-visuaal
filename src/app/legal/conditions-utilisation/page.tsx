import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d&apos;Utilisation | Visuaal',
  description: 'Conditions d&apos;utilisation du site web Visuaal.com et de nos services.',
  robots: { index: false, follow: false },
}

const ConditionsUtilisationPage = () => {
  return (
    <div className="min-h-screen py-40" style={{backgroundColor: '#140F16'}}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto rounded-xl p-8 lg:p-12" style={{
          background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.1) 0%, rgba(149, 18, 182, 0.1) 100%)',
          border: '1px solid rgba(71, 63, 185, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 className="text-4xl font-bold text-white mb-8">
            Conditions d&apos;Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptation des conditions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                En accédant et en utilisant le site web visuaal.com (le &quot;Site&quot;), vous acceptez 
                d&apos;être lié par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, 
                veuillez ne pas utiliser notre Site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ces conditions s&apos;appliquent à tous les visiteurs, utilisateurs et autres personnes 
                qui accèdent ou utilisent le Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description du service</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visuaal est une société spécialisée dans les solutions de communication visuelle 
                et technologies d&apos;affichage. Notre Site fournit des informations sur nos services 
                et permet de prendre contact avec notre équipe.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les services incluent notamment :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>Solutions DOOH (Digital Out Of Home)</li>
                <li>Écrans interactifs et tactiles</li>
                <li>Technologies holographiques</li>
                <li>Services de studio de création</li>
                <li>Conseil, installation et maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Utilisation acceptable</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vous vous engagez à utiliser le Site de manière légale et respectueuse. 
                Il est interdit d&apos;utiliser le Site pour :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Violer des lois ou réglementations applicables</li>
                <li>Transmettre des contenus illégaux, nuisibles ou offensants</li>
                <li>Porter atteinte aux droits de propriété intellectuelle</li>
                <li>Compromettre la sécurité ou l&apos;intégrité du Site</li>
                <li>Utiliser des robots, scripts ou autres moyens automatisés</li>
                <li>Tenter d&apos;accéder à des zones restreintes du Site</li>
                <li>Harceler ou importuner d&apos;autres utilisateurs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Contenu utilisateur</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Lorsque vous soumettez du contenu via nos formulaires de contact ou autres 
                moyens de communication, vous garantissez que :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Vous détenez tous les droits nécessaires sur ce contenu</li>
                <li>Le contenu ne viole aucun droit de tiers</li>
                <li>Le contenu est exact et non trompeur</li>
                <li>Le contenu ne contient pas de virus ou code malveillant</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Vous accordez à Visuaal une licence non exclusive pour utiliser ce contenu 
                dans le cadre de la fourniture de nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Propriété intellectuelle</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le Site et son contenu original, ses fonctionnalités et sa fonctionnalité 
                sont et resteront la propriété exclusive de Visuaal et de ses concédants.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le Site est protégé par le droit d&apos;auteur, les marques commerciales et 
                autres lois. Nos marques commerciales et notre habillage commercial ne 
                peuvent pas être utilisés dans le cadre d&apos;un produit ou service sans 
                notre consentement écrit préalable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Confidentialité</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Votre confidentialité est importante pour nous. Notre Politique de Confidentialité 
                explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre Site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                En utilisant notre Site, vous acceptez la collecte et l&apos;utilisation 
                d&apos;informations conformément à notre Politique de Confidentialité.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Avis de non-responsabilité</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 138, 0, 0.1) 100%)',
                border: '1px solid rgba(255, 193, 7, 0.3)'
              }} className=" border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Clause de non-responsabilité importante :</strong>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les informations sur ce Site sont fournies sur une base &quot;telle quelle&quot;. 
                  Dans toute la mesure permise par la loi, Visuaal exclut toutes les 
                  représentations, garanties, conditions, engagements et responsabilités.
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                En particulier, nous ne garantissons pas que :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Le Site sera constamment disponible ou ininterrompu</li>
                <li>Les informations sur le Site sont complètes, vraies ou exactes</li>
                <li>Le Site sera exempt de bugs, virus ou autres éléments nuisibles</li>
                <li>Les défauts seront corrigés</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation de responsabilité</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                En aucun cas Visuaal, ses directeurs, employés, partenaires, agents, 
                fournisseurs ou affiliés ne seront responsables de dommages indirects, 
                accessoires, spéciaux, consécutifs ou punitifs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cette limitation s&apos;applique que la responsabilité prétendument découle 
                d&apos;un contrat, d&apos;un délit, d&apos;une négligence, d&apos;une responsabilité 
                stricte ou de toute autre base légale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnisation</h2>
              <p className="text-gray-300 leading-relaxed">
                Vous acceptez de défendre, d&apos;indemniser et de dégager de toute responsabilité 
                Visuaal et ses concédants de licence, employés, sous-traitants, agents, 
                dirigeants, actionnaires, partenaires commerciaux et employés, de et contre 
                toute réclamation, dommages, obligations, pertes, responsabilités, coûts 
                ou dettes et dépenses (y compris mais sans limitation, les honoraires d&apos;avocat).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Résiliation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis 
                ni responsabilité, pour quelque raison que ce soit, notamment si vous 
                enfreignez les Conditions d&apos;utilisation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                En cas de résiliation, votre droit d&apos;utilisation du Site cessera immédiatement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Loi applicable</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ces conditions d&apos;utilisation sont régies et interprétées conformément 
                aux lois françaises, sans égard aux dispositions de conflit de lois.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Notre défaut d&apos;application d&apos;un droit ou d&apos;une disposition de ces 
                Conditions d&apos;utilisation ne constituera pas une renonciation à ce droit 
                ou à cette disposition.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications des conditions</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous nous réservons le droit, à notre seule discrétion, de modifier ou 
                de remplacer ces Conditions à tout moment. Si une révision est importante, 
                nous essaierons de fournir un préavis d&apos;au moins 30 jours avant que 
                les nouvelles conditions ne prennent effet.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Il est de votre responsabilité de consulter périodiquement ces 
                Conditions d&apos;utilisation pour les modifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Divisibilité</h2>
              <p className="text-gray-300 leading-relaxed">
                Si une disposition de ces Conditions d&apos;utilisation est jugée inapplicable 
                ou invalide, cette disposition sera modifiée et interprétée pour accomplir 
                les objectifs de cette disposition dans la plus large mesure possible 
                en vertu de la loi applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Accord complet</h2>
              <p className="text-gray-300 leading-relaxed">
                Ces Conditions d&apos;utilisation, ainsi que notre Politique de Confidentialité 
                et tout autre avis légal publié par nous sur le Site, constituent l&apos;accord 
                complet entre vous et Visuaal concernant notre Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Si vous avez des questions concernant ces Conditions d&apos;utilisation, 
                veuillez nous contacter à :
              </p>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Visuaal SAS</p>
                <p className="text-gray-300">[Adresse à compléter]</p>
                <p className="text-gray-300">[Code postal] [Ville], France</p>
                <p className="text-gray-300">Email : [email à compléter]</p>
                <p className="text-gray-300">Téléphone : [téléphone à compléter]</p>
                <p className="text-gray-300">Service juridique : [email juridique à compléter]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConditionsUtilisationPage