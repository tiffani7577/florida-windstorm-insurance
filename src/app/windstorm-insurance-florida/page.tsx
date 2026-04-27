import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Windstorm Insurance Florida: Compare Options & Get a Quote",
  description: "Florida homeowners: compare windstorm insurance options, understand hurricane deductibles, and get a free quote from a licensed P&C professional. We can get you",
  alternates: { canonical: "/windstorm-insurance-florida" },
  openGraph: {
    title: "Windstorm Insurance Florida: Compare Options & Get a Quote",
    description: "Compare windstorm insurance options for Florida homeowners. Understand hurricane deductibles, Citizens vs. private market, and get a free quote from a licensed P&C professional.",
    url: "/windstorm-insurance-florida",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windstorm Insurance Florida: Compare Options & Get a Quote",
    description: "Compare windstorm insurance options for Florida homeowners. Understand hurricane deductibles, Citizens vs. private market, and get a free quote from a licensed P&C professional.",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.windstorm-insurance-florida/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "windstorm insurance florida",
      "item": "https://www.windstorm-insurance-florida/windstorm-insurance-florida"
    }
  ]
}
const primarySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "headline": "Windstorm Insurance in Florida: Compare Your Real Options Before the Next Storm Season",
  "description": "Florida homeowners: compare windstorm insurance options, understand hurricane deductibles, and get a free quote from a licensed P&C professional. We can get you",
  "mainEntityOfPage": "/windstorm-insurance-florida",
  "author": {
    "@type": "Person",
    "name": "FloridaWindstormInsurance.com Editorial Team"
  },
  "about": "Coverage comparison and decision guidance"
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is windstorm insurance required in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Florida law does not mandate windstorm insurance for all homeowners, but most mortgage lenders require it for properties in wind-exposed areas. Standard HO-3 homeowners policies exclude hurricane and named-storm wind damage, so a separate windstorm policy or endorsement fills that gap. Citizens Property Insurance Corporation is available statewide and cannot deny coverage based on coastal location alone."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between windstorm insurance and homeowners insurance in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard Florida homeowners policy (HO-3) covers fire, theft, liability, and many water-related perils — but typically excludes hurricane and named-storm wind damage. Windstorm insurance covers structural damage caused by wind, including hurricanes and tropical storms. In Florida, these are often separate policies or a separate endorsement, not a single combined product."
      }
    },
    {
      "@type": "Question",
      "name": "How much does windstorm insurance cost in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Windstorm insurance premiums in Florida vary significantly by county, roof age, construction type, and wind mitigation features. A coastal home in Miami-Dade or Broward with a gable roof and no opening protection will pay substantially more than a post-2002 home with a hip roof and impact windows in the same county. Statewide, annual windstorm premiums range from roughly $800 to over $5,000 depending on these factors. A licensed P&C professional can run a current comparison for your specific property."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get windstorm insurance if private carriers have declined my home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Citizens Property Insurance Corporation is Florida's insurer of last resort and cannot deny coverage based on coastal location alone. If you have been declined by private market carriers, Citizens is available statewide. However, Citizens is subject to assessment risk after major storm seasons, and if a private market option becomes available within 20% of Citizens' premium, you may be required to transition to the private carrier."
      }
    },
    {
      "@type": "Question",
      "name": "Does a wind mitigation inspection lower my windstorm insurance premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A licensed wind mitigation inspection documents features like roof shape, roof deck attachment, roof-to-wall connections, and opening protection. Florida insurers are required by statute to apply discounts based on these features. Homes with hip roofs, double-wrap connections, and impact-rated windows and doors can see premium reductions of 30–50% compared to homes without those features. The inspection costs $75–$150 and is valid for five years."
      }
    },
    {
      "@type": "Question",
      "name": "When is it too late to get windstorm insurance in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carriers stop binding new windstorm policies once a named storm enters a defined proximity radius of Florida — typically when a storm is within the Gulf of Mexico or Atlantic and tracking toward the state. The exact binding moratorium varies by carrier. Do not wait until a storm is named to shop for coverage. If you are currently uninsured or underinsured, act now."
      }
    },
    {
      "@type": "Question",
      "name": "What is a hurricane deductible and how does it work in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A hurricane deductible in Florida is a percentage of your insured dwelling value — not a flat dollar amount. Common deductibles are 2% or 5%. On a $400,000 home with a 2% hurricane deductible, you pay the first $8,000 out of pocket before the policy responds to a named-storm wind claim. This deductible applies only to damage from a named hurricane or tropical storm, not all wind events. Confirm your deductible percentage and the dwelling value it applies to before binding."
      }
    }
  ]
}

export default function GeneratedPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:px-8">
      <script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}></script>
      <script id="primary-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(primarySchema) }}></script>
      <script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}></script>

      {/* Sticky CTA bar */}
      <div className="sticky top-0 z-20 mb-6 flex items-center justify-end gap-3 rounded-xl border border-border/60 bg-background/90 p-3 shadow-sm backdrop-blur-md transition-shadow duration-300">
        <a
          href="/get-a-quote"
          className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-foreground px-5 py-2 text-xs font-semibold tracking-wide text-background shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
        >
          <span className="relative z-10">Get a Free Quote</span>
          <svg className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </a>
      </div>

      <article className="space-y-12">

        {/* ── HEADER ── */}
        <header className="space-y-6">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-5 bg-muted-foreground/40 inline-block" />
            Licensed Florida P&amp;C Coverage Comparison
           <a href="/cheap-windstorm-insurance-florida">cheap windstorm insurance…</a></p>

          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground md:text-[2.65rem]">
            Windstorm Insurance in Florida: Compare Your Real Options Before the Next Storm Season
          </h1>

          <p className="direct-answer-summary text-[1.05rem] leading-relaxed text-muted-foreground">
            Florida homeowners in wind-exposed areas typically need a separate windstorm policy or endorsement — standard HO-3 policies exclude hurricane and wind damage. Most mortgage lenders require it. Private market carriers and Citizens Property Insurance Corporation both offer coverage, but the right choice depends on your roof age, construction type, county, and mitigation features. A licensed Florida P&amp;C professional can run a side-by-side comparison in minutes.
           <a href="/citizens-insurance-vs-private-market-florida">citizens insurance vs pri…</a></p>
      <div className="text-xs text-muted-foreground border-t pt-3 mt-3 wm-trust">
        <span>Licensed Florida Insurance Professional</span>
        <span> | Not affiliated with Medicare or any government agency</span>
      </div>


          <p className="text-sm leading-relaxed text-muted-foreground/80">
            Choosing the wrong windstorm policy — or skipping coverage entirely — can leave you uninsured after a named storm. We compare private market options and Citizens so you see exactly what you're getting before you commit.
           <a href="/citizens-insurance-windstorm">citizens insurance windstorm</a></p>

          <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {[
              "Licensed Florida Insurance Professional",
              "Covers all 67 Florida counties",
              "Compare private market and Citizens side by side",
              "No obligation — free quote in minutes",
            ].map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-border/70 bg-muted/40 px-3 py-1 font-medium tracking-wide transition-colors duration-150 hover:border-foreground/20 hover:bg-muted/70"
              >
                {badge}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
            >
              Get a Free Quote
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:border-foreground/30 hover:bg-muted/40 active:scale-95"
            >
              Contact an agent
            </a>
          </div>
        </header>

        {/* ── DIVIDER ── */}
        <hr className="border-border/50" />

        {/* ── SECTION 1 ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Do You Actually Need Windstorm Insurance in Florida?
          </h2>
          <p className="text-[0.925rem] leading-[1.75] text-muted-foreground">
            Florida law does not require windstorm insurance for all homeowners, but your mortgage lender almost certainly does — especially if your home sits in a wind-exposed coastal or inland county. Standard HO-3 homeowners policies exclude hurricane and named-storm wind damage. That gap is where windstorm coverage steps in. If a Category 3 makes landfall and your roof is gone, a standard policy pays nothing for wind damage. The windstorm policy is what covers the structure. Waiting until a storm is named to shop is too late — carriers stop binding new policies once a named storm enters the Gulf or Atlantic within a defined radius of Florida.
           <a href="/coastal-florida-windstorm-insurance">coastal florida windstorm…</a></p>
          <ul className="space-y-2.5 text-[0.925rem] leading-relaxed text-muted-foreground">
            {[
              "Standard HO-3 excludes hurricane wind damage in most Florida policies",
              "Mortgage lenders in high-velocity hurricane zones require separate windstorm coverage",
              "Citizens Property Insurance Corporation cannot deny coverage based on coastal location alone",
              "Private market carriers may offer lower premiums if your home has qualifying mitigation features",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── SECTION 2 ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Citizens vs. Private Market: What the Difference Actually Costs You
          </h2>
          <p className="text-[0.925rem] leading-[1.75] text-muted-foreground">
            Citizens is Florida's insurer of last resort — it exists to cover homes the private market won't touch at a reasonable price. But Citizens comes with trade-offs: assessment risk (you can be charged a surcharge after a major storm season), slower claims handling compared to some private carriers, and a statutory rule that if a private market policy is available within 20% of Citizens' premium, you may be required to take the private option. Private market carriers price more aggressively on homes with hip roofs, newer roof decks, impact windows, and strong roof-to-wall connections. A home built after 2002 in Miami-Dade or Broward with a hip roof and impact glass can see private market premiums 25–40% below Citizens in some cases. The comparison only takes minutes — and the difference can be hundreds of dollars per year.
           <a href="/fr-44-insurance-florida">fr 44 insurance florida</a></p>
          <ul className="space-y-2.5 text-[0.925rem] leading-relaxed text-muted-foreground">
            {[
              "Citizens assessment risk: surcharges apply after high-loss storm seasons",
              "Private carriers reward hip roofs, impact windows, and post-2002 construction",
              "If a private option is within 20% of Citizens' rate, you may be required to take it",
              "Wind mitigation inspection results directly affect which carriers will quote and at what rate",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── CALLOUT CARD ── */}
        <div className="rounded-2xl border border-amber-200/60 bg-amber-50/50 px-6 py-5 dark:border-amber-900/40 dark:bg-amber-950/20">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-400">⚠ Don't wait for a storm to be named.</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-700/90 dark:text-amber-500/90">
            Carriers close their binding windows the moment a named storm enters the Gulf or Atlantic. If you're uninsured or underinsured right now, today is the day to act.
          </p>
        </div>

        {/* ── SECTION 3 ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Hurricane Deductibles: The Number Most Homeowners Misread
          </h2>
          <p className="text-[0.925rem] leading-[1.75] text-muted-foreground">
            Florida windstorm policies use a percentage-based hurricane deductible — not a flat dollar amount. A 2% hurricane deductible on a $400,000 home means you pay the first $8,000 out of pocket before the policy responds. Some coastal counties carry 5% deductibles as standard. That number is not negotiable with the carrier after a storm — it is set at binding. Before you accept a policy, confirm the hurricane deductible percentage, the insured dwelling value it applies to, and whether a separate all-other-perils deductible applies to non-named-storm wind events. Misreading this is one of the most common and most expensive mistakes Florida homeowners make after a storm.
          </p>
          <ul className="space-y-2.5 text-[0.925rem] leading-relaxed text-muted-foreground">
            {[
              "Hurricane deductibles are percentage-based, not flat dollar amounts",
              "2% on a $400,000 home = $8,000 out of pocket before coverage begins",
              "Coastal counties may carry 5% deductibles as standard",
              "Confirm deductible structure before binding — it cannot be changed after a named storm is declared",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── SECTION 4 ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Wind Mitigation Discounts: What Lowers Your Premium
          </h2>
          <p className="text-[0.925rem] leading-[1.75] text-muted-foreground">
            A licensed wind mitigation inspection documents the physical features of your home that reduce storm damage risk. Insurers use the results to apply statutory discounts under Florida law. The features that matter most are roof shape (hip roofs score best), roof deck attachment (6-inch nail spacing vs. 6/12), roof covering age and type, roof-to-wall connections (clips vs. single wraps vs. double wraps vs. structural), and opening protection (impact-rated windows and doors vs. shutters vs. no protection). A home with a hip roof, double-wrap connections, and impact glass can qualify for discounts that reduce windstorm premium by 30–50% compared to a comparable home with a gable roof and no opening protection. The inspection costs $75–$150 and is valid for five years.
          </p>
          <ul className="space-y-2.5 text-[0.925rem] leading-relaxed text-muted-foreground">
            {[
              "Hip roof shape earns the highest roof shape discount",
              "Double-wrap roof-to-wall connections outperform clips and single wraps",
              "Impact windows and doors qualify for the highest opening protection credit",
              "Inspection costs $75–$150 and is valid for five years — ROI is typically one policy renewal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── SECTION 5 ── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            What Changes in 2025–2026 That Affects Your Coverage Decision
          </h2>
          <p className="text-[0.925rem] leading-[1.75] text-muted-foreground">
            Wind mitigation inspection standards updated in 2025 changed how roof deck attachment is documented and scored — affecting pricing for homes built between 1994 and 2002 in particular. If your last inspection was completed before the updated FBC-aligned standards took effect, a reinspection may change your discount tier. Separately, several private market carriers re-entered Florida coastal counties in 2024–2025 following legislative reforms to assignment of benefits and litigation rules. That means more competitive private market options exist now than in 2022–2023 — but carrier appetite varies by county, roof age, and construction type. The market is moving. A comparison today reflects current carrier appetite, not last year's.
           <a href="/florida-windstorm-insurance-statistics">florida windstorm insuran…</a></p>
          <ul className="space-y-2.5 text-[0.925rem] leading-relaxed text-muted-foreground">
            {[
              "2025 wind mitigation standard changes affect homes built 1994–2002",
              "Pre-2025 inspections may no longer reflect your current discount tier",
              "Private market re-entry in 2024–2025 means more competitive options in coastal counties",
              "Carrier appetite varies by county and roof age — a current comparison is the only accurate one",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-border/50" />

        {/* ── FAQ ── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <div className="divide-y divide-border/60">
            {[
              {
                q: "Is windstorm insurance required in Florida?",
                a: "Florida law does not mandate windstorm insurance for all homeowners, but most mortgage lenders require it for properties in wind-exposed areas. Standard HO-3 homeowners policies exclude hurricane and named-storm wind damage, so a separate windstorm policy or endorsement fills that gap. Citizens Property Insurance Corporation is available statewide and cannot deny coverage based on coastal location alone.",
              },
              {
                q: "What is the difference between windstorm insurance and homeowners insurance in Florida?",
                a: "A standard Florida homeowners policy (HO-3) covers fire, theft, liability, and many water-related perils — but typically excludes hurricane and named-storm wind damage. Windstorm insurance covers structural damage caused by wind, including hurricanes and tropical storms. In Florida, these are often separate policies or a separate endorsement, not a single combined product.",
              },
              {
                q: "How much does windstorm insurance cost in Florida?",
                a: "Windstorm insurance premiums in Florida vary significantly by county, roof age, construction type, and wind mitigation features. A coastal home in Miami-Dade or Broward with a gable roof and no opening protection will pay substantially more than a post-2002 home with a hip roof and impact windows in the same county. Statewide, annual windstorm premiums range from roughly $800 to over $5,000 depending on these factors. A licensed P&C professional can run a current comparison for your specific property.",
              },
              {
                q: "Can I get windstorm insurance if private carriers have declined my home?",
                a: "Yes. Citizens Property Insurance Corporation is Florida's insurer of last resort and cannot deny coverage based on coastal location alone. If you have been declined by private market carriers, Citizens is available statewide. However, Citizens is subject to assessment risk after major storm seasons, and if a private market option becomes available within 20% of Citizens' premium, you may be required to transition to the private carrier.",
              },
              {
                q: "Does a wind mitigation inspection lower my windstorm insurance premium?",
                a: "Yes. A licensed wind mitigation inspection documents features like roof shape, roof deck attachment, roof-to-wall connections, and opening protection. Florida insurers are required by statute to apply discounts based on these features. Homes with hip roofs, double-wrap connections, and impact-rated windows and doors can see premium reductions of 30–50% compared to homes without those features. The inspection costs $75–$150 and is valid for five years.",
              },
              {
                q: "When is it too late to get windstorm insurance in Florida?",
                a: "Carriers stop binding new windstorm policies once a named storm enters a defined proximity radius of Florida — typically when a storm is within the Gulf of Mexico or Atlantic and tracking toward the state. The exact binding moratorium varies by carrier. Do not wait until a storm is named to shop for coverage. If you are currently uninsured or underinsured, act now.",
              },
              {
                q: "What is a hurricane deductible and how does it work in Florida?",
                a: "A hurricane deductible in Florida is a percentage of your insured dwelling value — not a flat dollar amount. Common deductibles are 2% or 5%. On a $400,000 home with a 2% hurricane deductible, you pay the first $8,000 out of pocket before the policy responds to a named-storm wind claim. This deductible applies only to damage from a named hurricane or tropical storm, not all wind events. Confirm your deductible percentage and the dwelling value it applies to before binding.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="space-y-1.5 py-5 first:pt-0 last:pb-0">
                <h3 className="text-[0.95rem] font-semibold leading-snug text-foreground">{q}</h3>
                <p className="text-sm leading-[1.75] text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Related resources</h2>
          <nav aria-label="Internal links" className="flex flex-wrap gap-2">
            {[
              { href: "/citizens-insurance-vs-private-market-florida", label: "Compare Citizens Insurance vs. private market options in Florida" },
              { href: "/wind-mitigation-discount-florida", label: "How wind mitigation discounts work in Florida" },
              { href: "/hurricane-deductible-florida", label: "Understanding your hurricane deductible in Florida" },
              { href: "/coastal-florida-windstorm-insurance", label: "Coastal Florida windstorm insurance options" },
              { href: "/get-a-quote", label: "Get a free windstorm insurance quote" },
              { href: "/about", label: "Related topic" },
              { href: "/locations", label: "Location coverage" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg border border-border/70 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-150 hover:border-foreground/25 hover:bg-muted/50 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted/60 via-muted/30 to-background p-8 shadow-sm">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-foreground/5 via-transparent to-transparent" />
          <div className="relative space-y-2">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Ready to move forward?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Get a fast coverage review before your policy deadline. A licensed Florida P&amp;C professional will compare your real options — no pressure, no obligation.
             <a href="/about">about</a></p>
            <div className="pt-2">
              <a
                href="/get-a-quote"
                className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-md transition-all duration-200 hover:shadow-lg hover:opacity-90 active:scale-95"
              >
                Get a Free Quote
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
            </div>
          </div>
        </section>

      </article>
    </main>
  )
}