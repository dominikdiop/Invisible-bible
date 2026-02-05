import React from 'react';

function About() {
  const imageCards = [
    {
      id: 1,
      title: "Multiplication",
      description: "We seek multiplication of those publishing press, to train others within country or adjacent countries!",
      imageUrl: "/images/about/engil.png",
      alt: "Ancient temple with mystical architecture"
    },
    {
      id: 2,
      title: "Unexpected Experience",
      description: "While authorities and those who hate Jesus look on phones, we use ordinary method un-noticed to the naked eyes!",
      imageUrl: "/images/about/phone.jpg",
      alt: "Group meditation in peaceful setting"
    },
    {
      id: 3,
      title: "The New Dimension",
      description: "Casting the constant fear of being discovered by authorities or family members away with this technology!",
      imageUrl: "/images/about/john.jpg",
      alt: "Ancient books and scrolls"
    }
  ];

  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center neon-purple">
          About the Invisible Bible
        </h1>

        {/* Image Cards Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our <span className="neon-purple">Sacred Spaces</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {imageCards.map((card) => (
              <div key={card.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 h-64 neon-card">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">{card.id}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  </div>
                </div>

                <div className="p-4 neon-card">
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="neon-card p-8">
            <h2 className="text-2xl font-bold mb-6 neon-purple">Our Mission</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                In a world that is advancing by the day in data monitoring and tracking, our technology,
                perfected over many years, has made a safe and wise way of distributing
              </p>
              <p className="mb-4">
                Bibles for different restricted countries.
                We have eliminated the fear of being discovered or traced using ordinary materials found in each country. This reassures us
              </p>
              <p>
                that we can continue our mission with confidence.
                Would you prayerfully consider partnering with us? Your decision to potentially support us is of great importance.
              </p>
            </div>
          </div>

          <div className="neon-card p-8">
            <h2 className="text-2xl font-bold mb-6 neon-purple">Our Philosophy</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">👁️</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Inner Vision Over Physical Sight</h3>
                  <p className="text-gray-700">We believe true perception comes from developing spiritual sight beyond physical senses.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">🤝</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Community Wisdom</h3>
                  <p className="text-gray-700">Truth reveals itself through shared experiences and collective spiritual practice.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-white">🌱</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Continuous Growth</h3>
                  <p className="text-gray-700">The spiritual journey is never complete—each discovery leads to deeper understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Message */}
        <div className="neon-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <span className="text-3xl font-bold text-white">MV</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Dr. Joktan</h3>
              <p className="text-gray-600">Founder & Spiritual Guide</p>
              <p className="text-gray-700 mt-2">spiritual teaching and guidance</p>
            </div>
          </div>
          <blockquote className="text-xl italic text-gray-700 border-l-4 border-purple-500 pl-6 py-4">
            "The greatest truths cannot be written with ink on paper, but must be written
            with consciousness upon the soul. The Invisible Bible is not something you read—it's
            something you become through dedicated practice and sincere seeking."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default About;