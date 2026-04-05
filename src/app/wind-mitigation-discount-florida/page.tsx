import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wind Mitigation Discount Florida 2026 | Save Up to 45% on Home Insurance',
  description: 'Florida homeowners can save hundreds per year with wind mitigation discounts. Learn what qualifies, how to get a wind mitigation inspection, and how much you can save.',
  keywords: ['wind mitigation discount Florida', 'wind mitigation inspection Florida', 'Florida wind mitigation credits', 'save on home insurance Florida wind', 'wind mitigation report Florida'],
  openGraph: {
    title: 'Wind Mitigation Discount Florida 2026 | Save Up to 45% on Home Insurance',
    description: 'Florida homeowners can save hundreds per year with wind mitigation discounts.',
    url: 'https://www.floridawindstorminsurance.com/wind-mitigation-discount-florida',
  },
}

export default function WindMitigationDiscountPage() {
  return (
    <main className="min-h-screen bg-[#F0F4F8]">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#0D2B45]">Florida Windstorm Insurance</Link>
          <a href="tel:4356121009" className="bg-[#2563EB] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-[#1d4ed8] transition">
            Call (435) 612-1009
          </a>
        </div>
      </nav>

      <section className="bg-[#0D2B45] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#60A5FA] font-semibold text-sm uppercase tracking-wide mb-3">Florida Wind Mitigation Savings</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Wind Mitigation Discounts in Florida: How to Save Up to 45% on Your Home Insurance</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Florida law requires insurers to offer premium discounts for homes with hurricane-resistant features. A $75–$150 inspection can unlock hundreds of dollars in annual savings.</p>
          <a href="tel:4356121009" className="inline-block bg-[#2563EB] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1d4ed8] transition">
            Get a Quote — Call (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0D2B45] mb-4">What Is a Wind Mitigation Discount?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Under Florida Statute 627.0629, insurance companies are required to offer premium discounts to homeowners whose properties have features that reduce wind damage. These discounts are based on a standardized wind mitigation inspection report — the OIR-B1-1802 form — completed by a licensed inspector.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The discounts can be substantial. Homeowners with impact-resistant windows and doors, a hip roof, and strong roof-to-wall connections can save 20–45% on their windstorm premium. On a $3,000 annual premium, that's $600–$1,350 per year — every year.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The inspection itself costs $75–$150 and takes about an hour. The report is valid for 5 years and can be used with any Florida insurer. Most homeowners recoup the inspection cost in the first month of savings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0D2B45] mb-6">What Features Qualify for Wind Mitigation Discounts?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The wind mitigation inspection evaluates seven key features of your home. Each feature that meets the required standard earns a discount credit. Here's what inspectors look for:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#0D2B45] text-white">
                  <th className="text-left p-4 rounded-tl-xl">Feature</th>
                  <th className="text-left p-4">What Qualifies</th>
                  <th className="text-left p-4 rounded-tr-xl">Potential Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Building Code', 'Built to 2001 FBC or later', 'Up to 8%'],
                  ['Roof Covering', 'FBC-approved shingles, metal, tile', 'Up to 15%'],
                  ['Roof Deck Attachment', '8d nails at 6" spacing or better', 'Up to 15%'],
                  ['Roof-to-Wall Connection', 'Hurricane straps (clips, single/double wraps)', 'Up to 23%'],
                  ['Roof Shape', 'Hip roof (all sides slope down)', 'Up to 32%'],
                  ['Opening Protection', 'Impact windows/doors or storm shutters', 'Up to 45%'],
                  ['Secondary Water Resistance', 'Peel-and-stick underlayment', 'Up to 5%'],
                ].map(([feature, qualifies, savings], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-[#0D2B45]">{feature}</td>
                    <td className="p-4 text-gray-700">{qualifies}</td>
                    <td className="p-4 text-green-700 font-semibold">{savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">*Savings percentages are approximate and vary by insurer. Discounts are cumulative for qualifying features.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0D2B45] mb-4">Who Can Perform a Wind Mitigation Inspection in Florida?</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Florida law specifies who is authorized to complete a wind mitigation inspection. Qualified inspectors include: licensed general contractors, building contractors, roofing contractors, home inspectors, engineers, and architects. The inspector must be licensed in Florida and must sign the OIR-B1-1802 form.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When hiring an inspector, ask specifically whether they are familiar with the OIR-B1-1802 form and whether they have experience with your type of construction (CBS block, wood frame, manufactured). An experienced inspector will know exactly what documentation to gather to maximize your credits.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Avoid inspectors who offer unusually low prices or promise to "get you the best discounts" — the inspection must be accurate and defensible. Insurers can audit wind mitigation reports, and fraudulent reports can result in policy cancellation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0D2B45] mb-4">How to Use Your Wind Mitigation Report</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Once you have your completed OIR-B1-1802 report, submit it to your current insurer and ask for a premium recalculation. Your insurer is required to apply the credits. If your current insurer's rates are still high after applying the credits, use the report to shop other carriers — it's valid for 5 years and transferable.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            When getting new quotes, always provide the wind mitigation report upfront. Some agents will quote without it and add credits later; others need it from the start to give you an accurate rate. Providing it upfront ensures you're comparing apples to apples.
          </p>
        </section>

        <section className="bg-[#0D2B45] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out How Much You Can Save</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists can help you understand your wind mitigation credits and find the carrier that offers the best rates for your home's features. Call for a free quote comparison.</p>
          <a href="tel:4356121009" className="inline-block bg-[#2563EB] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#1d4ed8] transition">
            Call (435) 612-1009 — Free Quote
          </a>
          <p className="text-gray-400 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-[#0D2B45] mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/wind-mitigation-florida', label: 'Wind Mitigation in Florida: Overview' },
              { href: '/windstorm-insurance-florida', label: 'Windstorm Insurance in Florida' },
              { href: '/hurricane-deductible-florida', label: 'Understanding Your Hurricane Deductible' },
              { href: '/coastal-florida-windstorm-insurance', label: 'Coastal Florida Windstorm Insurance' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#2563EB] transition text-[#0D2B45] font-medium">
                <span className="text-[#2563EB]">→</span> {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
