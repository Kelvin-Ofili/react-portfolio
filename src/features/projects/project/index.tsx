import { Link } from "react-router-dom";
import { projects } from "./projectsData";
import { ProjectItem } from "../projectItem";
import styles from "./styles.module.scss"
const ProjectUI = ({ projectClicked, setProjectClicked }) => {
	return (
		<div className={styles.projects}>
			<div className={`${styles.projects__btn} ${styles.pmb1}`}>
				<Link to="/" className={`btn`}>
					Home
				</Link>
				<h1 className={styles.heading}>My Projects</h1>
				<Link to="/about" className={`btn`}>
					About
				</Link>
			</div>

			<div className={`${styles.projectContainer} ${styles.column}`}>
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
			<div className={`${styles.projects__btn} ${styles.pmb2}`}>
				<Link to="/certifications" className={`btn`}>
					Certificates
				</Link>
				<Link to="/contact" className={`btn`}>
					Contact
				</Link>
			</div>
		</div>
	);
};

export { ProjectUI };
