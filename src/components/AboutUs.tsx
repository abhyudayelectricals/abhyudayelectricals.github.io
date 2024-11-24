import React from 'react';
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '25+' },
  { label: 'Satisfied Clients', value: '1000+' },
  { label: 'Team Members', value: '200+' },
  { label: 'Products', value: '50+' },
];

const values = [
  {
    icon: Target,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in electrical manufacturing.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Building lasting relationships through reliable service and support.',
  },
  {
    icon: Trophy,
    title: 'Industry Leadership',
    description: 'Setting benchmarks in electrical innovation and quality standards.',
  },
  {
    icon: Lightbulb,
    title: 'Sustainable Innovation',
    description: 'Investing in energy-efficient and sustainable solutions.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Abhyuday Electricals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Since our inception, Abhyuday Electricals has been at the forefront of electrical innovation, 
            delivering high-quality electrical solutions that power India's industrial growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to revolutionize India's electrical manufacturing sector, 
                Abhyuday Electricals began its journey with a commitment to quality and innovation.
              </p>
              <p>
                Over the years, we've grown from a modest electrical equipment manufacturer to a 
                trusted name in the industry, serving clients across industrial, commercial, and 
                infrastructure sectors.
              </p>
              <p>
                Today, we combine our deep electrical expertise with modern technology to 
                deliver solutions that help our clients achieve optimal performance and energy efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="h-10 w-10 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}