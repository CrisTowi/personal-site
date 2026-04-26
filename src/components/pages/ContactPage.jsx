import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'

export default function ContactPage() {
  return (
    <div className="page-no-scroll">
      <div className="section-header">
        <div>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact</h2>
        </div>
        <span className="section-count">06</span>
      </div>
      <div className="contact-wrap">
        <div className="contact-left">
          <h3 className="contact-headline">Let's build something <em>great</em> together.</h3>
          <p className="contact-detail">
            I'm open to senior engineering roles, technical leadership opportunities, and interesting side projects.
            Reach out via email or LinkedIn — I'm always happy to connect.
          </p>
        </div>
        <div className="contact-right">
          <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <div>
              <div className="social-platform">LinkedIn</div>
              <div className="social-name">cconsuelo</div>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <div>
              <div className="social-platform">GitHub</div>
              <div className="social-name">CrisTowi</div>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <a href={`mailto:${DATA.email}`} className="social-link">
            <div>
              <div className="social-platform">Email</div>
              <div className="social-name">christian.consuelo2@gmail.com</div>
            </div>
            <span className="social-arrow">→</span>
          </a>
          <div className="social-link" style={{ cursor: 'default' }}>
            <div>
              <div className="social-platform">Location</div>
              <div className="social-name">Mexico City, MX</div>
            </div>
            <span className="social-arrow" style={{ opacity: 0.3 }}>●</span>
          </div>
          <div className="social-link" style={{ cursor: 'default' }}>
            <div>
              <div className="social-platform">Languages</div>
              <div className="social-name">Spanish · English</div>
            </div>
            <span className="social-arrow" style={{ opacity: 0.3 }}>●</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
