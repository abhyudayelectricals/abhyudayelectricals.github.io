import React from 'react';

export default function DirectorSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Leadership
        </h2>
        
        <div className="flex flex-col space-y-24">
          {/* First Director */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Director's Image */}
            <div className="relative">
              <img
                src="/media/AEPL_AJAI.jpg"
                alt="Director"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Director's Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Ajai Pal Singh</h3>
                <p className="text-xl text-blue-600 mb-6">Director</p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                With over 35 years of expertise in the wire manufacturing industry, Ajai Pal Singh has 
                been instrumental in establishing Abhyuday Electricals as a leading manufacturer of premium DPC wires. 
                His vast experience spans the production of Enamelled Copper Wire, Enamelled Aluminium Wire, Copper Wire, 
                Winding Wire, Wire Lamination, and Polyester, making him a seasoned expert in the field.
                </p>
                <p>
                Under his visionary leadership, Abhyuday Electricals continues to reach new milestones, setting benchmarks 
                in quality and innovation. His engineering background in Electrical Engineering has been a cornerstone of 
                the company’s growth, bringing technical expertise to streamline processes, drive innovation, and ensure 
                continuous improvement throughout the manufacturing operation.
                </p>
              </div>
            </div>
          </div>

          {/* Second Director */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Director's Image */}
            <div className="relative">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="Director"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-blue-500 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Director's Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Vijay Pratap Singh</h3>
                <p className="text-xl text-blue-600 mb-6">Director</p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  Vijay Pratap Singh brings over 20 years of expertise in operations and strategic planning
                  to Abhyuday Electricals. His innovative approach has been crucial in modernizing our
                  manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}