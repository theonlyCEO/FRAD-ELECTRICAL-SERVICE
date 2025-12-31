import React from 'react'
import { FileText, Shield, Building, MapPin, User, CheckCircle, FileCheck, AlertTriangle } from 'lucide-react'

const Legal = () => {
  const compliancePoints = [
    "All electrical work includes valid Certificate of Compliance",
    "Fully registered with CIPC (2016/438625/07)",
    "Tax compliant with SARS regulations",
    "Comprehensive insurance coverage",
    "Adherence to SANS 10142-1 wiring code",
    "Regular safety inspections and testing"
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <FileText size={32} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Legal & Compliance Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official registration details and compliance information for FRAD ELECTRICAL SERVICE
          </p>
        </div>

        {/* Main Legal Info */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Registration Details */}
          <div className="card">
            <div className="flex items-center mb-6">
              <Building className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Company Registration</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center">
                  <Shield size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Business Status</span>
                </div>
                <span className="font-semibold text-green-600">Active in Business</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center">
                  <FileText size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Enterprise Number</span>
                </div>
                <span className="font-semibold text-blue-600">K2016438625</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center">
                  <FileText size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Registration Number</span>
                </div>
                <span className="font-semibold text-blue-600">2016/438625/07</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center">
                  <Building size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Legal Form</span>
                </div>
                <span className="font-semibold text-gray-800">Private Company</span>
              </div>

              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center">
                  <FileText size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Incorporation Date</span>
                </div>
                <span className="font-semibold text-gray-800">13 October 2016</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <MapPin size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">Jurisdiction</span>
                </div>
                <span className="font-semibold text-gray-800">South Africa</span>
              </div>
            </div>
          </div>

          {/* Director Information */}
          <div className="card">
            <div className="flex items-center mb-6">
              <User className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Officers & Management</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Director</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <User size={20} className="text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-bold text-gray-800">Vuadi Freddy Vangu</h4>
                      <p className="text-gray-600 text-sm">Director</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Directorship Details</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    Appointed since company incorporation in 2016
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    Registered with CIPC as company director
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    Certified electrical engineering professional
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle size={20} className="text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Verification Note</h4>
                    <p className="text-yellow-700 text-sm">
                      This information is based on official company registration records. For official verification, please contact CIPC (Companies and Intellectual Property Commission).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Address Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-700">Legal Address</h3>
              </div>
              <address className="text-gray-600 not-italic space-y-1">
                <p>13 MELBA STREET</p>
                <p>ROSETTENVILLE</p>
                <p>ROSETTENVILLE</p>
                <p>GAUTENG, 2190</p>
                <p>SOUTH AFRICA</p>
              </address>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-700">Mailing Address</h3>
              </div>
              <address className="text-gray-600 not-italic space-y-1">
                <p>13 MELBA STREET</p>
                <p>ROSETTENVILLE</p>
                <p>ROSETTENVILLE</p>
                <p>GAUTENG, 2190</p>
                <p>SOUTH AFRICA</p>
              </address>
              <p className="mt-4 text-gray-500 text-sm">
                Note: Legal and mailing addresses are identical
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Information */}
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center mb-6">
            <FileCheck className="text-blue-600 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-blue-900">Compliance & Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliancePoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-blue-200">
            <div className="flex items-start">
              <Shield size={20} className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Important Notice</h4>
                <p className="text-blue-800">
                  FRAD ELECTRICAL SERVICE operates in full compliance with South African electrical regulations. 
                  All work performed includes a Certificate of Compliance as required by the Occupational Health and Safety Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal