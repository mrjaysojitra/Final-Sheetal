import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className={`navigation ${extraClassName}`}>
            <li className="current"><Link href="/">Home</Link>
                {/* <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/index-2">Home Layout 2</Link></li>
                    <li className="dropdown"><Link href="/">Header Styles</Link>
                    <ul>
                        <li><Link href="/">Header Style 1</Link></li>
                        <li><Link href="/index-2">Header Style 2</Link></li>
                    </ul>
                    </li>
                </ul> */}
            </li>
            <li><Link href="/page-about">About</Link></li>
            <li className="dropdown"><Link href="/page-about">Blog</Link>
                <ul>
                <li><Link href="/page-team">Team</Link></li>
                    <li><Link href="/page-testimonial">Testimonial</Link></li>
                    {/* <li><Link href="/page-pricing">Pricing</Link></li> */}
                    <li><Link href="/news-grid">All Events</Link></li>
                    <li><Link href="/page-faq">FAQ</Link></li>
                   
                </ul>
            </li>
            <li className="dropdown"><Link href="/page-courses">Courses</Link>
                <ul>
                    {/* <li><Link href="/page-courses">Courses Grid</Link></li> */}
                    {/* <li><Link href="/page-course-details">Cours Details</Link></li> */}
                    <li><Link  href="/page-course-details?course=spoken">Spoken English</Link></li>
                    <li><Link  href="/page-course-details?course=ielts">IELTS</Link></li>
                    <li><Link  href="/page-course-details?course=ccc">CCC / CPT</Link></li>
                    <li><Link  href="/page-course-details?course=tally">Tally</Link></li>
                    <li><Link  href="/page-course-details?course=webdes">Web Design</Link></li>
                    <li><Link  href="/page-course-details?course=webded">Web Development</Link></li>
                    <li><Link  href="/page-course-details?course=webfull">Full Stack Development</Link></li>
                    <li><Link  href="/page-course-details?course=py">Python</Link></li>
                    <li><Link  href="/page-course-details?course=digi">Digital Marketing</Link></li>
                    <li><Link  href="/page-course-details?course=adv">Advanced Excel</Link></li>
                </ul>
            </li>
          
            <li><Link href="/page-contact">Contact</Link></li>
            <li><Link href="/page-login">Login</Link></li>
        </ul>
    );
};

export default NavLinks;