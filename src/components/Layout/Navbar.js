import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/books', label: 'Books' },
    { path: '/Digital', label: 'Digital' },
    { path: '/contact', label: 'Contact' },
    { 
      type: 'external', 
      url: 'https://meccatochrist.churchcenter.com/giving/to/invisible-bible', 
      label: 'Donate',
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-purple-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/about/neonn.png" alt='Invisible Bible Logo' width={120} height={120} />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.type === 'external' ? (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium text-black hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-purple-600 font-bold' 
                      : 'text-black hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-purple-50 text-purple-600"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-200 bg-white">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.type === 'external' ? (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-black hover:bg-purple-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg ${
                      location.pathname === item.path 
                        ? 'bg-purple-50 text-purple-600 font-bold' 
                        : 'text-black hover:bg-purple-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;