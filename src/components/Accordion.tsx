'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 rounded-lg"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-brand-navy pr-4">{question}</h3>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-brand-slate transition-transform duration-200 flex-shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-6">
          <p className="text-brand-slate leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    question: string
    answer: string
  }>
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn('bg-white rounded-2xl shadow-lg', className)}>
      <div className="p-6 lg:p-8">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  )
}
