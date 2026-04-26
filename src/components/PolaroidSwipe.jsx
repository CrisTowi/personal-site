import React, { useState } from 'react'

const PHOTOS = [
  { caption: 'At the gym, 6am grind 💪', color: 'oklch(88% 0.03 80)', icon: '🏋️' },
  { caption: 'Hackathon 2023 — shipped it!', color: 'oklch(88% 0.03 140)', icon: '💻' },
  { caption: 'Gaming setup, circa 2022', color: 'oklch(86% 0.03 260)', icon: '🎮' },
  { caption: 'Mexico City rooftop vibes', color: 'oklch(89% 0.04 60)', icon: '🌆' },
  { caption: 'Coffee & code — the usual', color: 'oklch(90% 0.02 50)', icon: '☕' },
]
const ROTATIONS = [-2, 1, -1, 2, -1]

export default function PolaroidSwipe() {
  const [active, setActive] = useState(0)
  const [dragStart, setDragStart] = useState(null)

  const prev = () => setActive(curr => (curr - 1 + PHOTOS.length) % PHOTOS.length)
  const next = () => setActive(curr => (curr + 1) % PHOTOS.length)

  const onTouchStart = (event) => setDragStart(event.touches[0].clientX)
  const onTouchEnd = (event) => {
    if (dragStart === null) return
    const diff = dragStart - event.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    setDragStart(null)
  }

  return (
    <div>
      <div className="polaroid-swipe-wrap" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="polaroid-swipe-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {PHOTOS.map((photo, photoIndex) => (
            <div key={photoIndex} className="polaroid-swipe-item">
              <div className="polaroid-swipe-card" style={{ transform: `rotate(${ROTATIONS[photoIndex]}deg)` }}>
                <div className="polaroid-swipe-img" style={{ background: photo.color }}>
                  <span>{photo.icon}</span>
                </div>
                <div className="polaroid-swipe-caption">{photo.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="polaroid-swipe-dots">
        {PHOTOS.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`polaroid-dot${dotIndex === active ? ' active' : ''}`}
            onClick={() => setActive(dotIndex)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  )
}
