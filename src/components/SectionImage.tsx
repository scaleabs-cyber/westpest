import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SectionImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function SectionImage({
  src,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: SectionImageProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes={sizes}
      />
    </div>
  )
}
