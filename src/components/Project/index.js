import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const link = currentProject.link;
	const repo = currentProject.repo;
	const imgSrc = currentProject.imgSrc;

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require({imgSrc})}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-name">{name}</Card.Title>
					<Card.Text className="card-description">{description}</Card.Text>
					<Card.Link href={link} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<Card.Link href={repo} target="_blank" className="card-repo">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;