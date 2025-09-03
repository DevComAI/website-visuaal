interface HeroProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  title: string;
  subtitle?: string;
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
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}></div>
        </>
      )}
      
      {!backgroundVideo && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-start mt-62 ml-18 h-full">
          <div>
            <h1 className="font-semibold text-white mb-4 leading-none" style={{fontSize: '96px'}}>
              {title}
            </h1>
            
            {subtitle && (
              <h2 className="font-semibold max-w-5xl text-white mb-6 leading-tight" style={{fontSize: '48px'}}>
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className="text-white leading-tight max-w-2xl" style={{fontSize: '18px'}}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero