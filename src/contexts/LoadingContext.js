// src/contexts/LoadingContext.js
import React, { createContext, useState, useContext } from 'react';
import Loading from '../components/UI/Loading';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loadingStates, setLoadingStates] = useState({
    global: false,
    page: false,
    form: false
  });
  const [loadingMessage, setLoadingMessage] = useState('Loading spiritual truths...');

  const showLoading = (type = 'global', message = 'Loading...') => {
    setLoadingMessage(message);
    setLoadingStates(prev => ({
      ...prev,
      [type]: true
    }));
  };

  const hideLoading = (type = 'global') => {
    setLoadingStates(prev => ({
      ...prev,
      [type]: false
    }));
  };

  const isLoading = loadingStates.global || loadingStates.page || loadingStates.form;

  return (
    <LoadingContext.Provider value={{ 
      showLoading, 
      hideLoading, 
      isLoading: loadingStates,
      loadingMessage 
    }}>
      {children}
      
      {/* Global Loading Overlay - Light Mode Version */}
      {loadingStates.global && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <Loading type="fullpage" text={loadingMessage} theme="light" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};