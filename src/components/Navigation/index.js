import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className={currentTab === "about me" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about me")}>About Me</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact me" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact me")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
