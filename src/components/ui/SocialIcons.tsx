import Link from 'next/link'
import Image from 'next/image'

interface SocialIconsProps {
  className?: string
  iconSize?: number
  spacing?: string
  color?: 'default' | 'white'
}

const SocialIcons = ({ 
  className = "", 
  iconSize = 40, 
  spacing = "space-x-3",
  color = 'default'
}: SocialIconsProps) => {
  const socialLinks = [
    {
      href: "#",
      icon: "/icons/facebook.png",
      alt: "Facebook",
      label: "Facebook"
    },
    {
      href: "#",
      icon: "/icons/x.png",
      alt: "X",
      label: "X (Twitter)"
    },
    {
      href: "#",
      icon: "/icons/instagram.png",
      alt: "Instagram",
      label: "Instagram"
    },
    {
      href: "#",
      icon: "/icons/youtube.png",
      alt: "YouTube",
      label: "YouTube"
    }
  ]

  return (
    <div className={`flex ${spacing} justify-center ${className}`}>
      {socialLinks.map((social, index) => (
        <Link 
          key={index}
          href={social.href} 
          className="hover:opacity-80 transition-opacity" 
          aria-label={social.label}
        >
          <Image 
            src={social.icon} 
            alt={social.alt} 
            width={iconSize} 
            height={iconSize}
            className={color === 'white' ? 'filter brightness-0 invert' : ''}
          />
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons