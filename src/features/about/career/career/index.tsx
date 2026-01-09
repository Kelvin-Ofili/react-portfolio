import React from "react";
import styles from "./styles.module.scss"

const Career = () => {
	return (
		<div className={styles.career}>
			<div className={styles.career__summary}>
				<h2>My Career So Far</h2>
				<p>
					<b>
						I've had the privilege of interning twice at Goldman Sachs - first as a Site Reliability Engineering intern and then as a Fullstack Engineer. Between these internships, I contributed to Greensol, a Lagos-based startup, where I worked as both a QA Tester and Mobile Engineer. Throughout my journey, I've written bash and C scripts, conducted comprehensive unit testing, and implemented code changes based on feedback received.
					</b>
				</p>
			</div>
		</div>
	);
};

export { Career };
