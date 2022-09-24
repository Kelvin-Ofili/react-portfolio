import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Projects from "./components/Projects";
import Certification from "./components/about/Certification";
import Contact from "./components/Contact";
import { useState } from "react";

const AnimatedRoutes = () => {
	const [projectClicked, setProjectClicked] = useState(null);
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route
				path="projects"
				element={
					<Projects
						projectClicked={projectClicked}
						setProjectClicked={setProjectClicked}
					/>
				}
			/>
			<Route path="contact" element={<Contact />} />
			<Route path="about/certification" element={<Certification />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default AnimatedRoutes;
