import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TopBar: React.FC = () => {
  const { pathname } = useLocation()
  const isAboutUs = pathname === '/about'

  return (
    <div className="w-full h-[45px] bg-[rgb(225,122,110)]">
      <div className="h-full flex items-center justify-end pr-5 pl-6">
        <ul className={`flex items-center gap-12 text-white font-medium leading-5 ${isAboutUs ? "text-[14px] font-['Quasimoda']" : "text-[17px] font-['Times_New_Roman']"}`}>
          <li className="relative">
            <Link to="/about" className="hover:opacity-90 transition-opacity">
              About Us
            </Link>
          </li>
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">Our Services</a>
          </li>
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">News</a>
          </li>
          {isAboutUs && (
            <li>
              <a href="#" className="hover:opacity-90 transition-opacity">Newsletter</a>
            </li>
          )}
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar



// yh-dev 29
