import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import Icon from '../../Icons/whatsapp-logo.png'
// import { Link } from './Navbar.styles';
import { WhatsAppLogo } from '../whatsappLOGO/wp';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link

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
    <nav style={{marginTop:"-15px"}} className={`fixed  w-full z-50 transition-all duration-300 ${
      isScrolled ?  'bg-navy-950/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="text-white text-xl font-bold">Decoding Bollywood Hits</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
          <ScrollLink to="home" smooth={true} duration={500} className="text-white cursor-pointer">
              Home
            </ScrollLink>
            <ScrollLink to="courses" smooth={true} duration={500} className="text-white cursor-pointer">
              Courses
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="text-white cursor-pointer">
              About
            </ScrollLink>
            <ScrollLink to="blog" smooth={true} duration={500} className="text-white cursor-pointer">
              Blog
            </ScrollLink>
         
          </div>
          <div className='flex'>
                     <img src={Icon} className='w-10 rounded-md ' alt="whatsapp-icon" />
            <p className='text-white font-bold text-xl pl-6 pt-1'>Login</p>
          </div>
        
                     </div>
      </div>
    </nav>
  );
}