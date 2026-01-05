import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, Camera, ZoomIn, ChevronLeft, ChevronRight, X,
  Star, CheckCircle, Clock, Users, Building, Award
} from 'lucide-react'

const Renovations = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Renovation project images - Replace with your actual images
  const renovationProjects = [
    {
      id: 1,
      title: "Modern Kitchen Electrical Renovation",
      description: "Complete electrical overhaul for a contemporary kitchen with smart lighting and appliance circuits",
      category: "Kitchen",
      image: "./WhatsApp Image 2026-01-05 at 21.29.27 (1).jpeg",
      features: ["LED Lighting", "Smart Outlets", "Appliance Circuits", "Safety Upgrades"]
    },
    {
      id: 2,
      title: "Living Room Electrical Upgrade",
      description: "Full electrical renovation with recessed lighting, entertainment center wiring, and modern switches",
      category: "Living Room",
      image: "./WhatsApp Image 2026-01-05 at 21.29.23 (2).jpeg",
      features: ["Recessed Lighting", "Entertainment Wiring", "Dimmer Switches", "USB Outlets"]
    },
    {
      id: 3,
      title: "Solar Panel Renovation",
      description: "setup of solar panel with safety compliance",
      category: "Outdoor",
      image: "./WhatsApp Image 2026-01-05 at 21.29.25.jpeg",
      features: ["Waterproof ", "Heated Rails", "GFCI Outlets", "Ventilation"]
    },
    {
      id: 4,
      title: "Complete House Renovation",
      description: "Full house electrical renovation for a 4-bedroom home with modern safety standards",
      category: "Full House",
      image: "./WhatsApp Image 2026-01-05 at 21.29.26.jpeg",
      features: ["Full Rewiring", "Circuit Panel Upgrade", "Safety Compliance", "Energy Efficient"]
    },
    {
      id: 5,
      title: "Gate Installation",
      description: "Landscape and outdoor electrical system installation for enhanced security and aesthetics",
      category: "Outdoor",
      image: "./WhatsApp Image 2026-01-05 at 21.29.22 (1).jpeg",
      features: ["Landscape Lighting", "Security ", "Weatherproof Outlets", "Automated Controls"]
    },
    {
      id: 6,
      title: "Home Office Electrical Setup",
      description: "Specialized electrical installation for a modern home office with multiple workstations",
      category: "Home Office",
      image: "./WhatsApp Image 2026-01-05 at 21.29.23.jpeg",
      features: ["Multiple Circuits", "Network Wiring", "Task Lighting", "Power Management"]
    }
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction) => {
    let newIndex = lightboxIndex + direction
    if (newIndex < 0) newIndex = renovationProjects.length - 1
    if (newIndex >= renovationProjects.length) newIndex = 0
    setLightboxIndex(newIndex)
    setSelectedImage(renovationProjects[newIndex].image)
  }

  // Add this useEffect inside the Renovations component
useEffect(() => {
  const handleKeyDown = (e) => {
    if (!selectedImage) return
    
    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowLeft':
        navigateLightbox(-1)
        break
      case 'ArrowRight':
        navigateLightbox(1)
        break
      default:
        break
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [selectedImage, lightboxIndex])

  // Get unique categories
  const categories = [...new Set(renovationProjects.map(project => project.category))]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <Home size={32} className="text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electrical Renovation Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing our professional electrical renovation work for homes and businesses across Johannesburg
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-2">
                <Award className="text-yellow-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-2">
                <Clock className="text-green-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">9+ Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-2">
                <Users className="text-blue-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certified</h3>
              <p className="text-gray-600">Technicians</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-2">
                <Building className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">COC Compliant</p>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              All Projects
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {renovationProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(project.image, index)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
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

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Camera size={16} className="mr-2" />
                    <span className="text-sm">Professional Installation</span>
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Get Similar Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose FRAD for Your Renovation?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Workmanship</h3>
                <p className="opacity-90">9+ years of professional electrical renovation experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">COC Certified</h3>
                <p className="opacity-90">All work includes Certificate of Compliance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
                <p className="opacity-90">We use only SABS-approved electrical materials</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and quote for your electrical renovation project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-secondary inline-flex items-center justify-center text-lg py-3 px-8"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Free Renovation Quote
            </Link>
            <a 
              href="tel:+271614290498" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-lg"
            >
              Call: +27 16 1429 0498
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateLightbox(-1)}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateLightbox(1)}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full p-4">
            <img 
              src={selectedImage} 
              alt="Renovation project"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold">
                {renovationProjects[lightboxIndex]?.title}
              </p>
              <p className="text-sm opacity-80 mt-1">
                Image {lightboxIndex + 1} of {renovationProjects.length}
              </p>
            </div>
          </div>

          {/* Keyboard Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70">
            Press ESC to close • Use arrow keys to navigate
          </div>
        </div>
      )}
    </div>
  )
}

export default Renovations