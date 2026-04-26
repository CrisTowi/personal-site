import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'

export default function ExperiencePage() {
  return (
    <div>
      <div className="section-header">
        <div>
          <p className="section-label">Work History</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <span className="section-count">03</span>
      </div>
      <div className="exp-list">
        {DATA.experience.map((exp, expIndex) => (
          <div className="exp-item" key={expIndex}>
            <div className="exp-meta">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-dates">{exp.dates}</div>
              <span className="exp-tag">Full-time</span>
            </div>
            <div className="exp-content">
              <div className="exp-role">{exp.role}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--cream-dark)', padding: '48px 0 48px', marginTop: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 20 }}>
            Education
          </p>
          <div className="edu-block">
            <div className="edu-school">Higher School of Computing</div>
            <div className="edu-degree">Computer System Engineering</div>
            <div className="edu-org">Instituto Politécnico Nacional (IPN)</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
