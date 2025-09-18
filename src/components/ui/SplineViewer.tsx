'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

interface SplineViewerProps {
  scene: string
  className?: string
  style?: React.CSSProperties
  interactive?: boolean
}

export default function SplineViewer({ scene, className, style, interactive = false }: SplineViewerProps) {
  const [isInteractive, setIsInteractive] = useState(interactive)

  useEffect(() => {
    if (!interactive) return

    let scrollTimeout: NodeJS.Timeout
    let wheelTimeout: NodeJS.Timeout

    const disableInteractions = () => {
      setIsInteractive(false)
    }

    const enableInteractions = () => {
      clearTimeout(scrollTimeout)
      clearTimeout(wheelTimeout)
      scrollTimeout = setTimeout(() => {
        setIsInteractive(true)
      }, 100)
    }

    const handleScroll = () => {
      disableInteractions()
      enableInteractions()
    }

    const handleWheel = () => {
      disableInteractions()
      clearTimeout(wheelTimeout)
      wheelTimeout = setTimeout(() => {
        setIsInteractive(true)
      }, 50)
    }

    const handleTouchStart = () => {
      disableInteractions()
    }

    const handleTouchEnd = () => {
      enableInteractions()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(scrollTimeout)
      clearTimeout(wheelTimeout)
    }
  }, [interactive])

  return (
    <div data-spline-container className="w-full h-full">
      <Spline
        scene={scene}
        className={className}
        style={{
          ...style,
          pointerEvents: isInteractive ? 'auto' : 'none',
          transition: 'all 0.1s ease'
        }}
      />
    </div>
  )
}