import { Link } from "react-router-dom";

const ErrorUI = () => {
	return (
		<div>
			<h2>404</h2>
			<p>Page not found</p>
			<Link to="/" className="btn">
				Back Home
			</Link>
		</div>
	);
};

export { ErrorUI };
