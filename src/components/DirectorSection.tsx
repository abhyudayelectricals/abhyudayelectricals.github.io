import React from 'react';

export default function DirectorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Leadership
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Director's Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Director"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-blue-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Director's Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
              <p className="text-xl text-blue-600 mb-6">Managing Director</p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                With over 25 years of experience in the electrical manufacturing industry,
                Rajesh Kumar has been instrumental in establishing Abhyuday Electricals as
                a leading name in India's industrial sector.
              </p>
              <p>
                Under his visionary leadership, the company has achieved numerous milestones
                and continues to set new benchmarks in quality and innovation. His commitment
                to excellence and sustainable practices has helped shape the company's core values.
              </p>
              <p>
                A graduate from IIT Delhi with a degree in Electrical Engineering, Rajesh brings
                technical expertise and business acumen to drive the company's growth and expansion
                strategies.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Achievements & Recognition</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>President of Electrical Manufacturers Association (2018-2021)</li>
                <li>Innovation Excellence Award - CII (2019)</li>
                <li>Distinguished Alumni Award - IIT Delhi (2017)</li>
                <li>Industry Leadership Award - Ministry of Heavy Industries (2020)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}