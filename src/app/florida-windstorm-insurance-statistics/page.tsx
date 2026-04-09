import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Florida Windstorm Insurance Statistics 2026 | Data & Facts',
  description: 'Key Florida windstorm and hurricane insurance statistics for 2026. Average premiums, claims data, Citizens Insurance enrollment, and wind mitigation facts.',
  alternates: { canonical: 'https://www.floridawindstorminsurance.com/florida-windstorm-insurance-statistics' },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/florida-windstorm-insurance-statistics',
    title: 'Florida Windstorm Insurance Statistics 2026',
    description: 'Key Florida windstorm and hurricane insurance statistics for 2026. Data sourced from FLOIR, FEMA, and Citizens Insurance.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Florida Windstorm Insurance Statistics 2026',
  description: 'Key Florida windstorm and hurricane insurance statistics for 2026, sourced from FLOIR, FEMA, Citizens Insurance, and industry data.',
  url: 'https://www.floridawindstorminsurance.com/florida-windstorm-insurance-statistics',
  datePublished: '2026-01-01',
  dateModified: '2026-04-01',
  author: {
    '@type': 'Organization',
    name: 'Florida Windstorm Insurance',
    url: 'https://www.floridawindstorminsurance.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Florida Windstorm Insurance',
    url: 'https://www.floridawindstorminsurance.com',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average windstorm insurance cost in Florida in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'The average Florida homeowners insurance premium in 2026 is approximately $3,600–$4,200 per year, which is nearly 3x the national average of $1,400. Coastal counties in South Florida and the Panhandle are significantly higher.' },
    },
    {
      '@type': 'Question',
      name: 'How many policies does Citizens Insurance have in Florida?',
      acceptedAnswer: { '@type': 'Answer', text: 'As of early 2026, Citizens Property Insurance Corporation has approximately 1.1–1.2 million policies, down from a peak of over 1.4 million in 2023 due to depopulation efforts.' },
    },
    {
      '@type': 'Question',
      name: 'What percentage of Florida homes have wind mitigation discounts?',
      acceptedAnswer: { '@type': 'Answer', text: 'Approximately 40–50% of Florida homeowners who have had wind mitigation inspections receive premium discounts. Discounts can range from 10% to over 40% depending on construction features.' },
    },
  ],
}

export default function StatisticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="text-teal-300 text-xs mb-4 flex items-center gap-1.5">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>›</span>
              <span className="text-teal-200">Florida Windstorm Insurance Statistics 2026</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
              Florida Windstorm Insurance Statistics 2026
            </h1>
            <p className="mt-4 text-teal-200 text-lg">
              Key data points on Florida windstorm premiums, hurricane claims, Citizens Insurance, and wind mitigation — sourced from FLOIR, FEMA, and Citizens Insurance.
            </p>
            <p className="mt-3 text-teal-300 text-sm">
              By the Florida Windstorm Insurance Team · Licensed Florida Insurance Professionals · Updated April 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose max-w-none">

            <p className="text-gray-600 text-sm bg-teal-50 border border-teal-200 rounded-lg p-4">
              <strong>Data sources:</strong> Florida Office of Insurance Regulation (FLOIR), FEMA National Flood Insurance Program, Citizens Property Insurance Corporation, Insurance Information Institute (III), and CoreLogic. Statistics reflect the most recently available data as of 2025–2026.
            </p>

            <h2 className="font-serif text-2xl text-teal-800 mt-8">Florida Home Insurance Premium Statistics</h2>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Average Florida homeowners insurance premium (2026):</strong> $3,600–$4,200 per year — nearly 3x the national average of $1,400.</li>
              <li><strong>Florida ranks #1</strong> in the United States for highest average homeowners insurance premiums.</li>
              <li><strong>South Florida premium range:</strong> Miami-Dade, Broward, and Palm Beach County homeowners typically pay $5,000–$9,000+ per year for combined homeowners and windstorm coverage.</li>
              <li><strong>Panhandle premium range:</strong> Pensacola and Panama City homeowners pay $3,500–$6,500 per year due to direct Gulf hurricane exposure.</li>
              <li><strong>Premium increase 2020–2026:</strong> Florida homeowners insurance premiums have increased an average of 102% over the past six years, according to the Insurance Information Institute.</li>
              <li><strong>Number of insurers that exited Florida (2020–2024):</strong> At least 11 property insurance companies became insolvent or withdrew from the Florida market.</li>
            </ul>

            <h2 className="font-serif text-2xl text-teal-800 mt-8">Citizens Insurance Statistics</h2>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Citizens Insurance policies (early 2026):</strong> Approximately 1.1–1.2 million policies, down from a peak of 1.4 million in 2023.</li>
              <li><strong>Citizens Insurance average premium (2026):</strong> Approximately $3,200–$4,800 per year depending on county and coverage level.</li>
              <li><strong>Citizens depopulation (2023–2025):</strong> Over 300,000 policies were moved from Citizens to private carriers through the state&apos;s depopulation program.</li>
              <li><strong>Citizens Insurance surplus (2025):</strong> Citizens reported a surplus of approximately $4.5 billion, its strongest financial position in years.</li>
              <li><strong>Eligibility cap:</strong> Citizens is only available to homeowners whose private market premium exceeds Citizens&apos; rate by more than 20%.</li>
            </ul>

            <h2 className="font-serif text-2xl text-teal-800 mt-8">Hurricane and Windstorm Claims Data</h2>

            <ul className="space-y-3 text-gray-700">
              <li><strong>Hurricane Ian (2022) insured losses:</strong> Approximately $60–$65 billion — the costliest hurricane in Florida history and the third-costliest in U.S. history.</li>
              <li><strong>Hurricane Idalia (2023) insured losses:</strong> Approximately $3.6 billion in Florida.</li>
              <li><strong>Hurricane Helene (2024) Florida losses:</strong> Approximately $6–8 billion in insured losses across the Big Bend and Gulf Coast regions.</li>
              <li><strong>Florida accounts for approximately 9%</strong> of all U.S. homeowners insurance policies but generates roughly 79% of all U.S. homeowners insurance lawsuits (pre-2023 tort reform).</li>
              <li><strong>Average windstorm deductible in Florida:</strong> 2%–5% of the insured dwelling value. On a $400,000 home, a 2% deductible means the first $8,000 of a windstorm claim comes out of pocket.</li>
            </ul>

            <h2 className="font-serif text-2xl text-teal-800 mt-8">Wind Mitigation Statistics</h2>

            <ul className="space-y-3 text-gray-700">
              <li><strong>My Safe Florida Home program grants:</strong> The state offers matching grants up to $10,000 for hurricane-resistant home improvements. Over 50,000 grants have been issued since the program&apos;s relaunch.</li>
              <li><strong>Wind mitigation inspection cost:</strong> Typically $75–$150 for a certified inspection.</li>
              <li><strong>Average premium discount from wind mitigation:</strong> 10%–40% depending on construction features such as hip roof, impact windows, and reinforced garage doors.</li>
              <li><strong>Hip roof discount:</strong> Homes with hip roofs (all sides slope down) typically receive a 20–30% windstorm premium discount vs. gable roofs.</li>
              <li><strong>Impact window discount:</strong> Installing impact-resistant windows and doors can reduce windstorm premiums by 15–25%.</li>
            </ul>

            <h2 className="font-serif text-2xl text-teal-800 mt-8">Frequently Asked Questions</h2>

            <details className="group border border-gray-200 rounded-xl overflow-hidden mb-3">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-teal-50 transition-colors list-none">
                What is the average windstorm insurance cost in Florida in 2026?
                <svg className="w-5 h-5 text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                The average Florida homeowners insurance premium in 2026 is approximately $3,600–$4,200 per year, nearly 3x the national average of $1,400. Coastal counties in South Florida and the Panhandle are significantly higher.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden mb-3">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-teal-50 transition-colors list-none">
                How many policies does Citizens Insurance have in Florida?
                <svg className="w-5 h-5 text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                As of early 2026, Citizens Property Insurance Corporation has approximately 1.1–1.2 million policies, down from a peak of over 1.4 million in 2023 due to depopulation efforts.
              </div>
            </details>

            <details className="group border border-gray-200 rounded-xl overflow-hidden mb-3">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-teal-50 transition-colors list-none">
                What percentage of Florida homes have wind mitigation discounts?
                <svg className="w-5 h-5 text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                Approximately 40–50% of Florida homeowners who have had wind mitigation inspections receive premium discounts. Discounts can range from 10% to over 40% depending on construction features.
              </div>
            </details>

            <div className="mt-10 bg-teal-800 text-white rounded-2xl p-6">
              <p className="font-serif text-xl mb-2">Get a Free Windstorm Insurance Quote</p>
              <p className="text-teal-200 text-sm mb-4">Compare rates from top Florida carriers. Licensed agents, no obligation.</p>
              <a href="/get-a-quote" className="inline-flex items-center justify-center bg-white text-teal-800 font-bold py-3 px-6 rounded-lg text-sm hover:bg-teal-50 transition-colors">
                Get My Free Quote →
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
