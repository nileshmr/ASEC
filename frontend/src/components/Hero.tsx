import React from 'react';
import { ArrowRight, Book, ChevronDown } from 'lucide-react'; // <-- Add ChevronDown
import Header from './Header'; // Add this import

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string; // Add this prop
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, activeSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header Overlay */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="ASEC Student" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-orange-400 font-medium text-lg tracking-wide uppercase">
                The Best Engineering College Of The State
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Afrin Sumeet</span>
                <span className="block text-orange-400">Engineering College</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 font-light max-w-2xl">
                Shaping Future Innovators Through Excellence in Engineering Education
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('admissions')}
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('academics')}
                className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Book className="w-5 h-5" /> {/*Changed icon here */}
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-white text-sm">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-white text-sm">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                  <div className="text-white text-sm">Alumni Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-white text-sm">Departments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-orange-400/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-blue-400/20 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;