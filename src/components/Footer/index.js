import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/bryanjeremysmith"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/github-logo.png")}
						alt="Github logo"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/bryanjeremysmith/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/linkedin-logo.png")}
						alt="LinkedIn logo"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/bryanjeremysmith"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/twitter-logo.png")}
						alt="Twitter logo"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;