import React from 'react';
import { Quote } from 'lucide-react';
import './FounderStory.css';

const valuesData = [
  {
    title: 'Intention',
    subtitle: 'Hiring with care, not urgency.'
  },
  {
    title: 'Clarity',
    subtitle: 'Guidance through every chapter.'
  },
  {
    title: 'Longevity',
    subtitle: 'Teams and careers built to hold.'
  }
];

const statsData = [
  {
    number: '75+',
    label: 'ORGANISATIONS SUPPORTED'
  },
  {
    number: '200+',
    label: 'MANDATES DELIVERED'
  },
  {
    number: '95%',
    label: 'OFFER-TO-JOIN RATIO'
  },
  {
    number: 'Global',
    label: 'TALENT NETWORK'
  }
];

export default function FounderStory() {
  return (
    <section className="founder-story-section">
      <div className="container">
        {/* Upper Split: Left Bio & Right Quote */}
        <div className="founder-story-grid">
          {/* Left Column: Heading & Founder Info */}
          <div className="founder-intro-col">
            <div className="founder-tag">
              <span className="tag-dash" />
              <span className="tag-label">WHY THE PEOPLE ORDER EXISTS</span>
            </div>

            <h2 className="founder-heading">
              In Samir’s own words.
            </h2>

            <div className="founder-profile">
              <div className="founder-avatar">
                <span className="avatar-initial">S</span>
              </div>
              <div className="founder-details">
                <h4 className="founder-name">Samir</h4>
                <p className="founder-role">Founder, The People Order</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card & 3 Pillar Cards */}
          <div className="founder-quote-col">
            {/* Main Quote Card */}
            <div className="quote-card">
              {/* Hanging Quote Icon Badge */}
              <div className="quote-badge">
                <Quote size={18} className="quote-icon" />
              </div>

              <blockquote className="quote-text">
                “I started The People Order because I kept meeting brilliant people trying to do meaningful work — and organisations quietly struggling to find them. Somewhere along the way, hiring stopped being about people. We’re here to change that, one intentional match at a time.”
              </blockquote>

              <div className="quote-divider" />

              <p className="quote-author-note">
                — Samir, on why this exists
              </p>
            </div>

            {/* 3 Pillar Micro-Cards */}
            <div className="pillars-grid">
              {valuesData.map((item, index) => (
                <div key={index} className="pillar-card">
                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact & Metrics Banner */}
      <div className="stats-banner">
        <div className="container stats-container">
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
