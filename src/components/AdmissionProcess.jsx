import React from 'react'

const AdmissionProcess = () => {
    const steps = [
        { title: "Research", description: "Explore universities and programs" },
        { title: "Eligibility Check", description: "Ensure you meet the requirements" },
        { title: "Document Preparation", description: "Gather all necessary documents" },
        { title: "Application Submission", description: "Apply to your chosen universities" },
        { title: "Entrance Exam", description: "Take required entrance exams if applicable" },
        { title: "Visa Process", description: "Apply for a student visa" },
      ]
  return (
    <section id="admission" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Admission Process & Eligibility</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdmissionProcess