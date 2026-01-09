import React from "react";
import { Link } from "react-router-dom";
import { Career } from "../career";
import { Resume } from "../resume";
import { LayoutUI } from "components/layout";
import styles from "./styles.module.scss"

const AboutUI = () => {
	return (
		<LayoutUI>
			<div className={styles.about}>
			<h2 className={styles.about__intro}>
			Hi There! I am a software engineer passionate about building compelling products. 
			I lean towards frontend development but have experience across the full stack. 
			I'm driven by a deep desire to excel and continuously improve in my work.
			</h2>
			<Resume />
			<Career />
			</div>
		</LayoutUI>
	);
};

export { AboutUI };
