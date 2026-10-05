import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactDetails = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#102A20] mb-6">CONTACT THE LOCAL TEAM</h2>
        <p className="text-[#102A20]/70 text-lg max-w-2xl mx-auto">
          We're based close to the forest and help travellers plan their Corbett experience from the ground up.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="mb-6 flex justify-center text-[#667A52]"><Phone size={24} /></div>
          <h3 className="font-serif text-xl text-[#102A20] mb-4">CALL US</h3>
          <a href="tel:+919690259185" className="block text-[#102A20]/80 hover:text-[#B77B45]">+91 9690259185</a>
          <a href="tel:+919690259181" className="block text-[#102A20]/80 hover:text-[#B77B45]">+91 9690259181</a>
        </div>
        <div className="text-center">
          <div className="mb-6 flex justify-center text-[#667A52]"><Mail size={24} /></div>
          <h3 className="font-serif text-xl text-[#102A20] mb-4">EMAIL US</h3>
          <a href="mailto:Jimcorbettadventures@gmail.com" className="text-[#102A20]/80 hover:text-[#B77B45]">Jimcorbettadventures@gmail.com</a>
        </div>
        <div className="text-center">
          <div className="mb-6 flex justify-center text-[#667A52]"><MapPin size={24} /></div>
          <h3 className="font-serif text-xl text-[#102A20] mb-4">VISIT US</h3>
          <p className="text-[#102A20]/80">Bigcat Corbett, Near Diners Villa,<br />Dhikuli, Ramnagar, Nainital</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactDetails;
