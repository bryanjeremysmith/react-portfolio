import React from "react";

function Resume() {
	return (
		<section>
			<div>
				<h4>I am proficient in</h4>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React</li>
					<li>Git</li> 
					<li>MongoDB</li>
					<li>Express</li>
					<li>REST</li>
					<li>NodeJS</li>
				</ol>
			</div>
			<div>
				<a href={require("../../assets/files/Resume.pdf")} download>
					PDF of my Resume
				</a>
			</div>
		</section>
	);
}

export default Resume;
