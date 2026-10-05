import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../components/ui/SafeImage';
import { IMG } from '../data/site';
import { adventureExperiences } from '../data/adventureExperiences';

const cards = [
 ['01','Jungle Safari','WILDLIFE',IMG.jeep,'/safaris/jeep-safari'],
 ['02','River Rafting','ADVENTURE',IMG.rafting,'/experiences/river-rafting'],
 ['03','Elephant Ride','SLOW TRAVEL',IMG.elephant,'/experiences/elephant-ride'],
 ['04','Hot Air Balloon','AERIAL',IMG.balloon,'/experiences/hot-air-balloon'],
 ['05','Bungee Jumping','ADRENALINE',IMG.bungee,'/experiences/bungee-jumping'],
 ['06','Tour Packages','TAILORED',IMG.packages,'/experiences/tour-packages'],
 ['07','Rafting + Safari','COMBO',IMG.rafting2,'/experiences/rafting-safari-combo'],
 ['08','Forest Night Stay','WILDERNESS',IMG.night,'/experiences/night-stay'],
 ['09','Hotel & Resort Booking','STAY',IMG.forest,'/experiences/hotel-resort-booking'],
];

export default function Experiences(){ return <main className="page-shell">
  <section className="bg-[#102A20] px-6 pb-20 pt-36 text-white md:pb-28"><div className="container-wide"><p className="eyebrow text-[#D8C49A]">OUR ADVENTURES</p><h1 className="display mt-4 max-w-5xl text-6xl md:text-8xl">Experience Corbett<br/>beyond the trail.</h1><p className="mt-7 max-w-2xl text-base leading-7 text-white/65">From wildlife safaris and river adventures to aerial experiences, wilderness stays and carefully planned journeys, build a Corbett trip around the way you want to travel.</p></div></section>
  <section className="container-wide py-16 md:py-24"><div className="grid gap-5 md:grid-cols-12">{cards.map(([n,title,cat,img,to],i)=><Link key={title} to={to} className={`${i===0?'md:col-span-7 md:row-span-2':''} ${i===1?'md:col-span-5':''} ${i>1?'md:col-span-4':''} group relative min-h-[300px] overflow-hidden rounded-[24px] bg-[#102A20] ${i===0?'md:min-h-[620px]':''}`}><SafeImage src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"/><div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/90 via-[#0B2119]/15 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white"><div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.25em] text-[#D8C49A]">{n} / {cat}</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-white group-hover:text-[#102A20]"><ArrowUpRight size={15}/></span></div><h2 className="mt-3 font-serif text-3xl md:text-4xl">{title}</h2></div></Link>)}</div></section>
  <section className="bg-[#EEE7D5] py-16 md:py-20"><div className="container-wide grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">LOCAL COORDINATION</p><h2 className="display mt-3 text-4xl md:text-5xl">One local team.<br/>Many ways into Corbett.</h2></div><div className="grid gap-4 sm:grid-cols-2">{['Ground transportation & local transfers','Customised tours & private itineraries','Safari permit allocation support','Safari planning across available zones','Corporate retreats & group travel','Resort stays, dining & local hospitality'].map(x=><div key={x} className="rounded-[18px] bg-[#F5F1E8] p-5 text-sm leading-6 text-[#102A20]/70">{x}</div>)}</div></div></section>
</main> }
