'use client'

import { cn } from '@/lib/utils'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-brand-accent hover:bg-brand-navy text-white focus:ring-brand-accent shadow-lg hover:shadow-xl',
    secondary: 'bg-brand-leaf hover:bg-brand-navy text-white focus:ring-brand-leaf shadow-lg hover:shadow-xl',
    outline: 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white focus:ring-brand-accent',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}
