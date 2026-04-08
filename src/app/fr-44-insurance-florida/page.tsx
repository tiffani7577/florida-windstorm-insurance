import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How fast can I get a Florida FR-44 filed today?', acceptedAnswer: { '@type': 'Answer', text: 'Our Florida agents provide instant electronic filing. You can have your FR-44 submitted to the DHSMV in as little as 15 minutes. Call +14356121009 now to start your reinstatement.' } },
    { '@type': 'Question', name: 'What is the cheapest FR-44 insurance in Florida for 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Florida auto rates have dropped by an average of 8% in 2026. We compare all high-risk carriers to find the lowest state-mandated premiums. For a 2-minute phone quote, call +14356121009.' } },
    { '@type': 'Question', name: 'Do I need an FR-44 if I don\'t own a car in Florida?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if the state requires an FR-44 to reinstate your license, you need a Non-Owner policy. These are significantly cheaper than standard policies. Call +14356121009 to get a non-owner quote instantly.' } },
  ]
}

export const metadata: Metadata = {
  title: 'FR-44 Insurance Florida 2026 | Requirements',
  description: 'FR-44 insurance in Florida: who needs it, how much it costs, and how to file with the FLHSMV after a DUI conviction.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/fr-44-insurance-florida' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/fr-44-insurance-florida',
    title: 'FR-44 Insurance Florida 2026 | Requirements',
    description: 'FR-44 insurance in Florida: who needs it, how much it costs, and how to file with the FLHSMV after a DUI conviction.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FR-44 Insurance Florida 2026 | Requirements',
    description: 'FR-44 insurance in Florida: who needs it, how much it costs, and how to file with the FLHSMV after a DUI conviction.',
  },
}

export default function FR44Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Same-Day FR-44 Filing Available
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Instant Florida FR-44 Filings<br />
              <span className="text-orange-400">Get Your License Back Today</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Need a Florida FR-44 fast? Call to speak with an insurance professional who specializes in immediate filings to reinstate your license. Low down payments and 2026&apos;s newest rates.
            </p>
            <CallButton variant="hero" label="Call Now — Get Filed Today" />
            <p className="text-blue-300 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm EST</p>
          </div>
        </section>

        {/* WHAT IS FR-44 */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 mb-4">What Is an FR-44 in Florida?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An <strong>FR-44 is a certificate of financial responsibility</strong> required by the Florida Department of Highway Safety and Motor Vehicles (DHSMV) after certain serious driving violations, including DUI convictions. It proves you carry higher-than-minimum liability insurance coverage.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Florida&apos;s FR-44 requirement is stricter than most states&apos; SR-22: you must carry <strong>$100,000/$300,000 bodily injury liability</strong> and <strong>$50,000 property damage</strong> — roughly double the standard minimums. This typically raises premiums to $1,500–$3,000/year.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <h3 className="font-semibold text-amber-900 mb-2">⚠️ FR-44 vs SR-22 — Key Difference</h3>
              <p className="text-amber-800 text-sm">Florida uses <strong>FR-44</strong> (not SR-22) for DUI-related reinstatements. SR-22 is used for other violations. Make sure you know which one you need — filing the wrong one delays your reinstatement.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'When FR-44 Is Required', items: ['DUI or DWI conviction', 'Driving under influence of drugs', 'Refusal of breathalyzer test', 'Second or subsequent DUI offense'] },
                { title: 'FR-44 Requirements', items: ['$100,000/$300,000 bodily injury liability', '$50,000 property damage liability', 'Must be maintained for 3 years', 'Filed electronically by your insurer'] },
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

            <h2 className="font-serif text-2xl text-blue-900 mb-4">How to Get Your FR-44 Filed Fast</h2>
            <div className="space-y-4 mb-8">
              {[
                { step: '1', title: 'Call for Instant Help', desc: 'Call our team — we specialize in FR-44 filings and can get you quoted in 2 minutes.' },
                { step: '2', title: 'Get Your Policy', desc: 'We find the lowest-cost policy that meets FR-44 requirements. Low down payments available.' },
                { step: '3', title: 'Electronic Filing', desc: 'Your insurer files the FR-44 electronically with DHSMV — often same day.' },
                { step: '4', title: 'License Reinstated', desc: 'Once DHSMV processes the filing, your license reinstatement can proceed.' },
              ].map(s => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Don&apos;t Wait — Get Filed Today</h3>
              <p className="text-blue-200 mb-6">Every day without your license costs you. Our agents can get your FR-44 filed same-day.</p>
              <CallButton variant="hero" label="Call Now: Get FR-44 Filed Today" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">FR-44 Florida FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'How long do I need to carry FR-44 insurance in Florida?', a: 'Florida requires FR-44 for 3 years from the date of your license reinstatement. If your policy lapses at any point, the clock resets.' },
                { q: 'Can I get non-owner FR-44 insurance if I don\'t own a car?', a: "Yes. Non-owner FR-44 policies are available and are often the cheapest way to satisfy Florida's legal requirement if you don't own a vehicle." },
                { q: 'How much does FR-44 insurance cost in Florida?', a: 'FR-44 policies typically cost $1,500–$3,000/year depending on your driving record, age, and the insurer. Rates dropped an average of 8% in 2026 due to Florida legislative reforms.' },
                { q: 'What happens if my FR-44 insurance lapses?', a: 'Your insurer is required to notify DHSMV immediately if your policy lapses. Your license will be suspended again and you\'ll need to restart the 3-year requirement.' },
              ].map(faq => (
                <div key={faq.q} className="bg-white rounded-xl p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
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
