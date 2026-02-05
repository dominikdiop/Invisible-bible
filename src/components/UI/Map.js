// src/components/UI/Map.js
import React from 'react';

function Map() {
  // Coordinates for the map (you can change these to your location)
  const latitude = 40.7128;  // New York City coordinates
  const longitude = -74.0060;
  const zoom = 15;
  
  // OpenStreetMap URL
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01}%2C${latitude-0.01}%2C${longitude+0.01}%2C${latitude+0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`;
  
  const openInNewTab = () => {
    window.open(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${zoom}/${latitude}/${longitude}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/50">
      <h2 className="text-2xl font-bold mb-6">Visit Our Temple</h2>
      
      {/* Map Container */}
      <div className="relative h-80 rounded-xl overflow-hidden border border-gray-700 mb-6">
        <iframe
          title="Temple of Inner Vision Location"
          src={mapUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }}
        ></iframe>
        
        {/* Map Overlay Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">IB</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
          <p className="text-white text-sm font-medium">Temple of Inner Vision</p>
          <p className="text-gray-300 text-xs">Spiritual City</p>
        </div>
        
        {/* Map Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button 
            onClick={openInNewTab}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <span>📍</span>
            <span>Open Map</span>
          </button>
        </div>
      </div>
      
      {/* Location Details */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg">📍</span>
          </div>
          <div>
            <h3 className="font-bold">Address</h3>
            <p className="text-gray-300">123 Mystic Avenue</p>
            <p className="text-gray-300">Spiritual City, SC 12345</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🕒</span>
          </div>
          <div>
            <h3 className="font-bold">Hours</h3>
            <p className="text-gray-300">Monday-Friday: 9 AM - 6 PM</p>
            <p className="text-gray-300">Weekends: 10 AM - 4 PM</p>
          </div>
        </div>
        
        <button 
          onClick={openInNewTab}
          className="w-full btn-primary mt-4"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
}

export default Map;