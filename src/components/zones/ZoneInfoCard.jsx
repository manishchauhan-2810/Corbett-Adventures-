import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Compass,
  MapPin,
  Trees,
  Moon,
} from 'lucide-react';
import SafeImage from '../ui/SafeImage';

const ZoneInfoCard = ({ zone }) => {
  if (!zone) return null;

  return (
    <article className="overflow-hidden rounded-[24px] border border-[#102A20]/10 bg-[#FAF9F6] shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <SafeImage
          src={zone.image}
          alt={zone.name}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A20]/70 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <p className="mb-1 text-[10px] font-semibold tracking-[0.25em] text-[#D8C49A]">
            SAFARI ZONE
          </p>

          <h3 className="font-serif text-3xl text-white">
            {zone.name}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-6 text-[#102A20]/65">
          {zone.shortDescription || zone.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#F5F1E8] p-3">
            <MapPin size={16} className="mb-2 text-[#B77B45]" />
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#102A20]/45">
              GATE
            </p>
            <p className="mt-1 text-xs font-semibold text-[#102A20]">
              {zone.gate}
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F1E8] p-3">
            <Trees size={16} className="mb-2 text-[#B77B45]" />
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#102A20]/45">
              SAFARI
            </p>
            <p className="mt-1 text-xs font-semibold text-[#102A20]">
              {zone.safari}
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F1E8] p-3">
            <Compass size={16} className="mb-2 text-[#B77B45]" />
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#102A20]/45">
              DISTANCE
            </p>
            <p className="mt-1 text-xs font-semibold text-[#102A20]">
              {zone.distanceFromRamnagar}
            </p>
          </div>

          <div className="rounded-xl bg-[#F5F1E8] p-3">
            <Moon size={16} className="mb-2 text-[#B77B45]" />
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#102A20]/45">
              NIGHT STAY
            </p>
            <p className="mt-1 text-xs font-semibold text-[#102A20]">
              {zone.nightStay ? 'AVAILABLE' : 'NO'}
            </p>
          </div>
        </div>

        <Link
          to={`/safari-zones/${zone.id}`}
          className="group mt-6 flex items-center justify-between rounded-xl bg-[#102A20] px-5 py-4 text-xs font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#1E4A36]"
        >
          EXPLORE {zone.name.toUpperCase()}

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default ZoneInfoCard;