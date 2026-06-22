import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundContent: React.FC = () => {
  return (
    <main className="mx-auto w-[1110.4px] min-h-[633.3px] pt-[100px] pb-16 text-center">
      <img
        src="/404.png"
        alt="404 – Page Not Found"
        className="mx-auto mt-[0px] mb-[50px] w-[500px] h-[409px]"
      />
      <h1 className="mt-4 mb-1 text-[41px] font-semibold">
        There's nothing here
      </h1>
      <p className="mt-3 text-[14px] text-gray-500">
        The page you are looking for has gone missing.
      </p>
      <Link
        to="/"
        id="btn-back-to-home"
        className="mt-6 inline-block cursor-pointer select-none rounded-lg bg-[#171717] px-2 py-1 text-center text-[14px] font-normal leading-[21px] tracking-[0.28px] whitespace-nowrap text-white transition-colors duration-150 ease-in-out hover:bg-[#2a2a2a]"
      >
        Back to Home
      </Link>
    </main>
  )
}

export default NotFoundContent
