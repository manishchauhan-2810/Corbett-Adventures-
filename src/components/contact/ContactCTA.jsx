import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';

const ContactCTA = () => (
  <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
    <div className="absolute inset-0">
        <img
            src="https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/jim-corbett-jungle-safari.png"
            alt="Jungle Safari"
            className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0B2119]/70" />
    </div>

    <div className="relative z-10 text-center container mx-auto px-6 max-w-2xl">
      <h2 className="text-5xl font-serif mb-6">THE FOREST<br />IS WAITING.</h2>
      <p className="text-white/70 mb-12 text-lg font-sans">
        "Tell us what you're looking for. We'll help you shape the right Corbett experience."
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <WhatsAppButton label="BOOK ON WHATSAPP" />
        <button className="border border-white/30 text-white px-8 py-4 rounded-[12px] font-medium hover:bg-white hover:text-[#102A20] transition-all duration-300 uppercase tracking-widest text-xs">
            CALL THE TEAM →
        </button>
      </div>
    </div>
  </section>
);

export default ContactCTA;
