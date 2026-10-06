import React from 'react';
import heroBg from '../assets/hero_bg.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay" />
      
      <div className="hero-content-container">
        {/* Top Capsule Tag */}
        <div className="hero-capsule-badge">
          <span>A PLATFORM BY THE PEOPLE ORDER</span>
        </div>

        {/* Display Headline */}
        <h1 className="hero-headline">
          <span className="headline-line">Of people.</span>
          <span className="headline-line">For the people.</span>
          <span className="headline-line headline-accent">By the people.</span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="hero-tagline">
          Building the future of work around humans again.
        </p>
      </div>
    </section>
  );
}
