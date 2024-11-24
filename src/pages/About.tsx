import React from 'react';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import DirectorSection from '../components/DirectorSection';
import Footer from '../components/Footer';

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