import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Visuaal',
  description: 'Notre politique de confidentialité détaille comment Visuaal collecte, utilise et protège vos données personnelles.',
  robots: { index: false, follow: false },
}

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen py-40" style={{backgroundColor: '#140F16'}}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto rounded-xl p-8 lg:p-12" style={{
          background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.1) 0%, rgba(149, 18, 182, 0.1) 100%)',
          border: '1px solid rgba(71, 63, 185, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 className="text-4xl font-bold text-white mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visuaal accorde une grande importance à la protection de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos informations personnelles.
              </p>
              <p className="text-gray-300 leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Responsable du traitement</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-6 rounded-lg">
                <p className="text-gray-300 mb-2"><strong>Société :</strong> Visuaal LLC</p>
                <p className="text-gray-300 mb-2"><strong>Adresse :</strong> Dubai Internet City, Dubai, Émirats Arabes Unis</p>
                <p className="text-gray-300 mb-2"><strong>Email :</strong> contact@visuaal.ae</p>
                <p className="text-gray-300"><strong>Téléphone :</strong> +971 4 XXX XXXX</p>
                <p className="text-gray-300"><strong>Responsable de la protection des données :</strong> [contact DPO à compléter]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Données collectées</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Données d&apos;identification</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l&apos;entreprise</li>
                <li>Fonction dans l&apos;entreprise</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Données de navigation</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Données de géolocalisation approximative</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Données techniques</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Cookies et technologies similaires</li>
                <li>Données de performance du site</li>
                <li>Logs de connexion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Finalités du traitement</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">4.1 Exécution du contrat</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Traitement et suivi de vos demandes</li>
                <li>Fourniture de nos services</li>
                <li>Support client et assistance technique</li>
                <li>Facturation et gestion comptable</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">4.2 Intérêts légitimes</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Amélioration de nos services</li>
                <li>Analyses statistiques et études de marché</li>
                <li>Sécurité et prévention de la fraude</li>
                <li>Communication commerciale (avec opt-out)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">4.3 Consentement</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Newsletter et communications marketing</li>
                <li>Cookies non essentiels</li>
                <li>Témoignages et études de cas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Partage des données</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers. 
                Nous pouvons partager vos données dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Prestataires de services :</strong> Hébergement, maintenance, support technique</li>
                <li><strong>Partenaires commerciaux :</strong> Uniquement avec votre consentement explicite</li>
                <li><strong>Obligations légales :</strong> Autorités compétentes si requis par la loi</li>
                <li><strong>Transfert d&apos;entreprise :</strong> En cas de fusion, acquisition ou cession</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Durée de conservation</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-6 rounded-lg">
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong>Clients actifs :</strong> Pendant toute la durée de la relation commerciale + 3 ans</li>
                  <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Cookies :</strong> Selon les paramètres définis (max 13 mois)</li>
                  <li><strong>Archives comptables :</strong> 10 ans conformément aux obligations légales</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Vos droits</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conformément à la législation des Émirats Arabes Unis sur la protection des données, vous disposez des droits suivants :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit d&apos;accès</h4>
                  <p className="text-sm text-gray-300">Obtenir une copie de vos données personnelles</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit de rectification</h4>
                  <p className="text-sm text-gray-300">Corriger vos données inexactes ou incomplètes</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit d&apos;effacement</h4>
                  <p className="text-sm text-gray-300">Demander la suppression de vos données</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit de portabilité</h4>
                  <p className="text-sm text-gray-300">Récupérer vos données dans un format structuré</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit d&apos;opposition</h4>
                  <p className="text-sm text-gray-300">Vous opposer au traitement de vos données</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Droit de limitation</h4>
                  <p className="text-sm text-gray-300">Limiter le traitement de vos données</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@visuaal.ae</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Sécurité des données (Standards UAE)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conformément aux exigences de cybersécurité des Émirats Arabes Unis, nous mettons en œuvre
                des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Chiffrement des données sensibles selon les standards UAE (SSL/TLS, AES-256)</li>
                <li>Contrôle d&apos;accès strict basé sur les rôles et authentification multi-facteurs</li>
                <li>Sauvegarde régulière et sécurisée dans des centres de données certifiés UAE</li>
                <li>Formation du personnel aux standards de protection des données des EAU</li>
                <li>Audit de sécurité conforme aux directives TDRA (Telecom and Digital Government Authority)</li>
                <li>Surveillance 24/7 des systèmes et détection d&apos;intrusion</li>
                <li>Politique de rétention des données conforme à la législation locale</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                <strong>Incident de sécurité :</strong> En cas de violation de données, nous nous engageons à
                notifier les autorités compétentes des EAU dans les 72 heures et les personnes concernées
                dans les plus brefs délais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Notre site utilise différents types de cookies :
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">9.1 Cookies essentiels</h3>
              <p className="text-gray-300 mb-4">
                Nécessaires au fonctionnement du site (navigation, sécurité, préférences de langue).
                Conformément à la réglementation des EAU, ces cookies ne nécessitent pas votre consentement.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.2 Cookies analytiques</h3>
              <p className="text-gray-300 mb-4">
                Nous aident à comprendre comment vous utilisez notre site. Nous utilisons des solutions
                conformes aux exigences de localisation des données des EAU.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.3 Cookies marketing</h3>
              <p className="text-gray-300 mb-4">
                Utilisés pour personnaliser les publicités (nécessitent votre consentement explicite).
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.4 Gestion des préférences</h3>
              <p className="text-gray-300">
                Vous pouvez gérer vos préférences de cookies via notre centre de préférences ou
                les paramètres de votre navigateur. Contact pour questions : privacy@visuaal.ae
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Transferts internationaux</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Certains de nos prestataires peuvent être situés en dehors des Émirats Arabes Unis.
                Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place
                conformément aux standards internationaux de protection des données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Réclamations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Si vous estimez que le traitement de vos données personnelles ne respecte pas
                la réglementation, vous pouvez déposer une réclamation auprès de l&apos;autorité compétente aux EAU :
              </p>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                <p className="text-gray-300">UAE Data Office</p>
                <p className="text-gray-300">Telecommunications and Digital Government Regulatory Authority (TDRA)</p>
                <p className="text-gray-300">Dubai, Émirats Arabes Unis</p>
                <p className="text-gray-300">Site web : https://www.tdra.gov.ae</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cette politique de confidentialité peut être modifiée à tout moment. 
                Les modifications importantes vous seront notifiées par email ou via 
                une notification sur notre site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Contact pour questions :</strong> contact@visuaal.ae
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialitePage