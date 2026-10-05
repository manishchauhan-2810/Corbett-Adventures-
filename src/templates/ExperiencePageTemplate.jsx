import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  Users,
  Check,
} from 'lucide-react';
import SafeImage from '../components/ui/SafeImage';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const defaultImages = {
  'Elephant Ride':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/elephant-ride.webp',

  'Hot Air Balloon':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/RWB-6.png',

  'Bungee Jumping':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-26-at-11.17.47-1.jpeg',

  'Tour Packages':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/images-4-1.webp',

  'Rafting + Safari Combo':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/RWB-2.png',

  'Night Stay':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/DHIKALA-FRH-1.jpg',

  'Jungle Safari':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp',

  'River Rafting':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-shallow-river-768x432.png',
};

const ExperiencePageTemplate = ({
  name = 'Experience',
  description,
  image,
  duration = 'Ask our team',
  capacity = 'Ask our team',
  bestFor = 'Adventure seekers',
  highlights = [],
}) => {
  const heroImage = image || defaultImages[name];

  const cleanDescription =
    description && description !== 'DETAILS TO BE CONFIRMED'
      ? description
      : `Experience ${name.toLowerCase()} in and around Jim Corbett with a local team that knows the landscape.`;

  const fallbackHighlights = [
    'Local assistance',
    'Flexible planning',
    'WhatsApp support',
  ];

  const items =
    highlights.length > 0 ? highlights : fallbackHighlights;

  return (
    <main className="bg-[#F5F1E8] text-[#102A20]">
      <section className="relative min-h-[76vh] overflow-hidden bg-[#102A20] text-white">
        <SafeImage
          src={heroImage}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119] via-[#0B2119]/45 to-[#0B2119]/10" />

        <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-7xl items-end px-6 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl">
            <Link
              to="/experiences"
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/70 hover:text-white"
            >
              <ArrowLeft size={15} />
              ALL EXPERIENCES
            </Link>

            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#D8C49A]">
              WILD EXPERIENCES
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
              {name}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {cleanDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
              THE EXPERIENCE
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Adventure, designed around the forest.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#102A20]/65">
              {cleanDescription}
            </p>

            <div className="mt-10 space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-[#102A20]/10 pb-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102A20] text-[#D8C49A]">
                    <Check size={15} />
                  </div>

                  <p className="text-sm font-medium">
                    {typeof item === 'string'
                      ? item
                      : item.title || item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[24px] bg-[#102A20] p-7 text-white md:p-9">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#D8C49A]">
              QUICK DETAILS
            </p>

            <div className="mt-8 space-y-6">
              <Info
                icon={Clock3}
                label="DURATION"
                value={duration}
              />

              <Info
                icon={Users}
                label="GROUP SIZE"
                value={capacity}
              />

              <Info
                icon={ArrowUpRight}
                label="BEST FOR"
                value={bestFor}
              />
            </div>

            <WhatsAppButton
              className="mt-10 w-full"
              label="ENQUIRE NOW"
              message={`Hi Jim Corbett Adventures, I would like to enquire about ${name}.`}
            />
          </aside>
        </div>
      </section>

      <section className="bg-[#EEE7D5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
                PLAN YOUR DAY
              </p>

              <h2 className="font-serif text-4xl md:text-6xl">
                Make it part of your Corbett story.
              </h2>
            </div>

            <WhatsAppButton
              label="TALK TO A LOCAL"
              message={`Hi Jim Corbett Adventures, I want to plan ${name}.`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex gap-4">
    <Icon size={19} className="mt-0.5 text-[#D8C49A]" />

    <div>
      <p className="text-[9px] font-semibold tracking-[0.2em] text-white/40">
        {label}
      </p>

      <p className="mt-1 text-sm text-white/80">
        {value}
      </p>
    </div>
  </div>
);

export default ExperiencePageTemplate;