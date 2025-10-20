'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

interface TimelineItem {
  title: string
  description: string
  image: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineElement = timelineRef.current
      const rect = timelineElement.getBoundingClientRect()
      const timelineTop = rect.top + window.scrollY
      const timelineHeight = rect.height
      const windowHeight = window.innerHeight
      const scrollTop = window.scrollY

      // Calculate when timeline starts to be visible
      const scrollStart = timelineTop - windowHeight
      const scrollEnd = timelineTop + timelineHeight

      // Calculate progress
      const progress = ((scrollTop - scrollStart) / (scrollEnd - scrollStart)) * 100
      setScrollProgress(Math.max(0, Math.min(progress, 100)))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            filter: blur(2px);
          }
          50% {
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(77, 168, 215, 0.3),
                        0 0 20px rgba(77, 168, 215, 0.2),
                        0 0 30px rgba(77, 168, 215, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(77, 168, 215, 0.5),
                        0 0 40px rgba(77, 168, 215, 0.3),
                        0 0 60px rgba(77, 168, 215, 0.2);
          }
        }

        .progress-line {
          animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite;
        }

        .progress-orb {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <section className="py-20 text-white">
        <div className="container mx-auto px-4">
          <div ref={timelineRef} className="relative pt-20 pb-20">
            {/* Timeline line background */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-[#363986] transform -translate-x-1/2"></div>

            {/* Timeline line progress with gradient and effects */}
            <div
              className="progress-line absolute left-1/2 top-0 w-[5px] transform -translate-x-1/2 transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress}%`,
                background: 'linear-gradient(to bottom, transparent, rgba(77, 168, 215, 0.3), #4DA8D7, #4DA8D7, rgba(77, 168, 215, 0.5), transparent)',
              }}
            ></div>


          
          <div className="-space-y-32">
            {items.map((item, index) => (
              <div key={index} className="relative flex justify-center">
                {/* Content Container */}
                <div className={`flex w-full max-w-[1600px] ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <div className="text-left">
                      <div className="relative">
                        <h3 className="text-[24px] font-bold mb-4">
                          {item.title}
                        </h3>
                        
                        {/* Timeline center elements at title level */}
                        <div className={`absolute top-2 flex flex-col items-center z-10 ${
                          index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                        }`}>
                          <div className="w-24 h-[5px] bg-[#363986]"></div>
                        </div>
                      </div>
                      
                      <p className="text-[20px] text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Image */}
                      <AnimatedBorder className="inline-block" borderRadius="0.5rem">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={337}
                          className="w-[600px] h-[337px] object-cover rounded-lg"
                        />
                      </AnimatedBorder>
                    </div>
                  </div>
                  
                  {/* Empty space for alternate side */}
                  <div className="flex-1 max-w-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Timeline