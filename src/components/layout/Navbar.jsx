import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { zones } from '../../data/zones';
import { contactConfig } from '../../config/contact';

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.2V11H7.5v3h2.7v8h3.3Z" />
  </svg>
);

const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.4"
      cy="6.7"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const Navbar = () => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [experienceOpen, setExperienceOpen] = useState(false);
  const [safariOpen, setSafariOpen] = useState(false);
  const [zoneOpen, setZoneOpen] = useState(false);

  const isHome = location.pathname === '/';

  /*
   * Homepage:
   * transparent at very top
   *
   * Every other page:
   * solid green
   */
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
   * Close mobile menu whenever route changes.
   */
  useEffect(() => {
    setMobileOpen(false);
    setExperienceOpen(false);
    setSafariOpen(false);
    setZoneOpen(false);
  }, [location.pathname]);

  /*
   * Close all desktop dropdowns when mouse leaves
   * the navbar area.
   */
  const closeDesktopMenus = () => {
    setExperienceOpen(false);
    setSafariOpen(false);
    setZoneOpen(false);
  };

  const navText = transparent
    ? 'text-white/95 hover:text-white'
    : 'text-[#F5F1E8] hover:text-white';

  return (
    <nav
      className={`
        fixed inset-x-0 top-0
        z-[9999]
        h-[82px]
        overflow-visible
        transition-all duration-300
        ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-white/10 bg-[#0B2119] shadow-lg'
        }
      `}
      style={{
        isolation: 'isolate',
      }}
      onMouseLeave={closeDesktopMenus}
    >
      {/* =====================================================
          NAVBAR INNER
      ====================================================== */}

      <div
        className="
          relative
          z-[9999]
          mx-auto
          flex
          h-full
          w-full
          max-w-[1400px]
          items-center
          justify-between
          px-5
          md:px-10
        "
      >

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="relative z-[10000] flex shrink-0 items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="Jim Corbett Adventures"
            className="h-10 w-10 object-contain"
          />

          <div className="leading-none text-[#F5F1E8]">
            <div className="font-serif text-[15px]">
              JIM CORBETT
            </div>

            <div className="mt-1 text-[8px] font-semibold tracking-[0.18em]">
              ADVENTURES
            </div>
          </div>
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div
          className="
            relative
            z-[9999]
            hidden
            items-center
            gap-7
            lg:flex
          "
        >

          {/* HOME */}

          <Link
            to="/"
            className={`
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.06em]
              transition-colors
              ${navText}
            `}
          >
            Home
          </Link>


          {/* =================================================
              EXPERIENCES
          ================================================== */}

          <div
            className="relative z-[9999]"
            onMouseEnter={() => {
              setExperienceOpen(true);
              setSafariOpen(false);
              setZoneOpen(false);
            }}
          >
            <Link
              to="/experiences"
              className={`
                flex
                items-center
                gap-1
                whitespace-nowrap
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.06em]
                transition-colors
                ${navText}
              `}
            >
              Experiences
              <ChevronDown
                size={12}
                className={experienceOpen ? 'rotate-180' : ''}
              />
            </Link>

            {experienceOpen && (
              <DropdownPanel>

                <NavItem
                  to="/experiences"
                  label="All Experiences"
                  strong
                />

                <NavItem
                  to="/experiences/elephant-ride"
                  label="Elephant Ride"
                />

                <NavItem
                  to="/experiences/jungle-safari"
                  label="Jungle Safari"
                />

                <NavItem
                  to="/experiences/hot-air-balloon"
                  label="Hot Air Balloon"
                />

                <NavItem
                  to="/experiences/bungee-jumping"
                  label="Bungee Jumping"
                />

                <NavItem
                  to="/experiences/river-rafting"
                  label="River Rafting"
                />

                <NavItem
                  to="/experiences/rafting-safari-combo"
                  label="Rafting + Safari"
                />

                <NavItem
                  to="/experiences/tour-packages"
                  label="Tour Packages"
                />

                <NavItem
                  to="/experiences/night-stay"
                  label="Night Stay"
                />

              </DropdownPanel>
            )}
          </div>


          {/* =================================================
              SAFARIS
          ================================================== */}

          <div
            className="relative z-[9999]"
            onMouseEnter={() => {
              setSafariOpen(true);
              setExperienceOpen(false);
              setZoneOpen(false);
            }}
          >
            <Link
              to="/safaris"
              className={`
                flex
                items-center
                gap-1
                whitespace-nowrap
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.06em]
                transition-colors
                ${navText}
              `}
            >
              Safaris

              <ChevronDown
                size={12}
                className={safariOpen ? 'rotate-180' : ''}
              />
            </Link>

            {safariOpen && (
              <DropdownPanel>

                <NavItem
                  to="/safaris"
                  label="All Safaris"
                  strong
                />

                <NavItem
                  to="/safaris/jeep-safari"
                  label="Jeep Safari"
                />

                <NavItem
                  to="/safaris/canter-safari"
                  label="Canter Safari"
                />

              </DropdownPanel>
            )}
          </div>


          {/* RIVER RAFTING */}

          <Link
            to="/experiences/river-rafting"
            className={`
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.06em]
              transition-colors
              ${navText}
            `}
          >
            River Rafting
          </Link>


          {/* =================================================
              SAFARI ZONES
          ================================================== */}

          <div
            className="relative z-[9999]"
            onMouseEnter={() => {
              setZoneOpen(true);
              setExperienceOpen(false);
              setSafariOpen(false);
            }}
          >
            <Link
              to="/safari-zones"
              className={`
                flex
                items-center
                gap-1
                whitespace-nowrap
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.06em]
                transition-colors
                ${navText}
              `}
            >
              Safari Zones

              <ChevronDown
                size={12}
                className={zoneOpen ? 'rotate-180' : ''}
              />
            </Link>

            {zoneOpen && (
              <DropdownPanel>

                <NavItem
                  to="/safari-zones"
                  label="All Safari Zones"
                  strong
                />

                {zones.map((zone) => (
                  <NavItem
                    key={zone.id}
                    to={`/safari-zones/${zone.id}`}
                    label={zone.name}
                  />
                ))}

              </DropdownPanel>
            )}
          </div>


          {/* ABOUT */}

          <Link
            to="/about"
            className={`
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.06em]
              transition-colors
              ${navText}
            `}
          >
            About
          </Link>


          {/* BLOG */}

          <Link
            to="/blog"
            className={`
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.06em]
              transition-colors
              ${navText}
            `}
          >
            Blog
          </Link>


          {/* CONTACT */}

          <Link
            to="/contact"
            className={`
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.06em]
              transition-colors
              ${navText}
            `}
          >
            Contact
          </Link>

        </div>


        {/* =================================================
            DESKTOP SOCIAL / PHONE
        ================================================== */}

        <div className="relative z-[10000] hidden items-center gap-2 lg:flex">

          <Social
            href={contactConfig.facebookUrl}
            label="Facebook"
          >
            <FacebookIcon />
          </Social>

          <Social
            href={contactConfig.instagramUrl}
            label="Instagram"
          >
            <InstagramIcon />
          </Social>

          <a
            href={`tel:${contactConfig.phoneNumber}`}
            aria-label="Call us"
            className="
              ml-1
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#D8C49A]
              text-[#102A20]
              transition-all
              duration-300
              hover:bg-white
              hover:scale-105
            "
          >
            <Phone size={16} />
          </a>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          className="
            relative
            z-[10000]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            text-white
            lg:hidden
          "
          aria-label={
            mobileOpen ? 'Close menu' : 'Open menu'
          }
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[82px]
            z-[9998]
            max-h-[calc(100vh-82px)]
            overflow-y-auto
            border-t
            border-white/10
            bg-[#0B2119]
            px-6
            py-6
            text-white
            shadow-2xl
            lg:hidden
          "
        >

          <MobileLink
            to="/"
            label="Home"
          />


          {/* MOBILE EXPERIENCES */}

          <button
            type="button"
            className="mobile-link flex w-full items-center justify-between"
            onClick={() =>
              setExperienceOpen((value) => !value)
            }
          >
            Experiences

            <ChevronDown
              size={18}
              className={
                experienceOpen
                  ? 'rotate-180 transition-transform'
                  : 'transition-transform'
              }
            />
          </button>

          {experienceOpen && (
            <div className="ml-4 space-y-1 pb-3">

              <MobileLink
                to="/experiences"
                label="All Experiences"
              />

              {[
                'elephant-ride',
                'jungle-safari',
                'hot-air-balloon',
                'bungee-jumping',
                'river-rafting',
                'rafting-safari-combo',
                'tour-packages',
                'night-stay',
              ].map((slug) => (
                <MobileLink
                  key={slug}
                  to={`/experiences/${slug}`}
                  label={slug.replaceAll('-', ' ')}
                />
              ))}

            </div>
          )}


          {/* MOBILE SAFARIS */}

          <button
            type="button"
            className="mobile-link flex w-full items-center justify-between"
            onClick={() =>
              setSafariOpen((value) => !value)
            }
          >
            Safaris

            <ChevronDown
              size={18}
              className={
                safariOpen
                  ? 'rotate-180 transition-transform'
                  : 'transition-transform'
              }
            />
          </button>

          {safariOpen && (
            <div className="ml-4 space-y-1 pb-3">

              <MobileLink
                to="/safaris"
                label="All Safaris"
              />

              <MobileLink
                to="/safaris/jeep-safari"
                label="Jeep Safari"
              />

              <MobileLink
                to="/safaris/canter-safari"
                label="Canter Safari"
              />

            </div>
          )}


          <MobileLink
            to="/experiences/river-rafting"
            label="River Rafting"
          />


          {/* MOBILE ZONES */}

          <button
            type="button"
            className="mobile-link flex w-full items-center justify-between"
            onClick={() =>
              setZoneOpen((value) => !value)
            }
          >
            Safari Zones

            <ChevronDown
              size={18}
              className={
                zoneOpen
                  ? 'rotate-180 transition-transform'
                  : 'transition-transform'
              }
            />
          </button>

          {zoneOpen && (
            <div className="ml-4 grid grid-cols-2 gap-x-4 gap-y-1 pb-3">

              <MobileLink
                to="/safari-zones"
                label="All Zones"
              />

              {zones.map((zone) => (
                <MobileLink
                  key={zone.id}
                  to={`/safari-zones/${zone.id}`}
                  label={zone.name}
                />
              ))}

            </div>
          )}


          <MobileLink
            to="/about"
            label="About"
          />

          <MobileLink
            to="/blog"
            label="Blog"
          />

          <MobileLink
            to="/contact"
            label="Contact"
          />


          {/* MOBILE SOCIAL */}

          <div className="mt-5 flex gap-3 border-t border-white/10 pt-5">

            <Social
              href={contactConfig.facebookUrl}
              label="Facebook"
            >
              <FacebookIcon />
            </Social>

            <Social
              href={contactConfig.instagramUrl}
              label="Instagram"
            >
              <InstagramIcon />
            </Social>

            <Social
              href={`tel:${contactConfig.phoneNumber}`}
              label="Call"
            >
              <Phone size={16} />
            </Social>

          </div>

        </div>
      )}

    </nav>
  );
};


/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

const DropdownPanel = ({ children }) => {
  return (
    <div
      className="
        absolute
        left-1/2
        top-full
        z-[99999]
        mt-4
        w-[250px]
        -translate-x-1/2
        overflow-hidden
        rounded-[16px]
        border
        border-white/10
        bg-[#0B2119]
        p-2
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      "
      style={{
        backgroundColor: '#0B2119',
        opacity: 1,
        isolation: 'isolate',
      }}
    >
      {children}
    </div>
  );
};


/* =========================================================
   DESKTOP NAV ITEM
========================================================= */

const NavItem = ({
  to,
  label,
  strong = false,
}) => {
  return (
    <Link
      to={to}
      className={`
        block
        rounded-[10px]
        px-3
        py-2.5
        text-sm
        transition-colors
        ${
          strong
            ? 'font-semibold text-[#D8C49A]'
            : 'text-[#F5F1E8]/85'
        }
        hover:bg-white/10
        hover:text-white
      `}
    >
      {label}
    </Link>
  );
};


/* =========================================================
   MOBILE LINK
========================================================= */

const MobileLink = ({
  to,
  label,
}) => {
  return (
    <Link
      to={to}
      className="
        mobile-link
        block
        border-b
        border-white/10
        py-3
        capitalize
        text-white
      "
    >
      {label}
    </Link>
  );
};


/* =========================================================
   SOCIAL BUTTON
========================================================= */

const Social = ({
  href,
  label,
  children,
}) => {
  const external = href?.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        text-white/80
        transition-all
        duration-300
        hover:bg-white/10
        hover:text-white
        hover:scale-105
      "
    >
      {children}
    </a>
  );
};

export default Navbar;