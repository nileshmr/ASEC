import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickHighlights from './components/QuickHighlights';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
// import CampusLife from './components/CampusLife'; // Zyada scrollable ho gaya isliye comment karna pad raha hai
import Placements from './components/Placements';
// import Faculty from './components/Faculty'; // Zyada scrollable ho gaya isliye comment karna pad raha hai
// import NewsEvents from './components/NewsEvents'; // News & Events section remove kar diya hai
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'admissions', 'campus', 'placements', 'faculty', 'news', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleShowTopBtn = () => {
      const scrollY = window.scrollY;
      const halfHeight = (document.documentElement.scrollHeight - window.innerHeight) / 2;
      setShowTopBtn(scrollY > halfHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleShowTopBtn);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleShowTopBtn);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
          <QuickHighlights />
        </section>
        
        <section id="about">
          <AboutUs />
        </section>
        
        <section id="academics">
          <Academics />
        </section>
        
        <section id="admissions">
          <Admissions />
        </section>
        
        {/* <section id="campus">
          <CampusLife />
        </section> */}
        {/* Campus Life section comment kar diya hai, zyada scrollable ho gaya isliye */}

        <section id="placements">
          <Placements />
        </section>
        
        {/* <section id="faculty">
          <Faculty />
        </section> */}
        {/* Our Distinguished Faculty section remove kar diya hai */}

        {/* <section id="news">
          <NewsEvents />
        </section> */}
        {/* News & Events section remove kar diya hai */}
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
      {/* Bottom to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center"
          aria-label="Back to Top"
        >
          {/* Up Arrow Circle SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
            <path stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l4-4 4 4M12 16V10" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;