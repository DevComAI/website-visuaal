import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notice | Visuaal',
  description: 'Legal notice and information about the publisher of Visuaal.com',
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
            Legal Notice
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Website Publisher</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Full Company Name:</strong> Visuaal Digital Solutions LLC</p>
                <p className="text-gray-300 mb-2"><strong>Legal Form:</strong> Limited Liability Company (LLC) - Dubai Free Zone</p>
                <p className="text-gray-300 mb-2"><strong>Establishment Zone:</strong> Dubai Internet City (TECOM Group)</p>
                <p className="text-gray-300 mb-2"><strong>Commercial License Number:</strong> [DIC license number to be completed]</p>
                <p className="text-gray-300 mb-2"><strong>Economic Activity Code:</strong> Digital Communication Solutions</p>
                <p className="text-gray-300 mb-2"><strong>TRN (Tax Registration Number):</strong> [UAE TRN number to be completed]</p>
                <p className="text-gray-300 mb-2"><strong>Full Physical Address:</strong></p>
                <p className="text-gray-300 mb-2 ml-4">Building X, Office XXX</p>
                <p className="text-gray-300 mb-2 ml-4">Dubai Internet City</p>
                <p className="text-gray-300 mb-2 ml-4">Dubai, United Arab Emirates</p>
                <p className="text-gray-300 mb-2"><strong>Working Phone:</strong> +971 4 XXX XXXX</p>
                <p className="text-gray-300 mb-2"><strong>Working Email Address:</strong> contact@visuaal.ai</p>
                <p className="text-gray-300 mb-2"><strong>Publication Director:</strong> [Legal officer name]</p>
                <p className="text-gray-300"><strong>Supervisory Authority:</strong> Dubai Internet City Authority</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Host:</strong> Vercel Inc.</p>
                <p className="text-gray-300 mb-2"><strong>Address:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
                <p className="text-gray-300"><strong>Website:</strong> https://vercel.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Design and Development</h2>
              <div className="p-6 rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300 mb-2"><strong>Design:</strong> Visuaal Team</p>
                <p className="text-gray-300 mb-2"><strong>Development:</strong> Visuaal Team</p>
                <p className="text-gray-300"><strong>Maintenance:</strong> Visuaal Team</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The website visuaal.com and all its content (texts, images, videos, logos, etc.)
                are the exclusive property of Visuaal, unless otherwise stated.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Any reproduction, distribution, modification, adaptation, retransmission or publication,
                even partial, of these different elements is strictly prohibited without the prior
                written consent of Visuaal.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The trademarks mentioned on this site are registered by their respective owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The information published on visuaal.com is provided for informational purposes.
                Visuaal strives to provide information as accurate as possible.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                However, Visuaal cannot be held responsible for omissions, inaccuracies
                and deficiencies in updates, whether on its part or on the part of
                third-party partners who provide this information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                All hyperlinks pointing to other sites present on visuaal.com
                are offered for information purposes. Visuaal cannot be held responsible for the
                content of these sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Collection and Processing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with UAE legislation on data protection,
                including the Federal Personal Data Protection Law,
                you benefit from a right of access, rectification, portability and
                erasure of your data.
              </p>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights or for any questions about the processing of your data,
                you can contact us at: contact@visuaal.ai
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The website visuaal.com uses cookies to improve the browsing experience
                and analyze traffic. These cookies do not collect any personally identifiable
                information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can configure your browser to refuse cookies, but some
                features of the site may be limited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Applicable Law</h2>
              <p className="text-gray-300 leading-relaxed">
                This legal notice is subject to the law of the United Arab Emirates. In case of dispute,
                and after seeking an amicable solution, the courts of Dubai will have sole
                jurisdiction to hear the dispute.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Mediation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with UAE regulations concerning the amicable settlement
                of commercial disputes, Visuaal uses mediation through the
                Dubai International Arbitration Centre (DIAC) for conflict resolution.
              </p>
              <div className="p-4 rounded-lg mt-4" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="text-gray-300">Dubai International Arbitration Centre (DIAC)</p>
                <p className="text-gray-300">Dubai International Financial Centre</p>
                <p className="text-gray-300">Dubai, United Arab Emirates</p>
                <p className="text-gray-300">https://www.diac.ae</p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                After prior written approach by customers to Visuaal, the DIAC mediation service
                can be contacted for any commercial dispute whose settlement has not been successful.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions regarding this legal notice, you can contact us:
              </p>
              <div className="p-4 rounded-lg mt-4" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="font-semibold text-white">Visuaal LLC</p>
                <p className="text-gray-300">Dubai Internet City</p>
                <p className="text-gray-300">Dubai, United Arab Emirates</p>
                <p className="text-gray-300">Email: contact@visuaal.ai</p>
                <p className="text-gray-300">Phone: +971 4 XXX XXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegalesPage
