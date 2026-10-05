import React from 'react';
import { useParams } from 'react-router-dom';
import { zones } from '../data/zones';
import ZonePageTemplate from '../templates/ZonePageTemplate';
import NotFound from './NotFound';

const ZonePage = () => {
  const { slug } = useParams();

  const zone = zones.find((item) => item.id === slug);

  if (!zone) {
    return <NotFound />;
  }

  return <ZonePageTemplate zone={zone} />;
};

export default ZonePage;