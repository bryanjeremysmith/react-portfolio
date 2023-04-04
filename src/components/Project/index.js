import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const repo = currentProject.repo;
	const deploy = currentProject.deploy;

	return (

		<Card style={{ width: "18rem" }}>
			<Card.Link href={deploy}>
				<Card.Img
					variant="top"
					src={require(`../../assets/images/${image}`)}
					className="card-image"
				/>
				<div className="center">
					<Card.Body>
						<Card.Title className="card-title">{name}</Card.Title>
						<Card.Text className="card-text">{description}</Card.Text>
						<Card.Link href={repo} target="_blank" className="card-link">
							{name} GitHub Repo
						</Card.Link>
						<br />
						<Card.Link href={deploy} target="_blank" className="card-link">
							{name} Live Deployment
						</Card.Link>
					</Card.Body>
				</div>
			</Card.Link>
		</Card>
	);
}

export default Project;
