import React from 'react'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Body from '../Components/Body'
import Gallary from '../Components/Gallary'
import Blognavigator from '../Components/Blognavigator'

const Home = () => {
  return (
    <div>
      <Body/>
        <Projects/>
        <Gallary/>
        <Blognavigator/>
        <Skills/>
    </div>
  )
}

export default Home