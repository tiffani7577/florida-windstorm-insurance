import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Windstorm Insurance Broward County FL | 2026',
  description:
    'Compare windstorm insurance options in Broward County, Florida, and see practical ways to lower premiums in 2026.',
  alternates: {
    canonical:
      'https://www.floridawindstorminsurance.com/windstorm-insurance-broward-county-florida',
  },
  openGraph: {
    url: 'https://www.floridawindstorminsurance.com/windstorm-insurance-broward-county-florida',
    title: 'Windstorm Insurance Broward County FL | 2026',
    description:
      'Compare windstorm insurance options in Broward County, Florida, and see practical ways to lower premiums in 2026.',
    images: [{ url: 'https://www.floridawindstorminsurance.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windstorm Insurance Broward County FL | 2026',
    description:
      'Compare windstorm insurance options in Broward County, Florida, and see practical ways to lower premiums in 2026.',
  },
}

export default function WindstormInsuranceBrowardCountyFloridaPage() {
  return (
    <>
      <div className="sticky top-0 z-20 flex items-center justify-between gap-3 rounded-md border bg-background/95 p-3 backdrop-blur mb-4">
        <a href="tel:+14356121009" className="text-sm font-semibold">
          Call (435) 612-1009
        </a>
        <a
          href="/get-a-quote"
          className="rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background"
        >
          Get Windstorm Quote
        </a>
      </div>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Broward County Windstorm Insurance Guide 2026
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              windstorm insurance broward county florida
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Understand costs, deductibles, and carrier options for Broward County homes in 2026.
            </p>
            <CallButton variant="hero" label="Get a Free Windstorm Quote" />
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
    </>
  )
}
