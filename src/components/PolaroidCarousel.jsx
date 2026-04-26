import { useState } from 'react'

const PHOTOS = [
  { caption: 'At the gym, 6am grind 💪', color: 'oklch(88% 0.03 80)', icon: '🏋️' },
  { caption: 'Hackathon 2023 — shipped it!', color: 'oklch(88% 0.03 140)', icon: '💻' },
  { caption: 'Gaming setup, circa 2022', color: 'oklch(86% 0.03 260)', icon: '🎮' },
  { caption: 'Mexico City rooftop vibes', color: 'oklch(89% 0.04 60)', icon: '🌆' },
  { caption: 'Coffee & code — the usual', color: 'oklch(90% 0.02 50)', icon: '☕' },
]
const ROTATIONS = [-6, 3, -2, 5, -4]
const OFFSETS = [
  { left: 0, top: 20 },
  { left: 30, top: 0 },
  { left: 60, top: 30 },
  { left: 90, top: 10 },
  { left: 120, top: 25 },
]

export default function PolaroidCarousel() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="polaroid-wrap">
        {PHOTOS.map((photo, photoIndex) => {
          const isActive = photoIndex === active
          const rot = isActive ? 0 : ROTATIONS[photoIndex]
          const off = OFFSETS[photoIndex]
          return (
            <div
              key={photoIndex}
              className={`polaroid${isActive ? ' active' : ''}`}
              style={{
                left: isActive ? '50%' : `${off.left}px`,
                top: isActive ? '50%' : `${off.top}px`,
                transform: isActive
                  ? `translate(-50%, -50%) rotate(${rot}deg) scale(1.05)`
                  : `rotate(${rot}deg) scale(1)`,
                zIndex: isActive ? 10 : photoIndex,
              }}
              onClick={() => setActive(photoIndex)}
            >
              <div className="polaroid-img" style={{ background: photo.color }}>
                <span style={{ fontSize: 48 }}>{photo.icon}</span>
              </div>
              <div className="polaroid-caption">{photo.caption}</div>
            </div>
          )
        })}
      </div>
      <div className="polaroid-controls">
        {PHOTOS.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`polaroid-dot${dotIndex === active ? ' active' : ''}`}
            onClick={() => setActive(dotIndex)}
          />
        ))}
      </div>
    </div>
  )
}
