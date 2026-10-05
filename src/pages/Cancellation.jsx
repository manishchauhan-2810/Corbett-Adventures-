import React from 'react';

const Cancellation = () => {
  return (
    <main className="bg-[#F5F1E8] px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
          LEGAL
        </p>

        <h1 className="mt-4 font-serif text-6xl text-[#102A20] md:text-8xl">
          Cancellation
          <br />
          Policy
        </h1>

        <div className="mt-14 space-y-10">
          <Block title="Before booking">
            Cancellation conditions vary by safari, accommodation, activity
            and operator. Please confirm the applicable policy before making
            payment.
          </Block>

          <Block title="Confirmed bookings">
            Once a booking has been confirmed, cancellation charges may apply
            according to the rules of the relevant service provider.
          </Block>

          <Block title="Forest regulations">
            Safari permits and entry permissions can be governed by forest
            department rules and may have separate cancellation or amendment
            conditions.
          </Block>

          <Block title="Contact">
            Contact our team as early as possible if you need to modify or
            cancel a booking.
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

export default Cancellation;