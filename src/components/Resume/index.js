import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Resume.pdf")} download>
					<h4>My Resume</h4>
				</a>
			</div>
		</section>
	);
}

export default Resume;