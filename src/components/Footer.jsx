import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="logo-accent">The People</span> Order
            </h3>
            <p className="footer-tagline">
              Connecting people and communities seamlessly.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} The People Order. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
