import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';
import WhatsAppButton from '../ui/WhatsAppButton';

const FinalCTA = () => {
  const image =
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/jim-corbett-jungle-safari.png';

  return (
    <section className="relative min-h-[520px] overflow-hidden">
      <SafeImage
        src={image}
        alt="Jim Corbett jungle"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0B2119]/60" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#D8C49A]">
            YOUR WILD STARTS HERE
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] md:text-7xl">
            The forest
            <br />
            is waiting.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            Tell us what kind of Corbett experience you're looking for.
            We'll help you shape the journey.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              label="PLAN MY TRIP"
              message="Hi Jim Corbett Adventures, I would like help planning my Corbett trip."
            />

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#102A20]"
            >
              TALK TO US
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;