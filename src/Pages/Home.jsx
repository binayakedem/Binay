import React from 'react'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Body from '../Components/Body'
import Gallary from '../Components/Gallary'
import Blognavigator from '../Components/Blognavigator'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Body/>
        <Projects/>
        <Gallary/>
        <Blognavigator/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Home