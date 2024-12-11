import React from 'react';
import { OffersList } from './OffersList';
import { Mission } from './Mission';

export const Offers: React.FC = () => {
  return (
    // <section className="py-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900">
    <section className='py-20'>
      <div className="container mx-auto px-4">
        <Mission />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-12">
              <span className="text-purple-500">What We</span>{' '}
              <span className="text-white">Offer</span>
            </h2>
            <OffersList />
          </div>
          
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1621976360623-004223992275?auto=format&fit=crop&q=80&w=800"
              alt="Mobile app interface"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};