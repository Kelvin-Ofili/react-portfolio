import React, { useState } from "react";
import { Career } from "features/about/career";
import { Resume } from "features/about/resume";
import { Socials } from "features/contact/socials";
import { Toast } from "components";
import { projects } from "features/projects/project/projectsData";
import { ProjectItem } from "features/projects/projectItem";
import emailjs from "emailjs-com";
import styles from "./styles.module.scss";

const SinglePage = () => {
	const [projectClicked, setProjectClicked] = useState<number | undefined>(undefined);
	const [input, setInput] = useState({ name: "", mail: "", textArea: "" });
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState<"success" | "error">("success");

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_w7xu5pc",
				"template_my103mr",
				e.target,
				"3sucZGMdzcxjzXXBP"
			)
			.then((res) => {
				console.log(res);
				setToastMessage("Message sent successfully! I'll get back to you soon.");
				setToastType("success");
				setShowToast(true);
				setInput({ name: "", mail: "", textArea: "" });
			})
			.catch((err) => {
				console.log(err);
				setToastMessage("Failed to send message. Please try again.");
				setToastType("error");
				setShowToast(true);
			});
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className={styles.singlePage}>
			{showToast && (
				<Toast
					message={toastMessage}
					type={toastType}
					onClose={() => setShowToast(false)}
				/>
			)}
			
			{/* Navigation */}
			<nav className={styles.navigation}>
				<div className={styles.logo}>Kelvin</div>
				<div className={styles.navLinks}>
					<button onClick={() => scrollToSection("home")} className={styles.navBtn}>
						Home
					</button>
					<button onClick={() => scrollToSection("about")} className={styles.navBtn}>
						About
					</button>
					<button onClick={() => scrollToSection("projects")} className={styles.navBtn}>
						Projects
					</button>
					<button onClick={() => scrollToSection("contact")} className={styles.navBtn}>
						Contact
					</button>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.heroLeft}>
						<h1>SOFTWARE</h1>
						<h1>LIVING IN</h1>
					</div>
					<div className={styles.heroRight}>
						<h1>ENGINEER</h1>
						<div className={styles.location}>
							<h4>LAGOS,</h4>
							<h4>NIGERIA.</h4>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className={styles.aboutSection}>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>About Me</h2>
					<div className={styles.aboutIntro}>
						<p>
							Hi There! I am a software engineer passionate about building compelling products. 
							I lean towards frontend development but have experience across the full stack. 
							I'm driven by a deep desire to excel and continuously improve in my work.
						</p>
					</div>
					<Resume />
					<Career />
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className={styles.projectsSection}>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>My Projects</h2>
					<div className={styles.projectsGrid}>
						{projects.map((project) => (
							<ProjectItem
								key={project.id}
								projectId={project.id}
								projectName={project.name}
								projectDescription={project.description}
								projectTools={project.tools}
								projectLink={project.projectLink}
								githubLink={project.githubLink}
								projectImage={project.image}
								projectClicked={projectClicked}
								setProjectClicked={setProjectClicked}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className={styles.contactSection}>
				<div className={styles.sectionContent}>
					<h2 className={styles.sectionTitle}>Get In Touch</h2>
					<p className={styles.contactDescription}>
						If you have any questions or need help, please fill out the form below.
						I will do my best to respond within 1 business day. I look forward to
						hearing from you.
					</p>
					<form className={styles.contactForm} onSubmit={sendEmail}>
						<div className={styles.formRow}>
							<input
								type="text"
								name="from_name"
								placeholder="Full Name"
								value={input.name}
								onChange={(e) => setInput({ ...input, name: e.target.value })}
								required
							/>
							<input
								type="email"
								name="user_email"
								placeholder="Your Email"
								value={input.mail}
								onChange={(e) => setInput({ ...input, mail: e.target.value })}
								required
							/>
						</div>
						<textarea
							name="message"
							rows={6}
							placeholder="Tell me what you need"
							value={input.textArea}
							onChange={(e) => setInput({ ...input, textArea: e.target.value })}
							required
						/>
						<button type="submit" className={styles.submitBtn}>
							Send Message
						</button>
					</form>
					<Socials />
				</div>
			</section>

			{/* Footer */}
			<footer className={styles.footer}>
				<p>© 2026 Kelvin Ofili. All rights reserved.</p>
			</footer>
		</div>
	);
};

export { SinglePage };
