import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Visuaal',
  description: 'Mentions légales et informations sur l&apos;éditeur du site Visuaal.com',
  robots: { index: false, follow: false },
}

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen py-40" style={{backgroundColor: '#140F16'}}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto rounded-xl p-8 lg:p-12" style={{
          background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.1) 0%, rgba(149, 18, 182, 0.1) 100%)',
          border: '1px solid rgba(71, 63, 185, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 className="text-4xl font-bold text-white mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Dénomination sociale complète :</strong> Visuaal Digital Solutions LLC</p>
                <p className="text-gray-300 mb-2"><strong>Forme juridique :</strong> Limited Liability Company (LLC) - Zone franche de Dubai</p>
                <p className="text-gray-300 mb-2"><strong>Zone d&apos;établissement :</strong> Dubai Internet City (TECOM Group)</p>
                <p className="text-gray-300 mb-2"><strong>Numéro de licence commerciale :</strong> [Numéro licence DIC à compléter]</p>
                <p className="text-gray-300 mb-2"><strong>Code d&apos;activité économique :</strong> Solutions de communication numérique</p>
                <p className="text-gray-300 mb-2"><strong>TRN (Tax Registration Number) :</strong> [Numéro TRN EAU à compléter]</p>
                <p className="text-gray-300 mb-2"><strong>Adresse physique complète :</strong></p>
                <p className="text-gray-300 mb-2 ml-4">Building X, Office XXX</p>
                <p className="text-gray-300 mb-2 ml-4">Dubai Internet City</p>
                <p className="text-gray-300 mb-2 ml-4">Dubai, Émirats Arabes Unis</p>
                <p className="text-gray-300 mb-2"><strong>Téléphone fonctionnel :</strong> +971 4 XXX XXXX</p>
                <p className="text-gray-300 mb-2"><strong>Adresse e-mail fonctionnelle :</strong> contact@visuaal.ai</p>
                <p className="text-gray-300 mb-2"><strong>Directeur de la publication :</strong> [Nom du responsable légal]</p>
                <p className="text-gray-300"><strong>Autorité de supervision :</strong> Dubai Internet City Authority</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="text-gray-300 mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
                <p className="text-gray-300"><strong>Site web :</strong> https://vercel.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Conception et développement</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Conception :</strong> Équipe Visuaal</p>
                <p className="text-gray-300 mb-2"><strong>Développement :</strong> Équipe Visuaal</p>
                <p className="text-gray-300"><strong>Maintenance :</strong> Équipe Visuaal</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le site web visuaal.com et l&apos;ensemble de ses contenus (textes, images, vidéos, logos, etc.) 
                sont la propriété exclusive de Visuaal, sauf mentions contraires.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l&apos;accord 
                écrit préalable de Visuaal.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les marques citées sur ce site sont déposées par leurs propriétaires respectifs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Responsabilité</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les informations diffusées sur le site visuaal.com le sont à titre informatif. 
                Visuaal s&apos;efforce de fournir des informations aussi précises que possible.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Toutefois, Visuaal ne pourra être tenue responsable des omissions, des inexactitudes 
                et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des 
                tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Tous les liens hypertextes pointant vers d&apos;autres sites présents sur visuaal.com 
                sont proposés à titre indicatif. Visuaal ne saurait être tenue responsable du 
                contenu de ces sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Collecte et traitement des données</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conformément à la législation des Émirats Arabes Unis sur la protection des données,
                notamment la loi fédérale sur la protection des données personnelles,
                vous bénéficiez d&apos;un droit d&apos;accès, de rectification, de portabilité et
                d&apos;effacement de vos données.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pour exercer ces droits ou pour toute question sur le traitement de vos données,
                vous pouvez nous contacter à l&apos;adresse : contact@visuaal.ai
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le site visuaal.com utilise des cookies pour améliorer l&apos;expérience de navigation 
                et analyser le trafic. Ces cookies ne collectent aucune information personnelle 
                identifiable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient être limitées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Droit applicable</h2>
              <p className="text-gray-300 leading-relaxed">
                Les présentes mentions légales sont soumises au droit des Émirats Arabes Unis. En cas de litige,
                et après recherche d&apos;une solution amiable, les tribunaux de Dubai seront seuls
                compétents pour connaître du litige.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Médiation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Conformément à la réglementation des Émirats Arabes Unis concernant le règlement
                amiable des litiges commerciaux, Visuaal recourt à la médiation par le biais du
                Dubai International Arbitration Centre (DIAC) pour la résolution des conflits.
              </p>
              <div className="p-4 rounded-lg mt-4" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300">Dubai International Arbitration Centre (DIAC)</p>
                <p className="text-gray-300">Dubai International Financial Centre</p>
                <p className="text-gray-300">Dubai, Émirats Arabes Unis</p>
                <p className="text-gray-300">https://www.diac.ae</p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                Après démarche préalable écrite des clients vis-à-vis de Visuaal, le service de médiation du DIAC
                peut être saisi pour tout litige commercial dont le règlement n&apos;aurait pas abouti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="p-4 rounded-lg mt-4" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="font-semibold text-white">Visuaal LLC</p>
                <p className="text-gray-300">Dubai Internet City</p>
                <p className="text-gray-300">Dubai, Émirats Arabes Unis</p>
                <p className="text-gray-300">Email : contact@visuaal.ai</p>
                <p className="text-gray-300">Téléphone : +971 4 XXX XXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegalesPage