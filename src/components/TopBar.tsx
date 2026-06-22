import React from 'react'
import { Link } from 'react-router-dom'

const TopBar: React.FC = () => {
  return (
    <div className="w-full h-[45px] bg-[rgb(225,122,110)]">
      <div className="h-full flex items-center justify-end pr-5 pl-6">
        <ul className="flex items-center gap-12 text-white text-[14px] font-medium leading-5">
          <li className="relative">
            <Link to="/about" className="pb-1 border-b-2 border-white hover:opacity-90 transition-opacity">
              About Us
            </Link>
          </li>
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">Our Services</a>
          </li>
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">News</a>
          </li>
          <li>
            <a href="#" className="hover:opacity-90 transition-opacity">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar
