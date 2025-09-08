'use client'

import GradientText from '@/components/ui/GradientText'

const PARTNER_LOGOS = [
  { name: 'Partner 1', src: '/logo/caroussel/image 3.svg', alt: 'Partner Logo' },
  { name: 'Partner 2', src: '/logo/caroussel/image 3-1.svg', alt: 'Partner Logo' },
  { name: 'Partner 3', src: '/logo/caroussel/image 4.svg', alt: 'Partner Logo' },
  { name: 'Partner 4', src: '/logo/caroussel/image 5.svg', alt: 'Partner Logo' },
  { name: 'Partner 5', src: '/logo/caroussel/image 6.svg', alt: 'Partner Logo' },
  { name: 'Partner 6', src: '/logo/caroussel/image 7.svg', alt: 'Partner Logo' },
  { name: 'Partner 7', src: '/logo/caroussel/image 8.svg', alt: 'Partner Logo' },
  { name: 'Partner 8', src: '/logo/caroussel/image 9.svg', alt: 'Partner Logo' },
  { name: 'Partner 9', src: '/logo/caroussel/image 10.svg', alt: 'Partner Logo' },
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
                className="mx-8 flex items-center justify-center h-32 w-64 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain mix-blend-lighten"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless infinite scroll */}
          <div className="flex items-center justify-center min-w-max">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-duplicate-${index}`}
                className="mx-8 flex items-center justify-center h-32 w-64 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain mix-blend-lighten"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}