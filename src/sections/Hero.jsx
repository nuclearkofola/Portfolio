import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/* Left Hero content goes here */}
        {/* 3D model Hero content goes here */}
      </div>
    </section>
  );
};

export default Hero;