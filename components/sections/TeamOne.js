import React from 'react';

const TeamOne = () => {
    const data = [
        {
            img: "team-1.jpg",
            title: "Mrs. Minal Shah",
            desig: "Founder"
        },
        {
            img: "team-2.jpg",
            title: "Mrs. Krima Gajera",
            desig: "Manager"
        },
        {
            img: "team-6.jpg",
            title: "Bharvi Bhatt",
            desig: "Center Head"
        },
        {
            img: "team-4.jpg",
            title: "Kasturi Kamdar",
            desig: "English Grammar head"
        },
    ];
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">qualified teachers</span>
                        <h2>Meet the teacher who <br />teaches you</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="#"><img src={`images/resource/${item.img}`} title="Shital" /></a></figure>
                                        {/* <span className="share-icon fa fa-share-alt" />
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                        </div> */}
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><a>{item.title}</a></h4>
                                        <span className="designation">{item.desig}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamOne;