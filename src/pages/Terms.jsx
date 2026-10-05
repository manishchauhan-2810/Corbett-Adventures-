import React from 'react';

const Terms = () => {
  return (
    <main className="bg-[#F5F1E8] px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
          LEGAL
        </p>

        <h1 className="mt-4 font-serif text-6xl text-[#102A20] md:text-8xl">
          Terms &
          <br />
          Conditions
        </h1>

        <div className="mt-14 space-y-10">
          <Block title="Bookings">
            Safari, stay, transport and activity bookings are subject to
            availability and confirmation by the relevant operator or
            authority.
          </Block>

          <Block title="Information">
            Availability, timings, access permissions and operational
            conditions can change because of weather, forest regulations,
            government rules or operator decisions.
          </Block>

          <Block title="Guest responsibility">
            Guests are expected to follow the instructions of forest
            authorities, safari drivers, guides, accommodation providers and
            activity operators.
          </Block>

          <Block title="Changes">
            Specific booking terms may apply to individual products or
            services and should be confirmed before payment.
          </Block>
        </div>
      </div>
    </main>
  );
};

const Block = ({ title, children }) => (
  <section>
    <h2 className="font-serif text-3xl text-[#102A20]">
      {title}
    </h2>

    <p className="mt-4 text-sm leading-7 text-[#102A20]/65">
      {children}
    </p>
  </section>
);

export default Terms;