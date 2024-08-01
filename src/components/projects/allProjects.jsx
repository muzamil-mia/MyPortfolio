import React from "react";
import Skill from "./Skill";
import { skills } from "../../data/user";
import { useInView } from "react-intersection-observer";

import "./styles/allProjects.css";

const SkillsSection = () => {

	const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

	
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