import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({
	projectId,
	projectImage,
	projectLink,
	projectName,
	projectDescription,
	githubLink,
	projectTools,
	projectClicked,
	setProjectClicked,
}) => {
	AOS.init();
	const [isClicked, setIsClicked] = useState(projectClicked === projectId);
	return (
		<section
			className="project-item"
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<>
				<div className="project-align">
					<h1>{projectName}</h1>
					<div className="arrange">
						<div className="project-link-div">
							<a
								href={projectLink}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								<div className="image-container">
									<img src={projectImage} alt="unavailable" />
									<div className="overlay">To see the actual project</div>
								</div>
							</a>
						</div>
						<div className="project-description column">
							<p>
								{projectDescription}
								<button
									className="tools-btn"
									onClick={() => {
										setProjectClicked(projectId);
										setIsClicked(!isClicked);
									}}
								>
									{projectClicked === projectId ? "Show Less" : "Tools Used"}
								</button>
							</p>
							{isClicked ? (
								<ul>
									{projectTools.map((tool) => (
										<li key={projectTools.indexOf(tool)}>{tool}</li>
									))}
								</ul>
							) : (
								""
							)}
							<button className="project-btn">
								<a
									href={githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="github-link"
								>
									Go to GitHub's Repo
								</a>
							</button>
						</div>
					</div>
				</div>
			</>
		</section>
	);
};

export default ProjectItem;
