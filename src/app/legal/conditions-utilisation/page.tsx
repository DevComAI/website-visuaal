import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Visuaal',
  description: 'Terms of use for the Visuaal.com website and our services.',
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
            Terms of Use
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using the website visuaal.com (the &quot;Site&quot;), you agree
                to be bound by these terms of use. If you do not accept these terms,
                please do not use our Site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These terms apply to all visitors, users and other persons
                who access or use the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visuaal is a company specializing in visual communication solutions
                and display technologies. Our Site provides information about our services
                and allows you to contact our team.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Services include:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                <li>DOOH (Digital Out Of Home) Solutions</li>
                <li>Interactive and Touch Screens</li>
                <li>Holographic Technologies</li>
                <li>Creative Studio Services</li>
                <li>Consulting, Installation and Maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to use the Site in a legal and respectful manner.
                It is prohibited to use the Site to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Violate applicable laws or regulations</li>
                <li>Transmit illegal, harmful or offensive content</li>
                <li>Infringe intellectual property rights</li>
                <li>Compromise the security or integrity of the Site</li>
                <li>Use robots, scripts or other automated means</li>
                <li>Attempt to access restricted areas of the Site</li>
                <li>Harass or disturb other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. User Content</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you submit content via our contact forms or other
                means of communication, you warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>You hold all necessary rights to this content</li>
                <li>The content does not violate any third party rights</li>
                <li>The content is accurate and not misleading</li>
                <li>The content does not contain viruses or malicious code</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You grant Visuaal a non-exclusive license to use this content
                in the context of providing our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Site and its original content, features and functionality
                are and will remain the exclusive property of Visuaal and its licensors.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Site is protected by copyright, trademark and
                other laws. Our trademarks and trade dress may not
                be used in connection with any product or service without
                our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Privacy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. Our Privacy Policy
                explains how we collect, use and protect your information
                when you use our Site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our Site, you consent to the collection and use
                of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer</h2>
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(255, 138, 0, 0.1) 100%)',
                border: '1px solid rgba(255, 193, 7, 0.3)'
              }} className=" border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Important Disclaimer:</strong>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The information on this Site is provided on an &quot;as is&quot; basis.
                  To the fullest extent permitted by law, Visuaal excludes all
                  representations, warranties, conditions, undertakings and liabilities.
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                In particular, we do not warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>The Site will be constantly available or uninterrupted</li>
                <li>The information on the Site is complete, true or accurate</li>
                <li>The Site will be free of bugs, viruses or other harmful elements</li>
                <li>Defects will be corrected</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In no event shall Visuaal, its directors, employees, partners, agents,
                suppliers or affiliates be liable for indirect, incidental, special,
                consequential or punitive damages.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This limitation applies whether the alleged liability arises
                from contract, tort, negligence, strict
                liability or any other legal basis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to defend, indemnify and hold harmless
                Visuaal and its licensors, employees, contractors, agents,
                officers, shareholders, business partners and employees, from and against
                any claims, damages, obligations, losses, liabilities, costs
                or debt and expenses (including but not limited to attorney fees).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your access immediately, without prior notice
                or liability, for any reason whatsoever, including if you
                breach the Terms of Use.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, your right to use the Site will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Applicable Law</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These terms of use are governed by and construed in accordance
                with the laws of the United Arab Emirates, without regard to conflict of law provisions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our failure to enforce any right or provision of these
                Terms of Use will not constitute a waiver of such right
                or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material,
                we will try to provide at least 30 days notice before any
                new terms take effect.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It is your responsibility to periodically review these
                Terms of Use for changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Severability</h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms of Use is found to be unenforceable
                or invalid, that provision will be modified and interpreted to accomplish
                the objectives of that provision to the greatest extent possible
                under applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Entire Agreement</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Use, along with our Privacy Policy
                and any other legal notices published by us on the Site, constitute the
                entire agreement between you and Visuaal regarding our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions regarding these Terms of Use,
                please contact us at:
              </p>
              <div style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }} className=" p-4 rounded-lg">
                <p className="font-semibold text-white">Visuaal LLC</p>
                <p className="text-gray-300">Dubai Internet City</p>
                <p className="text-gray-300">Dubai, United Arab Emirates</p>
                <p className="text-gray-300">Email: contact@visuaal.ai</p>
                <p className="text-gray-300">Phone: +971 4 XXX XXXX</p>
                <p className="text-gray-300">Legal Department: legal@visuaal.ae</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConditionsUtilisationPage
