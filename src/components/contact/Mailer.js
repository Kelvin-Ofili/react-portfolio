import emailjs from "emailjs-com";
import { useState } from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Mailer = () => {
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
		<div className="container">
			<div className="contact-more-btn">
				<Link to="/about" className="btn">
					About
				</Link>
				<h1 className="touch">Get In Touch</h1>
				<Link to="/projects" className="btn">
					Projects
				</Link>
			</div>

			<p className="connect">
				If you have any questions or need help; please fill out the form below.
				I will do my best to respond within 1 business day. I look forward to
				hearing from you.
			</p>
			<form className="form" onSubmit={sendEmail}>
				<div className="inputs">
					<div className="contact-name">
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							value={input.name}
							onChange={(e) => setInput({ ...input, name: e.target.value })}
						/>
					</div>
					<div className="contact-mail">
						<input
							type="email"
							name="user_email"
							placeholder="Your Email"
							value={input.mail}
							onChange={(e) => setInput({ ...input, mail: e.target.value })}
						/>
					</div>
				</div>
				<div className="message">
					<textarea
						name="name"
						rows="4"
						placeholder="Tell me what you need"
						value={input.textArea}
						onChange={(e) => setInput({ ...input, textArea: e.target.value })}
					/>
				</div>
				<div className="send-btn-div">
					<input type="submit" value="send" className="contact-btn btn" />
				</div>
			</form>
			<div className="contact-more-btn">
				<Link to="/" className="btn">
					Home
				</Link>
				<Socials />
			</div>
		</div>
	);
};

export default Mailer;
