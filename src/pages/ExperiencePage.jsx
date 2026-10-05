import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ElephantRidePage from './experiences/ElephantRidePage';
import ExperienceDetailPage from './experiences/ExperienceDetailPage';

export default function ExperiencePage(){
  const { slug } = useParams();
  if (slug === 'elephant-ride') return <ElephantRidePage/>;
  if (slug === 'jungle-safari') return <Navigate to="/safaris/jeep-safari" replace/>;
  return <ExperienceDetailPage slug={slug}/>;
}
