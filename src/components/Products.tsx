import React from 'react';

const products = [
  {
    image: '/media/dpc_al_1.jpeg',
    title: 'DPC Aluminum Wire',
    description: 'Double Paper Covered Aluminum Wire, '
    + 'is a type of insulated wire used for electrical applications, '
    + 'particularly in transformer winding',
  },
  {
    image: '/media/dpc_al_1.jpeg',
    title: 'DPC Copper Wire',
    description: 'Double Paper Covered copper wire, is a'
    + ' type of copper wire that is widely used in various '
    + 'electrical and industrial applications.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 relative"
            >
              <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}