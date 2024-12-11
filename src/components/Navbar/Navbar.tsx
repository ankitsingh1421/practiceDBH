import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { Link } from './Navbar.styles';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-950/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="text-white text-xl font-bold">Decoding Bollywood Hits</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#courses">Courses</Link>
            <Link href="#about">About</Link>
            <Link href="#blog">Blog</Link>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}