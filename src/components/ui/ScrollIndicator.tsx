'use client'

interface ScrollIndicatorProps {
  className?: string
  variant?: 'default' | 'large'
}

const ScrollIndicator = ({ className = '', variant = 'default' }: ScrollIndicatorProps) => {
  const isLarge = variant === 'large'

  return (
    <>
      <style jsx>{`
        .scroll-line-container {
          position: relative;
          width: 3px;
          height: ${isLarge ? '150px' : '100px'};
          border-radius: 2px;
          overflow: hidden;
        }

        .scroll-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: ${isLarge ? '60px' : '40px'};
          background: linear-gradient(
            to bottom,
            transparent,
            #4DA8D7,

                 #4DA8D7,
            transparent
          );
          animation: scrollDown 2.5s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-${isLarge ? '60px' : '40px'});
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(${isLarge ? '150px' : '100px'});
            opacity: 0;
          }
        }
      `}</style>

      <div className={`${variant === 'large' ? 'relative' : 'absolute bottom-10 left-1/2 transform -translate-x-1/2'} ${className}`}>
        <div className="scroll-line-container">
          <div className="scroll-line"></div>
        </div>
      </div>
    </>
  )
}

export default ScrollIndicator
