import ImageCarousel from '@/components/ui/ImageCarousel'

interface SupportCarouselProps {
  images?: string[]
  autoPlay?: boolean
  interval?: number
}

const SupportCarousel = ({ 
  images = [
    '/img/home/support-1.png',
    '/img/home/support-2.png',
    '/img/home/support-3.png',
    '/img/home/support-4.png'
  ],
  autoPlay = true,
  interval = 4000
}: SupportCarouselProps) => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <ImageCarousel
          images={images}
          autoPlay={autoPlay}
          interval={interval}
        />
      </div>
    </div>
  )
}

export default SupportCarousel