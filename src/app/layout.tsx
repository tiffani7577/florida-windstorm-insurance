import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  verification: { google: 'L-L7hsgywPWztgBZ6wmvHWraCXaAnw1rSZcCQvmuc0Y' },
  metadataBase: new URL('https://www.floridawindstorminsurance.com'),
  title: {
    default: 'Florida Windstorm Insurance | Coverage, Costs & Quotes',
    template: '%s | Florida Windstorm Insurance',
  },
  description: 'Florida homeowners: understand windstorm insurance, hurricane deductibles, wind mitigation discounts, and Citizens Insurance windstorm coverage. Get fre...',
  keywords: ['Florida windstorm insurance', 'wind insurance Florida', 'hurricane deductible Florida', 'wind mitigation Florida', 'Citizens Insurance windstorm', 'coastal Florida insurance'],
  authors: [{ name: 'Florida Windstorm Insurance' }],
  creator: 'Florida Windstorm Insurance',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.floridawindstorminsurance.com',
    siteName: 'Florida Windstorm Insurance',
    title: 'Florida Windstorm Insurance | Coverage, Costs & Quotes',
    description: 'Real answers for Florida homeowners on windstorm coverage, hurricane deductibles, and wind mitigation savings.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Florida Windstorm Insurance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Windstorm Insurance | Coverage, Costs & Quotes',
    description: 'Real answers for Florida homeowners on windstorm coverage, hurricane deductibles, and wind mitigation savings.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#FAFAF7]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"InsuranceAgency","name":"Florida Windstorm Insurance","description":"Instant Florida FR-44 and SR-22 insurance filings. Windstorm and hurricane coverage quotes. Get your license reinstated today with 2026's lowest rates.","url":"https://www.floridawindstorminsurance.com","telephone":"+14356121009","address":{"@type":"PostalAddress","addressLocality":"Fort Lauderdale","addressRegion":"FL","addressCountry":"US"},"areaServed":"Florida","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"21:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"12:00","closes":"17:00"}],"contactPoint":{"@type":"ContactPoint","telephone":"+14356121009","contactType":"sales","areaServed":"US","availableLanguage":"en"}})}} />
        {children}
      </body>
    </html>
  )
}
