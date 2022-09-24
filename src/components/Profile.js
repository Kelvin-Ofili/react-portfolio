import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Person from "./profile/Person";
const Profile = () => {
	return (
		<motion.div
			className="profile"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", duration: 1, bounce: 0.3 }}
		>
			<div className="profile-more-btn">
				<Link to="/projects" className="btn">
					Projects
				</Link>
				<Link to="/contact" className="btn">
					Contact
				</Link>
			</div>
			<Person />
			<div className="profile-more-btn">
				<Link to="/about" className="btn">
					About
				</Link>
				<Link to="/" className="btn">
					Home
				</Link>
			</div>
		</motion.div>
	);
};
export default Profile;
