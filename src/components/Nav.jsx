import { useState } from 'react'

const NAV_LINKS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
]

export default function Nav({ page, setPage }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigate = (targetPage) => {
    setPage(targetPage)
    setDrawerOpen(false)
  }

  return (
    <>
      <nav>
        <span className="nav-logo" onClick={() => navigate('home')}>CC</span>
        <ul className="nav-links">
          {NAV_LINKS.map(([id, label]) => (
            <li key={id} className={page === id ? 'active' : ''} onClick={() => navigate(id)}>
              {label}
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${drawerOpen ? ' open' : ''}`}
          onClick={() => setDrawerOpen(open => !open)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`drawer-overlay${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <div className={`drawer${drawerOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(([id, label]) => (
          <div key={id} className="drawer-link" onClick={() => navigate(id)}>{label}</div>
        ))}
      </div>
    </>
  )
}
