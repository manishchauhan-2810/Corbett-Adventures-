import React from 'react';

const services = [
  { id: '01', title: 'Jeep, Canter & Elephant Safaris', desc: 'Explore Corbett with locally coordinated safari arrangements.' },
  { id: '02', title: 'Forest Rest House Reservations', desc: 'Stay close to the wilderness with help planning your forest stay.' },
  { id: '03', title: 'Resort & Hotel Bookings', desc: 'Premium accommodations carefully selected near the Corbett gates.' },
  { id: '04', title: 'Tailored Corbett Tour Packages', desc: 'Curated Corbett experiences built for your interests and group size.' },
  { id: '05', title: 'Group & Corporate Trips', desc: 'Specialized arrangements for schools, colleges, and corporate retreats.' },
  { id: '06', title: 'Birdwatching & Adventure Activities', desc: 'Discover nature walks, birdwatching trails, and local activities.' }
];

const ContactServices = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col border-r border-[#B77B45]/30 pr-8">
            <span className="text-[#B77B45] font-sans text-xs tracking-[0.2em] uppercase mb-4 block">HOW WE CAN HELP</span>
            <h2 className="text-4xl font-serif text-[#102A20] mb-6 leading-tight">FROM SAFARI<br />TO STAY,<br />WE'LL HANDLE<br />THE DETAILS.</h2>
            <p className="text-[#102A20]/70 text-base mb-6 flex-1">We manage the logistics so you can focus on the forest.</p>
            <div className="flex items-center gap-4">
              <div className="h-[24px] w-[1px] bg-[#B77B45]"></div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#102A20]/50">CORBETT • RAMNAGAR • UTTARAKHAND</span>
            </div>
          </div>
        <div className="space-y-5">
          {services.map((s) => (
            <div key={s.id} className="flex gap-6 group border-b border-[#102A20]/10 pb-3">
              <span className="text-[#B77B45] font-serif text-lg opacity-60 mt-0.5 w-6">{s.id}</span>
              <div>
                <h3 className="text-base font-serif text-[#102A20] mb-0.5 group-hover:translate-x-1 transition-transform duration-300">{s.title}</h3>
                <p className="text-[#102A20]/60 font-sans text-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactServices;
