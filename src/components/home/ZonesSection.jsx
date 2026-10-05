import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, X } from 'lucide-react';
import SafeImage from '../ui/SafeImage';
import { zones } from '../../data/zones';
import terrainMap from '../../assets/Jim Corbett Terrain Map.png';

/* =========================================================
   ZONE IMAGES
========================================================= */

const zoneImages = {
  dhikala:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/05/DHIKALA-FRH-1.jpg',

  bijrani:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp',

  jhirna:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/Feature-image-Jim-Corbett--1024x576.webp',

  dhela:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/jim-corbett-jeep-safari.webp',

  'durga-devi':
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/06/shivalik-mountains-1024x575.webp',

  garjiya:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/09/rafting-in-jim-corbettt-e1725697963749.png',

  mohaan:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/08/RWB-1.png',

  sitabani:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2024/10/JIM-CORBETT-TOUR-PACKAGES.webp',

  phato:
    'https://cdn-ildinkh.nitrocdn.com/woGOrGCCpCfkWpiZoqmtxhVmwgqwqVgD/assets/images/optimized/rev-3776c59/jimcorbettadventures.com/wp-content/uploads/2025/03/vOT4X7jFVSgRzaGAJGmMq2FIS2Hbj3W7-1024x683.webp',
};

const getZoneImage = (zone) => {
  return (
    zoneImages[zone?.id] ||
    zone?.image ||
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
  );
};


/* =========================================================
   MOBILE POSITIONS

   These are intentionally separate from desktop positions.

   Mobile map is portrait-oriented, therefore desktop
   coordinates should NOT be reused.

   left/top are percentages of the mobile section.
========================================================= */

const mobilePositions = {
  mohaan: {
    left: '18%',
    top: '27%',
  },

  phato: {
    left: '38%',
    top: '35%',
  },

  garjiya: {
    left: '76%',
    top: '38%',
  },

  jhirna: {
    left: '49%',
    top: '45%',
  },

  dhikala: {
    left: '61%',
    top: '55%',
  },

  bijrani: {
    left: '44%',
    top: '62%',
  },

  'durga-devi': {
    left: '76%',
    top: '68%',
  },

  durgaDevi: {
    left: '76%',
    top: '68%',
  },

  dhela: {
    left: '23%',
    top: '73%',
  },

  sitabani: {
    left: '45%',
    top: '87%',
  },
};


/* =========================================================
   COMPONENT
========================================================= */

const ZonesSection = () => {
  /*
   * IMPORTANT:
   *
   * Start with NO selected zone.
   *
   * This means mobile does NOT show a card automatically.
   */
  const [selectedZone, setSelectedZone] = useState(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined'
      ? window.innerWidth < 768
      : false
  );


  /* =======================================================
     RESPONSIVE STATE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      /*
       * Whenever we enter mobile,
       * close any desktop-selected card.
       */
      if (mobile) {
        setSelectedZone(null);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  /* =======================================================
     DESKTOP DEFAULT
  ======================================================= */

  useEffect(() => {
    if (!isMobile && !selectedZone && zones.length > 0) {
      const dhikala =
        zones.find((zone) => zone.id === 'dhikala') ||
        zones[0];

      setSelectedZone(dhikala);
    }
  }, [isMobile, selectedZone]);


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedZone(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);


  if (!zones || zones.length === 0) {
    return null;
  }


  return (
    <section className="relative w-full overflow-hidden bg-[#0B2119]">


      {/* =====================================================
          DESKTOP
      ====================================================== */}

      {!isMobile && (
        <div className="relative min-h-[720px] w-full overflow-hidden">


          {/* =================================================
              TERRAIN MAP
          ================================================== */}

          <div className="absolute inset-0 z-0">

            <img
              src={terrainMap}
              alt="Jim Corbett terrain map"
              draggable="false"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

          </div>


          {/* =================================================
              SUBTLE OVERLAY
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-r
              from-[#05231B]/55
              via-[#05231B]/15
              to-transparent
            "
          />


          {/* =================================================
              LEFT EDITORIAL CONTENT
          ================================================== */}

          <div
            className="
              absolute
              left-8
              top-1/2
              z-30
              w-[370px]
              -translate-y-1/2
              lg:left-12
              xl:left-16
            "
          >

            <p
              className="
                mb-5
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-[#D8C49A]
              "
            >
              SAFARI ZONES
            </p>


            <h2
              className="
                font-serif
                text-[54px]
                leading-[0.9]
                tracking-[-0.025em]
                text-[#F5F1E8]
                sm:text-[62px]
                lg:text-[68px]
              "
            >
              Nine gates.
              <br />
              One forest.
            </h2>


            <p
              className="
                mt-7
                max-w-[350px]
                text-[14px]
                leading-6
                text-[#F5F1E8]/80
                lg:text-[15px]
              "
            >
              Each zone in Jim Corbett offers a unique
              landscape, wildlife experience and story to
              tell. Explore the zone that matches your
              travel style.
            </p>


            <Link
              to="/safari-zones"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-[13px]
                bg-[#D8C49A]
                px-6
                py-4
                text-[10px]
                font-bold
                tracking-[0.08em]
                text-[#102A20]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F0DFB5]
              "
            >
              EXPLORE SAFARI ZONES

              <ArrowRight size={16} />
            </Link>

          </div>


          {/* =================================================
              DESKTOP PINS
          ================================================== */}

          <div className="absolute inset-0 z-20">

            {zones.map((zone) => {

              if (!zone.position) {
                return null;
              }

              const isSelected =
                selectedZone?.id === zone.id;

              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedZone(zone)}
                  aria-label={`Explore ${zone.name}`}
                  className="
                    absolute
                    -translate-x-1/2
                    -translate-y-1/2
                    focus:outline-none
                  "
                  style={{
                    left: zone.position.left,
                    top: zone.position.top,
                  }}
                >

                  {/* PIN */}

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      shadow-[0_4px_16px_rgba(0,0,0,0.4)]
                      transition-all
                      duration-300
                      ${
                        isSelected
                          ? `
                            scale-125
                            border-[#D8C49A]
                            bg-[#102A20]
                            text-[#D8C49A]
                            ring-4
                            ring-[#D8C49A]/20
                          `
                          : `
                            border-[#F5F1E8]
                            bg-[#102A20]
                            text-[#F5F1E8]
                            hover:scale-110
                          `
                      }
                    `}
                  >
                    <MapPin size={15} />
                  </span>


                  {/* LABEL */}

                  <span
                    className={`
                      absolute
                      left-1/2
                      top-full
                      mt-2
                      -translate-x-1/2
                      whitespace-nowrap
                      rounded-full
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      shadow-md
                      ${
                        isSelected
                          ? 'bg-[#D8C49A] text-[#102A20]'
                          : 'bg-[#F5F1E8] text-[#102A20]'
                      }
                    `}
                  >
                    {zone.name}
                  </span>

                </button>
              );
            })}

          </div>


          {/* =================================================
              DESKTOP CARD
          ================================================== */}

          {selectedZone && (
            <div
              className="
                absolute
                right-8
                top-1/2
                z-40
                w-[330px]
                -translate-y-1/2
                xl:right-14
                xl:w-[350px]
              "
            >

              <ZoneCard
                zone={selectedZone}
                mobile={false}
              />

            </div>
          )}

        </div>
      )}


      {/* =====================================================
          MOBILE
      ====================================================== */}

      {isMobile && (
        <div
          className="
            relative
            h-[680px]
            w-full
            overflow-hidden
            bg-[#0B2119]
          "
        >


          {/* =================================================
              MOBILE TERRAIN MAP

              IMPORTANT:
              The image fills the SAME mobile canvas
              against which pins are positioned.
          ================================================== */}

          <div className="absolute inset-0 z-0">

            <img
              src={terrainMap}
              alt="Jim Corbett terrain map"
              draggable="false"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

          </div>


          {/* =================================================
              MOBILE READABILITY OVERLAY
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-[1]
              bg-gradient-to-b
              from-[#05231B]/45
              via-transparent
              to-[#05231B]/10
            "
          />


          {/* =================================================
              MOBILE HEADING
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-5
              top-5
              z-30
            "
          >

            <p
              className="
                mb-2
                text-[8px]
                font-semibold
                tracking-[0.28em]
                text-[#D8C49A]
              "
            >
              SAFARI ZONES
            </p>


            <h2
              className="
                font-serif
                text-[38px]
                leading-[0.88]
                tracking-[-0.025em]
                text-[#F5F1E8]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
              "
            >
              Nine gates.
              <br />
              One forest.
            </h2>

          </div>


          {/* =================================================
              MOBILE PINS
          ================================================== */}

          <div className="absolute inset-0 z-40">

            {zones.map((zone) => {

              const position =
                mobilePositions[zone.id];

              /*
               * If a zone does not have a mobile position,
               * don't render a broken/off-screen marker.
               */
              if (!position) {
                return null;
              }

              const isSelected =
                selectedZone?.id === zone.id;

              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedZone(zone);
                  }}
                  aria-label={`Explore ${zone.name}`}
                  className="
                    absolute
                    z-40
                    flex
                    -translate-x-1/2
                    -translate-y-1/2
                    flex-col
                    items-center
                    justify-center
                    focus:outline-none
                  "
                  style={{
                    left: position.left,
                    top: position.top,
                  }}
                >

                  {/* =========================================
                      LARGE TOUCH TARGET
                  ========================================== */}

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#F5F1E8]
                      bg-[#102A20]
                      text-[#F5F1E8]
                      shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                    "
                  >

                    <MapPin
                      size={18}
                      strokeWidth={2.4}
                    />

                  </span>


                  {/* =========================================
                      LABEL
                  ========================================== */}

                  <span
                    className={`
                      mt-1.5
                      whitespace-nowrap
                      rounded-full
                      border
                      px-2.5
                      py-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      shadow-[0_3px_14px_rgba(0,0,0,0.45)]
                      transition-all
                      ${
                        isSelected
                          ? `
                            border-[#D8C49A]
                            bg-[#D8C49A]
                            text-[#102A20]
                          `
                          : `
                            border-white
                            bg-[#F5F1E8]
                            text-[#102A20]
                          `
                      }
                    `}
                  >
                    {zone.name}
                  </span>

                </button>
              );
            })}

          </div>


          {/* =================================================
              MOBILE CARD

              selectedZone starts NULL.

              Therefore this does NOT render initially.

              It only renders after a pin is clicked.
          ================================================== */}

          {selectedZone && (
            <div
              className="
                absolute
                inset-0
                z-[100]
              "
              onClick={(event) => {

                /*
                 * Clicking anywhere outside the card
                 * closes the card.
                 */

                if (
                  event.target === event.currentTarget
                ) {
                  setSelectedZone(null);
                }

              }}
            >

              <ZoneCard
                zone={selectedZone}
                mobile={true}
                onClose={() => setSelectedZone(null)}
              />

            </div>
          )}

        </div>
      )}

    </section>
  );
};


/* =========================================================
   ZONE CARD
========================================================= */

const ZoneCard = ({
  zone,
  mobile = false,
  onClose,
}) => {

  return (
    <article
      className={`
        overflow-hidden
        border
        border-[#102A20]/10
        bg-[#FAF9F6]
        shadow-[0_25px_80px_rgba(0,0,0,0.4)]
        ${
          mobile
            ? `
              absolute
              bottom-4
              left-1/2
              w-[calc(100%-24px)]
              max-w-[380px]
              -translate-x-1/2
              rounded-[22px]
            `
            : 'rounded-[24px]'
        }
      `}
      onClick={(event) => {
        if (mobile) {
          event.stopPropagation();
        }
      }}
    >


      {/* =====================================================
          MOBILE CLOSE
      ====================================================== */}

      {mobile && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close zone details"
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#102A20]
            text-[#F5F1E8]
            shadow-lg
          "
        >
          <X size={17} />
        </button>
      )}


      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className={
          mobile
            ? 'h-[125px] w-full overflow-hidden'
            : 'relative h-52 w-full overflow-hidden'
        }
      >

        <SafeImage
          src={getZoneImage(zone)}
          alt={zone.name}
          className="h-full w-full object-cover"
        />


        {!mobile && (
          <>
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#102A20]/75
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
              "
            >

              <p
                className="
                  mb-1
                  text-[9px]
                  font-semibold
                  tracking-[0.25em]
                  text-[#D8C49A]
                "
              >
                SAFARI ZONE
              </p>

              <h3
                className="
                  font-serif
                  text-3xl
                  text-white
                "
              >
                {zone.name}
              </h3>

            </div>
          </>
        )}

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-4 md:p-5">

        {mobile && (
          <p
            className="
              text-[8px]
              font-semibold
              tracking-[0.25em]
              text-[#B77B45]
            "
          >
            SAFARI ZONE
          </p>
        )}


        {mobile && (
          <h3
            className="
              mt-1
              font-serif
              text-[25px]
              leading-none
              text-[#102A20]
            "
          >
            {zone.name}
          </h3>
        )}


        <p
          className="
            mt-2
            text-xs
            leading-5
            text-[#102A20]/65
            md:text-sm
            md:leading-6
          "
        >
          {zone.shortDescription ||
            zone.description ||
            'Explore the landscapes and wildlife of Jim Corbett.'}
        </p>


        {/* ===================================================
            INFO ROWS
        ==================================================== */}

        <div className="mt-4 space-y-3 md:mt-5">

          {/* BEST FOR */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-[#102A20]/10
              pb-3
            "
          >

            <span
              className="
                shrink-0
                text-[8px]
                font-semibold
                tracking-[0.18em]
                text-[#102A20]/40
              "
            >
              BEST FOR
            </span>


            <span
              className="
                max-w-[200px]
                text-right
                text-[9px]
                font-semibold
                uppercase
                text-[#102A20]
              "
            >
              {zone.bestFor ||
                'WILDLIFE EXPERIENCE'}
            </span>

          </div>


          {/* SAFARI */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              border-b
              border-[#102A20]/10
              pb-3
            "
          >

            <span
              className="
                shrink-0
                text-[8px]
                font-semibold
                tracking-[0.18em]
                text-[#102A20]/40
              "
            >
              SAFARI
            </span>


            <span
              className="
                text-right
                text-[9px]
                font-semibold
                uppercase
                text-[#102A20]
              "
            >
              {zone.safari ||
                'JEEP / CANTER'}
            </span>

          </div>


          {/* HIGHLIGHTS */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-4
            "
          >

            <span
              className="
                shrink-0
                pt-1
                text-[8px]
                font-semibold
                tracking-[0.18em]
                text-[#102A20]/40
              "
            >
              HIGHLIGHTS
            </span>


            <span
              className="
                max-w-[210px]
                text-right
                text-[9px]
                font-semibold
                uppercase
                leading-4
                text-[#102A20]
              "
            >
              {zone.highlights ||
                zone.distanceFromRamnagar ||
                'FOREST & WILDLIFE'}
            </span>

          </div>

        </div>


        {/* ===================================================
            CTA
        ==================================================== */}

        <Link
          to={`/safari-zones/${zone.id}`}
          onClick={() => {
            if (mobile && onClose) {
              onClose();
            }
          }}
          className="
            mt-4
            flex
            items-center
            justify-between
            rounded-xl
            bg-[#102A20]
            px-4
            py-3.5
            text-[8px]
            font-bold
            tracking-[0.12em]
            text-white
            transition-colors
            hover:bg-[#1E4A36]
            md:mt-5
            md:px-5
            md:py-4
          "
        >

          EXPLORE {zone.name.toUpperCase()}

          <ArrowRight size={15} />

        </Link>

      </div>

    </article>
  );
};


export default ZonesSection;