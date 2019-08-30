import React, { Component } from 'react';

const Footer = () => {
    return (
        <footer className="site-footer custom-border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="block-7">
                            <h3 className="footer-heading mb-4">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
                        </div>
                        <div className="block-7">
                            <form action="#" method="post">
                                <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                                <div className="form-group">
                                    <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                                    <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Quick Links</h3>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <ul className="list-unstyled">
                                    <li><a href="#">Sell online</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Shopping cart</a></li>
                                    <li><a href="#">Store builder</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <ul className="list-unstyled">
                                    <li><a href="#">Mobile commerce</a></li>
                                    <li><a href="#">Dropshipping</a></li>
                                    <li><a href="#">Website development</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <ul className="list-unstyled">
                                    <li><a href="#">Point of sale</a></li>
                                    <li><a href="#">Hardware</a></li>
                                    <li><a href="#">Software</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="block-5 mb-5">
                            <h3 className="footer-heading mb-4">Contact Info</h3>
                            <ul className="list-unstyled">
                                <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                                <li className="email">emailaddress@domain.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;