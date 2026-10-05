import React from 'react';

const Privacy = () => {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Privacy Policy"
      intro="How information is handled when you browse or contact Jim Corbett Adventures."
    >
      <Section title="Information we collect">
        We may collect information you voluntarily provide when you contact
        us, request a booking, ask for travel assistance or communicate with
        our team.
      </Section>

      <Section title="How information is used">
        Information may be used to respond to enquiries, coordinate bookings,
        provide requested services and communicate with you about your trip.
      </Section>

      <Section title="Third-party services">
        Website analytics, communication tools, maps, WhatsApp and other
        third-party services may process information according to their own
        privacy policies.
      </Section>

      <Section title="Contact">
        For privacy-related questions, contact Jim Corbett Adventures using
        the contact information provided on the website.
      </Section>
    </LegalPage>
  );
};

const LegalPage = ({ eyebrow, title, intro, children }) => (
  <main className="bg-[#F5F1E8] px-6 py-36">
    <div className="mx-auto max-w-4xl">
      <p className="text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
        {eyebrow}
      </p>

      <h1 className="mt-4 font-serif text-6xl text-[#102A20] md:text-8xl">
        {title}
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-7 text-[#102A20]/60">
        {intro}
      </p>

      <div className="mt-14 space-y-10">
        {children}
      </div>
    </div>
  </main>
);

const Section = ({ title, children }) => (
  <section>
    <h2 className="font-serif text-3xl text-[#102A20]">
      {title}
    </h2>

    <p className="mt-4 text-sm leading-7 text-[#102A20]/65">
      {children}
    </p>
  </section>
);

export default Privacy;