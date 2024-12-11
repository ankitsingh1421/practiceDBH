import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (entry.isIntersecting) {
          video?.play();
        } else {
          video?.pause();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        controls
        muted // Keep the video muted initially
        preload="metadata"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Demo video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function Vision() {
  return (
    <div className="relative min-h-screen bg-navy-950 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {/* Vision Section */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
            >
              Vision
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
            >
              To create a community of confident musicians who seamlessly integrate the
              timeless richness of Indian classical music into the dynamic world of
              Bollywood music.
            </motion.p>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ marginLeft: "30%", marginTop: "30px", height: "300px", width: "600px" }}
            className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          >
            <VideoPlayer />
          </motion.div>

          {/* Mission Section */}
          <div className="text-right">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-8"
            >
              Mission
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
}
