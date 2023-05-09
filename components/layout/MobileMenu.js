import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({handleRemove}) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">

                <li class="current"><Link href="" onClick={handleRemove}>Home</Link>
                    {/* <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                        <li><Link href="/">Home Layout 1</Link></li>
                        <li><Link href="/index-2">Home Layout 2</Link></li>
                        <li class="dropdown"><Link href="/#">Header Styles</Link>
                            <ul className={isSubActive.key === 17 ? "d-block" : "d-none"}>
                                <li><Link href="">Header Style 1</Link></li>
                                <li><Link href="/index-2">Header Style 2</Link></li>
                            </ul>
                            <div className={isSubActive.key === 17 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(17)}><i class="fa fa-angle-down"></i></div></li>
                    </ul> */}
                    {/* <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i class="fa fa-angle-down"></i></div> */}
                </li>
                <li><Link href="/page-about" onClick={handleRemove}>About</Link></li>
                <li class="dropdown"><Link href="/#">Blog</Link>
                    <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                        
                        <li><Link href="/page-team" onClick={handleRemove}>Team</Link></li>
                        <li><Link href="/page-testimonial" onClick={handleRemove}>Testimonial</Link></li>
                        <li><Link href="/news-grid" onClick={handleRemove}>All Events</Link></li>
                        {/* <li><Link href="/page-pricing">Pricing</Link></li> */}
                        <li><Link href="/page-faq" onClick={handleRemove}>FAQ</Link></li>
                        {/* <li><Link href="/page-404">Page 404</Link></li> */}
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i class="fa fa-angle-down"></i></div></li>
                <li class="dropdown"><Link href="/#">Courses</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                    <li><Link  href="/page-course-details?course=spoken" onClick={handleRemove}>Spoken English</Link></li>
                    <li><Link  href="/page-course-details?course=ielts" onClick={handleRemove}>IELTS</Link></li>
                    <li><Link  href="/page-course-details?course=ccc" onClick={handleRemove}>CCC / CPT</Link></li>
                    <li><Link  href="/page-course-details?course=tally" onClick={handleRemove}>Tally</Link></li>
                    <li><Link  href="/page-course-details?course=webdes" onClick={handleRemove}>Web Design</Link></li>
                    <li><Link  href="/page-course-details?course=webded" onClick={handleRemove}>Web Development</Link></li>
                    <li><Link  href="/page-course-details?course=webfull" onClick={handleRemove}>Full Stack Development</Link></li>
                    <li><Link  href="/page-course-details?course=py" onClick={handleRemove}>Python</Link></li>
                    <li><Link  href="/page-course-details?course=digi" onClick={handleRemove}>Digital Marketing</Link></li>
                    <li><Link  href="/page-course-details?course=adv" onClick={handleRemove}>Advanced Excel</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i class="fa fa-angle-down"></i></div></li>
                {/* <li class="dropdown"><Link href="/#">Events</Link>
                    <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                        <li><Link href="/news-grid">All Events</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i class="fa fa-angle-down"></i></div></li> */}
                <li><Link href="/page-contact" onClick={handleRemove}>Contact</Link></li>
                <li><Link href="/page-login" onClick={handleRemove}>Login</Link></li>
            </ul>


        </>
    );
};

export default MobileMenu;