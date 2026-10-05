import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-[75vh] bg-[#F5F1E8] px-6 py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] font-semibold tracking-[0.35em] text-[#B77B45]">
          404 · TRAIL NOT FOUND
        </p>

        <h1 className="mt-5 font-serif text-6xl leading-none text-[#102A20] md:text-8xl">
          This path
          <br />
          disappears.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#102A20]/60">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back to the forest.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#102A20] px-6 py-4 text-xs font-semibold tracking-[0.15em] text-white"
          >
            <ArrowLeft size={16} />
            BACK HOME
          </Link>

          <Link
            to="/safari-zones"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#102A20]/15 px-6 py-4 text-xs font-semibold tracking-[0.15em] text-[#102A20]"
          >
            EXPLORE SAFARI ZONES

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;