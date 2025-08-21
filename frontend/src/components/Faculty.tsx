import React from 'react';
import { Mail, Award, BookOpen } from 'lucide-react';

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      position: 'Principal & Professor',
      department: 'Computer Science',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IIT Delhi, M.Tech from IIT Bombay',
      experience: '25+ years',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 'principal@asec.edu.in'
    },
    {
      name: 'Dr. Priya Gupta',
      position: 'Head of Department',
      department: 'Electronics & Communication',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IISc Bangalore, M.Tech from NIT Trichy',
      experience: '20+ years',
      specialization: 'VLSI Design, Embedded Systems',
      email: 'priya.gupta@asec.edu.in'
    },
    {
      name: 'Dr. Suresh Kumar',
      position: 'Professor',
      department: 'Mechanical Engineering',
      image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IIT Madras, M.Tech from IIT Kanpur',
      experience: '18+ years',
      specialization: 'Robotics, Manufacturing Technology',
      email: 'suresh.kumar@asec.edu.in'
    },
    {
      name: 'Dr. Anita Singh',
      position: 'Associate Professor',
      department: 'Civil Engineering',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IIT Roorkee, M.Tech from BITS Pilani',
      experience: '15+ years',
      specialization: 'Structural Engineering, Earthquake Engineering',
      email: 'anita.singh@asec.edu.in'
    },
    {
      name: 'Dr. Vikram Patel',
      position: 'Professor',
      department: 'Chemical Engineering',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IIT Kharagpur, M.Tech from ICT Mumbai',
      experience: '22+ years',
      specialization: 'Process Engineering, Green Technology',
      email: 'vikram.patel@asec.edu.in'
    },
    {
      name: 'Dr. Meera Joshi',
      position: 'Associate Professor',
      department: 'Information Technology',
      image: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400',
      qualifications: 'Ph.D. from IIIT Hyderabad, M.Tech from NIT Surat',
      experience: '12+ years',
      specialization: 'Data Science, Cybersecurity',
      email: 'meera.joshi@asec.edu.in'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians who are passionate about excellence in education
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Faculty Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Faculty Info */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{faculty.position}</p>
                  <p className="text-gray-500 text-sm">{faculty.department} Department</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Qualifications</h4>
                      <p className="text-gray-600 text-sm">{faculty.qualifications}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Experience</h4>
                      <p className="text-gray-600 text-sm">{faculty.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Specialization</h4>
                      <p className="text-gray-600 text-sm">{faculty.specialization}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <a 
                      href={`mailto:${faculty.email}`}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      {faculty.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Stats */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Faculty Excellence</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">150+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Faculty Members</h4>
              <p className="text-gray-600">Across all departments</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">85%</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">PhD Holders</h4>
              <p className="text-gray-600">Highly qualified faculty</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">500+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Research Papers</h4>
              <p className="text-gray-600">Published annually</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">50+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Industry Experts</h4>
              <p className="text-gray-600">Visiting faculty & guest lecturers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;