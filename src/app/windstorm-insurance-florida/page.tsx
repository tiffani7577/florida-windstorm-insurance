import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Florida Windstorm Insurance Guide 2026',
  description: 'Complete guide to Florida windstorm insurance in 2026: what it covers, how much it costs, which carriers offer it, and how to save with wind mitigation discounts.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/windstorm-insurance-florida' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/windstorm-insurance-florida',
    title: 'Florida Windstorm Insurance Guide 2026',
    description: 'Complete guide to Florida windstorm insurance in 2026: what it covers, how much it costs, which carriers offer it, and how to save with wind mitigation dis',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Windstorm Insurance Guide 2026',
    description: 'Complete guide to Florida windstorm insurance in 2026: what it covers, how much it costs, which carriers offer it, and how to save with wind mitigation dis',
  },
  
}

export default function WindstormGuidePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">

        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">Florida Windstorm Insurance Guide 2026</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida Windstorm Insurance:<br />What You Need to Know in 2026
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Updated for 2026 — including new carrier options, rate changes, and wind mitigation discount rules.
            </p>
            <CallButton variant="hero" label="Get a Free Windstorm Quote" />
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-blue max-w-none">
            <h2 className="font-serif text-2xl text-blue-900">What Does Florida Windstorm Insurance Cover?</h2>
            <p className="text-gray-700 leading-relaxed">
              Florida windstorm insurance covers physical damage to your home and personal property caused by wind, including hurricanes, tropical storms, tornadoes, and other high-wind events. Key covered perils include:
            </p>
            <ul className="space-y-2 my-4">
              {['Roof damage from wind', 'Wind-driven rain that enters through wind-created openings', 'Structural damage from hurricane-force winds', 'Damage from wind-thrown debris', 'Collapse caused by wind load'].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>What windstorm insurance does NOT cover:</strong> Flood damage (even from storm surge), general water damage not caused by wind, and damage from neglect or lack of maintenance.
            </p>

            <h2 className="font-serif text-2xl text-blue-900 mt-8">How Much Does Windstorm Insurance Cost in Florida?</h2>
            <p className="text-gray-700 leading-relaxed">
              The average cost of windstorm insurance in Florida ranges from <strong>$1,500 to $4,000/year</strong> depending on your location, home age, construction type, and coverage amount. Coastal properties in Miami-Dade, Broward, and Palm Beach counties pay the highest rates.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 my-6">
              <h3 className="font-semibold text-blue-900 mb-3">Average Windstorm Premiums by County (2026)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-blue-200"><th className="text-left py-2 text-blue-900">County</th><th className="text-right py-2 text-blue-900">Avg. Annual Premium</th></tr></thead>
                  <tbody>
                    {[['Miami-Dade', '$3,200–$5,500'], ['Broward', '$2,800–$4,800'], ['Palm Beach', '$2,600–$4,200'], ['Monroe (Keys)', '$4,500–$8,000+'], ['Hillsborough', '$1,400–$2,800'], ['Orange', '$1,200–$2,400']].map(([county, price]) => (
                      <tr key={county} className="border-b border-blue-100"><td className="py-2 text-gray-700">{county}</td><td className="py-2 text-right text-gray-700">{price}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mt-8">How to Lower Your Windstorm Premium</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Florida law requires insurers to offer discounts for wind-resistant construction features. A <strong>wind mitigation inspection</strong> (typically $150–$200) can qualify your home for discounts of 20–45%.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 my-4">
              {[['Hip roof (vs. gable)', 'Up to 30% discount'], ['Impact-resistant windows/doors', 'Up to 45% discount'], ['Roof deck attachment (clips/wraps)', 'Up to 15% discount'], ['Opening protection (shutters)', 'Up to 10% discount']].map(([feature, discount]) => (
                <div key={feature} className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <div className="font-semibold text-green-900 text-sm">{feature}</div>
                  <div className="text-green-700 text-xs mt-0.5">{discount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl mb-4">Get a Free Florida Windstorm Quote</h2>
            <p className="text-blue-200 mb-8">Get free information on Florida windstorm rates from multiple carriers. 2-minute call, no obligation.</p>
            <CallButton variant="hero" label="Call Now for a Free Quote" />
          </div>
        </section>

      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
