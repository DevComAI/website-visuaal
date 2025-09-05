import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'

export const metadata: Metadata = {
  title: 'Hologrammes | Visuaal',
  description: 'Technologie holographique révolutionnaire pour des présentations spectaculaires. Projections 3D et effets visuels saisissants.',
  keywords: ['hologrammes', 'projection 3D', 'technologie holographique', 'effets visuels', 'présentation spectaculaire'],
}

const HoloPage = () => {

  return (
    <div className="min-h-screen">

      <Hero 
        backgroundImage="/img/humanbox/hero.png"
        title="HUMAN BOX"
        subtitle={<>An <GradientText>immersive cabin</GradientText> creating a <GradientText>3D holographic</GradientText> effect</>}
        showScrollIndicator={false}
      />



<TitlePage

title="WHAT IS hologram ?"
paragraphs={[
  "Holographic boxes offer a spectacular way to showcase your content in 3D, floating in space, no headset or glasses required. Available in three size, from compact units for counters and displays, to life-size formats for full-scale experiences, these devices instantly grab attention.",
  "Perfect for retail, events, or product launches, they combine cutting-edge technology with immersive storytelling.",
  "A futuristic — yet fully real — solution to leave a lasting impression."
]}
backgroundImage="HOLO.png"
/>

    </div>
  )
}

export default HoloPage