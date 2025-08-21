import React from 'react';
import { Trophy, Users, Award, BookOpen } from 'lucide-react';

const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Trophy,
      number: '25+',
      label: 'Years of Excellence',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Users,
      number: '95%',
      label: 'Placement Rate',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      icon: Award,
      number: '10,000+',
      label: 'Alumni Network',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: BookOpen,
      number: '15+',
      label: 'Accredited Courses',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${highlight.bgColor} rounded-full mb-4 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className={`w-8 h-8 ${highlight.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{highlight.number}</h3>
                <p className="text-gray-600 font-medium">{highlight.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;