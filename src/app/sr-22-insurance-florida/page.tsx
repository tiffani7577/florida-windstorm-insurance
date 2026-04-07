import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'SR-22 Insurance Florida | 2026 Cheapest Rates',
  description: 'Florida auto rates dropped by 8% in 2026. Find the cheapest SR-22 filing and get back on the road today. No-obligation phone quotes in 2 minutes.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/sr-22-insurance-florida' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/sr-22-insurance-florida',
    title: 'SR-22 Insurance Florida | 2026 Cheapest Rates',
    description: 'Florida auto rates dropped by 8% in 2026. Find the cheapest SR-22 filing and get back on the road today. No-obligation phone quotes in 2 minutes.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR-22 Insurance Florida | 2026 Cheapest Rates',
    description: 'Florida auto rates dropped by 8% in 2026. Find the cheapest SR-22 filing and get back on the road today. No-obligation phone quotes in 2 minutes.',
  },
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/sr-22-insurance-florida' },
}

export default function SR22Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">

        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Florida Rates Dropped 8% in 2026
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Cheapest SR-22 Insurance Florida<br />
              <span className="text-orange-400">2026 Rate Reductions Available Now</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Florida auto insurance rates dropped an average of 8% in 2026 due to legislative reforms. Find the cheapest SR-22 filing and get back on the road today.
            </p>
            <CallButton variant="hero" label="Get a 2-Minute SR-22 Quote" />
            <p className="text-blue-300 text-sm mt-4">No obligation · Mon–Fri 9am–9pm EST</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 mb-4">What Is SR-22 Insurance in Florida?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An <strong>SR-22 is a certificate of financial responsibility</strong> required by the Florida DHSMV after certain driving violations. It&apos;s not a type of insurance — it&apos;s a form your insurer files with the state proving you have the minimum required coverage.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Important:</strong> Florida uses <strong>FR-44</strong> (not SR-22) for DUI-related violations. SR-22 is used for other offenses like driving without insurance, reckless driving, or accumulating too many points on your license.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'SR-22 Required For', items: ['Driving without insurance', 'Reckless driving conviction', 'Too many license points', 'At-fault accident without insurance', 'License suspension reinstatement'] },
                { title: 'SR-22 Requirements', items: ['Florida minimum liability coverage', '$10,000 PIP (Personal Injury Protection)', '$10,000 PDL (Property Damage Liability)', 'Must be maintained for 3 years', 'Filed by your insurer with DHSMV'] },
              ].map(col => (
                <div key={col.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-3">{col.title}</h3>
                  <ul className="space-y-1.5">
                    {col.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">How Much Does SR-22 Cost in Florida?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The SR-22 filing fee itself is typically $15–$35. The bigger cost is the <strong>higher insurance premium</strong> required to maintain it. In Florida, SR-22 drivers typically pay $800–$1,800/year depending on their violation history.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Thanks to Florida&apos;s 2024 tort reform legislation, rates have dropped an average of 8% in 2026. If you&apos;ve been paying SR-22 rates for more than a year, you may be able to find significantly cheaper coverage now.
            </p>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Get the Cheapest SR-22 Rate Available</h3>
              <p className="text-blue-200 mb-6">Our agents compare multiple carriers to find you the lowest SR-22 rate in Florida. 2-minute phone quote, no obligation.</p>
              <CallButton variant="hero" label="Call Now for Your SR-22 Quote" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
