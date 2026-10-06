import React from 'react';
import { ArrowRight } from 'lucide-react';
import './GrowthSupport.css';

const servicesData = [
  {
    id: 1,
    number: '01',
    badgeClass: 'badge-mint',
    title: 'Resume & Profile Building',
    description: 'Helping people present their experience, strengths, and direction more intentionally.',
    link: '#book-resume'
  },
  {
    id: 2,
    number: '02',
    badgeClass: 'badge-amber',
    title: 'LinkedIn & Personal Branding',
    description: 'Building stronger professional visibility through clearer positioning and storytelling.',
    link: '#book-linkedin'
  },
  {
    id: 3,
    number: '03',
    badgeClass: 'badge-sage',
    title: 'Interview & Career Guidance',
    description: 'Helping people approach opportunities with greater clarity, preparation, and confidence.',
    link: '#book-interview'
  },
  {
    id: 4,
    number: '04',
    badgeClass: 'badge-lilac',
    title: 'Career Transition Support',
    description: 'Structured guidance for people navigating significant pivots in role, sector, or stage.',
    link: '#book-transition'
  }
];

export default function GrowthSupport() {
  return (
    <section className="growth-support-section" id="growth-support">
      <div className="container">
        <div className="growth-support-layout">
          
          {/* Left Column: Heading & Mission */}
          <div className="growth-support-intro">
            <div className="section-eyebrow">
              <span className="eyebrow-dash" />
              <span className="eyebrow-text">GROWTH SUPPORT</span>
            </div>

            <h2 className="growth-support-heading">
              Helping people navigate growth with more clarity and confidence.
            </h2>

            <p className="growth-support-desc">
              We believe careers are not built through resumes alone. The right guidance, support systems, and opportunities can completely change how people grow.
            </p>
          </div>

          {/* Right Column: 2x2 Service Cards Grid */}
          <div className="growth-support-grid">
            {servicesData.map((service) => (
              <article key={service.id} className="growth-card">
                <div className={`growth-number-badge ${service.badgeClass}`}>
                  {service.number}
                </div>

                <h3 className="growth-card-title">
                  {service.title}
                </h3>

                <p className="growth-card-desc">
                  {service.description}
                </p>

                <a href={service.link} className="growth-card-btn">
                  <span>Book Session</span>
                  <ArrowRight size={14} className="growth-btn-arrow" />
                </a>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
