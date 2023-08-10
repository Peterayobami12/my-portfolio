import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

export default function Project() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recents projects"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

 