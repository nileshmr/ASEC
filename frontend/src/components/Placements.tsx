import React from 'react';
import { TrendingUp, Users, Award, Building } from 'lucide-react';

const Placements: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Placement Rate',
      color: 'green'
    },
    {
      icon: Building,
      value: '250+',
      label: 'Partner Companies',
      color: 'blue'
    },
    {
      icon: Users,
      value: '12 LPA',
      label: 'Average Package',
      color: 'orange'
    },
    {
      icon: Award,
      value: '45 LPA',
      label: 'Highest Package',
      color: 'purple'
    }
  ];

  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Infosys', 'TCS', 'Wipro',
    'IBM', 'Accenture', 'Deloitte', 'Cognizant', 'HCL', 'Tech Mahindra'
  ];

  const successStories = [
    {
      name: 'Ranbir Kapoor',
      role: 'Software Engineer at Google',
      package: '28 LPA',
      image: 'https://rapidgig.vercel.app/azfar.webp',
      story: 'ASEC provided me with strong technical foundation and problem-solving skills that helped me crack Google interviews.'
    },
    {
      name: 'Nilesh Maurya',
      role: 'Data Scientist at Microsoft',
      package: '32 LPA',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGN3qsR-aJtCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732280588878?e=1758758400&v=beta&t=Na_gNErgT43x12SkGKIRD0aIJT4qUo7Pt9hbCtT4l9M',
      story: 'The faculty guidance and project-based learning at ASEC prepared me well for my career in data science.'
    },
    {
      name: 'Rohit Kumar',
      role: 'Product Manager at Amazon',
      package: '35 LPA',
      image: 'https://rapidgig.vercel.app/anuj gaurave.webp',
      story: 'ASEC not only taught me engineering concepts but also leadership and communication skills essential for product management.'
    }
  ];

  const companyLogos: Record<string, string> = {
    Microsoft: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    Google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    Amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    Infosys: "https://www.liblogo.com/img-logo/in6145i7cd-infosys-logo-infosys-logo-ai-openchain.png",
    TCS: "https://tse2.mm.bing.net/th/id/OIP.jelNQlhvt5JOQeR1nyWL1gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    Wipro: "https://i.pinimg.com/originals/03/1a/b1/031ab1329da9a72190cacb119eed906a.png",
    IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    Accenture: "https://cdn.freelogovectors.net/wp-content/uploads/2023/05/accenture_logo-freelogovectors.net_.png",
    Deloitte: "https://companieslogo.com/img/orig/deloitte-d98ace3a.png?t=1699425248",
    Cognizant: "https://pridelogo.com/brands/Cognizant/Cognizant.png",
    HCL: "https://e7.pngegg.com/pngimages/355/249/png-clipart-hcl-technologies-hcl-enterprise-information-technology-hcl-poland-sp-z-o-o-service-business-blue-text.png",
    "Tech Mahindra": "https://tse1.mm.bing.net/th/id/OIP.Jc4ESR1mVLO_t1Yt_taYQgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: { bg: 'bg-green-100', text: 'text-green-600', icon: 'bg-green-500' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', icon: 'bg-blue-500' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'bg-orange-500' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', icon: 'bg-purple-500' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Placements & Careers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exceptional career opportunities with top global companies and outstanding placement records
          </p>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = getColorClasses(stat.color);
            
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 ${colorClasses.icon} text-white rounded-full mb-6 group-hover:shadow-lg transition-all duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Company Partners */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Recruiting Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                {companyLogos[company] ? (
                  <img
                    src={companyLogos[company]}
                    alt={company}
                    className="h-8 mb-3 object-contain"
                    style={{ maxWidth: '90px' }}
                  />
                ) : null}
                <span className="font-semibold text-gray-700 text-center">{company}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              And <strong>200+</strong> more leading companies across various industries
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Success Stories</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{story.role}</p>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.package}
                  </span>
                </div>
                
                <blockquote className="text-gray-600 italic text-center">
                  "{story.story}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Career Services */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Development Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Career Counseling</h4>
              <p className="text-gray-600 text-sm">Personalized guidance for career planning and development</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Skill Development</h4>
              <p className="text-gray-600 text-sm">Industry-relevant training and certification programs</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Industry Connect</h4>
              <p className="text-gray-600 text-sm">Regular interactions with industry experts and alumni</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Interview Prep</h4>
              <p className="text-gray-600 text-sm">Mock interviews and technical preparation sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;