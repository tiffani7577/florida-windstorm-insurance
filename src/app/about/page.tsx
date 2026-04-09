import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Florida Windstorm Insurance | Licensed Florida Insurance Resource',
  description: 'Florida Windstorm Insurance is a free educational resource and quote platform run by a licensed Florida insurance agent. Serving all 67 Florida counties.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/about' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/about',
    title: 'About Florida Windstorm Insurance',
    description: 'Licensed Florida insurance resource helping homeowners navigate windstorm, hurricane, and Citizens Insurance coverage.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Florida Windstorm Insurance',
  url: 'https://www.floridawindstorminsurance.com/about',
  description: 'Florida Windstorm Insurance is a free educational resource and licensed insurance referral platform serving all 67 Florida counties.',
  publisher: {
    '@type': 'InsuranceAgency',
    name: 'Florida Windstorm Insurance',
    url: 'https://www.floridawindstorminsurance.com',
    telephone: '+14356121009',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: 'Florida',
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="text-teal-300 text-xs mb-4 flex items-center gap-1.5">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>›</span>
              <span className="text-teal-200">About</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
              About Florida Windstorm Insurance
            </h1>
            <p className="mt-4 text-teal-200 text-lg">
              A free, licensed resource for Florida homeowners navigating one of the most complex insurance markets in the country.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose max-w-none">

            <h2 className="font-serif text-2xl text-teal-800 mt-0">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Florida Windstorm Insurance is a free educational resource and licensed insurance referral platform built specifically for Florida homeowners. We are operated by a licensed Florida insurance agent serving all 67 Florida counties. Our goal is simple: give Florida homeowners clear, honest answers about windstorm coverage, hurricane deductibles, Citizens Insurance, and wind mitigation — without the jargon and without the sales pressure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Florida&apos;s property insurance market is unlike any other state. Carriers have been leaving, rates have tripled, and homeowners are confused about what their policies actually cover. We built this site to cut through that confusion.
            </p>

            <h2 className="font-serif text-2xl text-teal-800">What We Do</h2>
            <p className="text-gray-700 leading-relaxed">
              We publish in-depth, regularly updated guides on windstorm insurance, hurricane deductibles, Citizens Insurance alternatives, wind mitigation inspections, and Florida-specific coverage questions. Every article is written or reviewed by a licensed Florida insurance professional and updated to reflect current 2026 market conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you request a quote through our site, we connect you with licensed Florida insurance agents who can compare rates from multiple carriers. We do not sell insurance directly — we match you with the right licensed professional for your situation. There is no obligation and no fee to you.
            </p>

            <h2 className="font-serif text-2xl text-teal-800">Our Credentials</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 my-6">
              <ul className="space-y-2 text-gray-700 text-sm list-none pl-0">
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Licensed Florida Insurance Agent</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Serving all 67 Florida counties</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Specializing in windstorm, hurricane, and homeowners coverage</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Available Monday–Friday 9am–9pm, Saturday 12pm–5pm</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Fort Lauderdale, FL based — serving statewide</li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-teal-800">Why Florida Windstorm Coverage Is Different</h2>
            <p className="text-gray-700 leading-relaxed">
              Most Florida homeowners are surprised to learn that their standard homeowners insurance policy handles windstorm damage differently than other perils. In many coastal counties, windstorm coverage is either excluded from standard policies or comes with a separate, percentage-based deductible that can be significantly higher than the standard deductible. Understanding this distinction — and knowing how to minimize your exposure — is exactly what this site is designed to help with.
            </p>

            <h2 className="font-serif text-2xl text-teal-800">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Have a question about your windstorm coverage, Citizens Insurance, or your hurricane deductible? Call us at <a href="tel:+14356121009" className="text-teal-700 font-semibold hover:underline">(435) 612-1009</a> or <a href="/get-a-quote" className="text-teal-700 font-semibold hover:underline">request a free quote online</a>. We are available Monday through Friday 9am–9pm and Saturday 12pm–5pm.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
