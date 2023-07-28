import React from "react";
import styles from "./styles.module.scss"

const Career = () => {
	return (
		<div className={styles.career}>
			<div className={styles.career__summary}>
				<h2>My Career So Far</h2>
				<p>
					<b>
						Always up for a challenge, I have worked on several projects with
						numerous colleagues and was a participant in the seventh cohort of
						ALX-Africa, a bootcamp aimed at building future Software Engineers.
						During this appenticeship, I wrote bash and C scripts for various
						applications, conducted unit testing for code written, implemented
						code changes based on feedback received.
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
