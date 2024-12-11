import React from 'react';

export function Logo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="w-24 h-24 md:w-32 md:h-32">
        <img
          src="/DBHLOGO.png"
          alt="DBH Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-white text-sm mt-2 font-light tracking-wider">
        An Academy For Artists
      </span>
    </div>
  );
}