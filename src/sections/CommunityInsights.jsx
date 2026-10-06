import React, { useState } from 'react';
import { BookOpen, Mail, Calendar, ArrowUpRight, Users, CheckCircle } from 'lucide-react';
import communityImg from '../assets/community/community.jpg';
import './CommunityInsights.css';

const resourcesList = [
  {
    id: 1,
    title: 'Hiring playbook for early-stage climate orgs',
    link: '#resource-playbook'
  },
  {
    id: 2,
    title: 'Comp benchmarks: India non-profit & impact sectors',
    link: '#resource-benchmarks'
  },
  {
    id: 3,
    title: 'Building a 90-day onboarding rhythm',
    link: '#resource-onboarding'
  }
];

export default function CommunityInsights() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="community-section" id="community">
      <div className="container">
        
        {/* Section Header */}
        <div className="community-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dash" />
            <span className="eyebrow-text">COMMUNITY & INSIGHTS</span>
          </div>
          <h2 className="community-heading">
            Ideas worth sharing.<br />
            Conversations worth having.
          </h2>
        </div>

        {/* Row 1: Featured Essay + Newsletter & Micro Cards */}
        <div className="community-row-upper">
          
          {/* Left: Featured Essay Card */}
          <article className="featured-essay-card">
            <div className="essay-image-wrapper">
              <img 
                src={communityImg} 
                alt="Workshop brainstorm with sticky notes" 
                className="essay-image"
                loading="lazy"
              />
            </div>

            <div className="essay-content">
              <div className="essay-tag">
                <BookOpen size={14} className="essay-tag-icon" />
                <span>FEATURED ESSAY</span>
              </div>

              <h3 className="essay-title">
                <a href="#featured-essay">
                  Why hiring with intention is the unlock for the next decade of growth.
                </a>
              </h3>

              <p className="essay-desc">
                A long read on building people systems that hold up when the company doubles.
              </p>

              <div className="essay-meta">
                <span>The People Order Editorial</span>
                <span className="meta-dot">•</span>
                <span>9 min read</span>
              </div>
            </div>
          </article>

          {/* Right: Newsletter Card + 2 Micro Cards */}
          <div className="community-right-col">
            
            {/* Newsletter Card */}
            <div className="newsletter-card">
              <div className="newsletter-icon-wrap">
                <Mail size={22} className="newsletter-icon" />
              </div>

              <h3 className="newsletter-heading">
                The Order — a fortnightly newsletter on people, work, and growth.
              </h3>

              <form className="newsletter-form" onSubmit={handleSubscribe}>
                {isSubscribed ? (
                  <div className="newsletter-success">
                    <CheckCircle size={16} />
                    <span>You're on the list! Thank you.</span>
                  </div>
                ) : (
                  <div className="newsletter-input-group">
                    <input 
                      type="email" 
                      className="newsletter-input" 
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      aria-label="Email address for newsletter"
                    />
                    <button type="submit" className="newsletter-submit-btn">
                      Subscribe
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Two Micro-Cards Row */}
            <div className="micro-cards-grid">
              
              {/* Card 1: From LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="micro-card linkedin-card">
                <div className="micro-card-tag">
                  FROM LINKEDIN
                </div>
                <blockquote className="micro-card-quote">
                  “We don't fill seats. We help build teams that hold.”
                </blockquote>
                <div className="micro-card-author">
                  @thepeopleorder
                </div>
              </a>

              {/* Card 2: Event */}
              <a href="#roundtable-event" className="micro-card event-card">
                <div className="micro-card-tag event-tag-header">
                  <Calendar size={13} className="event-icon" />
                  <span>EVENT</span>
                </div>
                <h4 className="micro-card-event-title">
                  People Order Roundtable — Climate hiring in 2026.
                </h4>
                <div className="micro-card-event-meta">
                  Online · Jul 18
                </div>
              </a>

            </div>

          </div>
        </div>

        {/* Row 2: Resources Library + Community Story */}
        <div className="community-row-lower">
          
          {/* Left: Resources Library Card */}
          <div className="resources-card">
            <div className="resources-header">
              RESOURCES LIBRARY
            </div>

            <ul className="resources-list">
              {resourcesList.map((resource) => (
                <li key={resource.id} className="resource-item">
                  <a href={resource.link} className="resource-link">
                    <span className="resource-title">{resource.title}</span>
                    <ArrowUpRight size={17} className="resource-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Community Story Card */}
          <article className="story-card">
            <div className="story-tag">
              <Users size={15} className="story-tag-icon" />
              <span>COMMUNITY STORY</span>
            </div>

            <h3 className="story-title">
              <a href="#climate-case-study">
                How a 6-person climate team hired their first VP of Programs in 5 weeks.
              </a>
            </h3>

            <div className="story-pills-row">
              <span className="story-pill pill-cyan">Case Study</span>
              <span className="story-pill pill-neutral">Climate</span>
              <span className="story-pill pill-neutral">Hiring</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
