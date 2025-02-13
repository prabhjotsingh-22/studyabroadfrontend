import React from 'react'

const WhyStudyAbroad = () => {
    const benefits = [
        "World-class education and facilities",
        "Affordable tuition fees",
        "Globally recognized degrees",
        "Cultural exposure and personal growth",
        "Opportunities for international careers",
      ]
  return (
    <section id="why-study" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Study MBBS Abroad?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Key Advantages</h3>
            <p className="text-gray-600">
              Studying MBBS abroad offers a unique opportunity to gain international exposure, learn from diverse
              medical practices, and build a global network. With state-of-the-art facilities and experienced faculty,
              you'll be well-prepared for a successful medical career anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyStudyAbroad