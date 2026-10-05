import { MapPin } from 'lucide-react';

const ZoneMarker = ({
  zone,
  isSelected,
  onClick,
  isMobile = false,
}) => {
  if (!zone || !zone.position) return null;

  const position = isMobile
    ? (zone.mobilePosition || zone.position)
    : zone.position;

  return (
    <button
      type="button"
      aria-label={`Explore ${zone.name} zone`}
      aria-pressed={isSelected}
      onClick={() => onClick?.(zone)}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <span
        className={`
          relative flex h-8 w-8 items-center justify-center rounded-full
          border-2 transition-all duration-300
          ${
            isSelected
              ? 'scale-125 border-[#D8C49A] bg-[#102A20] text-[#D8C49A] shadow-[0_0_0_8px_rgba(216,196,154,0.16)]'
              : 'border-white bg-[#B77B45] text-white shadow-lg hover:scale-110'
          }
        `}
      >
        <MapPin size={14} strokeWidth={2} />
      </span>

      <span
        className={`
          absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap
          rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase
          tracking-[0.12em] transition-all duration-300
          ${
            isSelected
              ? 'bg-[#102A20] text-[#F5F1E8]'
              : 'bg-white/90 text-[#102A20] opacity-90'
          }
        `}
      >
        {zone.name}
      </span>
    </button>
  );
};

export default ZoneMarker;