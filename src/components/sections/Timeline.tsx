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
  const [activeBars, setActiveBars] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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

      // Check which horizontal bars should be active
      const newActiveBars: number[] = []
      itemRefs.current.forEach((itemRef, index) => {
        if (itemRef) {
          const itemRect = itemRef.getBoundingClientRect()
          const itemTop = itemRect.top + window.scrollY
          const itemProgress = ((scrollTop - scrollStart) / (scrollEnd - scrollStart)) * 100
          const itemPositionInTimeline = ((itemTop - timelineTop) / timelineHeight) * 100

          // If scroll progress has reached this item's position
          if (itemProgress >= itemPositionInTimeline) {
            newActiveBars.push(index)
          }
        }
      })
      setActiveBars(newActiveBars)
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

        @keyframes expandBarLeft {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes expandBarRight {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        .progress-line {
          animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite;
        }

        .progress-orb {
          animation: glow 2s ease-in-out infinite;
        }

        .horizontal-bar-active-left {
          animation: expandBarLeft 0.6s ease-out forwards, pulse 3s ease-in-out infinite 0.6s, glow 2s ease-in-out infinite 0.6s;
          transform-origin: right;
        }

        .horizontal-bar-active-right {
          animation: expandBarRight 0.6s ease-out forwards, pulse 3s ease-in-out infinite 0.6s, glow 2s ease-in-out infinite 0.6s;
          transform-origin: left;
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
                background: 'linear-gradient(to bottom, transparent, rgba(77, 168, 215, 0.3), #363986, #363986, rgba(77, 168, 215, 0.5), transparent)',
              }}
            ></div>


          
          <div className="-space-y-32">
            {items.map((item, index) => (
              <div key={index} ref={el => { itemRefs.current[index] = el }} className="relative flex justify-center">
                {/* Content Container */}
                <div className={`flex w-full max-w-[1600px] ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <div className="text-left">
                      <div className="relative">
                        <h3 className="text-white text-[24px] font-bold mb-4">
                          {item.title}
                        </h3>

                        {/* Timeline center elements at title level */}
                        <div className={`absolute top-2 flex flex-col items-center z-10 ${
                          index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                        }`}>
                          <div className="relative">
                            <div className="w-24 h-[5px] bg-[#363986]"></div>
                            {activeBars.includes(index) && (
                              <div
                                className={`absolute top-0 left-0 w-24 h-[5px] bg-[#363986] ${
                                  index % 2 === 0 ? 'horizontal-bar-active-left' : 'horizontal-bar-active-right'
                                }`}
                              ></div>
                            )}
                          </div>
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