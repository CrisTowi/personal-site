import React, { useState, useEffect, useRef } from 'react'
import { DATA } from '../data'

export default function HeroCarousel({ setPage }) {
  const [current, setCurrent] = useState(0)
  const total = 3
  const timerRef = useRef(null)

  const pausedRef = useRef(false)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) setCurrent(prev => (prev + 1) % total)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (idx) => {
    setCurrent(((idx % total) + total) % total)
    resetTimer()
  }

  const handleMouseEnter = () => { pausedRef.current = true }
  const handleMouseLeave = () => { pausedRef.current = false }

  const slides = [
    {
      label: '01 / 03 — Projects',
      title: 'Projects',
      items: DATA.projects.map(project => ({ name: project.name, sub: project.category, page: 'projects' })),
      viewAll: 'projects',
    },
    {
      label: '02 / 03 — Experience',
      title: 'Experience',
      items: DATA.experience.map(exp => ({ name: exp.company, sub: exp.role, page: 'experience' })),
      viewAll: 'experience',
    },
    {
      label: '03 / 03 — Skills',
      title: 'Skills',
      items: DATA.skills.map(skill => ({ name: skill.title, sub: skill.category, page: 'skills' })),
      viewAll: 'skills',
    },
  ]

  return (
    <div
      style={{ position: 'relative', height: '100%', overflow: 'hidden', background: 'var(--ink)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className="hc-track"
          style={{ transform: `translateY(${(slideIndex - current) * 100}%)` }}
        >
          <div className="hc-slide">
            <div className="hc-slide-inner">
              <p className="hc-slide-label">{slide.label}</p>
              <h2 className="hc-title">{slide.title}</h2>
              <div className="hc-items">
                {slide.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="hc-item" onClick={() => setPage(item.page)}>
                    <div>
                      <div className="hc-item-name">{item.name}</div>
                      <div className="hc-item-sub">{item.sub}</div>
                    </div>
                    <span className="hc-item-arrow">→</span>
                  </div>
                ))}
              </div>
              <button className="hc-view-all" onClick={() => setPage(slide.viewAll)}>
                View all {slide.title} →
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="hc-nav">
        {slides.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`hc-dot${dotIndex === current ? ' active' : ''}`}
            onClick={() => goTo(dotIndex)}
          />
        ))}
      </div>
    </div>
  )
}
