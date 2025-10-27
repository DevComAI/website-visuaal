import Link from 'next/link'
import Image from 'next/image'
import GradientLine from '@/components/ui/GradientLine'
import SocialIcons from '@/components/ui/SocialIcons'
import GradientText from '@/components/ui/GradientText'
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import Newsletter from '@/components/ui/Newsletter'

const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden" style={{backgroundColor: '#140F16'}}>
      {/* Spline Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <OptimizedSplineViewer
          scene="https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode"
          className="w-full h-full opacity-30"
          priority={false}
          loadingDelay={800}
          placeholderVariant="skeleton"
          interactive={false}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-12 lg:mb-20 relative">
          <div
            className="bg-cover bg-center bg-no-repeat pt-8 lg:pt-16 px-4 lg:px-8 "

          >
            <h2 className="font-chillax text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 lg:mb-4">
            <><GradientText>JOIN OUR NEWSLETTER</GradientText> </>
            </h2>
            <div className="max-w-md mx-auto">
              <Newsletter
                placeholder="e-mail"
                buttonText="Subscribe"
                className="max-w-none"
                footerStyle={true}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 lg:pb-20">
          {/* Logo Column */}
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/logo/logo-full.svg"
                alt="Visuaal - Digital Signage Solutions - Full Logo"
                width={314}
                height={268}
                className="max-w-[200px] lg:max-w-full h-auto mx-auto"
              />
            </Link>
          </div>

          {/* Menu Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-chillax text-xl lg:text-2xl font-medium leading-none mb-6 lg:mb-[48px]">Menu</h3>
            <ul className="space-y-4 lg:space-y-[48px]">
              <li>
                <Link href="/" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-chillax text-xl lg:text-2xl font-medium leading-none mb-6 lg:mb-[48px]">Legal Pages</h3>
            <ul className="space-y-4 lg:space-y-[48px]">
              <li>
                <Link href="/legal/cgv" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/legal/mentions-legales" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/legal/politique-confidentialite" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/conditions-utilisation" className="font-chillax text-base font-normal leading-none text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-chillax text-xl lg:text-2xl leading-none mb-6 lg:mb-[48px]">Contact</h3>
            <div className="space-y-4 lg:space-y-[48px] font-chillax text-base font-normal leading-none text-gray-300">
              <p><a href="mailto:contact@visuaal.ai" className="hover:text-white transition-colors">contact@visuaal.ai</a></p>
              <p><a href="tel:+971501234567" className="hover:text-white transition-colors">+971 50 123 4567</a></p>
              <p className="leading-6">Blue Tower,  <br />
                Block A&B Office number 110,<br />
              Sheikh Zayed Road, Dubai, UAE</p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="text-center sm:text-left pt-8 lg:pt-20">
            <h3 className="font-chillax text-xl lg:text-2xl leading-none mb-4 lg:mb-4">Follow us</h3>
            <SocialIcons iconSize={40} spacing="space-x-3" />
          </div>
        </div>

        <div className="mt-12">
          <GradientLine width={"80%"} padding="pb-4" />
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Visuaal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer