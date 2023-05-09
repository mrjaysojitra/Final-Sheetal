import Link from 'next/link';
import React from 'react';

const CourseTwo = () => {
    const data = [
        {
            img: "course-1.jpg",
            title: "Spoken English",
            price: 49.00,
            lesson: 75,
            students: "20,000 +",
            rating: "(6 / 8)",
            duration: "3 Months",
            route: "spoken"
        },
        {
            img: "course-2.jpg",
            title: "IELTS",
            price: 49.00,
            lesson: 75,
            students: "1000 +",
            rating: "(7 / 8)",
            duration: "3 Months",
            route: "ielts"

        },
        {
            img: "course-3.jpg",
            title: "CCC / CPT",
            price: 49.00,
            lesson: 50,
            students: "800 +",
            rating: "(6 / 8)",
            duration: "2 Months",
            route: "ccc"
        },
        {
            img: "course-4.jpg",
            title: "Tally",
            price: 49.00,
            lesson: 75,
            students: "1200 +",
            rating: "(7 / 8)",
            duration: "3 Months",
            route: "tally"
        },
        {
            img: "course-5.jpg",
            title: "Web Design",
            lesson: 100,
            students: "200 +",
            rating: "(6.5 / 8)",
            duration: "4 Months",
            route: 'webdes'
        },
        {
            img: "course-6.jpg",
            title: "Web Development",
            lesson: 150,
            students: "150 +",
            rating: "(7 / 8)",
            duration: "6 Months",
            route: 'webded'
        },
        {
            img: "course-7.jpg",
            title: "Full Stack Development",
            lesson: 200,
            students: "100 +",
            rating: "(7 / 8)",
            duration: "8 Months",
            route:'webfull'
        },
        {
            img: "course-8.jpg",
            title: "Python",
            lesson: 100,
            students: "200 +",
            rating: "(6 / 8)",
            duration: "4 Months",
            route:'py'
        },
        {
            img: "course-9.jpg",
            title: "Digital Marketing",
            lesson: 75,
            students: "100 +",
            rating: "(6 / 8)",
            duration: "3 Months",
            route:'digi'
        },
        {
            img: "course-10.jpg",
            title: "Advanced Excel",
            lesson: 50,
            students: "300 +",
            rating: "(6 / 8)",
            duration: "2 Months",
            route:'adv'
        }
    ];
    return (
        <>
            <section className="courses-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Course Block Two*/}
                        {data.map((item, i) => (
                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href={`/page-course-details?course=${item.route}`}>
                                                <img src={`/images/resource/${item.img}`} title="Shital" />
                                            </Link>
                                        </figure>

                                        <div className="value">Advanced</div>
                                    </div>
                                    <div className="content-box">
                                        <ul className="course-info">
                                            <li><i className="fa fa-book" /> {item.lesson} Lessons</li>
                                            <li><i className="fa fa-users" /> {item.students} Students</li>
                                            <li><i className="fa fa-clock" />{item.duration}</li>
                                        </ul>
                                        <h5 className="title"><Link href="/page-course-details">{item.title}</Link></h5>
                                        <div className="other-info">
                                            <div className="rating-box">
                                                <span className="text">{item.rating}</span>
                                                <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                            </div>
                                            <div className="duration"><i className="fa fa-clock" />{item.duration}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};

export default CourseTwo;