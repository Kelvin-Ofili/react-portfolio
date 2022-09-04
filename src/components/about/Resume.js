import { Link } from "react-router-dom";
const Resume = () => {
	return (
		<div className="resume">
			<section className="resume-div">
				<a href="https://drive.google.com/file/d/1iErNG4c6fiNptf1UN_bSkPtdJSUQAs9s/view?usp=sharing">
					<h3>Resume</h3>
					<p>
						I am currently an apprentice under ALX-Africa 12-month Software
						Engineering bootcamp, where I collaborate with colleagues in order
						to accomplish daily tasks. I am a great team player and always
						available to help whenever I can, for the good of the common goal.
						<p style={{ textDecoration: "underline" }}>Click to see details</p>
					</p>
				</a>
			</section>
			<section className="cover-letter">
				<a href="https://docs.google.com/document/d/1fH7mV6G7ygKboIGYQzODU0BVXohR1B-c/edit?usp=sharing&ouid=102685088689711231763&rtpof=true&sd=true">
					<h3>Cover Letter</h3>
					<p>
						I am a results-oriented college student (3.76 GPA, BSc in Systems
						Engineering) currently attending University of Lagos. While working
						on academic and extracurricular projects, I have developed proven
						technical, problem-solving and analytical skills, which I hope to
						leverage into the Software Engineering role at your company. <br />
						<p style={{ textDecoration: "underline" }}>Click to view full</p>
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
						<p style={{ textDecoration: "underline" }}>Click to see</p>
					</p>
				</Link>
			</section>
		</div>
	);
};

export default Resume;
