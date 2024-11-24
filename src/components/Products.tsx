import React from 'react';
import { Shield, Cpu, Cog, Battery, Wrench, Gauge } from 'lucide-react';

const products = [
  {
    icon: Cpu,
    title: 'Precision Machinery',
    description: 'State-of-the-art CNC machines and robotics systems for maximum accuracy',
  },
  {
    icon: Cog,
    title: 'Industrial Equipment',
    description: 'Heavy-duty manufacturing equipment built for reliability and performance',
  },
  {
    icon: Battery,
    title: 'Power Systems',
    description: 'Advanced power solutions for industrial applications',
  },
  {
    icon: Shield,
    title: 'Safety Systems',
    description: 'Comprehensive safety solutions for manufacturing environments',
  },
  {
    icon: Wrench,
    title: 'Maintenance Tools',
    description: 'Professional-grade tools for industrial maintenance',
  },
  {
    icon: Gauge,
    title: 'Control Systems',
    description: 'Smart control systems for automated manufacturing processes',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Product Line
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of manufacturing solutions designed to meet your industry's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <product.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}