import Mailer from "./contact/Mailer";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.div
			className="contact"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", duration: 1, bounce: 0.3 }}
		>
			<Mailer />
		</motion.div>
	);
};

export default Contact;
