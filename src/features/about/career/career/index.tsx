import React from "react";
import styles from "./styles.module.scss"

const Career = () => {
	return (
		<div className={styles.career}>
			<div className={styles.career__summary}>
				<h2>My Career So Far</h2>
				<p>
					<b>
						I've had the privilege of interning twice at Goldman Sachs - first as a Site Reliability Engineering intern and then as a Fullstack Engineer. Between these internships, I contributed to Greensol, a Lagos-based startup, where I worked as both a QA Tester and Mobile Engineer. I was also a participant in the seventh cohort of ALX-Africa, a rigorous bootcamp aimed at building future Software Engineers. Throughout my journey, I've written bash and C scripts, conducted comprehensive unit testing, and implemented code changes based on feedback received.
					</b>
				</p>
			</div>

			<div className={styles.career__languages}>
				<h5>I am experienced with these languages, frameworks and tools;</h5>
				<ul className={styles.career__languages__languageList}>
					<li className={styles.career__languages__languageList__item}>={">"} JavaScript</li>
					<li className={styles.career__languages__languageList__item}>={">"} ReactJS</li>
					<li className={styles.career__languages__languageList__item}>={">"} C</li>
					<li className={styles.career__languages__languageList__item}>={">"} Git</li>
					<li className={styles.career__languages__languageList__item}>={">"} CSS</li>
					<li className={styles.career__languages__languageList__item}>={">"} HTML</li>
					<li className={styles.career__languages__languageList__item}>={">"} Express API</li>
					<li className={styles.career__languages__languageList__item}>={">"} Python</li>
					<li className={styles.career__languages__languageList__item}>={">"} Figma</li>
					<li className={styles.career__languages__languageList__item}>={">"} NodeJs</li>
				</ul>
			</div>
		</div>
	);
};

export { Career };
