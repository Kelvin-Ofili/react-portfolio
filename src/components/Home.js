import Navigation from "./home/Navigation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Person from "./home/Person";
import Intro from "./home/Intro";
import Welcome from "./home/Welcome";
import Lost from "./home/Lost";

const Home = () => {
	return (
		<motion.div
			className="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Navigation />
			<Link to="/" className="logo">
				Kelvin
			</Link>
			<Person />
			<Intro />
			<Welcome />
			<Lost />
		</motion.div>
	);
};

export default Home;
