import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SafeImage from '../ui/SafeImage';

const galleryImages = [
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/Feature-image-Jim-Corbett--1024x576.webp',
    alt: 'Jim Corbett landscape',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/08/RWB-1.png',
    alt: 'Corbett adventure experience',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/shivalik-mountains-1024x575.webp',
    alt: 'Shivalik mountains',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/JIM-CORBETT-TOUR-PACKAGES.webp',
    alt: 'Jim Corbett tour packages',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/images-3.webp',
    alt: 'Corbett wilderness',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-jim-corbettt-e1725697963749.png',
    alt: 'River rafting in Jim Corbett',
  },
  {
    src: 'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/03/vOT4X7jFVSgRzaGAJGmMq2FIS2Hbj3W7-1024x683.webp',
    alt: 'Jim Corbett wildlife',
  },
];

const ImageCard = ({ image, className = '' }) => {
  return (
    <div
      className={`
        group
        relative
        min-h-0
        overflow-hidden
        rounded-[20px]
        ${className}
      `}
    >
      <SafeImage
        src={image.src}
        alt={image.alt}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.045]
        "
      />

      {/* Very subtle hover layer */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#102A20]/0
          transition-colors
          duration-500
          group-hover:bg-[#102A20]/10
        "
      />
    </div>
  );
};

const PhotoMosaic = () => {
  return (
    <section className="bg-[#282D22] px-6 py-20 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px]">

        {/* -------------------------------- */}
        {/* SECTION HEADER */}
        {/* -------------------------------- */}

        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#D8C49A]">
              FROM THE FOREST
            </p>

            <h2 className="font-serif text-4xl leading-[0.9] tracking-[-0.03em] text-[#F5F1E8] sm:text-6xl md:text-7xl">
              MOMENTS FROM CORBETT
            </h2>
            <h2 className="font-serif text-4xl leading-[0.9] tracking-[-0.03em] text-[#F5F1E8] sm:text-6xl md:text-7xl">
              THROUGH OUR LENS.
            </h2>
          </div>

        </div>

        {/* -------------------------------- */}
        {/* DESKTOP BENTO */}
        {/* -------------------------------- */}

        <div
          className="
            hidden
            md:grid
            md:grid-cols-12
            md:grid-rows-[250px_180px_250px]
            gap-4
            lg:grid-rows-[270px_190px_270px]
          "
        >

          {/* ============================== */}
          {/* IMAGE 1 — LARGE LEFT */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[0]}
            className="
              col-span-6
              row-span-2
            "
          />

          {/* ============================== */}
          {/* IMAGE 2 — TOP RIGHT WIDE */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[1]}
            className="
              col-span-6
              row-span-1
            "
          />

          {/* ============================== */}
          {/* IMAGE 3 — MIDDLE SMALL */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[2]}
            className="
              col-span-3
              row-span-1
            "
          />

          {/* ============================== */}
          {/* IMAGE 4 — MIDDLE SMALL */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[3]}
            className="
              col-span-3
              row-span-1
            "
          />

          {/* ============================== */}
          {/* IMAGE 5 — BOTTOM SMALL */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[4]}
            className="
              col-span-3
              row-span-1
            "
          />

          {/* ============================== */}
          {/* IMAGE 6 — BOTTOM SMALL */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[5]}
            className="
              col-span-3
              row-span-1
            "
          />

          {/* ============================== */}
          {/* IMAGE 7 — BOTTOM WIDE */}
          {/* ============================== */}

          <ImageCard
            image={galleryImages[6]}
            className="
              col-span-6
              row-span-1
            "
          />

        </div>

        {/* -------------------------------- */}
        {/* MOBILE LAYOUT */}
        {/* -------------------------------- */}

        <div className="grid grid-cols-1 gap-4 md:hidden">

          {/* Large feature */}
          <ImageCard
            image={galleryImages[0]}
            className="h-[360px]"
          />

          {/* Wide image */}
          <ImageCard
            image={galleryImages[1]}
            className="h-[220px]"
          />

          {/* Two images */}
          <div className="grid grid-cols-2 gap-4">

            <ImageCard
              image={galleryImages[2]}
              className="h-[190px]"
            />

            <ImageCard
              image={galleryImages[3]}
              className="h-[190px]"
            />

          </div>

          {/* Two images */}
          <div className="grid grid-cols-2 gap-4">

            <ImageCard
              image={galleryImages[4]}
              className="h-[190px]"
            />

            <ImageCard
              image={galleryImages[5]}
              className="h-[190px]"
            />

          </div>

          {/* Final wide */}
          <ImageCard
            image={galleryImages[6]}
            className="h-[230px]"
          />

        </div>

        {/* -------------------------------- */}
        {/* GALLERY LINK */}
        {/* -------------------------------- */}

        <div className="mt-10 flex justify-center md:mt-12">

          <Link
            to="/gallery"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b
              border-white/30
              pb-2
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-[#F5F1E8]
              transition-all
              duration-300
              hover:border-[#D8C49A]
              hover:text-[#D8C49A]
            "
          >
            VIEW FULL GALLERY

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default PhotoMosaic;