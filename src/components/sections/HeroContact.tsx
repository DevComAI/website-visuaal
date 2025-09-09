'use client'

import { useState } from 'react'
import GradientText from '@/components/ui/GradientText'
import SocialIcons from '@/components/ui/SocialIcons'
import GradientLine from '@/components/ui/GradientLine'

const HeroContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with blend mode */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/contact/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
   
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-center justify-between h-full">
        
        
        
        
        
        
        
         {/* Left side - Contact info */}
          <div className="w-1/2 mt-80 ml-20">
            <h1 className="font-semibold mb-12  leading-none text-[64px]">
              CONTACT US
            </h1>
            
            <div className="flex gap-64">
              {/* Let's talk section */}
              <div>
                <h3 className=" text-[24px] font-medium mb-8">
                  Let's talk
                </h3>
                <div className="space-y-2 text-[16px]">
                  <p className=" text-lg">contact@visuaal.ae</p>
                  <p className=" text-lg">+971246719991</p>
                </div>
              </div>
              
              {/* Visit Us section */}
              <div>
                <h3 className=" text-[24px] font-semibold mb-8">
                  Visit Us
                </h3>
                  <p className="text-[16px] whitespace-pre-line">
                    {`Blue Tower,
                    Block A&B Office number 110,
                    Sheikh Zayed Road, Dubai`}
                    </p>
                </div>
         
            </div>
          </div>
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          {/* Right side - Contact form */}
          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-md">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20">
                <h2 className="text-2xl font-semibold mb-6">
                  <GradientText>GET IN TOUCH</GradientText>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="* Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="* E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full  py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full  py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <div className="relative p-[1px] rounded-full w-[115px] h-[39px]" style={{
                      background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
                      backgroundSize: '100% 100%'
                    }}>
                      <button
                        type="submit"
                        className="w-full h-full px-4 rounded-full text-white bg-[#211824] transition-colors duration-300 relative z-10 flex items-center justify-center hover:bg-[#372F39] text-[16px]"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
               {/* Social media icons at bottom */}
      <div className="flex flex-row items-center justify-center gap-4">
        <p className="text-white/60 text-sm">Follow us on the networks</p>
  
        <div className='flex flex-row'>      
          <GradientLine width={"100%"} padding="pb-4" />
          <SocialIcons iconSize={40} spacing="space-x-3" />
          </div>
        
      </div>
            </div>
            
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default HeroContact