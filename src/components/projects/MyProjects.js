import React from "react";
import { FaGithub } from "react-icons/fa";
import "./styles/myprojects.css";

const MyProjects = ({ project, index }) => {
	console.log(project);
	return (
		<div className="projects-sectioninner">
			<div className="heading1">
				<p>{project.title}</p>
				<span className="git">
					<a href={project.link} target="blank"><FaGithub /></a>
				</span>
			</div>
      <p className="para">{project.description}</p>
      <div className="tech">
      <span>Tech Stack</span>
      <div className="techstack">
      {project.techStack.map((item, index) => {
          return (
            <span>{item}</span>
          )
        })}
      </div>
      
       
      </div>
		</div>
	);
};

export default MyProjects;
