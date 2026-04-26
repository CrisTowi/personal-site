import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'

function UIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 7h16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="4.5" cy="5.5" r="0.8" fill="currentColor" />
      <circle cx="6.5" cy="5.5" r="0.8" fill="currentColor" />
    </svg>
  )
}

function CLIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 8l3 3-3 3M10 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GHIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function LiveIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 1h3m0 0v3m0-3L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <div>
      <div className="section-header">
        <div>
          <p className="section-label">Side Work</p>
          <h2 className="section-title">
            Personal <em style={{ fontFamily: 'Cormorant Garamond,serif', fontStyle: 'italic' }}>Projects</em>
          </h2>
        </div>
        <span className="section-count">05</span>
      </div>
      <div className="projects-grid">
        {DATA.projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`proj-card${project.type === 'cli' ? ' cli' : ''}${project.featured ? ' featured' : ''}`}
          >
            {project.featured && <span className="proj-featured-star">★ Featured</span>}
            <div className="proj-card-top">
              <span className="proj-category">{project.category}</span>
              <span className="proj-type-icon">{project.type === 'cli' ? <CLIIcon /> : <UIIcon />}</span>
            </div>
            <h3 className="proj-name">{project.name}</h3>
            <p className="proj-tagline">{project.tagline}</p>
            <p className="proj-desc">{project.description}</p>
            <div className="proj-tech">
              {project.tech.map((tag, tagIndex) => (
                <span className="proj-tech-tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
            <div className="proj-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link primary">
                  <LiveIcon /> Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <GHIcon /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-cta">
        <p className="projects-cta-text">
          More experiments, scripts and open source work live on GitHub.
        </p>
        <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="btn-outline projects-cta-link">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          View all on GitHub
        </a>
      </div>
      <Footer />
    </div>
  )
}
