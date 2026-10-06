import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Hero />
        {/* Additional Figma sections will be added here section by section */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
