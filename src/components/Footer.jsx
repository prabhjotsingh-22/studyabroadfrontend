import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Study MBBS Abroad</h3>
            <p className="text-gray-400">Your gateway to international medical education</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li>
                <a href="#why-study" className="hover:text-white">
                  Why Study Abroad
                </a>
              </li>
              <li>
                <a href="#countries" className="hover:text-white">
                  Top Countries
                </a>
              </li>
              <li>
                <a href="#admission" className="hover:text-white">
                  Admission Process
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-white">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: info@studymbbsabroad.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">Made by Prabhjot</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer