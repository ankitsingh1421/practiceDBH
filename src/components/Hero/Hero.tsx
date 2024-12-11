import React from 'react';
import { CircleAnimation } from './CircleAnimation';
import { Logo } from './Logo';

export function Hero() {
  return (
    <div className="relative min-h-screen  overflow-hidden "id='home'>
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" /> */}
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Unveiling</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Voices</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Empowering
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> Music</span>
            </h2>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
              Enquire Now
            </button>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 blur-[160px] bg-blue-600/50 rounded-full" />
              <div className="absolute inset-0 blur-[100px] bg-purple-600/40 rounded-full" />
              
              <div className="absolute inset-0 animate-spin-slow">
                <CircleAnimation />
              </div>
              
              {/* Main Circle with Enhanced Shadow */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center shadow-[0_0_150px_rgba(37,99,235,0.5)] relative">
                  {/* Additional Inner Shadows */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(37,99,235,0.3)]" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(139,92,246,0.4)]" />
                  
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}