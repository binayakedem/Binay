import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SkillPage from '../Pages/SkillPage'
import Navbar from '../Components/Navbar'
import SecondaryNav from '../Components/SecondaryNav'
import ProjectPage from '../Pages/ProjectPage'
import Experiences from '../Pages/Experiences'
import About from '../Pages/About'
import Footer from '../Components/Footer'
import Blog from '../Pages/Blog'
import Gallery from '../Pages/Gallery'
import Contact from '../Pages/Contact'
const MyRoutings= () => {
  return (
   <>
   <BrowserRouter>
   <SecondaryNav/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/skills' element={<SkillPage/>}/>
    <Route path='/projects' element={<ProjectPage/>}/>
    <Route path='/experiences' element={<Experiences/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/gallery' element={<Gallery />}/>
    <Route path='/contact' element={<Contact />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default MyRoutings;