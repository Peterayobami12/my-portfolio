import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT"  text="I'm a web designer 
      and a Front-End Developer."/>
      <AboutContent />
      <Footer />

    </div>
  )
}

export default About