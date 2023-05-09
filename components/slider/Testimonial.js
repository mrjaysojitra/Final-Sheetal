import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    const data = [
        {
            img: "testi-thumb-1.jpg",
            title: "Avani Parikh",
            desig: "Student",
            content: "I've been searching for years for so many academy for spoken english. I tried academically approved so many books but found them confusing...This one is the best academy I have ever found👍🏻"
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Princy Bhayani",
            desig: "Student",
            content: "It was a good experience overall. All the concept were cleared and the material  will help me to practice at home .Best academy for IElTS .. it helped me to pass my exam with flying colours"
        },
        {
            img: "testi-thumb-1.jpg",
            title: "Jaydip Hadiya",
            desig: "Market Manager",
            content: "A good institute to learn many bassic grammar and also to improve one's communication skills and fluency in English. A very good institute that I had ever been and experienced. Satisfied with the staff and facilities."
        }
    ];


    return (
        <>
            <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    1199: {
                        slidesPerView: 2,
                    },
                    1350: {
                        slidesPerView: 2,
                    },
                }}
                className=""
            >
                {data.map((item, i) => (
                    <SwiperSlide className="testimonial-block">
                        <div className="inner-box">
                            <div className="content-box">
                                <figure className="thumb"><img src={`images/resource/${item.img}`} title="Shital" /></figure>
                                <div className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>
                                <div className="text">{item.content}</div>
                                <div className="info-box">
                                    <span className="icon-quote" />
                                    <h4 className="name">{item.title}</h4>
                                    <span className="designation">{item.desig}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Testimonial;

