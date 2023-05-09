import Link from 'next/link';
import React from 'react';

const NewsOne = () => {
    const data = [
        {
            img: "news-1.jpg",
            title: "Republic Day celebration was done by wearing a traditional dress,a patriotic feeling for being an Proud Indian",
            comment: 10,
            date: "26",
            month: "Jan"
        },
        {
            img: "news-2.jpg",
            title: "A Womens Day celebration done enthusiastically by a staff members having a get-together",
            comment: 10,
            date: "08",
            month: "Mar"
        },
        {
            img: "news-3.jpg",
            title: "Group Discussions and team activities done right to enhance the communication skills amongst students",
            comment: 10,
            date: "09",
            month: "Jul"
        }
    ];
    return (
        <>
            <section className="news-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">directly from blog</span>
                        <h2>Our latest Celebration &amp; Event's posts</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src={`images/resource/${item.img}`} title="Shital" /></figure>
                                        <span className="date"><b>{item.date}</b> {item.month}</span>
                                    </div>
                                    <div className="content-box">
                                        <div className="content">
                                            <ul className="post-info">
                                                <li><i className="fa fa-user" /> by Admin</li>
                                                <li><i className="fa fa-comments" /> {item.comment} Comments</li>
                                            </ul>
                                            <h4 className="title">{item.title}</h4>
                                            {/* <Link href="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link> */}
                                        </div>
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

export default NewsOne;