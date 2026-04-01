import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Hurricane Deductible Florida Explained | What It Costs You',
  description: "Florida's hurricane deductible works differently than your standard deductible — and it can cost you tens of thousands. Learn what it means and how to lower it.",
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/hurricane-deductible-florida' },
}

export default function HurricaneDeductiblePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">

        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">Florida Hurricane Deductibles</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Hurricane Deductibles in Florida:<br />
              <span className="text-orange-400">What They Really Cost You</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Most Florida homeowners don&apos;t realize their hurricane deductible is a <em>percentage</em> of their home&apos;s value — not a flat dollar amount. On a $400,000 home, a 2% deductible means $8,000 out of pocket before insurance pays anything.
            </p>
            <CallButton variant="hero" label="Get a Quote With Lower Deductible" />
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-4">How Florida Hurricane Deductibles Work</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unlike your standard homeowners deductible (usually a flat $1,000–$2,500), Florida&apos;s hurricane deductible is calculated as a <strong>percentage of your home&apos;s insured value</strong> — typically 2%, 5%, or 10%.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <h3 className="font-semibold text-amber-900 mb-3">Real Dollar Impact by Home Value</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-amber-200"><th className="text-left py-2 text-amber-900">Home Value</th><th className="text-right py-2 text-amber-900">2% Deductible</th><th className="text-right py-2 text-amber-900">5% Deductible</th><th className="text-right py-2 text-amber-900">10% Deductible</th></tr></thead>
                  <tbody>
                    {[['$200,000', '$4,000', '$10,000', '$20,000'], ['$300,000', '$6,000', '$15,000', '$30,000'], ['$400,000', '$8,000', '$20,000', '$40,000'], ['$600,000', '$12,000', '$30,000', '$60,000']].map(row => (
                      <tr key={row[0]} className="border-b border-amber-100">
                        {row.map((cell, i) => <td key={i} className={`py-2 ${i > 0 ? 'text-right' : ''} text-gray-700`}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">When Does the Hurricane Deductible Apply?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The hurricane deductible only applies when the Governor of Florida declares a state of emergency for a named hurricane. For all other wind events (tropical storms, tornadoes, severe thunderstorms), your standard deductible applies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This means if a tropical storm — not officially a hurricane — damages your roof, you pay your standard $1,000–$2,500 deductible. But if Hurricane Ian hits, you&apos;re paying $8,000–$40,000+ before insurance covers anything.
            </p>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Find a Policy With a Lower Hurricane Deductible</h3>
              <p className="text-blue-200 mb-6">Some Florida carriers now offer 1% hurricane deductibles. Our agents can compare options and find the right balance of premium vs. deductible for your home.</p>
              <CallButton variant="hero" label="Call Now — Compare Deductible Options" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
