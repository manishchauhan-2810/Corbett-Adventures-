import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

const MobileZonePopup = ({ zone, onClose }) => {
  useEffect(() => {
    if (!zone) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [zone, onClose]);

  if (!zone) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-[#0B2119]/55 p-4 backdrop-blur-sm md:hidden"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-label={`${zone.name} safari zone`}
        className="relative w-full max-w-md overflow-hidden rounded-[24px] bg-[#FAF9F6] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close zone details"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#102A20]/80 text-white"
        >
          <X size={18} />
        </button>

        <div className="h-44 overflow-hidden">
          <SafeImage
            src={zone.image}
            alt={zone.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-[#B77B45]">
            SAFARI ZONE
          </p>

          <h3 className="mt-2 font-serif text-3xl text-[#102A20]">
            {zone.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#102A20]/65">
            {zone.shortDescription || zone.description}
          </p>

          <Link
            to={`/safari-zones/${zone.id}`}
            onClick={onClose}
            className="group mt-5 flex items-center justify-between rounded-xl bg-[#102A20] px-5 py-4 text-xs font-semibold tracking-[0.14em] text-white"
          >
            EXPLORE ZONE

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MobileZonePopup;