import Navigation from "./home/Navigation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Navigation />
			<Link to='/' className="logo">
				Kelvin
			</Link>
			{/* <h1
				style={{
					zIndex: 200,
					color: "white",
					position: "absolute",
					fontFamily: "Aclonica",
					left: "18%",
					top: "50%",
				}}
			>
				Hi, I'm Kelvin ...
				<p>This is just a brief intro to my porfolio. Navigate through, but try not to get lost</p>
			</h1> */}
		</motion.div>
	);
};

export default Home;
