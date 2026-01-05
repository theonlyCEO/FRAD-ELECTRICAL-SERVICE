import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, Building, Wrench, Shield, Camera, Battery, 
  Power, DoorOpen, Fence, Package, FileCheck, Zap,
  CheckCircle, Phone
} from 'lucide-react'

const Services = () => {
  // Image URLs - Replace these with your actual image paths
  const serviceImages = [
    './WhatsApp Image 2026-01-05 at 21.28.58.jpeg', // Electrical Installation
    './WhatsApp%20Image%202026-01-05%20at%2021.29.08.jpeg?version%3D1767645064775', // Commercial
    './WhatsApp Image 2026-01-05 at 21.29.03.jpeg', // Repairs
    './WhatsApp Image 2026-01-05 at 21.29.25.jpeg', // Maintenance
    './5.png', // CCTV
    './WhatsApp Image 2026-01-05 at 21.29.23.jpeg', // Generator
    './7.png', // Meters
    './WhatsApp Image 2026-01-05 at 21.29.22.jpeg', // Garage Doors
    './9.png', // Fencing
    './10.png', // Equipment
    './11.png', // Supply
    './12.png', // Certificate
  ]

  const services = [
    {
      icon: Home,
      title: "Domestic Electrical Installation",
      description: "Complete house wiring, renovations, new installations, and Certificate of Compliance for residential properties.",
      features: ["Full house wiring", "Renovations", "New installations", "COC included"]
    },
    {
      icon: Building,
      title: "Commercial & Industrial Installation",
      description: "Electrical systems for businesses, factories, and commercial facilities including three-phase installations.",
      features: ["Commercial wiring", "Industrial systems", "Three-phase", "Factory installations"]
    },
    {
      icon: Wrench,
      title: "Fault Detection & Repairs",
      description: "Professional fault finding and repair services for all electrical systems with 24/7 emergency service.",
      features: ["Fault finding", "Emergency repairs", "24/7 service", "Quick response"]
    },
    {
      icon: Shield,
      title: "Maintenance Services",
      description: "Regular maintenance programs to ensure electrical system safety, efficiency, and compliance.",
      features: ["Regular checks", "Safety inspections", "System optimization", "Preventive maintenance"]
    },
    {
      icon: Camera,
      title: "Intercom & CCTV Camera Systems",
      description: "Installation and maintenance of security systems, CCTV cameras, and intercom systems.",
      features: ["CCTV installation", "Intercom systems", "Security setup", "Maintenance"]
    },
    {
      icon: Battery,
      title: "Generator & Inverter UPS Systems",
      description: "Automatic backup power system installation, including generators and inverter UPS systems.",
      features: ["Generator installation", "UPS systems", "Automatic switching", "Maintenance"]
    },
    {
      icon: Power,
      title: "Pre-paid & Standard Meter Installation",
      description: "Installation and maintenance of electricity meters, including prepaid systems and meter box upgrades.",
      features: ["Prepaid meters", "Standard meters", "Meter box upgrades", "Eskom compliance"]
    },
    {
      icon: DoorOpen,
      title: "Garage Door & Gate Motors",
      description: "Installation, repair, and maintenance of automated garage doors and gate motor systems.",
      features: ["Gate motors", "Garage doors", "Automation", "Repairs"]
    },
    {
      icon: Fence,
      title: "Electrical Fencing",
      description: "Professional electric fence installation and maintenance for residential and commercial security.",
      features: ["Electric fencing", "Security systems", "Perimeter protection", "Maintenance"]
    },
    {
      icon: Package,
      title: "Specialized Equipment Installation",
      description: "Installation and maintenance of bakery, catering, butchery, and industrial equipment.",
      features: ["Bakery equipment", "Catering equipment", "Butchery setup", "Industrial machines"]
    },
    {
      icon: Package,
      title: "Supply & Delivery of Materials",
      description: "Supply and delivery of quality electrical materials, components, and equipment.",
      features: ["Quality materials", "Reliable supply", "Fast delivery", "Competitive pricing"]
    },
    {
      icon: FileCheck,
      title: "Certificates of Compliance (COC)",
      description: "Official electrical compliance certification for all completed work as required by law.",
      features: ["Legal compliance", "Safety certification", "Documentation", "Peace of mind"]
    }
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Zap size={32} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Electrical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive professional electrical solutions for residential, commercial, and industrial clients in Johannesburg and Gauteng
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card group hover:border-blue-300 transition-all duration-300 overflow-hidden hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={serviceImages[index]} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    <service.icon size={20} />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features List */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        <CheckCircle size={12} className="mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <CheckCircle size={16} className="mr-2" />
                    Available Now
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Domestic Services */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="./domestic.png"
                alt="Domestic Services"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Domestic Services</h3>
                <p className="opacity-90">Home electrical solutions for residential properties</p>
              </div>
            </div>

            {/* Commercial Services */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                alt="Commercial Services"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Commercial Services</h3>
                <p className="opacity-90">Business and office electrical installations</p>
              </div>
            </div>

            {/* Industrial Services */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src="./industrial.png"
                alt="Industrial Services"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Industrial Services</h3>
                <p className="opacity-90">Factory and industrial electrical systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Phone size={48} className="text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a free consultation and competitive quote. 
              We serve residential, commercial, and industrial clients across Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-secondary inline-flex items-center justify-center text-lg py-3 px-8"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Request a Free Quote
              </Link>
              <a 
                href="tel:+271614290498" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center text-lg"
              >
                Call Now: +27 16 1429 0498
              </a>
            </div>
            <p className="mt-6 text-blue-200">
              24/7 Emergency Service Available • Free Consultations • Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services