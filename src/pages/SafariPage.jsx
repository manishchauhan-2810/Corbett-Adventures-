import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
export default function SafariPage(){const {slug}=useParams(); return <Navigate to={`/safaris/${slug}`} replace/>;}
