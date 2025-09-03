import Link from 'next/link'

interface GradientButtonProps {
  href: string
  text: string
  className?: string
}

const GradientButton = ({ href, text, className = "" }: GradientButtonProps) => {
  return (
    <div className={`relative p-[1px] rounded-full ${className || 'w-[201px] h-[56px]'}`} style={{
      background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
      backgroundSize: '100% 100%'
    }}>
      <Link href={href} className="w-full h-full px-8 py-4 rounded-full text-white  transition-colors duration-300 relative z-10 flex items-center justify-center" style={{backgroundColor: '#2D2436'}}>
        {text}
      </Link>
    </div>
  )
}

export default GradientButton