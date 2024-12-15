import React from 'react';


const InternshipCards = ({ title, img }) => {
  return (
    <div 
      className="py-20 intern-card shadow-lg rounded-3xl p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl" 
      style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <p className="text-4xl font-bold text-white mb-4">{title}</p>
      <a
        href="https://forms.gle/z1p7zYR9Juekuy327"
        className="mt-4 px-6 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-md hover:opacity-90 transition-opacity duration-300"
      >
        Know More
      </a>
    </div>
  );
};

export default InternshipCards;
