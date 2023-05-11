import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';
import { useRouter } from 'next/router'
import FeatureOne from './FeatureOne';



const Courseone = ({ alternate }) => {
	const router = useRouter()
	const { course } = router.query

	const data = [
		{
			id: "spoken",
			img: "course-details-1.jpg",
			title: "Spoken English",
			content: "Learn Spoken English Course at “SHITAL ACADEMY” to develop the skills which are essential for your success. Because English speaking has become the need of every Business Sectors. People with good speaking skills are respected and admired everywhere.",
			content4: "As we all know that Learning English needs patience, but at the same time its not a rocket science. To solve this dilemma we have designed our Spoken English Course to teach English through a very interactive platform. Our English Course includes, thoroughly researched Spoken English Material in the form of 10 Books. To enrich the experience of learning English in an easier way further we promote “Online Spoken English” through Skype at our institute. We connect the students to our 200+ centers all over India through Skype/Google Meet/Zoom and enable them to learn Spoken English in the most effective manner devised by any Spoken English Classes in PAN INDIA yet.",
			li1: "• Basic to Smart English Book 1st & Revision (ABCD to Advance Level)",
			li2: "• Vocabulary Practice Books - Book 3/4 & 7 (15,000 + Words/Verbs)",
			li3: "• 10,000 + Sentences Practice",
			li4: "• Idioms / Proverbs & Phrases",
			li5: "• Animated Vocabulary",
			li6: "• Newspaper & Magazine Clippings",
			li7: "• GD / Debate / Stage / Speaking / Current Affairs Conversation / Interview Skills",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Smart English",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},

		{
			id: "ielts",
			img: "course-details-ie.jpg",
			title: "IELTS",
			content: "IELTS assessed all of your English skills - Reading, Writing, Listening and Speaking, and is designed to reflect how you will use English at study, at work, and at play, in your new life abroad. The IELTS test is developed by some of the world's leading experts in language assessment. It has an excellent international reputation, and is accepted by over 9,000 organisations worldwide, including schools, universities, employers, immigration authorities and professional bodies. IELTS is the most widely accepted English language test that uses a one-on-one speaking test to assess your English communication skills.",
			content4: "This means that you are assessed by having a real-life conversation with a real person. This is the most effective and natural way of testing your English conversation skills. You can take IELTS Academic or IELTS General Training - depending on the organisation you are applying to and your plans for the future. Whatever your reason for taking IELTS, make the most of your language Skills.",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi /",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access",
			titlemain: "IELTS",
			title6: "Reading",
			img2: "images/resource/course-2.jpg",
			title7: "Writing",
			img3: "images/resource/course-1.jpg",
			title8: "Listening",
			img4: "images/resource/listening.jpg",
			title9: "Speaking",
			img5: "images/resource/Speaking.jpg",
			divclass: "latest-course mb-30",
			row1: "latest-course-item"

		},
		{
			id: "ccc",
			img: "course-details-cc.gif",
			title: "CCC / CPT",
			content: "This course is designed to aim at imparting a basic level appreciation programme for the common man. » After completing the course the incumbent is able to the use the computer for basic purposes of preparing his personnel/business letters, viewing information on internet (the web), sending mails, preparing his business presentations, playing games etc.",
			content4: "This allows a common man or housewife to be also a part of computer users list. This would also aid the PC penetration program. This helps the small business communities, housewives to maintain their small account using the computer and enjoy in the world of Information Technology. This course is more practical oriented.",
			li1: "• Computer Fundamentals",
			li2: "• Notepad / Word pad | Paint",
			li3: "• M. S. Word, Excel & Power Point",
			li4: "• Typing (Gujarati | English)",
			li5: "• Resume Making | E-mail",
			li6: "• Smart Presentation",
			li7: "• Internet Skills",
			li8: "• Printing / Uses of Smart Devices",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},
		{
			id: "tally",
			img: "course-details-tally.jpg",
			title: "",
			content4: "",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			li1: "• Accounting / Company Creation",
			li2: "• Ledger Creation / Voucher",
			li3: "• Inventory Creation | GST | TDS / S.Tax",
			li4: "• Interest Calculation* / Payroll*",
			li5: "• Bill of Material / Order Processing'",
			li6: "• Multi Currency* / Budget & Control*",
			li7: "• Export Sales*",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English ",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},
		{
			id: "webdes",
			img: "course-details-web.gif",
			title: "Web Design",
			content: "Are you in quest of a career as a web designer? Shital Academy provides comprehensive web designing course in India which is curate to teach all the essentials of web designing in an easy-to-understand manner. What stands us apart from the rest is that our comprehensive training program includes HTML5, CSS3, Bootstrap4, JavaScript, jQuery, Figma, and other tools which are generally lacking in other web design training programs.",
			content4: "In our website design training program, you’ll be introduced to all the fundamental aspects of web designing with hands-on training and live projects Using :",
			content6: "• HTML5         • CSS          • Javascript",
			content7: "• Angular JS    • Bootstrap    • JQuery",
			content5: "After completion of our web design training, you will be competent in:",
			li1: "• Developing mobile responsive websites",
			li2: "• Identifying and solving responsive design errors",
			li3: "• Designing creative UIs, websites, etc.",
			li4: "• Gathering and understanding requirement of clients",
			li5: "• Converting PSD designs into HTML websites",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English ",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},
		{
			id: "webded",
			img: "course-details-dev.gif",
			title: "Web Development",
			content: "Web development tools helps the developer to test and debug the websites. Now a days the web development tool comes with the web browsers as add-ons. All web browsers have built-in tools for this purpose.Thsese tools allows the web developer to use HTML, CSS and JavaScript etc.. These are accessed by hovering over an item on a web page and selecting the “Inspect Element” from the context menu.",
			content4: "HTML and the DOM HTML and DOM viewer allows you to see the DOM as it was rendered. It also allows to make changes to HTML and DOM and see the changes reflected in the page after the change is made.In our Web development training in India, we focus on technical skill development and imparting practical knowledge with our real-world IT projects. We ensure to build a very strong foundation for you to survive a top-notch full stack developer in the market. For enrollment, give us a call at 63588 21400.",
			content6: "• C# / C++    • SQL Server   • Asp.Net Core",
			content7: "• React JS    • PHP          • Laravel",
			h4:  "• Course Benefits:",
			li1: "• Course materials include student guide, hands-on lab manual and USB flash drive for examples and lab work",
			li2: "• Experienced faculties having industry working experience",
			li3: "• Students Will receive a certificate of completion at the end of course",
			li4: "• Periodic revision batches",
			li5: "• There are no registration fees or cancellation fees",
			title2: "",
			content2: "",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},
		{
			id: "webfull",
			img: "course-details-full.png",
			title: "Full Stack Development",
			content: "Shital Academy has designed the most comprehensive full stack development training, which includes responsive front-end development by using technologies like Angular, Bootstrap, Node.js, CSS and Jquery with an express framework in the backend by using JavaScript as a programming language.",
			content8:  "• Learn React & Angular ",
			content9:  "• MEAN Stack Developer ",
			content10: "• MERN Stack Developer  ",
			content11: "• Project Deployment",
			content12: "• Learn GIT",
			content13: "• Database Security",
			content4: "In our full stack development training, we focus on technical skill development and imparting practical knowledge with our real-world IT projects. We ensure to build a very strong foundation for you to survive a top-notch full stack developer in the market. For enrollment, give us a call at 63588 21400.",
			content6: "• C# / C++    • HTML        • CSS         • Bootstrap     • Javascript",
			content7: "• JQuery      • React JS    • Node.js     • Angular JS    • SQL Server",
			h4:  "Course Benefits:",
			li1: "• Course materials include student guide, hands-on lab manual and USB flash drive for examples and lab work",
			li2: "• Experienced faculties having industry working experience",
			li3: "• Students receive a certificate of completion at the end of course",
			li4: "• Periodic revision batches",
			li5: "• There are no registration fees or cancellation fees",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"

		},
		{
			id: "py",
			img: "course-details-py.png",
			title: "Python",
			content: "In Our Python Course, we train the students from basic to advanced concepts in a real-time environment. Our job ready python training curriculum includes a wide range of python programming features, advanced python concepts, python scripting, test automation, python for Data Analysis, Machine Learning, Web Development, Internet of Thongs & Big Data applications. If you are willing to get exposure to industry based real-time projects, our training is an ideal way to achieve that.",
			content4: "Our Python training in Vadodara is a hands-on training program where we focus on individual and encourage them to develop their own application using real-time environment. Having the faculty of industry experts will help you learn Python language from basic to advanced as per industry norms. The communicative environment at Shital Academy will help you understand and participate in the sessions which would reluctantly help you understand the language in a better way. With the increasing demand of Python professionals, you can grab this opportunity to be an expert by registering yourself with us.Have any queries regarding our python training curriculum, speak to our course advisor on 63588 21400.",
			h4: "Course Benefits:",
			li1: "• Course materials include student guide, hands-on lab manual and USB flash drive for examples and lab work",
			li2: "• Experienced faculties having industry working experience",
			li3: "• Students receive a certificate of completion at the end of course",
			li4: "• Periodic revision batches",
			li5: "• There are no registration fees or cancellation fees",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic",
			itemskil2: "Advanced",
			itemlan: "Hin / Eng / ",
			itemlan2: "Guj",
			itemlan3: "Life",
			itemlan4: "Time Access"
		},
		{
			id: "digi",
			img: "course-details-digi.gif",
			title: "Digital Marketing",
			content: "Shital Academy is a Vadodara based IT training and placement centre. Shital Academy offers the best Digital Marketing Course in Vadodara with placement. We hire working Digital Marketing Experts as our trainers to prepare our students. Every module of the course will be taught and trained by the actively working digital marketing professionals for a better understanding of our students. With increased internet users, we are witnessing a booming rise in Digital Marketing. Many companies and recruiters are looking for expert digital marketers. Shital Institute’s unique training and project-based approach will prepare you for a digital marketing job with expertise in all digital marketing domains.",
			content4: "This is one of the best digital marketing courses not just in Vadodara but in India. With this course, you will get in-depth knowledge and understanding of the 9 most essential digital marketing domains. you will also be introduced to the industry’s best digital marketing tools. Our emphasis to include real work projects and virtual simulations for acquiring domain experience will give our students an edge over competitors. Not only this but you will also learn to analyse data manage digital campaigns and drive revenues for different businesses.",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"
		},
		{
			id: "adv",
			img: "course-details-ad.png",
			title: "Advance Excel",
			content: "Are you an excel beginner or intermediate user and keen to master it? You are at the right place. We at Shital Academy can help you use the programme with ease and confidence with our advance excel training in Vadodara. Being one of the most reputed and trusted institutes in Vadodara, we offer placement-focused, real-time advance excel training in Vadodara which can help you get placements in best companies across the country.",
			content4: "From diagramming devices, macro programming, rotate tables to highlighting figuring, you’ll learn everything related to Excel. In our advanced excel training in India, you will learn all excel functions and formulas and how to create and format automate complex tasks and pivot tables with Macros. You will learn with Advanced MS Excel position preparing and ongoing projects.",
			h4:  "Course Benefits:",
			li1: "• Course materials include student guide, hands-on lab manual and USB flash drive for examples and lab work",
			li2: "• Experienced faculties having industry working experience",
			li3: "• Students receive a certificate of completion at the end of course",
			li4: "• Periodic revision batches",
			li5: "• There are no registration fees or cancellation fees",
			title2: "",
			content2: " ",
			title3: "Online degree programs",
			content3: "",
			course1: "26 courses",
			title4: "Non-degree programs",
			course2: "38 courses",
			title5: "Off campus programs",
			course3: "13 courses",
			item1: "Durations: ",
			item2: "Lectures:",
			item3: "Students:",
			item4: "Skill Level:",
			item5: "Language:",
			itemtime: "10 hours",
			itemlec: "15",
			itemstu: "Max 50",
			itemskil: "Basic To",
			itemskil2: "Advanced",
			itemlan: "Hindi/English",
			itemlan2: "Gujarati",
			itemlan3: "Life",
			itemlan4: "Time Access"
			

		},
	];



	return (
		<>
			<div>
				{data.filter(y => y.id == course).map((item, i) => (
					<section className="course-details">
						<div className="container">
							<div className="row flex-xl-row-reverse">
								<div className="col-xl-12 col-lg-12">
									<div className="courses-details__content">

										<img style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',borderRadius:'10px' }} src={`images/resource/${item.img}`} alt="" />
										
										<section className="features-section2 ">
											<div className="auto-container">
												<div className="row">
													{/* Feature Block */}
													<div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
														<div className="inner-box ">
															<i className="icon flaticon-online-learning" />
															<h5 className="title">{item.itemskil}<br /> {item.itemskil2}</h5>
														</div>
													</div>
													{/* Feature Block */}
													<div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
														<div className="inner-box ">
															<i className="icon flaticon-elearning" />
															<h5 className="title">{item.itemlan}<br /> {item.itemlan2} </h5>
														</div>
													</div>
													{/* Feature Block */}
													<div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="800ms">
														<div className="inner-box ">
															<i className="icon flaticon-web-2" />
															<h5 className="title">{item.itemlan3}<br />{item.itemlan4}</h5>
														</div>
													</div>
													{/* Feature Block */}
													<div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="1200ms">
														<div className="inner-box ">
															<i className="icon flaticon-users" />
															<h5 className="title">Experienced <br />Members</h5>
														</div>
													</div>
												</div>
											</div>
										</section>

										<h2 className="mt-4">{item.title}</h2>
										<p>{item.content}</p>
										<p><b>{item.content8}</b></p>
										<p><b>{item.content9}</b></p>
										<p><b>{item.content10}</b></p>
										<p><b>{item.content11}</b></p>
										<p><b>{item.content12}</b></p>
										<p><b>{item.content13}</b></p>
										
										<p>{item.content4}</p>
										<pre><b>{item.content6}</b></pre>
										<pre><b>{item.content7}</b></pre>
										<p>{item.content5}</p>
										
										<h4>{item.h4}</h4>
										<ul>
											<li>{item.li1}</li>
											<li>{item.li2}</li>
											<li>{item.li3}</li>
											<li>{item.li4}</li>
											<li>{item.li5}</li>
											<li>{item.li6}</li>
											<li>{item.li7}</li>
											<li>{item.li8}</li>
										</ul>
										<div className="content mt-40">
											<div className="text">
												<h3>{item.title2}</h3>
												<p>{item.content2}</p>
											</div>
											<div className="row mt-30">

												<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
													<div className="inner-box">
														<div className="icon-box">
															<i className="icon flaticon-elearning"></i>
														</div>
														<h4 className="title">{item.title3}</h4>
														<span className="sub-title">{item.course1}</span>
													</div>
												</div>

												<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
													<div className="inner-box">
														<div className="icon-box">
															<i className="icon flaticon-study-1"></i>
														</div>
														<h4 className="title">{item.title4}</h4>
														<span className="sub-title">{item.course2}</span>
													</div>
												</div>

												<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
													<div className="inner-box">
														<div className="icon-box">
															<i className="icon flaticon-study"></i>
														</div>
														<h4 className="title">{item.title5}</h4>
														<span className="sub-title">{item.course3}</span>
													</div>
												</div>
											</div>
										</div>


										{/* <div className="mt-25">
									<h3>Frequently Asked Question</h3>
									<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

									<Accordion/>
								</div> */}



									</div>
								</div>

								{/* <div className="col-xl-4 col-lg-4 mt-md-50">
									<div className="course-sidebar">

									

										<div className={item.divclass}>
									<h4 className="latest-course-title mb-30">{item.titlemain}</h4>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src={item.img2} alt="" />
										</div>
										<div className="latest-course-content">
											<h5>{item.title6}</h5>
										</div>
									</div>
									<div className={item.row1}>
										<div className="latest-course-img">
											<img src={item.img3} alt="" />
										</div>
										<div className="latest-course-content">
											<h5>{item.title7}</h5>
										</div>
									</div>
									<div className={item.row1}>
										<div className="latest-course-img">
											<img src={item.img3} alt="" />
										</div>
										<div className="latest-course-content">
											<h5>{item.title8}</h5>
										</div>
									</div>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src={item.img4} alt="" />
										</div>
										<div className="latest-course-content">
											<h5>{item.title9}</h5>
										</div>
									</div>
								</div>

									</div>
								</div> */}

							</div>

						</div>

					</section>
				))}
			</div>


		</>
	);
};

export default Courseone;