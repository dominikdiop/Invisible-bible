import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGlobe } from '@fortawesome/free-solid-svg-icons';

function Books() {
  // Book data with images, titles, and purchase links
  const books = [
    {
      id: 1,
      title: "Invisible Gospel of John",
      language: "Bahasa Indonesia",
      imageUrl: "/images/books/Bahasa.webp", // Replace with your image path
      purchaseLink: "https://proclaimpublishers.com/products/invisible-gospel-of-john-bahasa-indonesia",
      languageCode: "ID"
    },
    {
      id: 2,
      title: "Invisible Gospel of John",
      language: "English",
      imageUrl: "/images/books/English.webp", // Replace with your image path
      purchaseLink: "https://proclaimpublishers.com/products/invisible-gospel-of-john-english-uv-ink-edition",
      languageCode: "EN"
    },
    {
      id: 3,
      title: "Invisible Gospel of John",
      language: "Arabic",
      imageUrl: "/images/books/Arabic.webp", // Replace with your image path
      purchaseLink: "https://proclaimpublishers.com/products/invisible-gospel-of-john-arabic",
      languageCode: "AR"
    },
    {
      id: 4,
      title: "Invisible Gospel of John",
      language: "Mandarin Chinese",
      imageUrl: "/images/books/Mandarin.webp", // Replace with your image path
      purchaseLink: "https://proclaimpublishers.com/products/invisible-gospel-of-john-mandarin-chineses",
      languageCode: "ZH"
    },
    {
      id: 5,
      title: "Invisible Gospel of John",
      language: "Farsi",
      imageUrl: "/images/books/Farsi.webp", // Replace with your image path
      purchaseLink: "https://proclaimpublishers.com/products/invisible-gosple-of-john-farsi-uv-ink-edition",
      languageCode: "FA"
    }
  ];

  // Background video configuration (similar to Home page)
  const backgroundVideoConfig = {
    id: "rE1136gXUKw",
    startTime: 39,
    endTime: 72,
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1&mute=1&start=${this.startTime}&end=${this.endTime}&loop=1&playlist=${this.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Background Video */}
      <section className="min-h-[60vh] flex items-center px-4 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[200%] min-h-[200%] scale-150 blur-md opacity-50"
            src={backgroundVideoConfig.embedUrl}
            title="Books Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">Invisible</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mt-2">
                Gospel of John
              </span>
            </h1>
            
            <p className="text-xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Available in multiple languages to reach believers in restricted nations
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-purple">
              Available Languages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each version is specially crafted for believers in high-risk regions
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
            {books.map((book) => (
              <a
                key={book.id}
                href={book.purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="neon-card p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                  {/* Book Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4]">
                    <img
                      src={book.imageUrl}
                      alt={`${book.title} - ${book.language}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Language Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {book.languageCode}
                      </span>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {book.language}
                    </p>
                    
                    {/* Purchase Button */}
                    <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                      <span>Get This Version</span>
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="transform group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Information */}
          <div className="neon-card p-10 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 neon-purple">
                  Why Multiple Languages?
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    In restricted nations where Christianity is persecuted, access to scripture 
                    in one's native language is crucial. Each translation is carefully adapted 
                    to local contexts while maintaining theological accuracy.
                  </p>
                  <p className="mb-4">
                    Our invisible technology ensures that believers can safely read and share 
                    the Gospel without fear of persecution or detection.
                  </p>
                  <p>
                    By providing scripture in native languages, we empower local churches and 
                    strengthen the faith of isolated believers.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Language Distribution Info */}
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faGlobe} className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Global Reach</h3>
                      <p className="text-gray-600">Available worldwide</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {books.map((book) => (
                      <div key={book.id} className="text-center p-3 bg-white rounded-lg">
                        <div className="text-sm font-semibold text-purple-700">{book.languageCode}</div>
                        <div className="text-xs text-gray-600">{book.language}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulk Order Info */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-3">Need Bulk Orders?</h3>
                  <p className="text-gray-700 mb-4">
                    For churches, ministries, or distribution networks requiring multiple copies
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=17477772758&text=Hello%20I%20need%20bulk%20orders%20for%20Invisible%20Bible"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
                  >
                    Contact for Bulk Pricing
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Empower <span className="neon-purple">Believers</span> Worldwide
          </h2>
          <p className="text-xl lg:text-2xl mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Your purchase helps provide free copies to underground churches and persecuted believers
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://proclaimpublishers.com/collections/invisible-bible-products"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-10 py-5 lg:px-12 lg:py-6 text-lg lg:text-xl"
            >
              Shop All Languages
            </a>
            <Link
              to="/"
              className="btn-outline-neon px-10 py-5 lg:px-12 lg:py-6 text-lg lg:text-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Books;