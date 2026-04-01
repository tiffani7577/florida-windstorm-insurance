import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Coastal Florida Windstorm Insurance | Broward, Miami-Dade, Palm Beach',
  description: 'Windstorm insurance for coastal Florida homes in Broward County, Miami-Dade, and Palm Beach. Compare rates and find coverage when private carriers won\'t insure.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/coastal-florida-windstorm-insurance' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">Coastal Florida Windstorm Insurance</h1>
            <p className="text-blue-100 text-lg mb-8">Broward, Miami-Dade, and Palm Beach homeowners face the highest windstorm rates in Florida — and the most coverage gaps. Here&apos;s how to get properly covered.</p>
            <CallButton variant="hero" label="Get a Coastal FL Windstorm Quote" />
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Why Coastal Florida Is Different</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Homes within 1 mile of the coast in Florida&apos;s high-velocity hurricane zones (HVHZ) — which includes all of Miami-Dade and Broward counties — face stricter building codes, higher premiums, and fewer carrier options than inland properties.</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[['Broward County', '$2,800–$4,800/yr', 'Fort Lauderdale, Hollywood, Pompano Beach'], ['Miami-Dade County', '$3,200–$5,500/yr', 'Miami, Hialeah, Coral Gables'], ['Palm Beach County', '$2,600–$4,200/yr', 'West Palm Beach, Boca Raton, Delray Beach']].map(([county, price, cities]) => (
                <div key={county} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 text-sm">{county}</h3>
                  <div className="text-orange-500 font-bold text-sm mt-1">{price}</div>
                  <div className="text-gray-500 text-xs mt-1">{cities}</div>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Get a Coastal Florida Quote</h3>
              <p className="text-blue-200 mb-6">Our agents specialize in coastal Florida windstorm coverage. Compare rates from carriers that actually write policies in your area.</p>
              <CallButton variant="hero" label="Call Now for a Coastal FL Quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
      <ExitIntent />
    </>
  )
}
