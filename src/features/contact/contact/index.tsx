import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Socials } from "../socials";
import { LayoutUI } from "components/layout";
import { Toast } from "components";
import styles from "./styles.module.scss";

const ContactUI = () => {
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
	return (
		<LayoutUI>
			{showToast && (
				<Toast
					message={toastMessage}
					type={toastType}
					onClose={() => setShowToast(false)}
				/>
			)}
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
							name="from_name"
							placeholder="Full Name"
							value={input.name}
							onChange={(e) => setInput({ ...input, name: e.target.value })}
							required
						/>
					</div>
					<div className={styles.contactMail}>
						<input
							type="email"
							name="user_email"
							placeholder="Your Email"
							value={input.mail}
							onChange={(e) => setInput({ ...input, mail: e.target.value })}
							required
						/>
					</div>
				</div>
				<div className={styles.message}>
					<textarea
						name="message"
						rows={4}
						placeholder="Tell me what you need"
						value={input.textArea}
						onChange={(e) => setInput({ ...input, textArea: e.target.value })}
						required
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
