import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ErrorUI = () => {
	return (
		<div className={styles.errorContainer}>
			<h2>404</h2>
			<p>Page not found</p>
			<Link to="/" className="btn">
				Back Home
			</Link>
		</div>
	);
};

export { ErrorUI };
