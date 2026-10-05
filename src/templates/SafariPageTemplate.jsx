import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  Users,
  MapPin,
} from 'lucide-react';
import SafeImage from '../components/ui/SafeImage';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const fallbackImage =
  'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp';

const SafariPageTemplate = ({ safari }) => {
  if (!safari) return null;

  const {
    title,
    name,
    description,
    safariType,
    capacity,
    bestFor,
    zones = [],
    timings = {},
    pricing = {},
    experience,
    inclusions = [],
    exclusions = [],
    bookingProcess = [],
    image = fallbackImage,
  } = safari;

  const pageTitle = title || name || 'Safari in Jim Corbett';

  return (
    <main className="bg-[#F5F1E8] text-[#102A20]">
      <section className="relative min-h-[78vh] overflow-hidden bg-[#102A20] text-white">
        <SafeImage
          src={image}
          alt={pageTitle}
          fallback={fallbackImage}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2119] via-[#0B2119]/40 to-[#0B2119]/10" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 pb-16 pt-36 md:pb-24">
          <div className="max-w-4xl">
            <Link
              to="/safaris"
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/70 hover:text-white"
            >
              <ArrowLeft size={15} />
              ALL SAFARIS
            </Link>

            <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#D8C49A]">
              WILDLIFE EXPERIENCE
            </p>

            <h1 className="font-serif text-5xl leading-[0.92] md:text-7xl lg:text-8xl">
              {pageTitle}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-4">
          <Stat
            icon={Users}
            label="CAPACITY"
            value={capacity || 'Contact us'}
          />

          <Stat
            icon={Clock3}
            label="TIMINGS"
            value={
              typeof timings === 'object'
                ? Object.values(timings).join(' · ')
                : timings || 'Seasonal'
            }
          />

          <Stat
            icon={MapPin}
            label="BEST FOR"
            value={bestFor || 'Wildlife lovers'}
          />

          <Stat
            icon={MapPin}
            label="SAFARI TYPE"
            value={safariType || name || 'Safari'}
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
              THE EXPERIENCE
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Into the forest,
              <br />
              without rushing it.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#102A20]/65">
              {experience || description}
            </p>

            {zones.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#102A20]">
                  AVAILABLE ZONES
                </p>

                <div className="flex flex-wrap gap-2">
                  {zones.map((zone) => (
                    <Link
                      key={typeof zone === 'string' ? zone : zone.id}
                      to={`/safari-zones/${
                        typeof zone === 'string'
                          ? zone.toLowerCase().replace(/\s+/g, '-')
                          : zone.id
                      }`}
                      className="rounded-full border border-[#102A20]/10 bg-[#F5F1E8] px-4 py-2 text-xs font-medium text-[#102A20]"
                    >
                      {typeof zone === 'string' ? zone : zone.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="rounded-[24px] bg-[#102A20] p-7 text-white md:p-9">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#D8C49A]">
              PLAN YOUR SAFARI
            </p>

            <div className="mt-8 space-y-8">
              <Checklist
                title="INCLUDED"
                items={inclusions}
              />

              {exclusions.length > 0 && (
                <Checklist
                  title="NOT INCLUDED"
                  items={exclusions}
                  muted
                />
              )}
            </div>

            <WhatsAppButton
              className="mt-10 w-full"
              label="PLAN THIS SAFARI"
              message={`Hi Jim Corbett Adventures, I would like to enquire about the ${pageTitle}.`}
            />
          </div>
        </div>
      </section>

      {bookingProcess.length > 0 && (
        <section className="bg-[#EEE7D5] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.3em] text-[#B77B45]">
              HOW IT WORKS
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Booking your safari
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {bookingProcess.map((step, index) => (
                <div
                  key={index}
                  className="rounded-[20px] bg-white p-7"
                >
                  <span className="font-serif text-4xl text-[#B77B45]">
                    0{index + 1}
                  </span>

                  <p className="mt-5 text-sm leading-6 text-[#102A20]/70">
                    {typeof step === 'string'
                      ? step
                      : step.description || step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#102A20] px-6 py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.3em] text-[#D8C49A]">
              READY?
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              The forest is waiting.
            </h2>
          </div>

          <WhatsAppButton
            label="START PLANNING"
            message={`Hi Jim Corbett Adventures, I want to plan a ${pageTitle}.`}
          />
        </div>
      </section>
    </main>
  );
};

const Stat = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl border border-[#102A20]/10 bg-white p-5">
    <Icon size={18} className="mb-5 text-[#B77B45]" />

    <p className="text-[9px] font-semibold tracking-[0.2em] text-[#102A20]/40">
      {label}
    </p>

    <p className="mt-2 text-sm font-semibold leading-5 text-[#102A20]">
      {value}
    </p>
  </div>
);

const Checklist = ({ title, items, muted = false }) => (
  <div>
    <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[#D8C49A]">
      {title}
    </p>

    <div className="space-y-3">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="flex gap-3">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${
                muted ? 'text-white/30' : 'text-[#D8C49A]'
              }`}
            />

            <p className="text-sm leading-6 text-white/70">
              {typeof item === 'string'
                ? item
                : item.title || item.description}
            </p>
          </div>
        ))
      ) : (
        <p className="text-sm text-white/50">
          Details available on enquiry.
        </p>
      )}
    </div>
  </div>
);

export default SafariPageTemplate;