import React from 'react';
import { ArrowRight } from 'lucide-react';

const adventures = [
  {
    number: '01',
    category: 'WILDLIFE EXPERIENCE',
    title: 'Elephant Ride',
    desc: 'Discover Corbett from a slower, more intimate perspective. Move through Sal forests, riverbeds and open meadows atop a gentle giant.',
    highlights: [
      'Close wildlife viewing',
      'Eco-friendly experience',
      'Access to remote forest areas',
      'Experienced mahouts and naturalists',
    ],
    meta: 'UP TO 4 GUESTS · 1 HOUR',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/elephant-ride.webp',
  },

  {
    number: '02',
    category: 'AERIAL ADVENTURE',
    title: 'Hot Air Balloon',
    desc: 'Rise above the forest canopy for a completely different view of Corbett, with panoramic Himalayan foothill landscapes below.',
    highlights: [
      'Panoramic forest views',
      'Early morning and evening rides',
      'Family-friendly adventure',
      'Weather-dependent experience',
    ],
    meta: 'EARLY MORNING & EVENING · FROM ₹400',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/raftingwalebhaiya.com/wp-content/uploads/2024/09/RWB-6.png',
  },

  {
    number: '03',
    category: 'ADRENALINE',
    title: 'Bungee Jumping',
    desc: 'Take the plunge against the dramatic backdrop of Himalayan foothills and dense Sal forests.',
    highlights: [
      "India's highest jump — 147m",
      'Freestyle, Roof & Slide Jumps',
      'Professional jump masters',
      'Certified safety equipment',
    ],
    meta: '',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.17.47-1.jpeg',
  },

  {
    number: '04',
    category: 'CURATED JOURNEY',
    title: 'Tour Packages',
    desc: 'Curated Corbett experiences that bring safaris, adventure and stays together in one seamless journey.',
    highlights: [
      'Custom itineraries',
      'Safari & adventure combos',
      'Comfortable forest stays',
      'Family and group trips',
    ],
    meta: '1N/2D TO 4N/5D · FROM ₹5,000',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/images-4-1.webp',
  },

  {
    number: '05',
    category: 'COMBO EXPERIENCE',
    title: 'Rafting + Safari Combo',
    desc: 'Pair the rush of the river with the quiet anticipation of a jungle safari for the ultimate adventure day.',
    highlights: [
      'Kosi River rafting',
      'Open jeep safari',
      'Professional guides',
      'All equipment provided',
    ],
    meta: '',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/raftingwalebhaiya.com/wp-content/uploads/2024/09/RWB-2.png',
  },

  {
    number: '06',
    category: 'FOREST STAY',
    title: 'Forest Night Stay',
    desc: 'Stay closer to the wild and experience Corbett after the safari vehicles disappear. A rare opportunity to hear the forest speak.',
    highlights: [
      'Dhikala Forest Lodge',
      'Authentic wilderness stay',
      'Morning & evening safaris',
      'Deep forest experience',
    ],
    meta: 'DHIKALA · FOREST STAY',
    image:
      'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/DHIKALA-FRH-1.jpg',
  },
];

const AdventureSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6]">

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =========================================================
            INTRO
        ========================================================== */}

        <div className="relative py-20 text-center md:py-24 lg:py-28">

          <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
            BEYOND THE SAFARI
          </p>

          <h2
            className="
              mx-auto
              max-w-4xl
              font-serif
              text-[48px]
              leading-[0.92]
              tracking-[-0.035em]
              text-[#102A20]
              sm:text-[58px]
              md:text-[68px]
              lg:text-[76px]
            "
          >
            More Ways to
            <br />
            Experience Corbett.
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-[15px]
              leading-7
              text-[#102A20]/65
              md:text-[16px]
            "
          >
            From quiet forest trails to high-adrenaline adventures,
            discover another side of Corbett.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#B77B45]/40" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#B77B45]" />

            <span className="h-px w-10 bg-[#B77B45]/40" />
          </div>

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
              text-[9px]
              font-semibold
              tracking-[0.18em]
              text-[#102A20]/45
            "
          >
            <span>WILDLIFE</span>
            <span>ADVENTURE</span>
            <span>JOURNEYS</span>
            <span>STAYS</span>
          </div>

        </div>


        {/* =========================================================
            EXPERIENCES
        ========================================================== */}

        <div className="pb-0">

          {adventures.map((adv, i) => {

            const reversed = i % 2 === 1;

            return (
              <article
                key={adv.number}
                className={`
                  relative
                  grid
                  items-center
                  gap-12
                  border-t
                  border-[#102A20]/10
                  py-16
                  md:grid-cols-2
                  md:gap-16
                  md:py-20
                  lg:gap-24
                  lg:py-24
                `}
              >

                {/* Alternating background */}

                {reversed && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-1/2
                      z-0
                      w-screen
                      -translate-x-1/2
                      bg-[#F5F1E8]/55
                    "
                  />
                )}


                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className={`
                    relative
                    z-10
                    ${reversed ? 'md:order-2' : 'md:order-1'}
                  `}
                >

                  {/* Large background number */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -top-16
                      left-[-20px]
                      z-0
                      select-none
                      font-serif
                      text-[150px]
                      leading-none
                      text-[#102A20]/[0.035]
                      md:text-[190px]
                    "
                  >
                    {adv.number}
                  </span>


                  {/* Image */}

                  <div
                    className="
                      relative
                      z-10
                      overflow-hidden
                      rounded-[22px]
                      bg-[#102A20]
                    "
                  >

                    <img
                      src={adv.image}
                      alt={adv.title}
                      className="
                        aspect-[4/3]
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-out
                        hover:scale-[1.035]
                      "
                    />

                    {/* Image gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0B2119]/50
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Image counter */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/20
                        bg-[#102A20]/50
                        px-4
                        py-2
                        backdrop-blur-sm
                      "
                    >

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          tracking-[0.2em]
                          text-[#D8C49A]
                        "
                      >
                        {adv.number} / 06
                      </span>

                      <span className="h-3 w-px bg-white/30" />

                      <span
                        className="
                          text-[8px]
                          font-medium
                          tracking-[0.16em]
                          text-white/80
                        "
                      >
                        CORBETT
                      </span>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className={`
                    relative
                    z-10
                    ${reversed ? 'md:order-1' : 'md:order-2'}
                  `}
                >

                  {/* Number + category */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        font-serif
                        text-[17px]
                        text-[#B77B45]
                      "
                    >
                      {adv.number}
                    </span>

                    <span className="h-px w-10 bg-[#B77B45]/40" />

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.28em]
                        text-[#B77B45]
                      "
                    >
                      {adv.category}
                    </span>

                  </div>


                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      max-w-xl
                      font-serif
                      text-[42px]
                      leading-[0.95]
                      tracking-[-0.025em]
                      text-[#102A20]
                      sm:text-[48px]
                      md:text-[50px]
                      lg:text-[56px]
                    "
                  >
                    {adv.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-[15px]
                      leading-7
                      text-[#102A20]/65
                      md:text-[16px]
                    "
                  >
                    {adv.desc}
                  </p>


                  {/* =================================================
                      AT A GLANCE
                  ================================================== */}

                  <div
                    className="
                      mt-8
                      border-y
                      border-[#102A20]/10
                      py-5
                    "
                  >

                    <p
                      className="
                        mb-3
                        text-[9px]
                        font-semibold
                        tracking-[0.22em]
                        text-[#102A20]/40
                      "
                    >
                      AT A GLANCE
                    </p>

                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">

                      {adv.meta ? (
                        adv.meta.split('·').map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2"
                          >

                            <span
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-[#B77B45]
                              "
                            />

                            <span
                              className="
                                text-[10px]
                                font-medium
                                tracking-[0.12em]
                                text-[#102A20]/65
                              "
                            >
                              {item.trim()}
                            </span>

                          </div>
                        ))
                      ) : (
                        <span
                          className="
                            text-[10px]
                            font-medium
                            tracking-[0.12em]
                            text-[#102A20]/55
                          "
                        >
                          CORBETT EXPERIENCE
                        </span>
                      )}

                    </div>

                  </div>


                  {/* =================================================
                      EXPERIENCE HIGHLIGHTS
                  ================================================== */}

                  <div className="mt-7">

                    <p
                      className="
                        mb-4
                        text-[9px]
                        font-semibold
                        tracking-[0.22em]
                        text-[#102A20]/40
                      "
                    >
                      EXPERIENCE HIGHLIGHTS
                    </p>

                    <div
                      className="
                        grid
                        gap-x-8
                        gap-y-3
                        sm:grid-cols-2
                      "
                    >

                      {adv.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-start
                            gap-3
                            text-[13px]
                            leading-5
                            text-[#102A20]/65
                          "
                        >

                          <span
                            className="
                              mt-[7px]
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-[#B77B45]
                            "
                          />

                          <span>
                            {highlight}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>


                  {/* =================================================
                      CTA
                  ================================================== */}

                  <button
                    type="button"
                    className="
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      border-b
                      border-[#102A20]/30
                      pb-2
                      text-[10px]
                      font-semibold
                      tracking-[0.2em]
                      text-[#102A20]
                      transition-all
                      duration-300
                      hover:border-[#B77B45]
                      hover:text-[#B77B45]
                    "
                  >

                    {adv.title === 'Tour Packages'
                      ? 'EXPLORE PACKAGES'
                      : 'DISCOVER MORE'}

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default AdventureSection;