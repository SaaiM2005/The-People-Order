import React, { useState } from 'react';
import logoMark from '../assets/logo_mark.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        {/* Main Footer Layout */}
        <div className="footer-main">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="footer-brand-col">
            <a href="/" className="footer-brand">
              <img src={logoMark} alt="The People Order" className="footer-logo-img" />
              <span className="footer-brand-name">The People Order</span>
            </a>

            <h3 className="footer-tagline-heading">
              Of people. For the people.{' '}
              <span className="highlight-cyan">By the people.</span>
            </h3>

            <p className="footer-subtext">
              Building the future of work around humans again.
            </p>

            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              {isSubscribed ? (
                <div className="footer-newsletter-success">
                  Thanks for subscribing!
                </div>
              ) : (
                <div className="footer-input-pill">
                  <input
                    type="email"
                    className="footer-email-input"
                    placeholder="Join our newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Join our newsletter email input"
                  />
                  <button type="submit" className="footer-subscribe-btn">
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: 4 Navigation Columns Grid */}
          <div className="footer-nav-grid">
            
            {/* Column 1: Navigation */}
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">NAVIGATION</h4>
              <ul className="footer-nav-list">
                <li><a href="#careers">Careers</a></li>
                <li><a href="#for-organisations">For Organisations</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            {/* Column 2: Community */}
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">COMMUNITY</h4>
              <ul className="footer-nav-list">
                <li><a href="#champions">Champions</a></li>
                <li><a href="#fractional">Fractional</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#stories">Stories</a></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">RESOURCES</h4>
              <ul className="footer-nav-list">
                <li><a href="#insights">Insights</a></li>
                <li><a href="#playbooks">Playbooks</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#reports">Reports</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer-nav-col">
              <h4 className="footer-nav-heading">CONTACT</h4>
              <ul className="footer-nav-list footer-contact-list">
                <li><a href="mailto:hello@thepeopleorder.com">hello@thepeopleorder.com</a></li>
                <li><span className="contact-text">Mumbai · Bengaluru</span></li>
                <li><a href="tel:+910000000000">+91 00 0000 0000</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} The People Order. All rights reserved.
          </p>

          <div className="footer-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
