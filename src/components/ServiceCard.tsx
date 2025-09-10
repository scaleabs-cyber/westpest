'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CTAButton } from './CTAButton'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  icon: React.ReactNode
  href?: string
}

export function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  features,
  icon,
  href = '#services',
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-navy mb-3">{title}</h3>
        <p className="text-brand-slate mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-brand-slate">
              <div className="w-1.5 h-1.5 bg-brand-leaf rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <CTAButton
          variant="outline"
          size="sm"
          href={href}
          className="w-full group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </CTAButton>
      </div>
    </div>
  )
}
