import React from "react";

const Work = ({ data }) => {
	console.log(data);
	return (
		<div className="workel">
			<div className="image">
				<a href="https://www.jspiders.com/" target="blank">
					{" "}
					<img src={data.img} alt="" />
				</a>
			</div>

			<div className="info">
				<span className="companyname">{data.company}</span>
				<span>{data.date}</span>
				<span>{data.role}</span>
			</div>
		</div>
	);
};

export default Work;
