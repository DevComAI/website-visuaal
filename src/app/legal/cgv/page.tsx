import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Visuaal',
  description: 'Consultez les conditions générales de vente de Visuaal pour nos services de communication visuelle.',
  robots: { index: false, follow: false },
}

const CGVPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales de Vente
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Objet et champ d&apos;application</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les présentes conditions générales de vente (CGV) s&apos;appliquent à toutes les prestations 
                de services proposées par Visuaal, société spécialisée dans les solutions de communication 
                visuelle et technologies d&apos;affichage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Toute commande implique l&apos;acceptation sans réserve des présentes CGV par le client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services proposés</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Visuaal propose les services suivants :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Solutions DOOH (Digital Out Of Home)</li>
                <li>Écrans interactifs et tactiles</li>
                <li>Technologies holographiques</li>
                <li>Services de studio de création</li>
                <li>Conseil, installation et maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Commandes et devis</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toute commande fait l&apos;objet d&apos;un devis préalable détaillé. Le devis est valable 
                30 jours à compter de sa date d&apos;émission. La commande n&apos;est ferme et définitive 
                qu&apos;après acceptation écrite du devis par le client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prix et modalités de paiement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les prix sont indiqués hors taxes. Le paiement s&apos;effectue selon les modalités suivantes :
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>30% à la commande</li>
                <li>40% à la livraison</li>
                <li>30% à la mise en service</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Tout retard de paiement entraîne l&apos;application d&apos;intérêts de retard au taux légal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Livraison et installation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les délais de livraison sont donnés à titre indicatif. Un retard de livraison ne peut 
                donner lieu à annulation de commande ou indemnité, sauf accord contraire.
              </p>
              <p className="text-gray-600 leading-relaxed">
                L&apos;installation est réalisée par nos équipes techniques qualifiées selon les normes 
                en vigueur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Garanties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos équipements bénéficient d&apos;une garantie constructeur. Les prestations de service 
                sont garanties selon les termes du contrat de maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La garantie ne couvre pas les dommages résultant d&apos;un usage non conforme ou de négligence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilité</h2>
              <p className="text-gray-600 leading-relaxed">
                La responsabilité de Visuaal ne peut excéder le montant de la prestation en cause. 
                Visuaal ne saurait être tenue responsable des dommages indirects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
              <p className="text-gray-600 leading-relaxed">
                Tous les contenus créés par Visuaal restent sa propriété intellectuelle sauf accord 
                contraire. Le client s&apos;engage à respecter les droits de propriété intellectuelle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Protection des données</h2>
              <p className="text-gray-600 leading-relaxed">
                Visuaal s&apos;engage à respecter la réglementation en vigueur concernant la protection 
                des données personnelles, notamment le RGPD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit applicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties 
                s&apos;efforcent de trouver une solution amiable. À défaut, les tribunaux français 
                seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant ces conditions générales de vente :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-gray-900">Visuaal</p>
                <p className="text-gray-600">123 Rue de la Digital</p>
                <p className="text-gray-600">75001 Paris, France</p>
                <p className="text-gray-600">Email : contact@visuaal.com</p>
                <p className="text-gray-600">Téléphone : +33 1 23 45 67 89</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CGVPage