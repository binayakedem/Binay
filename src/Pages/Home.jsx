import React from 'react'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Body from '../Components/Body'
import Gallary from '../Components/Gallary'

const Home = () => {
  return (
    <div>
      <Body/>
        <Projects/>
        <Gallary/>
        <Skills/>
    </div>
  )
}

export default Home