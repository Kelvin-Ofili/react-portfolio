import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { GlassPanel } from "components";

function Navigation() {
	return (
		<GlassPanel>
			<nav className={styles.navHome}>
				<Link
					to="/about"
					className={`btn ${styles.navHome__btn} ${styles.whiteBtn}`}
				>
					About
				</Link>
				<Link
					to="/projects"
					className={`btn ${styles.navHome__btn} ${styles.whiteBtn}`}
				>
					Projects
				</Link>
				<Link
					to="/contact"
					className={`btn ${styles.navHome__btn} ${styles.blackBtn}`}
				>
					Contact
				</Link>
				<Link
					to="/certifications"
					className={`btn ${styles.navHome__btn} ${styles.blackBtn}`}
				>
					Cerificates
				</Link>
			</nav>
		</GlassPanel>
	);
}

export default Navigation;
