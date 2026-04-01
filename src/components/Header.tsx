'use client'
import { useState } from 'react'

// Design: Call-First Blueprint — sticky header with prominent click-to-call
// MarketCall number: (435) 612-1009 — routes to licensed FL insurance agents
// Hours: Mon-Fri 9am-9pm EST, Sat 12pm-5pm EST

const PHONE = '(435) 612-1009'
const PHONE_HREF = 'tel:+14356121009'

const navLinks = [
  { href: '/windstorm-insurance-florida', label: 'Windstorm Coverage' },
  { href: '/hurricane-deductible-florida', label: 'Hurricane Deductible' },
  { href: '/wind-mitigation-florida', label: 'Wind Mitigation' },
  { href: '/citizens-insurance-windstorm', label: 'Citizens Insurance' },
  { href: '/get-a-quote', label: 'Free Quote', isCta: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg text-blue-900 leading-none block">Florida Windstorm</span>
                <span className="text-xs font-medium text-orange-500 tracking-widest uppercase leading-none">Insurance</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.isCta ? null : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-blue-50"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop CTA — click to call */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now: {PHONE}
              </a>
            </div>

            {/* Mobile: call button + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 bg-orange-500 text-white font-bold text-sm px-3 py-2 rounded-lg"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-600" aria-label="Toggle menu">
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium border-b border-gray-50 last:border-0 ${link.isCta ? 'text-orange-500 font-semibold' : 'text-gray-700'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Sticky mobile bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-blue-900 px-4 py-3 flex gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-lg text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call (435) 612-1009
        </a>
        <a
          href="/get-a-quote"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-blue-900 font-bold py-3 rounded-lg text-sm"
        >
          Free Quote
        </a>
      </div>
    </>
  )
}
