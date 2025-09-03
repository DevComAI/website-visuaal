import ImageCarousel from '@/components/ui/ImageCarousel'

const SupportCarousel = () => {
  const supportImages = [
    '/img/home/support-1.png',
    '/img/home/support-2.png',
    '/img/home/support-3.png',
    '/img/home/support-4.png'
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <ImageCarousel
          images={supportImages}
          autoPlay={true}
          interval={4000}
        />
      </div>
    </div>
  )
}

export default SupportCarousel