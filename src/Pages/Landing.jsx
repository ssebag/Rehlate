import React from 'react';
import Navbar from "./../Component/Navbar/Navbar";
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer/Footer'
export default function Landing() {
 
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
