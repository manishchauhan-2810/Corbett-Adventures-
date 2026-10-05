import React from 'react';

const Refund = () => {
  return (
    <main className="bg-[#F5F1E8] px-6 py-36">
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
          LEGAL
        </p>

        <h1 className="mt-4 font-serif text-6xl text-[#102A20] md:text-8xl">
          Refund
          <br />
          Policy
        </h1>

        <div className="mt-14 space-y-10">
          <Block title="Eligibility">
            Refund eligibility depends on the service booked, payment terms,
            cancellation conditions and the policies of the relevant
            operator.
          </Block>

          <Block title="Processing">
            Approved refunds are processed according to the payment method
            and applicable booking terms.
          </Block>

          <Block title="Non-refundable items">
            Certain permits, processing fees, advance payments or operator
            charges may be non-refundable.
          </Block>

          <Block title="Questions">
            Contact Jim Corbett Adventures with your booking details if you
            need clarification about a refund.
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

export default Refund;