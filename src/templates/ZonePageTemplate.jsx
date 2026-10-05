import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Trees,
  CalendarDays,
  Mountain,
  Moon,
} from 'lucide-react';
import SafeImage from '../components/ui/SafeImage';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const ZonePageTemplate = ({ zone }) => {
  if (!zone) return null;

  return (
    <main className="bg-[#F5F1E8] text-[#102A20]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#102A20] text-white">
        <SafeImage
          src={zone.image}
          alt={zone.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center' }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119] via-[#0B2119]/35 to-[#0B2119]/10" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl">
            <Link
              to="/safari-zones"
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              ALL SAFARI ZONES
            </Link>

            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#D8C49A]">
              SAFARI ZONE
            </p>

            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
              {zone.name}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {zone.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
              THE LANDSCAPE
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              A different rhythm of the forest.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#102A20]/65">
              {zone.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {zone.highlights?.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-[#102A20]/10 bg-white p-5"
                >
                  <Trees
                    size={18}
                    className="mb-4 text-[#B77B45]"
                  />

                  <p className="text-sm font-semibold text-[#102A20]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[24px] bg-[#102A20] p-7 text-white">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#D8C49A]">
              ZONE DETAILS
            </p>

            <div className="mt-7 space-y-5">
              <Detail
                icon={MapPin}
                label="Gate"
                value={zone.gate}
              />

              <Detail
                icon={Trees}
                label="Safari"
                value={zone.safari}
              />

              <Detail
                icon={Mountain}
                label="Landscape"
                value={zone.landscape}
              />

              <Detail
                icon={CalendarDays}
                label="Season"
                value={zone.openingSeason}
              />

              <Detail
                icon={Moon}
                label="Night Stay"
                value={zone.nightStay ? 'Available' : 'Not available'}
              />
            </div>

            <WhatsAppButton
              className="mt-8 w-full"
              label="ENQUIRE ABOUT THIS ZONE"
              message={`Hi Jim Corbett Adventures, I would like to enquire about the ${zone.name} safari zone.`}
            />
          </aside>
        </div>
      </section>

      <section className="bg-[#EEE7D5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
                WHAT YOU MAY SEE
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Wildlife in this landscape
              </h2>
            </div>

            <Link
              to="/safari-zones"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em]"
            >
              EXPLORE ALL ZONES
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 rounded-[24px] bg-[#102A20] p-8 text-white md:p-12">
            <p className="max-w-3xl font-serif text-2xl leading-relaxed md:text-4xl">
              {zone.wildlife}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const Detail = ({ icon: Icon, label, value }) => (
  <div className="flex gap-4 border-b border-white/10 pb-5 last:border-0">
    <Icon size={18} className="mt-0.5 shrink-0 text-[#D8C49A]" />

    <div>
      <p className="text-[9px] font-semibold tracking-[0.2em] text-white/40">
        {label}
      </p>

      <p className="mt-1 text-sm leading-6 text-white/85">
        {value}
      </p>
    </div>
  </div>
);

export default ZonePageTemplate;