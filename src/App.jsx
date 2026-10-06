import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeatureCards from './sections/FeatureCards';
import FounderStory from './sections/FounderStory';
import OpportunitiesSection from './sections/OpportunitiesSection';
import ChampionsSection from './sections/ChampionsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Hero />
        <FeatureCards />
        <FounderStory />
        <OpportunitiesSection />
        <ChampionsSection />
        {/* Additional Figma sections will be added here section by section */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
