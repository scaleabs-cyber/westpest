/*
 * West Pest Landing Page
 * 
 * CUSTOMIZATION GUIDE:
 * 
 * 1. CONTACT INFORMATION:
 *    - Update phone number: Search for "(555) 555-5555" and replace
 *    - Update email: Search for "info@westpestinc.com" and replace
 *    - Update business address in JSON-LD schema
 * 
 * 2. IMAGES & MEDIA:
 *    - Replace /public/logo.png with your actual logo
 *    - Replace hero image: /public/hero_exterior-home_pest-control_1920x1080.webp
 *    - Replace service images in /public/ directory
 *    - Update Open Graph image: /public/og_default_1200x630.png
 * 
 * 3. FORM INTEGRATION:
 *    - Uncomment and configure fetch('/api/lead') in FormTabs.tsx
 *    - Connect to your email service (SendGrid, Mailgun, etc.)
 *    - Or integrate with CRM (HubSpot, Salesforce, GoHighLevel)
 * 
 * 4. DEPLOYMENT:
 *    - Run: npm run build
 *    - Deploy to Vercel, Netlify, or your preferred platform
 *    - Update domain in metadata and JSON-LD schema
 * 
 * 5. CONTENT UPDATES:
 *    - Update service areas list with actual NJ cities
 *    - Replace placeholder reviews with real testimonials
 *    - Update team information in About section
 *    - Customize FAQ section with your specific services
 */

'use client'

import Image from 'next/image'
import { 
  Bug, 
  TreePine, 
  Shield, 
  Home, 
  Building2, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  Users,
  Award,
  Leaf
} from 'lucide-react'
import { Header } from '@/components/Header'
import { CTAButton } from '@/components/CTAButton'
import { ServiceCard } from '@/components/ServiceCard'
import { Accordion } from '@/components/Accordion'
import { ReviewCard } from '@/components/ReviewCard'
import { FormTabs } from '@/components/FormTabs'
import { StickyMobileBar } from '@/components/StickyMobileBar'
import { SectionImage } from '@/components/SectionImage'

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const residentialServices = [
    {
      title: 'Pest Control',
      description: 'Comprehensive pest management for ants, roaches, spiders, rodents, termites, and bed bugs.',
      image: '/service_pest-control_1200x800.png',
      imageAlt: 'Ant and termite prevention for NJ homes',
      features: ['Ant & roach elimination', 'Termite inspection & treatment', 'Rodent control & exclusion', 'Bed bug treatment'],
      icon: <Bug className="w-6 h-6 text-brand-leaf" />,
    },
    {
      title: 'Landscaping',
      description: 'Seasonal yard care, mulch installation, and landscape design to enhance your property.',
      image: '/service_landscaping_1200x800.png',
      imageAlt: 'Seasonal landscaping and yard care in New Jersey',
      features: ['Seasonal maintenance', 'Mulch & rock features', 'Tree & shrub care', 'Lawn fertilization'],
      icon: <TreePine className="w-6 h-6 text-brand-leaf" />,
    },
    {
      title: 'Wildlife Abatement',
      description: 'Humane wildlife removal and exclusion services for raccoons, squirrels, and other nuisance animals.',
      image: '/service_wildlife_1200x800.png',
      imageAlt: 'Humane wildlife removal and exclusion',
      features: ['Humane removal', 'Exclusion barriers', 'Damage repair', 'Prevention strategies'],
      icon: <Shield className="w-6 h-6 text-brand-leaf" />,
    },
    {
      title: 'Home Inspections',
      description: 'Licensed WDI and termite inspections for home buyers and sellers.',
      image: '/service_home-inspections_1200x800.png',
      imageAlt: 'Licensed home and wood-destroying insect inspections',
      features: ['WDI inspections', 'Termite reports', 'Pre-sale inspections', 'Annual maintenance checks'],
      icon: <Home className="w-6 h-6 text-brand-leaf" />,
    },
  ]

  const faqItems = [
    {
      question: 'What pests do you treat?',
      answer: 'We treat all common New Jersey pests including ants, roaches, spiders, rodents, termites, bed bugs, wasps, and more. Our comprehensive approach targets both the immediate problem and prevents future infestations.',
    },
    {
      question: 'How quickly can you schedule service?',
      answer: 'We typically schedule same-day or next-day service for urgent pest problems. For routine maintenance and landscaping, we can usually accommodate your preferred schedule within 2-3 business days.',
    },
    {
      question: 'Are your treatments safe for pets and children?',
      answer: 'Yes, we use EPA-approved, family and pet-safe treatments. We also offer eco-friendly options and will discuss all safety precautions before beginning any service.',
    },
    {
      question: 'Do you offer warranties on your services?',
      answer: 'We provide warranties on most services. Pest control treatments come with a 30-90 day warranty depending on the service. We also offer maintenance plans with ongoing protection.',
    },
    {
      question: 'What areas of New Jersey do you serve?',
      answer: 'We provide services throughout New Jersey, including North Jersey (Bergen, Passaic, Essex counties), Central Jersey (Middlesex, Monmouth, Mercer counties), and South Jersey (Camden, Burlington, Gloucester counties).',
    },
    {
      question: 'How do I prepare for a pest control visit?',
      answer: 'We&apos;ll provide specific preparation instructions based on your service type. Generally, you&apos;ll need to clear access to treatment areas, secure pets, and remove food items from countertops.',
    },
  ]

  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Montclair, NJ',
      rating: 5,
      review: 'West Pest eliminated our ant problem completely. The technician was professional, explained everything clearly, and the treatment was safe for our kids and pets.',
      avatar: '/review_avatar_1.png',
      service: 'Pest Control',
    },
    {
      name: 'Mike Rodriguez',
      location: 'Edison, NJ',
      rating: 5,
      review: 'Excellent landscaping service! They transformed our backyard and the seasonal maintenance keeps everything looking great year-round.',
      avatar: '/review_avatar_2.png',
      service: 'Landscaping',
    },
    {
      name: 'Jennifer Chen',
      location: 'Cherry Hill, NJ',
      rating: 5,
      review: 'Quick response to our wildlife issue. They humanely removed the raccoons and sealed all entry points. No problems since!',
      avatar: '/review_avatar_3.png',
      service: 'Wildlife Abatement',
    },
  ]

  const serviceAreas = [
    'Bergen County', 'Passaic County', 'Essex County', 'Hudson County',
    'Middlesex County', 'Monmouth County', 'Mercer County', 'Somerset County',
    'Camden County', 'Burlington County', 'Gloucester County', 'Atlantic County'
  ]

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Utility Top Bar */}
      <div className="bg-brand-navy text-white py-2 text-center text-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          Questions? Call{' '}
          <a href="tel:5555555555" className="text-brand-accent hover:underline">
            (555) 555-5555
          </a>
        </div>
      </div>
      
      <Header />

      <main id="main-content" className="pt-24">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_exterior-home_pest-control_1920x1080.png"
              alt="Technician performing eco-friendly pest control at a New Jersey home"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-brand-navy/60" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              New Jersey Pest Control & Landscaping
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Safe, effective treatments for homes & businesses — expert service across New Jersey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton
                onClick={() => scrollToSection('#booking')}
                size="lg"
                className="text-lg px-8 py-4"
              >
                Book Free Estimate
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href="tel:5555555555"
                className="text-lg px-8 py-4"
              >
                Call Now
              </CTAButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-brand-accent" />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-brand-accent" />
                New Jersey Service
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-brand-accent" />
                Eco-conscious Options
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                How It Works
              </h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">
                Our proven 3-step process ensures effective, long-lasting results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Inspect</h3>
                <p className="text-brand-slate">
                  Thorough property assessment to identify pest issues, entry points, and treatment areas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Treat/Service</h3>
                <p className="text-brand-slate">
                  Professional application of safe, effective treatments tailored to your specific needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Monitor & Follow-up</h3>
                <p className="text-brand-slate">
                  Ongoing monitoring and follow-up visits to ensure long-term protection and satisfaction.
                </p>
              </div>
        </div>
            
            <div className="text-center mt-12">
              <CTAButton
                onClick={() => scrollToSection('#booking')}
                variant="outline"
                size="lg"
              >
                Get Started Today
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Residential Services */}
        <section id="services" className="py-16 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Residential Services
              </h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">
                Comprehensive solutions for your home and property
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {residentialServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  features={service.features}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section id="commercial" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Commercial Services
                </h2>
                <p className="text-xl text-brand-slate mb-8">
                  Professional pest control and maintenance services for businesses, restaurants, and commercial properties.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Building2 className="w-6 h-6 text-brand-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Pest Control Programs</h3>
                      <p className="text-brand-slate">Preventative maintenance plans tailored to your business needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-brand-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Safety Inspections</h3>
                      <p className="text-brand-slate">Regular inspections to maintain health and safety standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TreePine className="w-6 h-6 text-brand-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Gutter Cleaning</h3>
                      <p className="text-brand-slate">Professional gutter cleaning and maintenance services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="w-6 h-6 text-brand-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Power Washing</h3>
                      <p className="text-brand-slate">Exterior cleaning and maintenance for professional appearance</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <CTAButton
                    onClick={() => scrollToSection('#booking')}
                    size="lg"
                  >
                    Get Commercial Quote
                  </CTAButton>
                </div>
              </div>
              
              <div className="relative">
                <SectionImage
                  src="/CommercialPest.png"
                  alt="Commercial pest control service"
                  className="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Guarantees */}
        <section className="py-16 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Why Choose West Pest?
              </h2>
              <p className="text-xl text-brand-slate max-w-2xl mx-auto">
                Your trusted partner for all pest control and property maintenance needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Family & Pet Safe</h3>
                <p className="text-brand-slate">
                  EPA-approved treatments that are safe for your family and pets
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Licensed & Insured</h3>
                <p className="text-brand-slate">
                  Fully licensed professionals with comprehensive insurance coverage
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Scheduled Maintenance</h3>
                <p className="text-brand-slate">
                  Regular maintenance plans to prevent problems before they start
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">Responsive Support</h3>
                <p className="text-brand-slate">
                  Quick response times and ongoing customer support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                What Our Customers Say
              </h2>
                <p className="text-xl text-brand-slate max-w-2xl mx-auto">
                  Don&apos;t just take our word for it — hear from satisfied customers across New Jersey
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  name={review.name}
                  location={review.location}
                  rating={review.rating}
                  review={review.review}
                  avatar={review.avatar}
                  service={review.service}
                />
              ))}
            </div>
            
            <div className="bg-brand-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">
                Why Customers Choose Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">Local New Jersey expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">Eco-friendly treatment options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">Flexible scheduling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">Transparent pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">Satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-brand-leaf mr-3 flex-shrink-0" />
                  <span className="text-brand-slate">24/7 emergency service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section id="service-areas" className="py-16 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  Serving All of New Jersey
                </h2>
                <p className="text-xl text-brand-slate mb-8">
                  We provide comprehensive pest control, landscaping, and property maintenance services throughout New Jersey. From the Delaware River to the Atlantic Ocean, we&apos;re your local experts.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0" />
                      <span className="text-brand-slate">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-brand-navy mb-3">Coverage Areas Include:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-brand-slate">
                    <div>
                      <strong>North Jersey:</strong><br />
                      Montclair, Clifton, Paterson, Newark
                    </div>
                    <div>
                      <strong>Central Jersey:</strong><br />
                      Edison, New Brunswick, Princeton, Freehold
                    </div>
                    <div>
                      <strong>South Jersey:</strong><br />
                      Cherry Hill, Camden, Vineland, Atlantic City
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <SectionImage
                  src="/map_new-jersey.png"
                  alt="Map of New Jersey with service coverage"
                  className="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <SectionImage
                  src="/aboutpest.png"
                  alt="About West Pest - Local New Jersey pest control company"
                  className="aspect-[4/3]"
                />
              </div>
              
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">
                  About West Pest
                </h2>
                <p className="text-lg text-brand-slate mb-6">
                  We&apos;re a locally-owned and operated pest control and landscaping company serving New Jersey communities for over a decade. Our team of licensed professionals is committed to providing safe, effective, and eco-conscious solutions for your property.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Leaf className="w-6 h-6 text-brand-leaf mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Eco-Conscious Practices</h3>
                      <p className="text-brand-slate">We prioritize environmentally friendly treatments and sustainable landscaping practices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-brand-leaf mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Local Team</h3>
                      <p className="text-brand-slate">Our technicians live and work in New Jersey, understanding local pest patterns and seasonal challenges.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-brand-leaf mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-navy mb-2">Proven Results</h3>
                      <p className="text-brand-slate">Thousands of satisfied customers across New Jersey trust us with their pest control and landscaping needs.</p>
                    </div>
                  </div>
                </div>
                
                <CTAButton
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                >
                  Learn More About Us
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-brand-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-brand-slate">
                Get answers to common questions about our services
              </p>
            </div>
            
            <Accordion items={faqItems} />
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                Book Your Free Estimate
              </h2>
              <p className="text-xl text-brand-slate">
                Ready to get started? Fill out the form below and we&apos;ll contact you within 24 hours.
              </p>
            </div>
            
            <FormTabs />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
          <Image
                  src="/logo.png"
                  alt="West Pest Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
                <span className="text-xl font-bold">West Pest</span>
              </div>
              <p className="text-gray-300 mb-4">
                Professional pest control, landscaping, and property maintenance services across New Jersey.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-brand-accent" />
                  <a href="tel:5555555555" className="hover:text-brand-accent transition-colors">
                    (555) 555-5555
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-brand-accent" />
                  <a href="mailto:info@westpestinc.com" className="hover:text-brand-accent transition-colors">
                    info@westpestinc.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Pest Control</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Landscaping</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Wildlife Abatement</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Home Inspections</a></li>
                <li><a href="#commercial" className="hover:text-brand-accent transition-colors">Commercial Services</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>North Jersey</li>
                <li>Central Jersey</li>
                <li>South Jersey</li>
                <li>All NJ Counties</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-brand-accent transition-colors">About Us</a></li>
                <li><a href="#reviews" className="hover:text-brand-accent transition-colors">Reviews</a></li>
                <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
                <li><a href="#booking" className="hover:text-brand-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 West Pest. All rights reserved. Licensed & Insured in New Jersey.</p>
          </div>
        </div>
      </footer>

      <StickyMobileBar />
    </div>
  )
}
