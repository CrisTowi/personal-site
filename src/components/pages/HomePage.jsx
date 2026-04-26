import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'
import HeroCarousel from '../HeroCarousel'

export default function HomePage({ setPage }) {
  return (
    <div className="page-no-scroll page-home">
      <div className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Senior Software Engineer</p>
          <h1 className="hero-name">
            Christian<br /><em>Consuelo</em>
          </h1>
          <p className="hero-tagline">{DATA.tagline}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setPage('experience')}>View Experience</button>
            <button className="btn-outline" onClick={() => setPage('contact')}>Get in Touch</button>
          </div>
        </div>
        <div className="hero-right">
          <HeroCarousel setPage={setPage} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
