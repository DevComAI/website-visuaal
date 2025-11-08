import { Metadata } from 'next'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AboutContent from '@/components/sections/AboutContent'
import TitlePage from '@/components/ui/TitlePageSection'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us - Our Team & Vision',
  description: 'Meet the VISUAAL team of creative experts passionate about immersive experiences and digital transformation. Based in Dubai, Paris, and Shenzhen.',
  keywords: ['about visuaal', 'digital signage experts', 'creative team', 'immersive experiences', 'digital transformation'],
  openGraph: {
    title: 'About Us - Our Team & Vision | Visuaal',
    description: 'Meet the VISUAAL team of creative experts passionate about immersive experiences and digital transformation.',
    images: [
      {
        url: '/img/about/about-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'VISUAAL Team - Digital Signage Experts',
      },
    ],
  },
}

const AboutPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.ai' },
        { name: 'About', url: 'https://visuaal.ai/about' }
      ])
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Image Section */}
      <HeroSpline
        title={<>Our <GradientText>dedicated team</GradientText> of creatives is bursting with <GradientText>talent, experience</GradientText> and <GradientText>passion</GradientText> for what we do.</>}
        subtitle={<>Go behind the scenes of <GradientText>VISUAAL</GradientText></>}
        image="/temp-opti-img/about-1.png"
        priority={true}
        mobileImage="/heromobileabout.png"
        alt="VISUAAL team workspace"
      />

      <TitlePage
        title={<><GradientText>Who</GradientText> we are</>}
        paragraphs={[
          "In a world where digital engagement defines brand success, VISUAAL offers a complete suite of high-impact solutions designed to captivate, connect, and convert. Based in Dubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digital landscape.",
          "VISUAAL is the meeting of entrepreneurs from different backgrounds who bring their expertise in experience creation, advertising, and digital transformation to serve brands and publishers around immersive and innovative experiences.",
        ]}
        backgroundImage="aboutus.png"
      />

      <AboutContent />
      <div className="pb-8 sm:pb-16 md:pb-32 lg:pb-60"> </div>

    </div>
  )
}

export default AboutPage