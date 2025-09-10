'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CTAButton } from './CTAButton'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your address'),
  zipCode: z.string().min(5, 'Please enter a valid ZIP code'),
  serviceType: z.string().min(1, 'Please select a service type'),
  pestIssue: z.string().optional(),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
})

type FormData = z.infer<typeof formSchema>

interface FormTabsProps {
  className?: string
}

export function FormTabs({ className }: FormTabsProps) {
  const [activeTab, setActiveTab] = useState<'estimate' | 'inspection'>('estimate')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/lead', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })
      
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn('bg-white rounded-2xl shadow-lg p-8 text-center', className)}>
        <div className="w-16 h-16 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h3>
        <p className="text-brand-slate mb-6">
          We&apos;ve received your request and will contact you within 24 hours to schedule your free estimate.
        </p>
        <CTAButton
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Submit Another Request
        </CTAButton>
      </div>
    )
  }

  return (
    <div className={cn('bg-white rounded-2xl shadow-lg overflow-hidden', className)}>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('estimate')}
          className={cn(
            'flex-1 py-4 px-6 text-center font-semibold transition-colors duration-200',
            activeTab === 'estimate'
              ? 'bg-brand-accent text-white'
              : 'bg-gray-50 text-brand-slate hover:bg-gray-100'
          )}
        >
          Book Free Estimate
        </button>
        <button
          onClick={() => setActiveTab('inspection')}
          className={cn(
            'flex-1 py-4 px-6 text-center font-semibold transition-colors duration-200',
            activeTab === 'inspection'
              ? 'bg-brand-accent text-white'
              : 'bg-gray-50 text-brand-slate hover:bg-gray-100'
          )}
        >
          Schedule Inspection
        </button>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
              Phone Number *
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* ZIP Code */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-brand-navy mb-2">
              ZIP Code *
            </label>
            <input
              {...register('zipCode')}
              type="text"
              id="zipCode"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="07001"
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-brand-navy mb-2">
              Property Address *
            </label>
            <input
              {...register('address')}
              type="text"
              id="address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="123 Main Street, City, NJ"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          {/* Service Type */}
          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-brand-navy mb-2">
              Service Type *
            </label>
            <select
              {...register('serviceType')}
              id="serviceType"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select a service</option>
              <option value="pest-control">Pest Control</option>
              <option value="landscaping">Landscaping</option>
              <option value="wildlife-abatement">Wildlife Abatement</option>
              <option value="home-inspection">Home Inspection</option>
              <option value="commercial">Commercial Services</option>
            </select>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-navy mb-2">
              Preferred Time *
            </label>
            <select
              {...register('preferredTime')}
              id="preferredTime"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
              <option value="weekend">Weekend</option>
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
            )}
          </div>

          {/* Pest Issue (conditional) */}
          <div className="md:col-span-2">
            <label htmlFor="pestIssue" className="block text-sm font-medium text-brand-navy mb-2">
              Specific Pest/Issue (if applicable)
            </label>
            <input
              {...register('pestIssue')}
              type="text"
              id="pestIssue"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200"
              placeholder="e.g., ants in kitchen, termite damage, wildlife in attic"
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label htmlFor="notes" className="block text-sm font-medium text-brand-navy mb-2">
              Additional Notes
            </label>
            <textarea
              {...register('notes')}
              id="notes"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-200 resize-none"
              placeholder="Any additional information about your property or concerns..."
            />
          </div>

          {/* Consent */}
          <div className="md:col-span-2">
            <label className="flex items-start space-x-3">
              <input
                {...register('consent')}
                type="checkbox"
                className="mt-1 w-4 h-4 text-brand-accent border-gray-300 rounded focus:ring-brand-accent"
              />
              <span className="text-sm text-brand-slate">
                I agree to be contacted by West Pest regarding my service request. *
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <CTAButton
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </CTAButton>
        </div>
      </form>
    </div>
  )
}
