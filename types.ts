import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface PricingItem {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  link: string;
}

export interface ReviewItem {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export interface AdvantageItem {
  icon: ReactNode;
  title: string;
  description: string;
}