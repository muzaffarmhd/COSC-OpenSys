import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import animationData from "../assets/lottie/Animation - 1707063924246.json";
import Lottie from "react-lottie";
import github from "../assets/images/4695723.png";
import cascade from "../assets/images/download.png";
import Faqs from "../components/FAQs/Faqs";
import { events } from "../components/constants/data";
import { aboutdata } from "../components/constants/data";
import { homepage } from "../components/constants/data";

const sectionVariant = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const event1 = events.find((item) => item.id === "event-1");
	const event2 = events.find((item) => item.id === "event-2");
	const event3 = events.find((item) => item.id === "event-3");
	const event4 = events.find((item) => item.id === "event-4");
	const aboutpage = aboutdata.find((item) => item.id === "about-1");
	const homedata = homepage.find((item) => item.id === "home");

	const [ref1, inView1] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [ref2, inView2] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [ref3, inView3] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [ref4, inView4] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [refNeo1, inViewNeo1] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [refNeo2, inViewNeo2] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [refNeo3, inViewNeo3] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [refNeo4, inViewNeo4] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<Helmet title={"Home"}>
			<motion.section
				ref={ref1}
				id="home"
				className="hero__section"
				variants={sectionVariant}
				initial="hidden"
				animate={inView1 ? "visible" : "hidden"}
			>
				<Container>
					<Row>
						<Col lg="6" md="6">
							<div className="hero_content">
								<div className="h21">
									<h2>{homedata.title}</h2>
								</div>
								<div className="h22 mt-0">
									<h2 className="gradvpy">
										{homedata.tagline}
									</h2>
								</div>

								<p>{homedata.description}</p>

								<motion.div className="buy__button">
									<a href="#events">{homedata.status}</a>
								</motion.div>
							</div>
						</Col>

						<Col lg="6" md="6">
							<div className="lottie">
								<Lottie options={lottieOptions} />
							</div>
						</Col>
					</Row>
				</Container>
			</motion.section>
			<motion.section
				ref={ref2}
				id="about"
				className="about"
				variants={sectionVariant}
				initial="hidden"
				animate={inView2 ? "visible" : "hidden"}
			>
				<div className="abouts">
					<div className="h21 h2bold">
						<h2>About the Event</h2>
					</div>
					<div className="aboutdescription">
						<Col lg="6">
							<p>{aboutpage.description}</p>
							<div className="display-flex">
								<i className="ri-team-fill"></i>
								<h5>Free for everyone to participate</h5>
							</div>
							<div className="display-flex">
								<i className="ri-trophy-fill"></i>
								<h5>Win exciting prizes</h5>
							</div>
						</Col>
						<Col className="mt-40" lg="6">
							<div className="display-flex where_when">
								<i className="ri-time-fill"></i>
								<h5>When?</h5>
							</div>
							<div className="pr40">
								<p>{aboutpage.date}</p>
							</div>
							<div className="display-flex where_when">
								<i className="ri-map-pin-fill"></i>
								<h5>Where?</h5>
							</div>
							<div className="pr40">
								<p>{aboutpage.location}</p>
							</div>
						</Col>
					</div>
				</div>
			</motion.section>

			<motion.section
				ref={ref3}
				id="events"
				className="events"
				variants={sectionVariant}
				initial="hidden"
				animate={inView3 ? "visible" : "hidden"}
			>
				<h1 className="h1events">Events</h1>
				<motion.div
					className="neomorphism"
					ref={refNeo1}
					variants={sectionVariant}
					animate={inViewNeo1 ? "visible" : "hidden"}
				>
					<div className="text-white" style={{ width: "100%" }}>
						<div id="gitimagedesktop">
							<img
								className="github"
								style={{ height: "auto" }}
								src={github}
								alt=""
							/>
						</div>
						<div
							className="text-3xl m-6 "
							style={{ lineHeight: "24px" }}
						>
							<h1 className="font-semibold pb-4">
								{event1.title}
							</h1>
							<p>{event1.description}</p>
							<div className="display-flex icon-text">
								<i className="ri-team-fill"></i>
								<p>Participation: {event1.participation}</p>
							</div>
							<div className="display-flex icon-text">
								<i className="ri-calendar-todo-fill"></i>
								<p>Date: {event1.date}</p>
							</div>
							<motion.div
								id={event1.id}
								className="buy__button mt-40"
							>
								<a
									href={`${event1.link}`}
									style={{ lineHeight: "24px" }}
									className="text-[16px]"
								>
									{event1.status}
								</a>
							</motion.div>
						</div>
					</div>
					<div id="gitimage">
						<img className="github" src={github} alt="" />
					</div>
				</motion.div>

				<motion.div
					className="neomorphism"
					ref={refNeo2}
					variants={sectionVariant}
					animate={inViewNeo2 ? "visible" : "hidden"}
				>
					<div>
						<img className="cascade" src={cascade} alt="" />
					</div>
					<div
						style={{ lineHeight: "24px" }}
						className="text-3xl m-6"
					>
						<h1 className="font-semibold pb-4">{event2.title}</h1>
						<p>{event2.description}</p>
						<div className="display-flex icon-text py-2">
							<i className="ri-user-3-fill"></i>
							<p>Participation: {event2.participation}</p>
						</div>
						<div className="display-flex icon-text">
							<i className="ri-calendar-todo-fill"></i>
							<p>Date: {event2.date}</p>
						</div>
						<div className="display-flex icon-text py-2">
							<i className="ri-link"></i>
							<p>
								Reference Link:{" "}
								<a
									className="border-spacing-2 border-b-2 border-b-blue-500"
									href="https://cssbattle.dev/"
								>
									CSS Battle
								</a>
							</p>
						</div>
						<motion.div
							id={event2.id}
							className="buy__button mt-40 mb-40 "
						>
							<a href={`${event2.link}`} className="text-[16px]">
								{event2.status}
							</a>
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					className="neomorphism"
					ref={refNeo3}
					variants={sectionVariant}
					animate={inViewNeo3 ? "visible" : "hidden"}
				>
					<div className="text-white" style={{ width: "100%" }}>
						<div id="gitimagedesktop">
							<img
								className="github"
								style={{ height: "auto" }}
								src={github}
								alt=""
							/>
						</div>
						<div
							className="text-3xl m-6 "
							style={{ lineHeight: "24px" }}
						>
							<h1 className="font-semibold pb-4">
								{event3.title}
							</h1>
							<p>{event3.description}</p>
							<div className="display-flex icon-text">
								<i className="ri-team-fill"></i>
								<p>Participation: {event3.participation}</p>
							</div>
							<div className="display-flex icon-text">
								<i className="ri-calendar-todo-fill"></i>
								<p>Date: {event3.date}</p>
							</div>
							<motion.div
								id={event3.id}
								className="buy__button mt-40"
							>
								<a
									href={`${event3.link}`}
									style={{ lineHeight: "24px" }}
									className="text-[16px]"
								>
									{event3.status}
								</a>
							</motion.div>
						</div>
					</div>
					<div id="gitimage">
						<img className="github" src={github} alt="" />
					</div>
				</motion.div>
				<motion.div
					className="neomorphism"
					ref={refNeo4}
					variants={sectionVariant}
					animate={inViewNeo4 ? "visible" : "hidden"}
				>
					<div>
						<img className="cascade" src={cascade} alt="" />
					</div>
					<div
						style={{ lineHeight: "24px" }}
						className="text-3xl m-6"
					>
						<h1 className="font-semibold pb-4">{event4.title}</h1>
						<p>{event4.description}</p>
						<div className="display-flex icon-text py-2">
							<i className="ri-user-3-fill"></i>
							<p>Participation: {event4.participation}</p>
						</div>
						<div className="display-flex icon-text">
							<i className="ri-calendar-todo-fill"></i>
							<p>Date: {event4.date}</p>
						</div>
						<div className="display-flex icon-text py-2">
							<i className="ri-link"></i>
							<p>
								Reference Link:{" "}
								<a
									className="border-spacing-2 border-b-2 border-b-blue-500"
									href="https://cssbattle.dev/"
								>
									CSS Battle
								</a>
							</p>
						</div>
						<motion.div
							id={event4.id}
							className="buy__button mt-40 mb-40 "
						>
							<a href={`${event4.link}`} className="text-[16px]">
								{event4.status}
							</a>
						</motion.div>
					</div>
				</motion.div>
			</motion.section>

			<motion.section
				ref={ref4}
				id="faqs"
				className="FAQs"
				variants={sectionVariant}
				initial="hidden"
				animate={inView4 ? "visible" : "hidden"}
			>
				<div className="flex justify-center p-4">
					<Faqs />
				</div>
			</motion.section>
		</Helmet>
	);
};

export default Home;
