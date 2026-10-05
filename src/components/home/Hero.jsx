import React from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/RANS.png"
          alt="Jim Corbett wildlife"
          className="h-full w-full object-cover object-[80%_center] md:object-[82%_center] lg:object-[85%_center]"
        />

        {/* Cinematic overlay to keep text readable but tiger visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A20] via-[#102A20]/40 to-black/20" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-serif leading-[0.9] mb-6 md:mb-8">THE WILD IS<br />CLOSER THAN<br />YOU THINK.</h1>
            <p className="text-base md:text-lg text-white/80 max-w-lg mb-8 md:mb-10 font-sans leading-relaxed">Experience Jim Corbett with locals who know every twist and turn of the forest.</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-[56px] px-8 bg-[#102A20]/45 backdrop-blur-sm border border-[#F5F1E8]/65 text-[#F5F1E8] rounded-[12px] font-medium hover:bg-[#102A20]/60 hover:border-[#F5F1E8] transition-all duration-300 hover:-translate-y-0.5">EXPLORE SAFARIS</button>
                <WhatsAppButton label="PLAN MY CORBETT TRIP" className="!h-[56px] !px-8 !bg-[#D8C49A] !text-[#102A20] !border !border-[#D8C49A]/90 !rounded-[12px] hover:!bg-[#D8C49A]/90 hover:!translate-y-0.5 transition-all duration-300" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
