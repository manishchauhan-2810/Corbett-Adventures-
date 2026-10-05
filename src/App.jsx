import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import ExperiencePage from './pages/ExperiencePage';
import SafariDetailPage from './pages/templates/SafariDetailPage';
import SafariZones from './pages/SafariZones';
import ZonePage from './pages/ZonePage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import BookingGuide from './pages/BookingGuide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cancellation from './pages/Cancellation';
import Refund from './pages/Refund';
import NotFound from './pages/NotFound';
import { IMG } from './data/site';
import SafeImage from './components/ui/SafeImage';

const SafarisLanding = () => <main className="page-shell"><section className="relative min-h-[70vh] overflow-hidden bg-[#102A20] text-white"><SafeImage src={IMG.jeep} alt="Jim Corbett jeep safari" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/45 to-[#0B2119]/10" /><div className="container-wide relative z-10 flex min-h-[70vh] items-end pb-16 pt-32"><div><p className="eyebrow text-[#D8C49A]">INTO THE WILD</p><h1 className="display mt-4 text-6xl md:text-8xl">Choose your way<br />into Corbett.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/70">From an intimate open Gypsy drive to the iconic Dhikala Canter, choose the safari format and landscape that fit your journey.</p></div></div></section><section className="container-wide py-14 md:py-20"><div className="grid gap-5 md:grid-cols-2"><SafariCard to="/safaris/jeep-safari" image={IMG.jeep} eyebrow="OPEN 4×4 GYPSY" title="Jeep Safari" text="Private open-air safari format for smaller groups across available core and buffer zones." /><SafariCard to="/safaris/canter-safari" image={IMG.canter} eyebrow="OPEN 16-SEATER" title="Canter Safari" text="Shared open-air safari into the Dhikala landscape for day visitors." /></div></section><section className="bg-[#EEE7D5] py-16"><div className="container-wide grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">WHY SAFARI WITH A LOCAL TEAM</p><h2 className="display mt-3 text-4xl md:text-5xl">Plan around the forest,<br />not a generic package.</h2></div><div className="space-y-4 text-sm leading-7 text-[#102A20]/65"><p>Zone access, permits, timings and safari formats can change. The team helps you understand the current options before confirmation.</p><p>Wildlife sightings are never guaranteed. The goal is a well-managed, respectful forest experience with time to observe.</p></div></div></section></main>;
const SafariCard = ({ to, image, eyebrow, title, text }) => <Link to={to} className="group relative min-h-[440px] overflow-hidden rounded-[24px] bg-[#102A20] text-white"><SafeImage src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/25 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 md:p-9"><p className="eyebrow text-[#D8C49A]">{eyebrow}</p><h2 className="mt-2 font-serif text-4xl md:text-5xl">{title}</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/65">{text}</p></div></Link>;

export default function App() { return <Router><div className="min-h-screen bg-[#F5F1E8] text-[#102A20]"><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/experiences" element={<Experiences />} /><Route path="/experiences/:slug" element={<ExperiencePage />} /><Route path="/safaris" element={<SafarisLanding />} /><Route path="/safaris/:safariType" element={<SafariDetailPage />} /><Route path="/river-rafting" element={<Navigate to="/experiences/river-rafting" replace />} /><Route path="/safari-zones" element={<SafariZones />} /><Route path="/safari-zones/:slug" element={<ZonePage />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<BlogPost />} /><Route path="/about" element={<About />} /><Route path="/gallery" element={<Navigate to="/blog" replace />} /><Route path="/faq" element={<FAQ />} /><Route path="/booking-guide" element={<BookingGuide />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} /><Route path="/terms" element={<Terms />} /><Route path="/cancellation" element={<Cancellation />} /><Route path="/refund" element={<Refund />} /><Route path="/experiences/jungle-safari" element={<Navigate to="/safaris/jeep-safari" replace />} /><Route path="*" element={<NotFound />} /></Routes></main><Footer /></div></Router> }
