import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'
// import PolaroidCarousel from '../PolaroidCarousel'
// import PolaroidSwipe from '../PolaroidSwipe'

export default function AboutPage() {
  return (
    <div className="page-no-scroll">
      <div className="section-header">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">
            The engineer<br />
            <em style={{ fontFamily: 'Cormorant Garamond,serif', fontStyle: 'italic' }}>behind the work</em>
          </h2>
        </div>
        <span className="section-count">02</span>
      </div>
      <div className="about-grid">
        <div className="about-bio">
          {DATA.bio.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <div className="about-sidebar">
          {/* <div className="desktop-only"><PolaroidCarousel /></div> */}
          {/* <div className="mobile-only"><PolaroidSwipe /></div> */}
          <div style={{ marginTop: 0 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 12 }}>
              Interests
            </p>
            <div className="interests-row">
              {DATA.interests.map((item, interestIndex) => (
                <div className="interest-tag" key={interestIndex}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
