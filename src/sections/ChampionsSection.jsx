import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ananyaImg from '../assets/champions/ananya-rao.png';
import marcusImg from '../assets/champions/marcus-lin.png';
import priyaImg from '../assets/champions/priya-shah.png';
import davidImg from '../assets/champions/david-okoye.png';
import './ChampionsSection.css';

const championsData = [
  {
    id: 'ananya-rao',
    name: 'Ananya Rao',
    role: 'Climate Strategy Champion',
    experience: '12 yrs experience',
    status: 'Available',
    image: ananyaImg,
    profileUrl: '#ananya-rao',
    bookingUrl: '#book-ananya'
  },
  {
    id: 'marcus-lin',
    name: 'Marcus Lin',
    role: 'People Operations Champion',
    experience: '9 yrs experience',
    status: 'Limited',
    image: marcusImg,
    profileUrl: '#marcus-lin',
    bookingUrl: '#book-marcus'
  },
  {
    id: 'priya-shah',
    name: 'Priya Shah',
    role: 'CSR Champion',
    experience: '15 yrs experience',
    status: 'Available',
    image: priyaImg,
    profileUrl: '#priya-shah',
    bookingUrl: '#book-priya'
  },
  {
    id: 'david-okoye',
    name: 'David Okoye',
    role: 'Healthcare Growth Champion',
    experience: '11 yrs experience',
    status: 'Booking Q3',
    image: davidImg,
    profileUrl: '#david-okoye',
    bookingUrl: '#book-david'
  }
];

const opportunityCategories = [
  { id: 'all', label: 'All' },
  { id: 'advisory', label: 'Advisory' },
  { id: 'fractional', label: 'Fractional' },
  { id: 'project-based', label: 'Project-based' },
  { id: 'interim', label: 'Interim' }
];

const fractionalOpportunitiesData = [
  {
    id: 1,
    type: 'PROJECT',
    title: 'ESG reporting framework for a listed manufacturer',
    description: '12-week engagement to design reporting structure and stakeholder narrative.',
    tags: ['ESG', '12 weeks', 'Remote'],
    categories: ['project-based', 'advisory'],
    link: '#esg-framework'
  },
  {
    id: 2,
    type: 'CONSULTANT',
    title: 'Fractional Head of People — Series A SaaS',
    description: 'Two days/week, building hiring systems and culture rituals.',
    tags: ['Fractional', '2 days/wk', 'EU'],
    categories: ['fractional', 'interim'],
    link: '#fractional-head-of-people'
  },
  {
    id: 3,
    type: 'PROJECT',
    title: 'Climate adaptation portfolio review',
    description: 'Independent review of grantee portfolio across South & East Asia.',
    tags: ['Climate', 'Advisory', '8 weeks'],
    categories: ['project-based', 'advisory'],
    link: '#climate-adaptation'
  }
];

export default function ChampionsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilterClick = (catId) => {
    // If clicking the currently active non-all category, toggle back to 'all'
    if (selectedCategory === catId) {
      setSelectedCategory('all');
    } else {
      setSelectedCategory(catId);
    }
  };

  const filteredOpportunities = selectedCategory === 'all'
    ? fractionalOpportunitiesData
    : fractionalOpportunitiesData.filter((item) =>
        item.categories.includes(selectedCategory)
      );

  return (
    <section className="champions-section" id="champions">
      <div className="container">
        
        {/* =========================================
            Upper Section: Champions & Fractional Experts
            ========================================= */}
        <div className="champions-header">
          <div className="champions-header-left">
            <div className="section-eyebrow">
              <span className="eyebrow-dash" />
              <span className="eyebrow-text">CHAMPIONS & FRACTIONAL EXPERTS</span>
            </div>
            <h2 className="champions-main-heading">
              Learn from people who have built before you.
            </h2>
          </div>

          <div className="champions-header-right">
            <p className="champions-header-desc">
              Access a curated network of founders, operators, and specialists for mentorship, advisory, fractional leadership, and project-based collaboration.
            </p>
          </div>
        </div>

        {/* 4 Champions Profile Grid */}
        <div className="champions-grid">
          {championsData.map((champion) => (
            <article key={champion.id} className="champion-card">
              <div className="champion-image-wrapper">
                <img
                  src={champion.image}
                  alt={champion.name}
                  className="champion-image"
                  loading="lazy"
                />
              </div>

              <div className="champion-info">
                <div className="champion-title-row">
                  <h3 className="champion-name">{champion.name}</h3>
                  <span className="champion-status-badge">{champion.status}</span>
                </div>

                <p className="champion-role">{champion.role}</p>
                <p className="champion-experience">{champion.experience}</p>

                <div className="champion-actions">
                  <a
                    href={champion.profileUrl}
                    className="btn-view-profile"
                    aria-label={`View profile of ${champion.name}`}
                  >
                    View Profile
                  </a>
                  <a
                    href={champion.bookingUrl}
                    className="btn-book-call"
                    aria-label={`Book a call with ${champion.name}`}
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            Lower Section: Fractional Opportunities Container
            ========================================= */}
        <div className="fractional-container">
          <div className="fractional-header">
            <div className="fractional-header-left">
              <div className="section-eyebrow">
                <span className="eyebrow-dash" />
                <span className="eyebrow-text">FRACTIONAL OPPORTUNITIES</span>
              </div>
              <h3 className="fractional-main-heading">
                Flexible engagements for builders and specialists.
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="fractional-filters" role="group" aria-label="Filter opportunities by engagement type">
              {opportunityCategories
                .filter((cat) => cat.id !== 'all')
                .map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`filter-pill ${isActive ? 'active' : ''}`}
                      onClick={() => handleFilterClick(cat.id)}
                      aria-pressed={isActive}
                    >
                      {cat.label}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* 3 Fractional Opportunity Cards */}
          <div className="fractional-cards-grid">
            {filteredOpportunities.map((opportunity) => (
              <a
                key={opportunity.id}
                href={opportunity.link}
                className="fractional-card"
              >
                <div>
                  <div className="fractional-card-top">
                    <span className="fractional-type">{opportunity.type}</span>
                    <span className="fractional-arrow-wrap">
                      <ArrowUpRight size={17} className="fractional-arrow" />
                    </span>
                  </div>

                  <h4 className="fractional-card-title">{opportunity.title}</h4>
                  <p className="fractional-card-desc">{opportunity.description}</p>
                </div>

                <div className="fractional-tags-row">
                  {opportunity.tags.map((tag, idx) => (
                    <span key={idx} className="fractional-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
