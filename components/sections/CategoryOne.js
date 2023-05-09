import Link from 'next/link';
import React from 'react';

const CategoryOne = () => {
    return (
        <>
            <section className="categories-section-current">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-group-1 bounce-y" />
                        <span className="icon icon-group-2 bounce-y" />
                    </div>
                    <div className="sec-title text-center">
                        <span className="sub-title">Checkout our categories</span>
                        <h2>Services We Provide</h2>
                    </div>
                    <div className="row justify-content-center">
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-student-2" />
                                </div>
                                <h6 className="title">Handwriting <br />Improvement</h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-stationary" />
                                </div>
                                <h6 className="title">Immigration</h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-online-learning" />
                                </div>
                                <h6 className="title">Become A<br />Doctor</h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-study" />
                                </div>
                                <h6 className="title">Skill Development <br />Programs</h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-pie-chart" />
                                </div>
                                <h6 className="title">Personal <br />Development</h6>
                            </div>
                        </div>
                        {/* Category Block */}
                        <div className="category-block-current col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-web-2" />
                                </div>
                                <h6 className="title">Computer <br />Science</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CategoryOne;