import React from 'react';
import { Factory } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Factory className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Abhyuday Electricals</span>
            </div>
            <p className="text-gray-400">
              Powering India's Future with Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('products')}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('contact')}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              Abhyuday Electricals Pvt. Ltd.<br />
              Industrial Area<br />
              Your City, State, India<br /><br />
              <a href="tel:+910000000000" className="hover:text-blue-500">
                +91 (000) 000-0000
              </a><br />
              <a href="mailto:info@abhyudayelectricals.com" className="hover:text-blue-500">
                info@abhyudayelectricals.com
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Abhyuday Electricals Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}