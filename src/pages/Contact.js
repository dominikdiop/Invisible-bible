import React, { useState } from 'react';

function Contact() { 
  const FORMSPREE_FORM_ID = "info@invisible.bible";
  
  const contactInfo = {
    address: "1317 Edgewater Dr STE 4774, Orlando, FL 32804, United States",
    email: "info@invisible.bible",
    whatsapp: "https://wa.link/q3xmm0",
    mapLocation: {
      lat: 28.538336,
      lng: -81.379234,
      zoom: 15
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Invisible Bible Contact: ${formData.subject}`
        })
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Connection error. Please try again or use alternative contact methods.');
    } finally {
      setIsLoading(false);
    }
  };

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${contactInfo.mapLocation.lng-0.01}%2C${contactInfo.mapLocation.lat-0.01}%2C${contactInfo.mapLocation.lng+0.01}%2C${contactInfo.mapLocation.lat+0.01}&layer=mapnik&marker=${contactInfo.mapLocation.lat}%2C${contactInfo.mapLocation.lng}`;

  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-purple">
            Contact the Seekers
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Reach out to us for biblical guidance, language inquiries, or underground church support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="neon-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-white">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Message Sent!</h3>
                  <p className="text-gray-700 mb-6">We'll respond within 24-48 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-purple-500 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                      <p className="text-red-700">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          required
                          disabled={isLoading}
                        />
                      </div>
                      
                      <div>
                        <label className="block mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        disabled={isLoading}
                      >
                        <option value="">Select a topic</option>
                        <option value="spiritual-guidance">Spiritual Guidance</option>
                        <option value="language-inquiry">Language/Printing Inquiry</option>
                        <option value="underground-church">Underground Church Support</option>
                        <option value="donation">Donation Question</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block mb-2">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        required
                        disabled={isLoading}
                        placeholder="Share your thoughts or questions..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full py-4 btn-neon ${isLoading ? 'opacity-70' : ''}`}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="neon-card p-8">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-700">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-xl overflow-hidden border border-gray-300">
                <iframe
                  title="Invisible Bible Orlando Location"
                  src={mapUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">Invisible Bible HQ</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors"
                >
                  <span>📍</span>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="neon-card p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-purple-600 hover:text-purple-700 transition-colors text-lg"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Direct email contact</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <a 
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 transition-colors text-lg"
                    >
                      Message us on WhatsApp
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Quick responses</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Response Time</h3>
                    <p className="text-gray-700">24-48 hours</p>
                    <p className="text-gray-600 text-sm mt-1">Urgent matters prioritized</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-300">
              <h2 className="text-2xl font-bold mb-6">Alternative Contact</h2>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block w-full py-4 btn-neon text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>📧</span>
                    <span>Email Directly</span>
                  </div>
                </a>
                
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>💬</span>
                    <span>WhatsApp Chat</span>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-purple-300">
                <p className="text-gray-600 text-sm">
                  <span className="text-purple-600 font-medium">Note:</span> For sensitive communications regarding 
                  underground church support, please use encrypted email or secure messaging.
                </p>
              </div>
            </div>

            <div className="neon-card p-8">
              <h2 className="text-2xl font-bold mb-4">Quick Support</h2>
              <p className="text-gray-700 mb-6">
                Need immediate assistance with language translations or underground church resources?
              </p>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${contactInfo.email}?subject=URGENT:%20Language%20Support`}
                  className="block py-3 px-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center"
                >
                  🚨 Language/Printing Urgent
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}?subject=URGENT:%20Underground%20Church`}
                  className="block py-3 px-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center"
                >
                  ⚡ Underground Church Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;