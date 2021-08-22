import React from 'react';


import './footer.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return(
        <div className='footer-section'>
            <div className="container-fluid p-5 footer-background footer">
                <div className="row">
                    <div className="col-md-3">
                        <div className='logo'>
                            <span className='logo-word-1'>Exam</span> 
                            <span className='logo-word-2'>Bay</span>
                        </div>
                        <p className="logo-bottom-text fw-bold"> 
                            50 Raritan Center Pkwy,<br />Edison, Nj o8837, USA<br /><br />
                            +00 111 222 1234<br /><br />
                            info@ExamBay.com
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-heading"> About Us </h6>
                        <h6 className="footer-link text-white fs-6"><small>  About Us</small> </h6>
                        <h6 className="footer-link text-white fs-6"><small> Services </small></h6>
                        <h6 className="footer-link text-white fs-6"><small> Blogs</small> </h6>
                        <h6 className="footer-link text-white fs-6"><small> Contact Us</small> </h6>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-heading"> Terms & Condition </h6>
                        <h6 className="footer-link text-white fs-6"><small> Help </small></h6>
                        <h6 className="footer-link text-white fs-6"><small> Feature </small></h6>
                        <h6 className="footer-link text-white fs-6"><small> Customers </small> </h6>
                        <h6 className="footer-link text-white fs-6"><small> Feed Backs </small></h6>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-heading"> Privacy Policy </h6>
                        <h6 className="footer-link text-white fs-6"><small> Getting Started</small></h6>
                        <h6 className="footer-link text-white fs-6"><small> FAQs</small></h6>
                        <h6 className="footer-link text-white fs-6"><small> Status</small></h6>
                    </div>
                    
                </div>
                <hr className="footer-line text-white"/>
                <div className="row pi-draggable" draggable="true">
                    <div className="col-md-12 d-flex justify-content-center">
                        <h6 className="footer-text "><small>© 2021 Design by DeskZone . All Rights Reserved.</small></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;
