// frontend/Admission.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faFileAlt,
  faCheckCircle,
  faUser,
  faPhone,
  faEnvelope,
  faBirthdayCake,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const Admissions: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    course: '',
    category: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [assignedRoll, setAssignedRoll] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [downloadPopup, setDownloadPopup] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data } = await axios.post('http://localhost:5000/api/register', formData);
      setAssignedRoll(data?.rollNumber || null);
      setPopupVisible(true);
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        dob: '',
        course: '',
        category: ''
      });
      setCurrentStep(1);
      
      // Popup visible for 2000ms (2 seconds)
      setTimeout(() => {
        setPopupVisible(false);
        // Wait for fade out animation before completely hiding
        setTimeout(() => {
          setShowPopup(false);
          setAssignedRoll(null);
        }, 500);
      }, 2000);
    } catch (error: any) {
      alert(error?.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    // Wait for fade out animation before completely hiding
    setTimeout(() => {
      setShowPopup(false);
      setAssignedRoll(null);
    }, 500);
  };

  const handleProspectusClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadPopup({ message: "We don't have any brochure, we'll update soon.", visible: true });
    setTimeout(() => setDownloadPopup({ message: '', visible: false }), 2000);
  };

  const handleApplicationFormClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadPopup({ message: "We'll share the application form soon.", visible: true });
    setTimeout(() => setDownloadPopup({ message: '', visible: false }), 2000);
  };

  // Validation for Step 1 fields
  const isStep1Valid =
    formData.name.trim() &&
    formData.phone.trim() &&
    formData.email.trim() &&
    formData.dob.trim();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions 2024</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join ASEC and embark on your journey towards engineering excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Admission Process */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Admission Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Application</h4>
                  <p className="text-gray-600">Submit online application with required documents and pay application fee</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Entrance Exam</h4>
                  <p className="text-gray-600">Appear for JEE Main or state-level entrance examination</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Counselling</h4>
                  <p className="text-gray-600">Participate in counselling process and seat allotment</p>
                </div>
              </div>
            </div>

            {/* Key Dates */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Application Start</span>
                  <span className="text-blue-600 font-semibold">March 1, 2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Application Deadline</span>
                  <span className="text-orange-600 font-semibold">May 15, 2024</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Classes Begin</span>
                  <span className="text-green-600 font-semibold">August 1, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Student Registration</h3>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon icon={faPhone} className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FontAwesomeIcon icon={faBirthdayCake} className="w-4 h-4 inline mr-2" />
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Course Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Course Selection</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a course</option>
                      <option value="cse">B.Tech Computer Science & Engineering</option>
                      <option value="ece">B.Tech Electronics & Communication</option>
                      <option value="mech">B.Tech Mechanical Engineering</option>
                      <option value="civil">B.Tech Civil Engineering</option>
                      <option value="chemical">B.Tech Chemical Engineering</option>
                      <option value="it">B.Tech Information Technology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="general">General</option>
                      <option value="obc">OBC</option>
                      <option value="sc">SC</option>
                      <option value="st">ST</option>
                      <option value="pwd">PWD</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>

                {currentStep === 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors ${
                      !isStep1Valid ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!isStep1Valid}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      submitting
                        ? 'bg-green-300 text-white cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {submitting ? 'Submitting…' : 'Submit Registration'}
                  </button>
                )}
              </div>
            </form>

            {/* Beautiful Popup Notification */}
            {showPopup && (
              <div
                className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
                  popupVisible 
                    ? 'opacity-100 bg-black/40' 
                    : 'opacity-0 bg-transparent pointer-events-none'
                }`}
              >
                <div 
                  className={`bg-white rounded-xl shadow-2xl p-6 max-w-md w-11/12 mx-4 transform transition-all duration-500 ${
                    popupVisible 
                      ? 'translate-y-0 scale-100 opacity-100' 
                      : 'translate-y-10 scale-95 opacity-0'
                  }`}
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                  </button>
                  
                  {/* Success icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="w-10 h-10 text-green-500" 
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Registration Successful!
                  </h3>
                  
                  {/* Message */}
                  <p className="text-gray-600 text-center mb-4">
                    Thank you for registering with ASEC. A confirmation email has been sent to your inbox with your roll number and further instructions.
                  </p>
                  
                  {/* Roll number display (if available) */}
                  {assignedRoll && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800 text-center font-medium">
                        Your Roll Number: <span className="font-bold">{assignedRoll}</span>
                      </p>
                    </div>
                  )}
                  
                  {/* Progress bar for auto-dismiss */}
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-5000 ease-linear"
                      style={{ width: popupVisible ? '0%' : '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Eligibility & Downloads */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Passed 12th standard with Physics, Chemistry, and Mathematics</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Minimum 75% aggregate marks (70% for SC/ST candidates)</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Valid JEE Main score or state entrance exam rank</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Age limit: 17-25 years as on admission date</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Downloads</h3>
            <div className="space-y-4">
              <a
                href="#"
                onClick={handleProspectusClick}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-blue-600" />
                <div>
                  <span className="font-medium text-gray-900">Prospectus 2024</span>
                  <p className="text-sm text-gray-600">Complete information brochure</p>
                </div>
              </a>
              <a
                href="#"
                onClick={handleApplicationFormClick}
                className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <FontAwesomeIcon icon={faFileAlt} className="w-6 h-6 text-orange-600" />
                <div>
                  <span className="font-medium text-gray-900">Application Form</span>
                  <p className="text-sm text-gray-600">Downloadable application form</p>
                </div>
              </a>
            </div>
            {/* Popup for downloads, shown at the bottom */}
            {downloadPopup.visible && (
              <div className="fixed left-0 right-0 bottom-6 flex justify-center z-40">
                <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow font-semibold transition-all duration-300">
                  {downloadPopup.message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;