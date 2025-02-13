import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Uni Insights</div>
          <div className="hidden md:flex space-x-4">
            <a href="#why-study" className="text-gray-800 hover:text-blue-600">
              Why Study Abroad
            </a>
            <a href="#countries" className="text-gray-800 hover:text-blue-600">
              Countries
            </a>
            <a href="#admission" className="text-gray-800 hover:text-blue-600">
              Admission
            </a>
            <a href="#apply" className="text-gray-800 hover:text-blue-600">
              Apply Now
            </a>
          </div>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header