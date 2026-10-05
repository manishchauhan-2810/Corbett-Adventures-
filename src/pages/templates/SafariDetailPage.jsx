import React from 'react';
import { useParams } from 'react-router-dom';
import { safaris } from '../../data/safaris';
import SafariPageTemplate from '../../templates/SafariPageTemplate';
import NotFound from '../NotFound';

const SafariDetailPage = () => {
  const { safariType } = useParams();

  const safari = safaris.find(
    (item) =>
      item.id === safariType ||
      item.slug === safariType
  );

  if (!safari) {
    return <NotFound />;        
  }

  return <SafariPageTemplate safari={safari} />;
};

export default SafariDetailPage;        