import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const NewsEvents: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Tech Summit 2024',
      date: '2024-04-15',
      time: '9:00 AM',
      location: 'Main Auditorium',
      description: 'Annual technology conference featuring industry leaders and latest innovations',
      type: 'Conference',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI & Machine Learning Workshop',
      date: '2024-04-20',
      time: '2:00 PM',
      location: 'Computer Science Lab',
      description: 'Hands-on workshop on AI/ML applications with industry experts',
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cultural Fest - Euphoria 2024',
      date: '2024-04-25',
      time: '6:00 PM',
      location: 'Campus Grounds',
      description: 'Three-day cultural festival with music, dance, drama, and art competitions',
      type: 'Cultural',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Industry Visit to Tech Parks',
      date: '2024-05-02',
      time: '8:00 AM',
      location: 'Bangalore Tech Parks',
      description: 'Educational visit to leading technology companies and research centers',
      type: 'Visit',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const announcements = [
    {
      title: 'Semester Results Published',
      date: '2024-03-15',
      content: 'Results for the Winter 2024 semester are now available on the student portal. Students can check their grades and download transcripts.'
    },
    {
      title: 'New Library Timings',
      date: '2024-03-12',
      content: 'The central library will now be open 24/7 during exam periods. Extended hours: Monday-Friday 6:00 AM to 12:00 AM, Weekends 8:00 AM to 10:00 PM.'
    },
    {
      title: 'Scholarship Applications Open',
      date: '2024-03-10',
      content: 'Merit-based scholarship applications for the next academic year are now open. Deadline for submission: April 30, 2024.'
    },
    {
      title: 'Campus WiFi Upgrade',
      date: '2024-03-08',
      content: 'Campus-wide WiFi infrastructure has been upgraded to provide faster internet speeds and better connectivity across all departments.'
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      Conference: 'bg-blue-100 text-blue-800',
      Workshop: 'bg-green-100 text-green-800',
      Cultural: 'bg-purple-100 text-purple-800',
      Visit: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, events, and announcements from ASEC
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-5 h-5 text-green-500" />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-orange-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <button className="mt-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Announcements</h3>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="space-y-8">
                {announcements.map((announcement, index) => (
                  <div 
                    key={index}
                    className="pb-6 border-b border-blue-200 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        {announcement.title}
                      </h4>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {new Date(announcement.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  View All Announcements →
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h4>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">Academic Calendar</span>
                  <p className="text-sm text-gray-600 mt-1">View semester dates and holidays</p>
                </a>
                
                <a 
                  href="#" 
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">Exam Schedule</span>
                  <p className="text-sm text-gray-600 mt-1">Check upcoming examination dates</p>
                </a>
                
                <a 
                  href="#" 
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">Student Portal</span>
                  <p className="text-sm text-gray-600 mt-1">Access grades and course materials</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;