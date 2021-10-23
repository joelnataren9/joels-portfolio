import React from 'react'

import '../components/styles/_variables.scss'

import Menu from '../components/Menu'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

function MainPage(){
    return(
        <div className='total-container'>
            <Menu/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </div>
    )
}

export default MainPage