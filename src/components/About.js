import { Link } from "react-router-dom";
import Career from "./about/Career";
import Resume from "./about/Resume";
import { motion } from "framer-motion";
const About = () => {
	return (
		<motion.div
			className="about"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", duration: 1, bounce: 0.3 }}
		>
			<div className="about-more-btn">
				<Link to="/projects" className="btn">
					Projects
				</Link>
				<Link to="/contact" className="btn">
					Contact
				</Link>
			</div>
			<h2 className="about-intro">
				Hi There! Fuelled by a passion for designing compelling products, I have
				a deep desire to excel and continuously improve in my work. Learn more
				about my journey below.
			</h2>
			<Resume />
			<Career />
			<div className="about-more-btn">
				<Link to="/" className="btn">
					Home
				</Link>
			</div>
		</motion.div>
	);
};

export default About;
