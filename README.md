# Jim Corbett Adventures — refreshed site

Premium React/Vite/Tailwind rebuild based on the supplied project and the current public content of jimcorbettadventures.com.

## Run

```bash
npm install
npm run dev
```

## Main routes

- `/`
- `/experiences`
- `/experiences/elephant-ride`
- `/experiences/hot-air-balloon`
- `/experiences/bungee-jumping`
- `/experiences/river-rafting`
- `/experiences/rafting-safari-combo`
- `/experiences/tour-packages`
- `/experiences/night-stay`
- `/experiences/hotel-resort-booking`
- `/experiences/jungle-safari` → Jeep Safari
- `/safaris`
- `/safaris/jeep-safari`
- `/safaris/canter-safari`
- `/safari-zones`
- `/safari-zones/:slug`
- `/about`
- `/contact`
- `/blog`
- `/blog/:slug`
- `/booking-guide`
- `/faq`
- `/gallery` → redirects to `/blog`
- `/privacy`, `/terms`, `/cancellation`, `/refund`

## Design rules implemented

- Solid deep-green navbar everywhere except the homepage at the very top, where it overlays transparently.
- No Book Now/search item added to the navbar.
- Premium editorial wildlife aesthetic: forest green, ivory, sand/copper, serif display type, restrained motion.
- Real client-site image URLs reused throughout the pages.
- WhatsApp and direct-call CTAs use the supplied contact configuration.
- Elephant Ride pricing card uses a stretched grid so the image fills the entire left column with no empty strip.
- Elephant Ride “Why choose” section is intentionally compact so all five points fit in one desktop section without requiring a page scroll.
- Gallery route redirects to the Blog page without changing the navbar.
