import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Compass, Map, Users } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

gsap.registerPlugin(ScrollTrigger);

const storyImage =
  'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/Feature-image-Jim-Corbett--1024x576.webp';

const experiences = [
  {
    number: '01',
    title: 'Local Knowledge',
    eyebrow: 'KNOW THE FOREST',
    description:
      'Corbett is more than a safari route. Understand its different landscapes, forest roads and safari zones before choosing how you want to explore.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Better Planning',
    eyebrow: 'BUILD YOUR JOURNEY',
    description:
      'Wildlife, adventure, river experiences or a night inside the forest — shape your Corbett trip around the experience you actually want.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-jim-corbettt-e1725697963749.png',
    icon: Map,
  },
  {
    number: '03',
    title: 'Local Support',
    eyebrow: 'TRAVEL WITH CONFIDENCE',
    description:
      'From your first enquiry to the details of your trip, our team keeps the experience simple, clear and personal.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/DHIKALA-FRH-1.jpg',
    icon: Users,
  },
];

const IntroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-reveal',
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F1E8] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* =====================================================
            STORY INTRO
        ===================================================== */}
        <div className="intro-reveal grid overflow-hidden rounded-[28px] bg-[#102A20] md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative min-h-[380px] md:min-h-[500px]">

            <SafeImage
              src={storyImage}
              alt="Jim Corbett forest landscape"
              className="
                h-full
                w-full
                object-cover
                object-[35%_50%]
                md:object-[38%_50%]
              "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/70 via-transparent to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-7 left-7 md:bottom-8 md:left-8">
              <p className="text-[10px] font-semibold tracking-[0.35em] text-[#D8C49A]">
                JIM CORBETT
              </p>

              <p className="mt-2 font-serif text-2xl text-white md:text-3xl">
                A forest that feels like home.
              </p>
            </div>
          </div>

          {/* STORY CONTENT */}
          <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10 lg:p-12">

            <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#D8C49A]">
              OUR STORY
            </p>

            <h2 className="font-serif text-[40px] leading-[0.94] tracking-[-0.02em] text-[#F5F1E8] sm:text-[44px] lg:text-[50px]">
              WE GREW UP
              <br />
              ON THESE
              <br />
              FOREST ROADS.
            </h2>

            <p className="mt-5 font-serif text-xl leading-tight text-[#D8C49A] md:text-2xl">
              Now let us guide you through them.
            </p>

            <div className="my-5 h-px w-14 bg-[#B77B45]" />

            <p className="max-w-xl text-[14px] leading-[1.65] text-white/75 md:text-[15px]">
              Jim Corbett is not just a destination. It&apos;s a legacy.
              For generations, our family has walked these trails, read the
              signs of the jungle, and understood the rhythm of the wild.
            </p>

            <p className="mt-3 max-w-xl text-[14px] leading-[1.65] text-white/60 md:text-[15px]">
              When you travel with us, you&apos;re not simply passing through.
              You&apos;re experiencing Corbett through people who know the
              landscape, the seasons and the character of the forest.
            </p>

            <div className="mt-5 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#D8C49A]">
              DISCOVER CORBETT WITH LOCALS
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* =====================================================
            WHY TRAVEL WITH US
        ===================================================== */}
        <div className="intro-reveal mt-24 text-center md:mt-28">

          <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
            WHY TRAVEL WITH US
          </p>

          <h3 className="mx-auto max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.02em] text-[#102A20] sm:text-5xl md:text-6xl">
            Corbett, with a
            <br />
            local perspective.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-7 text-[#102A20]/70 md:text-[17px]">
            The best journeys are not just about where you go.
            They are about how deeply you experience the place.
          </p>
        </div>

        {/* =====================================================
            IMAGE + INFORMATION CARDS
        ===================================================== */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">

          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="intro-reveal group overflow-hidden rounded-[24px] bg-white"
              >

                {/* CARD IMAGE */}
                <div className="relative h-[280px] overflow-hidden sm:h-[320px]">

                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/75 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#102A20]/60 text-[11px] font-medium text-white backdrop-blur-sm">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] text-[#B77B45]">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                </div>

                {/* CARD CONTENT */}
                <div className="p-7 md:p-8">

                  <p className="text-[10px] font-semibold tracking-[0.25em] text-[#B77B45]">
                    {item.eyebrow}
                  </p>

                  <h4 className="mt-3 font-serif text-2xl leading-tight text-[#102A20] md:text-3xl">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-[15px] leading-7 text-[#102A20]/65">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#102A20]">
                    EXPLORE MORE

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default IntroSection;