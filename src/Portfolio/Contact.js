import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
      <Navbar />
      <Heroimg2  heading="CONTACT" text="Lets have a chat"/>
      <ContactForm />
      <Footer />

    </div>
  )
}

export default Contact