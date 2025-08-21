import React from 'react';
import { Cpu, Wrench, Building, Zap, TestTube, Globe } from 'lucide-react';

const Academics: React.FC = () => {
  const departments = [
    {
      icon: Cpu,
      name: 'Computer Science & Engineering',
      description: 'Advanced computing, AI/ML, software development, and emerging technologies',
      programs: ['B.Tech CSE', 'M.Tech CSE', 'PhD'],
      color: 'blue'
    },
    {
      icon: Zap,
      name: 'Electronics & Communication',
      description: 'VLSI design, embedded systems, communication networks, and IoT',
      programs: ['B.Tech ECE', 'M.Tech ECE'],
      color: 'purple'
    },
    {
      icon: Wrench,
      name: 'Mechanical Engineering',
      description: 'Design, manufacturing, robotics, and automotive engineering',
      programs: ['B.Tech Mech', 'M.Tech Mech'],
      color: 'orange'
    },
    {
      icon: Building,
      name: 'Civil Engineering',
      description: 'Infrastructure development, structural design, and environmental engineering',
      programs: ['B.Tech Civil', 'M.Tech Civil'],
      color: 'green'
    },
    {
      icon: TestTube,
      name: 'Chemical Engineering',
      description: 'Process engineering, petrochemicals, and sustainable technologies',
      programs: ['B.Tech Chemical', 'M.Tech Chemical'],
      color: 'red'
    },
    {
      icon: Globe,
      name: 'Information Technology',
      description: 'Web development, cybersecurity, data analytics, and cloud computing',
      programs: ['B.Tech IT', 'M.Tech IT'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-50' },
      green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-50' },
      red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-50' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', hover: 'hover:bg-indigo-50' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering programs designed to meet industry demands and foster innovation
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            const colorClasses = getColorClasses(dept.color);
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm ${colorClasses.hover} transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-full mb-6`}>
                  <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <p className="text-gray-600 mb-6">{dept.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Programs Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.programs.map((program, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-sm rounded-full font-medium`}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Programs Overview */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Programs</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">B.Tech</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Bachelor of Technology</h4>
              <p className="text-gray-600">4-year undergraduate program with comprehensive curriculum and industry exposure</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">M.Tech</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Master of Technology</h4>
              <p className="text-gray-600">2-year postgraduate program focusing on specialization and research</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 text-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">PhD</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Doctor of Philosophy</h4>
              <p className="text-gray-600">Research-oriented doctoral program for academic and industry careers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;