import React from 'react';

function About() {
	return (
		<section>
			<div className="center">
				<img
					src={require('../../assets/images/profile.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					My name is BJ Smith. I am a student at a Web Development Bootcamp, and this page is used to demonstrate my work.
                    I live in Beaverton, Oregon with my wife and two kids.
				</p>
			</div>
		</section>
	);
}

export default About;