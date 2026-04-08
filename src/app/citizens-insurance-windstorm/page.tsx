import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Citizens Insurance Windstorm Florida 2026',
  description: 'Citizens Insurance windstorm coverage in Florida: what it covers, costs, and how to compare private market alternatives.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/citizens-insurance-windstorm' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/citizens-insurance-windstorm',
    title: 'Citizens Insurance Windstorm Florida 2026',
    description: 'Citizens Insurance windstorm coverage in Florida: what it covers, costs, and how to compare private market alternatives.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Citizens Insurance Windstorm Florida 2026',
    description: 'Citizens Insurance windstorm coverage in Florida: what it covers, costs, and how to compare private market alternatives.',
  },
}

export default function CitizensWindstormPage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Citizens Insurance Windstorm Coverage:<br />
              <span className="text-orange-400">What It Covers (and What It Doesn&apos;t)</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Citizens Property Insurance is Florida&apos;s insurer of last resort. In 2026, with 16 new private carriers entering the market, many homeowners have better — and cheaper — options.
            </p>
            <CallButton variant="hero" label="Compare Citizens vs. Private Market" />
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Does Citizens Insurance Cover Windstorm Damage?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yes — Citizens Property Insurance does cover windstorm damage, including hurricane damage, as part of its standard homeowners policy (HO-3) for most Florida counties. However, in some high-risk coastal areas, Citizens may offer a <strong>separate wind-only policy</strong> through the Citizens Wind program.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The key issue with Citizens is not coverage — it&apos;s <strong>assessments</strong>. If Citizens doesn&apos;t have enough reserves after a major hurricane, they can levy assessments on ALL Florida policyholders (even those with private insurance) to cover the shortfall.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-green-900 mb-3">Citizens Windstorm: Pros</h3>
                <ul className="space-y-2">
                  {['Available when private market won\'t insure', 'State-backed (won\'t go bankrupt)', 'Covers most windstorm perils', 'Required to offer coverage in assigned risk areas'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-3">Citizens Windstorm: Cons</h3>
                <ul className="space-y-2">
                  {['Post-storm assessment risk for all FL policyholders', 'Often more expensive than private market in 2026', 'Limited coverage options vs. private carriers', 'Slower claims processing after major storms'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Is Citizens Still Your Best Option?</h3>
              <p className="text-blue-200 mb-6">With 16 new carriers in Florida in 2026, many Citizens policyholders can now get better coverage at lower rates. Call to compare.</p>
              <CallButton variant="hero" label="Compare Citizens vs. Private Market Now" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
