'use client'
import { useState, useEffect, useCallback } from 'react'

// Shows after 30s on page OR on exit intent (mouse leaves top of viewport)
// Only shows when MarketCall is CLOSED (call button is hidden)
// Captures name+phone for after-hours lead follow-up

function isMarketCallOpen(): boolean {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const est = new Date(utc + (-5 * 60) * 60000)
  const day = est.getDay()
  const t = est.getHours() * 60 + est.getMinutes()
  if (day >= 1 && day <= 5) return t >= 540 && t < 1260
  if (day === 6) return t >= 720 && t < 1020
  return false
}

export default function ExitIntent() {
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [zip, setZip] = useState('')

  const trigger = useCallback(() => {
    if (!isMarketCallOpen() && !sessionStorage.getItem('exitShown')) {
      setShow(true)
      sessionStorage.setItem('exitShown', '1')
    }
  }, [])

  useEffect(() => {
    // Timer: show after 30s
    const timer = setTimeout(trigger, 30000)
    // Exit intent: mouse leaves top
    const onMouseLeave = (e: MouseEvent) => { if (e.clientY < 10) trigger() }
    document.addEventListener('mouseleave', onMouseLeave)
    return () => { clearTimeout(timer); document.removeEventListener('mouseleave', onMouseLeave) }
  }, [trigger])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 relative">
        <button onClick={() => setShow(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {!submitted ? (
          <>
            <div className="text-center mb-5">
              <div className="text-3xl mb-2">🌙</div>
              <h3 className="font-serif text-xl text-blue-900 font-bold">Agents are offline right now</h3>
              <p className="text-gray-500 text-sm mt-1">Leave your info and we&apos;ll call you at 9 AM with your 2026 rate discount.</p>
            </div>
            <div className="space-y-3">
              <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400" />
              <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400" />
              <input value={zip} onChange={e => setZip(e.target.value)} type="text" placeholder="ZIP Code" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400" />
              <button
                onClick={() => { if (name && phone) setSubmitted(true) }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-sm transition-colors"
              >
                Get My 2026 Rate Discount
              </button>
            </div>
            <p className="text-gray-400 text-xs text-center mt-3">No spam. Florida agents only. We call once.</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-serif text-xl text-blue-900 font-bold">You&apos;re on the list!</h3>
            <p className="text-gray-500 text-sm mt-2">A licensed Florida agent will call you at 9 AM with your personalized rate.</p>
            <button onClick={() => setShow(false)} className="mt-4 text-blue-600 text-sm underline">Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
