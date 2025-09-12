'use client'

import GradientText from '@/components/ui/GradientText'

const PARTNER_LOGOS = [
  { name: 'Client 1', src: '/clients/logo0.svg', alt: 'Client Logo' },
  { name: 'Client 2', src: '/clients/logo1.svg', alt: 'Client Logo' },
  { name: 'Client 3', src: '/clients/logo2.svg', alt: 'Client Logo' },
  { name: 'Client 4', src: '/clients/logo3.svg', alt: 'Client Logo' },
  { name: 'Client 5', src: '/clients/logo4.svg', alt: 'Client Logo' },
  { name: 'Client 6', src: '/clients/logo5.svg', alt: 'Client Logo' },
  { name: 'Client 7', src: '/clients/logo6.svg', alt: 'Client Logo' },
  { name: 'Client 8', src: '/clients/logo7.svg', alt: 'Client Logo' },
  { name: 'Client 9', src: '/clients/logo8.svg', alt: 'Client Logo' },
  { name: 'Client 10', src: '/clients/logo9.svg', alt: 'Client Logo' },
  { name: 'Client 11', src: '/clients/logo10.svg', alt: 'Client Logo' },
  { name: 'Client 12', src: '/clients/logo11.svg', alt: 'Client Logo' },
  { name: 'Client 13', src: '/clients/logo12.svg', alt: 'Client Logo' },
  { name: 'Client 14', src: '/clients/logo13.svg', alt: 'Client Logo' },
  { name: 'Client 15', src: '/clients/logo14.svg', alt: 'Client Logo' },
] as const

export default function LogoCarousel() {
  return (
    <section className="relative py-16 overflow-hidden mx-auto">
      {/* Title Section */}
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[40px]">
            <>BY THE <GradientText>BIGGEST</GradientText> NAMES</>
          </h2>
          <p className="text-[20px]">Expertise recognised</p>
        </div>
      </div>
      
      {/* Scrolling Logos */}
      <div className="relative my-20">
        {/* Left gradient overlay */}
        <div 
          className="absolute left-0 top-0 w-64 h-full z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #211824 40%, transparent 100%)'
          }}
        />
        
        {/* Right gradient overlay */}
        <div 
          className="absolute right-0 top-0 w-64 h-full z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #211824 40%, transparent 100%)'
          }}
        />
        
        <div className="flex animate-infinite-scroll">
          {/* First set of logos */}
          <div className="flex items-center justify-center min-w-max">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="mx-8 flex items-center justify-center h-32 w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain mix-blend-lighten transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless infinite scroll */}
          <div className="flex items-center justify-center min-w-max">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-duplicate-${index}`}
                className="mx-8 flex items-center justify-center h-32 w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain mix-blend-lighten transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Third set for extra smoothness */}
          <div className="flex items-center justify-center min-w-max">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-triple-${index}`}
                className="mx-8 flex items-center justify-center h-32 w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain mix-blend-lighten transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}