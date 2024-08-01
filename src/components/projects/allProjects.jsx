import React, { useEffect } from "react";


import Skill from "./Skill";
import Project from "./project";

import INFO from "../../data/user";
import { skills } from "../../data/user";
import { useInView } from "react-intersection-observer";

import "./styles/allProjects.css";

const SkillsSection = () => {

	const { ref, inView } = useInView({
    triggerOnce: true, // Triggers animation only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

	// <div className={`animate_animated ${inView ? 'animate_backInRight' : ''}`} ref={ref}>
	// 						<SkillsSection />
	// 					</div>
	return (
		<div className={`all-skills-container animate_animated ${inView ? 'animate_backInRight' : ''}`} ref={ref}>
		<span className="skills-title">Skills</span>
			{skills.map((skill, index) => (
				<div className="allskills" key={index}>
				<Skill index = {index} skill = {skills}/>
				</div>
			))}
		</div>
	);
};

export default SkillsSection;
{/* <Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/> */}