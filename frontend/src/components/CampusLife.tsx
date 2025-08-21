import React from 'react';
import { Users, Trophy, Music, Heart, Utensils, Home } from 'lucide-react';

const CampusLife: React.FC = () => {
  const facilities = [
    {
      icon: Home,
      title: 'Modern Hostels',
      description: 'Comfortable accommodation with Wi-Fi, study areas, and recreational facilities',
      color: 'blue'
    },
    {
      icon: Utensils,
      title: 'Dining Facilities',
      description: 'Nutritious meals with diverse cuisines in our spacious dining halls',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Student Clubs',
      description: '25+ active clubs covering technology, arts, sports, and social service',
      color: 'green'
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      description: 'State-of-the-art sports facilities including gym, courts, and fields',
      color: 'purple'
    },
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Annual festivals, competitions, and cultural programs throughout the year',
      color: 'red'
    },
    {
      icon: Heart,
      title: 'Health Center',
      description: '24/7 medical facility with qualified doctors and emergency services',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', icon: 'bg-blue-500' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'bg-orange-500' },
      green: { bg: 'bg-green-100', text: 'text-green-600', icon: 'bg-green-500' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', icon: 'bg-purple-500' },
      red: { bg: 'bg-red-100', text: 'text-red-600', icon: 'bg-red-500' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', icon: 'bg-pink-500' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life with world-class facilities and endless opportunities for growth
          </p>
        </div>

        {/* Campus Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Campus Library" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Modern Library</h3>
                <p className="text-sm opacity-90">24/7 access with digital resources</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Campus Cafeteria" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Student Lounge</h3>
                <p className="text-sm opacity-90">Relaxation and networking spaces</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src="https://images.pexels.com/photos/416917/pexels-photo-416917.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sports Complex" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Sports Arena</h3>
                <p className="text-sm opacity-90">Multi-sport facilities and fitness center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            const colorClasses = getColorClasses(facility.color);
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.icon} text-white rounded-full mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            );
          })}
        </div>

        {/* Student Testimonials */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Voices</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://1.bp.blogspot.com/-8OsRA8SUuDY/W2RJ57vG50I/AAAAAAAAQnE/bHqynmzGWIEQ1CQk5an4-spoaIQd8ZpGQCLcBGAs/s860/Nithya-Shetty-4.jpg" 
                alt="Student" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <blockquote className="text-gray-600 italic mb-4">
                "ASEC has provided me with incredible opportunities to grow both academically and personally. The faculty support and campus facilities are outstanding."
              </blockquote>
              <cite className="font-semibold text-gray-900">Priya Sharma</cite>
              <p className="text-sm text-gray-500">B.Tech CSE, Final Year</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
                alt="Student" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <blockquote className="text-gray-600 italic mb-4">
                "The campus life at ASEC is vibrant and diverse. From technical competitions to cultural events, there's always something exciting happening."
              </blockquote>
              <cite className="font-semibold text-gray-900">Rahul Patel</cite>
              <p className="text-sm text-gray-500">B.Tech ECE, 3rd Year</p>
            </div>

            <div className="text-center">
              <img 
                src="https://th.bing.com/th/id/OIP.tkEKutVlMagfZOJn4_T8lQHaIv?cb=iwp2&rs=1&pid=ImgDetMain" 
                alt="Student" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <blockquote className="text-gray-600 italic mb-4">
                "The hostels are comfortable and the food is great. The study environment here really helps in maintaining a good work-life balance."
              </blockquote>
              <cite className="font-semibold text-gray-900">Ananya Singh</cite>
              <p className="text-sm text-gray-500">B.Tech Mechanical, 2nd Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;