import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Windstorm vs Homeowners Insurance Florida',
  description: 'Florida windstorm insurance vs homeowners insurance: what each covers, why you need both, and how to avoid coverage gaps after a hurricane.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/windstorm-vs-homeowners-florida' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/windstorm-vs-homeowners-florida',
    title: 'Windstorm vs Homeowners Insurance Florida',
    description: 'Florida windstorm insurance vs homeowners insurance: what each covers, why you need both, and how to avoid coverage gaps after a hurricane.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windstorm vs Homeowners Insurance Florida',
    description: 'Florida windstorm insurance vs homeowners insurance: what each covers, why you need both, and how to avoid coverage gaps after a hurricane.',
  },
  
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">Windstorm vs. Homeowners Insurance in Florida</h1>
            <p className="text-blue-100 text-lg mb-8">Most Florida homeowners need both — and many don&apos;t realize they have a gap until after a storm.</p>
            <CallButton variant="hero" label="Call to Check Your Coverage Gaps" />
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { title: 'Homeowners Insurance (HO-3)', items: ['Fire, theft, liability', 'Water damage (non-flood)', 'Personal property', 'May exclude or limit wind damage in coastal FL'] },
                { title: 'Windstorm Insurance', items: ['Hurricane and tropical storm damage', 'Wind-driven rain through wind-created openings', 'Roof damage from wind', 'Required by mortgage lenders in coastal counties'] },
              ].map(col => (
                <div key={col.title} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-3">{col.title}</h3>
                  <ul className="space-y-2">{col.items.map(i => <li key={i} className="flex gap-2 text-gray-700 text-sm"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Make Sure You Have Both</h3>
              <p className="text-blue-200 mb-6">Our agents review your current policies and identify gaps. Free, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Review My Coverage" />
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
