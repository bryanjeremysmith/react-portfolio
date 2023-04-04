import React from "react";

function Resume() {
	return (
		<section>
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
