import React from 'react'
import { Building, Calendar, User, MapPin, Shield, Award, Target, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const companyStats = [
    { icon: Calendar, value: "9+ Years", label: "Experience" },
    { icon: Award, value: "1000+", label: "Projects" },
    { icon: Users, value: "Certified", label: "Team" },
    { icon: Shield, value: "100%", label: "Compliant" }
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About FRAD ELECTRICAL SERVICE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional electrical contractors and engineering specialists serving Johannesburg and Gauteng since 2016
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Building className="text-blue-600 mr-3" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Company Overview</h2>
              </div>
              <p className="text-gray-700 mb-4">
                FRAD ELECTRICAL SERVICE is a professionally registered electrical contracting and engineering company established in 2016. We specialize in providing comprehensive electrical solutions for residential, commercial, and industrial clients across Gauteng.
              </p>
              <p className="text-gray-700">
                As a registered private company (2016/438625/07), we operate with full compliance to South African electrical regulations and safety standards, ensuring all our work meets Certificate of Compliance requirements.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To deliver exceptional electrical services with professionalism, reliability, and strict adherence to the highest safety standards. We are committed to providing quality workmanship and innovative solutions for all electrical needs.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <stat.icon size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <User className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Leadership</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Director</h4>
                  <p className="text-gray-600">Vuadi Freddy Vangu</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Experience</h4>
                  <p className="text-gray-600">Over 9 years of electrical engineering and contracting expertise</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Qualifications</h4>
                  <p className="text-gray-600">Certified electrical contractor with extensive industry experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Registration Details */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registration Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Business Status</span>
                <span className="font-semibold text-green-600">Active in Business</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Enterprise Number</span>
                <span className="font-semibold text-blue-600">K2016438625</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Registration Number</span>
                <span className="font-semibold text-blue-600">2016/438625/07</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Legal Form</span>
                <span className="font-semibold text-gray-800">Private Company</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600">Incorporation Date</span>
                <span className="font-semibold text-gray-800">13 October 2016</span>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Address Information</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-3">
                  <MapPin className="text-blue-600 mr-2" size={20} />
                  <h4 className="font-semibold text-gray-700">Legal & Mailing Address</h4>
                </div>
                <address className="text-gray-600 not-italic">
                  13 MELBA STREET<br />
                  ROSETTENVILLE<br />
                  ROSETTENVILLE<br />
                  GAUTENG, 2190<br />
                  SOUTH AFRICA
                </address>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Jurisdiction</h4>
                <p className="text-gray-600">South Africa</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Service Area</h4>
                <p className="text-gray-600">Johannesburg and surrounding Gauteng region</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your electrical project needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-secondary inline-flex items-center justify-center text-lg py-3 px-8"
            >
              Get a Free Quote
            </Link>
            <Link 
              to="/services" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About