import React from 'react';

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

      </div>
    </section>
  );
}
