import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(true); // Always visible, no animation

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with college image */}
      <div className="absolute inset-0">
        {/* Blur overlay - darker for better text visibility */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="ASEC College Campus" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16 lg:pt-20">
        <div className="space-y-8">
          {/* College Logo/Badge Animation */}
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20"></div>
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 border-4 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <span className="text-white font-bold text-xl relative z-10">ASEC</span>
              </div>
            </div>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block mb-2">Afrin Sumeet</span>
            <span className="text-orange-400 block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
              Engineering College
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl lg:text-3xl font-light mb-4 text-blue-100 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Shaping Future Innovators
          </p>
          
          <p className={`text-lg sm:text-xl mb-8 text-blue-200 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Excellence in engineering education, innovation in technology, and commitment to building tomorrow's leaders
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('admissions')}
              className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2 group"
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => scrollToSection('academics')}
              className="relative overflow-hidden border-2 border-white text-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-white transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-0"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;