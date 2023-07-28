import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

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
			className={styles.projectItem}
			data-aos="fade-up"
			data-aos-duration="1000"
		>
			<>
				<div className={styles.projectItem__projectAlign}>
					<h1>{projectName}</h1>
					<div className={styles.projectItem__projectAlign__arrange}>
						<div
							className={
								styles.projectItem__projectAlign__arrange__projectLinkDiv
							}
						>
							<a
								href={projectLink}
								target="_blank"
								rel="noopener noreferrer"
								className={
									styles.projectItem__projectAlign__arrange__projectLinkDiv__projectLink
								}
							>
								<div
									className={
										styles.projectItem__projectAlign__arrange__projectLinkDiv__imageContainer
									}
								>
									<img src={projectImage} alt="unavailable" />
									<div
										className={
											styles.projectItem__projectAlign__arrange__projectLinkDiv__imageContainer__overlay
										}
									>
										To see the actual project
									</div>
								</div>
							</a>
						</div>
						<div
							className={`${styles.projectItem__projectAlign__arrange__projectDescription} ${styles.column}`}
						>
							<p>
								{projectDescription}
								<button
									className={
										styles.projectItem__projectAlign__arrange__projectDescription__toolsBtn
									}
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
							<button
								className={
									styles.projectItem__projectAlign__arrange__projectDescription__projectBtn
								}
							>
								<a
									href={githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className={
										styles.projectItem__projectAlign__arrange__projectDescription__projectBtn__githubLink
									}
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

export { ProjectItem };
