import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

const experiences = [
  {
    name: 'Jeep Safari',
    category: 'WILDLIFE',
    description:
      'The most intimate way to explore Corbett — open roads, dense forest and the possibility of the unexpected.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp',
    href: '/safaris/jeep-safari',
  },

  {
    name: 'Canter Safari',
    category: 'DHIKALA',
    description:
      'Experience the legendary Dhikala landscape from an open 16-seater Canter.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/JIM-CORBETT-CANTER-SAFARI.webp',
    href: '/safaris/canter-safari',
  },

  {
    name: 'River Rafting',
    category: 'ADVENTURE',
    description:
      'Trade the forest road for the river and experience another side of the Corbett landscape.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-shallow-river-768x432.png',
    href: '/river-rafting',
  },

  {
    name: 'Forest Night Stay',
    category: 'STAY',
    description:
      'Stay closer to the wilderness and let the forest become part of the experience after sunset.',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/DHIKALA-NIGHT-STAY-BOOKING.webp',
    href: '/experiences/night-stay',
  },
];

const ExperienceGrid = () => {
  return (
    <section className="bg-[#F5F1E8] px-6 pt-6 pb-16 md:pt-8 md:pb-20">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
            CHOOSE YOUR WILD
          </p>

          <h2 className="font-serif text-5xl leading-[0.9] tracking-[-0.03em] text-[#102A20] sm:text-6xl md:text-7xl">
            THE WAY
            <br />
            INTO CORBETT.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#102A20]/60 md:text-[15px]">
            Wildlife, adventure, water and wilderness stays — build the
            experience around the way you want to travel.
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-[#B77B45]" />
        </div>

        {/* =========================
            BENTO EXPERIENCE LAYOUT

            LEFT:
            Jeep - Large
            River - Small

            RIGHT:
            Canter - Small
            Night Stay - Large
        ========================== */}
        <div className="grid gap-5 md:grid-cols-12 md:gap-6">

          {/* ==================================
              LEFT COLUMN
          =================================== */}
          <div className="flex flex-col gap-5 md:col-span-7 md:gap-6">

            {/* =========================
                JEEP SAFARI - LARGE
            ========================== */}
            <Link
              to={experiences[0].href}
              className="group relative h-[420px] overflow-hidden rounded-[24px] md:h-[500px]"
            >
              <SafeImage
                src={experiences[0].image}
                alt={experiences[0].name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#D8C49A]">
                      {experiences[0].category}
                    </p>

                    <h3 className="mt-2 font-serif text-4xl leading-none text-white md:text-5xl">
                      {experiences[0].name}
                    </h3>

                    <p className="mt-4 max-w-xl translate-y-3 text-sm leading-6 text-white/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {experiences[0].description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#102A20] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </span>

                </div>
              </div>
            </Link>


            {/* =========================
                RIVER RAFTING - SMALL
            ========================== */}
            <Link
              to={experiences[2].href}
              className="group relative h-[320px] overflow-hidden rounded-[24px] md:h-[360px]"
            >
              <SafeImage
                src={experiences[2].image}
                alt={experiences[2].name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#D8C49A]">
                      {experiences[2].category}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl leading-none text-white md:text-4xl">
                      {experiences[2].name}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#102A20] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </span>

                </div>
              </div>
            </Link>

          </div>


          {/* ==================================
              RIGHT COLUMN
          =================================== */}
          <div className="flex flex-col gap-5 md:col-span-5 md:gap-6">

            {/* =========================
                CANTER SAFARI - SMALL
            ========================== */}
            <Link
              to={experiences[1].href}
              className="group relative h-[320px] overflow-hidden rounded-[24px] md:h-[360px]"
            >
              <SafeImage
                src={experiences[1].image}
                alt={experiences[1].name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#D8C49A]">
                      {experiences[1].category}
                    </p>

                    <h3 className="mt-2 font-serif text-3xl leading-none text-white md:text-4xl">
                      {experiences[1].name}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#102A20] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </span>

                </div>
              </div>
            </Link>


            {/* =========================
                FOREST NIGHT STAY - LARGE
            ========================== */}
            <Link
              to={experiences[3].href}
              className="group relative h-[420px] overflow-hidden rounded-[24px] md:h-[500px]"
            >
              <SafeImage
                src={experiences[3].image}
                alt={experiences[3].name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119]/95 via-[#0B2119]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8">
                <div className="flex items-end justify-between gap-5">

                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#D8C49A]">
                      {experiences[3].category}
                    </p>

                    <h3 className="mt-2 font-serif text-4xl leading-none text-white md:text-5xl">
                      {experiences[3].name}
                    </h3>

                    <p className="mt-4 max-w-xl translate-y-3 text-sm leading-6 text-white/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {experiences[3].description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#102A20] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={19} />
                  </span>

                </div>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceGrid;