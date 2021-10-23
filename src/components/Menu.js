import React from 'react';

import './styles/Menu.scss'


function Menu() {
    return(
        <React.Fragment>
            <nav id='header' className="navbar navbar-expand-lg navbar-expand-md navbar-dark header_bg sticky-top ">
                    <div className="container">
                        <a className="navbar-brand" href="#aboutme">
                            <img src='https://res.cloudinary.com/joeln7/image/upload/v1634854432/Portfolio/Joelphoto_ilinsm.png' alt="Logo de Joel Nataren" className='logo' />
                            Joel Nataren
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar"  data-target='#navbar'>
                            <ul className="navbar-nav ml-auto " id="navbar"  data-target='#navbar'>
                                <li className="nav-item nav_color ">
                                    <a className="nav-link" href="#aboutme">About Me</a>
                                </li>
                                <li className="nav-item nav_color">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item nav_color">
                                    <a className="nav-link" href="https://github.com/joelnataren9/">Github</a>
                                </li>
                                <li className="nav-item nav_color">
                                    <a className="nav-link" href="https://www.linkedin.com/in/joel-nataren/">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </React.Fragment>

    )
}

export default Menu