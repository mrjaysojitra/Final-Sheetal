import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const SignupOne = () => {
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
            phone: "",
           
        })

    }

    return (
        <>
            <section className="signup-section">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-paper-clip bounce-x" />
                    </div>
                    <div className="outer-box" style={{ backgroundImage: 'url(./images/background/3.jpg)' }}>
                        <span className="float-icon icon-pencil-line wow fadeInUp" />
                        <div className="row">
                            {/* Title Column */}
                            <div className="title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="sec-title light">
                                    <h2>Sign up for <br /> free trial lesson</h2>
                                    <div className="text">Get Best Discount for all Courses</div>
                                </div>
                            </div>
                            {/* Form Column */}
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Sign Form */}
                                    <div className="signup-form wow fadeInLeft">
                                        {/*Contact Form*/}
                                        <form onSubmit={mySubmit} method="post" action="get" id="contact-form">
                                            <div className="form-group">
                                                <input type="text" name="name" onChange={myHandler} value={data.name} placeholder="Your name" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="email" onChange={myHandler}  value={data.email} placeholder="Email address" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="number" name="phone" onChange={myHandler}  value={data.phone} placeholder="Your Contact Number" required />
                                            </div>
                                            {/* <div className="form-group">
                                                <select className="custom-select">
                                                    <option value>Select course</option>
                                                    <option value="UI/UX Designing">UI/UX Designing</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form">Send Request</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupOne;