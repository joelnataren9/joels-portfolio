import React from 'react'

import './styles/Portfolio.scss'

function Portfolio() {
    return (
        <div className="portfolio-bg">
            <div className='container port-pos'>
                <div id='portfolio' className='portfolio-container'>
                    <h1 className='text-center '>
                        Portfolio
                    </h1>
                    <div id='carouselExampleIndicators' className="carousel slide port-pos mt-5" data-ride="carousel" data-pause= 'false' data-interval='10000' >
                        <div className="carousel-inner ">
                            <div className="carousel-item active" >
                                <div className="row p-2 ">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 port-pos ">
                                        <img src="https://res.cloudinary.com/joeln7/image/upload/v1634759799/Portfolio/Screen_Shot_2021-10-20_at_3.53.07_PM_fd2vlp.png" className="d-block portfolio_img port-pos" alt="Platzi badges"/>
                                        <div className="carousel-indicators indicators-position ">
                                            <svg  data-target="#carouselExampleIndicators" data-slide-to="0" aria-current="true" aria-label="Slide 1"
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="active icon-size bi bi-dice-1" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="1.5"/>
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                            </svg>

                                            <svg data-target="#carouselExampleIndicators" data-slide-to="1" aria-current="true" aria-label="Slide 2"
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dice-1 ml-3 icon-size" viewBox="0 0 16 16">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-center">
                                        <div className='d-block justify-content-center align-items-center text-center txt-white'>
                                            <h2 className='text-center'>
                                                Conference web page
                                            </h2>
                                            <div className="portfolio-text">
                                                Learned to use bootsrap and strengthen my abilities on using React, JavaScript, HTML, CSS with Sass, and Git and Github.
                                            </div>
                                            <a href="https://joeln7-bootstrap.netlify.app" className="btn btn-portfolio justify-content-center text-center mt-3">
                                                Go to web page!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 port-pos">
                                        <div className="carousel-indicators indicators-position ">
                                            <svg  data-target="#carouselExampleIndicators" data-slide-to="0" aria-current="true" aria-label="Slide 1"
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="active icon-size bi bi-dice-1" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="1.5"/>
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                            </svg>

                                            <svg data-target="#carouselExampleIndicators" data-slide-to="1" aria-current="true" aria-label="Slide 2"
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dice-1 ml-3 icon-size" viewBox="0 0 16 16">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                        </div>
                                        <img src="https://res.cloudinary.com/joeln7/image/upload/v1634762785/Portfolio/Screen_Shot_2021-10-20_at_4.45.50_PM_h3niou.png" className="d-block portfolio_img" alt="Foodies"/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
                                        <div className='d-block justify-content-center align-items-center text-center txt-white'>
                                            <h2 className='text-center'>
                                                Food Web Page
                                            </h2>
                                            <div className="portfolio-text">
                                                Applied knowledge in React to build a practice web page for a food company and fetch with an API to show some results of food.
                                            </div>
                                            <a href="https://foodiesjoeln9.netlify.app/" className="btn btn-portfolio justify-content-center text-center mt-3">
                                                Go to web page!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center mt-3'>Future Projects And Learning Ideas</h2>
                    <div className="mini-p">
                        <div class="car col-lg-4 col-md-4 col-sm-12" >
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1634923503/Portfolio/artificial-intelligence-4389372_1920_pvjhut.jpg" className=" card-img-top" alt="Conference app"/>
                            <div className="card-body txt-white">
                                <h5 className="card-title"> Blog page about technology </h5>
                                <p className="card-text"> Make a web page to make my own blog and talk about weekly updates in technology and new start ups. </p>
                            </div>
                        </div>
                        <div className="car col-lg-4 col-md-4 col-sm-12" >
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1634933434/Portfolio/mobile-development_gpfmge.jpg" className="card-img-top" alt="Conference app"/>
                            <div className="card-body txt-white">
                                <h5 className="card-title"> Learn mobile development </h5>
                                <p className=" card-text">Learn native and mutliplatform mobile development to use different frameworks and libraries to make great mobile apps.</p>
                            </div>
                        </div>
                        <div className="car col-lg-4 col-md-4 col-sm-12" >
                            <img src="https://res.cloudinary.com/joeln7/image/upload/v1634933096/Portfolio/hexagon-6574882_640_wfznak.png" className="card-img-top" alt="Conference app"/>
                            <div className="card-body txt-white">
                                <h5 className="card-title"> Moran Pharmacy web page</h5>
                                <p className="card-text">Learn more about databases structures, syntaxis, and tools to do a web page for one of my relatives that started a pharmacy. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
