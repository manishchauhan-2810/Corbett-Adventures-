import React from 'react';
import SafariPageTemplate from '../templates/SafariPageTemplate';
import { safaris } from '../data/safaris';

const JeepSafari = () => {
  const safari = safaris.find(s => s.id === 'jeep-safari');
  return <SafariPageTemplate {...safari} name="Jeep Safari" description="The most intimate way to explore the forest." />;
};

export default JeepSafari;
