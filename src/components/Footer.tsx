import React, { useState } from 'react'

const SOCIALS = [
  { id: 'link-facebook', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { id: 'link-twitter', label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z' },
  { id: 'link-youtube', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { id: 'link-instagram', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
  { id: 'link-linkedin', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]

interface NavColProps {
  links: { label: string; href: string; id: string }[]
  gapClass?: string
  fontClass?: string
}

const NavCol: React.FC<NavColProps> = ({ links, gapClass = 'gap-[34px]', fontClass = '' }) => (
  <div className={`flex flex-col ${gapClass} whitespace-nowrap`}>
    {links.map((link) => (
      <a key={link.id} href={link.href} id={link.id}
        className={`text-[16px] font-normal text-[#111827] hover:text-[#f5676f] transition-colors ${fontClass}`}>
        {link.label}
      </a>
    ))}
  </div>
)

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  return (
    <footer>
      {/* Footer content */}
      <div className="bg-[#f3f3f3]">
        <div className="mx-auto max-w-[1800px] pt-[24px] pb-[50px] px-[20px] flex flex-wrap justify-between items-start">
          {/* Newsletter card */}
          <div className="flex-1 basis-[300px] max-w-[600px] bg-white rounded-[14px] p-[18px] mb-[20px]">
            <div className="text-center">
              <p className="font-semibold text-[#1d2a38] text-[24px] leading-[31.2px] mb-[10px]">
                Stay Informed, Get Exclusive Updates
              </p>
              <p className="font-normal text-[#76879c] text-[13.8px] leading-[1.3] mb-[20px]">
                Join 60,000+ Subscribers and get a new discount coupon every week.
              </p>
            </div>
            <div className="flex items-center justify-between w-full h-[60px] bg-[#f1f1f1] rounded-[30px] pr-[5px]">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 pl-[18px] h-full border-none bg-transparent text-[14px] text-[#6d6d6d] outline-none placeholder:text-[#6d6d6d]"
              />
              <button
                id="btn-subscribe"
                type="submit"
                className="shrink-0 w-[150px] h-[50px] bg-[#0b9ea1] rounded-[25px] cursor-pointer hover:bg-[#0a8d90] transition-colors text-white text-[14px] font-semibold tracking-[1px]"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Telegram block */}
          <div className="flex-1 basis-[200px] flex flex-col items-center mb-[20px]">
            <a href="#" id="telegram-link" className="flex items-center gap-[18px] hover:opacity-80 transition-opacity">
              <img src="/photo_2026-06-22_20-51-33.jpg" alt="Telegram" className="w-[55px] h-[55px] object-contain mix-blend-multiply" />
              <span className="text-[21px] font-semibold text-[#2b9ee5] whitespace-nowrap">Join our telegram channel</span>
            </a>
            <div className="flex items-center gap-[24px] mt-[12px]">
              {SOCIALS.map((s) => (
                <a key={s.id} href="#" id={s.id} aria-label={s.label}
                  className="w-[28px] h-[28px] rounded-[8px] bg-[#e17a6e] text-white flex items-center justify-center hover:opacity-85 transition-opacity">
                  <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <a href="#" id="btn-investors"
              className="mt-[28px] inline-flex items-center justify-center bg-[#e17a6e] hover:bg-[#d96d61] transition-colors text-white text-[20px] font-bold rounded-[22px] py-[10px] px-[20px] cursor-pointer">
              For Investors
            </a>
          </div>

          {/* Nav columns */}
          <div className="flex-1 basis-[200px] flex flex-wrap justify-between gap-[20px] mb-[20px]">
            <NavCol gapClass="gap-[14px]" links={[
              { label: 'About Us', href: '/about', id: 'footer-about-us' },
              { label: 'Our Services', href: '#', id: 'footer-our-services' },
              { label: 'Contact Us', href: '#', id: 'footer-contact-us' },
              { label: 'News', href: '#', id: 'footer-news' },
            ]} />
            <NavCol gapClass="gap-[14px]" links={[
              { label: 'FAQ', href: '#', id: 'footer-faq' },
              { label: 'Terms of Service', href: '#', id: 'footer-tos' },
              { label: 'Return and Refund Policy', href: '#', id: 'footer-refund' },
            ]} />
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-[#e17a6e] py-[15px] px-[20px] flex flex-wrap items-center justify-between text-white">
        <span className="text-[14px]">
          © 2024 – YeneHealth • All Rights Reserved •{' '}
          <a href="#" id="footer-privacy" className="underline text-white hover:opacity-80">Privacy Policy</a>
        </span>
        <div className="flex items-center gap-[30px] text-[14px] font-semibold">
          <span>(+251) 90-699-9111</span>
          <span>info@yenehealth.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer



// yh-dev 6
