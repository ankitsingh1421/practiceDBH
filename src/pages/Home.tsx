import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Welcome } from '../components/Welcome/Welcome';
import { Vision } from '../components/Vision/Vision';

export function Home() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Vision />
    </div>
  );
}