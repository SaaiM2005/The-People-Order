import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeatureCards.css';

const cardsData = [
  {
    id: 1,
    number: '01',
    category: 'CAREERS',
    color: '#47C7C7',
    badgeBg: 'rgba(71, 199, 199, 0.15)',
    categoryColor: '#207e7e',
    title: 'For people building meaningful careers.',
    description: 'Curated opportunities, guidance, and community for the next chapter of your work.',
    linkText: 'Learn More',
    href: '#careers'
  },
  {
    id: 2,
    number: '02',
    category: 'COMMUNITY',
    color: '#78B98F',
    badgeBg: 'rgba(120, 185, 143, 0.18)',
    categoryColor: '#3d7953',
    title: 'For a network that grows together.',
    description: 'Champions, fractional experts, and peers learning out loud — in public.',
    linkText: 'Learn More',
    href: '#community'
  },
  {
    id: 3,
    number: '03',
    category: 'COMMUNICATIONS',
    color: '#FAC547',
    badgeBg: 'rgba(250, 197, 71, 0.22)',
    categoryColor: '#8a6207',
    title: 'For ideas that move people forward.',
    description: 'Essays, conversations, and resources on people, growth, and the future of work.',
    linkText: 'Learn More',
    href: '#communications'
  }
];

export default function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="container">
        <div className="feature-cards-grid">
          {cardsData.map((card) => (
            <article 
              key={card.id} 
              className="feature-card"
              style={{ '--card-accent': card.color }}
            >
              {/* Colored Top Accent Bar */}
              <div 
                className="feature-card-accent-bar"
                style={{ backgroundColor: card.color }}
              />

              <div className="feature-card-inner">
                {/* Header: Category & Number Badge */}
                <div className="feature-card-header">
                  <div 
                    className="feature-card-category"
                    style={{ color: card.categoryColor }}
                  >
                    <span 
                      className="category-dash" 
                      style={{ backgroundColor: card.categoryColor }}
                    />
                    <span className="category-label">{card.category}</span>
                  </div>

                  <span 
                    className="feature-card-badge"
                    style={{ backgroundColor: card.badgeBg }}
                  >
                    {card.number}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="feature-card-title">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="feature-card-desc">
                  {card.description}
                </p>

                {/* CTA Link */}
                <div className="feature-card-footer">
                  <a href={card.href} className="feature-card-link">
                    <span>{card.linkText}</span>
                    <ArrowRight size={16} className="link-arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
