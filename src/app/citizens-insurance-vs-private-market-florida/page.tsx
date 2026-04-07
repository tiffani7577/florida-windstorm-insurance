import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Citizens Insurance vs Private Market Florida 2026 | Which Is Better?',
  description: 'Compare Citizens Property Insurance vs private market carriers for windstorm coverage in Florida. Costs, risks, and when to switch in 2026.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/citizens-insurance-vs-private-market-florida' },
  openGraph: {
    title: 'Citizens Insurance vs Private Market Florida 2026 | Which Is Better?',
    description: 'Compare Citizens Property Insurance vs private market carriers for windstorm coverage in Florida. Costs, risks, and when to switch in 2026.',
    url: 'https://www.floridawindstorminsurance.com/citizens-insurance-vs-private-market-florida',
  },
}

const comparisonRows = [
  { factor: 'Premium Cost', citizens: 'Often higher in 2026', private: 'Competitive — 16+ new carriers in market' },
  { factor: 'Assessment Risk', citizens: 'Yes — all FL policyholders can be assessed', private: 'No post-storm assessments' },
  { factor: 'Coverage Options', citizens: 'Limited, standardized', private: 'More flexible, customizable' },
  { factor: 'Claims Speed', citizens: 'Slower after major storms', private: 'Varies by carrier; often faster' },
  { factor: 'Availability', citizens: 'Always available as last resort', private: 'Depends on your property profile' },
  { factor: 'Financial Stability', citizens: 'State-backed', private: 'Rated carriers — check AM Best rating' },
]

const faqs = [
  {
    q: 'Is Citizens Insurance cheaper than private market in 2026?',
    a: 'Not necessarily. With 16+ new carriers entering Florida since 2023, private market rates have become more competitive. Many homeowners who assumed Citizens was their only affordable option are finding private carriers that cost the same or less — without the assessment risk.',
  },
  {
    q: 'What is the Citizens Insurance assessment risk?',
    a: 'If Citizens Property Insurance doesn\'t have enough reserves after a major hurricane, they can levy "assessments" on all Florida policyholders — even those with private insurance. These assessments can add hundreds of dollars to your annual premium for years after a storm. This is the biggest hidden risk of Citizens coverage.',
  },
  {
    q: 'How do I know if I can get private market coverage?',
    a: 'The main factors are: roof age (under 15–20 years preferred), home age, construction type, and location. A home with a newer roof, hip shape, and impact windows in a non-coastal area will have the most private market options. An independent agent can shop multiple carriers and tell you what\'s available for your specific property.',
  },
  {
    q: 'Can I switch from Citizens to private market mid-policy?',
    a: 'Yes. You can switch at any time — you don\'t have to wait for renewal. If a private carrier offers you better coverage at a competitive price, you can cancel your Citizens policy and get a pro-rated refund on your unused premium.',
  },
]

export default function CitizensVsPrivatePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* Hero */}
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <nav className="text-blue-300 text-sm mb-4">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <span>Citizens vs. Private Market</span>
            </nav>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Citizens Insurance vs. Private Market:<br />
              <span className="text-orange-400">Which Is Right for You in 2026?</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              With 16+ new carriers entering Florida since 2023, the private market is more competitive than it&apos;s been in years. Here&apos;s how to decide which is better for your windstorm coverage.
            </p>
            <CallButton variant="hero" label="Compare Your Options — Free Quote" />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">Citizens vs. Private Market: Side-by-Side</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Factor</th>
                    <th className="text-left px-4 py-3 font-semibold">Citizens Insurance</th>
                    <th className="text-left px-4 py-3 font-semibold">Private Market</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row.factor}</td>
                      <td className="px-4 py-3 text-gray-700">{row.citizens}</td>
                      <td className="px-4 py-3 text-gray-700">{row.private}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">The Assessment Risk: Citizens&apos; Biggest Downside</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most misunderstood aspect of Citizens Insurance is the <strong>assessment risk</strong>. After a major hurricane, if Citizens doesn&apos;t have enough reserves to pay all claims, they can levy assessments on every Florida policyholder — including people who have private insurance and never filed a Citizens claim.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              After Hurricane Andrew in 1992, assessments added hundreds of dollars per year to Florida homeowners&apos; insurance costs for years. With a direct hit on a major metro area, the same could happen again. Private market policyholders are not immune — the assessment applies statewide.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              This risk is why, when private market coverage is available at a competitive price, most insurance professionals recommend taking it over Citizens.
            </p>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">When Citizens Is the Right Choice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citizens exists for a reason. For homeowners who genuinely cannot get private market coverage — older homes, high-risk coastal locations, properties with roof issues — Citizens is the safety net that keeps Florida&apos;s housing market functioning. If private market isn&apos;t available or is priced significantly higher, Citizens is a legitimate option.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              The key is not to assume Citizens is your only option without actually checking the private market. Many homeowners are on Citizens by default, not by necessity.
            </p>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">The 2026 Private Market Opportunity</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Florida&apos;s insurance market has improved significantly since the 2022–2023 crisis. Legislative reforms, reduced litigation, and improved reinsurance conditions have brought 16+ new carriers into the state. Carriers that left Florida or stopped writing new policies are returning. This is the most competitive the private market has been in years.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you haven&apos;t shopped your windstorm coverage in the past 12 months, you may be paying more than necessary — or staying on Citizens when a better private option exists.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">
              <h3 className="font-serif text-xl text-blue-900 mb-3">Ready to Compare?</h3>
              <p className="text-gray-700 mb-4">Get a free comparison of Citizens vs. private market options for your specific property. No obligation — just real numbers.</p>
              <CallButton variant="inline" label="Get Free Windstorm Quotes" />
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl text-blue-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold text-blue-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/citizens-insurance-windstorm', label: 'Citizens Insurance Windstorm Coverage' },
                  { href: '/windstorm-insurance-florida', label: 'Windstorm Insurance Florida Guide' },
                  { href: '/wind-mitigation-florida', label: 'Wind Mitigation Florida' },
                  { href: '/cheap-windstorm-insurance-florida', label: 'Cheap Windstorm Insurance Florida' },
                  { href: '/hurricane-deductible-florida', label: 'Hurricane Deductible Explained' },
                  { href: '/windstorm-vs-homeowners-florida', label: 'Windstorm vs. Homeowners Insurance' },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-medium p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
