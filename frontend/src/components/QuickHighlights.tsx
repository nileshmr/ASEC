import React from 'react';
import { GraduationCap, Users, Award, Globe } from 'lucide-react';

const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'University Life',
      description: 'Experience vibrant campus life with diverse opportunities for personal and academic growth.',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Graduation',
      description: 'Join thousands of successful graduates who are making their mark in the engineering world.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Athletics',
      description: 'Excel in sports and athletics with our state-of-the-art facilities and professional coaching.',
      color: 'orange'
    },
    {
      icon: Globe,
      title: 'Social',
      description: 'Build lasting connections through our active student community and networking events.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { icon: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
      green: { icon: 'text-green-600', bg: 'bg-green-50', hover: 'hover:bg-green-100' },
      orange: { icon: 'text-orange-600', bg: 'bg-orange-50', hover: 'hover:bg-orange-100' },
      purple: { icon: 'text-purple-600', bg: 'bg-purple-50', hover: 'hover:bg-purple-100' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            const colorClasses = getColorClasses(highlight.color);
            
            return (
              <div 
                key={index}
                className={`${colorClasses.bg} ${colorClasses.hover} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-8 h-8 ${colorClasses.icon} mr-3`} />
                  <h3 className="text-xl font-bold text-gray-900">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;