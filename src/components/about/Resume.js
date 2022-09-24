import { Link } from "react-router-dom";
const Resume = () => {
	return (
		<div className="resume">
			<section className="resume-div">
				<a
					href="https://drive.google.com/file/d/1iErNG4c6fiNptf1UN_bSkPtdJSUQAs9s/view?usp=sharing"
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
			<section className="blog-posts">
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
						to write several unpublished articles on various programming concepts. <br />
						<b style={{ textDecoration: "underline" }}>Click to check out</b>
					</p>
				</a>
			</section>
			<section className="skills">
				<Link to="/about/certification">
					<h3>Skills and Certifications</h3>
					<p>
						I've worked with a variety of programming languages, frameworks,
						libraries, packages, and tools for years. I began with HTML and
						worked my way up from there. I am now conversant with a variety of
						programming languages and frameworks, including JavaScript, React,
						expressAPI, Python, C, and so on. Check out the complete list below.
						<br />
						<b style={{ textDecoration: "underline" }}>Click to see</b>
					</p>
				</Link>
			</section>
		</div>
	);
};

export default Resume;
