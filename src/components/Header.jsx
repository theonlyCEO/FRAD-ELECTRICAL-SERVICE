import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Zap, Home, Info, Briefcase, Phone, FileText, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <Info size={18} /> },
    { path: '/services', label: 'Services', icon: <Briefcase size={18} /> },
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3"
            onClick={handleLogoClick}
          >
            <Zap size={32} className="text-yellow-400" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">FRAD ELECTRICAL SERVICE</h1>
              <p className="text-blue-200 text-xs md:text-sm hidden sm:block">Electrical Contractors & Engineering</p>
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