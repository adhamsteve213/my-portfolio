import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import translations from './translations';

function App() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update document direction and font based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.style.fontFamily = language === 'ar'
      ? "'Cairo', sans-serif"
      : "'Poppins', sans-serif";
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-logo-wrapper">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="loader-logo" />
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring delay-1"></div>
          <div className="spinner-ring delay-2"></div>
        </div>
        <div className="loader-text-group">
          <span className="loader-loading-text">LOADING</span>
          <div className="loader-dots">
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
            <span className="loader-dot"></span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`App ${language === 'ar' ? 'rtl' : ''}`}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        translations={translations}
        theme={theme}
        setTheme={setTheme}
      />
      <Hero language={language} translations={translations} />
      <About language={language} translations={translations} />
      <Skills language={language} translations={translations} />
      <Projects language={language} translations={translations} />

      <Contact language={language} translations={translations} />
      <Footer language={language} translations={translations} />
    </div>
  );
}

export default App;
