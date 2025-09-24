'use client'

import { usePathname } from 'next/navigation'
import DecorativeElements from './DecorativeElements'

export default function ConditionalDecorativeElements() {
  const pathname = usePathname()

  // Don't show DecorativeElements on contact page
  if (pathname === '/contact') {
    return null
  }

  return <DecorativeElements />
}