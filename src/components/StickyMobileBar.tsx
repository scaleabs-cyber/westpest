'use client'

import { CTAButton } from './CTAButton'

export function StickyMobileBar() {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
        <CTAButton
          onClick={scrollToBooking}
          size="lg"
          className="w-full"
        >
          Book Free Estimate
        </CTAButton>
      </div>
    </div>
  )
}
