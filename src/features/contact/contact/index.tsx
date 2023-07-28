import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Socials } from "../socials";
import styles from "./styles.module.scss";

const ContactUI = () => {
	const [input, setInput] = useState({ name: "", mail: "", textArea: "" });
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
			})
			.catch((err) => {
				console.log(err);
			});
		setInput({ name: "", mail: "", textArea: "" });
	};
	return (
		<div className={styles.container}>
			<div className={styles.contactMoreBtn}>
				<Link to="/" className={`btn ${styles.btn}`}>
					Home
				</Link>

				<h1 className={styles.touch}>Get In Touch</h1>
				<Link to="/projects" className={`btn ${styles.btn}`}>
					Projects
				</Link>
			</div>

			<p className={styles.connect}>
				If you have any questions or need help; please fill out the form below.
				I will do my best to respond within 1 business day. I look forward to
				hearing from you.
			</p>
			<form className={styles.form} onSubmit={sendEmail}>
				<div className={styles.inputs}>
					<div className={styles.contactName}>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							value={input.name}
							onChange={(e) => setInput({ ...input, name: e.target.value })}
						/>
					</div>
					<div className={styles.contactMail}>
						<input
							type="email"
							name="user_email"
							placeholder="Your Email"
							value={input.mail}
							onChange={(e) => setInput({ ...input, mail: e.target.value })}
						/>
					</div>
				</div>
				<div className={styles.message}>
					<textarea
						name="name"
						rows={4}
						placeholder="Tell me what you need"
						value={input.textArea}
						onChange={(e) => setInput({ ...input, textArea: e.target.value })}
					/>
				</div>
				<div className={styles.sendBtnDiv}>
					<input
						type="submit"
						value="send"
						className={`${styles.contactBtn} ${styles.btn}`}
					/>
				</div>
			</form>
			<div className={styles.contactMoreBtn}>
				<Link to="/about" className={`btn ${styles.btn}`}>
					About
				</Link>
				<Socials />
				<Link to="/certifications" className={`btn ${styles.btn}`}>
					Certificates
				</Link>
			</div>
		</div>
	);
};

export { ContactUI };
