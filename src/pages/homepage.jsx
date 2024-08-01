import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineWork } from "react-icons/md";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { work } from "../data/myProjects";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import SkillsSection from "../components/projects/allProjects";
import MyProjects from "../components/projects/MyProjects";
import Work from "../components/projects/Work";

import INFO from "../data/user";
import SEO from "../data/seo";
import { myProjects } from "../data/myProjects";
import { useInView } from "react-intersection-observer";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { ref, inView } = useInView({
		triggerOnce: true, 
		threshold: 0.1,
	});

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<span className="my-name">Hi, I'am </span>
									<div id="text-drop">
										<div className="m drop">M</div>
										<div className="u drop">u</div>
										<div className="z drop">z</div>
										<div className="a drop">a</div>
										<div className="m1 drop">m</div>
										<div className="i drop">i</div>
										<div className="l drop">l</div>
										<div className="space"></div>
										<div className="h drop">H</div>
										<div className="u1 drop">u</div>
										<div className="s drop">s</div>
										<div className="s1 drop">s</div>
										<div className="a1 drop">a</div>
										<div className="i1 drop">i</div>
										<div className="n drop">n</div>
									</div>
								</div>

								<div className="subtitle homepage-subtitle animate__animated animate__backInLeft custom-animation">
									{INFO.homepage.description}
								</div>
							</div>
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper animate__animated animate__backInRight custom-animation">
										<img
											src="myimage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="resume">
							<a
								href="https://drive.google.com/file/d/15dl3JF6Ov_vhQPyeIyfEBUp240QMHPJ3/view?usp=drive_link"
								target="blank"
							>
								My Resume
							</a>
						</div>
						<div className="homepage-socials">
							<a
								href={INFO.socials.twitter}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faTwitter}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						{/* <div className={`about-socials animate__animated ${inView ? 'animate__backInRight' : ''}`} ref={ref}>
									<Socials />
								</div> */}
						<div className="">
							<SkillsSection />
						</div>

						<div className="homepage-projects">
							<div className="homepage-projects-container">
								<div className={`projects-section  animate__animated ${inView ? 'animate__backInLeft .custom-animation' : ''}`} ref={ref}>
									<p className="projectheading">Projects</p>
									<div className="myprojects">
										{myProjects.map((item, index) => {
											return (
												<MyProjects
													project={item}
													key={index}
												/>
											);
										})}
									</div>
								</div>

								<div className={`work-section animate__animated ${inView ? 'animate__backInRight .custom-animation' : ''}`} ref={ref}>
									<div className="">
										<p className="workheading">
											Work Experience
										</p>
										<span className="work-icon">
											<MdOutlineWork />
										</span>
									</div>
									<div className="worksection-work">
										{work.map((item, index) => {
											return (
												<Work data={item} key={index} />
											);
										})}
									</div>
								</div>
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
