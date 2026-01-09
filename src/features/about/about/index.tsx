import React from "react";
import { Link } from "react-router-dom";
import { Career } from "../career";
import { Resume } from "../resume";
import { LayoutUI } from "components/layout";
import styles from "./styles.module.scss"

const AboutUI = () => {
	return (
		<LayoutUI>
			<Link to="/" className={styles.logo}>
				Kelvin
			</Link>
			<div className={styles.navigation}>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/certifications">Certifications</Link>
				<Link to="/contact">Contact</Link>
			</div>
			<div className={styles.about}>
			<h2 className={styles.about__intro}>
			Hi There! I am a two-time intern at Goldman Sachs. My first internship was for Site 
			Reliability Engineering, and my second was as a Fullstack Engineer. In between, 
			I worked as a QA Tester and Mobile Engineer for Greensol, a startup in Lagos. 
			Overall, I am a software engineer leaning towards frontend, but I have delved 
			into backend as well. Fuelled by a passion for designing compelling products, 
			I have a deep desire to excel and continuously improve in my work.
			</h2>
			<Resume />
			<Career />
			</div>
		</LayoutUI>
	);
};

export { AboutUI };
