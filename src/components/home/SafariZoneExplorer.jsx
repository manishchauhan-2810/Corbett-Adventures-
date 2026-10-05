import React, { useState } from 'react';
import { zones } from '../../data/zones';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const SafariZoneExplorer = () => {
  const [selectedZone, setSelectedZone] = useState(zones[0]);

  return (
    <section className="bg-[#102A20] text-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
            <h2 className="text-6xl font-serif text-white mb-6">
            NINE GATES.<br />
            ONE FOREST.
            </h2>
            <p className="text-white/60 max-w-xl text-lg">
            Every zone in Jim Corbett offers a unique landscape, wildlife experience and story to tell.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Map Area */}
          <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-white/5 bg-[#0B2119] p-12">
            {/* Topographic lines simulation */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)' }} />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <p className="text-xs tracking-[0.2em] text-white/40 mb-8 uppercase">Corbett Map — Artwork to be added</p>
                <div className="flex flex-wrap gap-4 justify-center">
                    {zones.map((zone) => (
                        <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone)}
                        className={`px-6 py-3 rounded-[12px] border transition-all duration-300 ${
                            selectedZone.id === zone.id
                            ? 'bg-[#D8C49A] text-[#102A20] border-[#D8C49A]'
                            : 'text-white border-white/10 hover:border-white/50'
                        }`}
                        >
                        {zone.name}
                        </button>
                    ))}
                </div>
            </div>
          </div>

          {/* Dynamic Card Area */}
          <div className="p-8">
            <div className="transition-all duration-500">
                <ImagePlaceholder className="w-full h-80 mb-10 rounded-[24px]" text={selectedZone.name} />
                <h3 className="text-4xl font-serif mb-6">{selectedZone.name} Zone</h3>
                <p className="text-white/70 mb-8 text-lg font-sans leading-relaxed">{selectedZone.shortDescription}</p>

                <div className="grid grid-cols-2 gap-8 text-sm mb-10 border-t border-white/10 pt-8">
                    <div><span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">Location</span>{selectedZone.location}</div>
                    <div><span className="text-white/40 block mb-1 uppercase tracking-widest text-[10px]">Best For</span>{selectedZone.bestFor}</div>
                </div>

                <button className="flex items-center text-sand font-medium gap-3 hover:translate-x-2 transition-transform duration-300 text-sm tracking-widest uppercase">
                    EXPLORE ZONE <ArrowRight size={16} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariZoneExplorer;
