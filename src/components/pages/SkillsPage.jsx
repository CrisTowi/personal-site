import React from 'react'
import { DATA } from '../../data'
import Footer from '../Footer'

export default function SkillsPage() {
  return (
    <div>
      <div className="section-header">
        <div>
          <p className="section-label">Competencies</p>
          <h2 className="section-title">Skills</h2>
        </div>
        <span className="section-count">04</span>
      </div>
      <div className="skills-grid">
        {DATA.skills.map((skill, skillIndex) => (
          <div className="skill-card" key={skillIndex}>
            <p className="skill-category">{skill.category}</p>
            <h3 className="skill-card-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag, tagIndex) => (
                <span className="skill-tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
