import React from 'react';
import { Factory, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Factory className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Abhyuday Electricals</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium">
                Home
              </a>
              <a href="/about" className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium">
                About
              </a>
              <a href="/#products" className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium">
                Products
              </a>
              <a href="/#contact" className="text-white hover:text-blue-500 transition-colors px-3 py-2 font-medium">
                Contact
              </a>
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
            <a
              href="/"
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="/#products"
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium"
            >
              Products
            </a>
            <a
              href="/#contact"
              className="text-white hover:text-blue-500 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}