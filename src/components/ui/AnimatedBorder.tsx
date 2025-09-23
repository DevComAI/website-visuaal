'use client'

import { useState, useEffect, ReactNode } from 'react'

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: string;
  borderRadius?: string;
}

const AnimatedBorder = ({
  children,
  className = "",
  borderWidth = "3px",
  borderRadius = "0.5rem"
}: AnimatedBorderProps) => {
  const [animationDelay, setAnimationDelay] = useState(0)

  useEffect(() => {
    setAnimationDelay(Math.random() * 12)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <style jsx>{`
        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
      `}</style>
      <div style={{
        padding: borderWidth,
        borderRadius: borderRadius,
        background: `linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6, #473FB9, #158BBD, #C82EF0)`,
        backgroundSize: '400% 400%',
        animation: `gradientFlow 12s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        height: '100%'
      }}>
        <div style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth})`,
          overflow: 'hidden',
          height: '100%',
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorder;