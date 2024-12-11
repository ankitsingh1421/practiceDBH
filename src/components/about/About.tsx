import { useEffect, useState } from 'react';
import AOS from 'aos';
import './About.css'
import 'aos/dist/aos.css';
import Pawan from '../../TeamMemberImage/Pawan.jpeg'

const About = () => {
 
  const [activeSection, setActiveSection] = useState(0); // Default section is 'Learn'

  const handleArrowClick = () => {
    setActiveSection((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
  };

  const sections = [
    {
      title: "LEARN",
      text: "from the most renowned music gurus and Artium certified teachers",
    },
    {
      title: "PRACTICE",
      text: "music anytime with personal teachers and online studio tools to perfect your skill",
    },
    {
      title: "PERFORM",
      text: "like a pro in front of a huge audience. Artium showcase is waiting for you!",
    },
  ];

  const imageSets = [
    [
      { src: '/founder.png', alt: 'Sanskar saswat ' , role:"FOUNDER",url:"https://www.linkedin.com/in/sanskar-saswat-47a61725a/"},
      { src: '', alt: 'ceo_name',role:"CEO" },
      { src: '', alt: 'name.. ' ,role:"DIRECTOR"},
      { src: '/', alt: 'name... ',role:"MANAGER" },

    ]
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const handleButtonClick = (index) => {
    setCurrentIndex(index);


    if (intervalId) {
      clearInterval(intervalId);
    }


    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 2000); // Change every 1 second

    setIntervalId(id);
  };

  useEffect(() => {

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);
  return (
    <div id='about'>
      {/* Team Section */}
<div className="flex flex-col items-center justify-center text-center mt-20">
  <div className="w-[51rem] max-sm:w-[19rem] max-md:w-[35rem] max-lg:w-[42rem]">
    <h3 data-aos="fade-up" className="gradient-text font-heading leading-[3.8rem] text-[44px] max-sm:text-3xl font-semibold">
      Say Hello to Our Team Members
    </h3>
    {/* Removed margin from the h5 element to eliminate space */}
    <h5 data-aos="fade-up" className="text-[22px] leading-8 max-sm:text-sm mt-1">
      Meet the skilled professionals who drive our business forward
    </h5>
  </div>
</div>
<div className="relative flex flex-col items-center bg-[url('https://d20rzw95v74l8a.cloudfront.net/aboutus/tile-bg.webp')] bg-cover bg-center h-auto py-12 mt-3">
  {/* Image Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {imageSets[currentIndex].map((image, idx) => (
      <a
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center max-w-[14.7rem] border-colorD border-2 p-4 rounded-xl bg-bgColorA transition-transform duration-500 transform hover:scale-105 hover:translate-y-1"
        href={image.url}
      >
        {/* Display the image */}
        <img
          alt={image.alt}
          src={image.src}
          width="200"
          height="150"
          className="h-[150px] w-auto"
        />
        <p> {image.alt}</p>
        <p className='text-gray-500'>{image.role}</p>
      </a>
    ))}
  </div>

  <div className="flex mt-10 absolute bottom-5 space-x-2">
    <button
      className="w-3 h-3 rounded-full border-2 border-lightdark"
      onClick={() => handleButtonClick(0)}
    ></button>
    <button
      className="w-3 h-3 rounded-full bg-lightGrey"
      onClick={() => handleButtonClick(1)}
    ></button>
  
  </div>
</div>

    </div>
  );
};

export default About;