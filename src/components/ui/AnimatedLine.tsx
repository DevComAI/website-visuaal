'use client'

interface AnimatedLineProps {
  className?: string
  orientation?: 'vertical' | 'horizontal'
  size?: number // Size in pixels (height for vertical, width for horizontal)
  thickness?: number // Thickness in pixels (width for vertical, height for horizontal)
}

const AnimatedLine = ({
  className = '',
  orientation = 'vertical',
  size = 100,
  thickness = 3
}: AnimatedLineProps) => {
  const isVertical = orientation === 'vertical'
  const lineSize = Math.floor(size * 0.4) // Animated line is 40% of container size

  return (
    <>
      <style jsx>{`
        .animated-line-container {
          position: relative;
          ${isVertical ? `
            width: ${thickness}px;
            height: ${size}px;
          ` : `
            width: ${size}px;
            height: ${thickness}px;
          `}
          border-radius: 2px;
          overflow: hidden;
        }

        .animated-line {
          position: absolute;
          ${isVertical ? `
            top: 0;
            left: 0;
            width: 100%;
            height: ${lineSize}px;
          ` : `
            top: 0;
            left: 0;
            width: ${lineSize}px;
            height: 100%;
          `}
          background: linear-gradient(
            ${isVertical ? 'to bottom' : 'to right'},
            transparent,
            #4DA8D7,
            #4DA8D7,
            transparent
          );
          animation: ${isVertical ? 'scrollDown' : 'scrollRight'} 2.5s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-${lineSize}px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(${size}px);
            opacity: 0;
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-${lineSize}px);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(${size}px);
            opacity: 0;
          }
        }
      `}</style>

      <div className={className}>
        <div className="animated-line-container">
          <div className="animated-line"></div>
        </div>
      </div>
    </>
  )
}

export default AnimatedLine
