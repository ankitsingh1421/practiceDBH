// import React from 'react';
// import { CircleAnimation } from './CircleAnimation';
// import { Logo } from './Logo';
// import { useState, useEffect } from 'react';
// export function Hero() {
//   const [isFormOpen, setFormOpen] = useState(false);

//   // Automatically open form after 30 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFormOpen(true);
//     }, 30000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Close form when clicking outside it
//   const handleClickOutside = (e) => {
//     if (e.target.id === 'form-overlay') {
//       setFormOpen(false);
//     }
//   };
//   return (
//     <div className="relative min-h-screen  overflow-hidden "id='home'>
//       {/* Gradient Background */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" /> */}
      
//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="flex-1 text-center md:text-left">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//               <span className="inline font-thin text-5xl pr-4">Unveiling</span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Voices</span>
//             </h1>
//             <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">
//               Empowering
//               <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pl-4 text-7xl"> Music</span>
//             </h2>
//             <button
//              onClick={() => setFormOpen(true)}
//             className="mt-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
//               Enquire Now
//             </button>
//           </div>

//           <div className="flex-1 relative flex items-center justify-center">
//             <div className="relative w-64 h-64 md:w-72 md:h-72">
//               {/* Enhanced Glow Effects */}
//               <div className="absolute inset-0 blur-[160px] bg-blue-600/50 rounded-full" />
//               <div className="absolute inset-0 blur-[100px] bg-purple-600/40 rounded-full" />
              
//               <div className="absolute inset-0 animate-spin-slow">
//                 <CircleAnimation />
//               </div>
              
//               {/* Main Circle with Enhanced Shadow */}
//               <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
//                 <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center shadow-[0_0_150px_rgba(37,99,235,0.5)] relative">
//                   {/* Additional Inner Shadows */}
//                   <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(37,99,235,0.3)]" />
//                   <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(139,92,246,0.4)]" />
                  
//                   <Logo />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isFormOpen && (
//         <div
//           id="form-overlay"
//           className="fixed inset-0 bg-red flex items-center justify-center z-50 "
//           onClick={handleClickOutside}
//         >
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-10/12 max-w-sm relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setFormOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//             >
//               &times;
//             </button>
            
//             <h2 className="text-lg font-bold mb-3">Enquiry Form</h2>
            
//             <form className="space-y-3">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
//                   placeholder="Enter your name"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
//                   placeholder="Enter your email"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="number" className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="number"
//                   className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="course" className="block text-sm font-medium text-gray-700">
//                   Select a Course
//                 </label>
//                 <select
//                   id="course"
//                   className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
//                 >
//                   <option>Choose</option>
//                   <option>Synthesizer</option>
//                   <option>Tabla</option>
//                   <option>Harmonium</option>
//                   <option>Cajon</option>
//                   <option>Darbuka</option>
//                   <option>Guitar (Optional)</option>
//                   <option>Indian Classical Music</option>
//                   <option>Bollywood Music</option>
//                   <option>Vocal Grooming</option>
//                   <option>Music Production Program</option>
//                 </select>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-sm"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>




//   );
// }



import { CircleAnimation } from './CircleAnimation';
import { Logo } from './Logo';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false); // New state for the burger menu

  // Automatically open form after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Close form when clicking outside it
  const handleClickOutside = (e) => {
    if (e.target.id === 'form-overlay') {
      setFormOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-60" style={{marginTop:"-50px"}}>
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
            <button
              onClick={() => setFormOpen(true)}
              className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </button>
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 blur-[160px] bg-blue-600/50 rounded-full" />
              <div className="absolute inset-0 blur-[100px] bg-purple-600/40 rounded-full" />
              <div className="absolute inset-0 animate-spin-slow">
                <CircleAnimation />
              </div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center shadow-[0_0_150px_rgba(37,99,235,0.5)] relative">
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(37,99,235,0.3)]" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(139,92,246,0.4)]" />
                  <Logo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Burger Menu and Navigation */}
      {/* <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setNavOpen(!isNavOpen)}
          className="text-white focus:outline-none"
        >
          {isNavOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Burger menu icon
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50 transition-transform ${
          isNavOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => setFormOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity mb-4"
        >
          Enquire Now
        </button>
        <button
          onClick={() => setNavOpen(false)}
          className="text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90"
        >
          Close Menu
        </button>
      </div> */}
      <div className="absolute top-4 right-4 md:hidden">
  <button
    onClick={() => setNavOpen(!isNavOpen)}
    className="text-white focus:outline-none"
  >
    {isNavOpen ? (
      <span className="text-2xl">&times;</span> // Close icon
    ) : (
      <span className="text-2xl">&#9776;</span> // Burger menu icon
    )}
  </button>
</div>

{/* Burger Navigation Menu */}
<div
  className={`fixed inset-0 bg-black/60 flex flex-col items-center justify-center z-50 transition-transform ${
    isNavOpen ? 'translate-y-0' : '-translate-y-full'
  }`}
>
  <button
    onClick={() => setFormOpen(true)}
    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity mb-4"
  >
    Enquire Now
  </button>
  <button
    onClick={() => setNavOpen(false)}
    className="text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90"
  >
    Close Menu
  </button>
</div>


      {isFormOpen && (
        <div
          id="form-overlay"
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-10/12 max-w-sm relative">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-3">Enquiry Form</h2>
            <form className="space-y-3">
              {/* Form Fields */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
