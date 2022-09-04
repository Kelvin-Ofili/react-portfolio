import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const mailer = () => {
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
	};
	return (
		<div className="container">
			<div className="contact-more-btn">
				<Link to="/" className="btn">
					Home
				</Link>
				<h1 className="touch">Get In Touch</h1>
				<Link to="/about" className="btn">
					About
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
						<input type="text" name="name" placeholder="Full Name" />
					</div>
					<div className="contact-mail">
						<input type="email" name="user_email" placeholder="Your Email" />
					</div>
				</div>
				<div className="message">
					<textarea name="name" rows="4" placeholder="Tell me what you need" />
				</div>
				<div className="send-btn-div">
					<input type="submit" value="send" className="contact-btn btn" />
				</div>
			</form>
			<div className="contact-more-btn">
				<Link to="/projects" className="btn">
					Projects
				</Link>
				<Socials />
				<Link to="/profile" className="btn">
					Profile
				</Link>
			</div>
		</div>
	);
};

export default mailer;
