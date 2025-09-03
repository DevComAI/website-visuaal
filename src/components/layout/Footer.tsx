import Link from 'next/link'
import Image from 'next/image'
import GradientLine from '@/components/ui/GradientLine'

const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden" style={{backgroundColor: '#140F16'}}>
      {/* Spline Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <spline-viewer 
          url="https://prod.spline.design/2pGj4e2pJIQVw8CK/scene.splinecode"
          className="w-full h-full opacity-30"
        ></spline-viewer>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-20 relative">
          <div 
            className="bg-cover bg-center bg-no-repeat pt-16 px-8 "
       
          >
            <h2 className="font-chillax text-4xl font-medium mb-4">
              <span 
                className="inline-block"
                style={{
                  backgroundImage: "url('/img/background-text.jpg')",
                  backgroundSize: 'cover',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundPosition: 'center',

                }}
              >
                JOIN OUR NEWSLETTER
           
              </span>
            </h2>
            <div className="max-w-md  mx-auto">
              <div className="relative  p-1 rounded-lg" style={{
                background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
                backgroundSize: '400% 400%',
                animation: 'gradient 3s ease infinite'
              }}>
                <input
                  type="email"
                  placeholder="e-mail"
                  className="w-full px-6 h-[37px] rounded-lg text-white placeholder-gray-300 font-chillax text-lg focus:outline-none"
                  style={{backgroundColor: '#140F16'}}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pb-20">
          {/* Logo Column */}
          <div className="text-center">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo/logo-full.svg"
                alt="Visuaal Logo"
                width={314}
                height={268}
                className="max-w-full h-auto mx-auto"
              />
            </Link>
          </div>

          {/* Menu Column */}
          <div className="text-center">
            <h3 className="font-chillax text-2xl font-medium leading-none mb-[48px]">Menu</h3>
            <ul className="space-y-[48px]">
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
          <div className="text-center">
            <h3 className="font-chillax text-2xl font-medium leading-none mb-[48px]">Legal Pages</h3>
            <ul className="space-y-[48px]">
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
          <div className="text-center">
            <h3 className="font-chillax text-2xl leading-none mb-[48px]">Contact</h3>
            <div className="space-y-[48px] font-chillax text-base font-normal leading-none text-gray-300">
              <p>contact@visual.ae</p>
              <p>+0123456789</p>
              <p className="leading-6">Blue Tower,  <br />
                Block A&B Office number 110,<br />
              Sheikh Zayed Road, Dubaï</p>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="text-center pt-20">
            <h3 className="font-chillax text-2xl leading-none mb-4">Follow us on the networks</h3>
            <div className="flex space-x-3 justify-center">
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Image src="/icons/facebook.png" alt="Facebook" width={40} height={40} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="X (Twitter)">
                <Image src="/icons/x.png" alt="X" width={40} height={40} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Image src="/icons/instagram.png" alt="Instagram" width={40} height={40} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                <Image src="/icons/youtube.png" alt="YouTube" width={40} height={40} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <GradientLine width={1522} padding="pb-4" />
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