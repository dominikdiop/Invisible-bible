import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Loading from './components/UI/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';
import NotFound from './pages/NotFound';
import DigitalProject from './pages/DigitalProject';



function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('invisibleBibleTheme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Add a temporary class for smooth transition
    document.body.classList.add('theme-transitioning');
    
    // Change the theme
    setTheme(newTheme);
    localStorage.setItem('invisibleBibleTheme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Remove the transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      setIsTransitioning(false);
    }, 300);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Loading type="fullpage" text="Preparing the Invisible Bible..." />
      </div>
    );
  }
  

  return (
    
    <div className={`min-h-screen transition-all duration-300 ${isTransitioning ? 'opacity-90' : 'opacity-100'} ${
      theme === 'dark' 
        ? 'dark bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900 text-blue-300' 
        : 'bg-gradient-to-br from-purple-50 to-pink-50 text-black'
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} isTransitioning={isTransitioning} />
      <main className="transition-all duration-300">
        <Routes>
          <Route path="/" element={<Home theme={theme} isTransitioning={isTransitioning} />} />
          <Route path="/about" element={<About theme={theme} isTransitioning={isTransitioning} />} />
          <Route path="/contact" element={<Contact theme={theme} isTransitioning={isTransitioning} />} />
          <Route path="/books" element={<Books theme={theme} isTransitioning={isTransitioning} />} />
          <Route path="/digital" element={<DigitalProject theme={theme} isTransitioning={isTransitioning} />} />
          <Route path="*" element={<NotFound theme={theme} isTransitioning={isTransitioning} />} />
        </Routes>
      </main>
      <Footer theme={theme} isTransitioning={isTransitioning} />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <App />
    </Router>
  );
}