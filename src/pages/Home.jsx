import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Award, Clock, Users, ChevronRight, CheckCircle,Phone } from 'lucide-react'

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
<section className="relative bg-gradient-primary text-white overflow-hidden min-h-[90vh] flex items-center">
  {/* Background overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Optional: Add a subtle electrical pattern overlay */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundSize: '300px'
    }}></div>
  </div>
  
  <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Logo and Brand Section */}
      <div className="lg:w-2/5 flex flex-col items-center lg:items-start">
        {/* Large Logo Display */}
        <div className="mb-8">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            {/* Replace this div with your actual logo image */}
            <img 
              src="./logo.png" 
              alt="FRAD ELECTRICAL SERVICE Logo"
              className="w-full h-full object-contain"
            />
            
            {/* Placeholder large logo - Replace with your actual logo */}
            {/* <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-4">
              <div className="text-center">
                <span className="text-white font-bold text-4xl md:text-5xl block">FES</span>
                <div className="w-16 h-1 bg-yellow-400 mx-auto my-3"></div>
                <span className="text-white text-lg md:text-xl font-medium block">FRAD ELECTRICAL</span>
                <span className="text-white text-base block mt-1">SERVICE</span>
                <div className="mt-3 text-white/80 text-sm">
                  <span>EST. 2016</span>
                  <div className="flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Registered Electrical Contractor</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        
        {/* Registration Badge */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <p className="text-center text-sm md:text-base">
            <span className="font-semibold">Reg. No:</span> 2016/438625/07
          </p>
          <p className="text-center text-xs md:text-sm text-blue-200 mt-1">
            Licensed & Insured Electrical Contractors
          </p>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="lg:w-3/5 text-center lg:text-left">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-blue-900 rounded-full font-semibold text-sm mb-4">
            Professional Electrical Services Since 2016
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Powering Your <span className="text-yellow-400">Future</span> With Excellence
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
          Domestic, Commercial & Industrial Electrical Solutions in Johannesburg
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-blue-200">24/7 Emergency Service</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-blue-200">Certificate of Compliance</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-blue-200">Free Consultations</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/services" 
            className="btn-secondary inline-flex items-center px-8 py-4 text-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            View Our Services
            <ChevronRight size={24} className="ml-2" />
          </Link>
          <Link 
            to="/contact" 
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Get Free Quote
            <Phone size={24} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
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

      // Add this section to Home.jsx after the Services Highlight section

{/* Renovations Promotion */}
<section className="section-padding bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Professional Electrical Renovations
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Transform your space with our expert electrical renovation services. From kitchen upgrades to complete house rewiring, we deliver quality work with Certificate of Compliance.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">Full house rewiring</span>
          </div>
          <div className="flex items-center">
            <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">Kitchen & bathroom upgrades</span>
          </div>
          <div className="flex items-center">
            <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">Lighting system renovations</span>
          </div>
          <div className="flex items-center">
            <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">Certificate of Compliance included</span>
          </div>
        </div>
        <Link 
          to="/renovations" 
          className="btn-primary inline-flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          View Renovation Projects
          <ChevronRight size={20} className="ml-2" />
        </Link>
      </div>
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="./WhatsApp Image 2026-01-05 at 21.29.22.jpeg"
            alt="Electrical Renovation"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium">Featured Project</p>
            <p className="text-xl font-bold">Complete House Rewiring</p>
          </div>
        </div>
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