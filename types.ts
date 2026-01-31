import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface BenefitProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}