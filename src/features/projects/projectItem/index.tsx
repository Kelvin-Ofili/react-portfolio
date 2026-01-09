import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";

interface ProjectItemProps {
	projectId: number;
	projectImage: string;
	projectLink: string;
	projectName: string;
	projectDescription: string;
	githubLink: string;
	projectTools: string[];
	projectClicked?: number;
	setProjectClicked: (id: number) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
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
	const isClicked = projectClicked === projectId;
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
										setProjectClicked(projectClicked === projectId ? -1 : projectId);
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
							{githubLink && (
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
							)}
						</div>
					</div>
				</div>
			</>
		</section>
	);
};

export { ProjectItem };
