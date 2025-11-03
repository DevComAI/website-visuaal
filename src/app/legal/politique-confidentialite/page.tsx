import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Visuaal',
  description: 'Our privacy policy details how Visuaal collects, uses and protects your personal data.',
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
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visuaal places great importance on protecting your personal data.
                This privacy policy explains how we collect, use,
                store and protect your personal information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our services, you accept the practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Data Controller</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-6 rounded-lg">
                <p className="text-gray-300 mb-2"><strong>Company:</strong> Visuaal LLC</p>
                <p className="text-gray-300 mb-2"><strong>Address:</strong> Dubai Internet City, Dubai, United Arab Emirates</p>
                <p className="text-gray-300 mb-2"><strong>Email:</strong> contact@visuaal.ai</p>
                <p className="text-gray-300"><strong>Phone:</strong> +971 4 XXX XXXX</p>
                <p className="text-gray-300"><strong>Data Protection Officer:</strong> [DPO contact to be completed]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Collected</h2>

              <h3 className="text-xl font-semibold text-white mb-3">3.1 Identification Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Job title</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Navigation Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Visit duration</li>
                <li>Approximate geolocation data</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Technical Data</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Cookies and similar technologies</li>
                <li>Website performance data</li>
                <li>Connection logs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Processing Purposes</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">4.1 Contract Execution</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Processing and tracking your requests</li>
                <li>Providing our services</li>
                <li>Customer support and technical assistance</li>
                <li>Invoicing and accounting management</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">4.2 Legitimate Interests</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Improving our services</li>
                <li>Statistical analysis and market research</li>
                <li>Security and fraud prevention</li>
                <li>Commercial communication (with opt-out)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">4.3 Consent</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Newsletter and marketing communications</li>
                <li>Non-essential cookies</li>
                <li>Testimonials and case studies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell or rent your personal data to third parties.
                We may share your data in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> Hosting, maintenance, technical support</li>
                <li><strong>Business Partners:</strong> Only with your explicit consent</li>
                <li><strong>Legal Obligations:</strong> Competent authorities if required by law</li>
                <li><strong>Business Transfer:</strong> In case of merger, acquisition or assignment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Retention Period</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-6 rounded-lg">
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li><strong>Active Customers:</strong> Throughout the business relationship + 3 years</li>
                  <li><strong>Prospects:</strong> 3 years from last contact</li>
                  <li><strong>Navigation Data:</strong> 13 months maximum</li>
                  <li><strong>Cookies:</strong> According to defined settings (max 13 months)</li>
                  <li><strong>Accounting Archives:</strong> 10 years in accordance with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with UAE data protection legislation, you have the following rights:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right of Access</h4>
                  <p className="text-sm text-gray-300">Obtain a copy of your personal data</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right to Rectification</h4>
                  <p className="text-sm text-gray-300">Correct your inaccurate or incomplete data</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right to Erasure</h4>
                  <p className="text-sm text-gray-300">Request the deletion of your data</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right to Portability</h4>
                  <p className="text-sm text-gray-300">Retrieve your data in a structured format</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right to Object</h4>
                  <p className="text-sm text-gray-300">Object to the processing of your data</p>
                </div>
                <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Right to Restriction</h4>
                  <p className="text-sm text-gray-300">Restrict the processing of your data</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, contact us at: <strong>contact@visuaal.ai</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Security (UAE Standards)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with UAE cybersecurity requirements, we implement
                appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Encryption of sensitive data according to UAE standards (SSL/TLS, AES-256)</li>
                <li>Strict role-based access control and multi-factor authentication</li>
                <li>Regular and secure backup in UAE certified data centers</li>
                <li>Staff training in UAE data protection standards</li>
                <li>Security audit compliant with TDRA (Telecom and Digital Government Authority) guidelines</li>
                <li>24/7 system monitoring and intrusion detection</li>
                <li>Data retention policy compliant with local legislation</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                <strong>Security Incident:</strong> In case of data breach, we commit to
                notify UAE competent authorities within 72 hours and affected persons
                as soon as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our website uses different types of cookies:
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.1 Essential Cookies</h3>
              <p className="text-gray-300 mb-4">
                Necessary for the operation of the site (navigation, security, language preferences).
                In accordance with UAE regulations, these cookies do not require your consent.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.2 Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">
                Help us understand how you use our site. We use solutions
                compliant with UAE data localization requirements.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.3 Marketing Cookies</h3>
              <p className="text-gray-300 mb-4">
                Used to personalize advertisements (require your explicit consent).
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">9.4 Preference Management</h3>
              <p className="text-gray-300">
                You can manage your cookie preferences via our preference center or
                your browser settings. Contact for questions: privacy@visuaal.ae
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. International Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some of our service providers may be located outside the United Arab Emirates.
                In this case, we ensure that appropriate safeguards are in place
                in accordance with international data protection standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Complaints</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you believe that the processing of your personal data does not comply
                with regulations, you may file a complaint with the competent authority in the UAE:
              </p>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                <p className="text-gray-300">UAE Data Office</p>
                <p className="text-gray-300">Telecommunications and Digital Government Regulatory Authority (TDRA)</p>
                <p className="text-gray-300">Dubai, United Arab Emirates</p>
                <p className="text-gray-300">Website: https://www.tdra.gov.ae</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Modifications</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This privacy policy may be modified at any time.
                Important modifications will be notified to you by email or via
                a notification on our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Contact for questions:</strong> contact@visuaal.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialitePage
