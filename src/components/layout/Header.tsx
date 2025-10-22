'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import GradientButton from '@/components/ui/GradientButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Prefetch toutes les routes principales après le chargement
  useEffect(() => {
    const prefetchTimer = setTimeout(() => {
      // Prefetch toutes les routes principales
      router.prefetch('/about')
      router.prefetch('/studio')
      router.prefetch('/contact')
      router.prefetch('/products/dooh')
      router.prefetch('/products/holo')
      router.prefetch('/products/screen')
    }, 3000) // 3 secondes après le chargement initial

    return () => clearTimeout(prefetchTimer)
  }, [router])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products/dooh',
      subMenu: [
        { name: 'DOOH', href: '/products/dooh' },
        { name: 'SCREEN LED', href: '/products/screen' },
        { name: 'HUMAN BOX', href: '/products/holo' },
      ]
    },
    { name: 'Experience', href: '/studio' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        background: `radial-gradient(circle, rgba(33, 24, 36, 0.9) 0%, rgba(20, 15, 22, 0.9) 100%)`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          <Link href="/" className="block">
            <Image
              src="/logo/logo-v.svg"
              alt="Visuaal Logo"
              width={40}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.subMenu && item.subMenu.some(sub => pathname === sub.href) && item.href !== '/products')
              return (
                <div key={item.name} className="relative group">
                  {item.subMenu ? (
                    <span
                      className={`hover:text-gray-300 transition-colors duration-200 flex items-center relative cursor-pointer ${
                        isActive ? 'text-white font-semibold' : 'text-white'
                      }`}
                    >
                      {item.name}
                      {item.subMenu && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`hover:text-gray-300 transition-colors duration-200 flex items-center relative ${
                        isActive ? 'text-white font-semibold' : 'text-white'
                      }`}
                    >
                      {item.name}
                      {item.subMenu && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </Link>
                  )}
                  
                  {item.subMenu && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      style={{
                        background: `radial-gradient(circle, rgba(33, 24, 36, 0.95) 0%, rgba(20, 15, 22, 0.95) 100%)`
                      }}
                    >
                      <div className="py-2">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-white hover:text-gray-300 hover:bg-white/10 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <GradientButton href="/contact" text="Contact" className="w-[140px] h-[39px] text-[16px]" />
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 block text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <div className="ml-4 mt-3 space-y-3">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-300 hover:text-white transition-colors text-base block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 flex justify-center">
                <div onClick={() => setIsMenuOpen(false)}>
                  <GradientButton href="/contact" text="Contact" className="w-[140px] h-[39px] text-[16px]" />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header