import React, { useState } from 'react';
import { Search, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import './OpportunitiesSection.css';

const sectorsList = [
  { id: 'csr', label: 'CSR', bg: '#FFE8E5', color: '#D9534F' },
  { id: 'actuarial', label: 'Actuarial', bg: '#E3F2FD', color: '#1E88E5' },
  { id: 'climate', label: 'Climate', bg: '#E8F5E9', color: '#388E3C' },
  { id: 'social-impact', label: 'Social Impact', bg: '#F3E8FF', color: '#8E24AA' },
  { id: 'healthcare', label: 'Healthcare', bg: '#E0F7FA', color: '#0097A7' },
  { id: 'education', label: 'Education', bg: '#FEF3C7', color: '#D97706' }
];

const opportunitiesData = [
  {
    id: 1,
    title: 'Senior Strategy Associate',
    company: 'Growth-led Healthcare Startup',
    description: 'Building systems and strategy for a rapidly scaling team.',
    tags: ['Remote-Friendly', 'Full Time', 'Strategy', '2–4 Years'],
    location: 'Bengaluru, IN'
  },
  {
    id: 2,
    title: 'Climate Programs Lead',
    company: 'Global Climate Foundation',
    description: 'Designing programs that move capital toward climate adaptation.',
    tags: ['Hybrid', 'Full Time', 'Climate', '5–7 Years'],
    location: 'Nairobi, KE'
  },
  {
    id: 3,
    title: 'CSR Partnerships Manager',
    company: 'Listed Manufacturing Group',
    description: 'Owning long-term CSR partnerships across education and livelihoods.',
    tags: ['On-site', 'Full Time', 'CSR', '4–6 Years'],
    location: 'Mumbai, IN'
  },
  {
    id: 4,
    title: 'People Operations Lead',
    company: 'Series B Education Platform',
    description: 'Building people systems for an org doubling in headcount.',
    tags: ['Remote', 'Full Time', 'People Ops', '3–5 Years'],
    location: 'Remote'
  }
];

export default function OpportunitiesSection() {
  const [activeSector, setActiveSector] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSectorClick = (sectorId) => {
    setActiveSector(activeSector === sectorId ? null : sectorId);
  };

  return (
    <section className="opportunities-section">
      <div className="container">
        <div className="opportunities-layout">
          {/* Left Column: Featured Opportunities */}
          <div className="opportunities-main-col">
            {/* Header */}
            <div className="opp-header">
              <div className="opp-tag">
                <span className="opp-tag-dash" />
                <span className="opp-tag-label">FEATURED OPPORTUNITIES</span>
              </div>
              <h2 className="opp-heading">Find work aligned with you.</h2>
              <p className="opp-subheading">
                Curated roles across organisations building with intention.
              </p>
            </div>

            {/* Sectors Filter Row */}
            <div className="sectors-filter-wrapper">
              <span className="sectors-label">SECTORS —</span>
              <div className="sectors-pills-list">
                {sectorsList.map((sector) => {
                  const isActive = activeSector === sector.id;
                  return (
                    <button
                      key={sector.id}
                      type="button"
                      className={`sector-pill ${isActive ? 'active' : ''}`}
                      style={{
                        backgroundColor: sector.bg,
                        color: sector.color,
                        borderColor: isActive ? sector.color : 'transparent'
                      }}
                      onClick={() => handleSectorClick(sector.id)}
                    >
                      {sector.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Bar */}
            <form className="opp-search-bar" onSubmit={(e) => e.preventDefault()}>
              <div className="search-input-group">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search roles, sectors, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <button type="submit" className="search-submit-btn">
                Search
              </button>
            </form>

            {/* 2x2 Opportunity Cards Grid */}
            <div className="opp-cards-grid">
              {opportunitiesData.map((job) => (
                <article key={job.id} className="job-card">
                  {/* Top: Logo Box & External Link Icon */}
                  <div className="job-card-top">
                    <div className="job-logo-box">Logo</div>
                    <button className="job-external-btn" aria-label="Open role">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  {/* Title & Company */}
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-company">{job.company}</p>

                  {/* Excerpt */}
                  <p className="job-desc">{job.description}</p>

                  {/* Tags */}
                  <div className="job-tags-list">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="job-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Location */}
                  <div className="job-location">
                    <MapPin size={15} className="location-pin" />
                    <span>{job.location}</span>
                  </div>

                  {/* Bottom Actions */}
                  <div className="job-card-footer">
                    <button type="button" className="job-btn job-btn-outline">
                      Learn More
                    </button>
                    <button type="button" className="job-btn job-btn-primary">
                      Quick Apply
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="opp-bottom-action">
              <a href="#all-opportunities" className="explore-all-link">
                <span>Explore All Opportunities</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Right Column: For Organisations */}
          <aside className="opportunities-side-col">
            <div className="organisations-card">
              <div className="org-tag">
                <span className="org-tag-dash" />
                <span className="org-tag-label">FOR ORGANISATIONS</span>
              </div>

              <h3 className="org-heading">
                Growth becomes easier when the right people build it with you.
              </h3>

              <p className="org-desc">
                We partner with growing organisations to help build intentional teams, stronger workplace cultures, and people ecosystems that support long-term growth.
              </p>

              <div className="org-cta-wrapper">
                <a href="#partner-with-us" className="btn-partner">
                  <span>Partner With Us</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Trusted by section */}
              <div className="org-trusted-block">
                <span className="trusted-label">
                  TRUSTED BY GROWING ORGANISATIONS
                </span>
                <div className="trusted-logos-grid">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="trusted-logo-box">
                      Logo
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
