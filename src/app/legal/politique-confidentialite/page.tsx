import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Visuaal',
  description: 'Notre politique de confidentialité détaille comment Visuaal collecte, utilise et protège vos données personnelles.',
  robots: { index: false, follow: false },
}

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Visuaal accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos informations personnelles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du traitement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Société :</strong> Visuaal</p>
                <p className="text-gray-600 mb-2"><strong>Adresse :</strong> 123 Rue de la Digital, 75001 Paris, France</p>
                <p className="text-gray-600 mb-2"><strong>Email :</strong> contact@visuaal.com</p>
                <p className="text-gray-600"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Données d&apos;identification</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l&apos;entreprise</li>
                <li>Fonction dans l&apos;entreprise</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Données de navigation</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Données de géolocalisation approximative</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Données techniques</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cookies et technologies similaires</li>
                <li>Données de performance du site</li>
                <li>Logs de connexion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalités du traitement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Exécution du contrat</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Traitement et suivi de vos demandes</li>
                <li>Fourniture de nos services</li>
                <li>Support client et assistance technique</li>
                <li>Facturation et gestion comptable</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Intérêts légitimes</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Amélioration de nos services</li>
                <li>Analyses statistiques et études de marché</li>
                <li>Sécurité et prévention de la fraude</li>
                <li>Communication commerciale (avec opt-out)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Consentement</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Newsletter et communications marketing</li>
                <li>Cookies non essentiels</li>
                <li>Témoignages et études de cas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partage des données</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers. 
                Nous pouvons partager vos données dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Prestataires de services :</strong> Hébergement, maintenance, support technique</li>
                <li><strong>Partenaires commerciaux :</strong> Uniquement avec votre consentement explicite</li>
                <li><strong>Obligations légales :</strong> Autorités compétentes si requis par la loi</li>
                <li><strong>Transfert d&apos;entreprise :</strong> En cas de fusion, acquisition ou cession</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Clients actifs :</strong> Pendant toute la durée de la relation commerciale + 3 ans</li>
                  <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Cookies :</strong> Selon les paramètres définis (max 13 mois)</li>
                  <li><strong>Archives comptables :</strong> 10 ans conformément aux obligations légales</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-600">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit de rectification</h4>
                  <p className="text-sm text-gray-600">Corriger vos données inexactes ou incomplètes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit d&apos;effacement</h4>
                  <p className="text-sm text-gray-600">Demander la suppression de vos données</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit de portabilité</h4>
                  <p className="text-sm text-gray-600">Récupérer vos données dans un format structuré</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit d&apos;opposition</h4>
                  <p className="text-sm text-gray-600">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Droit de limitation</h4>
                  <p className="text-sm text-gray-600">Limiter le traitement de vos données</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@visuaal.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Chiffrement des données sensibles (SSL/TLS)</li>
                <li>Contrôle d&apos;accès strict aux données</li>
                <li>Sauvegarde régulière et sécurisée</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Audit de sécurité régulier</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre site utilise différents types de cookies :
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Cookies essentiels</h3>
              <p className="text-gray-600 mb-4">
                Nécessaires au fonctionnement du site (navigation, sécurité, préférences de langue).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Cookies analytiques</h3>
              <p className="text-gray-600 mb-4">
                Nous aident à comprendre comment vous utilisez notre site (Google Analytics).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Cookies marketing</h3>
              <p className="text-gray-600">
                Utilisés pour personnaliser les publicités (nécessitent votre consentement).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Transferts internationaux</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Certains de nos prestataires peuvent être situés en dehors de l&apos;Union européenne. 
                Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place 
                (clauses contractuelles types, certifications).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Réclamations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si vous estimez que le traitement de vos données personnelles ne respecte pas 
                la réglementation, vous pouvez déposer une réclamation auprès de la CNIL :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</p>
                <p className="text-gray-600">3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
                <p className="text-gray-600">Téléphone : 01 53 73 22 22</p>
                <p className="text-gray-600">Site web : https://www.cnil.fr</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cette politique de confidentialité peut être modifiée à tout moment. 
                Les modifications importantes vous seront notifiées par email ou via 
                une notification sur notre site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Contact pour questions :</strong> contact@visuaal.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialitePage