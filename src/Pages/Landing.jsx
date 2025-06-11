import React from 'react';
import Navbar from "./../Component/Navbar/Navbar";
import Hero from '../Component/Hero/Hero';
import Footer from '../Component/Footer/Footer'
import Services from '../Component/Services/Services';
import Plans from '../Component/Plans/Plans';
import ContactUs from '../Component/ContactUs/ContactUs';

export default function Landing() {
 
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <ContactUs />
      <Footer />
    </div>
  );
}
