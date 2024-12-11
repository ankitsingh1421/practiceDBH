import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Welcome } from '../components/Welcome/Welcome';
import { Vision } from '../components/Vision/Vision';
import Courses from '../components/Courses/Courses';
import { Offers } from '../components/Offers/offers';
import Internship from '../Internship/Internship';
import About from '../components/about/About';

export function Home() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Vision />
      <Courses/>
      <Offers/>
      <Internship/>
      <About/>
    </div>
  );
}