import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-sine', duration: 800, delay: 0 });
  }, []);

  const teamMembers = [
    {
      name: 'Srijan Sakshi',
      role: 'Operations & Event Management',
      image: 'sakshi.jpeg',
    },
    {
      name: 'Sanskar Saswat',
      role: 'Founder',
      image: 'sanskar.jpeg',
    },
    {
      name: 'Roopkatha Roy',
      role: 'Co-Founder',
      image: 'roop.jpeg',
    },
    {
      name: 'Ankit Singh',
      role: 'Web Developer',
      image: 'ankit.jpeg',
    },
  ];

  return (
    <div id="about" className="py-20 bg-darkBlue ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h3 data-aos="fade-up" className="text-5xl font-bold text-white">
          <span className="text-purple-500 ">Say</span> Hello
          <span className="text-purple-500 pl-3">To Our Team</span>
        </h3>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-8xl mx-auto ">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className=" flex flex-col items-center bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-lg text-center hover:scale-105 transform transition-all duration-300"
          >
            <h4 className="text-3xl font-semibold text-white mb-2">{member.name}</h4>
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-64 h-64 mb-4 "
            />
            <p className="text-2xl text-gray-200">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;