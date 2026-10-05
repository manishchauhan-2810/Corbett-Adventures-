import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Users, ShieldCheck, Camera, Compass, Map, Trees } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SafeImage from '../../components/ui/SafeImage';
import { contactConfig } from '../../config/contact';

gsap.registerPlugin(ScrollTrigger);

const RiverRaftingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#F5F1E8] min-h-screen text-[#102A20]">
      {/* 1. Cinematic Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-end p-6 md:p-12 overflow-hidden">
        <SafeImage
          src="https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-shallow-river-768x432.png"
          alt="River Rafting in Jim Corbett"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A20]/80 via-[#102A20]/20 to-transparent" />
        <div className="relative z-10 text-[#F5F1E8] reveal max-w-7xl mx-auto w-full">
          <p className="text-[10px] font-semibold tracking-[0.35em] text-[#D8C49A] uppercase">ADVENTURE</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.9]">RIVER RAFTING<br />IN JIM CORBETT.</h1>
          <p className="mt-8 text-lg md:text-xl text-[#F5F1E8]/80 max-w-lg leading-relaxed">
            Navigate the pristine Kosi River, surrounded by dramatic forested hills and clear river valleys.
          </p>
          <a href={contactConfig.whatsappUrl} className="mt-10 inline-flex items-center gap-2 bg-[#B77B45] text-[#F5F1E8] px-8 py-4 rounded-[12px] text-[10px] font-bold tracking-widest uppercase hover:bg-[#A66D3D] transition">
            ENQUIRE NOW <ArrowUpRight size={16}/>
          </a>
        </div>
      </section>

      {/* 2. Experience Introduction */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start reveal">
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#B77B45]">THE EXPERIENCE</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 text-[#102A20] leading-[1.1]">Navigate the<br />Kosi River.</h2>
        </div>
        <div className="space-y-6 text-[#102A20]/75 text-lg leading-relaxed pt-2">
          <p>
            Trade the safari trail for the Kosi River. Experience a refreshing adventure through the landscape around Jim Corbett, where the river winds through dramatic forested hills and clear valleys.
          </p>
          <p>
            Rafting here is a blend of excitement and tranquility, offering a unique perspective of the Corbett fringe landscape. Perfect for adventure seekers wanting to see the wilderness from the water.
          </p>
        </div>
      </section>

      {/* 3. Details */}
      <section className="bg-[#EEE7D5] py-24 px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold tracking-widest uppercase text-[#B77B45]">THE DETAILS</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-[#102A20]">Rafting,<br />at a glance.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'DURATION', value: 'Approx. 2 hours', icon: Clock },
              { label: 'SEASONALITY', value: 'Dependent on water levels', icon: Compass },
              { label: 'LOCATION', value: 'Kosi River fringes', icon: MapPin },
              { label: 'BEST FOR', value: 'Adventure seekers', icon: Users },
              { label: 'SAFETY', value: 'Professional guidance provided', icon: ShieldCheck }
            ].map((detail, i) => (
              <div key={i} className="bg-[#F5F1E8] p-10 rounded-[24px] shadow-sm flex flex-col gap-6">
                <div className="w-10 h-10 rounded-lg bg-[#B77B45]/10 flex items-center justify-center text-[#B77B45]"><detail.icon size={20} /></div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#B77B45] mb-2 uppercase">{detail.label}</p>
                  <p className="text-xl md:text-2xl font-serif text-[#102A20] leading-tight">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Booking CTA */}
      <section className="bg-[#102A20] text-[#F5F1E8] py-24 md:py-32 reveal text-center px-6 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">Ready for a<br />river adventure?</h2>
          <p className="mt-8 text-[#D8C49A] text-lg md:text-xl max-w-2xl mx-auto opacity-80">
            Talk to our team about rafting availability, season suitability and booking details.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href={contactConfig.whatsappUrl} className="bg-[#B77B45] text-[#F5F1E8] px-10 py-5 rounded-[12px] text-xs font-bold tracking-widest uppercase hover:bg-[#A66D3D] transition flex items-center gap-3">
              CHAT ON WHATSAPP <ArrowUpRight size={18}/>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RiverRaftingPage;
