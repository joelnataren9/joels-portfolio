import React from 'react'

import resume from "./pdf/ResumeJoel Nataren.pdf"

import './styles/AboutMe.scss'

function AboutMe() {
    return(
        <div id="#aboutme" className="row align-items-center justify-content-around">
            <div className="col-lg-6 col-md-6 col-sm-8 p-3 d-flex justify-content-center">
                    <img src="https://res.cloudinary.com/joeln7/image/upload/v1634591848/Portfolio/ResumeJoel_Nataren_eru4qm.png" className="card-img-top resume" alt='Resume of Joel Nataren'>
                    </img>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 p-3 ">
                <div className="card-body resume_body">
                    <h5 className="resume-title ">Resume</h5>
                    <p className="card-text"> Hi, I am Joel Nataren, an energetic Salvadoran who loves to learn about technology
                        and new things coming up. I am really interested in Artificial Intelligence and Machine Learning but also passionate
                        Software Development.
                            <br/><br/>
                        I am studying Computer Science at Michigan State University, finishing my freshman year.
                    </p>
                    <div className="btn-center">
                        <button className=" btn btn-download" >
                            <a href={resume} className="text-muted download" download>Download resume!</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe