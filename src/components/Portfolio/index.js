import React, {useState } from 'react';
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Boundless Bites',
            description: 'a website to help research food',
            link: "https://bryanjeremysmith.github.io/BoundlessBites/",
            repo: "https://bryanjeremysmith.github.io/BoundlessBites/",
            imgSrc: '../../assets/images/boundlessbites.png'
        },
        {
            name: 'Password Generator',
            description: 'a password generator',
            link: "https://bryanjeremysmith.github.io/Module3Challenge/",
            repo: "https://bryanjeremysmith.github.io/Module3Challenge/",
            imgSrc: '../../assets/images/password-generator.png'
        },
        {
            name: 'Coding Quiz',
            description: 'a coding quiz',
            link: "https://bryanjeremysmith.github.io/Module4Challenge/",
            repo: "https://bryanjeremysmith.github.io/Module4Challenge/",
            imgSrc: '../../assets/images/coding-quiz.gif'
        },
        {
            name: 'Work Day Scheduler',
            description: 'a work day scheduler',
            link: "https://bryanjeremysmith.github.io/Module5Challenge/",
            repo: "https://bryanjeremysmith.github.io/Module5Challenge/",
            imgSrc: '../../assets/images/work-day-scheduler.gif'
        },
        {
            name: 'Weather Dashboard',
            description: 'a weather dashboard',
            link: "https://bryanjeremysmith.github.io/weather-dashboard/",
            repo: "https://bryanjeremysmith.github.io/weather-dashboard/",
            imgSrc: '../../assets/images/weather-dashboard.png'
        },
    ])

    //TODOBJS: more projects
    return (
        <section id='work' class='mycard'>
            <div class="card-conainer">
                <header>Work</header>
            </div>
            <div class='container'>
                <div class="row">
                    <div class="col">
                        <Project projects={projects[0]}></Project>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;