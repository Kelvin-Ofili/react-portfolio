import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { GlassPanel, Hamburger } from "components";

function Navigation() {
	const [clicked, setClicked] = useState(false);
	const handleClicked = () => {
		setClicked(!clicked);
	};
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
			<div
				className={!clicked ? `${styles.phoneNavigation}` : `${styles.showNav}`}
			>
				<div onClick={handleClicked}>
					<Hamburger />
				</div>
				<nav>
					<Link
						to="/about"
						className={`btn ${styles.navHome__btn} ${styles.blackBtn}`}
					>
						About
					</Link>
					<Link
						to="/projects"
						className={`btn ${styles.navHome__btn} ${styles.blackBtn}`}
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
			</div>
		</GlassPanel>
	);
}

export default Navigation;
