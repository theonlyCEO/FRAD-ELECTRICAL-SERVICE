import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, Info, Briefcase, Phone, FileText, Menu, X, Hammer } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <Info size={18} /> },
    { path: '/services', label: 'Services', icon: <Briefcase size={18} /> },
    { path: '/renovations', label: 'Renovations', icon: <Hammer size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
    { path: '/legal', label: 'Legal', icon: <FileText size={18} /> },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="bg-gradient-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Company Name */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={handleLogoClick}
          >
            {/* Company Logo */}
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg p-2 shadow-lg group-hover:scale-105 transition-transform duration-300">
                {/* Replace this div with your actual logo image */}
                 <img 
                  src="./logo.png" 
                  alt="FRAD ELECTRICAL SERVICE Logo"
                  className="w-full h-full object-contain"
                /> 
                
                {/* Placeholder logo - Replace with your actual logo */}
                {/* <div className="w-full h-full flex items-center justify-center bg-blue-600 rounded">
                  <div className="text-center">
                    <span className="text-white font-bold text-sm md:text-base">FES</span>
                    <div className="w-4 h-0.5 bg-yellow-400 mx-auto mt-0.5"></div>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Company Name and Tagline */}
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold leading-tight">
                FRAD ELECTRICAL<br />SERVICE
              </h1>
              <p className="text-blue-200 text-xs md:text-sm mt-1">
                Electrical Contractors & Engineering
              </p>
            </div>
            
            {/* Mobile Company Name */}
            <div className="sm:hidden">
              <h1 className="text-lg font-bold">
                FRAD ELECTRICAL
              </h1>
              <p className="text-blue-200 text-xs">
                Service
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-800 text-yellow-300'
                          : 'hover:bg-blue-800 hover:text-yellow-200'
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-blue-800 text-yellow-300'
                          : 'hover:bg-blue-800 hover:text-yellow-200'
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header