import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
	const [pages] = useState([
		{name: "about me"},
		{name: "portfolio"},
		{name: "contact me"},
		{name: "resume"}
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	const choosePage = () => {
		switch (currentPage) {
			case "about me":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact me":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div>
				<Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
			</div>
			<div>
				<main>{choosePage()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
