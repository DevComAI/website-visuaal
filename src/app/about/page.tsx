'use client'

import { useEffect } from 'react'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AboutContent from '@/components/sections/AboutContent'
import TitlePage from '@/components/ui/TitlePageSection'

// Fonction pour logger avec horodatage
const logDebug = (component: string, message: string, data?: unknown) => {
  const timestamp = new Date().toISOString().split('T')[1].slice(0, -1)
  console.log(`[${timestamp}] [About/${component}] ${message}`, data || '')
}

// Fonction pour surveiller la mémoire (si disponible)
const logMemory = () => {
  if ('memory' in performance) {
    const memory = (performance as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
    if (!memory) return
    logDebug('Memory', 'Usage', {
      usedJSHeapSize: `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      totalJSHeapSize: `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
    })
  }
}

const AboutPage = () => {
  useEffect(() => {
    logDebug('Page', '🟢 Montage de la page About')
    logMemory()

    // Surveiller les erreurs globales
    const handleError = (event: ErrorEvent) => {
      logDebug('Page', '❌ ERREUR GLOBALE détectée', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logDebug('Page', '❌ PROMISE REJECTION détectée', {
        reason: event.reason,
      })
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    // Log périodique de la mémoire
    const memoryInterval = setInterval(() => {
      logMemory()
    }, 5000) // Toutes les 5 secondes

    return () => {
      logDebug('Page', '🔴 Démontage de la page About')
      logMemory()
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      clearInterval(memoryInterval)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Spline Section */}
      <HeroSpline
        title={<>Our <GradientText>dedicated team</GradientText> of creatives is bursting with <GradientText>talent, experience</GradientText> and <GradientText>passion</GradientText> for what we do.</>}
        subtitle={<>Go behind the scenes of <GradientText>VISUAAL</GradientText></>}
        splineUrl="https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode"
        priority={true}
        placeholder="/img/about/about-preview.jpg"
      />

          <TitlePage

          title={<><GradientText>Who</GradientText> Who we are ?</>}

          paragraphs={[
            "In a world where digital engagement defines brand success,VISUAAL offers a complete suite ofhigh-impact solutions designed to captivate, connect, and convert. Based inDubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digitallandscape.",
            "VISUAAL It is the meeting of entrepreneurs from different backgroundswho bring their expertise in experience creation, advertising, and digitaltransformation to serve brands and publishers around immersive and innovative experiences.",
          ]}
          backgroundImage="aboutus.png"
          />

      <AboutContent />
      <div className="pb-8 sm:pb-16 md:pb-32 lg:pb-60"> </div>

    </div>
  )
}

export default AboutPage