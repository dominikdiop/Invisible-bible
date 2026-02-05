// src/components/UI/Loading.js
import React from 'react';

function Loading({ type = 'default', text = 'Loading...', theme = 'light' }) {
  const isLight = theme === 'light';
  
  const containerClasses = {
    default: `inline-flex items-center justify-center space-x-2 ${isLight ? 'text-gray-800' : 'text-white'}`,
    fullpage: `flex flex-col items-center justify-center min-h-screen ${isLight ? 'text-gray-800' : 'text-white'}`,
    button: `inline-flex items-center justify-center space-x-2 ${isLight ? 'text-gray-800' : 'text-white'}`
  };

  const spinnerClasses = {
    default: `animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 ${isLight ? 'border-purple-600' : 'border-purple-400'}`,
    fullpage: `animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 ${isLight ? 'border-purple-600' : 'border-purple-400'}`,
    button: `animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 ${isLight ? 'border-purple-600' : 'border-purple-400'}`
  };

  const textClasses = {
    default: `text-lg font-medium ${isLight ? 'text-gray-800' : 'text-white'}`,
    fullpage: `text-2xl font-medium mt-6 ${isLight ? 'text-gray-800' : 'text-white'}`,
    button: `text-sm font-medium ${isLight ? 'text-gray-800' : 'text-white'}`
  };

  return (
    <div className={containerClasses[type]}>
      <div className={spinnerClasses[type]}></div>
      <div className={textClasses[type]}>{text}</div>
    </div>
  );
}

export default Loading;