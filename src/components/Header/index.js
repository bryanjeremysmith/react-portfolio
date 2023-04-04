import React from "react";
import Navigation from "../Navigation";

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header>
			<div>
				<h2>BJ Smith's React Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;
