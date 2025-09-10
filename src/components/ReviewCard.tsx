import Image from 'next/image'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  review: string
  avatar: string
  service: string
}

export function ReviewCard({
  name,
  location,
  rating,
  review,
  avatar,
  service,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Image
          src={avatar}
          alt={`${name} profile picture`}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold text-brand-navy">{name}</h4>
          <p className="text-sm text-brand-slate">{location}</p>
          <p className="text-xs text-brand-leaf font-medium">{service}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-brand-slate leading-relaxed italic">
        &ldquo;{review}&rdquo;
      </blockquote>
    </div>
  )
}
