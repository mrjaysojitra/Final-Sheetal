import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const PopularCourses = ({ alternate }) => {

    // const router =useRouter()
    // const {course} = router.query
    
    const data = [
        {
            id: "spoken",
            img: "course-1.jpg",
            title: "Spoken English",
            lesson: 75,
            students: "20,000 +",
            rating:  "(6 / 8)",
            duration: "3 Months"
        },
        {
            id: "ielts",
            img: "course-2.jpg",
            title: "IELTS",
            lesson: 75,
            students: "1000 +",
            rating:  "(7 / 8)",
            duration: "3 Months"
        },
        {
            id: "ccc",
            img: "course-3.jpg",
            title: "CCC / CPT",
            lesson: 50,
            students: "800 +",
            rating:  "(6 / 8)",
            duration: "2 Months"
        },
        {
            id: "tally",
            img: "course-4.jpg",
            title: "Tally",
            lesson: "1200 +",
            students: 25,
            rating:  "(7 / 8)",
            duration: "3 Months"
        },
        {
            id: "webdes",
            img: "course-5.jpg",
            title: "Web Design",
            lesson: 100,
            students: "200 +",
            rating:  "(6.5 / 8)",
            duration: "4 Months"
        },
        {
            id: "webded",
            img: "course-6.jpg",
            title: "Web Development",
            lesson: 150,
            students: "150 +",
            rating:  "(7 / 8)",
            duration: "6 Months"
        },
        {
            id: "webfull",
            img: "course-7.jpg",
            title: "Full Stack Development",
            lesson: 200,
            students: "100 +",
            rating:  "(7 / 8)",
            duration: "8 Months"
        },
        {
            
			id: "py",
            img: "course-8.jpg",
            title: "Python",
            lesson: 100,
            students: "200 +",
            rating:  "(6 / 8)",
            duration: "4 Months"
        },
        {
            id: "digi",
            img: "course-9.jpg",
            title: "Digital Marketing",
            lesson: 75,
            students: "100 +",
            rating:  "(6 / 8)",
            duration: "3 Months"
        },
        {
            
			id: "adv",
            img: "course-10.jpg",
            title: "Advanced Excel",
            lesson: 50,
            students: "300 +",
            rating:  "(6 / 8)",
            duration: "2 Months"
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".owl-prev-course-1",
                    nextEl: ".owl-next-course-1",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        // spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        // spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 4,
                        // spaceBetween: 30,
                    },
                }}
                className=""
            >
                {data.map((item, i) => (
                    <SwiperSlide>
                        <div className="course-block">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <Link href={`/page-course-details?course=${item.id}`}>
                                            <img src={`/images/resource/${item.img}`} title="Shital" />
                                        </Link>
                                    </figure>
                                  
                                    <div className="value">Advanced</div>
                                </div>
                                <div className="content-box">
                                    <ul className="course-info">
                                        <li><i className="fa fa-book" /> {item.lesson} Lessons</li>
                                        <li><i className="fa fa-users" /> {item.students} Students</li>
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
                    </SwiperSlide>
                ))}
            </Swiper>

            <div class="owl-nav">
                <div class="owl-prev owl-prev-course-1">
                    <span class="fa fa-long-arrow-alt-left"></span>
                </div>
                <div class="owl-next owl-next-course-1">
                    <span class="fa fa-long-arrow-alt-right"></span>
                </div>
            </div>

        </>
    );
};

export default PopularCourses;

