import React, { useState, useEffect } from 'react';
import { zones } from '../../data/zones';
import ZoneMarker from './ZoneMarker';
import ZoneInfoCard from './ZoneInfoCard';
import MobileZonePopup from './MobileZonePopup';

const ZonesSection = () => {
  const [selectedZone, setSelectedZone] = useState(() => zones.find(z => z.id === 'dhikala'));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`relative overflow-hidden ${isMobile ? 'h-[600px]' : 'h-[540px]'} flex items-center bg-[#102A20]`}>
      {/* Background Map - Single canvas, fully visible */}
      <img
        src="/Jim Corbett Terrain Map.png"
        alt="Jim Corbett terrain map"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05231B]/80 via-[#05231B]/30 to-transparent z-0" />

      {/* Mobile Heading */}
      {isMobile && (
        <div className="absolute top-[28px] left-[20px] text-[#F5F1E8] z-20">
          <h2 className="text-[36px] font-serif leading-[0.95]">
            Nine gates.<br />
            One forest.
          </h2>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-between h-full">
        {/* Left Editorial Panel - Desktop Only */}
        {!isMobile && (
          <div className="w-[30%] max-w-[350px] text-[#F5F1E8] z-20">
            <span className="text-[#C6A56A] font-sans text-xs tracking-widest uppercase mb-4 block">SAFARI ZONES</span>
            <h2 className="text-[clamp(42px,4vw,60px)] font-serif mb-8 leading-[0.95]">
              Nine gates.<br />
              One forest.
            </h2>
            <p className="text-[#F5F1E8]/80 font-sans leading-relaxed mb-8">
              Each zone in Jim Corbett offers a unique landscape, wildlife experience and story to tell. Explore the zone that matches your travel style.
            </p>
            <button className="bg-[#D8C49A] text-[#102A20] px-8 py-4 rounded-[14px] text-sm font-semibold hover:bg-[#C6A56A] transition-colors">
              EXPLORE SAFARI ZONES →
            </button>
          </div>
        )}

        {/* Center Map Markers & Card Area */}
        <div className={`${isMobile ? 'w-full' : 'flex-1'} relative h-full z-20`}>
          {zones.map((zone) => (
            <ZoneMarker
              key={zone.id}
              zone={zone}
              isActive={selectedZone?.id === zone.id}
              onClick={() => setSelectedZone(zone)}
              isMobile={isMobile}
            />
          ))}
          {isMobile ? (
             selectedZone && <MobileZonePopup zone={selectedZone} onClose={() => setSelectedZone(null)} />
          ) : (
             <ZoneInfoCard zone={selectedZone} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;
