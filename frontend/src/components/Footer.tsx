import axios from 'axios';
import React, { useState } from 'react';
// Remove lucide-react imports
// import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// Add Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [popupMsg, setPopupMsg] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/newsletter', { email: newsletterEmail });
      setPopupMsg(data.message || 'Subscribed successfully.');
      setPopupVisible(true);
      setNewsletterEmail('');
    } catch (error: any) {
      setPopupMsg(error?.response?.data?.error || 'Subscription failed.');
      setPopupVisible(true);
    } finally {
      setSubmitting(false);
      // Auto-hide popup after 2 seconds
      setTimeout(() => {
        setPopupVisible(false);
        setPopupMsg(null);
      }, 2000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ASEC</h3>
                <p className="text-gray-400">Afrin Sumeet Engineering College</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Excellence in engineering education, innovation in technology, and commitment to building tomorrow's leaders. 
              Join us in shaping the future of technology and engineering.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Daudnagar, Aurangabad, Bihar</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 8271374267</span>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">info@asec.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'academics', label: 'Academics' },
                { id: 'admissions', label: 'Admissions' },
                { id: 'faculty', label: 'Faculty' },
                { id: 'placements', label: 'Placements' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates</p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  {submitting ? (
                    <FontAwesomeIcon icon={faSpinner} className="w-5 h-5 animate-spin" />
                  ) : (
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                  )}
                </button>
              </form>
              {/* Popup message */}
              {popupVisible && (
                <div
                  className={`mt-2 text-sm text-center rounded-lg py-2 px-4 transition-opacity duration-300
                    ${popupMsg === 'Already subscribed from this email.' ? 'bg-red-100 text-red-700' : ''}
                    ${popupMsg === 'Subscribed successfully.' ? 'bg-green-100 text-green-700' : ''}
                    ${(!['Already subscribed from this email.', 'Subscribed successfully.'].includes(popupMsg || '')) ? 'bg-gray-800 text-white' : ''}
                  `}
                >
                  {popupMsg}
                </div>
              )}
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 mb-4">Follow us on</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-sky-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 Afrin Sumeet Engineering College. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;