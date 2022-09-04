import { Link } from "react-router-dom";
import projects from "./projects/ProjectsData";
import ProjectItem from "./projects/ProjectItem";
import { motion } from "framer-motion";

const Projects = ({ projectClicked, setProjectClicked }) => {
	return (
		<motion.div
			className="projects column"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", duration: 1, bounce: 0.3 }}
		>
			<div className="project-more-btn pmb1">
				<Link to="/contact" className="btn">
					Contact
				</Link>
				<h1 className="heading">My Projects</h1>
				<Link to="/" className="btn">
					Home
				</Link>
			</div>

			<div className="project-container column">
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
						projectTap={project.tap}
						projectClicked={projectClicked}
						setProjectClicked={setProjectClicked}
					/>
				))}
			</div>
			<div className="project-more-btn pmb2">
				<Link to="/profile" className="btn">
					Profile
				</Link>
				<Link to="/about" className="btn">
					About
				</Link>
			</div>
		</motion.div>
	);
};

export default Projects;
