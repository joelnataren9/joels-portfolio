import React from 'react'
import { Fragment } from 'react'

import Menu from '../components/Menu'
import AboutMe from '../components/AboutMe'

function MainPage(){
    return(
        <React.Fragment>
            <Menu/>
            <AboutMe/>
        </React.Fragment>
    )
}

export default MainPage