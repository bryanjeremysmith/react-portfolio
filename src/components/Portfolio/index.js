import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Boundless Bites',
            description: 'a website to help research food',
            github: "https://bryanjeremysmith.github.io/BoundlessBites/",
			image: 'boundlessbites.png',
		},
		{
            name: 'Password Generator',
            description: 'a password generator',
            github: "https://bryanjeremysmith.github.io/Module3Challenge/",
            image: 'password-generator.png',
		},
		{
            name: 'Coding Quiz',
            description: 'a coding quiz',
            github: "https://bryanjeremysmith.github.io/Module4Challenge/",
            image: 'coding-quiz.gif',
        },
		{
			name: 'Work Day Scheduler',
            description: 'a work day scheduler',
            github: "https://bryanjeremysmith.github.io/Module5Challenge/",
            image: 'work-day-scheduler.gif',
		},
		{
			name: 'Weather Dashboard',
            description: 'a weather dashboard',
            github: "https://bryanjeremysmith.github.io/weather-dashboard/",
            image: 'weather-dashboard.png',
		},
	];

	return (
		<section>
			<div>
				<ul className="card-container">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
