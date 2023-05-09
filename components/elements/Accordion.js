import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
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
    return (
        <>


            <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Do you give personal attention to each student?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Every child's handwriting problems are different and so are the requirements. Our experts analyze and identify individual flaws in one’s writing and tutor to repair accordingly. It therefore becomes mandatory for the trainer to give personal attention to every child.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>What will be the Classes Timing ?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Classes timing will be from 8 am to 8 pm. Student can attend class as many times he / she wants to attend. There is Personal teaching for Grammar and Batch system for Speaking practice in Shital Academy.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>What if the improvement is not seen in 7 days?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">We have been working on handwriting improvement for over 1.5 decades; hence, it is most unlikely to happen. Nevertheless, if it does happen in a rare case, our experts will happily devote 3-4 days extra with the student.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>Are there any courses for working professionals?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Yes! Shital Academy understands the importance of updating your skills & knowledge. Shital Academy offers a range of short courses for graduates and working professionals. Click here to know more.</div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Accordion;