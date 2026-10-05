import React from 'react';

const ContactHero = () => (
  <section className="relative h-[580px] flex items-center justify-start text-white overflow-hidden pt-[82px]">
    <div className="absolute inset-0">
      <img
        src="https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/Feature-image-Jim-Corbett--1024x576.webp"
        alt="Jungle"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0B2119]/40" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-[1280px] mx-auto w-full">
        <span className="text-[#D8C49A] font-sans text-xs tracking-[0.2em] uppercase mb-4 block">GET IN TOUCH</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">COME CLOSER TO<br />THE WILD.</h1>
        <p className="text-lg text-white/80 font-sans max-w-lg mb-10 leading-relaxed">
          Safari bookings, forest stays, adventures and local guidance — planned by people who know Corbett from the ground up.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#B77B45] text-white px-8 py-3 rounded-[12px] font-medium hover:bg-[#A66F3D] transition-all uppercase tracking-widest text-xs">PLAN YOUR TRIP →</button>
          <button className="border border-white/30 text-white px-8 py-3 rounded-[12px] font-medium hover:bg-white hover:text-[#102A20] transition-all uppercase tracking-widest text-xs">CALL THE TEAM →</button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactHero;
