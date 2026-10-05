import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactEditorialStrip from '../components/contact/ContactEditorialStrip';
import ContactServices from '../components/contact/ContactServices';
import ContactCinematicSection from '../components/contact/ContactCinematicSection';
import ContactMap from '../components/contact/ContactMap';
import ContactCTA from '../components/contact/ContactCTA';

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <ContactEditorialStrip />
      <ContactServices />
      <ContactCinematicSection />
      <ContactMap />
      <ContactCTA />
    </main>
  );
};

export default Contact;
