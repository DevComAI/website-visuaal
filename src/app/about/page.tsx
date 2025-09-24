import { Metadata } from 'next'
import HeroSpline from '@/components/sections/HeroSpline'
import GradientText from '@/components/ui/GradientText'
import AboutContent from '@/components/sections/AboutContent'
import TitlePage from '@/components/ui/TitlePageSection'

export const metadata: Metadata = {
  title: 'À Propos de Visuaal',
  description: 'Découvrez l&apos;histoire de Visuaal, notre équipe passionnée et notre vision de l&apos;innovation technologique dans le domaine visuel.',
  keywords: ['à propos', 'équipe', 'histoire', 'mission', 'vision', 'valeurs'],
}

const AboutPage = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Spline Section */}
      <HeroSpline
        title={<>Our <GradientText>dedicated team</GradientText> of creatives is bursting with <GradientText>talent, experience</GradientText> and <GradientText>passion</GradientText> for what we do.</>}
        subtitle={<>Go behind the scenes of <GradientText>VISUAAL</GradientText></>}
        splineUrl="https://prod.spline.design/X07icIhhYxWFwhO1/scene.splinecode"
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