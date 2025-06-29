import React from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Projects from '../components/Project'
import Footer from '../parts/Footer'
import Hero from '../parts/Hero'
import Navbar from '../parts/Navbar'
import AdditionalSkills from '../components/AdditionalSkills'

const Home = () => {
  return (
    <div>
        <Navbar/> 
        <Hero/>
        <AboutMe/>
        <AdditionalSkills/>
        <Projects/>
        
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
