import React from 'react';

import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import ExperienceGrid from '../components/home/ExperienceGrid';
import ZonesSection from '../components/home/ZonesSection';
import AdventureSection from '../components/home/AdventureSection';
import PhotoMosaic from '../components/home/PhotoMosaic';
import GoogleReviews from '../components/home/GoogleReviews';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <>
      <Hero />

      <IntroSection />

      <ExperienceGrid />

      <ZonesSection />

      <AdventureSection />

      <PhotoMosaic />

      <GoogleReviews />

      <FinalCTA />
    </>
  );
};

export default Home;