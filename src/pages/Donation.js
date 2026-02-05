// src/pages/Donation.js
import React, { useState } from 'react';

function Donation({ theme }) { 
  const [donationAmount, setDonationAmount] = useState(25);
  const [donationType, setDonationType] = useState('one-time');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', { donationAmount, donationType });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDonationAmount(25);
      setDonationType('one-time');
    }, 3000);
  };

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
          Support the Vision
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/50">
            <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
            
            {submitted ? (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-4">Your energetic contribution is received.</p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-lg">Amount: <span className="font-bold">${donationAmount}</span></p>
                  <p className="text-lg">Type: <span className="font-bold">{donationType === 'one-time' ? 'One-Time' : 'Monthly'}</span></p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-300 mb-4">Select Amount</label>
                  <div className="grid grid-cols-3 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount)}
                        className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
                          donationAmount === amount
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-300 mb-2">Custom Amount</label>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      min="1"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-4">Donation Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={donationType === 'one-time'}
                        onChange={() => setDonationType('one-time')}
                        className="text-purple-600"
                      />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        checked={donationType === 'monthly'}
                        onChange={() => setDonationType('monthly')}
                        className="text-purple-600"
                      />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Donation Amount:</span>
                    <span className="font-bold">${donationAmount}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-purple-400">${donationAmount}</span>
                  </div>
                </div>
                
                <button type="submit" className="w-full btn-primary">
                  {donationType === 'monthly' ? 'Start Monthly Support' : 'Make Donation'}
                </button>
                
                <p className="text-sm text-gray-400 mt-4 text-center">
                  All donations support the spiritual mission of the Invisible Bible.
                </p>
              </form>
            )}
          </div>
          
          {/* Why Donate */}
          <div>
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-gray-700/50 mb-8">
              <h2 className="text-2xl font-bold mb-6">Why Your Support Matters</h2>
              <p className="text-gray-300 mb-6">
                The Invisible Bible is not a commercial endeavor. It exists through the collective 
                energy and support of seekers who value spiritual truth beyond material constraints.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: '🌍',
                    title: 'Global Reach',
                    description: 'Help us reach seekers worldwide regardless of circumstances.'
                  },
                  {
                    icon: '📚',
                    title: 'Preserve Wisdom',
                    description: 'Contribute to preserving invisible wisdom for future generations.'
                  },
                  {
                    icon: '👁️',
                    title: 'Develop Inner Sight',
                    description: 'Support programs that help seekers develop spiritual perception.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-2xl border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-4 text-center">The Energetic Exchange</h2>
              <p className="text-gray-300 text-center">
                In the realm of invisible truths, support is not measured in currency but in intention. 
                Your contribution creates vibrational alignment that supports the entire community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;