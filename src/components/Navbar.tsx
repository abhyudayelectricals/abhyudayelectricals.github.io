import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/media/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-white">Abhyuday Electricals</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium"
              >
                Home
              </button>
              <Link to="/about" className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium">
                About
              </Link>
              <button 
                onClick={() => handleSectionClick('products')} 
                className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => handleSectionClick('contact')} 
                className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-500 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <button
              onClick={handleHomeClick}
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <Link
              to="/about"
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <button
              onClick={() => handleSectionClick('products')}
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Products
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}