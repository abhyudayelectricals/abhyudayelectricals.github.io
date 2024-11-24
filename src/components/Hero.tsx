import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/021/352/original/P1033095.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Powering India's Future
          <br />
          <span className="text-blue-500">With Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
          Leading electrical manufacturing solutions with innovation and precision
        </p>
        <button
          onClick={() => handleScroll('products')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full 
          transition-colors duration-300 text-lg font-semibold"
        >
          Explore Our Solutions
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}