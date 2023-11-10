import React from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SECONDARY NAVBAR
   Pixel-recreation of the light-gray nav bar.
   Measured from screenshot (1900px wide):
   - bar height 95px, bg #e7e7e7
   - search pill 408 x 64, rounded-full
   - coral accent #e17a6e
───────────────────────────────────────────── */
const navLinks = ['Home', 'Shop', 'Learn', 'Doctors']

const SecondaryNavbar: React.FC = () => (
  <nav className="sticky top-0 z-50 w-full h-[80px] bg-[#f3f3f3]">
    <div className="max-w-[1860px] mx-auto h-full px-[20px] flex items-center">
      {/* ── Left: logo + links ── */}
      <div className="flex items-center gap-[22px] shrink-0">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src="/yhnavbarlogo.svg" alt="YeneHealth" className="h-[44px] w-auto" />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-[32px] list-none ml-[16px]">
          {navLinks.map((l) => (
            <li key={l}>
              <a href="#" className="text-[13px] font-medium text-[#e17a6e] hover:opacity-80 transition-opacity">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search pill */}
      <div className="ml-[40px] shrink-0 w-[360px] h-[46px] bg-white rounded-[999px] shadow-[0_4px_14px_rgba(0,0,0,0.06)] flex items-center pl-[20px] pr-[6px] gap-[12px]">
        <span className="flex-1 text-[12px] text-[#aebbd1] truncate">Search...</span>
        <span className="w-[1px] h-[18px] bg-[#dfe3ea] shrink-0" />
        <span className="text-[12px] text-[#4eb8bb] cursor-pointer shrink-0">Filter</span>
        <span className="w-[1px] h-[18px] bg-[#dfe3ea] shrink-0" />
        <span className="text-[12px] text-[#5eaaa4] cursor-pointer shrink-0">Sort</span>
        <button
          type="button"
          aria-label="Search"
          className="ml-[8px] w-[62px] h-[38px] rounded-[999px] bg-[#e17a6e] flex items-center justify-center shrink-0 hover:brightness-105 transition"
        >
          <svg className="w-[15px] h-[15px]" fill="none" stroke="#ffffff" strokeWidth="2.4" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* For Businesses — 210px gap from the search pill */}
      <button
        type="button"
        className="ml-[210px] shrink-0 h-[30px] px-[15px] rounded-[999px] bg-[#e17a6e] text-white text-[12px] font-semibold whitespace-nowrap hover:brightness-105 transition"
      >
        For Businesses
      </button>

      {/* ── Right: account cluster, pinned to far right ── */}
      <div className="ml-auto flex items-center gap-[20px] shrink-0">
        <button type="button" className="flex items-center gap-[5px] text-[13px] font-semibold text-[#e17a6e]">
          English
          <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <a href="#" className="text-[13px] font-semibold text-[#e17a6e] whitespace-nowrap">SIGN IN</a>

        <button type="button" aria-label="Wishlist" className="text-[#e17a6e]">
          <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21S4 14.5 4 8.8C4 6.1 6.1 4 8.7 4c1.6 0 3.1.8 4 2.1C13.4 4.8 14.9 4 16.5 4 19.1 4 21.2 6.1 21.2 8.8 21.2 14.5 12 21 12 21Z" strokeLinejoin="round" />
          </svg>
        </button>

        <button type="button" aria-label="Cart" className="text-[#e17a6e]">
          <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 7h12l-1.2 8.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 7Z" strokeLinejoin="round" />
            <path d="M8.5 7a3.5 3.5 0 017 0" />
            <path d="M19 5.5v4M17 7.5h4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
)

export default SecondaryNavbar

// yh-dev 14
