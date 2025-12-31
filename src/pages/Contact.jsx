import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Tel: 010 163 4212", "Cell: +27 16 1429 0498"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["projectfes@gmail.com"],
      color: "text-red-600"
    },
    {
      icon: MapPin,
      title: "Physical Address",
      details: ["13 Melba Street, Rosettenville", "Johannesburg, Gauteng, 2190", "South Africa"],
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 7:00 AM - 5:00 PM", "Saturday: 8:00 AM - 1:00 PM", "24/7 Emergency Services"],
      color: "text-purple-600"
    }
  ]

  const serviceOptions = [
    "Electrical Installation",
    "Repairs & Maintenance",
    "Generator Systems",
    "CCTV & Security",
    "Certificate of Compliance",
    "Emergency Service",
    "Other"
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for professional electrical services, free consultations, and competitive quotes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${info.color.replace('text-', 'bg-')} bg-opacity-10 rounded-lg`}>
                    <info.icon className={info.color} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Service Areas */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Service Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Johannesburg & Gauteng
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Residential Areas
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Commercial Districts
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Industrial Zones
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  New Developments
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-700">Thank you for contacting us. We'll get back to you within 2-4 business hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User size={16} className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Please describe your project or requirements..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    We typically respond within 2-4 business hours
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary inline-flex items-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertCircle size={20} className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Emergency Service Available</h4>
                      <p className="text-yellow-700">
                        For urgent electrical emergencies, please call our 24/7 emergency line: 
                        <strong className="ml-2">+27 16 1429 0498</strong>
                      </p>
                    </div>
                  </div>
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