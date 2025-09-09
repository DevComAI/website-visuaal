import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Visuaal',
  description: 'Mentions légales et informations sur l&apos;éditeur du site Visuaal.com',
  robots: { index: false, follow: false },
}

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Raison sociale :</strong> Visuaal SAS</p>
                <p className="text-gray-600 mb-2"><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</p>
                <p className="text-gray-600 mb-2"><strong>Capital social :</strong> [montant à compléter] €</p>
                <p className="text-gray-600 mb-2"><strong>SIRET :</strong> [numéro SIRET à compléter]</p>
                <p className="text-gray-600 mb-2"><strong>Code APE :</strong> [code APE à compléter]</p>
                <p className="text-gray-600 mb-2"><strong>TVA Intracommunautaire :</strong> [numéro TVA à compléter]</p>
                <p className="text-gray-600 mb-2"><strong>Adresse du siège social :</strong> [adresse à compléter]</p>
                <p className="text-gray-600 mb-2"><strong>Téléphone :</strong> [téléphone à compléter]</p>
                <p className="text-gray-600 mb-2"><strong>Email :</strong> [email à compléter]</p>
                <p className="text-gray-600"><strong>Directeur de la publication :</strong> [nom du directeur à compléter]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="text-gray-600 mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
                <p className="text-gray-600"><strong>Site web :</strong> https://vercel.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Conception et développement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Conception :</strong> Équipe Visuaal</p>
                <p className="text-gray-600 mb-2"><strong>Développement :</strong> Équipe Visuaal</p>
                <p className="text-gray-600"><strong>Maintenance :</strong> Équipe Visuaal</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le site web visuaal.com et l&apos;ensemble de ses contenus (textes, images, vidéos, logos, etc.) 
                sont la propriété exclusive de Visuaal, sauf mentions contraires.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l&apos;accord 
                écrit préalable de Visuaal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les marques citées sur ce site sont déposées par leurs propriétaires respectifs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les informations diffusées sur le site visuaal.com le sont à titre informatif. 
                Visuaal s&apos;efforce de fournir des informations aussi précises que possible.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toutefois, Visuaal ne pourra être tenue responsable des omissions, des inexactitudes 
                et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des 
                tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tous les liens hypertextes pointant vers d&apos;autres sites présents sur visuaal.com 
                sont proposés à titre indicatif. Visuaal ne saurait être tenue responsable du 
                contenu de ces sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Collecte et traitement des données</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, 
                aux fichiers et aux libertés modifiée et au Règlement européen n° 2016/679 (RGPD), 
                vous bénéficiez d&apos;un droit d&apos;accès, de rectification, de portabilité et 
                d&apos;effacement de vos données.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pour exercer ces droits ou pour toute question sur le traitement de vos données, 
                vous pouvez nous contacter à l&apos;adresse : contact@visuaal.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Le site visuaal.com utilise des cookies pour améliorer l&apos;expérience de navigation 
                et analyser le trafic. Ces cookies ne collectent aucune information personnelle 
                identifiable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient être limitées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                et après recherche d&apos;une solution amiable, les tribunaux français seront seuls 
                compétents pour connaître du litige.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Médiation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conformément aux dispositions du Code de la consommation concernant le règlement 
                amiable des litiges, Visuaal adhère au Service du Médiateur du e-commerce de la FEVAD 
                (Fédération du e-commerce et de la vente à distance) dont les coordonnées sont les suivantes :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-600">Médiateur de la consommation FEVAD</p>
                <p className="text-gray-600">60 rue de la Boétie, 75008 Paris</p>
                <p className="text-gray-600">https://www.mediateurfevad.fr</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Après démarche préalable écrite des consommateurs vis-à-vis de Visuaal, le Service du médiateur 
                peut être saisi pour tout litige de consommation dont le règlement n&apos;aurait pas abouti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-gray-900">Visuaal SAS</p>
                <p className="text-gray-600">[Adresse à compléter]</p>
                <p className="text-gray-600">[Code postal] [Ville], France</p>
                <p className="text-gray-600">Email : [email à compléter]</p>
                <p className="text-gray-600">Téléphone : [téléphone à compléter]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegalesPage