import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/download.png'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="footer-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <div className="left-container text-center">
                                    <img src={logo} style={{ width: '80px', height: '80px' }} alt="" srcset="" />
                                    <h1 className='fw-bold text-warning mt-2'>Castle Health Care</h1>


                                    <p className="mt-4 ">
                                        <small>
                                            Exceptional Care Close to You
                                        </small>
                                    </p>

                                    <p className="mt-5">
                                        <small>Nowrin © . All rights reserved.</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 col-12">
                                <div className="footer-menu-container text-center">
                                    <ul>
                                        <li className="footer-menu">Home</li>
                                        <li className="footer-menu">About us</li>
                                        <li className="footer-menu">Services</li>
                                        <li className="footer-menu">Contact us</li>
                                        <li className="footer-menu">Blogs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="right-footer-container">
                                    <h1 className='d-flex align-items-center justify-content-center mt-4'>Contact Us</h1>

                                    <div className="phone d-flex align-items-center justify-content-center mt-4">

                                        <div>
                                            <h5>+1 7 986 45 677 345</h5>
                                        </div>
                                    </div>
                                    <div className="map d-flex align-items-center justify-content-center">

                                        <div>
                                            <p>
                                                Beside Gulshan Lake
                                                <br /> Dhaka, Bangladesh
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <hr />
                        <h4>Follow Us on:</h4>
                        <div className="icons-container d-flex text-center justify-content-center">
                            <div className="icon">
                                <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div className="icon">
                                <i class="fab fa-youtube"></i>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;