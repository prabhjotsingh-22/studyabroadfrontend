import { useState } from "react"

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.phone.trim()) errors.phone = "Phone is required"
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone number is invalid"
    if (!formData.country) errors.country = "Country preference is required"
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", phone: "", country: "" })
      setErrors({})
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <section id="apply" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Apply Now for MBBS Abroad</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              placeholder="Your Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
              Preferred Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.country ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select a country</option>
              <option value="Russia">Russia</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Philippines">Philippines</option>
              <option value="Georgia">Georgia</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Egypt">Egypt</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  )
}

export default LeadForm