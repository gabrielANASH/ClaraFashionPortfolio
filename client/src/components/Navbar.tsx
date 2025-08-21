import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Collections" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100" data-testid="navbar">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-playfair font-bold text-clara-pink" data-testid="logo">
            Clara
          </Link>
          
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`text-gray-700 hover:text-clara-pink transition-colors duration-300 font-medium ${
                    location === link.href ? 'text-clara-pink' : ''
                  }`}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100" data-testid="mobile-menu">
            <ul className="space-y-2 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`block py-2 text-gray-700 hover:text-clara-pink transition-colors duration-300 font-medium ${
                      location === link.href ? 'text-clara-pink' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
