'use client'

import { useState } from 'react'

interface NewsletterProps {
  className?: string
  placeholder?: string
  buttonText?: string
  inputClassName?: string
  footerStyle?: boolean
}

export default function Newsletter({
  className = '',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe', // eslint-disable-line @typescript-eslint/no-unused-vars
  inputClassName = '',
  footerStyle = false
}: NewsletterProps) {
  const [email, setEmail] = useState('')
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
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! You\'ve been successfully subscribed to our newsletter.'
        })
        setEmail('')
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to subscribe. Please try again.'
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

  return (
    <div className={`w-full max-w-md ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {footerStyle ? (
          <div className="relative p-1 rounded-lg" style={{
            background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
            backgroundSize: '400% 400%',
            animation: 'gradient 3s ease infinite'
          }}>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className={`w-full px-4 lg:px-6 h-[37px] pr-12 rounded-lg text-white placeholder-gray-300 font-chillax text-base lg:text-lg focus:outline-none ${inputClassName}`}
                style={{backgroundColor: '#140F16'}}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-gradient-to-r from-[#473FB9] via-[#4DA8D7] to-[#9512B6] text-white rounded hover:from-[#3730A3] hover:via-[#0891B2] hover:to-[#7C2D92] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className={`w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:border-white/50 focus:outline-none transition-colors ${inputClassName}`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-[#473FB9] via-[#4DA8D7] to-[#9512B6] text-white rounded-md hover:from-[#3730A3] hover:via-[#0891B2] hover:to-[#7C2D92] transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-3 rounded-lg text-center text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : 'bg-red-500/20 border border-red-500/30 text-red-300'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}