import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'West Pest | Pest Control, Landscaping & Wildlife Services in New Jersey',
  description: 'Safe, effective pest control, landscaping, wildlife abatement, home inspections, and commercial services across New Jersey. Book a free estimate today.',
  keywords: 'pest control New Jersey, landscaping NJ, wildlife removal, home inspections, commercial services, termite control, ant control, rodent control',
  authors: [{ name: 'West Pest' }],
  creator: 'West Pest',
  publisher: 'West Pest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://westpestinc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'West Pest | Pest Control, Landscaping & Wildlife Services in New Jersey',
    description: 'Safe, effective pest control, landscaping, wildlife abatement, home inspections, and commercial services across New Jersey. Book a free estimate today.',
    url: 'https://westpestinc.com',
    siteName: 'West Pest',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'West Pest - New Jersey Pest Control & Landscaping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'West Pest | Pest Control, Landscaping & Wildlife Services in New Jersey',
    description: 'Safe, effective pest control, landscaping, wildlife abatement, home inspections, and commercial services across New Jersey. Book a free estimate today.',
    images: ['/og_default_1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'West Pest',
  description: 'Professional pest control, landscaping, wildlife abatement, and home inspection services across New Jersey.',
  url: 'https://westpestinc.com',
  telephone: '(555) 555-5555',
  email: 'info@westpestinc.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Jersey',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'State',
    name: 'New Jersey',
  },
  serviceType: [
    'Pest Control',
    'Landscaping',
    'Wildlife Abatement',
    'Home Inspections',
    'Gutter Cleaning',
    'Power Washing',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '(555) 555-5555',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://westpestinc.com/og_default_1200x630.png',
    width: 1200,
    height: 630,
  },
  dateModified: new Date().toISOString(),
  sameAs: [
    'https://www.facebook.com/westpestinc',
    'https://www.instagram.com/westpestinc',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}