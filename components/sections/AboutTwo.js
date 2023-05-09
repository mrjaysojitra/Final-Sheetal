import React from 'react';

const AboutTwo = () => {
    return (
        <>
            <section className="about-section-two">
                <div className="anim-icons">
                    <span className="icon icon-e wow zoomIn" />
                    <span className="icon icon-dots-2 bounce-x" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Knowledge Is The Way To Success</h2>
                                    <div className="text">Shital is a Leading Training and Placement Institute that offers Practical-based Professional Training Programs in the field of Web Development, Advanced Excel, Digital Marketing and Software Testing with job placement.</div>
                                </div>
                                <div className="row">
                                    <div className="about-block col-lg-6 col-md-6 col-sm-6 wow fadeInUp">
                                        <div className="inner-box">
                                            <span className="info-text">Best off Speaking & IELTS program</span>
                                            <div className="info-box">
                                                <div className="thumb"><img src="images/resource/avatar-1.jpg" title="Shital" /></div>
                                                <h5 className="name">Hardik</h5>
                                                <span className="designation">TEACHER</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-block style-two col-lg-6 col-md-6 col-sm-6 wow fadeInRight">
                                        <div className="inner-box">
                                            <span className="info-text">Best off Full Stack-Web program</span>
                                            <div className="info-box">
                                                <div className="thumb"><img src="images/resource/avatar-2.jpg" title="Shital" /></div>
                                                <h5 className="name">Neha</h5>
                                                <span className="designation">TEACHER</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="icons-box">
                                    <span className="icon icon-dotted-map" />
                                    <span className="icon icon-dotted-line" />
                                    <span className="icon icon-papper-plan" />
                                </div>
                                <figure className="image overlay-anim wow fadeInUp"><img src="images/resource/about-3.jpg" title="Shital" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTwo;