import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    // { id: 'campus', label: 'Campus Life' }, // Zyada scrollable ho gaya isliye comment kar diya hai
    { id: 'placements', label: 'Placements' },
    // { id: 'faculty', label: 'Faculty' }, // Zyada scrollable ho gaya isliye comment kar diya hai
    // { id: 'news', label: 'News & Events' }, // News & Events option comment kar diya hai
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className={
      activeSection === 'home'
        ? "fixed top-0 left-0 right-0 bg-transparent backdrop-blur-none z-50 transition-all duration-300"
        : "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300"
    }>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div
            className={`flex items-center space-x-3 cursor-pointer ${activeSection === 'home' ? '' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <div className={
              activeSection === 'home'
                ? "bg-white/20 p-2 rounded-lg"
                : "bg-blue-700 p-2 rounded-lg"
            }>
              <GraduationCap className={`w-6 h-6 ${activeSection === 'home' ? 'text-white' : 'text-white'}`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${activeSection === 'home' ? 'text-white' : 'text-gray-900'}`}>ASEC</h1>
              <p className={`text-xs ${activeSection === 'home' ? 'text-white/80' : 'text-gray-600'} hidden sm:block`}>Engineering Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === 'home'
                    ? `hover:text-orange-400 ${activeSection === item.id ? 'text-orange-400' : 'text-white'}`
                    : `hover:text-blue-700 ${activeSection === item.id ? 'text-blue-700' : 'text-gray-600'}`
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* Campus Life, Faculty, News & Events buttons commented out */}
            {/* <button>Campus Life</button> */}
            {/* <button>Faculty</button> */}
            {/* <button>News & Events</button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              activeSection === 'home'
                ? 'text-white hover:text-orange-400 hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 ${activeSection === 'home' ? 'bg-black/40' : ''} border-t border-gray-200`}>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-200 ${
                    activeSection === 'home'
                      ? `hover:text-orange-400 ${activeSection === item.id ? 'text-orange-400' : 'text-white'}`
                      : `hover:text-blue-700 ${activeSection === item.id ? 'text-blue-700' : 'text-gray-600'}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Campus Life, Faculty, News & Events buttons commented out */}
              {/* <button>Campus Life</button> */}
              {/* <button>Faculty</button> */}
              {/* <button>News & Events</button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;