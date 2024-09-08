// Hero.jsx
import React from 'react';
import './styles/Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="text-container">
        <h1 className="animated-text">Hi, I'm [Your Name]</h1>
        <h2 className="animated-subtext">A Passionate Web Developer</h2>
      </div>
      <div className="cube-container">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
