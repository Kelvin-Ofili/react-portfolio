import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import { ProjectItem } from "../projectItem";
import { LayoutUI } from "components/layout";
import styles from "./styles.module.scss";

const ProjectUI = ({ projectClicked, setProjectClicked }) => {
	return (
		<LayoutUI>
			<Link to="/" className={styles.logo}>
				Kelvin
			</Link>
			<div className={styles.navigation}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/certifications">Certifications</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<div className={styles.projects}>
				<h1 className={styles.heading}>My Projects</h1>
			<div className={styles.projectContainer}>
				{projects.map((project) => (
					<ProjectItem
						key={project.id}
						projectId={project.id}
						projectName={project.name}
						projectDescription={project.description}
						projectTools={project.tools}
						projectLink={project.projectLink}
						githubLink={project.githubLink}
						projectImage={project.image}
						projectClicked={projectClicked}
						setProjectClicked={setProjectClicked}
					/>
				))}
			</div>
			</div>
		</LayoutUI>
	);
};

export { ProjectUI };
