import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Florida Windstorm Insurance | Coverage & Quotes',
  description: 'Florida windstorm insurance explained: hurricane deductibles, wind mitigation discounts, Citizens coverage gaps, and how to get the lowest rates in 2026. Call for a free quote.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com',
    title: 'Florida Windstorm Insurance | Coverage & Quotes',
    description: 'Florida windstorm insurance explained: hurricane deductibles, wind mitigation discounts, Citizens coverage gaps, and how to get the lowest rates in 2026. C',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Windstorm Insurance | Coverage & Quotes',
    description: 'Florida windstorm insurance explained: hurricane deductibles, wind mitigation discounts, Citizens coverage gaps, and how to get the lowest rates in 2026. C',
  },
  alternates: { canonical: 'https://www.floridawindstorminsurance.com' },
}

const pages = [
  { href: '/windstorm-insurance-florida', title: 'Florida Windstorm Insurance Guide 2026', desc: 'Complete overview of windstorm coverage, costs, and carriers in Florida.' },
  { href: '/hurricane-deductible-florida', title: 'Hurricane Deductibles Explained', desc: 'What your hurricane deductible actually means and how to lower it.' },
  { href: '/wind-mitigation-florida', title: 'Wind Mitigation Discounts Florida', desc: 'How a wind mitigation inspection can cut your premium by up to 45%.' },
  { href: '/citizens-insurance-windstorm', title: 'Citizens Insurance Windstorm Coverage', desc: "What Citizens covers, what it doesn't, and when to switch to private." },
  { href: '/windstorm-vs-homeowners-florida', title: 'Windstorm vs. Homeowners Insurance', desc: 'Key differences and why you likely need both policies.' },
  { href: '/coastal-florida-windstorm-insurance', title: 'Coastal Florida Windstorm Insurance', desc: 'Special considerations for homes in Broward, Miami-Dade, and Palm Beach.' },
  { href: '/fr-44-insurance-florida', title: 'FR-44 Insurance Florida | Instant Filing', desc: 'Need an FR-44 to reinstate your Florida license? Get filed today.' },
  { href: '/sr-22-insurance-florida', title: 'SR-22 Insurance Florida | 2026 Rates', desc: 'Cheapest SR-22 filings in Florida. Rates dropped 8% in 2026.' },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">

        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Free Florida Windstorm Insurance Information
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Florida Windstorm Insurance:<br />
              <span className="text-orange-400">Get Covered Before the Next Storm</span>
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Windstorm damage is the #1 cause of insurance claims in Florida. Most homeowners don&apos;t know their policy has gaps until it&apos;s too late. Get the right coverage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <CallButton variant="hero" label="Call for Free Information" />
              <a href="/get-a-quote" className="text-blue-200 hover:text-white font-medium underline underline-offset-4 text-sm">
                
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              {['Free Information', 'No Obligation', '2026 Rates Available', '2-Minute Call'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ALERT BANNER */}
        <section className="bg-amber-50 border-y border-amber-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <p className="text-amber-800 text-sm font-medium">
              <strong>2026 Florida Insurance Alert:</strong> 16 new carriers entered the Florida market in early 2026, creating new options and lower rates. Many homeowners are overpaying — call to compare your current policy.
            </p>
          </div>
        </section>

        {/* WHAT IS WINDSTORM */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 mb-4">What Is Florida Windstorm Insurance?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Standard homeowners insurance in Florida often <strong>excludes or severely limits windstorm damage</strong> — the most common cause of catastrophic home loss in the state. Windstorm insurance fills that gap, covering damage from hurricanes, tropical storms, and high-wind events.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              In coastal counties, windstorm coverage is typically required by mortgage lenders and is purchased separately from your standard homeowners policy. Citizens Property Insurance is the state-backed insurer of last resort, but private market options have expanded significantly in 2026.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Hurricane Damage', desc: 'Wind-driven rain, roof damage, structural loss from named storms' },
                { title: 'Tropical Storm Damage', desc: 'Coverage extends to tropical storms and high-wind events below hurricane strength' },
                { title: 'Wind Mitigation Discounts', desc: 'Qualifying home features can reduce your windstorm premium by 20–45%' },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUIDES */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 mb-2">Florida Windstorm Insurance Guides</h2>
            <p className="text-gray-600 mb-8">Everything Florida homeowners need to know about windstorm and specialty coverage.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pages.map((page) => (
                <a key={page.href} href={page.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 mb-1.5">{page.title}</h3>
                  <p className="text-gray-500 text-sm">{page.desc}</p>
                  <span className="text-orange-500 text-sm font-medium mt-2 inline-block">Read more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-14 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl mb-4">Ready to Get the Right Windstorm Coverage?</h2>
            <p className="text-blue-200 mb-8">Get free information on Florida windstorm coverage. No obligation, no pressure.</p>
            <CallButton variant="hero" label="Call Now for a Free Quote" />
          </div>
        </section>

      </main>
      <Footer />
      <CallButton variant="sticky" />
      <ExitIntent />
    </>
  )
}
