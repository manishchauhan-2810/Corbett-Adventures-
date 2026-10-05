import React from 'react';
import { Plus } from 'lucide-react';
import { contactConfig } from '../config/contact';

const faqs=[
 ['Where is Jim Corbett National Park?','The client site places Corbett in Uttarakhand, with Ramnagar as the local gateway and administrative centre.'],
 ['What is the best time to visit?','The client site gives different seasonal guidance across its pages. Safari access varies by zone and weather, so confirm the current opening status for your chosen zone before travelling.'],
 ['Can I see a tiger on every safari?','No. Wildlife sightings are never guaranteed. The value of a safari is the forest experience, observation and time spent in a regulated wildlife landscape.'],
 ['Which safari should I choose?','Jeep safari suits smaller private groups; the Dhikala day-visit format uses an open 16-seater Canter. The right zone depends on your dates, interests, availability and current forest rules.'],
 ['How early should I book?','The client site recommends advance planning for permits and stays. It also states Indian travellers may book permits up to 45 days ahead and foreign nationals 90 days ahead for certain permit/stay arrangements; confirm the current window with the team.'],
 ['What documents do I need?','Carry the same valid government ID used for the booking. Foreign nationals should keep passport details ready.'],
 ['Are safari timings fixed?','No. Morning and afternoon/evening timings vary by zone and season. Always confirm the current reporting time.'],
 ['Can I book rafting in any season?','River rafting is seasonal and subject to real-time weather and local safety clearances. Ask the team for the current route and operating status.'],
 ['How do I book an experience?','Call or WhatsApp the local team with your dates, group size and preferred activity. They can check current availability and explain the applicable booking details.'],
 ['Where are you located?','BigCat Corbett is listed near Diners Villa, Dhikuli, Ramnagar, Nainital, Uttarakhand 244715.'],
];
export default function FAQ(){return <main className="page-shell"><section className="bg-[#102A20] px-6 pb-20 pt-36 text-white"><div className="container-wide"><p className="eyebrow text-[#D8C49A]">QUESTIONS, ANSWERED</p><h1 className="display mt-4 max-w-4xl text-6xl md:text-8xl">Before you<br/>enter the forest.</h1></div></section><section className="container-wide py-14 md:py-20"><div className="mx-auto max-w-4xl divide-y divide-[#102A20]/10 rounded-[24px] border border-[#102A20]/10 bg-white">{faqs.map(([q,a])=><details key={q} className="group p-6 md:p-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl md:text-2xl">{q}<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F1E8]"><Plus size={16} className="transition group-open:rotate-45"/></span></summary><p className="mt-4 max-w-3xl text-sm leading-7 text-[#102A20]/65">{a}</p></details>)}</div></section><section className="bg-[#EEE7D5] px-6 py-16 text-center"><h2 className="display text-4xl md:text-5xl">Still unsure?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#102A20]/60">Send your travel dates and group size. We can help you understand the available options before you book.</p><a href={contactConfig.whatsappUrl} className="btn-dark mt-7">Ask on WhatsApp</a></section></main>}
