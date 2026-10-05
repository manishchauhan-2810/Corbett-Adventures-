import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../components/ui/SafeImage';
import { IMG } from '../data/site';

const posts=[
 {slug:'dhikala-vs-bijrani',title:'Dhikala vs. Bijrani: Which Safari Zone Fits Your Trip?',date:'29 March 2026',image:IMG.wildlife2,excerpt:'Two iconic Corbett landscapes, two very different safari rhythms. Compare terrain, safari formats and what each zone is known for.'},
 {slug:'full-day-corbett-rafting',title:'Full-Day Corbett River Rafting: The Kumeriya to Dhikuli Expedition',date:'15 August 2025',image:IMG.rafting2,excerpt:'A long river journey through changing forest scenery, with a stop around Mohaan before the route ends at Dhikuli.'},
 {slug:'best-time-to-visit-corbett',title:'What Each Season Feels Like in Corbett',date:'1 July 2025',image:IMG.mountains,excerpt:'Summer, monsoon and winter each change the forest. Plan around weather, access and the kind of experience you want.'},
 {slug:'adventure-in-corbett',title:'Why Jim Corbett Works for Adventure Lovers',date:'1 June 2025',image:IMG.bungee,excerpt:'Safaris are only one part of the destination. Add rafting, aerial experiences and high-adrenaline activities to the itinerary.'},
 {slug:'best-jeep-safari-zone',title:'Which Jeep Safari Zone Should You Choose?',date:'29 May 2025',image:IMG.jeep,excerpt:'There is no universal “best” zone. Match the landscape and safari format to your dates, priorities and current availability.'},
 {slug:'kosi-river-rafting',title:'Adventure on the Kosi: River Rafting in Jim Corbett',date:'24 May 2025',image:IMG.rafting,excerpt:'Trade the forest road for the river and experience Corbett from a completely different perspective.'},
];
export default function Blog(){return <main className="page-shell"><section className="bg-[#102A20] px-6 pb-20 pt-36 text-white"><div className="container-wide"><p className="eyebrow text-[#D8C49A]">FIELD NOTES</p><h1 className="display mt-4 max-w-5xl text-6xl md:text-8xl">Stories from<br/>the wild.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/60">Safari planning, wildlife, rivers, adventure and practical Corbett notes from the local perspective.</p></div></section><section className="container-wide py-14 md:py-20"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((p,i)=><Link key={p.slug} to={`/blog/${p.slug}`} className={`${i===0?'lg:col-span-2':''} group overflow-hidden rounded-[22px] border border-[#102A20]/10 bg-white`}><div className={`${i===0?'h-[330px]':'h-[230px]'} overflow-hidden`}><SafeImage src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"/></div><div className="p-6"><div className="flex items-center justify-between gap-4"><span className="eyebrow text-[9px]">{p.date}</span><ArrowUpRight size={16} className="text-[#B77B45]"/></div><h2 className="mt-3 font-serif text-2xl leading-tight">{p.title}</h2><p className="mt-3 text-sm leading-6 text-[#102A20]/60">{p.excerpt}</p></div></Link>)}</div></section></main>}
export { posts };
