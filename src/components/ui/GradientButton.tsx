'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface GradientButtonProps {
  href: string
  text: string
  className?: string
}

const GradientButton = ({ href, text, className = "" }: GradientButtonProps) => {
  const [animationDelay, setAnimationDelay] = useState(0)
  
  useEffect(() => {
    setAnimationDelay(Math.random() * 12)
  }, [])

  return (
    <>
      <style jsx>{`
        .gradient-button {
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
      <div className={`gradient-button relative p-[1px] rounded-full ${className || 'w-[201px] h-[56px]'}`}>
        <Link href={href} className="w-full h-full px-8 py-4 rounded-full text-white bg-background transition-colors duration-300 relative z-10 flex items-center justify-center">
          {text}
        </Link>
      </div>
    </>
  )
}

export default GradientButton