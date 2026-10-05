import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactEditorialStrip = () => (
  <section className="py-16 bg-[#F5F1E8]">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <h2 className="text-3xl font-serif text-[#102A20] w-full md:w-1/3 shrink-0">LET'S TALK<br />CORBETT</h2>
        <p className="text-[#102A20]/70 flex-1 leading-relaxed text-sm">Whether you're looking for a jeep safari, forest stay, adventure experience or a complete itinerary, our local team can help put it together.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#102A20]/10">
        {[
          { icon: Phone, title: 'CALL', details: ['+91 9690259185', '+91 9690259181'], link: 'tel:' },
          { icon: Mail, title: 'EMAIL', details: ['Jimcorbettadventures@gmail.com'], link: 'mailto:' },
          { icon: MapPin, title: 'VISIT', details: ['BigCat Corbett, Dhikuli, Ramnagar, Nainital, Uttarakhand 244715'], link: 'https://maps.google.com/?q=BigCat+Corbett+Dhikuli' }
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <item.icon size={20} className="text-[#667A52] mt-1 shrink-0" />
            <div>
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-[#102A20]/50 mb-2">{item.title}</h4>
              {item.details.map((d, j) => (
                <a key={j} href={item.link + (item.title === 'CALL' ? d.replace(/\s+/g, '') : (item.title === 'EMAIL' ? d : ''))} target={item.title === 'VISIT' ? '_blank' : '_self'} rel="noreferrer" className="block text-[#102A20] hover:text-[#B77B45] font-sans text-sm">{d}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactEditorialStrip;
