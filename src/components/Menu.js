import React from 'react';

import './styles/Menu.scss'
import 'bootstrap'

function Menu() {
    return(
        <nav id='header' className="navbar navbar-expand-lg navbar-expand-md navbar-dark header_bg sticky-top ">
                <div className="container ">
                    <a className="navbar-brand" href="#header">
                        <img src='https://res.cloudinary.com/joeln7/image/upload/v1634584853/Portfolio/Logo_joel_1_vx972q.png' alt="Logo de Joel Nataren" className='logo ' />
                        Joel Nataren
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar" data-toggle='collapse' data-target='#navbar'>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav_color">
                                <a className="nav-link" href="#aboutme">About Me</a>
                            </li>
                            <li className="nav-item nav_color">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item nav_color">
                                <a className="nav-link" href="#github">Github</a>
                            </li>
                            <li className="nav-item nav_color">
                                <a className="nav-link" href="#linkedin">LinkedIn</a>
                            </li>
                            <li className="nav-item nav_color">
                                <a className="nav-link text-taki" href="#main" data-toggle='modal' data-target='#BuyModal'>Comprar tickets</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>

    )
}

export default Menu