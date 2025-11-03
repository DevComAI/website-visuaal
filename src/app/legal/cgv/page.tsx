import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Sale | Visuaal',
  description: 'Review the terms of sale for Visuaal visual communication services.',
  robots: { index: false, follow: false },
}

const CGVPage = () => {
  return (
    <div className="min-h-screen py-20 sm:py-28 lg:py-40" style={{backgroundColor: '#140F16'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        <div className="max-w-4xl mx-auto rounded-xl p-6 sm:p-8 lg:p-12" style={{
          background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.1) 0%, rgba(149, 18, 182, 0.1) 100%)',
          border: '1px solid rgba(71, 63, 185, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
            Terms of Sale
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">1. Purpose and Scope</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These terms of sale (ToS) apply to all services offered by Visuaal, a company established
                in Dubai specializing in visual communication solutions and innovative display technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                These ToS govern all business relationships between Visuaal and its clients in the
                United Arab Emirates and the MENA region, whether for equipment sales, rental, service
                provision, or custom solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any order implies unreserved acceptance of these ToS by the client. No particular condition
                may, except formal written acceptance by Visuaal, prevail over these ToS.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">2. Services Offered</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visuaal offers the following services:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>DOOH (Digital Out Of Home) Solutions</li>
                <li>Interactive and Touch Screens</li>
                <li>Holographic Technologies</li>
                <li>Creative Studio Services</li>
                <li>Consulting, Installation and Maintenance</li>
              </ul>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">3. Orders and Quotes</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All orders are subject to a detailed free quote. The quote is valid for 30 days from
                its date of issue. The order is firm and final only after written acceptance of the quote
                by the client and payment of the agreed deposit.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Order modifications requested by the client will only be taken into account within the
                limits of our possibilities and will be subject to an amendment to the initial quote.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In case of order cancellation by the client, the deposit paid will remain acquired by
                Visuaal as a flat-rate compensation, without prejudice to any other action.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">4. Prices and Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Prices are indicated excluding taxes. Payment is made according to the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>30% on order</li>
                <li>40% on delivery</li>
                <li>30% on commissioning</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Prices are expressed in AED (United Arab Emirates Dirham). VAT (5%) will be added
                in accordance with UAE tax regulations.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Any late payment will result in the application of late payment interest in accordance
                with the laws of the United Arab Emirates.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">5. Delivery and Installation</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Delivery Zones:</strong> We deliver to all Emirates (Dubai, Abu Dhabi, Sharjah, etc.)
                with delivery fees calculated according to geographic zone.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Timelines:</strong> The indicated delivery times are contractual. In case of delay,
                the client is informed and may request cancellation in accordance with UAE consumer law.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Costs:</strong> Shipping costs are indicated before order validation.
                Free delivery for orders over 5000 AED in the Emirate of Dubai.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Installation:</strong> Performed by our certified teams according to UAE technical
                standards and international safety standards. Installation guarantee included.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">6. Right of Return and Refund (UAE Law 2023)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Right of Withdrawal:</strong> In accordance with Federal Decree-Law No. 14 of 2023,
                you have a 14 calendar day period to return your purchases without having to justify reasons
                or pay penalties.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Return Conditions:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Products in their original packaging, in perfect condition</li>
                <li>Accompanied by all accessories and invoice</li>
                <li>Unused and not installed (except identified defect)</li>
                <li>Return request via our customer service: returns@visuaal.ae</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Refund:</strong> Refunds are processed within a maximum of 14 days after receiving
                the returned product, using the same payment method used for purchase.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Non-Compliant Products:</strong> Federal Law No. 15 of 2020 guarantees the right to
                return products that do not match the description or expected quality, with return costs
                covered by Visuaal.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">7. Warranties</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our equipment benefits from a standard manufacturer&apos;s warranty of 24 months. Service
                provisions are guaranteed according to the terms of the subscribed maintenance contract.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The warranty covers manufacturing defects and hidden defects. It does not cover:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>Damage resulting from non-compliant use or negligence</li>
                <li>Normal wear and tear of equipment</li>
                <li>Damage caused by third parties or force majeure</li>
                <li>Unauthorized modifications to the equipment</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To benefit from the warranty, the client must notify the defect within 48 hours of its discovery.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">8. Electronic Transaction Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In accordance with the 2023 Decree-Law on electronic commerce, Visuaal guarantees:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>SSL/TLS encryption of all payment data</li>
                <li>Compliance with PCI-DSS standards for credit card security</li>
                <li>Strong authentication for electronic payments</li>
                <li>Fraud protection through advanced detection systems</li>
                <li>Secure backup of transaction data</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                In case of payment problems, immediately contact our customer service at +971 4 XXX XXXX.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">9. Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Visuaal&apos;s liability cannot exceed the amount of the service in question.
                Visuaal cannot be held liable for indirect damages.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">10. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content created by Visuaal remains its intellectual property unless otherwise agreed.
                The client undertakes to respect intellectual property rights.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">11. Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                Visuaal undertakes to comply with UAE regulations concerning the protection of personal data,
                including the UAE Federal Data Protection Law.
              </p>
            </section>

            <section className="mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">12. Applicable Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These ToS are subject to the law of the United Arab Emirates. In case of dispute, the parties
                will endeavor to find an amicable solution through mediation. Failing this, the courts of Dubai
                will have sole jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions regarding these terms of sale:
              </p>
              <div className="p-4 rounded-lg mt-4" style={{
                background: 'linear-gradient(135deg, rgba(71, 63, 185, 0.15) 0%, rgba(149, 18, 182, 0.15) 100%)',
                border: '1px solid rgba(71, 63, 185, 0.3)'
              }}>
                <p className="font-semibold text-white">Visuaal LLC</p>
                <p className="text-gray-300">Blue Tower,</p>
                <p className="text-gray-300">Block A&B Office number 110,</p>
                <p className="text-gray-300">Sheikh Zayed Road, Dubai, UAE</p>
                <p className="text-gray-300">Email: contact@visuaal.ai</p>
                <p className="text-gray-300">Phone: +971 58 804 5993</p>
                <p className="text-gray-300">License: [Dubai commercial license number]</p>
                <p className="text-gray-300">TRN: [UAE tax registration number]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CGVPage
