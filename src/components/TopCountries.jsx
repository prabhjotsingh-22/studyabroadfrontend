import React from 'react'

const TopCountries = () => {
    const countries = [
        { name: "Russia", flag: "🇷🇺" },
        { name: "Uzbekistan", flag: "🇺🇿" },
        { name: "Kazakhstan", flag: "🇰🇿" },
        { name: "Philippines", flag: "🇵🇭" },
        { name: "Georgia", flag: "🇬🇪" },
        { name: "Kyrgyzstan", flag: "🇰🇬" },
        { name: "Egypt", flag: "🇪🇬" },
      ]
  return (
    <section id="countries" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Top Countries for MBBS Abroad</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <span className="text-4xl mb-2">{country.flag}</span>
              <h3 className="text-xl font-semibold">{country.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopCountries