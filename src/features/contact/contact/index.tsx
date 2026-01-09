import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Socials } from "../socials";
import { LayoutUI } from "components/layout";
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
		<LayoutUI>
			<Link to="/" className={styles.logo}>
				Kelvin
			</Link>
			<div className={styles.navigation}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/certifications">Certifications</Link>
			</div>
			<div className={styles.container}>
				<h1 className={styles.touch}>Get In Touch</h1>

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
			<Socials />
			</div>
		</LayoutUI>
	);
};

export { ContactUI };
