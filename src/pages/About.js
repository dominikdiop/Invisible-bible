import React from 'react';

function About() {
  const imageCards = [
    {
      title: "Multiplication",
      description: "We seek the multiplication of those publishing presses once we finish building the capacity of the main press site!",
      imageUrl: "/images/about/engil.png",
      alt: "Ancient temple with mystical architecture"
    },
    {
      title: "Unexpected Experience",
      description: "While authorities and those who hate Jesus focus on digital content, such as on phones, we use outdated methods that go unnoticed by artificial intelligence!",
      imageUrl: "/images/about/phone.jpg",
      alt: "Group meditation in peaceful setting"
    },
    {
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
            Our <span className="neon-purple">New Dimension</span>
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
        <div className="mb-16">
          <div className="neon-card p-10 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 neon-purple text-center lg:text-left">
              Our Mission
            </h2>
            <div className="prose prose-xl lg:prose-2xl text-gray-700 max-w-none">
              <p className="mb-6 lg:mb-8 text-lg lg:text-xl leading-relaxed">
                In a world that is advancing by the day in data monitoring and tracking, our technology,
                perfected over many years, has made a safe and wise way of distributing
              </p>
              <p className="mb-6 lg:mb-8 text-lg lg:text-xl leading-relaxed">
                Bibles for different restricted countries.
                We have eliminated the fear of being discovered or traced using ordinary materials found in each country.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                This reassures us that we can continue our mission with confidence.
                Would you prayerfully consider partnering with us? Your decision to potentially support us is of great importance.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Dr. Joktan Card */}
          <div className="neon-card p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                {/* Replace with your actual image path */}
                <img
                  src="/images/about/joktan.jpg"
                  alt="Dr. Joktan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">Dr. Joktan</h3>
                <p className="text-gray-600">Founder</p>
                <p className="text-gray-700 mt-2">Minister of the Gospel</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-purple-500 pl-6 py-4">
              "The greatest truths cannot be written with ink on paper, but must be written
              with consciousness upon the soul. The Invisible Bible is not something you read—it's
              something you become through dedicated practice and sincere seeking."
            </blockquote>
          </div>

          {/* Raha M Card */}
          <div className="neon-card p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
                {/* Replace with your actual image path */}
                <img
                  src="/images/about/blur.png"
                  alt="Raha M"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">Raha M</h3>
                <p className="text-gray-600">Manager of the Invisible Bible</p>
                <p className="text-gray-700 mt-2">Operations & Community Support</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-500 pl-6 py-4">
              "It is my greatest joy to be able to help fellow believers from possible persecution
              for just reading scripture. Supporting their resilience and faith is vital, as this
              invisible Bible has helped many believers in my home country, Iran, and around MENA."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;