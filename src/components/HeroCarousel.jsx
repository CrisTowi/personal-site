import { useState, useEffect, useRef } from 'react'
import { DATA } from '../data'

export default function HeroCarousel({ setPage }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const containerRef = useRef(null)
  const accRef = useRef(0)
  const total = 3

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setCurrent(((idx % total) + total) % total)
    setTimeout(() => setAnimating(false), 560)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = (event) => {
      const slide = el.querySelectorAll('.hc-slide')[current]
      if (slide) {
        const atTop = slide.scrollTop === 0
        const atBottom = slide.scrollHeight - slide.scrollTop <= slide.clientHeight + 1
        if ((event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom)) return
      }
      event.preventDefault()
      accRef.current += event.deltaY
      if (accRef.current > 60) { goTo(current + 1); accRef.current = 0 }
      else if (accRef.current < -60) { goTo(current - 1); accRef.current = 0 }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [current, animating])

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
    <div ref={containerRef} style={{ position: 'relative', height: '100%', overflow: 'hidden', background: 'var(--ink)' }}>
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
      <div className="hc-hint">↕ scroll to explore</div>
    </div>
  )
}
