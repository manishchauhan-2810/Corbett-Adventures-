import React from 'react';

const ContactMap = () => (
  <section className="py-12 bg-[#F5F1E8]">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="mb-8">
        <span className="text-[#B77B45] font-sans text-xs tracking-[0.2em] uppercase mb-2 block">FIND US IN CORBETT</span>
        <h2 className="text-4xl font-serif text-[#102A20]">WHERE THE FOREST BEGINS.</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-3">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[22px]">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.243538466635!2d79.1235339!3d29.4357758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0937a0c8b2c45%3A0x6a0c5c3c0c1c8a1!2sDhikuli%2C%20Ramnagar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
             ></iframe>
          </div>
        </div>
        <div className="md:col-span-2 pt-2">
            <h3 className="text-2xl font-serif text-[#102A20] mb-4">BIGCAT CORBETT</h3>
            <p className="text-[#102A20]/70 mb-6 font-sans text-sm leading-relaxed">Near Diners Villa,<br />Dhikuli, Ramnagar,<br />Nainital, Uttarakhand 244715</p>
            <a
                href="https://www.google.com/maps/search/?api=1&query=Bigcat+Corbett+Dhikuli+Ramnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#102A20] text-[#102A20] px-6 py-3 rounded-[8px] font-medium hover:bg-[#102A20] hover:text-white transition-all duration-300 uppercase tracking-widest text-[10px]"
            >
                OPEN IN GOOGLE MAPS ↗
            </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMap;
