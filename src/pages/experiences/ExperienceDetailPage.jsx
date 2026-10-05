import React from 'react';
import { ArrowUpRight, Check, Clock3, MapPin, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../../components/ui/SafeImage';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { contactConfig } from '../../config/contact';
import { experienceDetails, IMG } from '../../data/site';

const ExperienceDetailPage = ({ slug }) => {
  const item = experienceDetails[slug];
  if (!item) return null;
  return <main className="page-shell overflow-hidden">
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0B2119] text-white">
      <SafeImage src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/35 to-[#0B2119]/10" />
      <div className="container-wide relative z-10 flex min-h-[72vh] items-end pb-14 pt-32 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-[#D8C49A]">{item.category}</p>
          <h1 className="display mt-4 text-5xl md:text-7xl lg:text-[92px]">{item.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">{item.intro}</p>
          <a href={contactConfig.whatsappUrl} className="btn-copper mt-8">Enquire now <ArrowUpRight size={15}/></a>
        </div>
      </div>
    </section>

    <section className="container-wide py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div><p className="eyebrow">THE EXPERIENCE</p><h2 className="display mt-4 text-4xl md:text-6xl">More than an activity.<br/>A Corbett memory.</h2></div>
        <div className="space-y-5 body-copy text-lg"><p>{item.intro}</p><p>Planning is coordinated around current availability, operating conditions, permits and the details that matter on the ground. Share your dates and group size with the local team before you confirm.</p></div>
      </div>
    </section>

    <section className="bg-[#102A20] py-16 text-white md:py-20">
      <div className="container-wide grid gap-8 lg:grid-cols-3">
        <Info icon={Users} label="GROUP" value="Families, couples & groups"/><Info icon={Clock3} label="TIMING" value="Subject to activity & season"/><Info icon={ShieldCheck} label="PLANNING" value="Local coordination & current availability"/>
      </div>
    </section>

    {item.sections.map(([title, points], idx) => <section key={title} className={`${idx%2===0?'bg-[#F5F1E8]':'bg-[#EEE7D5]'} py-16 md:py-24`}>
      <div className="container-wide grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        <div><p className="eyebrow">0{idx+1}</p><h2 className="display mt-4 text-4xl md:text-5xl">{title}</h2></div>
        <div className="divide-y divide-[#102A20]/10 rounded-[24px] border border-[#102A20]/10 bg-white/40">
          {points.map((p,i)=><div key={i} className="flex gap-4 p-5 md:p-7"><span className="font-serif text-xl text-[#B77B45]">{String(i+1).padStart(2,'0')}</span><p className="text-sm leading-7 text-[#102A20]/75 md:text-base">{p}</p></div>)}
        </div>
      </div>
    </section>)}

    <section className="container-wide py-16 md:py-24">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:auto-rows-[190px]">
        {item.gallery.map((src,i)=><div key={src} className={`${i===0?'md:col-span-7 md:row-span-2':i===1?'md:col-span-5':'md:col-span-5'} overflow-hidden rounded-[22px]`}><SafeImage src={src} alt={`${item.title} ${i+1}`} className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"/></div>)}
      </div>
    </section>

    <section className="bg-[#102A20] px-6 py-20 text-white md:py-28"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow text-[#D8C49A]">PLAN YOUR EXPERIENCE</p><h2 className="display mt-4 text-5xl md:text-7xl">Ready to experience Corbett differently?</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#D8C49A]">Tell us your dates, group size and what you want to experience. We’ll help you understand current availability and booking details.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><WhatsAppButton label="CHAT ON WHATSAPP" message={`Hi Jim Corbett Adventures, I want to enquire about ${item.title}.`}/><a href={`tel:${contactConfig.phoneNumber}`} className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em]">Call us</a></div></div></section>
  </main>;
};
const Info=({icon:Icon,label,value})=><div className="rounded-[20px] border border-white/10 bg-white/5 p-6"><Icon size={19} className="text-[#D8C49A]"/><p className="mt-5 text-[9px] font-bold tracking-[0.22em] text-white/45">{label}</p><p className="mt-2 font-serif text-xl text-white">{value}</p></div>;
export default ExperienceDetailPage;
