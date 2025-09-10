import React from 'react'
import Header from '../components/Header'
import Scroller from '../components/Scroller'
import ProjectSection from '../components/ProjectSection'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

function Home({projectRef, skillsRef, expRef}) {
  return (
    <div>
        <Header />
        <Header />
        <Scroller />
        <Skills skillsRef={skillsRef}/>
        <ProjectSection projectRef={projectRef} />
        <Experience expRef={expRef} />
    </div>
  )
}

export default Home