import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image zoom-two" style={{ backgroundImage: 'url(./images/background/4.jpg)' }} />
                {/*Widgets Section*/}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><img src="images/logo-2.png" title="Shital" /></Link></div>
                                    <div className="text">Get 50 + best<br/> courses from us</div>
                                    <ul className="social-icon-two">
                                        <li><Link href="https://twitter.com/ShitalAcademy"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="https://www.facebook.com/sheetal.bhavnagar"><i className="fab fa-facebook" /></Link></li>
                                        <li><Link href="https://www.instagram.com/sheetalacademybhv/?igshid=NTc4MTIwNjQ2YQ%3D%3D"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Explore</h4>
                                    <ul className="user-links">
                                        <li><Link href="/page-gallery">Gallery</Link></li>
                                        <li><Link href="#">News &amp; Articles</Link></li>
                                        <li><Link href="/page-faq">FAQ's</Link></li>
                                        <li><Link href="/page-login">Sign In/Registration</Link></li>
                                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                                        <li><Link href="/page-contact">Contacts</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="user-links">
                                        <li><Link href="/page-about">About</Link></li>
                                        <li><Link href="/page-courses">Courses</Link></li>
                                        <li><Link href="#">Instructor</Link></li>
                                        <li><Link href="/news-grid">Events</Link></li>
                                        <li><Link href="/page-team">Team</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/*Footer Column*/}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h4 className="widget-title">Contact</h4>
                                    <div className="widget-content">
                                        <ul className="contact-info">
                                            <li><i className="fa fa-phone-square" /> <Link href="tel:+919328090700">+91 93280 90700</Link></li>
                                            <li><i className="fa fa-envelope" /> <Link href="mailto:shitalacademyit@gmail.com">shitalacademyit@gmail.com</Link></li>
                                            <li><i className="fa fa-map-marker-alt" />2212/C, HILL Drive, next to Sun Haemony Flat Opp. Solanki Restaurant, Sanskarmandal 364002    </li>
                                        </ul>
                                        <div className="subscribe-form">
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                    <button type="button" className="theme-btn btn-style-one"><i className="fa fa-long-arrow-alt-right" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                    <hr/>
                    <h4 class="card-title text-center py-2">OUR BRANCH</h4>
                    <div className='col-lg-12'>
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">BHAVNAGAR - 1</h5>
                                    <p class="card-text">2212/C, Hill Drive, Next to Skyline Square, Sanskarmandal to Talaja Road.<br/>
                                   <small class="text-muted">+91 93280 90700</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div class="card text-center">
                            <div class="card-body">
                                    <h5 class="card-title">BHAVNAGAR - 2</h5>
                                    <p class="card-text">3rd Floor, Hardik Complex, Above Suraj Sofa, Beside Hotel White Rose, Shashtrinagar.<br/>
                                   <small class="text-muted">+91 93280 90700</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">VADODARA</h5>
                                    <p class="card-text">210/C, Manubhai Tower, Opp.<br/>  M. S. University, Sayajiganj.<br/>
                                    <small class="text-muted">+91 63588 21400</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">AHMEDABAD</h5>
                                    <p class="card-text">4th Floor, Ganesh Plaza, <br/> Anjali Cross Road, Opp. Swaminarayan Avenue, Vasana.<br/>
                                    <small class="text-muted">+91 63588 21600</small></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">ANAND</h5>
                                    <p class="card-text">1st Floor, P. M. Square, Near Big Bazar, Vidhyanagar Main Road.<br/>
                                   <small class="text-muted">+91 70415 59800</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright 2023 by  <Link href="/">shitalacademy.com</Link></div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    );
};

export default Footer;