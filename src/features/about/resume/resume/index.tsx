import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
const Resume = () => {
	return (
		<div className={styles.resume}>
			<section className={styles.resumeDiv}>
				<a
					href="https://drive.google.com/file/d/1_N_dp4wBmFv0tOQ8G2lt18ZseBcnZAYn/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					<h3>Resume</h3>
					<p>
						I am currently an apprentice under ALX-Africa 12-month Software
						Engineering bootcamp, where I collaborate with colleagues in order
						to accomplish daily tasks. I am a great team player and always
						available to help whenever I can, for the good of the common goal.
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
						I am a results-oriented college student (3.76 GPA, BSc in Systems
						Engineering) currently attending University of Lagos. While working
						on academic and extracurricular projects, I have developed proven
						technical, problem-solving and analytical skills, which I have used
						to write several unpublished articles on various programming
						concepts. <br />
						<b style={{ textDecoration: "underline" }}>Click to check out</b>
					</p>
				</a>
			</section>
		</div>
	);
};

export { Resume };
