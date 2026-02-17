import React from 'react';
import AboutUs from '../components/AboutUs';
import DirectorSection from '../components/DirectorSection';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <AboutUs />
        <DirectorSection />
      </div>
    </div>
  );
}
