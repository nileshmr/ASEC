import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API.BASE_URL}/api/contact`, formData);
      setSuccessMsg('Thank you for reaching out! We will contact you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Hide message after 3 seconds
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (error: any) {
      setSuccessMsg(error?.response?.data?.error || 'Failed to submit. Please try again.');
      setTimeout(() => setSuccessMsg(null), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any assistance you need
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      ASEC Campus<br />
                      Pirahibagh, Daudnagar<br />
                      Aurangabad - 824143<br />
                      Bihar, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">
                      Main: +91 82 7137 4267<br />
                      Admissions: +91 80 1234 5679<br />
                      Emergency: +91 80 1234 5680
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">
                      General: info@asec.edu.in<br />
                      Admissions: admissions@asec.edu.in<br />
                      Careers: careers@asec.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="campus">Campus Visit</option>
                      <option value="career">Career Guidance</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    * Required fields
                  </p>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>
                </div>

                {/* Success/Error popup message below the button */}
                {successMsg && (
                  <div className={`mt-4 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300
                    ${successMsg.startsWith('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {successMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">ASEC Campus Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
