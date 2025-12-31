import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Shield, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">FRAD ELECTRICAL SERVICE</h3>
            <p className="text-gray-300 mb-4">Professional Electrical Contractors and Engineering Services</p>
            <div className="flex items-start space-x-2 mb-2">
              <Shield size={18} className="text-yellow-400 mt-1" />
              <span className="text-sm">Reg. No: 2016/438625/07</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-yellow-300 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 transition-colors">Get a Quote</Link></li>
              <li><Link to="/legal" className="hover:text-yellow-300 transition-colors">Legal Information</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <span className="text-sm">Johannesburg, Gauteng, South Africa, 2190</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-yellow-400 mt-1" />
                <div>
                  <p className="text-sm">Tel: 010 163 4212</p>
                  <p className="text-sm">Cell: +27 16 1429 0498</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-yellow-400 mt-1" />
                <span className="text-sm">projectfes@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-yellow-400" />
                <div>
                  <p className="text-sm">Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p className="text-sm">Saturday: 8:00 AM - 1:00 PM</p>
                  <p className="text-sm text-yellow-300 font-medium">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} FRAD ELECTRICAL SERVICE. All rights reserved. | Registered Company: 2016/438625/07
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 