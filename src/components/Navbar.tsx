import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1600px] mx-auto px-1 flex items-center justify-between h-[45px]">
        <Link to="/" className="flex items-center ml-40">
          <img src="/yhnavbarlogo.svg" alt="YeneHealth" className="h-5 w-auto" />
        </Link>
        <ul className="flex items-center gap-11 list-none text-[14px] font-medium leading-5 text-[#333] mr-20">
          <li><a href="#" className="hover:text-[#d9736a] transition-colors">Wholesale</a></li>
          <li><a href="#" className="hover:text-[#d9736a] transition-colors">Staffing</a></li>
          <li>
            <a href="#" className="hover:text-[#d9736a] transition-colors inline-flex items-center gap-1.5">
              Learn <span className="text-[11px]">▾</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#d9736a] transition-colors inline-flex items-center gap-[6px]">
              <svg className="w-[19px] h-[19px] text-[#5ba3a0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Orders
            </a>
          </li>
          <li><a href="#" className="hover:text-[#d9736a] transition-colors">Login</a></li>
          <li>
            <a href="#" className="bg-[#f0f0f0] text-[#333] px-3 py-[7px] rounded-[5px] hover:bg-[#e8e8e8] transition-colors">
              English
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
