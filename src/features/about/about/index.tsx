import React from "react";
import { Link } from "react-router-dom";
import { Career } from "../career";
import { Resume } from "../resume";
import styles from "./styles.module.scss"

const AboutUI = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__btn}>
				<Link to="/" className={`btn`}>
					Home
				</Link>
				<Link to="/certifications" className={`btn`}>
					Certificates
				</Link>
			</div>
			<h2 className={styles.about__intro}>
				Hi There! Fuelled by a passion for designing compelling products, I have
				a deep desire to excel and continuously improve in my work. Learn more
				about my journey below.
			</h2>
			<Resume />
			<Career />
			<div className={styles.about__btn}>
				<Link to="/contact" className={`btn`}>
					Contact
				</Link>
				<Link to="/projects" className={`btn`}>
					Projects
				</Link>
			</div>
		</div>
	);
};

export { AboutUI };
