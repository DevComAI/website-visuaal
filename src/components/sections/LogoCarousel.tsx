'use client'

import Image from 'next/image'
import GradientText from '@/components/ui/GradientText'

const PARTNER_LOGOS = [
  { name: 'Client 1', src: '/clients/logo0.svg', alt: 'Client Logo' },
  { name: 'Client 2', src: '/clients/logo1.svg', alt: 'Client Logo' },
  { name: 'Client 3', src: '/clients/logo2.svg', alt: 'Client Logo' },
  { name: 'Client 12', src: '/clients/logo24.svg', alt: 'Client Logo' },
  { name: 'Client 12', src: '/clients/logo25.svg', alt: 'Client Logo' },
  { name: 'Client 4', src: '/clients/logo3.svg', alt: 'Client Logo' },
  { name: 'Client 5', src: '/clients/logo4.svg', alt: 'Client Logo' },
  { name: 'Client 6', src: '/clients/logo5.svg', alt: 'Client Logo' },
  { name: 'Client 7', src: '/clients/logo6.svg', alt: 'Client Logo' },
  { name: 'Client 8', src: '/clients/logo7.svg', alt: 'Client Logo' },
  { name: 'Client 9', src: '/clients/logo8.svg', alt: 'Client Logo' },
  { name: 'Client 10', src: '/clients/logo9.svg', alt: 'Client Logo' },
  { name: 'Client 11', src: '/clients/logo10.svg', alt: 'Client Logo' },
  { name: 'Client 12', src: '/clients/logo11.svg', alt: 'Client Logo' },


] as const

export default function LogoCarousel() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden mx-auto">
      {/* Title Section */}
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-white">
            <>BY THE <GradientText>BIGGEST</GradientText> NAMES</>
          </h2>
          <p className="text-base sm:text-lg lg:text-[20px] text-white/80">Expertise recognised</p>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="relative my-8 sm:my-12 lg:my-20">
        <style jsx>{`
          @keyframes infinite-scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes infinite-scroll-desktop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-infinite-scroll-mobile {
            animation: infinite-scroll-mobile 15s linear infinite;
          }

          .animate-infinite-scroll-desktop {
            animation: infinite-scroll-desktop 40s linear infinite;
          }
        `}</style>
        <div className="flex animate-infinite-scroll-mobile sm:animate-infinite-scroll-desktop">
          {/* First set of logos */}
          <div className="flex items-center justify-center min-w-max">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="mx-3 sm:mx-4 lg:mx-8 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 lg:h-32 lg:w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={256}
                  height={128}
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
                className="mx-3 sm:mx-4 lg:mx-8 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 lg:h-32 lg:w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={256}
                  height={128}
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
                className="mx-3 sm:mx-4 lg:mx-8 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 lg:h-32 lg:w-64 grayscale hover:grayscale-0 transition-all duration-500 ease-out"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={256}
                  height={128}
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