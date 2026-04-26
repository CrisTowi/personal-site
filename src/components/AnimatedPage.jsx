import React, { useRef, useEffect } from 'react'

export default function AnimatedPage({ id, current, children }) {
  const ref = useRef(null)
  const visible = id === current

  useEffect(() => {
    if (!ref.current) return
    if (visible) {
      ref.current.style.display = 'block'
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(20px)'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
            ref.current.style.opacity = '1'
            ref.current.style.transform = 'translateY(0)'
          }
        })
      })
    } else {
      ref.current.style.display = 'none'
    }
  }, [visible])

  return (
    <div ref={ref} className="page" style={{ display: visible ? 'block' : 'none' }}>
      {children}
    </div>
  )
}
