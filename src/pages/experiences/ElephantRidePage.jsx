import React from 'react';
import { ArrowUpRight, Clock3, MapPin, Users } from 'lucide-react';
import SafeImage from '../../components/ui/SafeImage';
import WhatsAppButton from '../../components/ui/WhatsAppButton';
import { contactConfig } from '../../config/contact';
import { IMG } from '../../data/site';

const points = [
  ['01','CLOSE WILDLIFE VIEWING','Spot deer, birds, wild boars and, with luck, big cats without disturbing the surroundings.'],
  ['02','A QUIET FOREST EXPERIENCE','Experience the slow rhythm of the forest with footsteps and bird calls instead of engines.'],
  ['03','ACCESS TO REMOTE TRAILS','Reach narrow forest trails and terrain that conventional safari vehicles cannot easily access.'],
  ['04','EXPERIENCED MAHOUTS & GUIDES','Travel with experienced mahouts and naturalists who understand the elephant and the forest.'],
  ['05','PHOTOGRAPHY & NATURE','A slower, elevated viewpoint creates time for birdwatching, observation and photography.'],
];

const ElephantRidePage=()=> <main className="page-shell overflow-hidden">
  <section className="relative min-h-[70vh] overflow-hidden bg-[#0B2119] text-white">
    <SafeImage src={IMG.elephant} alt="Elephant ride in Jim Corbett" className="absolute inset-0 h-full w-full object-cover object-center"/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/90 via-[#0B2119]/30 to-transparent"/>
    <div className="container-wide relative z-10 flex min-h-[70vh] items-end pb-14 pt-32 md:pb-20"><div className="max-w-4xl"><p className="eyebrow text-[#D8C49A]">WILD EXPERIENCE</p><h1 className="display mt-4 text-5xl md:text-7xl lg:text-[92px]">ELEPHANT RIDE<br/>IN JIM CORBETT.</h1><p className="mt-6 max-w-xl text-lg leading-7 text-white/80">A slower way to experience the forest landscape and its quiet rhythms. An intimate journey through the wilderness of Corbett.</p><a href={contactConfig.whatsappUrl} className="btn-copper mt-8">Enquire now <ArrowUpRight size={15}/></a></div></div>
  </section>

  <section className="container-wide py-14 md:py-20"><div className="grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">THE EXPERIENCE</p><h2 className="display mt-4 text-4xl md:text-6xl">A different way<br/>to enter the forest.</h2></div><div className="space-y-4 body-copy text-lg"><p>Discover the raw, untamed beauty of Corbett Tiger Reserve with a truly immersive Elephant Ride. Sitting atop a gentle giant, you see the jungle unfold from an elevated perspective that conventional safari vehicles cannot provide.</p><p>It is slower and more intentional: tall Sal trees, riverbeds, grasslands, bird calls and the hidden details of the forest become part of the experience.</p></div></div></section>

  {/* Deliberately compact: all five points fit on one desktop viewport section. */}
  <section className="bg-[#102A20] py-10 text-white md:py-12"><div className="container-wide grid gap-8 lg:grid-cols-[34%_66%] lg:items-center"><div><p className="eyebrow text-[#D8C49A]">WHY IT MATTERS</p><h2 className="display mt-3 text-4xl md:text-5xl">Why choose<br/>an elephant ride?</h2><p className="mt-4 max-w-xs text-sm leading-6 text-[#D8C49A]">A peaceful, elevated way to experience Corbett.</p></div><div className="divide-y divide-white/10">{points.map(([n,t,d])=><div key={n} className="grid grid-cols-[38px_1fr] gap-4 py-4 first:pt-0 last:pb-0 md:grid-cols-[44px_1fr]"><span className="font-serif text-lg text-[#B77B45]">{n}</span><div><h3 className="font-serif text-base md:text-lg">{t}</h3><p className="mt-1 max-w-2xl text-xs leading-5 text-white/60 md:text-sm">{d}</p></div></div>)}</div></div></section>

  <section className="container-wide py-14 md:py-20"><div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="eyebrow">SLOW DOWN</p><h2 className="display mt-3 text-4xl md:text-5xl">Look closer.</h2><p className="mt-5 body-copy text-lg">The elephant moves at a gentle, rhythmic pace, allowing guests to absorb the atmosphere of the forest. Without the rush of a motor, you can hear bird calls and see movement in the grasslands more clearly.</p></div><div className="h-[280px] overflow-hidden rounded-[24px] md:h-[360px]"><SafeImage src={IMG.elephantAlt} alt="Elephant safari in Corbett" className="h-full w-full object-cover"/></div></div></section>

  <section className="bg-[#EEE7D5] py-14 md:py-16"><div className="container-wide"><p className="eyebrow">THE DETAILS</p><h2 className="display mt-3 text-3xl md:text-4xl">Elephant ride, at a glance.</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Stat icon={Users} label="CAPACITY" value="Up to 4 adults"/><Stat icon={Clock3} label="DURATION" value="1 hour"/><Stat icon={Clock3} label="FIRST / LAST" value="5 AM / 5 PM"/><Stat icon={MapPin} label="ACCESS" value="Own vehicle to mounting point"/></div></div></section>

  {/* Pricing card: image and content share the same grid height; no empty image strip. */}
  <section className="container-wide py-10 md:py-14"><div className="grid items-stretch overflow-hidden rounded-[24px] border border-[#102A20]/10 bg-[#EEE7D5] lg:grid-cols-[54%_46%]">
    <div className="relative min-h-[300px] lg:min-h-0"><SafeImage src={IMG.elephantAlt} alt="Elephant ride pricing" className="absolute inset-0 h-full w-full object-cover object-center"/></div>
    <div className="flex flex-col justify-center p-7 md:p-9"><p className="eyebrow">PRICING</p><h2 className="display mt-3 text-4xl md:text-5xl">Simple, clear<br/>booking.</h2><div className="mt-5 flex items-end gap-3"><span className="font-serif text-5xl text-[#102A20]">₹3,500</span><span className="pb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#102A20]/45">per elephant</span></div><div className="my-5 h-px bg-[#102A20]/10"/><div className="grid grid-cols-2 gap-6"><div><p className="eyebrow text-[9px]">INDIAN</p><p className="mt-2 font-serif text-xl">₹3,500</p></div><div><p className="eyebrow text-[9px]">FOREIGN</p><p className="mt-2 font-serif text-xl">₹3,500</p></div></div><div className="mt-5 border-t border-[#102A20]/10 pt-5"><p className="eyebrow text-[9px]">CAPACITY</p><p className="mt-2 font-serif text-lg">Up to 4 adults / elephant</p><p className="mt-3 text-[11px] italic leading-5 text-[#102A20]/50">Subject to current forest regulations and availability. Confirm details with our team before booking.</p></div></div>
  </div></section>

  <section className="bg-[#F5F1E8] py-14 md:py-16"><div className="container-wide"><p className="eyebrow">BOOKING NOTES</p><div className="mt-5 grid gap-3 md:grid-cols-3"><Note n="01" t="Reach the mounting point" d="Guests are required to reach the elephant safari mounting point in their own vehicle."/><Note n="02" t="Confirm current timings" d="The client site lists a one-hour ride, with first and last safari starts at 5 AM and 5 PM; operational timing is listed as 6 AM–6 PM."/><Note n="03" t="Check availability" d="Safari access, pricing and timings can change with forest regulations and current availability."/></div></div></section>

  <section className="bg-[#102A20] px-6 py-20 text-white"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow text-[#D8C49A]">READY?</p><h2 className="display mt-3 text-5xl md:text-7xl">Experience Corbett<br/>at a slower pace.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D8C49A]">Call or WhatsApp the local team for current elephant ride availability, timings and booking details.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><WhatsAppButton label="CHAT ON WHATSAPP" message="Hi Jim Corbett Adventures, I would like to enquire about the Elephant Ride in Jim Corbett."/><a href={`tel:${contactConfig.phoneNumber}`} className="inline-flex items-center justify-center rounded-[12px] border border-white/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em]">Call us</a></div></div></section>
</main>;

const Stat=({icon:Icon,label,value})=><div className="rounded-[16px] bg-[#F5F1E8] p-5"><Icon size={17} className="text-[#B77B45]"/><p className="mt-4 text-[9px] font-bold tracking-[0.2em] text-[#B77B45]">{label}</p><p className="mt-1 font-serif text-lg">{value}</p></div>;
const Note=({n,t,d})=><div className="rounded-[18px] border border-[#102A20]/10 bg-white/50 p-5"><span className="font-serif text-2xl text-[#B77B45]">{n}</span><h3 className="mt-4 font-serif text-xl">{t}</h3><p className="mt-2 text-sm leading-6 text-[#102A20]/60">{d}</p></div>;
export default ElephantRidePage;
