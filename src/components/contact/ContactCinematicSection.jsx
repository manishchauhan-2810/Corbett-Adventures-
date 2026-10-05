import React from 'react';

const ContactCinematicSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="grid md:grid-cols-12 gap-0 rounded-[24px] overflow-hidden">
        <div className="md:col-span-7 h-[480px]">
          <img
            src="https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/shivalik-mountains-1024x575.webp"
            alt="Cinematic Corbett"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-5 bg-[#0B2119] text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-serif mb-6">YOU'RE NOT<br />JUST BOOKING<br />A SAFARI.</h2>
            <p className="text-white/70 text-sm mb-8">"You're planning time in a forest that deserves to be experienced properly."</p>
            <div className="space-y-2 font-sans text-[10px] tracking-widest uppercase text-white/50">
                <p>• LOCAL KNOWLEDGE</p>
                <p>• REAL GUIDANCE</p>
                <p>• PERSONAL SUPPORT</p>
            </div>
            <button className="mt-8 text-[#B77B45] uppercase tracking-widest text-xs font-medium hover:text-white transition-colors">START A CONVERSATION →</button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCinematicSection;
