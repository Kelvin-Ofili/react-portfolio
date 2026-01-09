import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Hamburger } from "../hamburger";

interface GlassProps {
	children?: any;
	className?: "top" | "bottom";
}

const GlassPanel: React.FC<GlassProps> = ({ children, className }) => {
	return <div className={`${styles.glass} ${className}`}>{children}</div>;
};

export { GlassPanel };

interface LayoutProps {
	children?: any;
	className?: string;
	hideLogo?: boolean;
	hideNav?: boolean;
}

const LayoutUI: React.FC<LayoutProps> = ({ children, className, hideLogo, hideNav }) => {
	const [clicked, setClicked] = useState(false);
	const handleClicked = () => {
		setClicked(!clicked);
	};
	
	return (
		<div className={styles.layout}>
			<div
				className={`${styles.layout__blackSide} ${styles.layout__sides}`}
			></div>
			<div
				className={`${styles.layout__whiteSide} ${styles.layout__sides}`}
			></div>
			{!hideLogo && (
				<Link to="/" className={styles.logo}>
					Kelvin
				</Link>
			)}
			{!hideNav && (
				<GlassPanel>
					<nav className={styles.navHome}>
						<Link to="/about" className={`btn ${styles.whiteBtn}`}>
							About
						</Link>
						<Link to="/projects" className={`btn ${styles.whiteBtn}`}>
							Projects
						</Link>
						<Link to="/contact" className={`btn ${styles.blackBtn}`}>
							Contact
						</Link>
						<Link to="/certifications" className={`btn ${styles.blackBtn}`}>
							Certificates
						</Link>
					</nav>
					<div className={!clicked ? styles.phoneNavigation : styles.showNav}>
						<div onClick={handleClicked}>
							<Hamburger />
						</div>
						<nav>
							<Link to="/about" className={`btn ${styles.blackBtn}`}>
								About
							</Link>
							<Link to="/projects" className={`btn ${styles.blackBtn}`}>
								Projects
							</Link>
							<Link to="/contact" className={`btn ${styles.blackBtn}`}>
								Contact
							</Link>
							<Link to="/certifications" className={`btn ${styles.blackBtn}`}>
								Certificates
							</Link>
						</nav>
					</div>
				</GlassPanel>
			)}
			{children}
		</div>
	);
};

export { LayoutUI };
