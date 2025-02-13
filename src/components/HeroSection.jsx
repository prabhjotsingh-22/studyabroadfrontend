import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Study MBBS Abroad</h1>
        <p className="text-xl mb-8">Pursue Your Medical Dreams in Top International Universities</p>
        <a
          href="#apply"
          className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Apply Now for MBBS Abroad
        </a>
      </div>
    </section>
  )
}

export default HeroSection