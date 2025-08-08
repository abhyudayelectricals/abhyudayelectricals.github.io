import React from 'react';
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const clients = [
  {
    name: 'GOVERDHAN TRANSFORMER',
    logo: 'https://placehold.co/300x300/4A90E2/white?text=GT',
    description: 'Specialized in distribution transformers and voltage stabilizers',
  },
  {
    name: 'SAMAR ELECTRICALS AND WIRE',
    logo: 'https://placehold.co/300x300/2ECC71/white?text=SE',
    description: 'Leading manufacturer of power and distribution transformers',
  },
  {
    name: 'PARAMHANS ENTERPRISES',
    logo: 'https://placehold.co/300x300/E74C3C/white?text=PE',
    description: 'Expert in custom transformer solutions and electrical equipment',
  },
  {
    name: 'ALFIA ELECTRICALS',
    logo: 'https://placehold.co/300x300/9B59B6/white?text=AE',
    description: 'Innovative transformer manufacturer with focus on energy efficiency',
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
            Since 2018, Abhyuday Electricals has been a leading manufacturer of premium Double Paper Covered (DPC) 
            aluminium wire, specializing in transformer winding applications. We serve industrial transformer 
            manufacturers across North India with our commitment to excellence and quality manufacturing.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Established in 2018, Abhyuday Electricals has emerged as the premier manufacturer of 
                Double Paper Covered (DPC) aluminium wire in Uttar Pradesh, specializing in high-quality 
                transformer winding wire for industrial and home transformer applications.
              </p>
              <p>
                Our state-of-the-art quality testing and control processes ensure that every DPC wire 
                meets the stringent requirements of transformer manufacturers. This unwavering commitment 
                to quality has made us the preferred supplier for transformer companies across North India.
              </p>
              <p>
                We proudly serve transformer manufacturers across Uttar Pradesh, Rajasthan, Madhya Pradesh, 
                Haryana, and Delhi. Our strategic location enables efficient distribution to industrial 
                hubs while maintaining our core values of quality excellence in transformer wire manufacturing.
              </p>
            </div>
          </div>
        </div>

        {/* Our Clients Section */}
        {/* Removed the entire section */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Trusted Clients</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="mb-4 mx-auto">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500 shadow-lg"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{client.name}</h4>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}