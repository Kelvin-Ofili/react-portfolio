import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
const Resume = () => {
	return (
		<div className={styles.resume}>
			<section className={styles.resumeDiv}>
				<a
					href="https://drive.google.com/file/d/1zxCm34eHcvD8j0rxYCusbjHop3NnDhv5/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					<h3>Resume</h3>
					<p>
						I am a great team player and always available to help whenever I can, 
						for the good of the common goal. I collaborate effectively with colleagues 
						to accomplish tasks and deliver quality results.
						<br />
						<b style={{ textDecoration: "underline" }}>Click to see details</b>
					</p>
				</a>
			</section>
			<section className={styles.blogPosts}>
				<a
					href="https://kelvinofili.hashnode.dev/"
					target="_blank"
					rel="noreferrer"
				>
					<h3>Blog Posts</h3>
					<p>
						I am a results-oriented college student (BSc in Systems Engineering) 
						currently attending University of Lagos. While working on academic and 
						extracurricular projects, I have developed proven technical, problem-solving 
						and analytical skills, which I have used to write several articles on various 
						programming concepts. <br />
						<b style={{ textDecoration: "underline" }}>Click to check out</b>
					</p>
				</a>
			</section>
		</div>
	);
};

export { Resume };
