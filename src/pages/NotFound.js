import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  // Background video configuration (same as Home page)
  const backgroundVideoConfig = {
    id: "rE1136gXUKw",
    startTime: 39,
    endTime: 72,
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1&mute=1&start=${this.startTime}&end=${this.endTime}&loop=1&playlist=${this.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;
    }
  };

  // Possible useful pages
  const usefulPages = [
    { path: "/", title: "Home", description: "Return to main page" },
    { path: "/books", title: "Books", description: "Browse available languages" },
    { path: "/about", title: "About", description: "Learn about our mission" },
    { path: "/contact", title: "Contact", description: "Get in touch with us" },
    { path: "/digital", title: "Digital", description: "Check Our Teams New Project" }

  ];

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[200%] min-h-[200%] scale-150 blur-lg opacity-40"
          src={backgroundVideoConfig.embedUrl}
          title="404 Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="eager"
        ></iframe>
      </div>

      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Error Message */}
            <div className="text-center lg:text-left">
              {/* Animated Error Number */}
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-20"></div>
                <h1 className="relative text-9xl md:text-[12rem] font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    4
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    0
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    4
                  </span>
                </h1>
              </div>

              {/* Error Icon */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center transform rotate-12">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl text-white" />
                </div>
              </div>

              {/* Main Message */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Page Not <span className="neon-purple">Found</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                The page you're looking for seems to have vanished into the invisible realm. 
                It might have been moved, deleted, or perhaps it never existed in this dimension.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/"
                  className="btn-neon px-8 py-4 text-lg flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span>Return Home</span>
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="btn-outline-neon px-8 py-4 text-lg flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Go Back</span>
                </button>
              </div>

              {/* Search Suggestion */}
              <div className="text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                  <FontAwesomeIcon icon={faSearch} className="text-purple-400" />
                  <span>Can't find what you need?</span>
                </h3>
                <p className="text-white/80 mb-4">
                  Try searching our site or check out the useful pages below.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for pages, books, or information..."
                    className="w-full px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-shadow">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Useful Links & Decoration */}
            <div className="space-y-8">
              {/* Useful Pages Card */}
              <div className="neon-card p-8">
                <h3 className="text-2xl font-bold mb-6 neon-purple">
                  Useful Pages You Might Like
                </h3>
                <div className="space-y-4">
                  {usefulPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="group flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div>
                        <h4 className="font-bold text-gray-800 group-hover:text-purple-600">
                          {page.title}
                        </h4>
                        <p className="text-sm text-gray-600">{page.description}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white transform group-hover:translate-x-2 transition-transform">
                        <span>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="neon-card p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">📖</span>
                </div>
                <h4 className="text-xl font-bold mb-3">The Invisible Bible</h4>
                <p className="text-gray-700 mb-4">
                  Even when things seem invisible, His Word is always present
                </p>
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
                >
                  <span>Explore Our Books</span>
                  <FontAwesomeIcon icon={faArrowLeft} className="rotate-180" />
                </Link>
              </div>

              {/* Contact Help */}
              <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-300/30 text-center">
                <h4 className="text-lg font-bold mb-2 text-white">Still Lost?</h4>
                <p className="text-white/80 mb-3">
                  Contact us directly for assistance
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=17477772758&text=Hello%20I%20need%20help%20finding%20a%20page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300"
                >
                  <span>💬 WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
            <div className="inline-block neon-card p-6 max-w-2xl">
              <p className="text-lg italic text-gray-700">
                "For now we see only a reflection as in a mirror; then we shall see face to face. 
                Now I know in part; then I shall know fully, even as I am fully known."
              </p>
              <p className="mt-4 font-semibold text-purple-600">— 1 Corinthians 13:12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default NotFound;