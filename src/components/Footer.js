import React from 'react'

import './styles/Footer.scss'

function Footer() {
    return(
        <div className="bg-footer">
            <footer id='footer' className='pb-3 pt-3 '>
                <div className="container footer">
                    <div className="row text-center ">
                        <div className="col-3 col-md-3 ">
                            <a href='https://www.linkedin.com/in/joel-nataren/' className='text-light'>LinkedIn</a>
                        </div>
                        <div className="col-3 col-md-3 ">
                            <a href='https://www.facebook.com/joelcaleb.natarenmoran/' className='text-light'> Facebook </a>
                        </div>
                        <div className="col-3 col-md-3 ">
                            <a href='https://www.instagram.com/joelnataren9/' className='text-light'> Instagram</a>
                        </div>
                        <div className="col-3 col-md-3 ">
                            <a href='https://twitter.com/JoelNatarn1' className='text-light'> Twitter</a>
                        </div>
                    </div>
                    <div className='text-center mt-3'>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </footer>
        </div>
    )
}

export default Footer