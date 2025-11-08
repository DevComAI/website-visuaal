'use client'

import { useState } from 'react'
import Image from 'next/image'
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image - Desktop only */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: "url('/img/contact/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30 hidden sm:block"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile Image - Above content */}
        <div className="block sm:hidden w-full mb-6 mt-20 overflow-hidden rounded-xl relative h-[300px]">
          <Image
            src="/img/contact/hero.png"
            alt="Contact"
            fill
            className="object-cover"
            style={{
              mixBlendMode: 'soft-light',
              transform: 'scale(2) translateY(20%)'
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:justify-between h-full -mt-9  md:mt-8 mb-8 sm:py-12 lg:py-0 gap-8 sm:gap-12 lg:gap-8">

         {/* Left side - Contact info */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-0 lg:mt-140  ml-0 lg:ml-8 ">
            <h1 className="font-semibold mb-6 sm:mb-8 lg:mb-12 leading-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
              <><GradientText>CONTACT US</GradientText> </>
            </h1>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-64">
              {/* Let's talk section */}
              <div className="text-center lg:text-left">
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium mb-3 sm:mb-4 lg:mb-8 text-white">
                  Let&apos;s talk
                </h3>
                <div className="space-y-1 sm:space-y-2 text-white">
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg">contact@visuaal.ai</p>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg">+971246719991</p>
                </div>
              </div>

              {/* Visit Us section */}
              <div className="text-center lg:text-left">
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-8 text-white">
                  Visit Us
                </h3>
                  <p className="text-xs sm:text-sm lg:text-base whitespace-pre-line text-white">
                    {`Blue Tower,
                    Block A&B Office number 110,
                    Sheikh Zayed Road, Dubai`}
                    </p>
                </div>

            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-0 lg:pt-20">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-2xl">
              <div className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 lg:p-12 rounded-lg border border-white/20">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-center lg:pb-20">
                  <GradientText>GET IN TOUCH</GradientText>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-12">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="* Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full py-2 sm:py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors text-sm lg:text-xl"
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
                      className="w-full py-2 sm:py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors text-sm lg:text-xl"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-2 sm:py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors text-sm lg:text-xl"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full py-2 sm:py-3 lg:py-4 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:border-white/70 focus:outline-none transition-colors resize-none text-sm lg:text-xl min-h-[100px] lg:min-h-[150px]"
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
                    <div className={`relative p-[1px] rounded-full w-[90px] sm:w-[100px] lg:w-[115px] h-[32px] sm:h-[35px] lg:h-[39px] ${
                      isSubmitting ? 'opacity-75' : ''
                    }`} style={{
                      background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
                      backgroundSize: '100% 100%'
                    }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-full px-3 sm:px-4 rounded-full text-white bg-[#211824] transition-colors duration-300 relative z-10 flex items-center justify-center hover:bg-[#372F39] disabled:hover:bg-[#211824] disabled:cursor-not-allowed text-xs sm:text-sm lg:text-base"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          'Send'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
               {/* Social media icons at bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-8 pt-3 sm:pt-4">
        <p className="text-white/60 text-xs lg:text-xl text-center">Follow us on the networks</p>

          <div className="flex items-center gap-2 sm:gap-4">
          <GradientLine width={"20px"} padding="py-0 pr-4" className='hidden md:block'/>
          <SocialIcons iconSize={40} spacing="space-x-1 sm:space-x-2" />
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