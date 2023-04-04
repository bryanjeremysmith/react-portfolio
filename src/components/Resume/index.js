import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div>
				<a href="https://www.linkedin.com/in/bryanjeremysmith/">
					LinkedIn Profile
				</a>
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
