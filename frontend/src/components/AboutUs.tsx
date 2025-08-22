import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About ASEC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building excellence in engineering education for over two decades
          </p>
        </div>

        {/* History Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established in 1998, Afrin Sumeet Engineering College has been at the forefront of engineering education in India. Founded with a vision to create world-class engineers who can contribute to technological advancement and societal progress.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our college has consistently maintained its position as one of the premier engineering institutions, producing graduates who excel in their chosen fields and contribute meaningfully to industry and research.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and industry partnerships, we continue to evolve and adapt to the changing needs of the engineering profession.
              </p>
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="ASEC Campus" 
                  className="rounded-xl shadow-lg w-full h-full object-cover transition-all duration-500 group-hover:rotate-2 group-hover:border-4 group-hover:border-blue-400"
                />
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <span className="mb-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                    Welcome to ASEC Campus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality technical education, foster innovation, and develop competent engineers who can contribute to the technological advancement of society.
            </p>
          </div>

          <div className="text-center p-8 bg-orange-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full mb-6">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized center of excellence in engineering education, research, and innovation, producing leaders who shape the future.
            </p>
          </div>

          <div className="text-center p-8 bg-green-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Excellence, Integrity, Innovation, Inclusivity, and Social Responsibility guide everything we do at ASEC.
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <img 
                src="https://i.ytimg.com/vi/ppgScnmk-Dc/maxresdefault.jpg" 
                alt="Principal" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-900">Dr. Rajesh Sharma</h4>
              <p className="text-gray-600">Principal, ASEC</p>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Principal's Message</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                "At ASEC, we believe that education is not just about acquiring knowledge, but about developing the ability to think critically, innovate, and contribute to society. Our commitment to excellence in education, research, and character building has made us a preferred destination for aspiring engineers."
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                "We take pride in our holistic approach to education, which combines rigorous academic training with practical experience, ethical values, and leadership development. Our graduates are not just technically competent but are also well-rounded individuals ready to take on the challenges of the modern world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;