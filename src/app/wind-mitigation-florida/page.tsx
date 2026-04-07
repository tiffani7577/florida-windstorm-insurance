import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Wind Mitigation Florida | Save Up to 45%',
  description: 'A $150 wind mitigation inspection can save Florida homeowners 20–45% on their windstorm insurance premium. Learn what qualifies and how to get inspected.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/wind-mitigation-florida' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/wind-mitigation-florida',
    title: 'Wind Mitigation Florida | Save Up to 45%',
    description: 'A $150 wind mitigation inspection can save Florida homeowners 20–45% on their windstorm insurance premium. Learn what qualifies and how to get inspected.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wind Mitigation Florida | Save Up to 45%',
    description: 'A $150 wind mitigation inspection can save Florida homeowners 20–45% on their windstorm insurance premium. Learn what qualifies and how to get inspected.',
  },
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/wind-mitigation-florida' },
}

export default function WindMitigationPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">Wind Mitigation Florida</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Wind Mitigation Discounts Florida:<br />
              <span className="text-orange-400">Save Up to 45% on Your Premium</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              A $150–$200 wind mitigation inspection is the single best investment a Florida homeowner can make. It can save you $500–$2,000+ per year on your windstorm insurance premium.
            </p>
            <CallButton variant="hero" label="Call to Learn About Wind Mitigation Savings" />
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-4">What Is a Wind Mitigation Inspection?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A wind mitigation inspection is an assessment by a licensed inspector of your home&apos;s wind-resistant features. Florida law requires insurers to offer premium discounts for homes with qualifying features. The inspection documents these features so your insurer can apply the appropriate discounts.
            </p>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">What Features Qualify for Discounts?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { feature: 'Hip Roof Shape', discount: 'Up to 30%', desc: 'Hip roofs (all sides slope down) are significantly more wind-resistant than gable roofs.' },
                { feature: 'Impact-Resistant Windows & Doors', discount: 'Up to 45%', desc: 'Hurricane-rated impact glass or storm shutters on all openings.' },
                { feature: 'Roof Deck Attachment', discount: 'Up to 15%', desc: 'Clips or wraps securing roof deck to trusses provide superior wind resistance.' },
                { feature: 'Roof-to-Wall Connection', discount: 'Up to 20%', desc: 'Hurricane straps or clips connecting the roof structure to the walls.' },
                { feature: 'Roof Covering', discount: 'Up to 10%', desc: 'FBC-compliant roofing materials installed to current building code.' },
                { feature: 'Opening Protection', discount: 'Up to 10%', desc: 'Shutters or impact-rated coverings on all windows, doors, and skylights.' },
              ].map(item => (
                <div key={item.feature} className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-900 text-sm">{item.feature}</h3>
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.discount}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Find Out How Much You Can Save</h3>
              <p className="text-blue-200 mb-6">Call our agents to discuss wind mitigation discounts and compare windstorm rates from multiple Florida carriers.</p>
              <CallButton variant="hero" label="Call Now — Get Your Wind Mitigation Quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
