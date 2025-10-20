'use client'

import { useState, useEffect } from 'react'

interface ScrollProgressBarProps {
  className?: string
}

const ScrollProgressBar = ({ className = '' }: ScrollProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate scroll percentage
      const totalScroll = documentHeight - windowHeight
      const progress = (scrollTop / totalScroll) * 100

      setScrollProgress(Math.min(progress, 100))
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    // Initial calculation
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        .scroll-progress-container {
          position: fixed;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 60vh;
          background: rgba(77, 168, 215, 0.2);
          border-radius: 2px;
          z-index: 50;
        }

        .scroll-progress-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: ${scrollProgress}%;
          background: linear-gradient(
            to bottom,
            transparent,
            #4DA8D7,
            #4DA8D7,
            transparent
          );
          border-radius: 2px;
          transition: height 0.1s ease-out;
        }

        @media (max-width: 768px) {
          .scroll-progress-container {
            right: 20px;
            height: 50vh;
          }
        }
      `}</style>

      <div className={`scroll-progress-container ${className}`}>
        <div className="scroll-progress-fill"></div>
      </div>
    </>
  )
}

export default ScrollProgressBar
