import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import ScreenContent from '@/components/ui/ScreenContent'
import ProductService from '@/components/ui/ProductService'
import GradientButton from '@/components/ui/GradientButton'
import GradientText from '@/components/ui/GradientText'
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import { ledScreenProductSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'LED Screens - Indoor & Outdoor Solutions',
  description: 'LED displays offering stunning, vibrant visuals. Available for indoor and outdoor use, retail, events, or corporate spaces with unmatched flexibility.',
  keywords: ['LED screens', 'indoor LED displays', 'outdoor LED screens', 'LED walls', 'digital displays', 'LED advertising'],
  openGraph: {
    title: 'LED Screens - Indoor & Outdoor Solutions | Visuaal',
    description: 'LED displays bringing content to life with bright, vibrant, impossible-to-ignore visuals. Unmatched flexibility in size, shape, and impact.',
    images: [
      {
        url: '/img/screen/hero.png',
        width: 1200,
        height: 630,
        alt: 'LED Screens - Indoor & Outdoor Display Solutions',
      },
    ],
  },
}

const ScreenPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ledScreenProductSchema,
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.ai' },
        { name: 'Products', url: 'https://visuaal.ai/products/screen' },
        { name: 'LED Screens', url: 'https://visuaal.ai/products/screen' }
      ])
    ]
  }
  const services = [
    {
      title: <>INDOOR LED <GradientText>SCREENS</GradientText></>,
      image: "/img/screen/productservice-1.png",
      description: "Ideal for meeting rooms, reception areas, shops, or trade shows.",
      bulletPoints: [
        "High resolution for a clear image even up close",
        "Optimized brightness for maximum comfort indoors",
        "Available in various sizes and formats",
        "Perfect for digital signage, presentations, or events"
      ]
    },
    {
      title: <><GradientText>OUTDOOR</GradientText> LED SCREENS</>,

      image: "/img/screen/productservice-2.png", 
      description: "Designed to withstand weather conditions (rain, sun, wind).",
      bulletPoints: [
        "Powerful brightness, visible even in direct sunlight",
        "Robust and waterproof casing",
        "Long-lasting and energy-efficient",
        "Ideal for advertising displays, signage, or urban communication"
      ]
    },
    {
      title: <>LED SCREENS FOR <GradientText>SHOP WINDOWS</GradientText> & <GradientText>ADVERTISING</GradientText></>,

      image: "/img/screen/productservice-3.png",
      description: "Attract your customers' attention with dynamic visuals.",
      bulletPoints: [
        "Ultra-thin design to capture attention through shop windows",
        "Quick and easy installation becoming to the size of your storefront",
        "Perfect for stores, restaurants, and real estate agencies",
        "Maximizes the visual impact with traditional advertising supports"
      ]
    },
    {
      title: <>LED WALLS FOR <GradientText>EVENTS</GradientText> & <GradientText>SHOWS</GradientText> ANY SIZE POSSIBLE</>,

      image: "/img/screen/productservice-4.png",
      description: "Showcase your visual contents at your events.",
      bulletPoints: [
        "Modular panels for custom sizes and creative shapes",
        "Immersive high-definition image",
        "Temporary or permanent installation",
        "Ideal for concerts, exhibitions, trade shows, and conferences"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero 
        backgroundImage="/img/screen/hero.png"
        title="SCREEN LED"
        subtitle={<>LED <GradientText>solutions</GradientText> designed for <GradientText>enhance</GradientText> your brand image with <GradientText>high-visibility</GradientText>.</>}
        showScrollIndicator={false}
      />
<TitlePage

title={<>What are <GradientText>led screens</GradientText> for ?</>}

paragraphs={[
  "LED displays are a powerful visual medium that brings content to life, bright, vibrant, and impossible to ignore. Whether used indoors or outdoors, for retail, events, or corporate spaces, LED screens offer unmatched flexibility in size, shape, and impact.",
  "From immersive brand storytelling to high-visibility messaging, they deliver stunning visuals in any environment.",
  "A cutting-edge solution to elevate your communication and captivate your audience."
]}
backgroundImage="SCREEN.png"
/>


<section className="py-10 md:py-20 relative">
        <div className="">
          <div className="flex justify-center relative">
          <div
            className="p-1 rounded-2xl md:rounded-3xl relative z-10 w-full max-w-[90vw] lg:max-w-[1440px]"
            style={{
              background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
            }}
          >
          <h2 className="text-xl sm:text-2xl md:text-[40px] font-medium text-white text-center uppercase absolute top-8 sm:top-16 md:top-40 left-0 right-0 z-20 px-4">LED SCREEN BY <><GradientText>VISUAAL</GradientText> </></h2>


            <div
              className="w-full rounded-2xl md:rounded-3xl overflow-hidden h-[200px] sm:h-[700px] lg:h-[710px]"
              style={{
                backgroundColor: '#211824',
              }}
            >
              <OptimizedSplineViewer
                scene="https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                priority={false}
                loadingDelay={200}
                placeholderVariant="skeleton"
                interactive={true}
              />
            </div>
          </div>
          </div>
        </div>
      </section>



      <div className="pb-20 md:pb-40 lg:pb-60"> </div>




      <ScreenContent 
        title={<><GradientText>EXCEPTIONAL IMAGE QUALITY</GradientText> </>}
        paragraph="Our LED screens offer high-definition resolution and vibrant colors that immediately capture attention. Thanks to optimal brightness and advanced technology, your content is visible and impactful, day or night."
        imageUrl="/img/screen/screencontent-1.png"
      />

<ScreenContent
        title={<><GradientText>Quick and professional installation</GradientText> </>}
        paragraph="Our team of specialized technicians provides fast and secure turnkey installation. We take care of everything: site assessment, selection of suitable equipment, assembly, and commissioning, so that you can start using your screens right away."
        imageUrl="/img/screen/screencontent-2.png"
        className="sm:pt-40"
      />

<ScreenContent 
        title={<><GradientText>Customized solutions tailored to your project</GradientText> </>}
        paragraph="Every project is unique. Whether you are a shop, a community, a theater, or a business, we design customized solutions that meet your specific needs: size, location, indoor or outdoor use."
        imageUrl="/img/screen/screencontent-3.png"
      />


<div className="pb-20 md:pb-40 lg:pb-60"> </div>


      <ProductService 
        title={<>OUR <GradientText>PRODUCTS</GradientText> & <GradientText>SERVICES</GradientText></>}
        paragraphs={[
          "We offer a wide range of LED screens suitable for all needs: visual communication, advertising, events, professional displays, or digital decoration.",
          "Whether for indoor or outdoor use, for a store, a business, a community, or a show, we have the ideal solution.",
          "Each LED screen is selected and installed according to your technical constraints and objectives to ensure maximum visibility and a strong visual impact."
        ]}
        services={services}
      />

      {/* Custom LED Screens Section */}
      <section className="py-10 md:py-20 flex justify-center">
        <div className="px-4 md:px-6">
          <div className="text-left max-w-[1500px] mx-auto">
            {/* Title */}
            <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium text-white mb-6 md:mb-8 lg:mb-12 uppercase text-center">
              <GradientText>CUSTOM</GradientText> LED SCREENS
            </h2>

            {/* Main Description */}
            <p className="text-base md:text-xl lg:text-[32px] text-white font-medium leading-relaxed mb-6 md:mb-8 lg:mb-12">
              Because every project is unique, we design customized LED solutions that perfectly suit your needs. Whether you want a giant screen for a shopping mall, an LED column for a showroom, or original shapes for an architectural project, we bring your ideas to life.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2 md:space-y-3 lg:space-y-4 mb-6 md:mb-8 lg:mb-12 font-regular ml-4 md:ml-6 lg:ml-8">
              <li className="text-base md:text-xl lg:text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-2 md:mr-3 mt-1">•</span>
                100% customizable dimensions and formats
              </li>
              <li className="text-base md:text-xl lg:text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-2 md:mr-3 mt-1">•</span>
                Special designs available (curved walls, columns, transparent screens, etc.)
              </li>
              <li className="text-base md:text-xl lg:text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-2 md:mr-3 mt-1">•</span>
                Seamless integration into your indoor or outdoor spaces
              </li>
              <li className="text-base md:text-xl lg:text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-2 md:mr-3 mt-1">•</span>
                Comprehensive support: design, manufacturing, installation, and commissioning
              </li>
            </ul>

            {/* Bottom Description */}
            <p className="text-base md:text-xl lg:text-[32px] font-medium text-white leading-relaxed mb-8 md:mb-12 lg:mb-16">
              These custom LED screens are the ideal solution to stand out and offer your audience an unforgettable visual experience.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <GradientButton 
                href="/contact"
                text="I want this"
                className="w-[150px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="pb-20 md:pb-40 lg:pb-60"> </div>
      
    </div>
  )
}

export default ScreenPage