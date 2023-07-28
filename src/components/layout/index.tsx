import React from "react";
import styles from "./styles.module.scss";

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
}

const LayoutUI: React.FC<LayoutProps> = ({ children, className }) => {
	return (
		<div className={styles.layout}>
			<div
				className={`${styles.layout__blackSide} ${styles.layout__sides}`}
			></div>
			<div
				className={`${styles.layout__whiteSide} ${styles.layout__sides}`}
			></div>
			{children}
		</div>
	);
};

export { LayoutUI };
