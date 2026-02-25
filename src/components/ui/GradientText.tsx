'use client'

import { useState } from 'react'

interface GradientTextProps {
  children: string;
  className?: string;
}

const GradientText = ({ children, className = "" }: GradientTextProps) => {
  const [animationDelay] = useState(() => Math.random() * 12)
  
  return (
    <>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(
            45deg, 
            #473FB9, 
            #4DA8D7, 
            #9512B6, 
            #473FB9, 
            #158BBD, 
            #C82EF0
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 12s ease-in-out infinite;
          animation-delay: ${animationDelay}s;
        }
        
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
      <span 
        className={`gradient-text ${className}`}
      >
        {children}
      </span>
    </>
  );
};

export default GradientText;