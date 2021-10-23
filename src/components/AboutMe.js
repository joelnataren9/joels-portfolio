import React from 'react'

import resume from "./pdf/ResumeJoel Nataren.pdf"

import './styles/AboutMe.scss'

function AboutMe() {
    return(
        <div className="about-us-container">
            <div id="aboutme" className="row align-items-center justify-content-around bg-img mb-5">
                <div className="col-lg-6 col-md-6 col-sm-8 p-3 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="col-12 mb-4">
                            <img className='web-d-img' src="https://res.cloudinary.com/joeln7/image/upload/v1634932113/Portfolio/web-development-4202909_640_rezwng.png" alt="web development" />
                        </div>
                        <div className="col-12">
                            <img className='web-d-img' src="https://res.cloudinary.com/joeln7/image/upload/v1634854432/Portfolio/Joelphoto_ilinsm.png" alt="Joel Nataren" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-8 p-3 ">
                    <div className=" resume_body">
                        <h5 className="resume-title ">Who am I?</h5>
                        <div className="card-text">
                            Hi! My name is <b>Joel Nataren</b>, an energetic person who loves to learn about technology
                            and innovation. I am really interested in Artificial Intelligence, Machine Learning and Software
                            Development. I am currently a freshman at Michigan State University studying Computer Science Engineering.
                                <br/><br/>
                            Hobbies: <br />
                            <ul>
                                <li>
                                    Playing sports such as soccer, basketball, and ping-pong <br />
                                </li>
                                <li>
                                    Playing musical instruments such as drums, piano, bass, and ukelele
                                </li>
                                <li>
                                    Learning more programming languages through PLatzi (an online Hispanic platform)
                                </li>
                                <li>
                                    Learning about Economics and politics, including national and international news
                                </li>
                            </ul>
                            Technical Skills: <br />
                            <ul>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    HTML, CSS, and preprocessor Sass
                                </li>
                                <li>
                                    Git and Github
                                </li>
                                <li>
                                    React JS
                                </li>
                                <li>
                                    Python
                                </li>
                                <li>
                                    PHP
                                </li>
                                <li>
                                    Unreal Engine
                                </li>
                                <li>
                                    MAYA 3D (Autodesk)
                                </li>
                                <li>
                                    Filmora (Audio and Video editing)
                                </li>
                                <li>
                                    Audacity
                                </li>
                                <li>
                                    Maria DB
                                </li>
                            </ul>
                        </div>
                        <div className="btn-center pb-5 mb-3">
                            <button className=" btn btn-download" >
                                <a href={resume} className="text-muted download" download>Download resume!</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe