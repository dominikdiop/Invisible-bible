import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/books', label: 'Books' },
    { path: '/digital', label: 'Digital' },
    { path: '/contact', label: 'Contact' },
    { 
      type: 'external', 
      url: 'https://meccatochrist.churchcenter.com/giving/to/invisible-bible', 
      label: 'Donate',
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b shadow-lg transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900/90 border-blue-500/30 text-blue-300' 
        : 'bg-white/90 border-purple-200 text-black'
    }`}>
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
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:scale-105 ${
                    theme === 'dark'
                      ? 'text-blue-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]'
                      : 'text-black hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:scale-105 ${
                    location.pathname === item.path 
                      ? theme === 'dark'
                        ? 'text-cyan-300 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]'
                        : 'text-purple-600 font-bold'
                      : theme === 'dark'
                        ? 'text-blue-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]'
                        : 'text-black hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Theme Toggle Button - Blue themed */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-blue-900/40 text-cyan-300 hover:bg-blue-800/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'bg-purple-100 text-gray-800 hover:bg-purple-200'
              }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <span className="flex items-center gap-2">
                  <span className="text-lg">☀️</span>
                  <span className="text-xs">Light</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="text-lg">🌙</span>
                  <span className="text-xs">Dark</span>
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-blue-900/40 text-cyan-300'
                  : 'bg-purple-100 text-gray-800'
              }`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                theme === 'dark'
                  ? 'bg-blue-900/40 text-blue-300 hover:bg-blue-800/40'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
            theme === 'dark' 
              ? 'border-blue-500/30 bg-gray-900/90 text-blue-300' 
              : 'border-purple-200 bg-white text-black'
          }`}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.type === 'external' ? (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-blue-900/30 hover:text-cyan-300'
                        : 'hover:bg-purple-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? theme === 'dark'
                          ? 'bg-blue-900/30 text-cyan-300 font-bold'
                          : 'bg-purple-50 text-purple-600 font-bold'
                        : theme === 'dark'
                          ? 'hover:bg-blue-900/30 hover:text-cyan-300'
                          : 'hover:bg-purple-50'
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