import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const fullVideoConfig = {
    id: "rE1136gXUKw",
    startTime: 39,
    endTime: 72,
    get embedUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1&mute=1&start=${this.startTime}&end=${this.endTime}&loop=1&playlist=${this.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;
    }
  };

  const whatsappUrl = "https://api.whatsapp.com/send?phone=17477772758&text=Hello";

  return (
    <div className="pt-16">
      {/* Hero Section with Big Background Video */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
        {/* Big Background YouTube Video - Full Screen */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[200%] min-h-[200%] scale-150 blur-md opacity-70"
            src={fullVideoConfig.embedUrl}
            title="Invisible Bible Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="text-center lg:text-left lg:pr-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-white">The Book</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mt-2">
                  No One Can See
                </span>
              </h1>

              <div className="relative inline-block mb-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
                <p className="relative text-lg lg:text-xl text-white font-medium p-3">
                  Let's make the Word invisible to those who hate Jesus!
                </p>
              </div>

              <p className="text-xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                Let's make the Word Visible to only those who are in <span className='text-red-500'>danger</span> because of their faith in <span className='text-blue-400'>Jesus</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link
                  to="/about"
                  className="btn-neon px-8 py-4 lg:px-10 lg:py-5 text-lg lg:text-xl"
                >
                  Unlock the Mystery
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline-neon px-8 py-4 lg:px-10 lg:py-5 text-lg lg:text-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Main Video (Clear) */}
            <div className="flex justify-center items-center">
              <div className="neon-card p-2 backdrop-blur-sm bg-white/10 border-white/20">
                <iframe
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl"
                  src={fullVideoConfig.embedUrl}
                  title="Invisible Bible - Spiritual Revelation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page remains the same from here... */}
      {/* Purchase Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="neon-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                {/* Book Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl text-white">📖</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold neon-purple">
                    Would you like to buy one?
                  </h2>
                </div>

                <p className="text-2xl md:text-3xl mb-8 leading-relaxed">
                  We print in many languages and sizes.
                </p>
                <p className="text-lg text-gray-700 mb-10">
                  With each copy sold, we will be able to print and ship an equivalent to
                  thousands of underground believers who are waiting for their copies
                  so they can read the scripture safely!
                </p>

                {/* Purchase Buttons */}
                <div className="space-y-4 mb-10">
                  <a
                    href="https://proclaimpublishers.com/collections/invisible-bible-products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-semibold rounded-full hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl">🛒</span>
                    <span>Buy Invisible Bible & Gospel</span>
                  </a>

                  <div className="text-center text-sm text-gray-600">
                    Available in multiple languages and formats
                  </div>
                </div>

                {/* Language Tags */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Available Languages:</h3>
                  <div className="flex flex-wrap gap-3">
                    {['English', 'Arabic', 'Mandarin Chineses', 'Bahasa Indonesia', 'Farsi'].map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-2 bg-purple-50 border border-purple-300 rounded-full text-purple-700 hover:border-purple-400 hover:bg-purple-100 transition-colors"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8">
                {/* WhatsApp Section */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Contact for Bulk Orders</h3>
                  <p className="text-gray-700 mb-8 max-w-md">
                    Get information about language availability, bulk pricing,
                    church distribution options, and underground church support.
                  </p>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-semibold rounded-full hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                  <span>Message for Bulk Orders</span>
                </a>

                {/* Purchase Links Section */}
                <div className="w-full max-w-md p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                  <h4 className="text-lg font-bold mb-4 text-center text-gray-800">Purchase Options</h4>
                  <div className="space-y-3">
                    <a
                      href="https://proclaimpublishers.com/collections/invisible-bible-products"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📚</span>
                        <span className="font-medium">Invisible Bible</span>
                      </div>
                      <span className="text-purple-600 font-semibold">Buy Now</span>
                    </a>

                    <a
                      href="https://proclaimpublishers.com/collections/invisible-bible-products"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">✝️</span>
                        <span className="font-medium">Invisible Gospel Of John</span>
                      </div>
                      <span className="text-purple-600 font-semibold">Buy Now</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📦</span>
                        <span className="font-medium">Bulk Orders</span>
                      </div>
                      <span className="text-green-600 font-semibold">Contact</span>
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Underground Church Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="neon-card p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Together We Can Make a Difference
            </h2>
            <p className="text-2xl md:text-3xl mb-10 leading-relaxed">
              Together, we can ultimately reach our goal of eradicating biblical illiteracy and establishing
              a publishing press in each restrictive country to help the underground church and isolated believers!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Secret Printing',
                  description: 'Establish hidden printing facilities in high-risk regions',
                  icon: '🖨️'
                },
                {
                  title: 'Safe Distribution',
                  description: 'Create secure networks for Bible distribution',
                  icon: '📦'
                },
                {
                  title: 'Digital Solutions',
                  description: 'Develop encrypted digital versions for secure sharing',
                  icon: '📱'
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-Size YouTube Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Witness the <span className="neon-purple">Invisible Truth</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the revelation that transforms understanding beyond physical sight
            </p>
          </div>

          <div className="neon-card p-2">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={fullVideoConfig.embedUrl}
                title="Full Invisible Bible Revelation"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Begin Your <span className="neon-purple">Journey</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            help thousands of seekers and isolated believers worldwide in reading the scripture safely through the invisible bible.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://meccatochrist.churchcenter.com/giving/to/invisible-bible"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-10 py-5 lg:px-12 lg:py-6 text-lg lg:text-xl"
            >
              Support the Vision
            </a>
            <Link
              to="/about"
              className="btn-outline-neon px-10 py-5 lg:px-12 lg:py-6 text-lg lg:text-xl"
            >
              Learn the Path
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;