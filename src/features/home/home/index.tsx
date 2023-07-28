import React from "react";
import Navigation from "../navigation";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { LayoutUI } from "components/layout";

const HomeUI = () => {
	return (
		<LayoutUI className={styles.content}>
			<Navigation />
			<Link to="/" className={styles.logo}>
				Kelvin
			</Link>
			<div className={styles.content__div}>
				<div className={styles.content__div__left}>
					<h1>SOFTWARE</h1>
					<h1>LIVING IN</h1>
				</div>
				<div className={styles.content__div__right}>
					<h1>ENGINEER</h1>
					<div className={styles.content__div__right__smallerDiv}>
						<h4>LAGOS,</h4>
						<h4> NIGERIA.</h4>
					</div>
				</div>
			</div>
		</LayoutUI>
	);
};

export { HomeUI };
