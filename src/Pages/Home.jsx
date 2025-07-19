import React from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Projects from '../components/Project'
import Footer from '../parts/Footer'
import Hero from '../parts/Hero'
import Navbar from '../parts/Navbar'
import Skills from '../components/Skills'
import Education from '../components/Education'

const Home = () => {
  return (
    <div>
        <Navbar/> 
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Education/>
        <Projects/>
    
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
