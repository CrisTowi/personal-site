import React, { useState, useEffect } from 'react'
import { PAGES } from './data'
import Nav from './components/Nav'
import AnimatedPage from './components/AnimatedPage'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ExperiencePage from './components/pages/ExperiencePage'
import SkillsPage from './components/pages/SkillsPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ContactPage from './components/pages/ContactPage'

function usePage() {
  const [page, setPageRaw] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return PAGES.includes(hash) ? hash : 'home'
  })

  function setPage(targetPage) {
    window.location.hash = targetPage
    setPageRaw(targetPage)
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#', '')
      if (PAGES.includes(hash)) setPageRaw(hash)
    }
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return [page, setPage]
}

export default function App() {
  const [page, setPage] = usePage()

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <AnimatedPage id="home" current={page}><HomePage setPage={setPage} /></AnimatedPage>
      <AnimatedPage id="about" current={page}><AboutPage /></AnimatedPage>
      <AnimatedPage id="experience" current={page}><ExperiencePage /></AnimatedPage>
      <AnimatedPage id="skills" current={page}><SkillsPage /></AnimatedPage>
      <AnimatedPage id="projects" current={page}><ProjectsPage /></AnimatedPage>
      <AnimatedPage id="contact" current={page}><ContactPage /></AnimatedPage>
    </>
  )
}
