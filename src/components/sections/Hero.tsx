'use client'

import { useEffect, useRef } from 'react'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

interface HeroProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title: string;
  subtitle?: string | React.ReactNode;
  description?: string;
  showScrollIndicator?: boolean;
}

const Hero = ({
  backgroundImage,
  backgroundVideo,
  title,
  subtitle,
  description,
  showScrollIndicator = true
}: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current

      // Ensure video is muted and has required attributes for iOS/Android
      video.muted = true
      video.defaultMuted = true
      video.volume = 0
      video.setAttribute('playsinline', 'true')
      video.setAttribute('webkit-playsinline', 'true')

      // Force play on mobile devices (Android & iOS)
      const playVideo = () => {
        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Video autoplay failed:', error)
            // Retry play after a short delay
            setTimeout(() => {
              video.play().catch(() => {
                // Silent fail on second attempt
              })
            }, 300)
          })
        }
      }

      // Try to play immediately
      playVideo()

      // Also try to play on user interaction for iOS
      const handleInteraction = () => {
        playVideo()
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('click', handleInteraction)
      }

      document.addEventListener('touchstart', handleInteraction, { once: true })
      document.addEventListener('click', handleInteraction, { once: true })

      return () => {
        document.removeEventListener('touchstart', handleInteraction)
        document.removeEventListener('click', handleInteraction)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {backgroundVideo && (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[black]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#211824] to-transparent"></div>

        </>
      )}

      {!backgroundVideo && backgroundImage && (
        <>
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[black]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#211824] to-transparent"></div>
        </>
      )}

      {!backgroundVideo && !backgroundImage && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start mt-20 sm:mt-32 lg:mt-62 ml-0 sm:ml-6 lg:ml-18 h-full">
          <div>
            <h1 className="font-semibold text-white mb-4 leading-none text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
              {title}
            </h1>

            {subtitle && (
              <h2 className="font-semibold max-w-5xl text-white mb-4 sm:mb-6 leading-tight text-xl sm:text-2xl lg:text-3xl xl:text-5xl">
                {subtitle}
              </h2>
            )}

            {description && (
              <p className="text-white leading-tight max-w-2xl text-sm sm:text-base lg:text-lg">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {showScrollIndicator && <ScrollIndicator />}
    </section>
  )
}

export default Hero