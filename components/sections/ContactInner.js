import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const ContactInner = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: ""
    });
    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()
        axios.post("https://desert-sand-reindeer-wrap.cyclic.app/api/onlineinquiry", data)
            .then(r => {
                console.log(r.data);

            })
        setdata({
            name: "",
            email: "",
            subject: "",
            phone: "",
            message: ""
        })

    }

    return (
        <>
            <section className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>

                            <form id="contact_form" name="contact_form" className="" action="#" method="post" onSubmit={mySubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="name" className="form-control" type="text" onChange={myHandler} placeholder="Enter Name" value={data.name} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="email" className="form-control required email" type="email" onChange={myHandler} placeholder="Enter Email" value={data.email} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="subject" className="form-control required" type="text" onChange={myHandler} placeholder="Enter Subject" value={data.subject} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="phone" className="form-control" type="number" onChange={myHandler} placeholder="Enter Phone" value={data.phone} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="message" className="form-control required" rows="7" onChange={myHandler} placeholder="Enter Message" value={data.message}></textarea>
                                </div>
                                <div className="mb-3">
                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="theme-btn btn-style-one me-3 mt-3" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                                    <button type="reset" className="theme-btn btn-style-one bg-theme-color5 mt-3"><span className="btn-title">Reset</span></button>
                                </div>
                            </form>

                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right mt-md-50">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch with us</h2>
                                    <div className="text">With intelligence, integrity, and creativity, Shital Academy is dedicated to enhancing performance. To learn how our learning solutions can help you as a person, group, or organization, get in touch with us right away. </div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon bg-theme-color2">
                                            <span className="lnr-icon-phone-plus"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Have any question?</h6>
                                            <a href="tel:9328090700"><span>Bhavnagar - </span>9328090700/9714147700</a><br />
                                            <a href="tel:6358821400"><span>Vadodara - </span>6358821400</a><br />
                                            <a href="tel:6358821600"><span>Ahmedabad - </span>6358821600</a><br />
                                            <a href="tel:7041559800"><span>Anand - </span>7041559800</a>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-envelope1"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Write email</h6>
                                            <a href="mailto:shitalacademyit@gmail.com">shitalacademyit@gmail.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-location"></span>
                                        </div>
                                        <div className="text">
                                            <h6>Visit anytime</h6>
                                            <span>2212/C, HILL Drive,</span> <br/>
                                            <span> next to Sun Haemony Flat Opp.</span> <br/>
                                            <span>Restaurant, Sanskarmandal</span> 
                                           
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>


                <div className="row ">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
                        <h5 class="card-title text-center  map-texts">BHAVNAGAR</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14821.537126724548!2d72.10661085541993!3d21.765383499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f51dff095295b%3A0x886dc1ae0f6c2adc!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1681906594484!5m2!1sen!2sin" width="100%" height="250"  allowfullscreen=""></iframe>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
                        <h5 class="card-title text-center  map-texts">VADODARA</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.192293420503!2d73.183684!3d22.3085662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfaab30e4ebf%3A0x35121d8accb26ce8!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1680779233060!5m2!1sen!2sin" width="100%" height="250" allowfullscreen=""></iframe>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">

                        <h5 class="card-title text-center  map-texts">AHMEDABAD</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58761.091923384854!2d72.51159399947387!3d23.00289900760511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8520c2b959ad%3A0xef4b47622ea96967!2sSheetal%20Academy!5e0!3m2!1sen!2sin!4v1681906322795!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" ></iframe>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-5">
                        <h5 class="card-title  text-center map-texts">ANAND</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7369.454985143516!2d72.93249167770995!3d22.55187869999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fb71ba93a09%3A0xa75c55d84e925f8!2sSheetal%20Academy%20-%20An%20Institute%20of%20English%20Speaking!5e0!3m2!1sen!2sin!4v1681906713350!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" ></iframe>
                    </div>



                </div>
            </section>




        </>
    );
};

export default ContactInner;