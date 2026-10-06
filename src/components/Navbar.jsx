import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoMark from '../assets/logo_mark.png';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="/" className="navbar-brand">
          <img src={logoMark} alt="The People Order Logo" className="brand-logo-img" />
          <span className="brand-name">The People Order</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          <a href="#careers" className="nav-item">Careers</a>
          <a href="#for-organisations" className="nav-item">For Organisations</a>
          <a href="#community" className="nav-item">Community</a>
          <a href="#resources" className="nav-item">Resources</a>
          <a href="#about" className="nav-item">About</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          <a href="#signin" className="action-signin">Sign In</a>
          <a href="#grow-career" className="btn-pill btn-pill-outline">
            Grow Your Career
          </a>
          <a href="#build-team" className="btn-pill btn-pill-solid">
            Build Your Team
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="navbar-hamburger" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#careers" onClick={() => setMobileOpen(false)}>Careers</a>
          <a href="#for-organisations" onClick={() => setMobileOpen(false)}>For Organisations</a>
          <a href="#community" onClick={() => setMobileOpen(false)}>Community</a>
          <a href="#resources" onClick={() => setMobileOpen(false)}>Resources</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        </nav>
        <div className="mobile-actions">
          <a href="#signin" className="action-signin" onClick={() => setMobileOpen(false)}>Sign In</a>
          <a href="#grow-career" className="btn-pill btn-pill-outline" onClick={() => setMobileOpen(false)}>
            Grow Your Career
          </a>
          <a href="#build-team" className="btn-pill btn-pill-solid" onClick={() => setMobileOpen(false)}>
            Build Your Team
          </a>
        </div>
      </div>
    </header>
  );
}
