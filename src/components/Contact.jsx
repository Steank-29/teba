import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiry: '',
    file: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiry: '',
      file: null
    })
  }

  return (
    <div className="min-h-screen bg-teba-cream py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-serif text-teba-secondary text-sm sm:text-base tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-teba-primary mb-4">
            Contact Us
          </h1>
          <p className="font-serif text-teba-dark max-w-2xl mx-auto text-sm sm:text-base">
            Have a question about our tote bags? Want to collaborate? 
            We'd love to hear from you. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information - First on Mobile */}
          <div className="lg:col-span-1 order-1 lg:order-1 space-y-6">
            <div className="bg-teba-white-cream p-6 rounded-lg shadow-sm border border-teba-beige/20">
              <h3 className="font-serif text-xl font-bold text-teba-primary mb-4">
                Contact Information
              </h3>
              
              {/* Email */}
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-teba-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-serif text-sm font-semibold text-teba-dark">Email</p>
                  <p className="font-serif text-sm text-teba-brown">hello@teba.tn</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-5 h-5 text-teba-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-serif text-sm font-semibold text-teba-dark">Phone</p>
                  <p className="font-serif text-sm text-teba-brown">+216 71 234 567</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teba-secondary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-serif text-sm font-semibold text-teba-dark">Location</p>
                  <p className="font-serif text-sm text-teba-brown">Tunis, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Second on Mobile */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-teba-white-cream p-6 sm:p-8 rounded-lg shadow-sm border border-teba-beige/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block font-serif text-sm font-semibold text-teba-dark mb-2">
                    Full Name <span className="text-teba-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-teba-cream border border-teba-beige/30 rounded-md focus:outline-none focus:border-teba-primary transition-colors font-serif text-teba-dark"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-serif text-sm font-semibold text-teba-dark mb-2">
                    Email Address <span className="text-teba-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-teba-cream border border-teba-beige/30 rounded-md focus:outline-none focus:border-teba-primary transition-colors font-serif text-teba-dark"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-serif text-sm font-semibold text-teba-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-teba-cream border border-teba-beige/30 rounded-md focus:outline-none focus:border-teba-primary transition-colors font-serif text-teba-dark"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>

                {/* Inquiry */}
                <div className="sm:col-span-2">
                  <label htmlFor="inquiry" className="block font-serif text-sm font-semibold text-teba-dark mb-2">
                    Your Inquiry <span className="text-teba-primary">*</span>
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-teba-cream border border-teba-beige/30 rounded-md focus:outline-none focus:border-teba-primary transition-colors font-serif text-teba-dark resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* File Upload */}
                <div className="sm:col-span-2">
                  <label htmlFor="file" className="block font-serif text-sm font-semibold text-teba-dark mb-2">
                    Attach Image or File (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx"
                      className="w-full px-4 py-3 bg-teba-cream border border-teba-beige/30 rounded-md focus:outline-none focus:border-teba-primary transition-colors font-serif text-teba-dark file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teba-primary file:text-teba-cream hover:file:bg-teba-secondary cursor-pointer"
                    />
                  </div>
                  <p className="font-serif text-xs text-teba-brown mt-2">
                    Accepted formats: JPG, PNG, GIF, PDF, DOC (Max 5MB)
                  </p>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-teba-primary text-teba-cream font-serif text-base sm:text-lg px-8 py-3.5 rounded-md hover:bg-teba-secondary transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Working Hours - Third on Mobile */}
          <div className="lg:col-span-1 order-3 lg:order-3">
            <div className="bg-teba-white-cream p-6 rounded-lg shadow-sm border border-teba-beige/20">
              <h3 className="font-serif text-xl font-bold text-teba-primary mb-4">
                Working Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between font-serif text-sm">
                  <span className="text-teba-dark">Monday - Friday</span>
                  <span className="text-teba-brown">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between font-serif text-sm">
                  <span className="text-teba-dark">Saturday</span>
                  <span className="text-teba-brown">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between font-serif text-sm">
                  <span className="text-teba-dark">Sunday</span>
                  <span className="text-teba-brown">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact