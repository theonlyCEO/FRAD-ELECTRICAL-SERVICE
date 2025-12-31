import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Award, Clock, Users, ChevronRight, CheckCircle } from 'lucide-react'

const Home = () => {
  const servicesHighlights = [
    "Domestic & Commercial Installation",
    "Fault Detection & Repairs",
    "Certificate of Compliance",
    "Generator & Inverter Systems",
    "CCTV & Security Systems",
    "24/7 Emergency Service"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-yellow-400">Electrical</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Domestic, Commercial & Industrial Electrical Solutions in Johannesburg
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="btn-secondary inline-flex items-center"
              >
                View Our Services
                <ChevronRight size={20} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Zap size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">9+</h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Award size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Clock size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Emergency Service</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Users size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">Certified</h3>
              <p className="text-gray-600 font-medium">Professional Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Electrical Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide professional electrical services for residential, commercial, and industrial clients across Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                {servicesHighlights.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  View All Services
                  <ChevronRight size={20} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-yellow-400 mt-1" />
                  <span>Fully Licensed & Insured</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-yellow-400 mt-1" />
                  <span>Certificate of Compliance Provided</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-yellow-400 mt-1" />
                  <span>Competitive Pricing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-yellow-400 mt-1" />
                  <span>Same Day Service Available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-yellow-400 mt-1" />
                  <span>Quality Workmanship Guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Electrical Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and competitive quote
          </p>
          <Link 
            to="/contact" 
            className="btn-secondary inline-flex items-center text-lg"
          >
            Get Your Free Quote
            <ChevronRight size={24} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home