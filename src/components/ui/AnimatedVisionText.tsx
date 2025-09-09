'use client'

import { useState, useEffect } from 'react'
import GradientText from '@/components/ui/GradientText'

const AnimatedVisionText = () => {
  const visionTexts = [
    <>Your <GradientText>Vision</GradientText></>,
    <>Your <GradientText>Mastery</GradientText></>,
    <>Your <GradientText>Signature</GradientText>.</>
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % visionTexts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="transition-opacity duration-300">
      {visionTexts[currentIndex]}
    </div>
  )
}

export default AnimatedVisionText