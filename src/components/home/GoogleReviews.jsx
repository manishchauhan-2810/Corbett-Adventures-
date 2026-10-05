import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    author: 'Sample Guest',
    text:
      'Sample review card — connect the Google Places API before publishing customer testimonials.',
  },
  {
    author: 'Sample Guest',
    text:
      'Sample review card — real Google reviews should replace this content in production.',
  },
  {
    author: 'Sample Guest',
    text:
      'Sample review card — this section is ready for the live Google review integration.',
  },
];

const GoogleReviews = () => {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
              GUEST STORIES
            </p>

            <h2 className="font-serif text-5xl text-[#102A20] md:text-6xl">
              What our guests say.
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-[#102A20]/50">
            Sample review cards are shown during development. Connect
            Google Places before publishing these as real testimonials.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.author + review.text}
              className="rounded-[22px] border border-[#102A20]/10 bg-[#F5F1E8] p-7"
            >
              <div className="mb-6 flex gap-1 text-[#B77B45]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mb-6 text-[9px] font-semibold tracking-[0.18em] text-[#B77B45]">
                SAMPLE REVIEW
              </p>

              <p className="font-serif text-xl leading-8 text-[#102A20]">
                “{review.text}”
              </p>

              <p className="mt-7 text-xs font-semibold tracking-[0.12em] text-[#102A20]/50">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;