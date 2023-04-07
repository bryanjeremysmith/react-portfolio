import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Movies2Watch',
            description: 'a website to help research movies',
            repo: "https://github.com/bryanjeremysmith/Movies2Watch",
			deploy: "https://bryanjeremysmith.github.io/Movies2Watch/",
			image: 'movies2watch.png',
		},
		{
			name: 'Boundless Bites',
            description: 'a website to help research food',
            repo: "https://github.com/bryanjeremysmith/BoundlessBites",
			deploy: "https://github.com/bryanjeremysmith/BoundlessBites",
			image: 'boundlessbites.png',
		},
		{
            name: 'Password Generator',
            description: 'a password generator',
            repo: "https://github.com/bryanjeremysmith/Module3Challenge/",
			deploy: "https://bryanjeremysmith.github.io/Module3Challenge/",
            image: 'password-generator.png',
		},
		{
            name: 'Coding Quiz',
            description: 'a coding quiz',
            repo: "https://github.com/bryanjeremysmith/Module4Challenge/",
			deploy: "https://bryanjeremysmith.github.io/Module4Challenge/",
            image: 'coding-quiz.gif',
        },
		{
			name: 'Work Day Scheduler',
            description: 'a work day scheduler',
            repo: "https://github.com/bryanjeremysmith/Module5Challenge/",
			deploy: "https://bryanjeremysmith.github.io/Module5Challenge/",
            image: 'work-day-scheduler.gif',
		},
		{
			name: 'Weather Dashboard',
            description: 'a weather dashboard',
            repo: "https://github.com/bryanjeremysmith/weather-dashboard/",
			deploy: "https://bryanjeremysmith.github.io/weather-dashboard/",
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
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
